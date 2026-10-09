#!/usr/bin/env node
/**
 * build_greek.js: read the Greek JSON files in this folder and write greek.js at the repository root.
 * greek.js defines one global, window.GREEK = {vocab, paradigms, cards, items, shared, sentence}, with every
 * string exactly as it stands in the JSON. GREEK.sentence holds the four pools of greek-sentence-a.json
 * (more, voice) and greek-sentence-b.json (clause, mood). Run from the repository root:
 *   node greek/build_greek.js
 */
'use strict';
const fs = require('fs');
const path = require('path');

const here = __dirname;
const out = path.join(here, '..', 'greek.js');
const read = name => JSON.parse(fs.readFileSync(path.join(here, 'greek-' + name + '.json'), 'utf8'));
const GREEK = { vocab: read('vocab'), paradigms: read('paradigms'), cards: read('cards'), items: read('items'), shared: read('shared'),
  sentence: Object.assign({}, read('sentence-a'), read('sentence-b')) };

/* Every string must already be in Unicode NFC. Nothing here normalizes or rewrites a form. */
const problems = [];
(function walk(o, at){
  if(typeof o === 'string'){ if(o !== o.normalize('NFC')) problems.push(at + ' is not NFC: ' + o); return; }
  if(o && typeof o === 'object') for(const k of Object.keys(o)) walk(o[k], at + '.' + k);
})(GREEK, 'GREEK');

/* Grading safety. The exercise compares typed Greek without accents, breathings, iota subscript, macrons, or
   case, and reads plain Latin letters as Greek. This is the same comparison as normGrk in index.html. Under it,
   no wrong option may match the answer, whether it is typed in Greek or in Latin letters, and the answer
   typed in Latin letters must match the answer. */
const BETA = {a:'α', b:'β', g:'γ', d:'δ', e:'ε', z:'ζ', h:'η', q:'θ', i:'ι', k:'κ', l:'λ', m:'μ', n:'ν',
  c:'ξ', o:'ο', p:'π', r:'ρ', s:'σ', t:'τ', u:'υ', f:'φ', x:'χ', y:'ψ', w:'ω'};
const TO_LATIN = Object.fromEntries(Object.entries(BETA).map(([k, v]) => [v, k]));
function normGrk(s){
  return String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
    .replace(/[a-z]/g, c => BETA[c]).replace(/ς/g, 'σ').replace(/[^\u0370-\u03ff]/g, '');
}
function asLatin(s){
  return normGrk(s).split('').map(c => {
    if(!TO_LATIN[c]) problems.push('No Latin letter for ' + c + ' in ' + s);
    return TO_LATIN[c] || '';
  }).join('');
}
GREEK.items.items.forEach(it => {
  const a = normGrk(it.answer), aLat = normGrk(asLatin(it.answer));
  if(!a) problems.push(it.id + ': the answer is empty after normalizing');
  if(aLat !== a) problems.push(it.id + ': the answer typed in Latin letters does not match the answer');
  it.wrong.forEach(w => {
    if(normGrk(w) === a) problems.push(it.id + ': the wrong option ' + w + ' matches the answer ' + it.answer + ' in Greek');
    if(normGrk(asLatin(w)) === aLat) problems.push(it.id + ': the wrong option ' + w + ' matches the answer ' + it.answer + ' in Latin letters');
  });
});

/* The shared items: the Greek pools of the existing exercises. Each item has one key, no option equal to the
   key (as written, or after the Greek normalization above), no repeated option, and a unique id. In produce,
   the typed key must be unique after the normalization. */
const ids = new Set();
Object.keys(GREEK.shared).forEach(ex => {
  const pool = GREEK.shared[ex];
  if(!Array.isArray(pool)) return;
  pool.forEach(it => {
    const at = 'shared.' + ex + '.' + it.id;
    if(ids.has(it.id)) problems.push(at + ': the id is repeated');
    ids.add(it.id);
    if(typeof it.a !== 'string' || !it.a.trim()) problems.push(at + ': there is not exactly one key');
    const ds = it.ds || [];
    if(new Set(ds).size !== ds.length) problems.push(at + ': an option is repeated');
    ds.forEach(w => {
      if(w === it.a) problems.push(at + ': the wrong option ' + w + ' is the key');
      else if(normGrk(w) && normGrk(w) === normGrk(it.a)) problems.push(at + ': the wrong option ' + w + ' matches the key ' + it.a + ' after normalizing');
    });
  });
});
const typed = new Map();
(GREEK.shared.produce || []).forEach(it => {
  const k = normGrk(it.a);
  if(!k) problems.push('shared.produce.' + it.id + ': the key is empty after normalizing');
  if(typed.has(k)) problems.push('shared.produce.' + it.id + ': the key ' + it.a + ' matches ' + typed.get(k) + ' after normalizing');
  typed.set(k, it.id);
});

/* The sentence items: the pools of the four Greek sentence exercises. Each item has one key, one blank in its
   frame, no repeated option, and a unique id. No wrong option matches the key, as written, after the Greek
   normalization, or typed in Latin letters, and the key typed in Latin letters matches the key. */
const SENTENCE_POOLS = ['more', 'voice', 'clause', 'mood'];
SENTENCE_POOLS.forEach(name => { if(!Array.isArray(GREEK.sentence[name])) problems.push('sentence.' + name + ' is missing'); });
Object.keys(GREEK.sentence).forEach(name => { if(SENTENCE_POOLS.indexOf(name) < 0) problems.push('sentence.' + name + ' is not one of the four pools'); });
SENTENCE_POOLS.forEach(name => (GREEK.sentence[name] || []).forEach(it => {
  const at = 'sentence.' + name + '.' + it.id;
  if(ids.has(it.id)) problems.push(at + ': the id is repeated');
  ids.add(it.id);
  if(typeof it.a !== 'string' || !it.a.trim()) { problems.push(at + ': there is not exactly one key'); return; }
  if(typeof it.fr !== 'string' || it.fr.split('______').length !== 2) problems.push(at + ': the frame does not have exactly one blank');
  if(typeof it.en !== 'string' || !it.en.trim() || typeof it.why !== 'string' || !it.why.trim()) problems.push(at + ': the English or the note is missing');
  const a = normGrk(it.a), aLat = normGrk(asLatin(it.a));
  if(!a) problems.push(at + ': the key is empty after normalizing');
  if(aLat !== a) problems.push(at + ': the key typed in Latin letters does not match the key');
  const ds = it.ds || [];
  if(ds.length < 2) problems.push(at + ': there are fewer than two wrong options');
  if(new Set(ds).size !== ds.length) problems.push(at + ': an option is repeated');
  ds.forEach(w => {
    if(w === it.a) problems.push(at + ': the wrong option ' + w + ' is the key');
    else if(normGrk(w) === a) problems.push(at + ': the wrong option ' + w + ' matches the key ' + it.a + ' after normalizing');
    else if(normGrk(asLatin(w)) === aLat) problems.push(at + ': the wrong option ' + w + ' matches the key ' + it.a + ' in Latin letters');
  });
}));

if(problems.length){
  console.error(problems.join('\n'));
  process.exit(1);
}
fs.writeFileSync(out,
  '/* Generated by greek/build_greek.js from the JSON files in greek/. Do not edit by hand. */\n'
  + 'window.GREEK = ' + JSON.stringify(GREEK, null, 1) + ';\n');
console.log('Grading safety: ' + GREEK.items.items.length + ' items, no wrong option matches its answer.');
console.log('Shared items: ' + Object.keys(GREEK.shared).filter(k => Array.isArray(GREEK.shared[k])).map(k => k + ' ' + GREEK.shared[k].length).join(', ') + '; each has one key, and the produce keys are distinct.');
console.log('Sentence items: ' + SENTENCE_POOLS.map(k => k + ' ' + GREEK.sentence[k].length).join(', ') + '; each has one key and one blank, and no wrong option matches its key.');
console.log('Wrote ' + out);
