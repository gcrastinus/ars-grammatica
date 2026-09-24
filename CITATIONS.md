# Ars Grammatica — citation audit

Every study panel and every written exercise item in the app carries a source key, shown to
the student at the foot of the panel and clickable for the full reference. The app also has a
**Sources** screen listing all nineteen works.

This document records the *verification* pass: what was checked, against what, what was
confirmed, and — more importantly — **what was wrong and had to be corrected**.

Mechanical audit (run in a headless browser against the built file): 26 deck panels, 41
curated exercise items, 7 exercise generators. **0 untagged. 0 unresolvable keys.** Every
generated question resolves a source, at every difficulty.

---

## 1. Confirmed against the primary text

The user's library contains **Thomas of Erfurt, *Grammatica speculativa*, ed. and trans.
Bursill-Hall (Longman, 1972)** — the modist text itself, not merely a study of it. Every Latin
formula the app quotes was grepped against that text. Confirmed present, verbatim:

| Claim in the app | Status |
|---|---|
| noun — *per modum entis, vel determinatae apprehensionis* | ✅ found |
| pronoun — *per modum entis, et indeterminatae apprehensionis* | ✅ found |
| verb — *per modum esse distantis a substantia* | ✅ found |
| participle — *per modum esse indistantis a substantia* | ✅ found |
| preposition — *adiacentis alteri casuali … ad actum retorquens* | ✅ found |
| conjunction — *per modum coniungentis duo extrema* | ✅ found |
| interjection — *affectus vel motus animae repraesentans* | ✅ found |
| common/proper — *modus communis* / *modus appropriati* | ✅ found |
| substantive/adjective — *per se stantis* / *adiacentis* | ✅ found |
| construction — *constructibilium unio* | ✅ found |
| dependency — *constructibilium unum sit dependens, alterum dependentiam terminans* | ✅ found |
| congruity — *partium sermonis debita unio* | ✅ found |
| completeness — *suppositi cum apposito* | ✅ found |
| the far end — *generare perfectum sensum in animo auditoris* | ✅ found |
| *homo albus* (incomplete) vs *homo est albus* (complete) | ✅ found, in that exact contrast |
| privations and negations are *entia positiva secundum animam* | ✅ found (OCR had split the phrase across lines) |

Read directly, not from memory: the Boethius of Dacia passage on the grammatical identity of
all languages, and the Ockham and John Aurifaber criticisms (Stanford Encyclopedia,
"Medieval Semiotics"); Bursill-Hall's own Chomsky comparison and his verdict on where the
modists failed; Poinsot's formal/instrumental sign distinction and the *ex instituto* /
*ex consuetudine* division (Deely, *Introducing Semiotics*, with his citations into Poinsot);
Aristotle, *De interpretatione* 1, 16a9–16, checked against the text printed with St Thomas's
commentary.

---

## 2. What the check caught — four corrections

These are the reason the pass was worth running. Each was plausible, and each was wrong.

**(a) The four magnitudes were misattributed.** The app said Donatus and Priscian "organise
the whole art by ascending size" — *littera, syllaba, dictio, oratio*. Bursill-Hall states
flatly that **Priscian and Donatus did not have this division**. Donatus gives only *vox,
littera, syllaba*; Priscian treats *vox, littera* in Book I and *syllaba, dictio, oratio* in
Book II. The fourfold division is twelfth-century — **Peter Helias**: *partes huius artis sunt
quatuor*. Corrected, and the panel now tells the student that the tidy ladder is the schools'
work on the Romans rather than the Romans' own. Peter Helias added to the register.

**(b) The incongruity example was invented.** The app used *Socrates album*. Thomas's actual
examples are ***albus currit*** and ***percutio album***. Corrected.

**(c) The multi-dependency example was misquoted.** My plan had *Socrates albus currit bene*;
the text reads ***homo albus currit bene***. Corrected.

**(d) Jespersen was cited without being read.** Fourteen English part-of-speech items carried
`['appown','jesp']`. I had not opened *The Philosophy of Grammar*. That is precisely the
failure mode you asked me to hunt, and mine. The items now carry `['appown']` alone, and
Jespersen has been **removed from the register** until actually used. Yule was removed for the
same reason.

---

## 3. What the check *added*

Verification turned up material better than what it replaced.

- **Boethius of Dacia on the subject of grammar.** The app had "the well-formed utterance".
  His own formulation is sharper: *the modes of expressing an intended mental concept through
  congruous discourse*. He also calls grammar an **introductory science** — not an essential
  part of philosophy as physics and mathematics are, but useful for coming to know those that
  are. Both now in the panel.

- **Boethius of Dacia supplies the *habitus*.** You chose the line that *langue*/*parole* maps
  onto a distinction the tradition already had. It turns out the category is not imported for
  the occasion: arguing that grammar is a science, Boethius says a science is *an acquired
  capacity — a* habitus *— of the intellect*. The Saussure reply now rests on a modist's own
  use of the term rather than on a general appeal to Thomistic psychology.

- **Boethius answers the philology objection in advance.** The panel on what philology gained
  presses the modists on language change. He had already faced the parallel objection: there
  is truly a science of generable and corruptible things, *through the causes with which these
  things are invariably concomitant*; it is not necessary that a science's objects be
  immutable absolutely, else there would be a science only of separate substances. The panel
  now gives his answer and says plainly that whether it stretches far enough is unsettled.

- **Boethius licenses the whole three-traditions frame.** Asking whether grammar is one
  science, he grants that *sciences are capable of being diversified in respect of the same
  knowable object, because of the diversity of the modes of knowing*. One object, several
  sciences. So the comparison of speculative grammar, philology, and modern linguistics is not
  this app's ecumenical gesture — it is a scholastic principle applied. The opening panel of
  the deck now says so.

- **Aristotle, quoted rather than paraphrased.** *De interpretatione* 1: "in composition and
  division there is truth and falsity… Names and verbs, then, are like thought without
  composition or division, for example, 'man' and 'white' when nothing is added; for neither is
  yet true or false." With St Thomas's gloss that truth and falsity are in the intellect's
  composing and dividing. Thomas of Erfurt cites this same chapter for why a complete
  construction needs a verb — so Aristotle, Aquinas, and the modist all stand behind the app's
  governing distinction.

---

## 4. A correction to *Ars Syllogistica*

Your existing grammar panel attributes *per modum habitus et quietis* to Thomas of Erfurt. It
is **Martin of Dacia's** formula (§16). Thomas's own is *per modum entis, vel determinatae
apprehensionis* (§25). Ars Grammatica gives both, attributed correctly. You may want to fix
the line in the other app.

---

## 5. Stated limits — what is *not* fully verified

Recorded so the app does not overclaim.

- **John of St. Thomas is cited at one remove.** Your *Ars logica* (Poinsot 1631–32) is a
  scanned image with no text layer, so no Latin could be extracted from it. The doctrine is
  given as Deely expounds it, with Deely's own locations into Poinsot (1631: 10a6–12; 1632:
  646a14–28; Book I qq. 1, 2, 5; Book II qq. 1–2), and the register says so explicitly. The
  app quotes **no Latin** from Poinsot. To close this, either OCR the volume or add Deely's
  bilingual *Tractatus de Signis*.
- **Donatus and Priscian** were first quoted as given in Bursill-Hall and Copeland & Sluiter.
  The fourth pass (§8) checked Donatus, *Ars maior* III, and the Priscian references against
  online transcriptions of Keil's *Grammatici Latini*.
- **Saussure** is summarised from the standard doctrine of the *Cours*, not quoted. No text of
  it is in the connected folders. If you have one, the panel should quote him.
- **Gracia** is not integrated: neither *A Theory of Textuality* nor *Texts* is in any
  connected folder — only `Metaphysics/Gracia-Categories Invented.pdf`. The citation
  architecture is built so his material slots in as soon as the volumes are reachable.

---

## 6. Second pass (September 2026): corrections against the sources

Checked against Thomas of Erfurt (Bursill-Hall's edition), Bursill-Hall's *Speculative
Grammars*, Boethius of Dacia (McDermott), Isidore (Barney et al.), and St Thomas's
*In Peri hermeneias* (Latin and Oesterle), all in the Storage library.

**(a) Direction of dependence was reversed for the verb.** The workshop taught that
subject and object depend on the verb. Thomas of Erfurt §92 says the opposite: in
*Socrates currit* the verb depends on the suppositum; in *percutio Socratem* the verb
depends on the oblique, which terminates. Deck, items wk2, wk4, wk8 and the generator
corrected. The panel comparing modern dependency grammar now says where the two
pictures part (the modern verb is the head). Bursill-Hall compares Thomas's syntax to
phrase-structure grammar.

**(b) The active mode was said not to be in the word.** The course answered Ockham by
saying the mode is "not a quality in the sound... nothing glued onto the noise." Thomas
(§2, §10) calls the active mode *proprietas vocis ab intellectu sibi concessa* and places
it *in voce significativa ut in subiecto*; active and passive differ materially and are
the same formally (§8). Rewritten: the mode is in the imposed word, not the bare sound;
Ockham denies that what the intellect gives the word is anything real in it.

**(c) The eight parts were said to have been made for Latin.** The eight came from the
Greek list, which counted the article; the Latins dropped it and counted the
interjection, which the Greeks had put under the adverb. Boethius of Dacia q. 2 already
calls the article an accident of some languages, and q. 114 gives the reason the Greeks
needed it (and Latin with *cornu*, *gelu*). Corrected in the modes deck, the parts-of-speech
deck, POS notes, and the Chinese and Arabic decks.

**(d) Gender and the chimaera did not give Thomas's own answers.** §4–5: masculine is
the mode of acting, feminine of being acted upon, neuter neither; *deitas* and
*chimaera* are answered by borrowing a mode from another thing's property, *sufficit quod
non repugnet*. Now given.

**(e) Voice.** Donatus divides voice into articulate (writable) and confused; Priscian
has four kinds (articulate/inarticulate by sense, lettered/unlettered by writing), so a
groan is articulate but unlettered for him. The course had merged the two. Now both are
given, and the exercise says whose sense is meant. St Thomas (Peri herm. I, lect. 4) added
for "voice is sound from the mouth of an animal, with some imagination."

**(f) Smaller corrections.** Verb as "the only part that carries time" (the participle
also does); adverbs said to have no accidents (Donatus gives signification, comparison,
figure); *Socrates albus currit bene* → *homo albus currit bene*; material supposition is
not in Peter of Spain; "origin and foundation of the liberal letters" attributed to
Isidore (checked), not claimed for Cassiodorus; Akkadian *mārūšu* ("his sons") →
*māršu*; Patañjali's five uses of grammar; Sībawayh's account of the vocative; the topic's
governor (*ibtidāʾ*); traditional characters for the Chinese texts; *iudicium* as judging
genuineness and worth, not congruity; "the objection that ended the school" softened to
agree with the traditions deck; congruity-and-truth reconciled with the opening deck
(an incongruous saying may convey a true thought).

**(g) Added.** St Thomas, *In Peri hermeneias* I (register key `aq_ph`): noun and verb as
principal parts, the rest joining them "as nails join the parts of a ship" (lect. 1);
*cursus* signifies without time, *curro* with time, because motion is measured by time
(lect. 5). Yāska's *bhāvapradhānam ākhyātam, sattvapradhānāni nāmāni*.

**Still not verified from a text in the library:** Donatus and Priscian (the Keil volume in
Storage is vol. VII, the orthographers — not Donatus or Priscian; see §8 for the check made
against online transcriptions of Keil); Peter of Spain; Sībawayh; Pāṇini beyond the
sūtra numbers; the Sumerian lines. The Storage folder also holds Deely's bilingual
*Tractatus de signis* (Logic/Aristotelian Logic), which has a text layer and was not checked in this pass. It
could close the Poinsot gap noted in §5.

---

## 7. Third pass (September 2026): the governing rule, and restructuring

**Rule.** Priscian and Donatus are the authorities for the art. Aristotle and St Thomas
are cited for principles grammar borrows and at the boundary with logic, and the
panels say so (*In Peri hermeneias* is marked as the logician's consideration). The
modists supply reasons Priscian does not give, and are kept only where the reason
holds.

**Re-grounded in Priscian and Donatus** (definitions checked against Bursill-Hall's
quotations, then against Hertz's text in the fourth pass, §8): Latin without the article
(II.16); the parts told apart by the property of their signification (II.17); noun (II.18),
pronoun (II.18, XII.1; substance without quality in XVII, GL III 131), verb (VIII.1; Donatus),
participle (XI.8), preposition (XIV.1; Donatus), adverb (XV.1), conjunction (XVI.1),
interjection (Donatus; Priscian XV.40); gender (V.1); noun and verb indispensable (XVII,
GL III 116). Priscian's
definition of *oratio* (II.15) now opens construction; congruity and completeness are
presented as his two tests, named and explained by the modists.

**Where a modist answer was set aside:** the derivation of every gender from acting and
being acted upon (Thomas of Erfurt §§69–71). Priscian V.1 — masculine and feminine known
by nature, the rest by the quality of the word — is taught instead. Ockham and Aurifaber
are presented as objections to the modists' thesis about where the mode is, not to the
art.

**St Thomas added where he is the authority:** the chimaera and names of negation
(*In Peri herm.* I, lect. 4: a suppositum at least in apprehension); why languages
differ (lect. 2: groans signify by nature and are the same for all); the literal sense
of a trope (*ST* I q. 1 a. 10 ad 3, checked in the library's *Summa*).

**New:** a deck and exercise on Donatus, *Ars maior* III (metaplasm, figures of words,
tropes, the other faults), checked against the text in the fourth pass (§8); a closing deck
gathering the open questions from the four other arts.

**Correction to what this pass first recorded.** An earlier version of this section said
that in the four comparative decks only the repeated frame was removed, that every panel of
grammatical content remained, and that all of T's orientation panels were kept. That was
not so. The comparative decks went from 44/42/41/39 panels to 18/18/18/19, and many content
panels were cut with the frame. Fourteen drill items were left with no panel to teach them, and
two orientation panels and a line of the opening deck were lost in the merge. The fourth pass
(§8) restored them. The two opening decks were merged; the active and passive modes were
folded into Act V.

---

## 8. Fourth pass (September 2026): integration, restoration, and the Act VI check

**Integration.** The third-pass revision was brought onto GitHub `main` (6f467e0). Main's
top-right controls (the combined ▶ ▾ play-and-speed button, with the moon alone at the far
right) and its designer credit on the intro screen were kept. The subtitle is again "The
first road of the trivium," and the opening panel and definition speak of the three roads.

**Restored to the comparative decks** (from d78a686, written in the revision's conventions:
traditional characters, corrected forms such as *māršu*, plainer wording):

- *Scribal lists* (18 → 33): Not a book of definitions; Sound is not denied; A line of
  connected Sumerian; The verb as they centre it; Time, as they mark it; A second noun-line
  (now with *dumu = māru* beside *dumu-ni = māršu*); God and the mark (DINGIR); Another paradigm
  line (*i-ŋen*); Letter and word, again; On the authors; Plural, as a piece; The thematic
  list; Who is the hearer?; A directed form (*mu-na-an-šum*); Two languages, one education.
- *Vyākaraṇa* (18 → 34): A sūtra, not a paragraph; Gender and number; the preverb; the
  particle; A second saying (*saḥ pustakaṃ paṭhati*); the infinitive (*gantum*); Where meaning
  begins; moods (now with *gacchet* and the lakāras *loṭ* and *liṅ*); the *Nirukta*; What not to
  import; the passive; the feminine affix (now *kumāra → kumārī*); absolutives; Correctness
  (now the usage of the *śiṣṭa*, which the rules describe); Vedic; Person in the verb.
- *Xiaoxue* (18 → 31): Pictograph and indication; Rhyme books; Imposition, again; A second
  line (自); Parallelism; the dictionary and its radicals; What they did ask; Voice, last;
  者; 而; Initial and remainder; 木 林 森; 於.
- *Naḥw* (19 → 30): Agreement (a plural of things, not persons, commonly takes a feminine
  singular adjective; following, not a mode of adhering); the dual and the sound plural; What
  they did ask; the relative *alladhī* (an *ism mawṣūl* completed by its *ṣila*, not governing
  it); the vocative (for Sībawayh the object of an unspoken "I call"; later dispute over
  whether *yā* governs); negation; the broken plural; the five nouns; tanwīn (*rajulun* /
  *al-rajulu*); the jussive (jazm, the imperfect's third state); the warning on Wright. "Compared
  with Donatus" now agrees with the agreement panel.

Every drill item in the four comparative exercises is now taught by a panel in its deck
(the orphaned items sc4, sc8, sc18–20, sc26–28, vy12, vy16, xi7, xi12, xi18 and nh15
included).

**Still cut, on purpose:** each deck's QUESTIONS LEFT OPEN block (its themes are in the
closing deck, "What the Four Arts Ask of Ours"); the repeated "How to use our art here,"
"What they did not ask," and "What this art can do that ours does not" framing panels; the
separate *accessus* deck (merged into "What Grammar Is") and the "Two sides of one mode"
deck and exercise (active and passive modes folded into Act V).

**Restored to "What Grammar Is":** "The tools, and the one who uses them," "The art, and the
reasons," and the line "Grammar is a foundation, not a crown." The duplicated Isidore line
was removed.

**Act VI checked against Donatus, *Ars maior* III** (Keil, *GL* IV, as transcribed in the
Bibliotheca Augustana and cross-checked against the Georgetown text). Confirmed: the
definitions of barbarism, solecism (*in poemate schema*), metaplasm and trope; figures of
words for the grammarians and of thought for the orators; allegory with irony as a species;
amphibolia; the order of the book; Isidore's list. Corrected:

- Metaplasm: Donatus counts fourteen. The panel gave eight and now gives all fourteen,
  adding diaeresis, episynaloephe, ecthlipsis, antithesis and metathesis. Examples replaced with
  Donatus's own: paragoge *potestur* for *potest* (not *admittier*); syncope *commorat* for
  *commoverat* (not *repostum*); plus *Albai longai*, *Phaethon*, *multum ille*, *olli*,
  *Euandre*.
- Figures: anaphora is at the head of several *lines* (*nate, meae vires … nate patris
  summi*); polysyndeton now uses Donatus's *Acamasque Thoasque Pelidesque Neoptolemusque*;
  he names seventeen as necessary.
- Tropes: Donatus counts thirteen. Metaphor's four kinds are given with his examples (Tiphys,
  *pelagus tenuere rates*, Atlas's "head," *pectore robur*); the "indignant river" is not his.
  Metonymy now uses *sine Cerere et Libero friget Venus*, not Vulcan. Antonomasia now uses
  *Anchisiades* for Aeneas, not *Tydides*. Hyperbole enlarges or lessens (*nive candidior*,
  *tardior testudine*).
- Other faults: he counts twelve with barbarism and solecism. Tautology is *eiusdem
  dictionis repetitio vitiosa* (*egomet ipse*). Pleonasm is given with *sic ore locuta est*.
- Drills fd3, fd5, fd12–fd15 corrected to match; fd19–fd21 added (antithesis, metathesis,
  diaeresis).

**Priscian spot-checked** against Hertz (*GL* II–III) as transcribed by the St Gall Priscian
Glosses project and on Latin Wikisource: I.1 (voice, the four differences); II.15 (*oratio est
ordinatio dictionum congrua, sententiam perfectam demonstrans*); II.16 (the article, *quibus
nos caremus*); II.17 (the counts of the parts; *proprietates significationum*); II.18 (noun;
pronoun *pro aliquo nomine proprio*); V.1 (gender: two known by nature, common and neuter
*vocis magis qualitate quam natura*); VIII.1; XI.8; XII.1; XIV; XV.1; XV.40 (the interjection);
XVI.1; XVII at GL III 116 (take away noun or verb and the sentence is incomplete) and GL III
131 (pronouns *substantiam solam sine qualitate significant*). The register had put the
Latins' dropping of the article at II.16–17 and the pronoun at "XVII.37." These are now
cited as II.16, II.17, and XVII by Keil page, because the section numbers within XVII could
not be confirmed.

**Also:** *suppositum* and *appositum* are now described as common terms of twelfth-century
grammar that Peter Helias used, not as his coinage. The last "the school" (meaning the
modists) in the Three Ways and Universal Grammar decks and in item fg4 was replaced. The
modes exercise now carries Act V.
