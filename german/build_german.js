#!/usr/bin/env node
/**
 * build_german.js: read the German JSON files in this folder and write german.js at the repository root.
 * german.js defines one global, window.GERMAN = {vocab, paradigms, cards, shared}, with every string exactly as it
 * stands in the JSON. GERMAN.shared holds the German pools of the shared exercises (the arrays of german-items.json).
 * The cards that GERMAN-STEP1-REPORT.md lists as unsure are left out here (LEFT_OUT below); the JSON files
 * themselves are the draft files, unchanged. Run from the repository root:
 *   node german/build_german.js
 */
'use strict';
const fs = require('fs');
const path = require('path');

const here = __dirname;
const out = path.join(here, '..', 'german.js');
const read = name => JSON.parse(fs.readFileSync(path.join(here, 'german-' + name + '.json'), 'utf8'));
const vocab = read('vocab'), paradigms = read('paradigms'), cards = read('cards'), items = read('items');

/* Left out because GERMAN-STEP1-REPORT.md, section 5, lists the point each one rests on as unsure. The report
   names no item whose key rests on one of those points. */
const LEFT_OUT = {
  items: {},
  cards: {
    'Personal pronouns': 'section 5, point 3: the entries for er, es, seiner, wir, uns, euch, and ihr were not opened',
    'The two-way preposition': 'section 5, point 7: an, auf, hinter, neben, über, unter, vor, and zwischen were not on the page opened',
    'Umlauts and ß': 'section 5, point 9: no page for dass was opened'
  }
};

const problems = [];
Object.keys(LEFT_OUT.items).forEach(id => {
  if(!Object.keys(items).some(k => Array.isArray(items[k]) && items[k].some(it => it.id === id))) problems.push('LEFT_OUT names ' + id + ', which is not in german-items.json');
});
Object.keys(LEFT_OUT.cards).forEach(h => {
  if(!cards.cards.some(c => c.heading === h)) problems.push('LEFT_OUT names the card ' + h + ', which is not in german-cards.json');
});

const shared = {};
Object.keys(items).filter(k => Array.isArray(items[k])).forEach(k => {
  shared[k] = items[k].filter(it => !LEFT_OUT.items[it.id]);
});
const GERMAN = {
  vocab, paradigms,
  cards: Object.assign({}, cards, { cards: cards.cards.filter(c => !LEFT_OUT.cards[c.heading]) }),
  shared
};

/* Every string must already be in Unicode NFC. Nothing here normalizes or rewrites a form. */
(function walk(o, at){
  if(typeof o === 'string'){ if(o !== o.normalize('NFC')) problems.push(at + ' is not NFC: ' + o); return; }
  if(o && typeof o === 'object') for(const k of Object.keys(o)) walk(o[k], at + '.' + k);
})(GERMAN, 'GERMAN');

/* Grading safety. Typed German is compared without case, with the apostrophe and the spaces made uniform, and with
   ä, ö, ü, and ß written as themselves, as ae, oe, ue, and ss, or as a, o, u (the umlaut left off). These are the
   spellings deuVariants gives in index.html. normDeu reduces a string to the plainest of those spellings, so two
   strings with different normDeu share no accepted spelling. */
const lc = s => String(s || '').normalize('NFC').toLowerCase().replace(/[\u2019']/g, '\u2019').replace(/\s+/g, ' ').trim();
function normDeu(s){
  return lc(String(s || '').replace(/<[^>]*>/g, '')).replace(/ß/g, 'ss').replace(/ae/g, 'a').replace(/oe/g, 'o').replace(/ue/g, 'u')
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '').normalize('NFC');
}
const UMLAUT = {'ä':['ä','ae','a'], 'ö':['ö','oe','o'], 'ü':['ü','ue','u'], 'ß':['ß','ss']};
function deuVariants(key){
  let out = [''];
  for(const c of lc(key)) out = [].concat(...out.map(v => (UMLAUT[c] || [c]).map(r => v + r)));
  return out;
}

/* The forms stored for a lemma in german-paradigms.json: the lemma and every cell of its table. The grader does not
   accept one of these for the key, even where it is one of the key's spellings without the umlaut. Same as partnerForms in index.html. */
const META = ['lemma', 'gloss', 'ref', 'note', 'kind', 'auxiliary', 'class', 'src'];
function formsOf(lemma){
  const entry = [].concat(paradigms.nouns || [], paradigms.adjectives || [], paradigms.verbs || []).find(e => e.lemma === lemma);
  const found = [lemma];
  (function walk(o){
    if(typeof o === 'string'){ found.push(o); return; }
    if(Array.isArray(o)) o.forEach(walk);
    else if(o && typeof o === 'object') Object.keys(o).forEach(k => { if(META.indexOf(k) < 0) walk(o[k]); });
  })(entry || {});
  return { entry, forms: found };
}

/* Each item has one key, no option equal to the key (as written, or after the German normalization), no repeated
   option, and an id used once. */
const ids = new Set();
Object.keys(shared).forEach(ex => shared[ex].forEach(it => {
  const at = 'shared.' + ex + '.' + it.id;
  if(ids.has(it.id)) problems.push(at + ': the id is repeated');
  ids.add(it.id);
  if(it.lang !== 'de') problems.push(at + ': lang is not de');
  if(typeof it.a !== 'string' || !it.a.trim()) problems.push(at + ': there is not exactly one key');
  const ds = it.ds || [];
  if(new Set(ds).size !== ds.length) problems.push(at + ': an option is repeated');
  ds.forEach(w => {
    if(w === it.a) problems.push(at + ': the wrong option ' + w + ' is the key');
    else if(normDeu(w) === normDeu(it.a)) problems.push(at + ': the wrong option ' + w + ' matches the key ' + it.a + ' after normalizing');
  });
}));

/* produce: the typed keys are distinct after normalizing, and each is a cell of its lemma's table. A spelling of the
   key that is another stored form of the same lemma is listed; the grader refuses it. */
const typed = new Map(), refused = [];
(shared.produce || []).forEach(it => {
  const at = 'shared.produce.' + it.id;
  const k = normDeu(it.a);
  if(!k) problems.push(at + ': the key is empty after normalizing');
  if(typed.has(k)) problems.push(at + ': the key ' + it.a + ' matches ' + typed.get(k) + ' after normalizing');
  typed.set(k, it.id);
  const { entry, forms } = formsOf(it.lemma);
  if(!entry) problems.push(at + ': no table in german-paradigms.json for ' + it.lemma);
  else if(forms.slice(1).indexOf(it.a) < 0) problems.push(at + ': the key ' + it.a + ' is not a cell of the table of ' + it.lemma);
  const spellings = deuVariants(it.a);
  forms.filter(f => lc(f) !== lc(it.a) && spellings.indexOf(lc(f)) >= 0).forEach(f => refused.push(it.id + ': ' + f));
});

if(problems.length){
  console.error(problems.join('\n'));
  process.exit(1);
}
fs.writeFileSync(out,
  '/* Generated by german/build_german.js from the JSON files in german/. Do not edit by hand. */\n'
  + 'window.GERMAN = ' + JSON.stringify(GERMAN, null, 1) + ';\n');
console.log('Shared items: ' + Object.keys(shared).map(k => k + ' ' + shared[k].length).join(', ') + '; each has one key, and no wrong option matches its key.');
console.log('Left out: ' + (Object.keys(LEFT_OUT.items).join(', ') || 'no items') + '; cards: ' + Object.keys(LEFT_OUT.cards).join(', ') + '.');
console.log('Cards: ' + GERMAN.cards.cards.length + '.');
console.log('Produce: the typed keys are distinct. Stored forms refused although they are a spelling of a key without its umlaut: ' + (refused.length ? [...new Set(refused)].join('; ') : 'none') + '.');
console.log('Wrote ' + out);
