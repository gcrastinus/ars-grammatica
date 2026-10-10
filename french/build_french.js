#!/usr/bin/env node
/**
 * build_french.js: read the French JSON files in this folder and write french.js at the repository root.
 * french.js defines one global, window.FRENCH = {vocab, paradigms, cards, shared}, with every string exactly as it
 * stands in the JSON. FRENCH.shared holds the French pools of the shared exercises (the arrays of french-items.json).
 * The items and cards that FRENCH-STEP1-REPORT.md lists as unsure are left out here (LEFT_OUT below); the JSON files
 * themselves are the draft files, unchanged. Run from the repository root:
 *   node french/build_french.js
 */
'use strict';
const fs = require('fs');
const path = require('path');

const here = __dirname;
const out = path.join(here, '..', 'french.js');
const read = name => JSON.parse(fs.readFileSync(path.join(here, 'french-' + name + '.json'), 'utf8'));
const vocab = read('vocab'), paradigms = read('paradigms'), cards = read('cards'), items = read('items');

/* Left out because FRENCH-STEP1-REPORT.md, section 5, lists the point each one rests on as unsure. The cards Gender
   and Adjective agreement were restored after Larousse was opened: victoire/81858 prints "victoire nom féminin", and
   bon/10103 prints "bon, bonne adjectif". The card Number and the item fprod3 were restored on Larousse junior,
   s.v. cadeau (junior/cadeau/2550), which prints "Mes amis m'ont offert des cadeaux pour mon anniversaire." and
   "Au pluriel : des cadeaux."; the main entry, cadeau/12020, prints no plural. The item fprod5 was restored on the
   same bon/10103 entry. */
const LEFT_OUT = {
  items: {
    fdec5: 'section 5, point 3: the note on comparison with plus or moins',
    fdec6: 'section 5, point 3: the note on comparison with plus or moins',
    fprod18: 'section 5, point 5: the note on the imperative aie'
  },
  cards: {
    'Beau and vieux': 'section 5, point 7: the literary use of vieux before a vowel',
    'The present subjunctive': 'section 5, points 4 and 5: the trigger il faut que, and que j’aie'
  }
};

const problems = [];
Object.keys(LEFT_OUT.items).forEach(id => {
  if(!Object.keys(items).some(k => Array.isArray(items[k]) && items[k].some(it => it.id === id))) problems.push('LEFT_OUT names ' + id + ', which is not in french-items.json');
});
Object.keys(LEFT_OUT.cards).forEach(h => {
  if(!cards.cards.some(c => c.heading === h)) problems.push('LEFT_OUT names the card ' + h + ', which is not in french-cards.json');
});

const shared = {};
Object.keys(items).filter(k => Array.isArray(items[k])).forEach(k => {
  shared[k] = items[k].filter(it => !LEFT_OUT.items[it.id]);
});
const FRENCH = {
  vocab, paradigms,
  cards: Object.assign({}, cards, { cards: cards.cards.filter(c => !LEFT_OUT.cards[c.heading]) }),
  shared
};

/* Every string must already be in Unicode NFC. Nothing here normalizes or rewrites a form. */
(function walk(o, at){
  if(typeof o === 'string'){ if(o !== o.normalize('NFC')) problems.push(at + ' is not NFC: ' + o); return; }
  if(o && typeof o === 'object') for(const k of Object.keys(o)) walk(o[k], at + '.' + k);
})(FRENCH, 'FRENCH');

/* Grading safety. Typed French is compared without accents, the cedilla, or case, and with the apostrophe and the
   spaces made uniform. This is the same comparison as normFra in index.html. */
function normFra(s){
  return String(s || '').replace(/<[^>]*>/g, '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
    .replace(/[’']/g, '’').replace(/\s+/g, ' ').trim();
}
const lc = s => String(s || '').normalize('NFC').toLowerCase().replace(/[’']/g, '’').replace(/\s+/g, ' ').trim();

/* The forms stored for a lemma in french-paradigms.json: the lemma and every cell of its table. The grader does not
   accept one of these for the key, even where it matches the key without accents. Same as fraForms in index.html. */
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

/* Each item has one key, no option equal to the key (as written, or after the French normalization), no repeated
   option, and an id used once. */
const ids = new Set();
Object.keys(shared).forEach(ex => shared[ex].forEach(it => {
  const at = 'shared.' + ex + '.' + it.id;
  if(ids.has(it.id)) problems.push(at + ': the id is repeated');
  ids.add(it.id);
  if(it.lang !== 'fr') problems.push(at + ': lang is not fr');
  if(typeof it.a !== 'string' || !it.a.trim()) problems.push(at + ': there is not exactly one key');
  const ds = it.ds || [];
  if(new Set(ds).size !== ds.length) problems.push(at + ': an option is repeated');
  ds.forEach(w => {
    if(w === it.a) problems.push(at + ': the wrong option ' + w + ' is the key');
    else if(normFra(w) === normFra(it.a)) problems.push(at + ': the wrong option ' + w + ' matches the key ' + it.a + ' after normalizing');
  });
}));

/* produce: the typed keys are distinct after normalizing, each is a cell of its lemma's table, and the key typed
   without accents is accepted unless that spelling is another stored form of the same lemma. */
const typed = new Map(), refused = [];
(shared.produce || []).forEach(it => {
  const at = 'shared.produce.' + it.id;
  const k = normFra(it.a);
  if(!k) problems.push(at + ': the key is empty after normalizing');
  if(typed.has(k)) problems.push(at + ': the key ' + it.a + ' matches ' + typed.get(k) + ' after normalizing');
  typed.set(k, it.id);
  const { entry, forms } = formsOf(it.lemma);
  if(!entry) problems.push(at + ': no table in french-paradigms.json for ' + it.lemma);
  else if(forms.slice(1).indexOf(it.a) < 0) problems.push(at + ': the key ' + it.a + ' is not a cell of the table of ' + it.lemma);
  forms.filter(f => lc(f) !== lc(it.a) && normFra(f) === k).forEach(f => refused.push(it.id + ': ' + f));
});

if(problems.length){
  console.error(problems.join('\n'));
  process.exit(1);
}
fs.writeFileSync(out,
  '/* Generated by french/build_french.js from the JSON files in french/. Do not edit by hand. */\n'
  + 'window.FRENCH = ' + JSON.stringify(FRENCH, null, 1) + ';\n');
console.log('Shared items: ' + Object.keys(shared).map(k => k + ' ' + shared[k].length).join(', ') + '; each has one key, and no wrong option matches its key.');
console.log('Left out: ' + Object.keys(LEFT_OUT.items).join(', ') + '; cards: ' + Object.keys(LEFT_OUT.cards).join(', ') + '.');
console.log('Cards: ' + FRENCH.cards.cards.length + '.');
console.log('Produce: the typed keys are distinct. Stored forms refused although they match a key without accents: ' + (refused.length ? refused.join('; ') : 'none') + '.');
console.log('Wrote ' + out);
