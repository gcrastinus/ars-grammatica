# ARS GRAMMATICA — Master Plan

*The first art of the trivium, taught as a liberal art: modist in doctrine, Thomistic in
its account of why grammar is what it is, English and Latin throughout, with Ancient
Greek, German, or French as an optional third witness, and modern linguistics named
beside the tradition wherever the two are talking about the same thing.*

Sibling application to **Ars Syllogistica**. Same engine, same voice, same parchment.
Own folder, own repository, own `index.html`.

---

## 0. What this app is for

Ars Syllogistica teaches the second and third acts of the mind. It opens with a card
that says *THE FIRST ART — The Art of Grammar*, and behind that card sit sixteen study
panels. Those sixteen panels are the seed of this application. They are good, and they
are a sketch: they take the student from "what is a noun" to *modus significandi* in
about twenty minutes and then hand him to logic.

Ars Grammatica is what those twenty minutes are a sketch **of**. It is the full course
in the first road of the trivium — and it is built on the claim the seed already makes:

> The parts of speech are not conventions. They exist because things really are various
> ways, and words and sentences have to signify them as they are.

That claim is the spine. Every act of the app is either (a) the ordinary grammatical
material a student must actually possess, or (b) the modist question *why is it so and
not otherwise*, or (c) the modern discipline's answer to the same question, set beside
the medieval one so the student can judge between them.

### The governing distinction

The tradition divides the study of language three ways, and the app should never blur
them:

| | asks | is satisfied by | fails as |
|---|---|---|---|
| **Grammar** | is the utterance well formed? | *congruitas* — congruity | **solecism / barbarism** |
| **Logic** | is the proposition true, and what follows? | truth, validity | **falsity / fallacy** |
| **Rhetoric** | will the hearer be moved to see it? | persuasion | **ineffectiveness** |

*The moon is made of green cheese* is congruous and false. *Him go store yesterday* is
incongruous and may well be true. The app returns to this pair constantly, because it is
the single hardest thing for a modern student to hold: **grammar is not about truth.**

### Relation to Ars Syllogistica

- Ars Syllogistica's grammar card gains a line: *the full course is in Ars Grammatica*,
  with a link. The sixteen panels stay where they are as a standing summary.
- Ars Grammatica's final act (**Grammatica et Logica**) hands the student across:
  subject/predicate, signification and supposition, the syncategoremata, and the fallacy
  of *figura dictionis* — which Ars Syllogistica already teaches from the other side.
- Progress is stored under a **separate** localStorage key. The two apps do not share
  state; they share a design system and a temperament.

---

## 1. The architecture of the curriculum

The medieval grammarians divide grammar by the **ascending magnitudes of speech**, and
this is the best spine available because it is both traditional and pedagogically sound
— it goes from the smallest piece to the whole:

> *littera → syllaba → dictio → oratio*
> letter → syllable → word → sentence

Donatus and Priscian organise the *Ars* this way. The modists then ask, of every level,
*by what mode does this signify?* So the app has a **material spine** (the four
magnitudes, plus the accidents of the word, plus the vices and virtues of speech) and a
**formal spine** (the modes of signifying), and the second is laid over the first.

### The Acts

Following Ars Syllogistica's practice of naming its divisions *Acts*:

---

#### PRELIMINARY — *What Grammar Is* (study, not scored)

An orientation deck on the pattern of `ORIENT`. Panels with a question apiece, validated
in place, nothing tracked.

- Grammar as the first road of the trivium, and why the order is not arbitrary.
- Grammar as **art and science both** — an art of speaking and writing congruously, a
  science of why congruity is what it is. (Boethius of Dacia, *Modi significandi* q. 1–3:
  is grammar a science? Yes, and its subject is the congruous utterance.)
- **The subject of grammar**: *oratio congrua* — the well-formed utterance. Not the word;
  not the truth; the construction.
- **The four causes of a sentence**, since the student will meet them again everywhere:
  matter (the words), form (the construction/mode of signifying), efficient (the speaker's
  intellect), final (to express a concept of the mind to another).
- The history in one panel: Dionysius Thrax → Donatus and Priscian → the twelfth-century
  logical turn → the modists at Paris (Martin and Boethius of Dacia, Radulphus Brito,
  Thomas of Erfurt) → their eclipse by the humanists → Port-Royal → comparative philology
  → Saussure → Chomsky. Named, not detailed; detail comes in Act VIII.
- **Where grammar stops.** The green-cheese pair. This panel gets a permanent home in the
  interface as well — see §4, the Congruity Bar.

The existing sixteen panels are cannibalised here and in Acts II and V. Nothing in them
is lost; most of them are promoted into full exercises.

---

#### ACT I — LITTERA ET SYLLABA · *the matter of speech*

The smallest magnitudes. Short — three exercises — but it must be there, because the
tradition begins here and because Latin verse and Greek accent are unintelligible without
it.

1. **Letter and sound.** *Littera* as the least part of a composite sound; the tradition's
   *nomen / figura / potestas* (name, shape, power) — which is exactly the modern
   grapheme/phoneme distinction, and should be labelled as such. Vowel and consonant;
   why a vowel can stand alone and a consonant cannot, and how that is the same shape of
   argument as noun-can-stand-alone / adjective-cannot.
2. **Syllable and quantity.** Long and short by nature and by position; Latin quantity;
   Greek quantity with the added apparatus of accent and breathing. German and French
   substitute stress and the orthography–pronunciation gap. Modern name: prosody, and
   the moraic account.
3. **Accent.** The Latin penultimate law (a genuinely computable drill — see §3), Greek
   recessive accent and the three accents, German initial stress, French phrase-final
   stress. This is the first place the language selector really earns itself.

*Modist note for the act:* letters and syllables have no mode of signifying at all — they
are the matter only. Signification begins at *dictio*. Saying so here prevents a whole
family of confusions later.

---

#### ACT II — DICTIO · *the parts of speech*

The heart of the elementary course, and the act the sixteen seed panels mostly become.

4. **What a part of speech is.** That it is a list of *functions*, not of words — *paint*
   the thing and *paint* the doing. Modern name: lexical category / word class, and the
   modern quarrel about whether the categories are universal.
5. **Noun and verb.** The two on which everything rests. The noun names; the verb says
   something is going on and alone carries time. Includes: common and proper (which logic
   will need immediately), concrete and abstract, and the substantive/adjective split as
   the tradition made it — for Donatus counts the adjective under *nomen*, and the reason
   is a modist reason, not an oversight.
6. **The remaining parts.** Pronoun, participle, adverb, preposition, conjunction,
   interjection — Donatus's eight. Beside it the modern English eight-or-nine with the
   article, and the question of why the lists differ: Latin has no article, English has
   no participle-as-separate-class, and the modists have an answer for both.
7. **Declinable and indeclinable.** The tradition's own first cut, and the ground of Act III.
8. **Parsing by part of speech.** Generative: a sentence appears in English (and in the
   partner language), one word is marked, name its part of speech and defend it. Difficulty
   scales from unambiguous to genuinely contested cases — *that* as pronoun / conjunction /
   adjective, *running* as participle / gerund / noun.

---

#### ACT III — ACCIDENTIA · *the modes of the word*

Where the languages bite hardest, and where a generative engine pays for itself many
times over. The *accidents* — what a word takes on or loses while remaining the same word.

9. **Case.** *Casus*, a falling. The six Latin cases with their functions; the five Greek;
   the four German; French's loss of case except in the pronouns; English's remnant
   (he/him/his, who/whose/whom). The great exercise here: **given an English sentence,
   what case would the partner language put this word in, and why?** That drill teaches
   case as *function* rather than as ending, which is the only way it ever sticks.
10. **Number, gender, person.** Grammatical gender against natural sex, and the modist
    treatment of it (which is better than the modern student expects). Dual number in
    Greek. The T–V distinction in German and French as a *person* phenomenon.
11. **Tense, mood, voice.** The verb's own accidents. Latin's six tenses in three stems;
    Greek's aspect-driven system (and the honest statement that Greek tense is aspect
    first, time second); German's periphrastic perfect; French's *passé composé* /
    *imparfait* opposition. Modern names: tense, aspect, mood, voice, Aktionsart.
12. **Full parsing.** The classic drill, generated: a form is thrown up, give every
    accident. *amāvissēs* → verb, 2nd singular, pluperfect, subjunctive, active, from
    *amō, amāre*. Computable from stem + ending tables, hence inexhaustible.
13. **Synthesis — produce the form.** The inverse drill: given lemma and required accidents,
    type the form. Harder, and the one that proves possession.

---

#### ACT IV — ORATIO · *construction*

Syntax. In the tradition this is *constructio*, and the modists' treatment of it is their
best work.

14. **Suppositum and appositum.** The tradition's own subject/predicate — and the careful
    note that they are *not* quite logic's subject and predicate, which is a distinction
    Ars Syllogistica needs and does not yet make.
15. **Agreement (*concordantia*).** Adjective with noun in case, number, gender; verb with
    subject in number and person; relative with antecedent. Generative error-spotting:
    a sentence is produced with exactly one agreement fault, name it.
16. **Government (*regimen*).** The verb governs its object's case; the preposition governs
    its complement's case; *ūtor* takes the ablative and there is a reason. German's
    two-way prepositions are the finest teaching case here and should be used.
17. **Congruity and completeness (*congruitas et perfectio*).** The modists' two conditions
    for a construction: it must be congruous (the modes of signifying fit) and it must be
    complete (it rests the hearer's mind). *Socrates albus currit bene* — congruous.
    *Socrates album* — incongruous. *If Socrates runs* — congruous but incomplete. Three
    ways to fail, and the student must sort them.
18. **Dependency (*dependentia et terminatio*).** The modist engine of syntax: every
    construction is one term *depending* and another *terminating* the dependence. This is,
    to a startling degree, modern **dependency grammar** — and the app says so, and draws
    both pictures over the same sentence. This is Ars Grammatica's answer to the Venn
    diagram: the **Sentence Workshop** (§4).
19. **Ambiguity (*amphibolia*).** Sentences whose construction admits two parses. Draw both.
    The bridge to the logical fallacy of amphiboly, which Ars Syllogistica already teaches.

---

#### ACT V — GRAMMATICA SPECULATIVA · *the modes of signifying*

The doctrinal centre. Everything before it was material; this act says why the material
is shaped as it is. Thomas of Erfurt's *Grammatica speculativa* is the working text,
Boethius of Dacia for the harder questions, Aquinas for the metaphysics underneath.

20. **The three modes.** *Modus essendi* — the way a thing is. *Modus intelligendi* — the
    way the mind takes it. *Modus significandi* — the way the word signifies it. Being
    first, understanding drawn from being, signifying drawn from understanding. Each mode
    founded on the one before, and the whole structure standing or falling with that
    ordering. Generative drill: a thing and a word are given; name which mode is in play.
21. **Active and passive modes.** *Modus significandi activus* (the word's way of signifying)
    against *passivus* (the thing's way of being signified) — and the *ratio consignificandi*.
    The distinction that keeps the doctrine from collapsing into psychologism.
22. **Essential and accidental modes.** The essential mode makes the part of speech; the
    accidental modes make its accidents. Hence: the noun *is* a noun by signifying
    *per modum habitus et quietis*; case, number, gender are accidental modes riding on
    that. This single distinction organises Acts II and III retrospectively, and the app
    should send the student back through them once he has it.
23. **The derivation of the parts of speech.** The act's summit. Every part of speech
    derived from a mode of being:
    - **noun** — *per modum habitus et quietis*, the mode of a settled state
    - **verb** — *per modum fieri et fluxus*, the mode of becoming and flowing (hence time)
    - **participle** — the verb's mode, but taken as resting: flowing signified without time
    - **pronoun** — the substance without the quality; naming without describing
    - **adverb** — a mode determining the verb's mode
    - **preposition** — a mode of relating one thing to another's case
    - **conjunction** — a mode of joining two things
    - **interjection** — a mode of the affect
    Drill: given a mode, name the part; given a part, name the mode; given a hard case
    (*running* as gerund, *the good* as substantivised adjective), say what has happened.
24. **The great objections.** Where the doctrine is under pressure, put honestly:
    - If grammar follows being, why do languages differ at all? (The modists' answer: they
      differ in *vox*, not in *modus*. Is that enough?)
    - Fictive and impossible objects — *chimaera*, *nothing*, *goat-stag*. What is the
      *modus essendi* of a chimaera? (Thomas of Erfurt's answer, and why the humanists
      thought it fatal.)
    - Grammatical gender: what mode of being does the femininity of *mensa* follow?
    - The nominalist counter-attack: Ockham, and the collapse of the modist school.
    The app must not pretend these are settled. This is a liberal art, not a catechism.

---

#### ACT VI — VITIA ET VIRTUTES ORATIONIS · *the vices and virtues of speech*

Donatus's *Ars maior* book III, which is the last third of grammar as the tradition
actually taught it, and which nobody teaches any more.

25. **Barbarism and solecism.** A fault in one word (*barbarismus*) against a fault in the
    construction (*solecismus*). Generative: a fault is planted, name its kind.
26. **Metaplasm and schema.** The same departures from rule, permitted — the licence a poet
    has that a schoolboy has not, and the principle that makes the difference.
27. **The tropes.** Metaphor, metonymy, synecdoche, irony, hyperbole, allegory — as
    Donatus lists them, under *grammar*, not rhetoric. Why they belong here: a trope is a
    word made to signify otherwise than its proper mode, which is a **grammatical**
    fact before it is a stylistic one. This is also where the app can be most enjoyable.
28. **Latinitas / good English.** The virtue of the whole: correctness, clarity, and
    appropriateness. And the standing question of who decides — usage, the best authors,
    or reason. (Prescriptive against descriptive, named as such: the quarrel is old.)

---

#### ACT VII — GRAMMATICA ET LOGICA · *the boundary, and the crossing*

Short, sharp, and the bridge to Ars Syllogistica.

29. **Signification and supposition.** What a word means against what it stands for in
    *this* proposition. *Man is a species* / *Man is an animal* — the same word, two
    suppositions. The medieval theory of supposition is the exact point where grammar
    hands over to logic, and no modern course has anything in its place.
30. **Categorematic and syncategorematic.** *All*, *no*, *some*, *only*, *except*, *if* —
    words that signify nothing by themselves but determine how the others signify.
    Ars Syllogistica's whole quantifier apparatus lives here.
31. **The fallacy of figure of speech (*figura dictionis*).** Arguing from the shape of the
    word to the shape of the thing. The precise fallacy the seed panels warn against, and
    the reason the modist must be careful: grammar mirrors reality, and the mirror is
    imperfect.
32. **Congruity against truth, one last time.** The closing exercise of the act: a sentence
    arrives, judge it on both axes independently. Four quadrants. This is the exercise the
    whole app has been building toward, and it is the one that hands the student to logic
    knowing what logic is *for*.

---

#### ACT VIII — GRAMMATICA UNIVERSALIS · *the ancient question and the modern*

The "pointed with modern stuff" act, kept whole rather than scattered — though modern
names are glossed inline everywhere (§5).

33. **Typology: how languages actually differ.** Word order (SVO, SOV, VSO) and what
    correlates with it; case-marking against configurational order — which is precisely the
    fact the seed panel already notices about English and Latin; agglutinating, fusional,
    isolating, polysynthetic. Drill: a glossed sentence from an unfamiliar language,
    identify the type. **This act is the empirical test of the modist claim**, and it should
    be framed that way: if grammar follows the modes of being, the variation must be
    *superficial*. Is it?
34. **Universals.** Greenberg's implicational universals; the things every language has
    (something noun-like, something verb-like, predication, negation, questions) and the
    things that vary freely. What the modists predicted, and how they did.
35. **Two universal grammars.** Chomsky and the modists both hold a universal grammar, and
    they ground it in opposite places: the innate structure of the **mind** against the
    modes of **being**. Where they agree (that the variety is surface and the deep structure
    common); where they part (whether grammar answers to the world or only to the brain);
    what a Thomist should say about the parting. Chomsky himself points back to Port-Royal
    in *Cartesian Linguistics* — so this conversation is one the moderns opened.
36. **What the twentieth century found and the thirteenth did not.** Honest ledger:
    phonology as a system, morphology as a level, the constituency insight, statistical
    universals, language acquisition. And what the thirteenth had and the twentieth mostly
    lost: the question *why* the categories are what they are, and the refusal to treat
    that question as unanswerable.

---

## 2. The language layer

**English is the teaching language and is always present. Latin is always present** — as
the tradition's own metalanguage, and because every technical term in the app is a Latin
term. A picker adds **one optional third**: Ancient Greek, German, or French. Choosing
none is a legitimate state.

### The module contract

Each language is a data object, not code:

```js
LANGS.la = {
  key:'la', name:'Latin', order:'flexible-SOV', caseCount:6,
  script:'latin',                       // for Greek: polytonic, with a font fallback chain
  phon:  { ... },                       // Act I: letters, quantity, accent rule
  decl:  { ... },                       // stem + ending tables, all five declensions
  conj:  { ... },                       // four conjugations, all tenses/moods/voices
  lex:   [ ... ],                       // tagged lexicon: lemma, gloss, class, gender, stems
  sent:  [ ... ],                       // sample sentences with full dependency parses
  notes: { 'III.9':'…', 'IV.16':'…' }   // per-panel remarks, keyed by act.exercise
}
```

**Paradigms are generated, never stored as flat lists.** A declension is a stem plus a
table of endings; a conjugation is three stems plus tables. From `amō, amāre, amāvī,
amātum` plus the first-conjugation tables the engine produces every one of the roughly
120 finite forms, and can therefore ask an inexhaustible supply of parsing questions and
mark them exactly. This is the same economy that lets Ars Syllogistica generate
syllogisms rather than list them, and it is what makes "full scale" achievable at all.

Any exercise for which the chosen language has no data **degrades**: it falls back to
English + Latin and says so, rather than breaking or inventing. The app must never
generate a foreign form it cannot vouch for.

### Coverage, honestly stated

| | Latin | Greek | German | French |
|---|---|---|---|---|
| Act I phonology / accent | full | full | full | full |
| Act III noun morphology | 5 declensions | 3 declensions | 4 cases, mixed classes | pronouns only |
| Act III verb morphology | full | present system + aorist | full | full |
| Act IV government | full | full | full (incl. two-way preps) | full |
| Act VIII typology | — | — | — | — (act is language-neutral) |

Greek's middle voice, optative, and full aorist system are stretch goals. Ancient Greek
also needs a polytonic-capable font stack and a normalisation step on typed answers so a
student is not marked wrong for a missing iota subscript.

---

## 3. What the engine can generate

The single most important design decision. Exercises fall in three tiers:

**Tier A — fully computable.** The engine produces the item *and* knows the answer with
certainty, from tables. Inexhaustible, and the backbone of drill.

- Latin/Greek accent placement from a form's quantities
- parse this form → accidents (from stem + ending tables)
- produce the form from lemma + accidents
- agreement error planted and named
- case required by a given verb or preposition (government)
- English sentence → what case would Latin/Greek/German use
- part of speech of a marked word in a generated sentence
- congruity × truth, four quadrants (generated from tagged term pools)

**Tier B — computable over a curated pool.** Items are hand-written; the *selection*,
distractors, and difficulty weighting are generated. This is how Ars Syllogistica handles
the fallacies, the predicables, and dialectic, and the pattern transfers directly.

- part-of-speech hard cases and contested parses
- modes of signifying: which mode is this word using
- derive the part of speech from the mode, and back
- barbarism / solecism / metaplasm / schema
- the tropes
- ambiguity: both parses of an amphibolous sentence
- supposition: what does the term stand for here
- typology: identify the type from a glossed specimen

**Tier C — study only, not scored.** Panel decks with a question apiece, validated in
place, on the `ORIENT`/`GRAMMAR` pattern. The Preliminary, most of Act V's doctrine, and
the whole of Act VIII's argument.

Every wrong answer in tiers A and B gets a **mistake note in the house voice** — not
"incorrect", but *what you have done and why it is a natural thing to have done*. Ars
Syllogistica's `mistakeNote*` functions are the model and the standard.

---

## 4. The instruments

Ars Syllogistica has the Venn diagram — an instrument that makes a proposition visible,
present from the first exercise, with a free workshop attached. Ars Grammatica needs its
own, and it has two.

### The Sentence Workshop

The central instrument. A sentence, and over it the app draws:

1. **The dependency picture** — arcs from each dependent to the word that terminates its
   dependence. This is the modists' own *dependentia / terminatio* and it is also modern
   dependency grammar; drawn once, labelled twice.
2. **The constituency picture** — optional, toggled: the same sentence as nested phrases.
   The modern instrument the tradition did not have.
3. **The mode annotation** — each word tagged with its essential mode of signifying, so the
   student sees the doctrine and the sentence at once.

The free workshop lets the student type any sentence and mark it up himself, then read
back what his markup asserts — exactly as the Diagram Workshop reads back a Venn diagram.
Same interaction, same principle: *the instrument displays what is already said; it proves
nothing by itself.*

### The Modal Ladder

A small standing diagram for Act V: a thing at the bottom (*modus essendi*), the mind
above it (*modus intelligendi*), the word above that (*modus significandi*), with the
dependence drawn as arrows upward and the warning that the arrows do not run back down.
Used in every Act V panel, and available as the second workshop: pick a thing, pick a
word, watch the three modes separate.

### The Congruity Bar

Persistent, small, at the foot of every exercise screen: two independent lamps, **CONGRUOUS**
and **TRUE**, greyed until the exercise has an opinion about them. Most exercises light only
the first. It is a constant, wordless reminder of the app's governing distinction, and it
is the thing the student will remember longest.

---

## 5. Voice, and the modern gloss

The voice is Ars Syllogistica's and must not drift: plain English first, the traditional
term given as it arises, Latin *beside* the English and never instead of it, no
condescension, no padding, and the assumption that the student has had none of this and
is entirely capable of all of it.

The modern gloss follows the pattern the fallacies section already uses — *"Modern books
call this…"* — set inline, in italics, at the end of the doctrine:

- accidents of the noun → *inflectional features*
- parts of speech → *lexical categories, word classes*
- *nomen / figura / potestas* → *grapheme and phoneme*
- *congruitas* → *grammaticality*
- *dependentia / terminatio* → *dependency grammar*
- *suppositum / appositum* → *subject and predicate*
- *modus significandi* → *(no modern equivalent — and that is the point)*
- *solecismus* → *ungrammaticality*
- quantity and accent → *prosody, moraic weight*

The rule: **the modern name is given, and the tradition's question is kept.** The app is
not embarrassed by the tradition and not dismissive of the moderns. Where the two
disagree — and in Act VIII they genuinely do — both are put fairly and the student is
told that he must judge.

---

## 6. Technical inheritance

Straight from Ars Syllogistica, deliberately unchanged:

- **Single file, no build step, no dependencies.** Opens from Dropbox, from a phone, from
  a thumb drive. This constraint has served the first app well and is not negotiable.
- Design tokens: parchment `--paper #f6f0e1`, ink, gold `--a67c2e`, wine, sage; the full
  `body.dark` inversion; EB Garamond body, Cinzel display.
- `.screen` / `show(id)` router; scroll-to-top on every transition.
- `SETS` array → home cards grouped into acts by `ACT_MEMBERS`.
- Difficulty I–V in Roman numerals, per-exercise gain/loss scoring, streaks.
- Guided Path with soft gating, daily session, ICS/Google Calendar reminder.
- Progress screen, mistake review, speech synthesis, themed scrollbars, print.
- **Separate localStorage namespace** (`arsgram.*`).

New, and specific to this app:

- `LANGS` registry and the language picker (persisted, and reflected in every panel).
- Paradigm generator (stem + endings → form; form → accidents).
- Answer normalisation for typed forms: macrons optional in Latin, polytonic diacritics
  normalised in Greek, umlaut/ß tolerant in German, accents tolerant in French — with the
  correct form always shown back so the student learns the orthography without being
  punished by his keyboard.
- The Sentence Workshop's SVG arc renderer.

---

## 7. Order of building

1. Shell: design system, router, home, difficulty, scoring, progress, dark mode, language
   picker. Nothing taught yet.
2. `LANGS.la` complete — paradigm generator and Latin tables. The generator is the
   long pole; everything in Acts I and III depends on it.
3. Acts II and III: the elementary course, with parsing drills live. **First genuinely
   usable version of the app.**
4. Preliminary and Act V: the doctrine, with the Modal Ladder.
5. Act IV and the Sentence Workshop.
6. Acts I, VI, VII.
7. `LANGS.grc`, `LANGS.de`, `LANGS.fr`.
8. Act VIII.
9. Guided Path over the whole, cross-links to Ars Syllogistica, verification pass.

Each stage is a working app. The file grows the way the first one did.

---

## 8. Open questions for T

1. **Sequence.** Should the elementary material (Acts II–III) come first for the student,
   with the modist doctrine (Act V) as the crown — or should a compressed version of the
   three modes come early, so that every part of speech is learned *with* its reason
   attached from the start? The seed panels do the former. The latter is harder and
   possibly better.
2. **Act VI.** Is the tropes-and-vices material in scope, or does it belong to a future
   *Ars Rhetorica*? Donatus puts it in grammar; a modern reader expects it in rhetoric.
3. **How much Latin must the student actually acquire?** Enough to parse and to see what
   case does — or genuinely enough to read? The second is a much larger app and needs a
   vocabulary system, spaced repetition, and reading passages.
4. **The title.** *Ars Grammatica* is the obvious name. *Grammatica Speculativa* names the
   distinctive part but undersells the elementary course.
