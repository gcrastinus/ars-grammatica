#!/usr/bin/env node
/**
 * make_text.js — regenerate GRAMMATICA-TEXT.txt from index.html
 *
 * Run (from this folder, with Node.js installed):
 *   node make_text.js
 *
 * Options:
 *   node make_text.js --html index.html --out GRAMMATICA-TEXT.txt
 *
 * Canonical source: index.html (DECKS / EX / ACTS). Does not modify the app.
 */
'use strict';

function decodeEntities(s) {
  return String(s)
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–')
    .replace(/&hellip;/g, '…')
    .replace(/&lsquo;/g, '‘')
    .replace(/&rsquo;/g, '’')
    .replace(/&ldquo;/g, '“')
    .replace(/&rdquo;/g, '”')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, n) => String.fromCharCode(parseInt(n, 16)));
}

/** Convert a panel/question HTML fragment to TEXT markup (*italic*, **bold**). */
function htmlToMarkup(html) {
  if (!html) return '';
  let s = String(html);
  // Diagrams (inline SVG): keep only their description, so the strokes do not leak into the text
  s = s.replace(/<svg\b[^>]*?aria-label="([^"]*)"[^>]*>[\s\S]*?<\/svg>/gi, (_, a) => `[Diagram: ${decodeEntities(a)}]`);
  s = s.replace(/<svg\b[\s\S]*?<\/svg>/gi, '[Diagram]');
  // Preserve intentional line breaks before stripping
  s = s.replace(/<br\s*\/?>/gi, '\n');
  s = s.replace(/<\/p>/gi, '\n\n');
  s = s.replace(/<p[^>]*>/gi, '');
  s = s.replace(/<\/div>/gi, '\n');
  s = s.replace(/<div[^>]*>/gi, '');
  s = s.replace(/<\/li>/gi, '\n');
  s = s.replace(/<li[^>]*>/gi, '- ');
  s = s.replace(/<\/?ul[^>]*>/gi, '\n');
  s = s.replace(/<\/?ol[^>]*>/gi, '\n');
  // bold / strong before italic (avoid nesting issues)
  s = s.replace(/<(strong|b)(\s[^>]*)?>([\s\S]*?)<\/\1>/gi, (_, _t, _a, inner) => `**${inner}**`);
  s = s.replace(/<(em|i)(\s[^>]*)?>([\s\S]*?)<\/\1>/gi, (_, _t, _a, inner) => `*${inner}*`);
  s = s.replace(/<span[^>]*class=["'][^"']*\blat\b[^"']*["'][^>]*>([\s\S]*?)<\/span>/gi, (_, inner) => `*${inner}*`);
  s = s.replace(/<span[^>]*>([\s\S]*?)<\/span>/gi, '$1');
  s = s.replace(/<[^>]+>/g, '');
  s = decodeEntities(s);
  // tidy whitespace inside lines but keep paragraph breaks
  s = s.replace(/[ \t]+\n/g, '\n').replace(/\n[ \t]+/g, '\n');
  s = s.replace(/[ \t]{2,}/g, ' ');
  s = s.replace(/\n{3,}/g, '\n\n');
  return s.trim();
}

function stripMarkupToPlain(s) {
  return String(s).replace(/\*\*/g, '').replace(/\*/g, '').trim();
}

function sourcesLine(srcKeys, SRC) {
  if (!srcKeys || !srcKeys.length || !SRC) return '';
  const parts = [];
  for (const k of srcKeys) {
    const rec = SRC[k];
    if (!rec) continue;
    let short = htmlToMarkup(rec.short || k);
    parts.push(short);
  }
  return parts.length ? 'Sources: ' + parts.join('; ') : '';
}

function formatQuestion(q) {
  if (!q) return '';
  const lines = [];
  if (q.passage) { lines.push('Passage: ' + htmlToMarkup(q.passage).replace(/\n+/g, ' / ').trim()); lines.push(''); }
  if (q.sentence) { lines.push('Sentence: ' + htmlToMarkup(q.sentence).replace(/\n+/g, ' / ').trim()); lines.push(''); }
  if (q.source) { lines.push('From: ' + htmlToMarkup(q.source).replace(/\n+/g, ' ').trim()); lines.push(''); }
  const prompt = htmlToMarkup(q.prompt || q.q || '');
  lines.push('Question: ' + prompt.replace(/\n+/g, ' ').trim());
  lines.push('');
  const options = q.options || [];
  if (Array.isArray(q.rows) && q.rows.length && q.want) {
    lines.push('Choices:');
    for (const r of q.rows) lines.push('- ' + htmlToMarkup(r.label) + ': ' + r.opts.map(o => htmlToMarkup(o.label)).join(' / '));
    lines.push('');
    lines.push('Answer: ' + q.rows.map(r => {
      const o = r.opts.find(x => String(x.v) === String(q.want[r.key]));
      return htmlToMarkup(r.label) + ', ' + (o ? htmlToMarkup(o.label) : String(q.want[r.key]));
    }).join('; '));
  } else if (options.length) {
    lines.push('Choices:');
    for (const o of options) lines.push('- ' + htmlToMarkup(o).replace(/\n+/g, ' ').trim());
    lines.push('');
    const ci = typeof q.correct === 'number' ? q.correct : options.indexOf(q.a || q.answer);
    const ans = (ci >= 0 && options[ci] != null) ? options[ci] : (q.a || q.answer || '');
    lines.push('Answer: ' + htmlToMarkup(ans).replace(/\n+/g, ' ').trim());
  } else if (q.a || q.answer) {
    lines.push('Answer: ' + htmlToMarkup(q.a || q.answer).replace(/\n+/g, ' ').trim());
  }
  const why = q.explain || q.why || q.note || '';
  if (why) {
    lines.push('');
    lines.push('Why: ' + htmlToMarkup(why).replace(/\n+/g, ' ').trim());
  }
  if (q.also) {
    lines.push('');
    lines.push('Also: ' + htmlToMarkup(q.also).replace(/\n+/g, ' ').trim());
  }
  if (q.hint) {
    lines.push('');
    lines.push('Hint: ' + htmlToMarkup(q.hint).replace(/\n+/g, ' ').trim());
  }
  return lines.join('\n');
}

function formatPanel(panel, index1, SRC) {
  const chunks = [];
  chunks.push(`@panel ${index1}`);
  chunks.push('');
  if (panel.h) {
    chunks.push(htmlToMarkup(panel.h));
    chunks.push('');
  }
  if (panel.q) {
    chunks.push(formatQuestion(panel.q));
    chunks.push('');
  }
  // multi-stage panels
  if (Array.isArray(panel.stages)) {
    panel.stages.forEach((st, i) => {
      if (st.h) { chunks.push(htmlToMarkup(st.h)); chunks.push(''); }
      if (st.q) { chunks.push(formatQuestion(st.q)); chunks.push(''); }
    });
  }
  const src = sourcesLine(panel.src, SRC);
  if (src) { chunks.push(src); chunks.push(''); }
  return chunks.join('\n').replace(/\n{3,}/g, '\n\n').trim() + '\n';
}


const fs = require('fs');
const path = require('path');
const vm = require('vm');

function parseArgs(argv) {
  const out = { html: null, outFile: null };
  for (let i = 2; i < argv.length; i++) {
    if (argv[i] === '--html') out.html = argv[++i];
    else if (argv[i] === '--out') out.outFile = argv[++i];
  }
  return out;
}

function el() {
  return {
    style: {}, classList: { add() {}, remove() {}, toggle() {}, contains() { return false; } },
    textContent: '', innerHTML: '', value: '', checked: false, disabled: false, dataset: {},
    children: [], childNodes: [], firstChild: null, parentNode: null,
    appendChild(c) { return c; }, removeChild() {}, remove() {},
    setAttribute() {}, getAttribute() { return null; }, removeAttribute() {},
    addEventListener() {}, removeEventListener() {},
    focus() {}, blur() {}, click() {}, querySelector() { return null; }, querySelectorAll() { return []; },
  };
}

function loadApp(htmlPath) {
  const html = fs.readFileSync(htmlPath, 'utf8');
  const all = [...html.matchAll(/<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/gi)].map(m => m[1]).join('\n;\n');
  let cut = all.indexOf('/* ---- text-to-speech');
  if (cut < 0) cut = all.indexOf('function speechReader');
  if (cut < 0) cut = all.length;
  // greek.js (beside index.html) defines window.GREEK; the app builds its Greek deck, paradigms and exercise from it.
  const greekPath = path.join(path.dirname(htmlPath), 'greek.js');
  const greekCode = fs.existsSync(greekPath) ? fs.readFileSync(greekPath, 'utf8') + '\n;\n' : '';
  const dataCode = greekCode + all.slice(0, cut)
    + `\n; this.__EXPORT = { DECKS, EX, ACTS, SRC, GRK: typeof GRK === 'undefined' ? null : GRK, store, state };\n`;
  const sandbox = {
    console, Math, Date, Array, Object, String, Number, Boolean, JSON, RegExp, Error, Map, Set,
    parseInt, parseFloat, isNaN, Infinity, undefined, NaN, setTimeout, clearTimeout,
    document: {
      getElementById: () => el(), querySelector: () => el(), querySelectorAll: () => [],
      createElement: () => el(), body: el(), documentElement: el(),
      addEventListener() {}, createTextNode: t => ({ textContent: t }),
    },
    localStorage: { getItem() { return null; }, setItem() {}, removeItem() {} },
    sessionStorage: { getItem() { return null; }, setItem() {}, removeItem() {} },
    location: { href: '', hash: '', pathname: '/' },
    navigator: { language: 'en', userAgent: 'node' },
    speechSynthesis: { getVoices() { return []; }, speak() {}, cancel() {} },
    SpeechSynthesisUtterance: function () {},
    requestAnimationFrame: () => 0,
    matchMedia: () => ({ matches: false, addEventListener() {} }),
    getComputedStyle: () => new Proxy({}, { get: () => '' }),
  };
  sandbox.window = sandbox;
  sandbox.globalThis = sandbox;
  sandbox.$ = () => el();
  vm.runInNewContext(dataCode, sandbox, { timeout: 20000 });
  return sandbox.__EXPORT;
}

function seededRandom(seed0) {
  let seed = seed0 >>> 0 || 1;
  return function () {
    seed = (Math.imul(1103515245, seed) + 12345) >>> 0;
    return (seed % 10000) / 10000;
  };
}

function classifyPrompt(item) {
  // Group exercise items into "kinds" by a normalized prompt skeleton.
  const p = htmlToMarkup(item.prompt || item.q || '').replace(/\n+/g, ' ').trim();
  return p
    .replace(/\*+[^*]+\*+/g, '…')
    .replace(/“[^”]+”/g, '…')
    .replace(/"[^"]+"/g, '…')
    .replace(/'[^']+'/g, '…')
    .replace(/\b[A-ZĀĒĪŌŪÆ][A-Za-zāēīōūÿÄÖÜäöüß\-]*\b/g, '…')
    .replace(/\d+/g, '…')
    .replace(/\s+/g, ' ')
    .trim() || 'misc';
}

function sampleExercise(ex, rand, maxPerKind = 3) {
  if (!ex || typeof ex.gen !== 'function') return { kinds: [], notes: 'no gen()' };
  const byKind = new Map();
  const seenIds = new Set();
  // Collect across difficulties
  for (let d = 1; d <= 5; d++) {
    for (let n = 0; n < 80; n++) {
      let item;
      try { item = ex.gen(d); } catch (e) { continue; }
      if (!item) continue;
      const id = item.sid || item.id || JSON.stringify([item.prompt, item.correct, item.options]);
      if (seenIds.has(id)) continue;
      seenIds.add(id);
      const kind = classifyPrompt(item);
      if (!byKind.has(kind)) byKind.set(kind, []);
      const arr = byKind.get(kind);
      if (arr.length < maxPerKind) {
        arr.push({ item, difficulty: d });
      }
    }
  }
  return { kinds: [...byKind.entries()], notes: `${seenIds.size} unique items` };
}

function formatExample(exItem, exampleNum, difficulty) {
  const item = exItem.item || exItem;
  const lines = [];
  lines.push(`@example ${exampleNum}`);
  const id = item.sid || item.id;
  if (id) lines.push(`id: ${id}`);
  lines.push(`difficulty: ${difficulty || 1}`);
  lines.push('');
  // normalize to formatQuestion shape
  const q = {
    prompt: item.prompt || item.q,
    sentence: item.sentence,
    passage: item.passage,
    source: item.source,
    rows: item.rows,
    want: item.want,
    options: item.options || (Array.isArray(item.words) ? item.words.map(w => w.t) : undefined),
    correct: item.correct,
    a: item.a,
    explain: item.explain || item.why,
  };
  // Some items expose check() instead of explain — try to recover why via a correct answer call
  // Chips: the right chip in each row comes back as r.mark when the item is checked.
  if (typeof item.check === 'function' && item.kind === 'chips' && Array.isArray(item.rows)) {
    try {
      const r = item.check({});
      if (r && r.mark && !q.want) q.want = r.mark;
      if (r && r.note && !q.explain) q.explain = r.note;
    } catch (_) {}
  }
  // Typed answers: the explanation, and the expected form when the app states it in bold.
  if (typeof item.check === 'function' && item.kind === 'text') {
    try {
      const r = item.check('');
      if (r && r.note && !q.explain) q.explain = r.note;
      const m = r && r.also && /<strong>([\s\S]*?)<\/strong>/.exec(r.also);
      if (m && !q.a) q.a = m[1];
    } catch (_) {}
  }
  if (!q.explain && typeof item.check === 'function' && typeof q.correct === 'number') {
    try {
      const r = item.check(q.correct);
      if (r && r.note) q.explain = r.note;
    } catch (_) {}
  }
  lines.push(formatQuestion(q));
  lines.push('');
  return lines.join('\n');
}

function introBlurb() {
  return `ARS GRAMMATICA — all the words, in the order you meet them
==========================================================

Scroll and you move through the course: an act, then a card, then the text of that card. Study cards, tutorials, and orientations are here in full, including each question with its answer and its explanation.

Exercises are not here in full. For each kind of question the exercise asks, three examples are given, with the answer and the explanation, so the wording can be checked. Where a topic has only one or two questions, those are the whole of it.

How to edit
-----------
Change the sentences in place. Send the file back and the wording will be put back on the same card, or into the same kind of question.

Each paragraph is a single line, except where a passage is several lines on purpose. A blank line starts a new paragraph.

Leave these lines alone. They say where a block belongs:
  a line that starts with @
  a line that starts with id:
  a line that starts with difficulty:
  a line of hyphens or hash marks
  a line in [square brackets] standing on its own

You can edit the words after Title: and Small heading:.

Marks inside the sentences
--------------------------
*these words* are italic on the page.
**these words** are bold. In a drill, bold is also the marked word or the stretch you click.
A line that starts with - is one item in a list, or one choice.
The line Answer: is what the app counts as right. If you change it, keep it the same as one of the Choices, or write the form the blank asks for.
Why: is the explanation shown after the answer.
Also: is a further remark the app may show.
Hint: is the help shown at the easier difficulties.
Sentence: or Passage: is the text the question is about.
From: names the work the passage comes from.
Sources: names the works that panel rests on.
`;
}

function courseLeadIn(html) {
  // The homepage wording is the course’s own. Keep this text the same as that page.
  return `Ars Grammatica
The first art of the trivium

**Grammar is the art of speaking and writing correctly.** It is the first of the liberal arts, especially of the first of the trivium, the three arts of language (grammar, logic, and rhetoric). It is first because logic works on statements and rhetoric brings statements together for a purpose; but grammar is the art that governs how words can be combined to form statements correctly and thus grammar is presupposed by the other arts. This course builds from the voice to the sentence, gives the traditional names in the appropriate places, and considers the more general question of why the parts of speech are the way they are. The course also considers English grammar itself in some detail, as well as the chief grammars of other great traditions of learning, and finally this course engages with modern linguistics on universal grammar and syntax.

The partner language
English and **Latin** are the primary languages used in every part of the course.
Latin is the tradition’s own language, and every technical term here is a Latin term.
Partner language: coming soon. A later version will teach the grammar of a third language and some of the art of using it.
`;
}

function buildToc(ACTS, EX) {
  const lines = ['The parts', '---------', ''];
  for (const act of ACTS) {
    const head = act.roman ? `${act.roman}. ${act.name}` : act.name;
    lines.push(head);
    for (const it of act.items || []) {
      if (it.kind === 'deck') {
        const tag = it.tag || 'STUDY';
        lines.push(`    ${tag} — ${it.title}`);
      } else if (it.kind === 'ex') {
        const ex = EX[it.ex];
        const title = (ex && ex.title) || it.ex;
        lines.push(`    ex — ${title}`);
      }
    }
  }
  lines.push('');
  return lines.join('\n');
}

function actBanner(act) {
  const bar = '#'.repeat(72);
  const title = act.roman ? `# ${act.roman}. ${act.name}` : `# ${act.name}`;
  const lat = act.latin ? `# ${act.latin}` : null;
  const lines = [bar, title];
  if (lat) lines.push(lat);
  lines.push(bar, '');
  if (act.gloss) lines.push(act.gloss, '');
  return lines.join('\n');
}

function emitDeck(key, deck, SRC) {
  const lines = [];
  lines.push('-'.repeat(72));
  lines.push(`STUDY — ${deck.title}`);
  if (deck.sub) lines.push(deck.sub);
  lines.push('-'.repeat(72));
  lines.push('');
  lines.push(`@deck ${key}`);
  lines.push(`Title: ${deck.title}`);
  if (deck.sub) lines.push(`Small heading: ${deck.sub}`);
  lines.push('');
  (deck.panels || []).forEach((p, i) => {
    lines.push(formatPanel(p, i + 1, SRC));
    lines.push('');
  });
  return lines.join('\n');
}

function emitExercise(key, ex, rand, SRC) {
  const lines = [];
  lines.push(`@exercise ${key}`);
  lines.push(`Title: ${ex.title || key}`);
  lines.push('');
  if (ex.desc) {
    lines.push(htmlToMarkup(ex.desc));
    lines.push('');
  }
  // Optional prose blurb fields some exercises carry
  if (ex.blurb) { lines.push(htmlToMarkup(ex.blurb)); lines.push(''); }
  if (ex.notes) { lines.push(htmlToMarkup(ex.notes)); lines.push(''); }

  if (ex.free) {
    // Writing from a Model: every task with its model sentence and checklist
    if (ex.instr) { lines.push('Instruction on the task: ' + htmlToMarkup(ex.instr).replace(/\n+/g, ' ').trim()); lines.push(''); }
    // Draw the tasks with a separate random stream, then use the main stream exactly as the sampler
    // would have, so that the samples printed for every later exercise stay the same.
    const tasks = new Map();
    const mainRandom = Math.random;
    Math.random = seededRandom(1);
    for (let n = 0; n < 600 && tasks.size < 200; n++) {
      let item;
      try { item = ex.gen(1); } catch (e) { continue; }
      if (!item || tasks.has(item.sid)) continue;
      tasks.set(item.sid, item);
    }
    Math.random = mainRandom;
    sampleExercise(ex, rand, 3);
    const list = [...tasks.values()].sort((a, b) => {
      const pa = a.sid.match(/fw(e|l)(\d+)/), pb = b.sid.match(/fw(e|l)(\d+)/);
      return pa[1] === pb[1] ? (+pa[2]) - (+pb[2]) : (pa[1] === 'e' ? -1 : 1);
    });
    lines.push(`Each task is printed with its model sentence and its checklist. ${list.length} tasks.`);
    lines.push('');
    list.forEach(it => {
      lines.push(`@task ${it.sid.replace(/^fw:/, '')} (${it.lang === 'la' ? 'Latin' : 'English'})`);
      lines.push('Task: ' + htmlToMarkup(it.prompt).replace(/\n+/g, ' ').trim());
      lines.push('Model: ' + htmlToMarkup(it.model).replace(/\n+/g, ' ').trim());
      lines.push('Checklist:');
      (it.checks || []).forEach(c => lines.push('- ' + htmlToMarkup(c).replace(/\n+/g, ' ').trim()));
      lines.push('');
    });
    return lines.join('\n');
  }
  lines.push('Two notes, then the drill. A set is complete at 100 points; correct answers add, wrong answers take away, and the stakes follow the difficulty you chose.');
  lines.push('');
  if (ex.instr) {
    lines.push('Instruction on the question: ' + htmlToMarkup(ex.instr).replace(/\n+/g, ' ').trim());
    lines.push('');
  }
  lines.push('Three examples of each kind of question follow. They are samples, not the whole drill.');
  lines.push('');

  const { kinds } = sampleExercise(ex, rand, 3);
  let kindNum = 0;
  for (const [kindLabel, examples] of kinds) {
    kindNum++;
    // Prefer a readable heading from the first example's prompt skeleton
    const heading = kindLabel.length > 90 ? kindLabel.slice(0, 87) + '…' : kindLabel;
    lines.push(`#### ${kindNum}. ${heading}`);
    lines.push('');
    lines.push(examples.length >= 3
      ? 'Three examples. The app draws more of this kind.'
      : (examples.length === 1 ? 'One example of this kind (the whole of it).' : `${examples.length} examples of this kind.`));
    lines.push('');
    examples.forEach((exItem, i) => {
      lines.push(formatExample(exItem, i + 1, exItem.difficulty));
      lines.push('');
    });
  }
  return lines.join('\n');
}

/** Every Greek item of a shared exercise, drawn as the app draws it with English and Greek chosen. A separate
 *  random stream is used, and the app's state is restored, so that the samples printed elsewhere stay the same. */
function emitGreek(key, ex, app) {
  const pool = app.GRK && app.GRK.shared && app.GRK.shared[key];
  if (!Array.isArray(pool) || !ex.langs || ex.langs.indexOf('grc') < 0) return '';
  const { store, state } = app;
  const mainRandom = Math.random, seen = state.sessionSeen, mode = store.modes[key], lang = store.langs[key];
  Math.random = seededRandom(7);
  store.modes[key] = 'both';
  store.langs[key] = 'grc';
  const lines = ['#### Greek', '', `With English and Greek chosen, these Greek items take the place of the Latin ones. Every Greek item is printed: ${pool.length} items.`, ''];
  pool.forEach((it, i) => {
    let q = null;
    for (let t = 0; t < 400 && !q; t++) {
      state.sessionSeen = pool.filter(x => x.id !== it.id).map(x => x.id);
      let c;
      try { c = ex.gen(5); } catch (e) { c = null; }
      if (c && c.sid === it.id) q = c;
    }
    lines.push(q ? formatExample(q, i + 1, 5) : `@example ${i + 1}\nid: ${it.id}\n(not drawn)\n`);
    lines.push('');
  });
  Math.random = mainRandom;
  state.sessionSeen = seen;
  if (mode === undefined) delete store.modes[key]; else store.modes[key] = mode;
  if (lang === undefined) delete store.langs[key]; else store.langs[key] = lang;
  return lines.join('\n');
}

/** The four Greek sentence exercises and their pools in GREEK.sentence. */
const GREEK_SENTENCE = { grcsent: 'more', grcvoice: 'voice', grcclause: 'clause', grcmood: 'mood' };

/** A Greek sentence exercise: its introduction, then every item, kind by kind, drawn as the app draws it with
 *  tiles (level 2). A separate random stream is used, and the app's state is restored, so that the samples
 *  printed for every other exercise stay the same. */
function emitGreekSentence(key, ex, app) {
  const pool = app.GRK && app.GRK.sentence && app.GRK.sentence[GREEK_SENTENCE[key]];
  if (!Array.isArray(pool)) return '';
  const { state } = app;
  const lines = [`@exercise ${key}`, `Title: ${ex.title || key}`, ''];
  if (ex.desc) { lines.push(htmlToMarkup(ex.desc)); lines.push(''); }
  if (ex.instr) { lines.push('Instruction on the question: ' + htmlToMarkup(ex.instr).replace(/\n+/g, ' ').trim()); lines.push(''); }
  lines.push('Introduction:');
  lines.push('');
  (ex.intro || []).forEach(p => {
    lines.push(htmlToMarkup(p.h).replace(/\n+/g, ' ').trim());
    (p.eg || []).forEach(g => lines.push('Example: ' + htmlToMarkup(g).replace(/\n+/g, ' ').trim()));
    lines.push('');
  });
  lines.push(`The word is chosen from tiles at levels 1 and 2 and typed from level 3. Every item is printed as it is drawn at level 2: ${pool.length} items.`);
  lines.push('');
  const mainRandom = Math.random, seen = state.sessionSeen;
  Math.random = seededRandom(11);
  const kinds = [...new Set(pool.map(it => it.k))];
  let n = 0;
  kinds.forEach(k => {
    const items = pool.filter(it => it.k === k);
    const intro = (ex.intro || [])[kinds.indexOf(k)];
    const head = intro ? (/<strong>([\s\S]*?)<\/strong>/.exec(intro.h) || [])[1] : null;
    lines.push(`#### Kind ${k}${head ? '. ' + htmlToMarkup(head).replace(/\.$/, '').trim() : ''}`);
    lines.push('');
    lines.push(`${items.length} items.`);
    lines.push('');
    items.forEach(it => {
      let q = null;
      for (let t = 0; t < 50 && !q; t++) {
        state.sessionSeen = pool.filter(x => x.id !== it.id).map(x => x.id);
        let c;
        try { c = ex.gen(2); } catch (e) { c = null; }
        if (c && c.sid === 'gs:' + it.id) q = c;
      }
      n++;
      lines.push(q ? formatExample(q, n, 2) : `@example ${n}\nid: ${it.id}\n(not drawn)\n`);
      lines.push('');
    });
  });
  Math.random = mainRandom;
  state.sessionSeen = seen;
  return lines.join('\n');
}

function buildText({ DECKS, EX, ACTS, SRC, GRK, store, state }, htmlPath) {
  const html = fs.readFileSync(htmlPath, 'utf8');
  // Seed Math.random for reproducible exercise samples
  const rand = seededRandom(20261005);
  const orig = Math.random;
  Math.random = rand;

  const parts = [];
  parts.push(introBlurb());
  parts.push('');
  parts.push(courseLeadIn(html));
  parts.push('');
  parts.push(buildToc(ACTS, EX));
  parts.push('');
  parts.push('='.repeat(58));
  parts.push('');

  for (const act of ACTS) {
    parts.push(actBanner(act));
    for (const it of act.items || []) {
      if (it.kind === 'deck') {
        const deck = DECKS[it.deck];
        if (!deck) continue;
        parts.push(emitDeck(it.deck, deck, SRC));
        parts.push('');
      } else if (it.kind === 'ex') {
        const ex = EX[it.ex];
        if (!ex) continue;
        // study separator line like the original
        parts.push('-'.repeat(72));
        parts.push(`EXERCISE — ${ex.title || it.ex}`);
        if (ex.desc) parts.push(htmlToMarkup(ex.desc).replace(/\n+/g, ' ').trim());
        parts.push('-'.repeat(72));
        parts.push('');
        parts.push(GREEK_SENTENCE[it.ex] ? emitGreekSentence(it.ex, ex, { GRK, state }) : emitExercise(it.ex, ex, rand, SRC));
        const greek = emitGreek(it.ex, ex, { GRK, store, state });
        if (greek) parts.push(greek);
        parts.push('');
      }
    }
  }

  Math.random = orig;
  return parts.join('\n').replace(/[ \t]+\n/g, '\n').replace(/\n{4,}/g, '\n\n\n').trim() + '\n';
}

function main() {
  const args = parseArgs(process.argv);
  const here = process.cwd();
  const htmlPath = path.resolve(args.html || path.join(here, 'index.html'));
  const outPath = path.resolve(args.outFile || path.join(here, 'GRAMMATICA-TEXT.txt'));
  if (!fs.existsSync(htmlPath)) {
    console.error('Missing index.html at', htmlPath);
    process.exit(1);
  }
  const data = loadApp(htmlPath);
  if (!data.DECKS || !data.ACTS) {
    console.error('Failed to load DECKS/ACTS from', htmlPath);
    process.exit(1);
  }
  const text = buildText(data, htmlPath);
  fs.writeFileSync(outPath, text, 'utf8');
  console.log('Wrote', outPath, `(${text.length} chars, ${text.split(/\n/).length} lines)`);
}

if (require.main === module) main();
module.exports = { loadApp, buildText };
