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
- **Donatus and Priscian** are quoted as given in Bursill-Hall and Copeland & Sluiter, not
  from *Grammatici Latini* directly. Your library has Keil; it can be done properly.
- **Saussure** is summarised from the standard doctrine of the *Cours*, not quoted. No text of
  it is in the connected folders. If you have one, the panel should quote him.
- **Gracia** is not integrated: neither *A Theory of Textuality* nor *Texts* is in any
  connected folder — only `Metaphysics/Gracia-Categories Invented.pdf`. The citation
  architecture is built so his material slots in as soon as the volumes are reachable.
