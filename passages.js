/* The prose and poetry passages of English, Greek, French, and German, read in the passage view (section IV).
   index.html merges them into PASSAGES; make_text.js loads this file in the same way. Each draft keeps its own note
   of the texts it follows. The Latin passages are in index.html. */
window.MORE_PASSAGES = {};
(function(PASSAGES){

/* ===== en ===== */
/* English prose and poetry. Texts as printed by Project Gutenberg (the Declaration, eBook 1; Gibbon, 731; Boswell,
   1564; Burke, 15679; Newman, 24526; Austen, 1342; the King James Version, 10; Bacon, 575; Dickens, 98; Milton,
   Areopagitica 608 and Paradise Lost 26; Swift, 1080; Melville, 2701; Thoreau, 205; Shakespeare's Sonnets, 1041;
   Coleridge, 151) and by Wikisource (Lincoln, the Bliss copy and the Second Inaugural; Gray, Verona 1776;
   Wordsworth, 1807), read 2026-10-15. Spacing is made uniform, and the double hyphen of the plain texts is printed
   as a dash. */
Object.assign(PASSAGES, {
'en-decl': {lang:'en', author:'The Declaration of Independence', work:'', locus:'1776', src:['engclass'],
  lat:'When in the Course of human events, it becomes necessary for one people to dissolve the political bands which have connected them with another, and to assume, among the Powers of the earth, the separate and equal station to which the Laws of Nature and of Nature’s God entitle them, a decent respect to the opinions of mankind requires that they should declare the causes which impel them to the separation. We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty, and the pursuit of Happiness.',
  ctx:'The Declaration of Independence, adopted by the Continental Congress on July 4, 1776, opens with one long period that states why a declaration is needed at all. Its main clause is held back until the reasons for it have been set out. The second sentence then states the truths on which the argument rests.',
  parts:[
   {t:'When in the Course of human events, it becomes necessary', h:'A clause of time, held first', n:'The sentence opens with a dependent clause introduced by “when.” Its subject, “it,” looks forward to the infinitives that follow: it becomes necessary to dissolve and to assume. The main clause does not come until much later.'},
   {t:'for one people to dissolve the political bands which have connected them with another', h:'The first infinitive, with its subject', n:'“For one people” names who must act, and “to dissolve” is the first of two infinitives that say what becomes necessary. “Which have connected them with another” is a relative clause describing the bands.'},
   {t:'and to assume, among the Powers of the earth, the separate and equal station', h:'The second infinitive', n:'“And” joins a second infinitive, “to assume.” Its object is “the separate and equal station,” and the phrase “among the Powers of the earth” stands between the verb and its object.'},
   {t:'to which the Laws of Nature and of Nature’s God entitle them', h:'A relative clause', n:'“To which” begins a relative clause that describes the station: the station to which the laws of nature entitle them.'},
   {t:'a decent respect to the opinions of mankind requires', h:'The main clause', n:'Here at last are the subject and the verb of the main clause: “a decent respect … requires.” Everything before it belongs to the clause of time.'},
   {t:'that they should declare the causes which impel them to the separation', h:'A noun clause as object', n:'“That they should declare” is a noun clause, the object of “requires,” and “which impel them to the separation” is a relative clause describing the causes.'},
   {t:'We hold these truths to be self-evident', h:'A short main clause', n:'The second sentence begins with its main clause: a subject, a verb, an object, and an infinitive phrase that completes the object.'},
   {t:'that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty, and the pursuit of Happiness', h:'Three noun clauses in apposition', n:'Three clauses introduced by “that” stand in apposition to “these truths” and say what the truths are. They follow one another without “and,” as companions of the same rank.'}],
  qs:[
   {t:'When in the Course of human events', q:'The clause beginning with “when” is…', a:'A dependent clause of time, which the main clause follows', ds:['The main clause of the sentence','A relative clause describing “events”','A noun clause, the subject of “requires”'], why:'“When” subordinates the clause, and the main clause, “a decent respect … requires,” comes after it.'},
   {t:'to dissolve', q:'“To dissolve” and “to assume” are…', a:'Infinitives that say what “it becomes necessary” to do', ds:['The verbs of the main clause','Prepositional phrases of place','Participles describing “people”'], why:'The anticipatory “it” is explained by the two infinitives: it becomes necessary to dissolve the bands and to assume a station.'},
   {t:'requires', q:'What is the main verb of the first sentence?', a:'“Requires,” with “a decent respect” as its subject', ds:['“Becomes,” with “it” as its subject','“Dissolve,” with “people” as its subject','“Entitle,” with “the Laws” as its subject'], why:'“Becomes” and “entitle” belong to dependent clauses, and “dissolve” is an infinitive. The main clause is “a decent respect … requires.”'},
   {t:'that they should declare', q:'“That they should declare the causes” is…', a:'A noun clause, the object of “requires”', ds:['An adverb clause of purpose','A relative clause describing “mankind”','A second main clause'], why:'The clause names what respect requires, so it does the work of a noun, the object of the verb.'},
   {t:'that all men are created equal', q:'The three clauses beginning with “that” are…', a:'Noun clauses in apposition to “these truths”', ds:['Relative clauses describing “We”','Adverb clauses of result','Three independent sentences'], why:'Each clause names one of the truths, so the three stand in apposition to “these truths.”'}]},

'en-gibbon': {lang:'en', author:'Gibbon', work:'The Decline and Fall of the Roman Empire', locus:'chapter I', src:['engclass'],
  lat:'In the second century of the Christian Æra, the empire of Rome comprehended the fairest part of the earth, and the most civilized portion of mankind. The frontiers of that extensive monarchy were guarded by ancient renown and disciplined valor. The gentle but powerful influence of laws and manners had gradually cemented the union of the provinces. Their peaceful inhabitants enjoyed and abused the advantages of wealth and luxury.',
  ctx:'Edward Gibbon published the first volume of his history in 1776. He opens by describing the empire at its height, in the age of the Antonines, before he tells of its decline. Each sentence is balanced in pairs.',
  parts:[
   {t:'In the second century of the Christian Æra', h:'A phrase of time, placed first', n:'A prepositional phrase of time opens the sentence and sets the scene. It is not a clause, since it has no verb of its own.'},
   {t:'the empire of Rome comprehended the fairest part of the earth, and the most civilized portion of mankind', h:'One verb, two objects', n:'The subject is “the empire of Rome,” and the verb “comprehended” (included) has two objects joined by “and”: the fairest part of the earth and the most civilized portion of mankind. The two objects are built alike, a superlative and a noun.'},
   {t:'were guarded by ancient renown and disciplined valor', h:'A passive verb with its agent', n:'“Were guarded” is passive, so the subject, the frontiers, receives the action, and “by ancient renown and disciplined valor” names what guarded them.'},
   {t:'The gentle but powerful influence of laws and manners had gradually cemented the union of the provinces', h:'The past perfect', n:'“Had cemented” is the past perfect: the union was already made by the time of which Gibbon speaks. “Gentle but powerful” sets two adjectives against each other.'},
   {t:'Their peaceful inhabitants enjoyed and abused the advantages of wealth and luxury', h:'Two verbs, one object', n:'Two verbs, “enjoyed and abused,” share one object. The pairing of the verbs carries the judgment of the sentence.'}],
  qs:[
   {t:'In the second century', q:'“In the second century of the Christian Æra” is…', a:'A prepositional phrase of time', ds:['A dependent clause of time','The subject of the sentence','A noun clause'], why:'It has no verb of its own, so it is a phrase, and it tells when.'},
   {t:'comprehended', q:'How many objects does “comprehended” have?', a:'Two, joined by “and”', ds:['One, “the earth”','None, since the verb is passive','Three, one for each noun'], why:'The two objects are “the fairest part of the earth” and “the most civilized portion of mankind.”'},
   {t:'were guarded', q:'“Were guarded by ancient renown” is…', a:'A passive verb with its agent', ds:['An active verb with its object','A participle describing “monarchy”','A verb in the subjunctive'], why:'The subject receives the guarding, and “by” names the agent.'},
   {t:'had gradually cemented', q:'Why does Gibbon write “had cemented”?', a:'It is the past perfect: the union was already made at the time described', ds:['It is the passive voice','It is the present perfect','It is the conditional'], why:'“Had” with the past participle places one past action before another past time.'}]},

'en-johnson': {lang:'en', author:'Johnson', work:'Letter to the Earl of Chesterfield', locus:'1755, in Boswell’s Life', src:['engclass'],
  lat:'Seven years, my Lord, have now past, since I waited in your outward rooms, or was repulsed from your door; during which time I have been pushing on my work through difficulties, of which it is useless to complain, and have brought it, at last, to the verge of publication, without one act of assistance, one word of encouragement, or one smile of favour. Such treatment I did not expect, for I never had a Patron before.',
  ctx:'Samuel Johnson had once sought the help of Lord Chesterfield for his Dictionary and had been turned away. When the Dictionary was about to appear, Chesterfield praised it in print, and Johnson replied with this letter, which Boswell prints in his Life of Johnson.',
  parts:[
   {t:'Seven years, my Lord, have now past', h:'The main clause', n:'The main clause is short: “seven years have now past,” with “my Lord” as the address set inside it. “Past” is the older spelling of “passed.”'},
   {t:'since I waited in your outward rooms, or was repulsed from your door', h:'A clause of time', n:'“Since” begins a dependent clause of time, with two verbs joined by “or”: I waited, or was repulsed.'},
   {t:'during which time I have been pushing on my work through difficulties', h:'A relative clause', n:'“During which time” takes up the seven years and begins a relative clause. Its verb, “have been pushing,” is the present perfect progressive, an action going on through the whole time.'},
   {t:'of which it is useless to complain', h:'A relative clause within the relative clause', n:'“Of which” takes up “difficulties.” The subject “it” looks forward to the infinitive “to complain.”'},
   {t:'and have brought it, at last, to the verge of publication', h:'A second verb', n:'“And” joins a second verb, “have brought,” to “have been pushing,” under the same subject “I.”'},
   {t:'without one act of assistance, one word of encouragement, or one smile of favour', h:'A series of three', n:'Three objects of “without,” each built the same way, end the period. The repetition of “one” makes each lack separate.'},
   {t:'Such treatment I did not expect', h:'The object placed first', n:'The object, “such treatment,” stands before its subject and verb for emphasis.'}],
  qs:[
   {t:'my Lord', q:'“My Lord” in the first sentence is…', a:'A noun of address, outside the construction of the clause', ds:['The subject of “have past”','The object of “waited”','An appositive to “years”'], why:'The phrase names the person spoken to and has no grammatical work in the clause.'},
   {t:'during which time', q:'“During which time I have been pushing on my work” is…', a:'A relative clause taking up “seven years”', ds:['A new independent sentence','A noun clause, the object of “waited”','A clause of purpose'], why:'“Which” refers back to the seven years, so the clause depends on them.'},
   {t:'it is useless to complain', q:'In “it is useless to complain,” what is “it”?', a:'An anticipatory subject that looks forward to “to complain”', ds:['A pronoun standing for “my work”','A pronoun standing for “the door”','The object of “complain”'], why:'The real subject is the infinitive: to complain is useless.'},
   {t:'without one act of assistance', q:'The three phrases after “without” are…', a:'Three objects of the one preposition, built alike', ds:['Three subjects of “brought”','Three relative clauses','Three adverbs of manner'], why:'“Without” governs all three: one act, one word, one smile.'},
   {t:'Such treatment', q:'Why does “such treatment” come first in its sentence?', a:'The object is placed before the subject for emphasis', ds:['It is the subject of “expect”','It is a phrase of time','It is a noun of address'], why:'The ordinary order would be “I did not expect such treatment”; placing the object first stresses it.'}]},

'en-burke': {lang:'en', author:'Burke', work:'Reflections on the Revolution in France', locus:'1790', src:['engclass'],
  lat:'It is now sixteen or seventeen years since I saw the queen of France, then the Dauphiness, at Versailles; and surely never lighted on this orb, which she hardly seemed to touch, a more delightful vision. I saw her just above the horizon, decorating and cheering the elevated sphere she just began to move in,—glittering like the morning-star, full of life and splendor and joy.',
  ctx:'Edmund Burke wrote the Reflections in 1790 against the course of the French Revolution. In this passage he recalls Marie Antoinette as he saw her years before, when she had newly come to France.',
  parts:[
   {t:'It is now sixteen or seventeen years since I saw the queen of France', h:'The main clause and a clause of time', n:'“It is now sixteen or seventeen years” is the main clause, and “since I saw the queen of France” is a dependent clause of time.'},
   {t:'then the Dauphiness', h:'An appositive', n:'“Then the Dauphiness” is in apposition to “the queen of France” and says what she was at that time.'},
   {t:'and surely never lighted on this orb', h:'Inversion', n:'In the second clause the verb “lighted” comes before its subject, which is held to the end: never lighted on this orb a more delightful vision. The inversion follows the negative adverb “never.”'},
   {t:'which she hardly seemed to touch', h:'A relative clause', n:'“Which” takes up “this orb,” the earth, and the infinitive “to touch” completes “seemed.”'},
   {t:'a more delightful vision', h:'The delayed subject', n:'This is the subject of “lighted,” placed last.'},
   {t:'decorating and cheering the elevated sphere she just began to move in', h:'Participles and a relative clause', n:'The participles “decorating and cheering” describe “her,” the object of “saw.” “She just began to move in” is a relative clause with no relative pronoun: the sphere that she began to move in.'},
   {t:'glittering like the morning-star, full of life and splendor and joy', h:'A further participle and an adjective phrase', n:'After the dash, “glittering” and “full of life” add two more descriptions of her, still depending on “saw her.”'}],
  qs:[
   {t:'since I saw', q:'“Since I saw the queen of France” is…', a:'A dependent clause of time', ds:['The main clause','A relative clause describing “years”','A noun clause'], why:'“Since” subordinates the clause, and the main clause is “it is now sixteen or seventeen years.”'},
   {t:'never lighted', q:'What is the subject of “lighted”?', a:'“A more delightful vision,” placed after the verb', ds:['“I”','“This orb”','“She”'], why:'After “never,” Burke inverts the order and holds the subject to the end of the clause.'},
   {t:'which she hardly seemed to touch', q:'“Which she hardly seemed to touch” describes…', a:'“This orb,” the earth', ds:['“The queen of France”','“Versailles”','“A vision”'], why:'The relative takes up the nearest noun that fits, the orb she seemed hardly to touch.'},
   {t:'she just began to move in', q:'“She just began to move in” is…', a:'A relative clause without a relative pronoun', ds:['A second main clause','A clause of purpose','A participial phrase'], why:'English may leave out “that” or “which” when the relative is the object: the sphere that she began to move in.'}]},

'en-newman': {lang:'en', author:'Newman', work:'The Idea of a University', locus:'Discourse VIII', src:['engclass'],
  lat:'Hence it is that it is almost a definition of a gentleman to say he is one who never inflicts pain. This description is both refined and, as far as it goes, accurate. He is mainly occupied in merely removing the obstacles which hinder the free and unembarrassed action of those about him; and he concurs with their movements rather than takes the initiative himself.',
  ctx:'John Henry Newman gave these discourses in Dublin in 1852. Here he describes the gentleman whom a liberal education forms, and he defines him with care, adding a qualification to each claim.',
  parts:[
   {t:'Hence it is that', h:'An emphatic frame', n:'“Hence it is that” introduces the main statement with emphasis. The real subject follows the second “it.”'},
   {t:'it is almost a definition of a gentleman to say he is one who never inflicts pain', h:'An anticipatory subject', n:'“It” looks forward to the infinitive “to say”: to say this is almost a definition. “He is one who never inflicts pain” is the content said, a noun clause without “that,” and “who never inflicts pain” is a relative clause describing “one.”'},
   {t:'This description is both refined and, as far as it goes, accurate', h:'A qualification set inside', n:'“Both … and” joins two predicate adjectives, and “as far as it goes,” a clause of degree, limits the second.'},
   {t:'He is mainly occupied in merely removing the obstacles which hinder the free and unembarrassed action of those about him', h:'A gerund and a relative clause', n:'“Removing” is a gerund, the object of “in,” and “which hinder” is a relative clause describing the obstacles.'},
   {t:'and he concurs with their movements rather than takes the initiative himself', h:'Two verbs compared', n:'“Rather than” sets two verbs against each other with the same subject: he concurs rather than takes the initiative.'}],
  qs:[
   {t:'to say he is one who never inflicts pain', q:'In “it is almost a definition … to say,” what is the real subject?', a:'The infinitive phrase “to say he is one who never inflicts pain”', ds:['“A gentleman”','“A definition”','“Pain”'], why:'The first “it” looks forward to the infinitive, which is the real subject.'},
   {t:'who never inflicts pain', q:'“Who never inflicts pain” is…', a:'A relative clause describing “one”', ds:['A noun clause, the object of “say”','A clause of time','A question'], why:'“Who” takes up “one” and tells which one is meant.'},
   {t:'as far as it goes', q:'“As far as it goes” is…', a:'A clause that limits “accurate”', ds:['The main clause','A relative clause','The subject of “is”'], why:'It qualifies the claim: accurate within its limits.'},
   {t:'removing', q:'“Removing” is…', a:'A gerund, the object of the preposition “in”', ds:['A participle describing “he”','The main verb','An adjective describing “obstacles”'], why:'A verb form in “-ing” used as a noun after a preposition is a gerund.'}]},

'en-austen': {lang:'en', author:'Austen', work:'Pride and Prejudice', locus:'chapter 1', src:['engclass'],
  lat:'It is a truth universally acknowledged, that a single man in possession of a good fortune must be in want of a wife. However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered as the rightful property of some one or other of their daughters.',
  ctx:'Jane Austen’s novel, published in 1813, opens with a general statement that the story will soon qualify. The second sentence shows the same truth at work in a neighborhood.',
  parts:[
   {t:'It is a truth universally acknowledged', h:'An anticipatory subject', n:'“It” looks forward to the clause after the comma, which is the real subject: that a single man must be in want of a wife is a truth.'},
   {t:'that a single man in possession of a good fortune must be in want of a wife', h:'The noun clause', n:'The clause introduced by “that” names the truth. “In possession of a good fortune” is a prepositional phrase describing “a single man.”'},
   {t:'However little known the feelings or views of such a man may be on his first entering a neighbourhood', h:'A clause of concession', n:'“However little known … may be” concedes a point: no matter how little his feelings are known. The phrase “on his first entering” uses the gerund “entering” with the possessive “his.”'},
   {t:'this truth is so well fixed in the minds of the surrounding families', h:'The main clause', n:'After the concession comes the main clause, and “so well fixed” prepares for a clause of result.'},
   {t:'that he is considered as the rightful property of some one or other of their daughters', h:'A clause of result', n:'“So … that” gives the result: the truth is so well fixed that he is considered their daughters’ property.'}],
  qs:[
   {t:'It is a truth', q:'What is the real subject of “It is a truth universally acknowledged”?', a:'The clause “that a single man … must be in want of a wife”', ds:['“A truth”','“A single man”','“A wife”'], why:'“It” anticipates the noun clause that follows the comma.'},
   {t:'However little known', q:'The clause beginning “however little known” is…', a:'A clause of concession', ds:['The main clause','A relative clause describing “man”','A clause of purpose'], why:'“However” concedes: however little his feelings may be known, the truth still holds.'},
   {t:'his first entering', q:'In “his first entering a neighbourhood,” “entering” is…', a:'A gerund, used as a noun with the possessive “his”', ds:['A present participle describing “man”','The main verb','An adjective'], why:'The possessive marks “entering” as a noun: his entering.'},
   {t:'so well fixed', q:'“So well fixed … that he is considered” expresses…', a:'A result', ds:['A purpose','A condition','A comparison of equality'], why:'“So … that” states the result of the degree named.'}]},

'en-hebrews': {lang:'en', author:'The Epistle to the Hebrews', work:'King James Version', locus:'1:1–3', src:['engclass'],
  lat:'God, who at sundry times and in divers manners spake in time past unto the fathers by the prophets, Hath in these last days spoken unto us by his Son, whom he hath appointed heir of all things, by whom also he made the worlds; Who being the brightness of his glory, and the express image of his person, and upholding all things by the word of his power, when he had by himself purged our sins, sat down on the right hand of the Majesty on high:',
  ctx:'The Epistle to the Hebrews opens with one long Greek period, which the King James translators (1611) followed closely. The capital in “Hath” marks the start of the second verse in that edition.',
  parts:[
   {t:'God, who at sundry times and in divers manners spake in time past unto the fathers by the prophets', h:'The subject and a relative clause', n:'“God” is the subject of the whole first sentence. The relative clause “who … spake” describes him, and its verb, “spake,” is the older past of “speak.”'},
   {t:'Hath in these last days spoken unto us by his Son', h:'The main verb', n:'“Hath spoken” is the main verb, after the long relative clause. “Spake … in time past” and “hath spoken … in these last days” are set against each other.'},
   {t:'whom he hath appointed heir of all things', h:'A relative clause', n:'“Whom” takes up “his Son” and is the object of “hath appointed,” and “heir of all things” completes the object.'},
   {t:'by whom also he made the worlds', h:'A second relative clause', n:'A second relative clause, joined without “and,” also takes up the Son.'},
   {t:'Who being the brightness of his glory, and the express image of his person, and upholding all things by the word of his power', h:'A relative with participles', n:'“Who” begins a new relative clause about the Son. Before its verb come the participles “being” and “upholding,” which describe him.'},
   {t:'when he had by himself purged our sins', h:'A clause of time', n:'“When” introduces a dependent clause in the past perfect: the purging came first.'},
   {t:'sat down on the right hand of the Majesty on high', h:'The verb of the relative clause', n:'“Sat down” is the verb of “who,” reached only after the participles and the clause of time.'}],
  qs:[
   {t:'who at sundry times', q:'“Who at sundry times … spake” is…', a:'A relative clause describing “God”', ds:['The main clause','A clause of time','A noun clause'], why:'“Who” takes up “God,” and the main verb comes later: God … hath spoken.'},
   {t:'Hath in these last days spoken', q:'What is the main verb of the first sentence?', a:'“Hath spoken”', ds:['“Spake”','“Made”','“Appointed”'], why:'“Spake,” “appointed,” and “made” belong to relative clauses; “God … hath spoken” is the main clause.'},
   {t:'whom', q:'“Whom” in “whom he hath appointed” is…', a:'The object of “hath appointed,” taking up “his Son”', ds:['The subject of “hath appointed”','A pronoun standing for “God”','An interrogative pronoun'], why:'“He” is the subject, and “whom,” the objective form, is the object.'},
   {t:'being', q:'“Being” and “upholding” are…', a:'Participles describing the Son, the subject of “sat down”', ds:['Gerunds, objects of a preposition','Main verbs','Infinitives'], why:'They describe “who” before its verb, “sat down,” arrives.'},
   {t:'sat down', q:'“Sat down” is the verb of which subject?', a:'“Who,” the Son', ds:['“God”','“the fathers”','“the prophets”'], why:'The relative “who” is the subject, and “sat down” is its verb.'}]},

'en-bacon': {lang:'en', author:'Bacon', work:'Essays', locus:'“Of Studies”', src:['engclass'],
  lat:'Studies serve for delight, for ornament, and for ability. Their chief use for delight, is in privateness and retiring; for ornament, is in discourse; and for ability, is in the judgment, and disposition of business. For expert men can execute, and perhaps judge of particulars, one by one; but the general counsels, and the plots and marshalling of affairs, come best, from those that are learned.',
  ctx:'Francis Bacon’s essay “Of Studies” appeared in 1597 and was enlarged in 1625. Bacon writes in short, balanced members, and he leaves out words that the reader can supply from what came before.',
  parts:[
   {t:'Studies serve for delight, for ornament, and for ability', h:'Three parallel phrases', n:'One verb, “serve,” has three prepositional phrases built alike: for delight, for ornament, for ability.'},
   {t:'Their chief use for delight, is in privateness and retiring', h:'The first member', n:'The subject is “their chief use for delight,” and the predicate is “is in privateness and retiring.” The comma before “is” follows the older practice of pointing.'},
   {t:'for ornament, is in discourse', h:'Ellipsis', n:'The words “their chief use” are left out and must be supplied: their chief use for ornament is in discourse. Leaving out words that the sense supplies is ellipsis.'},
   {t:'and for ability, is in the judgment, and disposition of business', h:'The third member', n:'The same ellipsis: their chief use for ability is in the judgment and disposition of business.'},
   {t:'For expert men can execute, and perhaps judge of particulars, one by one', h:'A reason, with “for”', n:'“For” gives the reason for what was said. Two verbs, “execute” and “judge,” depend on “can.”'},
   {t:'but the general counsels, and the plots and marshalling of affairs, come best, from those that are learned', h:'A contrast', n:'“But” sets a second clause against the first. Its subject is the counsels and the plots, its verb “come,” and “those that are learned” contains a relative clause.'}],
  qs:[
   {t:'for delight, for ornament, and for ability', q:'“For delight, for ornament, and for ability” are…', a:'Three prepositional phrases depending on “serve”', ds:['Three subjects','Three clauses','Three objects of “studies”'], why:'Each phrase tells what studies serve for.'},
   {t:'for ornament, is in discourse', q:'What must be supplied in “for ornament, is in discourse”?', a:'“Their chief use,” left out by ellipsis', ds:['“Studies,” as the object','“For,” as a second preposition','Nothing, since the clause is complete'], why:'The member repeats the pattern of the one before, and the subject is understood from it.'},
   {t:'For expert men', q:'“For” in “For expert men can execute” means…', a:'“Because”: it gives a reason', ds:['“On behalf of”','“During”','“Instead of”'], why:'Here “for” is a conjunction that introduces the reason for the claim before it.'},
   {t:'those that are learned', q:'“That are learned” is…', a:'A relative clause describing “those”', ds:['A noun clause','A clause of result','The main verb'], why:'“That” takes up “those” and tells which people are meant.'}]},

'en-gettysburg': {lang:'en', author:'Lincoln', work:'Gettysburg Address', locus:'1863, the Bliss copy', src:['engclass'],
  lat:'Four score and seven years ago our fathers brought forth, on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal. Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure.',
  ctx:'Abraham Lincoln spoke at the dedication of the soldiers’ cemetery at Gettysburg on November 19, 1863. The text here is the copy he signed, known as the Bliss copy.',
  parts:[
   {t:'Four score and seven years ago', h:'A phrase of time', n:'“Four score and seven years ago” tells when; “score” means twenty, so the phrase means eighty-seven years ago.'},
   {t:'our fathers brought forth, on this continent, a new nation', h:'The main clause', n:'The subject is “our fathers,” the verb “brought forth,” and the object “a new nation,” with the phrase of place set between the verb and the object.'},
   {t:'conceived in Liberty, and dedicated to the proposition', h:'Two participles', n:'Two past participles, joined by “and,” describe the nation.'},
   {t:'that all men are created equal', h:'A noun clause in apposition', n:'“That all men are created equal” names the proposition, in apposition to it.'},
   {t:'Now we are engaged in a great civil war, testing', h:'A participle of purpose and manner', n:'“Testing” is a participle that describes the war: a war testing whether the nation can endure.'},
   {t:'whether that nation, or any nation so conceived and so dedicated, can long endure', h:'An indirect question', n:'“Whether” introduces an indirect question, the object of “testing.” Its subject is “that nation, or any nation,” and its verb is “can endure.”'}],
  qs:[
   {t:'Four score', q:'“Four score and seven years ago” is…', a:'An adverbial phrase of time', ds:['The subject of “brought forth”','A noun clause','An appositive to “fathers”'], why:'It tells when the fathers acted; it is not a clause, since it has no verb.'},
   {t:'conceived in Liberty', q:'“Conceived” and “dedicated” are…', a:'Past participles describing “a new nation”', ds:['Main verbs in the past tense','Infinitives','Gerunds'], why:'They have no subject of their own and describe the noun before them.'},
   {t:'that all men are created equal', q:'“That all men are created equal” is…', a:'A noun clause in apposition to “the proposition”', ds:['A relative clause describing “men”','A clause of purpose','A clause of result'], why:'It says what the proposition is.'},
   {t:'whether', q:'The clause beginning with “whether” is…', a:'An indirect question, the object of “testing”', ds:['A condition','A relative clause','A main clause'], why:'“Whether” reports a question: whether the nation can long endure.'}]},

'en-lincoln2': {lang:'en', author:'Lincoln', work:'Second Inaugural Address', locus:'1865', src:['engclass'],
  lat:'With malice toward none; with charity for all; with firmness in the right, as God gives us to see the right, let us strive on to finish the work we are in; to bind up the nation\'s wounds; to care for him who shall have borne the battle, and for his widow, and his orphan—to do all which may achieve and cherish a just and lasting peace among ourselves, and with all nations.',
  ctx:'Lincoln gave his second inaugural address on March 4, 1865, a few weeks before the end of the Civil War. This is its last sentence, a single period.',
  parts:[
   {t:'With malice toward none; with charity for all; with firmness in the right', h:'Three phrases of manner', n:'Three prepositional phrases, each beginning with “with,” tell in what spirit the action is to be done. They are set apart by semicolons and build toward the main clause.'},
   {t:'as God gives us to see the right', h:'A clause of manner', n:'“As” introduces a dependent clause that limits “firmness in the right”: as far as God lets us see it.'},
   {t:'let us strive on', h:'The main clause', n:'“Let us strive on” is the main clause, an exhortation in the first person plural.'},
   {t:'to finish the work we are in', h:'An infinitive of purpose', n:'“To finish” gives the purpose of striving, and “we are in” is a relative clause without “that.”'},
   {t:'to bind up the nation\'s wounds; to care for him who shall have borne the battle, and for his widow, and his orphan', h:'More infinitives', n:'Further infinitives, each giving a purpose, follow in series. “Who shall have borne the battle” is a relative clause in the future perfect.'},
   {t:'to do all which may achieve and cherish a just and lasting peace among ourselves, and with all nations', h:'The summing infinitive', n:'After the dash, “to do all” gathers the preceding purposes into one, and “which may achieve and cherish” is a relative clause describing “all.”'}],
  qs:[
   {t:'With malice toward none', q:'The phrases beginning with “with” are…', a:'Prepositional phrases of manner leading to the main clause', ds:['Three independent clauses','Subjects of “strive”','Relative clauses'], why:'They have no verbs, and they describe the manner of striving.'},
   {t:'let us strive on', q:'What is the main clause?', a:'“Let us strive on”', ds:['“God gives us to see the right”','“We are in”','“Who shall have borne the battle”'], why:'The other clauses depend on something; “let us strive on” stands alone.'},
   {t:'to finish', q:'“To finish the work” is…', a:'An infinitive of purpose depending on “strive”', ds:['The subject of the sentence','A gerund','A noun clause'], why:'It tells what the striving is for.'},
   {t:'who shall have borne the battle', q:'“Who shall have borne the battle” is in which tense?', a:'The future perfect', ds:['The past perfect','The present perfect','The simple future'], why:'“Shall have borne” places the bearing as complete at a future time.'}]},

/* The English prose of the drill. */
'en-dickens': {lang:'en', author:'Dickens', work:'A Tale of Two Cities', locus:'chapter 1', src:['engclass'],
  lat:'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way—in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only.',
  ctx:'Charles Dickens published A Tale of Two Cities in 1859. It is set in London and Paris before and during the French Revolution, and it opens with this single long sentence.',
  parts:[
   {t:'It was the best of times, it was the worst of times', h:'Clauses in pairs', n:'The sentence begins with short independent clauses, set in contrasting pairs and joined only by commas.'},
   {t:'we had everything before us, we had nothing before us', h:'A change of subject', n:'The pairs continue with a new subject, “we,” and the same contrast.'},
   {t:'in short, the period was so far like the present period', h:'The summing clause', n:'After the dash, “in short” gathers the pairs into one statement, and “so far like” prepares a clause of result.'},
   {t:'that some of its noisiest authorities insisted on its being received', h:'A clause of result', n:'“So … that” gives the result. “Its being received” is a gerund with the possessive “its,” the object of “on.”'}],
  qs:[
   {t:'It was the best of times, it was the worst of times', q:'How are the clauses of the opening joined?', a:'By commas alone, as independent clauses side by side', ds:['By subordinating conjunctions','As relative clauses','As one clause with a compound subject'], why:'Each clause has its own subject and verb, and none depends on another; they are joined only by commas.'},
   {t:'in short', q:'What does “in short” introduce?', a:'A main clause that sums up the series', ds:['A clause of purpose','A relative clause','A question'], why:'The period after the dash is the statement to which the pairs lead.'},
   {t:'so far like the present period, that', q:'“So far like … that some of its noisiest authorities insisted” expresses…', a:'A result', ds:['A purpose','A condition','A concession'], why:'“So … that” gives the result of the likeness.'},
   {t:'its being received', q:'In “insisted on its being received,” “being received” is…', a:'A passive gerund, the object of “on”', ds:['A present participle describing “authorities”','The main verb','An infinitive'], why:'The possessive “its” and the preposition “on” show that the “-ing” form is a gerund.'}]},

'en-areopagitica': {lang:'en', author:'Milton', work:'Areopagitica', locus:'1644', src:['engclass'],
  lat:'And yet, on the other hand, unless wariness be used, as good almost kill a man as kill a good book. Who kills a man kills a reasonable creature, God\'s image; but he who destroys a good book, kills reason itself, kills the image of God, as it were in the eye.',
  ctx:'John Milton wrote Areopagitica in 1644 against the licensing of books before they were printed. He argues that to destroy a good book is like killing a man.',
  parts:[
   {t:'unless wariness be used', h:'A condition in the subjunctive', n:'“Unless” introduces a condition, and “be used” is the subjunctive.'},
   {t:'as good almost kill a man as kill a good book', h:'A comparison with words left out', n:'The full sense is “one might as well almost kill a man as kill a good book”; the subject and the helping verb are left out.'},
   {t:'Who kills a man kills a reasonable creature, God\'s image', h:'A clause as subject', n:'“Who kills a man” is a noun clause, the subject of the second “kills,” and “God’s image” is in apposition to “a reasonable creature.”'},
   {t:'but he who destroys a good book, kills reason itself, kills the image of God', h:'The contrast', n:'“He who destroys a good book” is the subject, with a relative clause, and it has two verbs, each “kills.”'}],
  qs:[
   {t:'unless wariness be used', q:'“Be used” after “unless” is…', a:'The subjunctive in a condition', ds:['The imperative','The future tense','The infinitive'], why:'Older English uses the subjunctive in conditions: unless wariness be used.'},
   {t:'Who kills a man', q:'“Who kills a man” is…', a:'A noun clause, the subject of “kills a reasonable creature”', ds:['A question','A relative clause describing “creature”','An object'], why:'The clause names the one who does the act, and so it serves as the subject.'},
   {t:'God\'s image', q:'“God’s image” stands…', a:'In apposition to “a reasonable creature”', ds:['As the subject of “kills”','As an indirect object','As a noun of address'], why:'It renames the creature: a reasonable creature, that is, God’s image.'},
   {t:'he who destroys a good book', q:'“Who destroys a good book” is…', a:'A relative clause describing “he”', ds:['A noun clause','A clause of time','A condition'], why:'“Who” takes up “he” and tells which man is meant.'}]},

'en-swift': {lang:'en', author:'Swift', work:'A Modest Proposal', locus:'1729', src:['engclass'],
  lat:'It is a melancholy object to those, who walk through this great town, or travel in the country, when they see the streets, the roads, and cabbin-doors crowded with beggars of the female sex, followed by three, four, or six children, all in rags, and importuning every passenger for an alms.',
  ctx:'Jonathan Swift published A Modest Proposal in 1729, a satire on the treatment of the Irish poor. It opens with this description of the beggars of Dublin.',
  parts:[
   {t:'It is a melancholy object to those', h:'The main clause', n:'The main clause is “it is a melancholy object,” and “to those” tells for whom.'},
   {t:'who walk through this great town, or travel in the country', h:'A relative clause', n:'“Who” takes up “those,” and the clause has two verbs joined by “or.”'},
   {t:'when they see the streets, the roads, and cabbin-doors crowded with beggars of the female sex', h:'A clause of time', n:'“When” begins a clause of time, and the real subject of “it is” is what they see. “Crowded” is a participle describing the streets, roads, and doors.'},
   {t:'followed by three, four, or six children, all in rags, and importuning every passenger for an alms', h:'Participles describing the beggars', n:'“Followed” and “importuning” are participles that describe the beggars.'}],
  qs:[
   {t:'who walk through this great town', q:'“Who walk through this great town” is…', a:'A relative clause describing “those”', ds:['A noun clause','A clause of time','The main clause'], why:'“Who” takes up “those.”'},
   {t:'when they see', q:'“When they see the streets” is…', a:'A dependent clause of time', ds:['A relative clause','An indirect question','The main clause'], why:'“When” subordinates the clause to “it is a melancholy object.”'},
   {t:'crowded', q:'“Crowded” describes…', a:'The streets, the roads, and the doors', ds:['“Those” who walk','The beggars','“The country”'], why:'The participle completes “see the streets … crowded with beggars.”'},
   {t:'importuning', q:'“Importuning” describes…', a:'The beggars', ds:['The children','The passengers','The roads'], why:'It is joined by “and” to “followed,” and both describe the beggars.'}]},

'en-melville': {lang:'en', author:'Melville', work:'Moby-Dick', locus:'chapter 1', src:['engclass'],
  lat:'Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.',
  ctx:'Herman Melville published Moby-Dick in 1851. The narrator introduces himself and tells why he went to sea.',
  parts:[
   {t:'Call me Ishmael', h:'An imperative', n:'The novel opens with an imperative; the subject “you” is understood.'},
   {t:'never mind how long precisely', h:'A parenthesis', n:'Set off by dashes, this imperative interrupts the sentence; “how long” is an indirect question.'},
   {t:'having little or no money in my purse, and nothing particular to interest me on shore', h:'A participle of cause', n:'“Having” is a participle describing “I” and giving the reason: since I had little money.'},
   {t:'I thought I would sail about a little and see the watery part of the world', h:'The main clause', n:'“I thought” is the main clause, and “I would sail … and see” is its object, a noun clause without “that.”'}],
  qs:[
   {t:'Call me Ishmael', q:'“Call me Ishmael” is…', a:'An imperative with “you” understood', ds:['A question','A statement in the past','A relative clause'], why:'The verb gives a command, and the subject is not written.'},
   {t:'never mind how long precisely', q:'The words between the dashes are…', a:'A parenthesis that interrupts the sentence', ds:['The subject of the sentence','A relative clause','The main clause'], why:'They can be removed without breaking the construction.'},
   {t:'having little or no money', q:'“Having little or no money” describes…', a:'“I,” the subject of “thought,” and gives the reason', ds:['“My purse”','“The world”','“Shore”'], why:'The participle goes with the subject of the main clause.'},
   {t:'I would sail about', q:'“I would sail about a little” is…', a:'A noun clause, the object of “thought”, without “that”', ds:['A relative clause','An independent sentence','A condition'], why:'It says what he thought; English may leave out “that.”'}]},

'en-thoreau': {lang:'en', author:'Thoreau', work:'Walden', locus:'“Where I Lived, and What I Lived For”', src:['engclass'],
  lat:'I went to the woods because I wished to live deliberately, to front only the essential facts of life, and see if I could not learn what it had to teach, and not, when I came to die, discover that I had not lived.',
  ctx:'Henry David Thoreau lived by Walden Pond from 1845 to 1847, and published Walden in 1854. Here he gives his reason for going.',
  parts:[
   {t:'I went to the woods', h:'The main clause', n:'The main clause comes first: subject, verb, and a phrase of place.'},
   {t:'because I wished to live deliberately', h:'A clause of cause', n:'“Because” gives the reason, and the infinitive “to live” is the object of “wished.”'},
   {t:'to front only the essential facts of life, and see if I could not learn what it had to teach', h:'More infinitives', n:'“To front” and “see” are further infinitives depending on “wished.” “If I could not learn” is an indirect question, and “what it had to teach” is a noun clause.'},
   {t:'and not, when I came to die, discover that I had not lived', h:'A negative infinitive with a clause inside', n:'“Not … discover” is a last infinitive, and the clause of time “when I came to die” stands inside it.'}],
  qs:[
   {t:'because I wished', q:'“Because I wished to live deliberately” is…', a:'A dependent clause of cause', ds:['The main clause','A relative clause','A clause of purpose'], why:'“Because” subordinates the clause and gives the reason.'},
   {t:'to live deliberately', q:'“To live deliberately” is…', a:'An infinitive, the object of “wished”', ds:['An infinitive of purpose depending on “went”','A gerund','A participle'], why:'It says what he wished.'},
   {t:'if I could not learn', q:'“If I could not learn” after “see” is…', a:'An indirect question', ds:['A condition','A clause of result','A relative clause'], why:'“See if” means “see whether”: it reports a question.'},
   {t:'when I came to die', q:'“When I came to die” is…', a:'A clause of time set inside the last infinitive phrase', ds:['The main clause','A relative clause','An infinitive'], why:'It tells when he might discover it.'}]},

/* English poetry. */
'en-milton-pl': {lang:'en', author:'Milton', work:'Paradise Lost', locus:'I.1–6', meter:'Blank verse', src:['engclass'],
  lat:'Of Man’s first disobedience, and the fruit\nOf that forbidden tree whose mortal taste\nBrought death into the World, and all our woe,\nWith loss of Eden, till one greater Man\nRestore us, and regain the blissful seat,\nSing, Heavenly Muse,',
  ctx:'John Milton’s epic, published in 1667, opens as the classical epics do, by naming its subject and calling on the Muse. The main verb, “Sing,” is held back to the sixth line. The meter is blank verse: unrhymed iambic pentameter.',
  parts:[
   {t:'Of Man’s first disobedience, and the fruit', h:'The subject of the song, placed first', n:'“Of” begins the phrase that names what the Muse is to sing of; its two objects are “disobedience” and “the fruit.”'},
   {t:'Of that forbidden tree whose mortal taste', h:'A relative clause', n:'“Whose mortal taste” begins a relative clause describing the tree: whose deadly taste brought death.'},
   {t:'Brought death into the World, and all our woe', h:'The verb of the relative clause', n:'“Brought” has two objects, “death” and “all our woe,” and the second is held to the end of the line.'},
   {t:'till one greater Man', h:'A clause of time', n:'“Till” begins a clause of time whose verbs, “restore” and “regain,” come in the next line, in the subjunctive of an event awaited.'},
   {t:'Sing, Heavenly Muse,', h:'The main verb', n:'“Sing” is an imperative, and “Heavenly Muse” is the noun of address. Five lines of phrases and clauses come before it.'}],
  qs:[
   {t:'Of Man’s first disobedience', q:'What does the phrase beginning “Of Man’s first disobedience” complete?', a:'The verb “Sing,” five lines later', ds:['The verb “Brought”','The noun “tree”','The verb “Restore”'], why:'The Muse is asked to sing of these things; the verb is held to the sixth line.'},
   {t:'whose mortal taste', q:'“Whose mortal taste brought death” is…', a:'A relative clause describing “tree”', ds:['The main clause','A clause of time','A noun clause'], why:'“Whose” takes up the tree.'},
   {t:'Restore', q:'Why is it “restore” and not “restores”?', a:'It is the subjunctive after “till,” of an event still awaited', ds:['It is an imperative','The subject is plural','It is an infinitive'], why:'“Till one greater Man restore us” looks forward to an event, and older English uses the subjunctive.'},
   {t:'Sing', q:'“Sing” is…', a:'An imperative, the main verb of the period', ds:['A present indicative','An infinitive','A participle'], why:'It is a command to the Muse, the noun of address that follows.'}]},

'en-sonnet18': {lang:'en', author:'Shakespeare', work:'Sonnets', locus:'18.1–8', meter:'Iambic pentameter', src:['engclass'],
  lat:'Shall I compare thee to a summer’s day?\nThou art more lovely and more temperate:\nRough winds do shake the darling buds of May,\nAnd summer’s lease hath all too short a date:\nSometime too hot the eye of heaven shines,\nAnd often is his gold complexion dimm’d,\nAnd every fair from fair sometime declines,\nBy chance, or nature’s changing course untrimm’d:',
  ctx:'Shakespeare’s sonnets were printed in 1609. A sonnet has fourteen lines of iambic pentameter; these are the first eight, which set the beloved against a summer’s day.',
  parts:[
   {t:'Shall I compare thee to a summer’s day?', h:'A question', n:'The poem opens with a question, with the helping verb “shall” before the subject. “Thee” is the older objective form of “you.”'},
   {t:'Thou art more lovely and more temperate', h:'Comparatives', n:'“Thou art” is the older second person singular of “be,” and the comparatives “more lovely” and “more temperate” complete it.'},
   {t:'Rough winds do shake the darling buds of May', h:'The emphatic “do”', n:'“Do shake” is the present with “do,” which here fills out the meter and adds emphasis.'},
   {t:'Sometime too hot the eye of heaven shines', h:'Inversion', n:'The adjective “too hot” stands first, before the subject “the eye of heaven” and the verb “shines.”'},
   {t:'And often is his gold complexion dimm’d', h:'A passive with inversion', n:'The helping verb “is” comes before the subject, “his gold complexion,” and “dimm’d” completes the passive.'}],
  qs:[
   {t:'thee', q:'“Thee” is…', a:'The older objective form of the second person singular', ds:['The subject','A possessive','A plural'], why:'“Thou” is the subject form, and “thee” the object.'},
   {t:'more lovely and more temperate', q:'“More lovely and more temperate” are…', a:'Comparative adjectives completing “art”', ds:['Adverbs modifying “compare”','Superlatives','Nouns'], why:'They follow the linking verb and describe “thou.”'},
   {t:'do shake', q:'In “Rough winds do shake,” what is “do”?', a:'A helping verb of emphasis in the present', ds:['The main verb meaning “perform”','A sign of the future','A sign of the passive'], why:'“Do” with the plain verb makes an emphatic present.'},
   {t:'is his gold complexion dimm’d', q:'“Is his gold complexion dimm’d” is…', a:'A passive verb, with the subject after the helping verb', ds:['A question','An active verb','A participle alone'], why:'The order is inverted: his gold complexion is dimmed.'}]},

'en-gray': {lang:'en', author:'Gray', work:'Elegy Written in a Country Churchyard', locus:'stanza 1', meter:'Iambic pentameter, in quatrains', src:['engclass'],
  lat:'The curfew tolls the knell of parting day;\nThe lowing herd wind slowly o\'er the lea;\nThe plowman homeward plods his weary way,\nAnd leaves the world to darkness and to me.',
  ctx:'Thomas Gray published his Elegy in 1751. Each stanza has four lines of iambic pentameter rhyming alternately. The first stanza sets the scene at nightfall.',
  parts:[
   {t:'The curfew tolls the knell of parting day', h:'Subject, verb, object', n:'“The curfew” is the subject, “tolls” the verb, and “the knell” the object; “parting” is a participle describing “day.”'},
   {t:'The lowing herd wind slowly o\'er the lea', h:'A collective noun', n:'“Herd” is a collective noun, and Gray gives it a plural verb, “wind,” thinking of the many cattle.'},
   {t:'The plowman homeward plods his weary way', h:'An adverb placed early', n:'“Homeward” stands before the verb “plods,” and “his weary way” is its object.'},
   {t:'And leaves the world to darkness and to me', h:'A second verb', n:'“And” joins a second verb, “leaves,” to “plods,” with the same subject.'}],
  qs:[
   {t:'parting', q:'“Parting” in “parting day” is…', a:'A participle used as an adjective', ds:['A gerund','A verb in the past','A noun'], why:'It describes “day”: the departing day.'},
   {t:'wind', q:'Why is “wind” plural with “herd”?', a:'“Herd” is a collective noun, here taken as many animals', ds:['It is an error','“Wind” is a noun','The verb agrees with “lea”'], why:'A collective noun may take a plural verb when its members are thought of one by one.'},
   {t:'homeward', q:'“Homeward” is…', a:'An adverb of direction modifying “plods”', ds:['An adjective describing “plowman”','A noun','A preposition'], why:'It tells where he plods.'},
   {t:'leaves', q:'What is the subject of “leaves”?', a:'“The plowman”', ds:['“The herd”','“The world”','“Darkness”'], why:'“And” joins “leaves” to “plods,” and both have the subject “the plowman.”'}]},

'en-mariner': {lang:'en', author:'Coleridge', work:'The Rime of the Ancient Mariner', locus:'lines 1–8', meter:'The ballad stanza', src:['engclass'],
  lat:'It is an ancient Mariner,\nAnd he stoppeth one of three.\n"By thy long grey beard and glittering eye,\nNow wherefore stopp\'st thou me?\n\n"The Bridegroom\'s doors are opened wide,\nAnd I am next of kin;\nThe guests are met, the feast is set:\nMay\'st hear the merry din."',
  ctx:'Coleridge’s poem appeared in Lyrical Ballads in 1798. It is written in the ballad stanza: lines of four and three beats in turn. An old sailor stops a guest on his way to a wedding.',
  parts:[
   {t:'It is an ancient Mariner', h:'An introducing “it”', n:'“It is” introduces the person spoken of, as in older ballads.'},
   {t:'And he stoppeth one of three', h:'The older ending “-eth”', n:'“Stoppeth” is the older form of “stops,” the third person singular.'},
   {t:'Now wherefore stopp\'st thou me?', h:'A question', n:'“Wherefore” means “why,” and “stopp’st thou” is the older second person singular with the subject after the verb.'},
   {t:'The guests are met, the feast is set', h:'Two clauses side by side', n:'Two short clauses stand without a conjunction; “are met” and “is set” describe a state.'}],
  qs:[
   {t:'stoppeth', q:'“Stoppeth” is…', a:'The older third person singular, “stops”', ds:['A past tense','A plural','An imperative'], why:'The ending “-eth” is the older form of “-s.”'},
   {t:'wherefore', q:'“Wherefore” means…', a:'“Why”', ds:['“Where”','“Therefore”','“Whereas”'], why:'In older English “wherefore” asks for the reason.'},
   {t:'thou', q:'In “stopp’st thou me,” the subject is…', a:'“Thou,” placed after the verb in a question', ds:['“Me”','“Beard”','“Eye”'], why:'The question puts the verb before its subject, and “me” is the object.'},
   {t:'May\'st hear', q:'In “May’st hear the merry din,” what is left out?', a:'The subject “thou”', ds:['The verb','The object','Nothing'], why:'“Mayst” is the second person singular, and its subject is understood.'}]},

'en-daffodils': {lang:'en', author:'Wordsworth', work:'“I wandered lonely as a Cloud”', locus:'stanza 1, text of 1807', meter:'Iambic tetrameter', src:['engclass'],
  lat:'I wandered lonely as a Cloud\nThat floats on high o\'er Vales and Hills,\nWhen all at once I saw a crowd\nA host of dancing Daffodills;\nAlong the Lake, beneath the trees,\nTen thousand dancing in the breeze.',
  ctx:'William Wordsworth published this poem in 1807. The lines are iambic tetrameter, four iambs each. The first stanza is one sentence.',
  parts:[
   {t:'I wandered lonely as a Cloud', h:'The main clause and a comparison', n:'“I wandered” is the main clause, “lonely” describes “I,” and “as a Cloud” makes a comparison.'},
   {t:'That floats on high o\'er Vales and Hills', h:'A relative clause', n:'“That” takes up “a Cloud.”'},
   {t:'When all at once I saw a crowd', h:'A clause of time', n:'“When” begins a dependent clause, and “a crowd” is the object of “saw.”'},
   {t:'A host of dancing Daffodills', h:'An appositive', n:'“A host” renames “a crowd,” and “dancing” is a participle describing the daffodils.'},
   {t:'Ten thousand dancing in the breeze', h:'A phrase without a verb', n:'“Ten thousand dancing” is another appositive phrase; it has a participle but no finite verb.'}],
  qs:[
   {t:'lonely', q:'“Lonely” in “I wandered lonely” describes…', a:'“I,” the subject', ds:['“Wandered,” as an adverb','“Cloud”','“Hills”'], why:'“Lonely” is an adjective, so it describes the one who wandered.'},
   {t:'That floats', q:'“That floats on high” is…', a:'A relative clause describing “a Cloud”', ds:['A noun clause','A clause of time','The main clause'], why:'“That” takes up the cloud.'},
   {t:'When all at once', q:'“When all at once I saw a crowd” is…', a:'A dependent clause of time', ds:['The main clause','A relative clause','An indirect question'], why:'“When” subordinates it to “I wandered.”'},
   {t:'A host', q:'“A host of dancing Daffodills” stands…', a:'In apposition to “a crowd”', ds:['As the subject of “saw”','As a second main clause','As a noun of address'], why:'It renames the crowd that he saw.'}]}
});


/* ===== en2 ===== */
/* Five more English poems, for the poetry drill. Texts as commonly printed from the first editions: Shelley, 1818;
   Blake, Songs of Experience, 1794; Pope, 1711; Donne, 1633; Tennyson, 1842. */
Object.assign(PASSAGES, {
'en-ozymandias': {lang:'en', author:'Shelley', work:'Ozymandias', locus:'lines 1–8', meter:'Iambic pentameter, a sonnet', src:['engclass'],
  lat:'I met a traveller from an antique land\nWho said: Two vast and trunkless legs of stone\nStand in the desert. Near them, on the sand,\nHalf sunk, a shattered visage lies, whose frown,\nAnd wrinkled lip, and sneer of cold command,\nTell that its sculptor well those passions read\nWhich yet survive, stamped on these lifeless things,\nThe hand that mocked them and the heart that fed:',
  ctx:'Shelley’s sonnet of 1818. The traveler’s report runs on past the line ends, and its second sentence has a long subject and a verb, “Tell,” held to the sixth line.',
  parts:[
   {t:'I met a traveller from an antique land\nWho said', h:'The frame', n:'“Who said” is a relative clause on “a traveller.” All that follows is what he said. The line scans as five iambs: “i MET a TRAV-el-LER from AN an-TIQUE LAND,” with a light stress on “-ler.”'},
   {t:'Two vast and trunkless legs of stone\nStand in the desert', h:'The report begins', n:'The subject, “two vast and trunkless legs of stone,” runs over the line end to its verb, “stand.”'},
   {t:'Half sunk, a shattered visage lies, whose frown', h:'Inversion and a relative', n:'“Near them, on the sand, half sunk” come before the subject, “a shattered visage,” and its verb, “lies.” “Whose” begins a relative clause on “visage.”'},
   {t:'Tell that its sculptor well those passions read', h:'The verb of the relative clause', n:'“Tell” is plural because its subject is three things: “frown, and wrinkled lip, and sneer.” “That” begins a noun clause, and in it the object, “those passions,” comes before the verb “read,” past tense.'},
   {t:'The hand that mocked them and the heart that fed', h:'Apposition', n:'These nouns stand outside the clause and name what survived: the sculptor’s hand that copied the passions and the king’s heart that fed them.'}],
  qs:[
   {t:'Who said', q:'“Who said” is…', a:'A relative clause describing “a traveller”', ds:['A question','The main clause','A noun clause, object of “met”'], why:'“Who” refers back to the traveler.'},
   {t:'Stand', q:'The subject of “Stand” is…', a:'“Two vast and trunkless legs of stone”', ds:['“a traveller”','“the desert”','“I”'], why:'The subject runs over the line end to its verb.'},
   {t:'a shattered visage lies', q:'In “Near them, on the sand, / Half sunk, a shattered visage lies,” the subject is…', a:'“a shattered visage”', ds:['“the sand”','“them”','“Half sunk”'], why:'The phrases of place and state come first; the subject follows.'},
   {t:'Tell', q:'Why “Tell” and not “Tells”?', a:'Its subject is three things joined by “and”', ds:['It is an imperative','It goes with “the sculptor”','It is past tense'], why:'“Frown, and wrinkled lip, and sneer” make a plural subject.'},
   {t:'read', q:'“read” in line 6 is…', a:'Past tense: the sculptor read those passions well', ds:['Present tense','An infinitive after “tell”','A noun'], why:'The object, “those passions,” comes before it, and the sculptor did it long ago.'}]},

'en-tyger': {lang:'en', author:'Blake', work:'The Tyger', locus:'stanza 1', meter:'Trochaic tetrameter, with the last syllable dropped', src:['engclass'],
  lat:'Tyger Tyger, burning bright,\nIn the forests of the night;\nWhat immortal hand or eye,\nCould frame thy fearful symmetry?',
  ctx:'From Blake’s <i>Songs of Experience</i>, 1794. The lines are trochaic, with the final unstressed syllable cut off, so that each line begins and ends on a stress.',
  parts:[
   {t:'Tyger Tyger, burning bright', h:'Address and the beat', n:'The tiger is addressed, and “burning bright” describes it. The line scans “TY-ger TY-ger BURN-ing BRIGHT”: three trochees and a stressed syllable.'},
   {t:'In the forests of the night', h:'A phrase of place', n:'“In the forests of the night” says where the tiger burns.'},
   {t:'What immortal hand or eye', h:'A question', n:'“What” asks which hand or eye. “Hand or eye” is the subject of “could frame.”'},
   {t:'Could frame thy fearful symmetry?', h:'The verb and a shifted line', n:'“Could frame” is the verb, and “thy fearful symmetry” the object. This line begins with an unstressed syllable, “could FRAME thy FEAR-ful SYM-me-TRY,” so it turns to iambs.'}],
  qs:[
   {t:'Tyger Tyger', q:'The first line begins with…', a:'A stressed syllable: the line is trochaic', ds:['An unstressed syllable: the line is iambic','Two unstressed syllables','A spondee only'], why:'TY-ger TY-ger BURN-ing BRIGHT.'},
   {t:'burning bright', q:'“burning bright” describes…', a:'The tiger', ds:['The forests','The night','The hand'], why:'It follows the address and qualifies it.'},
   {t:'hand or eye', q:'The subject of “could frame” is…', a:'“hand or eye”', ds:['“thy fearful symmetry”','“the night”','“Tyger”'], why:'What hand or eye could frame it: the hand or eye does the framing.'},
   {t:'thy fearful symmetry', q:'“thy fearful symmetry” is…', a:'The object of “could frame”', ds:['The subject','A noun of address','An adverb'], why:'It is what the hand or eye frames.'}]},

'en-pope': {lang:'en', author:'Pope', work:'An Essay on Criticism', locus:'lines 362–365', meter:'Heroic couplets', src:['engclass'],
  lat:'True ease in writing comes from art, not chance,\nAs those move easiest who have learn’d to dance.\n’Tis not enough no harshness gives offence,\nThe sound must seem an echo to the sense:',
  ctx:'Pope’s <i>Essay on Criticism</i>, 1711, is written in heroic couplets: rhymed pairs of iambic pentameter lines, each pair usually closing its own thought.',
  parts:[
   {t:'True ease in writing comes from art, not chance', h:'The statement', n:'The subject is “true ease in writing” and the verb “comes.” “Not chance” is set against “art.” Five iambs: “true EASE in WRIT-ing COMES from ART, not CHANCE.”'},
   {t:'As those move easiest who have learn’d to dance', h:'A comparison, and a relative clause split from its noun', n:'“As” begins a clause of comparison. “Who have learn’d to dance” is a relative clause on “those,” put after the verb so that the rhyme falls on “dance.”'},
   {t:'’Tis not enough no harshness gives offence', h:'A noun clause without “that”', n:'“’Tis” is “it is.” “It” looks forward to the clause “no harshness gives offence,” with “that” left out: it is not enough that no harshness offends.'},
   {t:'The sound must seem an echo to the sense', h:'The rule', n:'“Must seem” is the verb, and “an echo to the sense” completes it.'}],
  qs:[
   {t:'True ease in writing', q:'The subject of “comes” is…', a:'“True ease in writing”', ds:['“art”','“chance”','“writing” alone'], why:'“In writing” limits “ease”; the whole phrase is the subject.'},
   {t:'who have learn’d to dance', q:'“who have learn’d to dance” describes…', a:'“those”', ds:['“art”','“chance”','“easiest”'], why:'The relative clause is placed after the verb, but it belongs to “those.”'},
   {t:'’Tis', q:'In “’Tis not enough no harshness gives offence,” what does “it” point to?', a:'The clause “(that) no harshness gives offence”', ds:['The sound','Art','Nothing'], why:'“It” is an anticipatory subject; the real subject is the clause that follows, with “that” omitted.'},
   {t:'an echo to the sense', q:'“an echo to the sense” is…', a:'A complement after “must seem”', ds:['The subject','The object of “sound”','An adverb of place'], why:'“Seem” links the subject to what it is said to be.'}]},

'en-donne': {lang:'en', author:'Donne', work:'Holy Sonnets', locus:'X, lines 1–4', meter:'Iambic pentameter, a sonnet', src:['engclass'],
  lat:'Death, be not proud, though some have called thee\nMighty and dreadful, for thou art not so;\nFor those whom thou think’st thou dost overthrow\nDie not, poor Death, nor yet canst thou kill me.',
  ctx:'Donne’s sonnet, printed in 1633, addresses Death and argues with it. Its meter is iambic pentameter, often roughened.',
  parts:[
   {t:'Death, be not proud', h:'Address and the older negative imperative', n:'“Death” is addressed. “Be not proud” is the older form of “do not be proud.”'},
   {t:'though some have called thee\nMighty and dreadful', h:'A clause of concession', n:'“Though” concedes. “Called thee mighty and dreadful”: “thee” is the object, and “mighty and dreadful” say what Death was called.'},
   {t:'for thou art not so', h:'The reason', n:'“For” gives the reason: you are not so.'},
   {t:'For those whom thou think’st thou dost overthrow\nDie not', h:'A long subject', n:'The subject is “those,” with the relative clause “whom thou think’st thou dost overthrow”; the verb “die not” comes only in the next line. “Whom” is the object of “overthrow,” inside the clause “thou dost overthrow,” which itself depends on “thou think’st.”'},
   {t:'nor yet canst thou kill me', h:'Inversion after “nor”', n:'After “nor” the helping verb comes before the subject: “canst thou.”'}],
  qs:[
   {t:'be not proud', q:'“be not proud” is…', a:'An older form of the negative imperative', ds:['A subjunctive of wish','A question','A statement'], why:'Older English puts “not” after the imperative: “be not.”'},
   {t:'thee', q:'In “some have called thee / Mighty and dreadful,” “thee” is…', a:'The object of “called”', ds:['The subject','A possessive','A noun of address'], why:'Some have called Death mighty: “thee” is called something.'},
   {t:'whom', q:'“whom” is the object of…', a:'“overthrow”', ds:['“think’st”','“Die”','“For”'], why:'Thou think’st [that] thou dost overthrow whom: the relative belongs to the inner clause.'},
   {t:'Die not', q:'The subject of “Die not” is…', a:'“those”', ds:['“thou”','“Death”','“me”'], why:'Those whom you think you overthrow do not die.'},
   {t:'canst thou', q:'Why “canst thou” and not “thou canst”?', a:'After “nor” the helping verb comes before the subject', ds:['It is a question','It is an imperative','For the rhyme'], why:'Negative words at the head of a clause bring inversion: “nor can you.”'}]},

'en-ulysses': {lang:'en', author:'Tennyson', work:'Ulysses', locus:'lines 65–70', meter:'Blank verse', src:['engclass'],
  lat:'Though much is taken, much abides; and though\nWe are not now that strength which in old days\nMoved earth and heaven, that which we are, we are;\nOne equal temper of heroic hearts,\nMade weak by time and fate, but strong in will\nTo strive, to seek, to find, and not to yield.',
  ctx:'The close of Tennyson’s monologue, 1842. The old Ulysses speaks to his mariners in blank verse; the sentence runs over line ends to its last word.',
  parts:[
   {t:'Though much is taken, much abides', h:'Concession and statement', n:'“Though much is taken” concedes; “much abides” is the main clause. The two “much”s stand against each other.'},
   {t:'and though\nWe are not now that strength which in old days\nMoved earth and heaven', h:'A second concession, across the line', n:'The second “though” clause runs over the line end. “Which in old days moved earth and heaven” is a relative clause on “that strength.”'},
   {t:'that which we are, we are', h:'The object placed first', n:'“That which we are” stands first for emphasis; the main clause is “we are [that].”'},
   {t:'One equal temper of heroic hearts', h:'Apposition', n:'This phrase renames “that which we are.”'},
   {t:'Made weak by time and fate, but strong in will\nTo strive, to seek, to find, and not to yield', h:'Participle, adjective and infinitives', n:'“Made weak” is a past participle, and “strong in will” an adjective phrase; both describe “temper.” The four infinitives complete “will.”'}],
  qs:[
   {t:'much abides', q:'“much abides” is…', a:'The main clause after the concession', ds:['A dependent clause','A relative clause','An infinitive phrase'], why:'“Though” governs only “much is taken.”'},
   {t:'which in old days', q:'“which” refers to…', a:'“that strength”', ds:['“old days”','“earth and heaven”','“we”'], why:'The strength that once moved earth and heaven.'},
   {t:'that which we are, we are', q:'In “that which we are, we are,” the phrase “that which we are” is…', a:'Placed first for emphasis; the clause is “we are that”', ds:['The subject of “are”','A question','A dependent clause of time'], why:'The complement is moved to the front, and “we are” closes the line.'},
   {t:'Made weak', q:'“Made weak by time and fate” describes…', a:'“One equal temper of heroic hearts”', ds:['“earth and heaven”','“old days”','“will”'], why:'The participle phrase follows the noun phrase it describes.'},
   {t:'To strive', q:'The infinitives “To strive, to seek, to find” complete…', a:'“will”', ds:['“weak”','“fate”','“hearts”'], why:'Strong in will to strive: they say what the will is for.'}]}
});


/* ===== grc ===== */
/* Greek prose and poetry. Greek as printed by the Perseus Digital Library (canonical-greekLit), and for the Gospels
   the SBL Greek New Testament, read 2026-10-15. English as printed by Project Gutenberg, named in each passage, with
   footnote numbers and editors' insertions left out. */
const PSG_ED = {grc:'Greek as printed by the Perseus Digital Library (PerseusDL canonical-greekLit), read 2026-10-15.',
  nt:'Greek of the SBL Greek New Testament (Society of Biblical Literature and Logos, 2010), read 2026-10-15; English of the King James Version (1611) as printed by Project Gutenberg (eBook 10).'};
Object.assign(PASSAGES, {
'grc-hdt': {lang:'grc', author:'Herodotus', work:'Histories', locus:'1.0', ed:PSG_ED.grc + ' English: G. C. Macaulay (1890), Project Gutenberg eBook 2707.',
  lat:'Ἡροδότου Ἁλικαρνησσέος ἱστορίης ἀπόδεξις ἥδε, ὡς μήτε τὰ γενόμενα ἐξ ἀνθρώπων τῷ χρόνῳ ἐξίτηλα γένηται, μήτε ἔργα μεγάλα τε καὶ θωμαστά, τὰ μὲν Ἕλλησι τὰ δὲ βαρβάροισι ἀποδεχθέντα, ἀκλεᾶ γένηται, τά τε ἄλλα καὶ διʼ ἣν αἰτίην ἐπολέμησαν ἀλλήλοισι.',
  eng:'This is the Showing forth of the Inquiry of Herodotus of Halicarnassos, to the end that neither the deeds of men may be forgotten by lapse of time, nor the works great and marvelous, which have been produced some by Hellenes and some by Barbarians, may lose their renown; and especially that the causes may be remembered for which these waged war with one another.\n— G. C. Macaulay',
  ctx:'Herodotus wrote in the Ionic dialect in the fifth century BC. His history opens with one sentence that names the author, the work, and its purpose: that the deeds of Greeks and barbarians may not be forgotten, and above all the cause of their war.',
  parts:[
   {t:'Ἡροδότου Ἁλικαρνησσέος ἱστορίης ἀπόδεξις ἥδε', h:'A sentence without a verb', n:'<em>Ἀπόδεξις ἥδε</em>, “this is the setting forth,” has no verb: <em>ἐστί</em> is understood. <em>Ἡροδότου Ἁλικαρνησσέος</em> and <em>ἱστορίης</em> are genitives depending on <em>ἀπόδεξις</em>. The forms are Ionic: <em>ἱστορίης</em> for Attic <em>ἱστορίας</em>.'},
   {t:'ὡς μήτε τὰ γενόμενα ἐξ ἀνθρώπων τῷ χρόνῳ ἐξίτηλα γένηται', h:'A purpose clause', n:'<em>Ὡς</em> with the subjunctive <em>γένηται</em> gives the purpose, and the negative is <em>μήτε</em>: so that neither the things done by men may fade with time. <em>Τὰ γενόμενα</em>, a participle with the article, is the subject.'},
   {t:'μήτε ἔργα μεγάλα τε καὶ θωμαστά', h:'The second subject', n:'The second <em>μήτε</em> brings a second subject, <em>ἔργα</em>, “works,” with two adjectives joined by <em>τε καί</em>.'},
   {t:'τὰ μὲν Ἕλλησι τὰ δὲ βαρβάροισι ἀποδεχθέντα', h:'Μέν and δέ', n:'<em>Τὰ μὲν … τὰ δέ</em> divides the works into two groups, some by Greeks and some by barbarians. <em>Ἀποδεχθέντα</em>, an aorist passive participle, agrees with <em>ἔργα</em>, and the datives give the agents.'},
   {t:'ἀκλεᾶ γένηται', h:'The second verb', n:'<em>Ἀκλεᾶ γένηται</em>, “may become without fame,” is the verb of the second subject, again in the subjunctive of purpose.'},
   {t:'τά τε ἄλλα καὶ διʼ ἣν αἰτίην ἐπολέμησαν ἀλλήλοισι', h:'A relative clause of the cause', n:'<em>Τά τε ἄλλα καί</em> means “both the rest and especially.” <em>Διʼ ἣν αἰτίην</em>, “for what cause,” begins a clause whose antecedent is drawn into it, and <em>ἐπολέμησαν</em> is aorist.'}],
  qs:[
   {t:'ἀπόδεξις ἥδε', q:'What verb must be supplied in <em>ἀπόδεξις ἥδε</em>?', a:'<em>ἐστί</em>, “is”', ds:['<em>γράφει</em>, “writes”','<em>ἦν</em>, “was”','None, because the clause is a vocative'], why:'Greek often leaves out the present of “be.” The sentence means: this is the setting forth.'},
   {t:'ὡς μήτε', q:'<em>ὡς … γένηται</em> is…', a:'A purpose clause with the subjunctive', ds:['A result clause with the indicative','A comparison: “as … happens”','A temporal clause: “when … happened”'], why:'<em>Ὡς</em> with the subjunctive and the negative <em>μή</em> gives the purpose of the setting forth.'},
   {t:'τὰ μὲν Ἕλλησι τὰ δὲ βαρβάροισι', q:'<em>τὰ μὲν … τὰ δέ</em> does what?', a:'Divides the works into two groups: some … others', ds:['Joins two verbs','Marks a question','Gives a cause'], why:'<em>Μέν</em> and <em>δέ</em> set the two halves against each other: some by Greeks, others by barbarians.'},
   {t:'ἀποδεχθέντα', q:'<em>ἀποδεχθέντα</em> is…', a:'An aorist passive participle agreeing with <em>ἔργα</em>', ds:['A finite verb in the aorist','An infinitive','A present active participle'], why:'The ending <em>-θέντα</em> marks the aorist passive participle, neuter plural like <em>ἔργα</em>.'},
   {t:'ἐπολέμησαν', q:'<em>ἐπολέμησαν</em> is…', a:'Aorist indicative, third person plural: “they made war”', ds:['Imperfect','Present subjunctive','Future'], why:'The augment <em>ἐ-</em> and the ending <em>-σαν</em> mark the aorist.'}]},

'grc-thuc1': {lang:'grc', author:'Thucydides', work:'History', locus:'1.1.1', ed:PSG_ED.grc + ' English: Richard Crawley (1874), Project Gutenberg eBook 7142.',
  lat:'Θουκυδίδης Ἀθηναῖος ξυνέγραψε τὸν πόλεμον τῶν Πελοποννησίων καὶ Ἀθηναίων, ὡς ἐπολέμησαν πρὸς ἀλλήλους, ἀρξάμενος εὐθὺς καθισταμένου καὶ ἐλπίσας μέγαν τε ἔσεσθαι καὶ ἀξιολογώτατον τῶν προγεγενημένων, τεκμαιρόμενος ὅτι ἀκμάζοντές τε ᾖσαν ἐς αὐτὸν ἀμφότεροι παρασκευῇ τῇ πάσῃ καὶ τὸ ἄλλο Ἑλληνικὸν ὁρῶν ξυνιστάμενον πρὸς ἑκατέρους, τὸ μὲν εὐθύς, τὸ δὲ καὶ διανοούμενον.',
  eng:'Thucydides, an Athenian, wrote the history of the war between the Peloponnesians and the Athenians, beginning at the moment that it broke out, and believing that it would be a great war and more worthy of relation than any that had preceded it. This belief was not without its grounds. The preparations of both the combatants were in every department in the last state of perfection; and he could see the rest of the Hellenic race taking sides in the quarrel; those who delayed doing so at once having it in contemplation.\n— Richard Crawley',
  ctx:'Thucydides opens his history of the war between Athens and Sparta (431–404 BC) by naming himself and his subject, and by saying why he began to write at once. The sentence has one main verb and a chain of participles.',
  parts:[
   {t:'Θουκυδίδης Ἀθηναῖος ξυνέγραψε τὸν πόλεμον τῶν Πελοποννησίων καὶ Ἀθηναίων', h:'The main clause', n:'The subject is <em>Θουκυδίδης</em>, the verb <em>ξυνέγραψε</em> (aorist, “wrote up”), and the object <em>τὸν πόλεμον</em>. Thucydides writes <em>ξυν-</em> for Attic <em>συν-</em>.'},
   {t:'ὡς ἐπολέμησαν πρὸς ἀλλήλους', h:'An indirect question', n:'<em>Ὡς</em>, “how,” introduces how they made war against one another.'},
   {t:'ἀρξάμενος εὐθὺς καθισταμένου', h:'A participle and a genitive absolute', n:'<em>Ἀρξάμενος</em>, an aorist middle participle, agrees with Thucydides: having begun. <em>Καθισταμένου</em> is a genitive absolute with the war understood: as soon as it was arising.'},
   {t:'καὶ ἐλπίσας μέγαν τε ἔσεσθαι καὶ ἀξιολογώτατον τῶν προγεγενημένων', h:'A participle with a future infinitive', n:'<em>Ἐλπίσας</em>, “expecting,” takes the future infinitive <em>ἔσεσθαι</em>: that it would be great and the most worth telling. <em>Τῶν προγεγενημένων</em> is a genitive with the superlative: of those before.'},
   {t:'τεκμαιρόμενος ὅτι ἀκμάζοντές τε ᾖσαν ἐς αὐτὸν ἀμφότεροι παρασκευῇ τῇ πάσῃ', h:'A third participle', n:'<em>Τεκμαιρόμενος</em>, “judging,” takes a clause with <em>ὅτι</em>: that both sides came to it at their height in every preparation. <em>Ἦισαν</em> is the imperfect of <em>εἶμι</em>, “go.”'},
   {t:'καὶ τὸ ἄλλο Ἑλληνικὸν ὁρῶν ξυνιστάμενον πρὸς ἑκατέρους', h:'A participle after a verb of seeing', n:'<em>Ὁρῶν</em>, “seeing,” takes the participle <em>ξυνιστάμενον</em>: seeing the rest of Greece siding with one side or the other.'}],
  qs:[
   {t:'ξυνέγραψε', q:'What is the main verb?', a:'<em>ξυνέγραψε</em>, “wrote up”', ds:['<em>ἐπολέμησαν</em>','<em>ἀρξάμενος</em>','<em>ἔσεσθαι</em>'], why:'<em>Ἐπολέμησαν</em> belongs to a dependent clause, and the others are a participle and an infinitive.'},
   {t:'ἀρξάμενος', q:'<em>ἀρξάμενος</em> agrees with…', a:'<em>Θουκυδίδης</em>, the subject', ds:['<em>τὸν πόλεμον</em>','<em>Ἀθηναίων</em>','<em>ἀλλήλους</em>'], why:'It is nominative masculine singular, like the subject.'},
   {t:'καθισταμένου', q:'<em>καθισταμένου</em> is…', a:'A genitive absolute with the war understood: as it was arising', ds:['A genitive of possession with <em>πόλεμον</em>','The object of <em>ἀρξάμενος</em> alone','A finite verb'], why:'A participle in the genitive, standing apart, gives the time; the noun, the war, is understood from before.'},
   {t:'ἔσεσθαι', q:'<em>ἔσεσθαι</em> is…', a:'A future infinitive after <em>ἐλπίσας</em>', ds:['A present infinitive','An aorist indicative','A participle'], why:'Verbs of hoping and expecting take the future infinitive.'},
   {t:'ὁρῶν', q:'<em>ὁρῶν … ξυνιστάμενον</em> shows…', a:'A verb of seeing with a participle: seeing it take sides', ds:['A purpose clause','A genitive absolute','An infinitive of result'], why:'Verbs of perceiving take a participle that agrees with the thing perceived.'}]},

'grc-thuc22': {lang:'grc', author:'Thucydides', work:'History', locus:'1.22.4', ed:PSG_ED.grc + ' English: Richard Crawley (1874), Project Gutenberg eBook 7142.',
  lat:'καὶ ἐς μὲν ἀκρόασιν ἴσως τὸ μὴ μυθῶδες αὐτῶν ἀτερπέστερον φανεῖται· ὅσοι δὲ βουλήσονται τῶν τε γενομένων τὸ σαφὲς σκοπεῖν καὶ τῶν μελλόντων ποτὲ αὖθις κατὰ τὸ ἀνθρώπινον τοιούτων καὶ παραπλησίων ἔσεσθαι, ὠφέλιμα κρίνειν αὐτὰ ἀρκούντως ἕξει. κτῆμά τε ἐς αἰεὶ μᾶλλον ἢ ἀγώνισμα ἐς τὸ παραχρῆμα ἀκούειν ξύγκειται.',
  eng:'The absence of romance in my history will, I fear, detract somewhat from its interest; but if it be judged useful by those inquirers who desire an exact knowledge of the past as an aid to the interpretation of the future, which in the course of human things must resemble if it does not reflect it, I shall be content. In fine, I have written my work, not as an essay which is to win the applause of the moment, but as a possession for all time.\n— Richard Crawley',
  ctx:'In his account of his method, Thucydides says what kind of reader his history is for. Crawley’s English is free here, and the Latin of the Greek is close.',
  parts:[
   {t:'καὶ ἐς μὲν ἀκρόασιν ἴσως τὸ μὴ μυθῶδες αὐτῶν ἀτερπέστερον φανεῖται', h:'The first member', n:'<em>Τὸ μὴ μυθῶδες</em>, an adjective made a noun by the article, is the subject: the absence of the fabulous. <em>Ἀτερπέστερον</em> is a comparative, and <em>φανεῖται</em> is future. <em>Μέν</em> prepares the contrast.'},
   {t:'ὅσοι δὲ βουλήσονται', h:'The second member', n:'<em>Δέ</em> answers <em>μέν</em>. <em>Ὅσοι</em>, “as many as,” begins a relative clause that serves as the subject of the main verb.'},
   {t:'τῶν τε γενομένων τὸ σαφὲς σκοπεῖν', h:'The object of their wish', n:'<em>Σκοπεῖν</em>, “to look at,” completes <em>βουλήσονται</em>, and <em>τὸ σαφές</em>, “the clear truth,” is its object, with the genitive <em>τῶν γενομένων</em>: of what happened.'},
   {t:'καὶ τῶν μελλόντων ποτὲ αὖθις κατὰ τὸ ἀνθρώπινον τοιούτων καὶ παραπλησίων ἔσεσθαι', h:'Things to come', n:'A second genitive: of the things that will, as human nature goes, be such and similar again.'},
   {t:'ὠφέλιμα κρίνειν αὐτὰ ἀρκούντως ἕξει', h:'The main verb, impersonal', n:'<em>Ἀρκούντως ἕξει</em>, “it will be enough,” has the infinitive <em>κρίνειν</em>: if they judge the work useful. <em>Ἔχω</em> with an adverb means “be in a state.”'},
   {t:'κτῆμά τε ἐς αἰεὶ μᾶλλον ἢ ἀγώνισμα ἐς τὸ παραχρῆμα ἀκούειν ξύγκειται', h:'The famous sentence', n:'<em>Ξύγκειται</em>, “it is composed,” is the verb; <em>κτῆμα ἐς αἰεί</em>, “a possession for ever,” is set against <em>ἀγώνισμα ἐς τὸ παραχρῆμα</em>, “a prize piece for the moment,” by <em>μᾶλλον ἤ</em>.'}],
  qs:[
   {t:'τὸ μὴ μυθῶδες', q:'<em>τὸ μὴ μυθῶδες</em> is…', a:'An adjective made a noun by the article: the absence of the fabulous', ds:['A finite verb','A genitive of comparison','A purpose clause'], why:'The neuter article makes the adjective a noun, and <em>μή</em> negates it.'},
   {t:'φανεῖται', q:'<em>φανεῖται</em> is…', a:'Future: “will appear”', ds:['Present: “appears”','Aorist','Imperfect'], why:'The contracted future of <em>φαίνομαι</em>.'},
   {t:'ὅσοι δὲ βουλήσονται', q:'<em>ὅσοι … βουλήσονται</em> is…', a:'A relative clause standing as the subject of the thought', ds:['A purpose clause','A genitive absolute','An indirect question'], why:'<em>Ὅσοι</em>, “as many as,” names those for whom the work will be useful.'},
   {t:'ἀρκούντως ἕξει', q:'<em>ἀρκούντως ἕξει</em> means…', a:'“It will be enough”: <em>ἔχω</em> with an adverb', ds:['“He will have enough”','“It has been enough”','“They will hold sufficiently”'], why:'<em>Ἔχω</em> with an adverb describes a state: it will be well enough.'},
   {t:'μᾶλλον ἢ', q:'<em>μᾶλλον ἢ</em> sets what against what?', a:'A possession for ever against a prize piece for the moment', ds:['Hearing against reading','The Greeks against the barbarians','The past against the future'], why:'The comparison names the two kinds of work.'}]},

'grc-apol': {lang:'grc', author:'Plato', work:'Apology', locus:'17a', ed:PSG_ED.grc + ' English: Benjamin Jowett (1871), Project Gutenberg eBook 1656.',
  lat:'ὅτι μὲν ὑμεῖς, ὦ ἄνδρες Ἀθηναῖοι, πεπόνθατε ὑπὸ τῶν ἐμῶν κατηγόρων, οὐκ οἶδα· ἐγὼ δʼ οὖν καὶ αὐτὸς ὑπʼ αὐτῶν ὀλίγου ἐμαυτοῦ ἐπελαθόμην, οὕτω πιθανῶς ἔλεγον. καίτοι ἀληθές γε ὡς ἔπος εἰπεῖν οὐδὲν εἰρήκασιν.',
  eng:'How you, O Athenians, have been affected by my accusers, I cannot tell; but I know that they almost made me forget who I was, so persuasively did they speak; and yet they have hardly uttered a word of truth.\n— Benjamin Jowett',
  ctx:'Socrates begins his defense before the Athenian jury in 399 BC. He sets his own experience of the accusers’ speeches against what the jury may have felt.',
  parts:[
   {t:'ὅτι μὲν ὑμεῖς, ὦ ἄνδρες Ἀθηναῖοι, πεπόνθατε ὑπὸ τῶν ἐμῶν κατηγόρων', h:'An indirect question placed first', n:'<em>Ὅτι</em> here means “what” (<em>ὅ τι</em>): what you have felt. The clause is the object of <em>οἶδα</em>, held first. <em>Ὦ ἄνδρες Ἀθηναῖοι</em> is the usual address to the jury.'},
   {t:'οὐκ οἶδα', h:'The main verb', n:'<em>Οἶδα</em>, “I know,” is a perfect form with a present meaning.'},
   {t:'ἐγὼ δʼ οὖν καὶ αὐτὸς ὑπʼ αὐτῶν ὀλίγου ἐμαυτοῦ ἐπελαθόμην', h:'The contrast', n:'<em>Δέ</em> answers <em>μέν</em>. <em>Ἐπελαθόμην</em>, “I forgot,” takes the genitive <em>ἐμαυτοῦ</em>, and <em>ὀλίγου</em> means “almost.”'},
   {t:'οὕτω πιθανῶς ἔλεγον', h:'A clause of degree', n:'<em>Οὕτω πιθανῶς ἔλεγον</em>, “so persuasively did they speak,” gives the reason, set beside the rest without a conjunction.'},
   {t:'καίτοι ἀληθές γε ὡς ἔπος εἰπεῖν οὐδὲν εἰρήκασιν', h:'The turn', n:'<em>Καίτοι</em>, “and yet,” turns the thought. <em>Ὡς ἔπος εἰπεῖν</em>, “so to speak,” softens <em>οὐδέν</em>, and <em>εἰρήκασιν</em> is perfect.'}],
  qs:[
   {t:'ὅτι μὲν ὑμεῖς', q:'<em>ὅτι … πεπόνθατε</em> is…', a:'An indirect question, the object of <em>οἶδα</em>', ds:['A causal clause','A purpose clause','The main clause'], why:'What the jury has felt is the thing Socrates does not know.'},
   {t:'ὦ ἄνδρες Ἀθηναῖοι', q:'<em>ὦ ἄνδρες Ἀθηναῖοι</em> is…', a:'Vocative: the address to the jury', ds:['Nominative subject','Genitive','Dative'], why:'<em>Ὦ</em> with the vocative is the regular address.'},
   {t:'ἐμαυτοῦ', q:'Why is <em>ἐμαυτοῦ</em> genitive?', a:'<em>ἐπιλανθάνομαι</em>, “forget,” takes the genitive', ds:['It is a genitive absolute','It shows possession of <em>αὐτῶν</em>','It follows <em>ὑπό</em>'], why:'Verbs of remembering and forgetting take the genitive.'},
   {t:'εἰρήκασιν', q:'<em>εἰρήκασιν</em> is…', a:'Perfect, third person plural: “they have said”', ds:['Aorist','Future','Present'], why:'The reduplicated stem <em>εἰρη-</em> and <em>-κασι</em> mark the perfect active.'}]},

'grc-rep': {lang:'grc', author:'Plato', work:'Republic', locus:'327a', ed:PSG_ED.grc + ' English: Benjamin Jowett (1871), Project Gutenberg eBook 1497; the bracketed note of that edition is left out.',
  lat:'κατέβην χθὲς εἰς Πειραιᾶ μετὰ Γλαύκωνος τοῦ Ἀρίστωνος προσευξόμενός τε τῇ θεῷ καὶ ἅμα τὴν ἑορτὴν βουλόμενος θεάσασθαι τίνα τρόπον ποιήσουσιν ἅτε νῦν πρῶτον ἄγοντες.',
  eng:'I went down yesterday to the Piraeus with Glaucon the son of Ariston, that I might offer up my prayers to the goddess; and also because I wanted to see in what manner they would celebrate the festival, which was a new thing.\n— Benjamin Jowett',
  ctx:'Socrates tells how the conversation of the Republic came about. He had gone down to the harbor of Athens for a new festival of a Thracian goddess.',
  parts:[
   {t:'κατέβην χθὲς εἰς Πειραιᾶ', h:'The main verb', n:'<em>Κατέβην</em> is the aorist of <em>καταβαίνω</em>, “I went down,” and <em>εἰς Πειραιᾶ</em> gives the place to which.'},
   {t:'μετὰ Γλαύκωνος τοῦ Ἀρίστωνος', h:'Μετά with the genitive', n:'<em>Μετά</em> with the genitive means “with.” <em>Τοῦ Ἀρίστωνος</em>, with “son” understood, names his father.'},
   {t:'προσευξόμενός τε τῇ θεῷ', h:'A future participle of purpose', n:'<em>Προσευξόμενος</em>, a future participle, gives the purpose: to pray to the goddess. <em>Τῇ θεῷ</em> is dative with the verb of praying.'},
   {t:'καὶ ἅμα τὴν ἑορτὴν βουλόμενος θεάσασθαι', h:'A present participle of cause', n:'<em>Βουλόμενος</em>, “wishing,” gives a second reason, and <em>θεάσασθαι</em> is the aorist infinitive it governs.'},
   {t:'τίνα τρόπον ποιήσουσιν ἅτε νῦν πρῶτον ἄγοντες', h:'An indirect question', n:'<em>Τίνα τρόπον</em>, “in what way,” begins an indirect question with the future <em>ποιήσουσιν</em>. <em>Ἅτε … ἄγοντες</em>, “since they were holding it now for the first time,” gives a reason as a fact.'}],
  qs:[
   {t:'κατέβην', q:'<em>κατέβην</em> is…', a:'Aorist, first person singular: “I went down”', ds:['Imperfect','Present','Perfect'], why:'<em>Ἔβην</em> is the root aorist of <em>βαίνω</em>, here compounded with <em>κατα-</em>.'},
   {t:'μετὰ Γλαύκωνος', q:'<em>μετὰ Γλαύκωνος</em> means…', a:'“With Glaucon”: <em>μετά</em> with the genitive', ds:['“After Glaucon”','“Among Glaucon”','“Toward Glaucon”'], why:'With the genitive, <em>μετά</em> means “with”; with the accusative, “after.”'},
   {t:'προσευξόμενός', q:'<em>προσευξόμενος</em> expresses…', a:'Purpose, as a future participle', ds:['Past time','Concession','Condition'], why:'A future participle after a verb of motion gives the purpose.'},
   {t:'τίνα τρόπον', q:'<em>τίνα τρόπον ποιήσουσιν</em> is…', a:'An indirect question after <em>θεάσασθαι</em>', ds:['A relative clause','A main clause','A purpose clause'], why:'<em>Τίνα</em>, “what,” asks the question that Socrates wished to see answered.'}]},

'grc-anab': {lang:'grc', author:'Xenophon', work:'Anabasis', locus:'1.1.1', ed:PSG_ED.grc + ' English: H. G. Dakyns (1890), Project Gutenberg eBook 1170.',
  lat:'Δαρείου καὶ Παρυσάτιδος γίγνονται παῖδες δύο, πρεσβύτερος μὲν Ἀρταξέρξης, νεώτερος δὲ Κῦρος· ἐπεὶ δὲ ἠσθένει Δαρεῖος καὶ ὑπώπτευε τελευτὴν τοῦ βίου, ἐβούλετο τὼ παῖδε ἀμφοτέρω παρεῖναι.',
  eng:'Darius and Parysatis had two sons: the elder was named Artaxerxes, and the younger Cyrus. Now, as Darius lay sick and felt that the end of life drew near, he wished both his sons to be with him.\n— H. G. Dakyns',
  ctx:'Xenophon’s Anabasis tells of the march of the younger Cyrus against his brother, the king of Persia, and of the return of the Greek soldiers. It begins plainly, with the family of the king.',
  parts:[
   {t:'Δαρείου καὶ Παρυσάτιδος γίγνονται παῖδες δύο', h:'The historical present', n:'<em>Γίγνονται</em>, “are born,” is the historical present, used for a past event in narrative. The genitives name the parents: of Darius and Parysatis.'},
   {t:'πρεσβύτερος μὲν Ἀρταξέρξης, νεώτερος δὲ Κῦρος', h:'Μέν and δέ', n:'<em>Μὲν … δέ</em> divides the two sons, the elder and the younger, with “was” understood.'},
   {t:'ἐπεὶ δὲ ἠσθένει Δαρεῖος καὶ ὑπώπτευε τελευτὴν τοῦ βίου', h:'A clause of time', n:'<em>Ἐπεί</em>, “when,” begins a clause with two imperfects: he was sick and suspected the end of his life.'},
   {t:'ἐβούλετο τὼ παῖδε ἀμφοτέρω παρεῖναι', h:'The dual', n:'<em>Τὼ παῖδε ἀμφοτέρω</em> is the dual, the number for two, as the subject of the infinitive <em>παρεῖναι</em>: he wished both sons to be present.'}],
  qs:[
   {t:'Δαρείου καὶ Παρυσάτιδος', q:'<em>Δαρείου καὶ Παρυσάτιδος</em> is…', a:'Genitive of origin: born of Darius and Parysatis', ds:['A genitive absolute','The subject','A dative'], why:'The genitive names the parents from whom the sons are born.'},
   {t:'γίγνονται', q:'Why is <em>γίγνονται</em> present?', a:'It is the historical present, used in narrative for a past event', ds:['The sons are still being born','It is a future','It is a mistake for the aorist'], why:'Greek narrative often uses the present to make a past event vivid.'},
   {t:'ἠσθένει', q:'<em>ἠσθένει</em> is…', a:'Imperfect: “he was sick”', ds:['Aorist','Present','Future'], why:'The augment and the ending <em>-ει</em> of a contract verb in <em>-έω</em> mark the imperfect.'},
   {t:'τὼ παῖδε ἀμφοτέρω', q:'<em>τὼ παῖδε ἀμφοτέρω</em> is in which number?', a:'The dual', ds:['The singular','The plural','None, it is indeclinable'], why:'Greek has a dual for pairs, with the endings <em>-ω</em> and <em>-ε</em>.'}]},

'grc-ne': {lang:'grc', author:'Aristotle', work:'Nicomachean Ethics', locus:'1094a1–3', ed:PSG_ED.grc + ' English: D. P. Chase (1847), in the Everyman edition, Project Gutenberg eBook 8438.',
  lat:'πᾶσα τέχνη καὶ πᾶσα μέθοδος, ὁμοίως δὲ πρᾶξίς τε καὶ προαίρεσις, ἀγαθοῦ τινὸς ἐφίεσθαι δοκεῖ· διὸ καλῶς ἀπεφήναντο τἀγαθόν, οὗ πάντʼ ἐφίεται.',
  eng:'Every art, and every science reduced to a teachable form, and in like manner every action and moral choice, aims, it is thought, at some good: for which reason a common and by no means a bad description of the Chief Good is, “that which all things aim at.”\n— D. P. Chase',
  ctx:'Aristotle opens the Ethics with a claim about all human activity, and draws from it a definition of the good. The sentence has four subjects and one verb.',
  parts:[
   {t:'πᾶσα τέχνη καὶ πᾶσα μέθοδος, ὁμοίως δὲ πρᾶξίς τε καὶ προαίρεσις', h:'Four subjects', n:'Four nouns are the subject: every art and every inquiry, and likewise action and choice.'},
   {t:'ἀγαθοῦ τινὸς ἐφίεσθαι δοκεῖ', h:'The verb', n:'<em>Δοκεῖ</em>, “seems,” is singular, agreeing with the nearest subject, and takes the infinitive <em>ἐφίεσθαι</em>, “to aim at,” which governs the genitive <em>ἀγαθοῦ τινος</em>.'},
   {t:'διὸ καλῶς ἀπεφήναντο τἀγαθόν', h:'The conclusion', n:'<em>Διό</em>, “therefore,” draws the conclusion. <em>Τἀγαθόν</em> is <em>τὸ ἀγαθόν</em> joined into one word (crasis), the object of <em>ἀπεφήναντο</em>.'},
   {t:'οὗ πάντʼ ἐφίεται', h:'A relative clause', n:'<em>Οὗ</em>, a genitive relative, is governed by <em>ἐφίεται</em>: that at which all things aim. <em>Πάντʼ</em> is <em>πάντα</em> with its last vowel elided, and a neuter plural takes a singular verb.'}],
  qs:[
   {t:'ἀγαθοῦ τινὸς', q:'Why is <em>ἀγαθοῦ τινος</em> genitive?', a:'<em>ἐφίεμαι</em>, “aim at,” takes the genitive', ds:['It shows possession','It is a genitive absolute','It follows <em>δοκεῖ</em>'], why:'Verbs of aiming and desiring take the genitive.'},
   {t:'δοκεῖ', q:'Why is <em>δοκεῖ</em> singular with four subjects?', a:'It agrees with the nearest subject', ds:['The subjects are one thing','It is impersonal and has no subject','It is a mistake'], why:'Greek may make the verb agree with the nearest of several subjects.'},
   {t:'τἀγαθόν', q:'<em>τἀγαθόν</em> is…', a:'<em>τὸ ἀγαθόν</em> joined by crasis', ds:['A genitive plural','A verb','A participle'], why:'Crasis merges a final vowel with the vowel that begins the next word.'},
   {t:'ἐφίεται', q:'Why is <em>ἐφίεται</em> singular with <em>πάντα</em>?', a:'A neuter plural subject takes a singular verb', ds:['<em>πάντα</em> is singular','The verb is impersonal','It agrees with <em>οὗ</em>'], why:'In Attic, a neuter plural subject usually has its verb in the singular.'}]},

'grc-pol': {lang:'grc', author:'Aristotle', work:'Politics', locus:'1252a1–7', ed:PSG_ED.grc + ' English: William Ellis (1912), Project Gutenberg eBook 6762; that edition’s marginal references are left out.',
  lat:'ἐπειδὴ πᾶσαν πόλιν ὁρῶμεν κοινωνίαν τινὰ οὖσαν καὶ πᾶσαν κοινωνίαν ἀγαθοῦ τινος ἕνεκεν συνεστηκυῖαν (τοῦ γὰρ εἶναι δοκοῦντος ἀγαθοῦ χάριν πάντα πράττουσι πάντες), δῆλον ὡς πᾶσαι μὲν ἀγαθοῦ τινος στοχάζονται, μάλιστα δὲ καὶ τοῦ κυριωτάτου πάντων ἡ πασῶν κυριωτάτη καὶ πάσας περιέχουσα τὰς ἄλλας.',
  eng:'As we see that every city is a society, and every society is established for some good purpose; for an apparent good is the spring of all human actions; it is evident that this is the principle upon which they are every one founded, and this is more especially true of that which has for its object the best possible, and is itself the most excellent, and comprehends all the rest.\n— William Ellis',
  ctx:'Aristotle begins the Politics, as he begins the Ethics, with the good at which things aim. The city is the society that aims at the highest good.',
  parts:[
   {t:'ἐπειδὴ πᾶσαν πόλιν ὁρῶμεν κοινωνίαν τινὰ οὖσαν', h:'A clause of cause with a participle', n:'<em>Ἐπειδή</em>, “since,” gives the ground. <em>Ὁρῶμεν</em> takes the participle <em>οὖσαν</em>: we see that every city is a community.'},
   {t:'καὶ πᾶσαν κοινωνίαν ἀγαθοῦ τινος ἕνεκεν συνεστηκυῖαν', h:'A second participle', n:'<em>Συνεστηκυῖαν</em>, a perfect participle, depends on <em>ὁρῶμεν</em> in the same way. <em>Ἕνεκεν</em>, “for the sake of,” follows its genitive.'},
   {t:'(τοῦ γὰρ εἶναι δοκοῦντος ἀγαθοῦ χάριν πάντα πράττουσι πάντες)', h:'A parenthesis', n:'<em>Χάριν</em>, like <em>ἕνεκεν</em>, follows its genitive: for the sake of what seems good, all do all things.'},
   {t:'δῆλον ὡς πᾶσαι μὲν ἀγαθοῦ τινος στοχάζονται', h:'The main clause', n:'<em>Δῆλον</em> (<em>ἐστί</em>) is the main clause, “it is clear,” and <em>ὡς</em> introduces what is clear.'},
   {t:'μάλιστα δὲ καὶ τοῦ κυριωτάτου πάντων ἡ πασῶν κυριωτάτη', h:'Superlatives', n:'<em>Ἡ πασῶν κυριωτάτη</em>, “the most authoritative of all,” is the subject, aiming at the most authoritative good.'}],
  qs:[
   {t:'ἐπειδὴ', q:'<em>ἐπειδὴ … ὁρῶμεν</em> is…', a:'A causal clause: since we see', ds:['A purpose clause','A condition','The main clause'], why:'<em>Ἐπειδή</em> gives the ground for what is clear.'},
   {t:'οὖσαν', q:'<em>οὖσαν</em> after <em>ὁρῶμεν</em> shows…', a:'A verb of seeing with a participle', ds:['A genitive absolute','An infinitive','A future'], why:'Verbs of perceiving take a participle agreeing with the thing perceived.'},
   {t:'ἕνεκεν', q:'<em>ἕνεκεν</em> governs…', a:'The genitive, which comes before it', ds:['The dative','The accusative','Nothing'], why:'<em>Ἕνεκα</em> and <em>χάριν</em> follow the genitive they govern.'},
   {t:'δῆλον', q:'What is the main clause?', a:'<em>δῆλον</em>, with <em>ἐστί</em> understood: “it is clear”', ds:['<em>ὁρῶμεν</em>','<em>πράττουσι</em>','<em>στοχάζονται</em>'], why:'The other verbs belong to dependent clauses or to the parenthesis.'}]},

'grc-john': {lang:'grc', author:'The Gospel according to John', work:'', locus:'1:1–5', ed:PSG_ED.nt,
  lat:'Ἐν ἀρχῇ ἦν ὁ λόγος, καὶ ὁ λόγος ἦν πρὸς τὸν θεόν, καὶ θεὸς ἦν ὁ λόγος. οὗτος ἦν ἐν ἀρχῇ πρὸς τὸν θεόν. πάντα διʼ αὐτοῦ ἐγένετο, καὶ χωρὶς αὐτοῦ ἐγένετο οὐδὲ ἕν. ὃ γέγονεν ἐν αὐτῷ ζωὴ ἦν, καὶ ἡ ζωὴ ἦν τὸ φῶς τῶν ἀνθρώπων· καὶ τὸ φῶς ἐν τῇ σκοτίᾳ φαίνει, καὶ ἡ σκοτία αὐτὸ οὐ κατέλαβεν.',
  eng:'In the beginning was the Word, and the Word was with God, and the Word was God. The same was in the beginning with God. All things were made by him; and without him was not any thing made that was made. In him was life; and the life was the light of men. And the light shineth in darkness; and the darkness comprehended it not.\n— King James Version',
  ctx:'The Gospel of John opens with a prologue on the Word. The clauses are short and joined by καί. The edition punctuates verse 3 so that ὃ γέγονεν begins a new sentence, whereas the King James Version joins it to the sentence before.',
  parts:[
   {t:'Ἐν ἀρχῇ ἦν ὁ λόγος', h:'The imperfect of being', n:'<em>Ἦν</em>, the imperfect of <em>εἰμί</em>, says what already was in the beginning. <em>Ὁ λόγος</em> is the subject.'},
   {t:'καὶ θεὸς ἦν ὁ λόγος', h:'The predicate without the article', n:'<em>Ὁ λόγος</em> has the article and is the subject; <em>θεός</em> without the article, placed first, is the predicate.'},
   {t:'πάντα διʼ αὐτοῦ ἐγένετο', h:'The aorist of becoming', n:'<em>Ἐγένετο</em>, the aorist of <em>γίγνομαι</em>, “came to be.” <em>Διʼ αὐτοῦ</em>, with the genitive, means “through him.”'},
   {t:'ὃ γέγονεν ἐν αὐτῷ ζωὴ ἦν', h:'A relative clause as subject', n:'<em>Ὃ γέγονεν</em>, “what has come to be,” is a relative clause with a perfect verb, and in this punctuation it is the subject: what has come to be was life in him.'},
   {t:'καὶ ἡ σκοτία αὐτὸ οὐ κατέλαβεν', h:'The aorist', n:'<em>Κατέλαβεν</em> is aorist, and <em>αὐτό</em>, neuter, refers to <em>τὸ φῶς</em>.'}],
  qs:[
   {t:'ἦν ὁ λόγος', q:'<em>ἦν</em> is…', a:'Imperfect of <em>εἰμί</em>: “was”', ds:['Aorist of <em>γίγνομαι</em>','Present','Future'], why:'<em>Ἦν</em> is the imperfect, “was,” of a continuing state.'},
   {t:'θεὸς ἦν ὁ λόγος', q:'In <em>θεὸς ἦν ὁ λόγος</em>, which word is the subject?', a:'<em>ὁ λόγος</em>, which has the article', ds:['<em>θεός</em>, which stands first','Neither: the sentence has no subject','<em>ἦν</em>'], why:'The noun with the article is the subject, and the one without it is the predicate.'},
   {t:'διʼ αὐτοῦ', q:'<em>διʼ αὐτοῦ</em> means…', a:'“Through him”: <em>διά</em> with the genitive', ds:['“Because of him”: <em>διά</em> with the accusative','“Against him”','“Before him”'], why:'<em>Διά</em> with the genitive gives the means; with the accusative, the cause.'},
   {t:'ὃ γέγονεν', q:'<em>γέγονεν</em> is…', a:'Perfect: “has come to be”', ds:['Aorist','Imperfect','Present'], why:'The reduplicated stem <em>γε-γον-</em> marks the perfect.'},
   {t:'αὐτὸ', q:'<em>αὐτό</em> refers to…', a:'<em>τὸ φῶς</em>, the light', ds:['<em>ἡ σκοτία</em>','<em>ὁ λόγος</em>','<em>ἡ ζωή</em>'], why:'<em>Αὐτό</em> is neuter, like <em>τὸ φῶς</em>.'}]},

'grc-phaedo': {lang:'grc', author:'Plato', work:'Phaedo', locus:'118a', ed:PSG_ED.grc + ' English: Benjamin Jowett (1871), Project Gutenberg eBook 1658.',
  lat:'ὦ Κρίτων, ἔφη, τῷ Ἀσκληπιῷ ὀφείλομεν ἀλεκτρυόνα· ἀλλὰ ἀπόδοτε καὶ μὴ ἀμελήσητε.',
  eng:'Crito, I owe a cock to Asclepius; will you remember to pay the debt?\n— Benjamin Jowett',
  ctx:'These are the last words of Socrates, as Phaedo reports them, after he has drunk the hemlock. Jowett’s English turns the command into a question.',
  parts:[
   {t:'ὦ Κρίτων, ἔφη', h:'The address and the verb of saying', n:'<em>Ὦ Κρίτων</em> is the vocative, and <em>ἔφη</em>, “he said,” is set inside the quoted words.'},
   {t:'τῷ Ἀσκληπιῷ ὀφείλομεν ἀλεκτρυόνα', h:'A dative and an accusative', n:'<em>Ὀφείλομεν</em>, “we owe,” takes the thing owed in the accusative, <em>ἀλεκτρυόνα</em>, and the one to whom it is owed in the dative.'},
   {t:'ἀλλὰ ἀπόδοτε', h:'An aorist imperative', n:'<em>Ἀπόδοτε</em>, “pay back,” is an aorist imperative, plural: a command to do it once.'},
   {t:'καὶ μὴ ἀμελήσητε', h:'A prohibition', n:'<em>Μή</em> with the aorist subjunctive is the regular way to forbid an act: do not neglect it.'}],
  qs:[
   {t:'τῷ Ἀσκληπιῷ', q:'<em>τῷ Ἀσκληπιῷ</em> is…', a:'Dative: the one to whom the debt is owed', ds:['Genitive','Accusative','Vocative'], why:'The person to whom something is owed stands in the dative.'},
   {t:'ὀφείλομεν', q:'Why is <em>ὀφείλομεν</em> plural?', a:'Socrates speaks for himself and his friends: “we owe”', ds:['It agrees with <em>Ἀσκληπιῷ</em>','It is a mistake for the singular','It is a passive'], why:'The ending <em>-ομεν</em> marks the first person plural.'},
   {t:'ἀπόδοτε', q:'<em>ἀπόδοτε</em> is…', a:'An aorist imperative, second person plural', ds:['A present indicative','An aorist indicative','An infinitive'], why:'<em>Ἀπόδοτε</em> is the aorist imperative of <em>ἀποδίδωμι</em>.'},
   {t:'μὴ ἀμελήσητε', q:'<em>μὴ ἀμελήσητε</em> is…', a:'A prohibition: <em>μή</em> with the aorist subjunctive', ds:['A purpose clause','A condition','A fear clause'], why:'Greek forbids a single act with <em>μή</em> and the aorist subjunctive.'}]},

/* The Greek prose of the drill. */
'grc-thuc235': {lang:'grc', author:'Thucydides', work:'History', locus:'2.35.1', ed:PSG_ED.grc + ' English: Richard Crawley (1874), Project Gutenberg eBook 7142.',
  lat:'οἱ μὲν πολλοὶ τῶν ἐνθάδε ἤδη εἰρηκότων ἐπαινοῦσι τὸν προσθέντα τῷ νόμῳ τὸν λόγον τόνδε, ὡς καλὸν ἐπὶ τοῖς ἐκ τῶν πολέμων θαπτομένοις ἀγορεύεσθαι αὐτόν.',
  eng:'Most of my predecessors in this place have commended him who made this speech part of the law, telling us that it is well that it should be delivered at the burial of those who fall in battle.\n— Richard Crawley',
  ctx:'Pericles begins the funeral oration for the Athenians who died in the first year of the war (431 BC). He starts from the custom of the speech itself.',
  parts:[
   {t:'οἱ μὲν πολλοὶ τῶν ἐνθάδε ἤδη εἰρηκότων', h:'The subject', n:'<em>Οἱ πολλοί</em>, “the many,” is the subject, with a partitive genitive: of those who have already spoken here. <em>Εἰρηκότων</em> is a perfect participle.'},
   {t:'ἐπαινοῦσι τὸν προσθέντα τῷ νόμῳ τὸν λόγον τόνδε', h:'The verb and its object', n:'<em>Ἐπαινοῦσι</em>, “praise,” has as its object <em>τὸν προσθέντα</em>, the one who added this speech to the law.'},
   {t:'ὡς καλὸν ἐπὶ τοῖς ἐκ τῶν πολέμων θαπτομένοις ἀγορεύεσθαι αὐτόν', h:'The reason given', n:'<em>Ὡς</em> gives the reason they offer: that it is good for it to be spoken over those buried from the wars. <em>Ἀγορεύεσθαι</em> is a passive infinitive with <em>αὐτόν</em>, the speech, as its subject.'}],
  qs:[
   {t:'εἰρηκότων', q:'<em>εἰρηκότων</em> is…', a:'A perfect participle, genitive plural', ds:['An aorist indicative','A present infinitive','A future participle'], why:'The reduplicated perfect stem with <em>-κότων</em>: of those who have spoken.'},
   {t:'τὸν προσθέντα', q:'<em>τὸν προσθέντα</em> means…', a:'“The one who added”: an aorist participle with the article', ds:['“The law”','“The speech”','“They added”'], why:'The article makes the participle a noun: the man who added the speech to the law.'},
   {t:'τῷ νόμῳ', q:'<em>τῷ νόμῳ</em> is…', a:'Dative with the compound verb: added to the law', ds:['Accusative','Genitive','Nominative'], why:'<em>Προστίθημι</em>, “add to,” takes the dative of the thing added to.'},
   {t:'θαπτομένοις', q:'<em>θαπτομένοις</em> is…', a:'A present passive participle: those being buried', ds:['An aorist active participle','A finite verb','An infinitive'], why:'It agrees with <em>τοῖς</em> after <em>ἐπί</em>: over those who are buried.'},
   {t:'ἀγορεύεσθαι', q:'<em>ἀγορεύεσθαι</em> is…', a:'A passive infinitive: “to be spoken”', ds:['A middle participle','A future indicative','An imperative'], why:'Its subject is <em>αὐτόν</em>, the speech: that it be spoken.'}]},

'grc-mem': {lang:'grc', author:'Xenophon', work:'Memorabilia', locus:'1.1.1', ed:PSG_ED.grc + ' English: H. G. Dakyns (1897), Project Gutenberg eBook 1177; the footnote markers are left out.',
  lat:'πολλάκις ἐθαύμασα τίσι ποτὲ λόγοις Ἀθηναίους ἔπεισαν οἱ γραψάμενοι Σωκράτην ὡς ἄξιος εἴη θανάτου τῇ πόλει.',
  eng:'I have often wondered by what arguments those who indicted Socrates could have persuaded the Athenians that his life was justly forfeit to the state.\n— H. G. Dakyns',
  ctx:'Xenophon begins his memoirs of Socrates by asking how the Athenians could have been persuaded to condemn him.',
  parts:[
   {t:'πολλάκις ἐθαύμασα', h:'The main clause', n:'<em>Ἐθαύμασα</em>, aorist, “I have wondered,” is the main verb.'},
   {t:'τίσι ποτὲ λόγοις Ἀθηναίους ἔπεισαν', h:'An indirect question', n:'<em>Τίσι … λόγοις</em>, a dative of means, asks by what arguments; <em>ποτέ</em> strengthens the question.'},
   {t:'οἱ γραψάμενοι Σωκράτην', h:'The subject', n:'<em>Οἱ γραψάμενοι</em>, the aorist middle participle with the article, means “those who indicted.”'},
   {t:'ὡς ἄξιος εἴη θανάτου τῇ πόλει', h:'The optative of reported speech', n:'<em>Εἴη</em> is optative, standing after a past verb in reported speech: that he was worthy of death.'}],
  qs:[
   {t:'τίσι', q:'<em>τίσι … λόγοις</em> is…', a:'A dative of means in an indirect question: by what arguments', ds:['An indirect object','A dative of possession','A genitive'], why:'The dative gives the means of persuading.'},
   {t:'οἱ γραψάμενοι', q:'<em>οἱ γραψάμενοι</em> means…', a:'“Those who indicted”: the middle of <em>γράφω</em> as a legal term', ds:['“Those who wrote”','“The writings”','“They wrote”'], why:'In the middle voice, <em>γράφομαι</em> means to bring a written charge.'},
   {t:'εἴη', q:'Why is <em>εἴη</em> optative?', a:'It reports the charge after a past verb', ds:['It expresses a wish','It is a condition','It is a purpose clause'], why:'After a past tense, a reported statement may take the optative.'},
   {t:'θανάτου', q:'Why is <em>θανάτου</em> genitive?', a:'<em>ἄξιος</em>, “worthy,” takes the genitive', ds:['It shows possession','It follows <em>ὡς</em>','It is a genitive absolute'], why:'Adjectives of worth take the genitive of what one is worthy of.'}]},

'grc-meno': {lang:'grc', author:'Plato', work:'Meno', locus:'70a', ed:PSG_ED.grc + ' English: Benjamin Jowett (1871), Project Gutenberg eBook 1643.',
  lat:'ἔχεις μοι εἰπεῖν, ὦ Σώκρατες, ἆρα διδακτὸν ἡ ἀρετή; ἢ οὐ διδακτὸν ἀλλʼ ἀσκητόν; ἢ οὔτε ἀσκητὸν οὔτε μαθητόν, ἀλλὰ φύσει παραγίγνεται τοῖς ἀνθρώποις ἢ ἄλλῳ τινὶ τρόπῳ;',
  eng:'Can you tell me, Socrates, whether virtue is acquired by teaching or by practice; or if neither by teaching nor by practice, then whether it comes to man by nature, or in what other way?\n— Benjamin Jowett',
  ctx:'The Meno opens without any preface: Meno asks Socrates whether virtue can be taught.',
  parts:[
   {t:'ἔχεις μοι εἰπεῖν, ὦ Σώκρατες', h:'Ἔχω with the infinitive', n:'<em>Ἔχεις εἰπεῖν</em>, “are you able to say,” uses <em>ἔχω</em> with the infinitive in the sense of “can.”'},
   {t:'ἆρα διδακτὸν ἡ ἀρετή', h:'A question with ἆρα', n:'<em>Ἆρα</em> marks a question. <em>Διδακτόν</em>, neuter, is the predicate: is virtue a thing that can be taught?'},
   {t:'ἢ οὐ διδακτὸν ἀλλʼ ἀσκητόν', h:'Alternatives', n:'<em>Ἤ</em> offers a second possibility, and <em>οὐ … ἀλλά</em> sets the two adjectives against each other.'},
   {t:'ἀλλὰ φύσει παραγίγνεται τοῖς ἀνθρώποις ἢ ἄλλῳ τινὶ τρόπῳ', h:'Datives of manner and of the person', n:'<em>Φύσει</em> and <em>ἄλλῳ τινὶ τρόπῳ</em> are datives of manner, and <em>τοῖς ἀνθρώποις</em> is the dative of the persons to whom it comes.'}],
  qs:[
   {t:'ἔχεις μοι εἰπεῖν', q:'<em>ἔχεις … εἰπεῖν</em> means…', a:'“Can you say”: <em>ἔχω</em> with the infinitive', ds:['“You have said”','“Do you have a saying”','“You will say”'], why:'<em>Ἔχω</em> with an infinitive means “be able.”'},
   {t:'ἆρα', q:'<em>ἆρα</em> marks…', a:'A question', ds:['A wish','A condition','A command'], why:'<em>Ἆρα</em> introduces a question that expects no particular answer.'},
   {t:'διδακτὸν ἡ ἀρετή', q:'Why is <em>διδακτόν</em> neuter, though <em>ἀρετή</em> is feminine?', a:'A neuter predicate adjective means “a thing that is teachable”', ds:['It agrees with an understood <em>ἔργον</em>','It is a mistake','<em>Ἀρετή</em> is neuter'], why:'Greek may use a neuter predicate to speak of a thing in general.'},
   {t:'φύσει', q:'<em>φύσει</em> is…', a:'A dative of manner: by nature', ds:['A verb','A dative of the person','A genitive'], why:'The dative gives the way in which virtue comes.'}]},

'grc-dem': {lang:'grc', author:'Demosthenes', work:'First Philippic', locus:'1', ed:PSG_ED.grc + ' English: Charles Rann Kennedy (1852), Project Gutenberg eBook 6878; the footnote is left out.',
  lat:'εἰ μὲν περὶ καινοῦ τινος πράγματος προυτίθετʼ, ὦ ἄνδρες Ἀθηναῖοι, λέγειν, ἐπισχὼν ἂν ἕως οἱ πλεῖστοι τῶν εἰωθότων γνώμην ἀπεφήναντο, εἰ μὲν ἤρεσκέ τί μοι τῶν ὑπὸ τούτων ῥηθέντων, ἡσυχίαν ἂν ἦγον, εἰ δὲ μή, τότʼ ἂν καὐτὸς ἐπειρώμην ἃ γιγνώσκω λέγειν·',
  eng:'Had the question for debate been any thing new, Athenians, I should have waited till most of the usual speakers had been heard; if any of their counsels had been to my liking, I had remained silent, else proceeded to impart my own.\n— Charles Rann Kennedy',
  ctx:'Demosthenes spoke his First Philippic in 351 BC, urging the Athenians to act against Philip of Macedon. He begins by explaining why he rises to speak first.',
  parts:[
   {t:'εἰ μὲν περὶ καινοῦ τινος πράγματος προυτίθετʼ', h:'A condition contrary to fact', n:'<em>Εἰ</em> with the imperfect <em>προυτίθετο</em> states a condition not true at present: if it were proposed to speak about a new matter.'},
   {t:'ἐπισχὼν ἂν ἕως οἱ πλεῖστοι τῶν εἰωθότων γνώμην ἀπεφήναντο', h:'A participle with ἄν', n:'<em>Ἐπισχὼν ἄν</em>, a participle with <em>ἄν</em>, carries the force of the conclusion: I would have waited until most of the usual speakers had declared their opinion.'},
   {t:'εἰ μὲν ἤρεσκέ τί μοι τῶν ὑπὸ τούτων ῥηθέντων, ἡσυχίαν ἂν ἦγον', h:'A second condition', n:'<em>Εἰ</em> with the imperfect and <em>ἄν</em> with the imperfect: if anything they said pleased me, I would keep quiet.'},
   {t:'εἰ δὲ μή, τότʼ ἂν καὐτὸς ἐπειρώμην ἃ γιγνώσκω λέγειν', h:'The contrary case', n:'<em>Εἰ δὲ μή</em>, “otherwise.” <em>Καὐτός</em> is <em>καὶ αὐτός</em> by crasis: I too would try to say what I think.'}],
  qs:[
   {t:'προυτίθετʼ', q:'<em>εἰ … προυτίθετο</em> is…', a:'A condition contrary to fact, with the imperfect', ds:['A simple condition','A purpose clause','A wish'], why:'The imperfect indicative with <em>εἰ</em>, and <em>ἄν</em> in the conclusion, mark a condition not true now.'},
   {t:'ἂν ἕως', q:'What does <em>ἄν</em> with <em>ἐπισχών</em> do?', a:'It gives the participle the force of the conclusion: “I would have waited”', ds:['It marks a purpose','It makes the participle future','Nothing'], why:'A participle with <em>ἄν</em> stands for a finite verb with <em>ἄν</em>.'},
   {t:'ῥηθέντων', q:'<em>ῥηθέντων</em> is…', a:'An aorist passive participle: of the things said', ds:['A perfect active participle','A finite verb','An infinitive'], why:'<em>Ῥηθέντων</em> is the aorist passive participle of the verb “say,” genitive plural.'},
   {t:'καὐτὸς', q:'<em>καὐτός</em> is…', a:'<em>καὶ αὐτός</em> joined by crasis: “I too”', ds:['A form of <em>κάω</em>','A genitive','An adverb of place'], why:'Crasis merges <em>καί</em> with the next word.'}]},

'grc-luke': {lang:'grc', author:'The Gospel according to Luke', work:'', locus:'2:1–3', ed:PSG_ED.nt + ' The text-critical signs of the edition are left out.',
  lat:'Ἐγένετο δὲ ἐν ταῖς ἡμέραις ἐκείναις ἐξῆλθεν δόγμα παρὰ Καίσαρος Αὐγούστου ἀπογράφεσθαι πᾶσαν τὴν οἰκουμένην· (αὕτη ἀπογραφὴ πρώτη ἐγένετο ἡγεμονεύοντος τῆς Συρίας Κυρηνίου·) καὶ ἐπορεύοντο πάντες ἀπογράφεσθαι, ἕκαστος εἰς τὴν ἑαυτοῦ πόλιν.',
  eng:'And it came to pass in those days, that there went out a decree from Caesar Augustus that all the world should be taxed. (And this taxing was first made when Cyrenius was governor of Syria.) And all went to be taxed, every one into his own city.\n— King James Version',
  ctx:'Luke begins his account of the birth of Jesus by placing it in the reign of Augustus.',
  parts:[
   {t:'Ἐγένετο δὲ ἐν ταῖς ἡμέραις ἐκείναις ἐξῆλθεν δόγμα', h:'Ἐγένετο with a second verb', n:'<em>Ἐγένετο</em>, “it came to pass,” is followed by a second finite verb, <em>ἐξῆλθεν</em>, a way of telling that follows the Hebrew style of the Greek Old Testament.'},
   {t:'ἀπογράφεσθαι πᾶσαν τὴν οἰκουμένην', h:'An infinitive of the content', n:'The infinitive gives the content of the decree: that the whole world be registered.'},
   {t:'ἡγεμονεύοντος τῆς Συρίας Κυρηνίου', h:'A genitive absolute', n:'A participle and its noun in the genitive give the time: when Quirinius was governing Syria.'},
   {t:'καὶ ἐπορεύοντο πάντες ἀπογράφεσθαι', h:'An infinitive of purpose', n:'<em>Ἀπογράφεσθαι</em> after a verb of going gives the purpose: they went to be registered.'}],
  qs:[
   {t:'ἐξῆλθεν', q:'<em>ἐξῆλθεν</em> is…', a:'Aorist indicative, the second verb after <em>ἐγένετο</em>', ds:['An infinitive','A participle','A subjunctive'], why:'Luke writes <em>ἐγένετο</em> and then a finite verb: it came to pass, a decree went out.'},
   {t:'ἀπογράφεσθαι πᾶσαν', q:'<em>ἀπογράφεσθαι πᾶσαν τὴν οἰκουμένην</em> gives…', a:'The content of the decree, with the subject in the accusative', ds:['The cause of the decree','A purpose clause with ἵνα','A genitive absolute'], why:'An infinitive with an accusative subject can state what is ordered.'},
   {t:'ἡγεμονεύοντος', q:'<em>ἡγεμονεύοντος … Κυρηνίου</em> is…', a:'A genitive absolute giving the time', ds:['A genitive of possession','The subject','A dative'], why:'The participle and its noun stand apart in the genitive.'},
   {t:'ἑαυτοῦ', q:'<em>ἑαυτοῦ</em> is…', a:'A reflexive pronoun: his own', ds:['A personal pronoun “him”','A relative pronoun','A demonstrative'], why:'The reflexive refers back to the subject, <em>ἕκαστος</em>.'}]},

/* Greek poetry. */
'grc-il': {lang:'grc', author:'Homer', work:'Iliad', locus:'1.1–7', meter:'Dactylic hexameter', ed:PSG_ED.grc + ' English: Samuel Butler (1898), Project Gutenberg eBook 2199.',
  lat:'μῆνιν ἄειδε θεὰ Πηληϊάδεω Ἀχιλῆος\nοὐλομένην, ἣ μυρίʼ Ἀχαιοῖς ἄλγεʼ ἔθηκε,\nπολλὰς δʼ ἰφθίμους ψυχὰς Ἄϊδι προΐαψεν\nἡρώων, αὐτοὺς δὲ ἑλώρια τεῦχε κύνεσσιν\nοἰωνοῖσί τε πᾶσι, Διὸς δʼ ἐτελείετο βουλή,\nἐξ οὗ δὴ τὰ πρῶτα διαστήτην ἐρίσαντε\nἈτρεΐδης τε ἄναξ ἀνδρῶν καὶ δῖος Ἀχιλλεύς.',
  eng:'Sing, O goddess, the anger of Achilles son of Peleus, that brought countless ills upon the Achaeans. Many a brave soul did it send hurrying down to Hades, and many a hero did it yield a prey to dogs and vultures, for so were the counsels of Jove fulfilled from the day on which the son of Atreus, king of men, and great Achilles, first fell out with one another.\n— Samuel Butler',
  ctx:'The Iliad opens by naming its subject, the wrath of Achilles, and asking the goddess to sing it. Homer’s language is older than Attic, and its forms differ. The meter is the dactylic hexameter.',
  parts:[
   {t:'μῆνιν ἄειδε θεὰ', h:'The imperative and the object', n:'<em>Μῆνιν</em>, “wrath,” is the object, placed first; <em>ἄειδε</em> is the imperative, and <em>θεά</em> the vocative.'},
   {t:'Πηληϊάδεω Ἀχιλῆος', h:'Homeric genitives', n:'<em>Πηληϊάδεω</em>, “son of Peleus,” and <em>Ἀχιλῆος</em> are genitives in Homeric forms.'},
   {t:'οὐλομένην, ἣ μυρίʼ Ἀχαιοῖς ἄλγεʼ ἔθηκε', h:'An adjective and a relative clause', n:'<em>Οὐλομένην</em>, “accursed,” agrees with <em>μῆνιν</em>, held over into the second line, and <em>ἥ</em> begins a relative clause. <em>Ἔθηκε</em> has no augment, as often in Homer.'},
   {t:'πολλὰς δʼ ἰφθίμους ψυχὰς Ἄϊδι προΐαψεν', h:'A second verb', n:'<em>Προΐαψεν</em>, “sent forth,” has <em>ψυχάς</em> as its object, and <em>Ἄϊδι</em> is a dative of direction.'},
   {t:'αὐτοὺς δὲ ἑλώρια τεῦχε κύνεσσιν', h:'Two accusatives', n:'<em>Τεῦχε</em>, “made,” takes the object <em>αὐτούς</em> and the predicate <em>ἑλώρια</em>, “prey,” and <em>κύνεσσιν</em> is a Homeric dative plural.'},
   {t:'Διὸς δʼ ἐτελείετο βουλή', h:'The imperfect', n:'<em>Ἐτελείετο</em>, imperfect passive, presents the will of Zeus as being fulfilled throughout.'},
   {t:'ἐξ οὗ δὴ τὰ πρῶτα διαστήτην ἐρίσαντε', h:'The dual', n:'<em>Διαστήτην</em> and <em>ἐρίσαντε</em> are dual forms: the two quarreled and stood apart.'}],
  qs:[
   {t:'μῆνιν', q:'<em>μῆνιν</em> is…', a:'Accusative, the object of <em>ἄειδε</em>', ds:['Nominative','Vocative','Genitive'], why:'The first word of the poem is its subject: sing the wrath.'},
   {t:'ἄειδε', q:'<em>ἄειδε</em> is…', a:'A present imperative: “sing”', ds:['An aorist indicative','An infinitive','A participle'], why:'The ending <em>-ε</em> with no augment marks the imperative.'},
   {t:'ἣ μυρίʼ', q:'<em>ἥ</em> refers to…', a:'<em>μῆνιν</em>, the wrath', ds:['<em>θεά</em>','<em>Ἀχιλῆος</em>','<em>Ἀχαιοῖς</em>'], why:'The relative is feminine singular, like <em>μῆνιν</em>, and the wrath caused the woes.'},
   {t:'κύνεσσιν', q:'<em>κύνεσσιν</em> is…', a:'A Homeric dative plural: for dogs', ds:['A genitive','A verb','An accusative'], why:'Homer has the dative plural ending <em>-εσσι</em>.'},
   {t:'διαστήτην', q:'<em>διαστήτην</em> is in which number?', a:'The dual: the two stood apart', ds:['The singular','The plural','The neuter plural'], why:'The ending <em>-την</em> marks the dual of a past tense.'}]},

'grc-od': {lang:'grc', author:'Homer', work:'Odyssey', locus:'1.1–5', meter:'Dactylic hexameter', ed:PSG_ED.grc + ' English: Samuel Butler (1900), Project Gutenberg eBook 1727.',
  lat:'ἄνδρα μοι ἔννεπε, μοῦσα, πολύτροπον, ὃς μάλα πολλὰ\nπλάγχθη, ἐπεὶ Τροίης ἱερὸν πτολίεθρον ἔπερσεν·\nπολλῶν δʼ ἀνθρώπων ἴδεν ἄστεα καὶ νόον ἔγνω,\nπολλὰ δʼ ὅ γʼ ἐν πόντῳ πάθεν ἄλγεα ὃν κατὰ θυμόν,\nἀρνύμενος ἥν τε ψυχὴν καὶ νόστον ἑταίρων.',
  eng:'Tell me, O Muse, of that ingenious hero who traveled far and wide after he had sacked the famous town of Troy. Many cities did he visit, and many were the nations with whose manners and customs he was acquainted; moreover he suffered much by sea while trying to save his own life and bring his men safely home.\n— Samuel Butler',
  ctx:'The Odyssey opens as the Iliad does, with its subject and a call to the Muse: the man of many turns, who wandered after the fall of Troy.',
  parts:[
   {t:'ἄνδρα μοι ἔννεπε, μοῦσα, πολύτροπον', h:'The object first', n:'<em>Ἄνδρα</em>, “the man,” is the object of <em>ἔννεπε</em>, “tell,” and <em>πολύτροπον</em> agrees with it, held to the end of the phrase.'},
   {t:'ὃς μάλα πολλὰ\nπλάγχθη', h:'A relative clause', n:'<em>Ὅς</em> takes up the man, and <em>πλάγχθη</em>, an aorist passive without augment, means “was driven to wander.”'},
   {t:'ἐπεὶ Τροίης ἱερὸν πτολίεθρον ἔπερσεν', h:'A clause of time', n:'<em>Ἐπεί</em> with the aorist <em>ἔπερσεν</em>: after he sacked the holy city of Troy.'},
   {t:'πολλῶν δʼ ἀνθρώπων ἴδεν ἄστεα καὶ νόον ἔγνω', h:'Two verbs', n:'<em>Ἴδεν</em> and <em>ἔγνω</em> are aorists; the genitive <em>πολλῶν ἀνθρώπων</em> goes with both objects.'},
   {t:'ἀρνύμενος ἥν τε ψυχὴν καὶ νόστον ἑταίρων', h:'A participle of purpose', n:'<em>Ἀρνύμενος</em>, “striving to win,” describes him, and <em>ἥν</em> is the Homeric possessive “his own.”'}],
  qs:[
   {t:'ἄνδρα', q:'<em>ἄνδρα</em> is…', a:'Accusative, the object of <em>ἔννεπε</em>', ds:['Vocative','Nominative','Dative'], why:'As in the Iliad, the first word names the subject of the song.'},
   {t:'μοῦσα', q:'<em>μοῦσα</em> is…', a:'Vocative: the Muse addressed', ds:['Nominative subject of <em>πλάγχθη</em>','Accusative','Genitive'], why:'The Muse is the one asked to tell.'},
   {t:'πλάγχθη', q:'<em>πλάγχθη</em> lacks…', a:'The augment, as often in Homer', ds:['A subject','Its ending','Its stem'], why:'Homer may leave off the augment of past tenses.'},
   {t:'ἀρνύμενος', q:'<em>ἀρνύμενος</em> agrees with…', a:'The man, the subject of <em>πάθεν</em>', ds:['<em>ψυχήν</em>','<em>ἑταίρων</em>','<em>πόντῳ</em>'], why:'It is nominative masculine singular and describes him.'}]},

'grc-ot': {lang:'grc', author:'Sophocles', work:'Oedipus Tyrannus', locus:'1–5', meter:'Iambic trimeter', ed:PSG_ED.grc + ' English: F. Storr (1912), Project Gutenberg eBook 31.',
  lat:'ὦ τέκνα, Κάδμου τοῦ πάλαι νέα τροφή,\nτίνας ποθʼ ἕδρας τάσδε μοι θοάζετε\nἱκτηρίοις κλάδοισιν ἐξεστεμμένοι;\nπόλις δʼ ὁμοῦ μὲν θυμιαμάτων γέμει,\nὁμοῦ δὲ παιάνων τε καὶ στεναγμάτων·',
  eng:'My children, latest born to Cadmus old,\nWhy sit you here as suppliants, in your hands\nBranches of olive filleted with wool?\nWhat means this reek of incense everywhere,\nAnd everywhere laments and litanies?\n— F. Storr',
  ctx:'The play opens at Thebes, struck by plague. The king, Oedipus, speaks to the suppliants before his palace. The spoken lines of Greek tragedy are iambic trimeters.',
  parts:[
   {t:'ὦ τέκνα, Κάδμου τοῦ πάλαι νέα τροφή', h:'The address', n:'<em>Ὦ τέκνα</em> is vocative, and <em>νέα τροφή</em>, “young brood,” stands in apposition to it; <em>Κάδμου τοῦ πάλαι</em>, “of Cadmus of old.”'},
   {t:'τίνας ποθʼ ἕδρας τάσδε μοι θοάζετε', h:'A question', n:'<em>Τίνας</em>, “what,” asks the question, and <em>μοι</em> is an ethic dative: what is this sitting of yours, I ask.'},
   {t:'ἱκτηρίοις κλάδοισιν ἐξεστεμμένοι', h:'A perfect participle', n:'<em>Ἐξεστεμμένοι</em>, a perfect passive participle, agrees with the children: wreathed with suppliant branches, a dative of means.'},
   {t:'πόλις δʼ ὁμοῦ μὲν θυμιαμάτων γέμει', h:'The genitive with a verb of fullness', n:'<em>Γέμει</em>, “is full,” takes the genitive: of incense.'},
   {t:'ὁμοῦ δὲ παιάνων τε καὶ στεναγμάτων', h:'Μέν and δέ', n:'<em>Ὁμοῦ μὲν … ὁμοῦ δέ</em> sets the incense beside the hymns and the groans, all at once.'}],
  qs:[
   {t:'ὦ τέκνα', q:'<em>ὦ τέκνα</em> is…', a:'Vocative: the children addressed', ds:['Nominative subject','Accusative object','Genitive'], why:'<em>Ὦ</em> marks the address.'},
   {t:'ἐξεστεμμένοι', q:'<em>ἐξεστεμμένοι</em> is…', a:'A perfect passive participle, agreeing with the children', ds:['A finite verb','An infinitive','An aorist active participle'], why:'The reduplication and <em>-μένοι</em> mark the perfect middle-passive participle.'},
   {t:'θυμιαμάτων', q:'Why is <em>θυμιαμάτων</em> genitive?', a:'<em>γέμω</em>, “be full,” takes the genitive', ds:['It shows possession','It is a genitive absolute','It is partitive after <em>ὁμοῦ</em>'], why:'Verbs of filling and fullness take the genitive.'},
   {t:'ὁμοῦ δὲ', q:'<em>ὁμοῦ μὲν … ὁμοῦ δέ</em> means…', a:'“At once … and at once”: the two set side by side', ds:['“Neither … nor”','“Because … therefore”','“If … then”'], why:'The repeated <em>ὁμοῦ</em> with <em>μὲν … δέ</em> links two things happening together.'}]},

'grc-hes': {lang:'grc', author:'Hesiod', work:'Works and Days', locus:'1–4', meter:'Dactylic hexameter', ed:PSG_ED.grc + ' English: Hugh G. Evelyn-White (1914), Project Gutenberg eBook 348.',
  lat:'μοῦσαι Πιερίηθεν ἀοιδῇσιν κλείουσαι\nδεῦτε, Δίʼ ἐννέπετε, σφέτερον πατέρʼ ὑμνείουσαι·\nὅντε διὰ βροτοὶ ἄνδρες ὁμῶς ἄφατοί τε φατοί τε,\nῥητοί τʼ ἄρρητοί τε Διὸς μεγάλοιο ἕκητι.',
  eng:'Muses of Pieria who give glory through song, come hither, tell of Zeus your father and chant his praise. Through him mortal men are famed or un-famed, sung or unsung alike, as great Zeus wills.\n— Hugh G. Evelyn-White',
  ctx:'Hesiod’s poem on work and the farmer’s year opens with a hymn to Zeus. Like Homer, Hesiod writes in hexameters and in the epic dialect.',
  parts:[
   {t:'μοῦσαι Πιερίηθεν ἀοιδῇσιν κλείουσαι', h:'The address', n:'<em>Μοῦσαι</em> is vocative, <em>Πιερίηθεν</em> means “from Pieria,” and <em>κλείουσαι</em>, “glorifying,” is a participle agreeing with the Muses.'},
   {t:'δεῦτε, Δίʼ ἐννέπετε, σφέτερον πατέρʼ ὑμνείουσαι', h:'Imperatives', n:'<em>Δεῦτε</em>, “come,” and <em>ἐννέπετε</em>, “tell of,” are imperatives; <em>Δίʼ</em> is <em>Δία</em> elided.'},
   {t:'ὅντε διὰ βροτοὶ ἄνδρες ὁμῶς ἄφατοί τε φατοί τε', h:'A relative clause', n:'<em>Ὅντε διά</em>, “through whom,” with the preposition after its object, begins a relative clause.'},
   {t:'Διὸς μεγάλοιο ἕκητι', h:'A preposition after its genitive', n:'<em>Ἕκητι</em>, “by the will of,” follows its genitive; <em>μεγάλοιο</em> is the Homeric genitive in <em>-οιο</em>.'}],
  qs:[
   {t:'μοῦσαι', q:'<em>μοῦσαι</em> is…', a:'Vocative plural: the Muses addressed', ds:['Nominative subject','Accusative','Genitive'], why:'The poet calls on them, as the imperatives show.'},
   {t:'δεῦτε', q:'<em>δεῦτε</em> and <em>ἐννέπετε</em> are…', a:'Imperatives plural', ds:['Indicatives','Infinitives','Participles'], why:'They are commands to the Muses.'},
   {t:'ὅντε διὰ', q:'In <em>ὅντε διά</em>, the preposition…', a:'Follows its object, as often in poetry', ds:['Governs the genitive','Is an adverb','Begins a new sentence'], why:'<em>Διά</em> with the accusative <em>ὅν</em>: on account of whom.'},
   {t:'μεγάλοιο', q:'<em>μεγάλοιο</em> is…', a:'A genitive in the epic ending <em>-οιο</em>', ds:['A dative','A nominative','A verb'], why:'Epic Greek has <em>-οιο</em> beside <em>-ου</em>.'}]},

'grc-epit': {lang:'grc', author:'Simonides (ascribed)', work:'Epitaph for the Spartans at Thermopylae', locus:'in Herodotus 7.228', meter:'Elegiac couplet', ed:PSG_ED.grc + ' English: G. C. Macaulay (1890), Project Gutenberg eBook 2456.',
  lat:'ὦ ξεῖνʼ, ἀγγέλλειν Λακεδαιμονίοις ὅτι τῇδε\nκείμεθα τοῖς κείνων ῥήμασι πειθόμενοι.',
  eng:'Stranger, report this word, we pray, to the Spartans, that lying\nHere in this spot we remain, faithfully keeping their laws.\n— G. C. Macaulay',
  ctx:'Herodotus quotes this epitaph for the Spartans who died at Thermopylae in 480 BC. It is an elegiac couplet: a hexameter and a pentameter.',
  parts:[
   {t:'ὦ ξεῖνʼ', h:'The address', n:'<em>Ὦ ξεῖνʼ</em> is <em>ξεῖνε</em>, the vocative, with its last vowel elided: stranger.'},
   {t:'ἀγγέλλειν Λακεδαιμονίοις', h:'An infinitive used as a command', n:'<em>Ἀγγέλλειν</em>, an infinitive, stands for an imperative: tell the Spartans.'},
   {t:'ὅτι τῇδε\nκείμεθα', h:'The thing to be told', n:'<em>Ὅτι</em> introduces what is to be told: that here we lie.'},
   {t:'τοῖς κείνων ῥήμασι πειθόμενοι', h:'A participle with the dative', n:'<em>Πειθόμενοι</em>, “obeying,” takes the dative <em>ῥήμασι</em>: obeying their words.'}],
  qs:[
   {t:'ἀγγέλλειν', q:'<em>ἀγγέλλειν</em> here is…', a:'An infinitive standing for an imperative', ds:['An infinitive of purpose','A finite verb','A participle'], why:'Greek can use the infinitive as a command.'},
   {t:'ὅτι', q:'<em>ὅτι … κείμεθα</em> is…', a:'The content of the message: that we lie here', ds:['A causal clause','A relative clause','A purpose clause'], why:'After a verb of telling, <em>ὅτι</em> gives what is told.'},
   {t:'ῥήμασι', q:'Why is <em>ῥήμασι</em> dative?', a:'<em>πείθομαι</em>, “obey,” takes the dative', ds:['It is a dative of means','It follows <em>τοῖς</em> alone','It is a dative of time'], why:'The middle <em>πείθομαι</em> means “obey” and takes the dative.'},
   {t:'πειθόμενοι', q:'<em>πειθόμενοι</em> agrees with…', a:'The subject of <em>κείμεθα</em>, “we”', ds:['<em>Λακεδαιμονίοις</em>','<em>ξεῖνε</em>','<em>ῥήμασι</em>'], why:'It is nominative plural, describing those who lie there.'}]}
});


/* ===== grc2 ===== */
/* Five more Greek poems, for the poetry drill. Greek of the standard editions (Sappho, Voigt fr. 1; Euripides and
   Aeschylus, Perseus Digital Library; Callimachus, Pfeiffer ep. 2 = Anth. Pal. 7.80; Plato, Anth. Pal. 7.670).
   English as printed by Project Gutenberg, named in each passage, lightly modernized. */
Object.assign(PASSAGES, {
'grc-sappho': {lang:'grc', author:'Sappho', work:'Hymn to Aphrodite', locus:'fr. 1.1–4', meter:'Sapphic stanza', ed:'Greek of Sappho fr. 1 in the edition of E.-M. Voigt (1971). English: Henry Thornton Wharton, <i>Sappho</i> (1885), Project Gutenberg eBook 57390.',
  lat:'ποικιλόθρον᾽ ἀθανάτ᾽ Ἀφρόδιτα,\nπαῖ Δίος δολόπλοκε, λίσσομαί σε,\nμή μ᾽ ἄσαισι μηδ᾽ ὀνίαισι δάμνα,\nπότνια, θῦμον.',
  eng:'Immortal Aphrodite of the broidered throne, daughter of Zeus, weaver of wiles, I pray you, break not my spirit with anguish and distress, O Queen.\n— Henry Thornton Wharton',
  ctx:'The first stanza of the only poem of Sappho that survives whole. The sapphic stanza has three long lines of the shape — ᴗ — x — ᴗ ᴗ — ᴗ — x and a short fourth, the adonean, — ᴗ ᴗ — x. Sappho writes in the Lesbian dialect: <em>θῦμον</em> for <em>θυμόν</em>, and the accent drawn back.',
  parts:[
   {t:'ποικιλόθρον᾽ ἀθανάτ᾽ Ἀφρόδιτα', h:'Vocative and elision', n:'Three vocatives: <em>ποικιλόθρονε</em>, “of the many-colored throne,” and <em>ἀθάνατε</em>, “immortal,” both elided before a vowel, and <em>Ἀφρόδιτα</em>, with Aeolic <em>ā</em> for Attic <em>η</em>.'},
   {t:'παῖ Δίος δολόπλοκε', h:'More vocatives', n:'<em>Παῖ</em>, vocative of <em>παῖς</em>; <em>Δίος</em>, “of Zeus,” the genitive of <em>Ζεύς</em>, with the Lesbian accent; <em>δολόπλοκε</em>, “weaver of wiles.”'},
   {t:'λίσσομαί σε', h:'The main verb', n:'<em>Λίσσομαι</em>, “I beg,” a middle deponent, takes <em>σε</em> as its object.'},
   {t:'μή μ᾽ ἄσαισι μηδ᾽ ὀνίαισι δάμνα', h:'A prohibition', n:'<em>Μή</em> with the present imperative <em>δάμνα</em>: do not keep crushing. <em>Ἄσαισι</em> and <em>ὀνίαισι</em> are Aeolic dative plurals, “with distress and pains.” <em>Μ᾽</em> is <em>μοι</em> or <em>με</em>, elided.'},
   {t:'πότνια, θῦμον', h:'The adonean', n:'<em>Πότνια</em>, “lady,” another vocative, and <em>θῦμον</em>, the object of <em>δάμνα</em>: my heart. — ᴗ ᴗ — —.'}],
  qs:[
   {t:'Ἀφρόδιτα', q:'<em>Ἀφρόδιτα</em> ends in <em>-α</em> because…', a:'Aeolic keeps long <em>ā</em> where Attic has <em>η</em>, here in the vocative', ds:['It is a neuter plural','It is accusative','It is a dual'], why:'Attic would have <em>Ἀφροδίτη</em>; the vocative in Sappho’s dialect is <em>Ἀφρόδιτα</em>.'},
   {t:'λίσσομαί σε', q:'<em>λίσσομαι</em> is…', a:'A deponent: middle in form, active in sense', ds:['A passive: I am begged','A future','An imperative'], why:'It has no active form; it means “I beg.”'},
   {t:'μή', q:'<em>μή … δάμνα</em> is…', a:'A prohibition with the present imperative: do not keep crushing', ds:['A purpose clause','A fear clause','A statement of fact'], why:'<em>Μή</em> with the present imperative forbids an action going on.'},
   {t:'ἄσαισι', q:'<em>ἄσαισι</em> is…', a:'An Aeolic dative plural: with distresses', ds:['A nominative singular','A verb','An accusative plural'], why:'Aeolic <em>-αισι</em> for Attic <em>-αις</em>.'},
   {t:'θῦμον', q:'<em>θῦμον</em> is the object of…', a:'<em>δάμνα</em>', ds:['<em>λίσσομαι</em>','<em>πότνια</em>','Nothing; it is a vocative'], why:'Do not crush my heart: <em>θῦμον</em>, accusative.'}]},

'grc-medea': {lang:'grc', author:'Euripides', work:'Medea', locus:'1–6', meter:'Iambic trimeter', ed:PSG_ED.grc + ' English: Gilbert Murray (1906), Project Gutenberg eBook 35451.',
  lat:'Εἴθ᾽ ὤφελ᾽ Ἀργοῦς μὴ διαπτάσθαι σκάφος\nΚόλχων ἐς αἶαν κυανέας Συμπληγάδας,\nμηδ᾽ ἐν νάπαισι Πηλίου πεσεῖν ποτε\nτμηθεῖσα πεύκη, μηδ᾽ ἐρετμῶσαι χέρας\nἀνδρῶν ἀρίστων, οἳ τὸ πάγχρυσον δέρος\nΠελίᾳ μετῆλθον.',
  eng:'Would God no Argo e’er had winged the seas\nTo Colchis through the blue Symplegades:\nNo shaft of riven pine in Pelion’s glen\nShaped that first oar-blade in the hands of men\nValiant, who won, to save King Pelias’ vow,\nThe fleece all-golden!\n— Gilbert Murray',
  ctx:'The Nurse opens the play with a wish that the past had been otherwise. The verse is iambic trimeter: three pairs of iambs, x — ᴗ — | x — ᴗ — | x — ᴗ —.',
  parts:[
   {t:'Εἴθ᾽ ὤφελ᾽ Ἀργοῦς μὴ διαπτάσθαι σκάφος', h:'An unattainable wish', n:'<em>Εἴθ᾽ ὤφελε</em> with the infinitive: would that it had (not). <em>Ὤφελε</em> is the aorist of <em>ὀφείλω</em>, “ought.” The subject of <em>διαπτάσθαι</em> is <em>σκάφος</em>, “the hull of the Argo.”'},
   {t:'Κόλχων ἐς αἶαν κυανέας Συμπληγάδας', h:'Motion through and to', n:'<em>Ἐς αἶαν</em>, “to the land,” with <em>Κόλχων</em> genitive. <em>Κυανέας Συμπληγάδας</em>, accusative, the dark Clashing Rocks it flew through.'},
   {t:'μηδ᾽ ἐν νάπαισι Πηλίου πεσεῖν ποτε\nτμηθεῖσα πεύκη', h:'A second infinitive with its own subject', n:'<em>Μηδέ</em> adds a second wish: nor that the pine, cut (<em>τμηθεῖσα</em>, aorist passive participle), had ever fallen in Pelion’s glens.'},
   {t:'μηδ᾽ ἐρετμῶσαι χέρας', h:'A third infinitive', n:'<em>Ἐρετμῶσαι</em>, “to furnish with oars,” aorist infinitive; <em>χέρας</em>, “the hands,” its object.'},
   {t:'οἳ τὸ πάγχρυσον δέρος\nΠελίᾳ μετῆλθον', h:'A relative clause', n:'<em>Οἵ</em>, masculine plural, takes up <em>ἀνδρῶν ἀρίστων</em>. <em>Μετῆλθον</em>, “went after,” with <em>Πελίᾳ</em> dative, for Pelias.'}],
  qs:[
   {t:'Εἴθ᾽ ὤφελ᾽', q:'<em>εἴθ᾽ ὤφελε</em> with an infinitive expresses…', a:'A wish that cannot now come true', ds:['A command','A purpose','A future condition'], why:'“Would that it had not”: the Argo has already sailed.'},
   {t:'σκάφος', q:'The subject of <em>διαπτάσθαι</em> is…', a:'<em>σκάφος</em>', ds:['<em>Ἀργοῦς</em>','<em>Συμπληγάδας</em>','The Nurse'], why:'<em>Ἀργοῦς</em> is genitive, the Argo’s hull; <em>σκάφος</em> flies through.'},
   {t:'τμηθεῖσα', q:'<em>τμηθεῖσα</em> is…', a:'An aorist passive participle: having been cut', ds:['An aorist active participle','A present infinitive','A future'], why:'The <em>-θ-</em> and the ending <em>-εῖσα</em> mark the aorist passive, feminine with <em>πεύκη</em>.'},
   {t:'οἳ', q:'<em>οἵ</em> refers to…', a:'<em>ἀνδρῶν ἀρίστων</em>, the best of men', ds:['<em>χέρας</em>','<em>Κόλχων</em>','<em>Συμπληγάδας</em>'], why:'Masculine plural: the heroes who went for the fleece.'}]},

'grc-ag': {lang:'grc', author:'Aeschylus', work:'Agamemnon', locus:'1–3', meter:'Iambic trimeter', ed:PSG_ED.grc + ' English: E. D. A. Morshead (1881), Project Gutenberg eBook 8604.',
  lat:'θεοὺς μὲν αἰτῶ τῶνδ᾽ ἀπαλλαγὴν πόνων\nφρουρᾶς ἐτείας μῆκος, ἣν κοιμώμενος\nστέγαις Ἀτρειδῶν ἄγκαθεν, κυνὸς δίκην,',
  eng:'I pray the gods to quit me of my toils,\nTo close the watch I keep, this livelong year;\nFor as a watchdog lying, not at rest,\nPropped on one arm, upon the palace roof\nOf Atreus’ race…\n— E. D. A. Morshead',
  ctx:'The watchman on the roof of the palace at Argos. <em>Αἰτῶ</em> takes two accusatives, and the relative clause runs on past the third line.',
  parts:[
   {t:'θεοὺς μὲν αἰτῶ τῶνδ᾽ ἀπαλλαγὴν πόνων', h:'Two accusatives', n:'<em>Αἰτῶ</em>, “I ask,” takes the person, <em>θεούς</em>, and the thing, <em>ἀπαλλαγήν</em>, “release,” in the accusative. <em>Τῶνδε … πόνων</em> is the genitive of separation: release from these toils.'},
   {t:'φρουρᾶς ἐτείας μῆκος', h:'An accusative in apposition', n:'<em>Μῆκος</em>, “the length,” restates <em>πόνων</em> in the accusative: the length of a year-long watch.'},
   {t:'ἣν κοιμώμενος', h:'A relative and a participle', n:'<em>Ἥν</em> takes up <em>φρουρᾶς</em>, the watch. <em>Κοιμώμενος</em>, “lying,” present middle participle of the speaker.'},
   {t:'στέγαις Ἀτρειδῶν ἄγκαθεν, κυνὸς δίκην', h:'A locative dative and an adverbial accusative', n:'<em>Στέγαις</em>, “on the roof,” a dative of place without a preposition. <em>Δίκην</em> with the genitive means “in the manner of”: like a dog.'}],
  qs:[
   {t:'θεοὺς', q:'<em>θεούς</em> and <em>ἀπαλλαγήν</em> are both accusative because…', a:'<em>αἰτῶ</em> takes the person and the thing in the accusative', ds:['One is the subject','They are in apposition','<em>μέν</em> requires it'], why:'Verbs of asking take a double accusative.'},
   {t:'πόνων', q:'<em>τῶνδε … πόνων</em> is…', a:'Genitive of separation: from these toils', ds:['Genitive of possession','Partitive genitive','Genitive of time'], why:'<em>Ἀπαλλαγή</em>, release, takes what one is released from in the genitive.'},
   {t:'κοιμώμενος', q:'<em>κοιμώμενος</em> is…', a:'A present middle participle: lying', ds:['An aorist passive','A future active','A perfect infinitive'], why:'<em>-όμενος</em>, contracted <em>-ώμενος</em>: present middle.'},
   {t:'δίκην', q:'<em>κυνὸς δίκην</em> means…', a:'Like a dog', ds:['The justice of a dog','A dog’s punishment','For a dog'], why:'The accusative <em>δίκην</em> with a genitive is used as an adverb: in the way of.'}]},

'grc-heraclitus': {lang:'grc', author:'Callimachus', work:'Epigrams', locus:'2.1–3', meter:'Elegiac couplet', ed:'Greek of Callimachus, ep. 2 (Pfeiffer) = Anth. Pal. 7.80, lines 1–3. English: William Cory, <i>Ionica</i> (1858), Project Gutenberg eBook 21766.',
  lat:'Εἶπέ τις, Ἡράκλειτε, τεὸν μόρον, ἐς δέ με δάκρυ\nἤγαγεν, ἐμνήσθην δ᾽ ὁσσάκις ἀμφότεροι\nἥλιον ἐν λέσχῃ κατεδύσαμεν.',
  eng:'They told me, Heraclitus, they told me you were dead,\nThey brought me bitter news to hear and bitter tears to shed.\nI wept, as I remembered, how often you and I\nHad tired the sun with talking and sent him down the sky.\n— William Cory',
  ctx:'Callimachus mourns his friend Heraclitus of Halicarnassus. The elegiac couplet joins a hexameter to a pentameter; Cory stretches three Greek lines into four long English ones.',
  parts:[
   {t:'Εἶπέ τις, Ἡράκλειτε, τεὸν μόρον', h:'Aorist and vocative', n:'<em>Εἶπέ τις</em>, “someone told,” aorist. <em>Ἡράκλειτε</em>, vocative. <em>Τεόν</em> is the epic and Ionic form of <em>σόν</em>, “your.”'},
   {t:'ἐς δέ με δάκρυ\nἤγαγεν', h:'A preposition with the goal', n:'<em>Ἐς … δάκρυ ἤγαγεν</em>: it brought me to tears. <em>Δάκρυ</em> is accusative after <em>ἐς</em>, and <em>με</em> the object.'},
   {t:'ἐμνήσθην δ᾽ ὁσσάκις ἀμφότεροι', h:'A passive form with active sense', n:'<em>Ἐμνήσθην</em>, aorist passive of <em>μιμνῄσκομαι</em>: I remembered. <em>Ὁσσάκις</em>, “how often,” epic double <em>σ</em>.'},
   {t:'ἥλιον ἐν λέσχῃ κατεδύσαμεν', h:'The image', n:'<em>Κατεδύσαμεν</em>, “we put to bed, we sank,” with <em>ἥλιον</em> as object: we talked the sun down.'}],
  qs:[
   {t:'τεὸν', q:'<em>τεόν</em> is…', a:'Epic and Ionic for <em>σόν</em>, your', ds:['A form of <em>θεός</em>','A verb','The article'], why:'Poets use the older form for the meter.'},
   {t:'με', q:'<em>με</em> is the object of…', a:'<em>ἤγαγεν</em>', ds:['<em>εἶπε</em>','<em>ἐμνήσθην</em>','<em>ἐς</em>'], why:'It brought me to tears.'},
   {t:'ἐμνήσθην', q:'<em>ἐμνήσθην</em> is…', a:'An aorist passive form with active meaning: I remembered', ds:['I was reminded by someone','A present','A future'], why:'<em>Μιμνῄσκομαι</em> uses the passive aorist for “I remembered.”'},
   {t:'κατεδύσαμεν', q:'The subject of <em>κατεδύσαμεν</em> is…', a:'“We two,” <em>ἀμφότεροι</em>', ds:['The sun','Someone','Heraclitus alone'], why:'First person plural: we sank the sun with talk.'}]},

'grc-aster': {lang:'grc', author:'Plato (ascribed)', work:'Epigram on Aster', locus:'Anth. Pal. 7.670', meter:'Elegiac couplet', ed:'Greek of Anth. Pal. 7.670, ascribed to Plato. English: Percy Bysshe Shelley, “To Stella,” in his <i>Posthumous Poems</i> (1824).',
  lat:'Ἀστὴρ πρὶν μὲν ἔλαμπες ἐνὶ ζωοῖσιν Ἑῷος·\nνῦν δὲ θανὼν λάμπεις Ἕσπερος ἐν φθιμένοις.',
  eng:'You were the morning star among the living,\nEre your fair light had fled;—\nNow, having died, you are as Hesperus, giving\nNew splendor to the dead.\n— Percy Bysshe Shelley',
  ctx:'A single elegiac couplet: the hexameter tells of the living, the pentameter of the dead. <em>Μέν</em> and <em>δέ</em> set the two lines against each other, and the name Aster means “star.”',
  parts:[
   {t:'Ἀστὴρ πρὶν μὲν ἔλαμπες ἐνὶ ζωοῖσιν Ἑῷος', h:'The hexameter', n:'<em>Ἔλαμπες</em>, imperfect: you used to shine. <em>Ἐνί</em> is epic for <em>ἐν</em>, and <em>ζωοῖσιν</em> an epic dative plural. <em>Ἑῷος</em>, “of the dawn,” the morning star.'},
   {t:'νῦν δὲ θανὼν λάμπεις Ἕσπερος ἐν φθιμένοις', h:'The pentameter', n:'<em>Θανών</em>, aorist participle: having died. <em>Λάμπεις</em>, present. <em>Ἕσπερος</em>, the evening star. <em>Ἐν φθιμένοις</em>, among the dead.'}],
  qs:[
   {t:'μὲν', q:'The two lines are set against each other by…', a:'<em>μέν … δέ</em>', ds:['<em>πρίν … νῦν</em> only','<em>ἐνί … ἐν</em>','Nothing'], why:'<em>Μέν</em> in the first line and <em>δέ</em> in the second balance before and now.'},
   {t:'ἔλαμπες', q:'<em>ἔλαμπες</em> is…', a:'Imperfect: you used to shine', ds:['Aorist: you shone once','Present','Future'], why:'The augment <em>ἐ-</em> and the present stem <em>λαμπ-</em> make the imperfect.'},
   {t:'ζωοῖσιν', q:'<em>ζωοῖσιν</em> is…', a:'An epic dative plural: among the living', ds:['An accusative','A verb','A genitive singular'], why:'Epic <em>-οισι(ν)</em> for Attic <em>-οις</em>.'},
   {t:'θανὼν', q:'<em>θανών</em> is…', a:'An aorist participle: having died', ds:['A present participle','A future','An infinitive'], why:'From the aorist <em>ἔθανον</em> of <em>θνῄσκω</em>.'}]}
});


/* ===== fr ===== */
/* French prose and poetry. French as printed by Project Gutenberg and Wikisource (spelling of the editions, with
   modern accents), read 2026-10-15. English as printed by Project Gutenberg, named in each passage, lightly modernized
   (spelling, the old pronouns and verb forms, punctuation). */
Object.assign(PASSAGES, {
'fr-desc1': {lang:'fr', author:'Descartes', work:'Discours de la méthode', locus:'I', ed:'Descartes, <i>Discours de la méthode</i> (1637), part I. English: John Veitch (1850), Project Gutenberg eBook 59.',
  lat:'Le bon sens est la chose du monde la mieux partagée ; car chacun pense en être si bien pourvu, que ceux même qui sont les plus difficiles à contenter en toute autre chose n’ont point coutume d’en désirer plus qu’ils en ont.',
  eng:'Good sense is, of all things among men, the most equally distributed; for everyone thinks himself so abundantly provided with it that those even who are the most difficult to satisfy in everything else do not usually desire a larger measure of this quality than they already possess.\n— John Veitch',
  ctx:'Descartes opens his <em>Discourse on Method</em>, written in French rather than Latin so that it could be read by all, with a sentence on good sense, the power of judging well, which he says is equal in all men.',
  parts:[
   {t:'Le bon sens est la chose du monde la mieux partagée', h:'The main clause and a superlative', n:'<em>Le bon sens</em> is the subject of <em>est</em>. <em>La mieux partagée</em>, “the best shared,” is the superlative of the participle <em>partagée</em>, made with the article and <em>mieux</em>, and it agrees with <em>la chose</em>, which is feminine.'},
   {t:'car chacun pense en être si bien pourvu', h:'The pronoun en', n:'<em>Car</em>, “for,” gives the reason. <em>Pense</em> takes the infinitive <em>être</em> directly, since the subject is the same: each thinks himself to be provided. <em>En</em> stands for <em>de bon sens</em>: provided with it.'},
   {t:'que ceux même qui sont les plus difficiles à contenter en toute autre chose', h:'A clause of result', n:'<em>Si bien … que</em>, “so well … that,” brings in the result. <em>Ceux</em>, “those,” is taken up by the relative <em>qui</em>, and <em>à contenter</em>, “to satisfy,” completes <em>difficiles</em>.'},
   {t:'n’ont point coutume d’en désirer plus qu’ils en ont', h:'The negative and the comparison', n:'<em>Ne … point</em> is an older and stronger form of <em>ne … pas</em>. <em>Avoir coutume de</em>, “to be accustomed to,” takes the infinitive with <em>de</em>, and <em>plus qu’ils en ont</em> compares: more than they have.'}],
  qs:[
   {t:'la mieux partagée', q:'<em>la mieux partagée</em> is…', a:'A superlative: the best shared', ds:['A comparative: better shared','A passive verb: is shared','An adverb modifying <em>est</em>'], why:'The article with <em>mieux</em> makes the superlative, and the participle agrees with <em>la chose</em>.'},
   {t:'en être', q:'<em>en</em> in <em>en être si bien pourvu</em> stands for…', a:'<em>de bon sens</em>: provided with good sense', ds:['<em>chacun</em>, the subject','A place: from there','The whole world, <em>du monde</em>'], why:'<em>Pourvu de</em> means “provided with,” and <em>en</em> takes the place of a phrase with <em>de</em>: here, good sense.'},
   {t:'que ceux même', q:'The clause beginning <em>que ceux même</em> gives…', a:'The result of <em>si bien</em>', ds:['A comparison with <em>la mieux</em>','The object of <em>pense</em>','A relative clause describing <em>chacun</em>'], why:'<em>Si</em> with an adverb or adjective, followed by <em>que</em>, gives a result: so well provided that even the hardest to please want no more.'},
   {t:'n’ont point', q:'<em>ne … point</em> is…', a:'A negative, an older and stronger form of <em>ne … pas</em>', ds:['A negative meaning “not yet”','A negative meaning “no longer”','An affirmative with emphasis'], why:'In the classical language <em>point</em> often stands where <em>pas</em> would stand now, with the same sense.'}]},

'fr-desc4': {lang:'fr', author:'Descartes', work:'Discours de la méthode', locus:'IV', ed:'Descartes, <i>Discours de la méthode</i> (1637), part IV. English: John Veitch (1850), Project Gutenberg eBook 59.',
  lat:'Mais aussitôt après je pris garde que, pendant que je voulais ainsi penser que tout était faux, il fallait nécessairement que moi qui le pensais fusse quelque chose. Et remarquant que cette vérité, je pense, donc je suis, était si ferme et si assurée que toutes les plus extravagantes suppositions des sceptiques n’étaient pas capables de l’ébranler, je jugeai que je pouvais la recevoir sans scrupule pour le premier principe de la philosophie que je cherchais.',
  eng:'But immediately upon this I observed that, while I thus wished to think that all was false, it was absolutely necessary that I, who thus thought, should be something; and as I observed that this truth, I think, therefore I am, was so certain and of such evidence that no ground of doubt, however extravagant, could be alleged by the skeptics capable of shaking it, I concluded that I might, without scruple, accept it as the first principle of the philosophy of which I was in search.\n— John Veitch',
  ctx:'Having resolved to doubt everything that could be doubted, Descartes finds one thing that resists the doubt. The sentence moves from the passé simple of the narrative to the imperfect of what was going on, and to the imperfect subjunctive after <em>il fallait que</em>.',
  parts:[
   {t:'Mais aussitôt après je pris garde que', h:'The passé simple', n:'<em>Je pris garde</em>, “I took notice,” is the passé simple of <em>prendre</em>, the tense of a single past event in written narrative. It takes a clause with <em>que</em> as its object.'},
   {t:'pendant que je voulais ainsi penser que tout était faux', h:'The imperfect', n:'<em>Voulais</em> and <em>était</em> are imperfects: they describe what was going on while the event happened.'},
   {t:'il fallait nécessairement que moi qui le pensais fusse quelque chose', h:'The imperfect subjunctive', n:'<em>Il fallait que</em>, “it was necessary that,” requires the subjunctive, and after a past main verb the classical language uses the imperfect subjunctive: <em>fusse</em>, from <em>être</em>. <em>Moi</em> is the stressed pronoun, set first and taken up by <em>qui</em>.'},
   {t:'je pense, donc je suis', h:'The truth itself', n:'The truth is set in apposition to <em>cette vérité</em>: <em>je pense, donc je suis</em>, “I think, therefore I am.” <em>Donc</em> draws the conclusion.'},
   {t:'si ferme et si assurée que', h:'Result again', n:'<em>Si … que</em> gives the result: so firm and so sure that the skeptics could not shake it. <em>Assurée</em> is feminine, agreeing with <em>vérité</em>.'},
   {t:'je jugeai que je pouvais la recevoir sans scrupule', h:'The main verb', n:'<em>Je jugeai</em>, passé simple, is the main verb of the second sentence. <em>La</em> stands for <em>cette vérité</em>.'}],
  qs:[
   {t:'je pris garde', q:'<em>je pris garde</em> is in…', a:'The passé simple, for a single past event', ds:['The imperfect, for what was going on','The present, for what is always true','The passé composé of speech'], why:'<em>Pris</em> is the passé simple of <em>prendre</em>, the tense of narrative events in written French.'},
   {t:'fusse', q:'Why is <em>fusse</em> subjunctive?', a:'<em>Il fallait que</em> requires the subjunctive, and the main verb is past', ds:['It is a condition contrary to fact','It follows <em>pendant que</em>','Every verb after <em>que</em> is subjunctive'], why:'Expressions of necessity take the subjunctive, and after a past main verb the classical sequence uses the imperfect subjunctive.'},
   {t:'donc', q:'<em>donc</em> in <em>je pense, donc je suis</em>…', a:'Draws a conclusion: therefore', ds:['Gives a cause: because','Marks time: then, afterward','Gives a condition: if'], why:'<em>Donc</em> brings in what follows from what was just said.'},
   {t:'la recevoir', q:'<em>la</em> in <em>la recevoir</em> stands for…', a:'<em>cette vérité</em>', ds:['<em>la philosophie</em>','<em>toute chose</em>','The skeptics’ supposition'], why:'<em>La</em> is a feminine object pronoun, and the thing received as the first principle is the truth just stated.'}]},

'fr-pascal347': {lang:'fr', author:'Pascal', work:'Pensées', locus:'347', ed:'Pascal, <i>Pensées</i>, no. 347 in Brunschvicg’s numbering. English: W. F. Trotter (1910), Project Gutenberg eBook 18269.',
  lat:'L’homme n’est qu’un roseau, le plus faible de la nature ; mais c’est un roseau pensant. Il ne faut pas que l’univers entier s’arme pour l’écraser : une vapeur, une goutte d’eau suffit pour le tuer.',
  eng:'Man is but a reed, the most feeble thing in nature; but he is a thinking reed. The entire universe need not arm itself to crush him. A vapor, a drop of water suffices to kill him.\n— W. F. Trotter',
  ctx:'Pascal left his thoughts in fragments, to be made into a defense of the Christian religion. This one sets the weakness of man beside the dignity that thought gives him.',
  parts:[
   {t:'L’homme n’est qu’un roseau', h:'Ne … que', n:'<em>Ne … que</em> means “only”: man is only a reed. It limits, and it is not a plain negative.'},
   {t:'le plus faible de la nature', h:'Apposition', n:'<em>Le plus faible</em>, the superlative, stands in apposition to <em>un roseau</em>, and <em>de la nature</em> gives the group in which it is the weakest.'},
   {t:'mais c’est un roseau pensant', h:'The present participle as adjective', n:'<em>Pensant</em>, “thinking,” is a present participle used as an adjective, and it follows its noun. <em>C’est</em> points back to man.'},
   {t:'Il ne faut pas que l’univers entier s’arme pour l’écraser', h:'Il faut que with the subjunctive', n:'<em>Il ne faut pas que</em>, “it is not necessary that,” takes the subjunctive: <em>s’arme</em>. <em>Pour</em> with the infinitive gives the purpose, and <em>l’</em> stands for man.'},
   {t:'une vapeur, une goutte d’eau suffit pour le tuer', h:'Two subjects, one verb', n:'The verb <em>suffit</em> is singular, though it has two subjects, because the second takes the place of the first: a vapor, or even a drop of water.'}],
  qs:[
   {t:'n’est qu’', q:'<em>n’est qu’un roseau</em> means…', a:'Is only a reed', ds:['Is not a reed','Is no longer a reed','Is not even a reed'], why:'<em>Ne … que</em> limits: it means “only,” not “not.”'},
   {t:'pensant', q:'<em>pensant</em> is…', a:'A present participle used as an adjective', ds:['A finite verb in the present','A noun meaning “thinker”','An infinitive'], why:'The participle in <em>-ant</em> describes the reed: a thinking reed.'},
   {t:'s’arme', q:'<em>s’arme</em> is subjunctive because…', a:'<em>Il ne faut pas que</em> requires the subjunctive', ds:['It is in a clause of purpose with <em>pour</em>','It is reflexive','It is in a question'], why:'Expressions of necessity take the subjunctive, negative or not.'},
   {t:'suffit', q:'<em>suffit</em> is singular because…', a:'The two subjects name one thing, the second taking the place of the first', ds:['Only <em>une vapeur</em> is its subject','French verbs do not agree in number','<em>Une goutte d’eau</em> is its object'], why:'When subjects follow one another as a gradation, each correcting the last, the verb agrees with the nearest.'}]},

'fr-montaigne': {lang:'fr', author:'Montaigne', work:'Essais', locus:'Au lecteur', ed:'Montaigne, <i>Essais</i> (1580), “Au lecteur.” English: Charles Cotton (1685–86), as revised by W. C. Hazlitt, Project Gutenberg eBook 3600.',
  lat:'C’est ici un livre de bonne foi, lecteur. Il t’avertit dès l’entrée que je ne m’y suis proposé aucune fin que domestique et privée. Je n’y ai eu nulle considération de ton service ni de ma gloire.',
  eng:'Reader, you have here an honest book; it does at the outset forewarn you that, in contriving the same, I have proposed to myself no other than a domestic and private end. I have had no consideration at all either to your service or to my glory.\n— Charles Cotton',
  ctx:'Montaigne prefaces his <em>Essays</em> with a short note to the reader. He addresses him as <em>tu</em>, as one man speaks to another, and says the book is written for his family and friends.',
  parts:[
   {t:'C’est ici un livre de bonne foi, lecteur', h:'C’est and the address', n:'<em>C’est ici</em>, “this here is,” presents the book. <em>Lecteur</em>, without an article, is the person addressed.'},
   {t:'Il t’avertit dès l’entrée', h:'The familiar pronoun', n:'<em>Il</em> is the book. <em>T’</em>, for <em>te</em>, is the familiar object pronoun: Montaigne speaks to the reader as <em>tu</em>.'},
   {t:'que je ne m’y suis proposé aucune fin que domestique et privée', h:'A reflexive verb in the passé composé', n:'<em>Je me suis proposé</em>, “I set before myself,” is reflexive and so takes <em>être</em>. <em>Y</em> stands for the book: in it. <em>Ne … aucune fin que</em> means “no end but.”'},
   {t:'Je n’y ai eu nulle considération de ton service ni de ma gloire', h:'Nul and ni', n:'<em>Ne … nulle</em>, “no … at all,” is a strong negative, and <em>ni</em> continues it: neither your service nor my glory.'}],
  qs:[
   {t:'lecteur', q:'<em>lecteur</em> here is…', a:'The person addressed: reader', ds:['The subject of <em>est</em>','The object of <em>avertit</em>','In apposition to <em>livre</em>'], why:'A noun set off without an article, naming the one spoken to, is an address.'},
   {t:'t’avertit', q:'<em>t’</em> in <em>t’avertit</em> is…', a:'The familiar object pronoun, “you”', ds:['A reflexive: himself','The article <em>la</em>','The subject “you”'], why:'<em>Te</em>, shortened before a vowel, is the object pronoun of <em>tu</em>.'},
   {t:'m’y suis proposé', q:'Why does <em>proposé</em> take <em>suis</em>, not <em>ai</em>?', a:'The verb is reflexive, and reflexive verbs take <em>être</em>', ds:['<em>Proposer</em> is a verb of motion','The subject is feminine','It is a passive'], why:'Every reflexive verb forms its compound tenses with <em>être</em>.'},
   {t:'nulle', q:'<em>ne … nulle considération</em> means…', a:'No consideration at all', ds:['Only a little consideration','Every consideration','A consideration that counts for nothing'], why:'<em>Nul</em> with <em>ne</em> is a strong negative: none whatever.'}]},

'fr-rousseau': {lang:'fr', author:'Rousseau', work:'Du contrat social', locus:'I.1', ed:'Rousseau, <i>Du contrat social</i> (1762), I.1. English: G. D. H. Cole (1913), Project Gutenberg eBook 46333.',
  lat:'L’homme est né libre, et partout il est dans les fers. Tel se croit le maître des autres, qui ne laisse pas d’être plus esclave qu’eux.',
  eng:'Man is born free; and everywhere he is in chains. One thinks himself the master of others, and still remains a greater slave than they.\n— G. D. H. Cole',
  ctx:'Rousseau opens the first book of the <em>Social Contract</em> with a contrast between what man is by birth and what he is in society.',
  parts:[
   {t:'L’homme est né libre', h:'Naître with être', n:'<em>Est né</em> is the passé composé of <em>naître</em>, a verb that takes <em>être</em>. <em>Libre</em> is predicate: born free.'},
   {t:'et partout il est dans les fers', h:'The contrast', n:'<em>Partout</em>, “everywhere,” stands first for emphasis. <em>Dans les fers</em> is a fixed phrase: in chains.'},
   {t:'Tel se croit le maître des autres', h:'Tel as a pronoun', n:'<em>Tel</em>, used alone, means “such a one,” “a certain man.” <em>Se croit</em>, “believes himself,” takes <em>le maître</em> as predicate.'},
   {t:'qui ne laisse pas d’être plus esclave qu’eux', h:'Ne pas laisser de', n:'The relative <em>qui</em> takes up <em>tel</em>, though it stands after the verb. <em>Ne pas laisser de</em> means “not to fail to,” that is, “still”: he is still more a slave than they.'}],
  qs:[
   {t:'est né', q:'<em>est né</em> is…', a:'The passé composé of <em>naître</em>, formed with <em>être</em>', ds:['A present passive: is borne','An adjective with <em>est</em>','An imperfect'], why:'<em>Naître</em> is one of the verbs that form the compound past with <em>être</em>.'},
   {t:'Tel', q:'<em>Tel</em> here means…', a:'A certain man, such a one', ds:['Such, agreeing with <em>maître</em>','As, introducing a comparison','So, an adverb'], why:'<em>Tel</em> used alone as subject is a pronoun: a certain person.'},
   {t:'ne laisse pas d’être', q:'<em>ne laisse pas d’être</em> means…', a:'Is nonetheless, still is', ds:['Does not let himself be','Stops being','Leaves off being'], why:'<em>Ne pas laisser de</em> with an infinitive means “not to fail to”: he still is.'},
   {t:'qu’eux', q:'<em>eux</em> in <em>plus esclave qu’eux</em> is…', a:'The stressed pronoun, standing for <em>les autres</em>', ds:['The subject pronoun <em>ils</em> shortened','An object of <em>laisse</em>','A reflexive'], why:'After <em>que</em> in a comparison French uses the stressed pronoun: <em>eux</em>.'}]},

'fr-tocq': {lang:'fr', author:'Tocqueville', work:'De la démocratie en Amérique', locus:'Introduction', ed:'Tocqueville, <i>De la démocratie en Amérique</i> I (1835), Introduction. English: Henry Reeve (1835), Project Gutenberg eBook 815.',
  lat:'Parmi les objets nouveaux qui, pendant mon séjour aux États-Unis, ont attiré mon attention, aucun n’a plus vivement frappé mes regards que l’égalité des conditions.',
  eng:'Among the novel objects that attracted my attention during my stay in the United States, nothing struck me more forcibly than the general equality of conditions.\n— Henry Reeve',
  ctx:'Tocqueville traveled in the United States in 1831 and 1832. His book begins with the one fact that struck him most.',
  parts:[
   {t:'Parmi les objets nouveaux', h:'The adjective after its noun', n:'<em>Nouveaux</em> follows <em>objets</em>: placed after the noun it means “new to me, novel.” <em>Parmi</em> takes the plural: among.'},
   {t:'qui, pendant mon séjour aux États-Unis, ont attiré mon attention', h:'A relative clause', n:'<em>Qui</em> is the subject of <em>ont attiré</em>, and the verb is plural because its antecedent, <em>objets</em>, is plural. <em>Aux</em> is <em>à les</em>: the name of the country is plural.'},
   {t:'aucun n’a plus vivement frappé mes regards', h:'Aucun as subject', n:'<em>Aucun</em>, “none,” is the subject of the main clause, with <em>ne</em>. The verb is singular.'},
   {t:'que l’égalité des conditions', h:'The comparison', n:'<em>Plus … que</em> compares: nothing more than equality. <em>Des conditions</em> is <em>de les</em>: of conditions, that is, of social rank.'}],
  qs:[
   {t:'aux', q:'<em>aux</em> is…', a:'<em>à</em> with the plural article <em>les</em>', ds:['<em>à</em> with <em>le</em>','A form of <em>avoir</em>','<em>de</em> with <em>les</em>'], why:'<em>À les</em> always contracts to <em>aux</em>.'},
   {t:'ont attiré', q:'<em>ont attiré</em> is plural because…', a:'Its subject <em>qui</em> stands for <em>les objets</em>', ds:['<em>États-Unis</em> is plural','<em>Mon attention</em> is its subject','Every passé composé is plural'], why:'A relative pronoun takes the number of its antecedent, and the verb agrees with it.'},
   {t:'aucun', q:'<em>aucun</em> is…', a:'The subject: none of them', ds:['An adjective with <em>regards</em>','The object of <em>frappé</em>','An adverb: never'], why:'<em>Aucun</em> with <em>ne</em> is the subject: none has struck me more.'},
   {t:'que l’égalité', q:'<em>que</em> in <em>que l’égalité des conditions</em>…', a:'Completes the comparison with <em>plus</em>', ds:['Begins a relative clause','Begins a clause of result','Is a relative object pronoun'], why:'<em>Plus vivement … que</em>: more strongly than.'}]},

'fr-flaubert': {lang:'fr', author:'Flaubert', work:'Madame Bovary', locus:'I.1', ed:'Flaubert, <i>Madame Bovary</i> (1857), I.1. English: Eleanor Marx-Aveling (1886), Project Gutenberg eBook 2413.',
  lat:'Nous étions à l’Étude, quand le Proviseur entra, suivi d’un nouveau habillé en bourgeois et d’un garçon de classe qui portait un grand pupitre.',
  eng:'We were in class when the headmaster came in, followed by a “new fellow,” not wearing the school uniform, and a school servant carrying a large desk.\n— Eleanor Marx-Aveling',
  ctx:'Flaubert’s novel begins in a schoolroom, with Charles Bovary’s first day. The opening sets a scene in the imperfect and breaks in on it with the passé simple.',
  parts:[
   {t:'Nous étions à l’Étude', h:'The imperfect: the scene', n:'<em>Étions</em> is the imperfect of <em>être</em>, describing the state of things when something happened.'},
   {t:'quand le Proviseur entra', h:'The passé simple: the event', n:'<em>Entra</em>, passé simple, is the event that breaks in on the scene.'},
   {t:'suivi d’un nouveau habillé en bourgeois', h:'The past participle and the agent', n:'<em>Suivi</em>, “followed,” agrees with <em>le Proviseur</em>, and <em>de</em> gives the agent. <em>Un nouveau</em>, “a new one,” is an adjective used as a noun, and <em>habillé en bourgeois</em> means “dressed in ordinary clothes.”'},
   {t:'et d’un garçon de classe qui portait un grand pupitre', h:'A second agent and a relative clause', n:'<em>Et d’un garçon</em> is a second agent of <em>suivi</em>. <em>Qui portait</em>, imperfect, describes him.'}],
  qs:[
   {t:'étions', q:'<em>étions</em> is in the imperfect because…', a:'It describes the scene that was going on', ds:['It is a single completed event','It is a condition','It is a polite form'], why:'The imperfect sets the background; the passé simple gives the event.'},
   {t:'entra', q:'<em>entra</em> is…', a:'The passé simple of <em>entrer</em>', ds:['The imperfect of <em>entrer</em>','The future of <em>entrer</em>','A past participle'], why:'The ending <em>-a</em> in the third person singular marks the passé simple of the first conjugation.'},
   {t:'suivi', q:'<em>suivi</em> agrees with…', a:'<em>le Proviseur</em>, who was followed', ds:['<em>un nouveau</em>','<em>nous</em>','<em>un grand pupitre</em>'], why:'The participle describes the headmaster, and <em>de</em> brings in those who followed him.'},
   {t:'un nouveau', q:'<em>un nouveau</em> is…', a:'An adjective used as a noun: a new boy', ds:['An adjective agreeing with <em>bourgeois</em>','An adverb: anew','The object of <em>habillé</em>'], why:'With the article and no noun, the adjective names a person: a newcomer.'}]},

'fr-hugo': {lang:'fr', author:'Hugo', work:'Les Misérables', locus:'I.1.1', ed:'Hugo, <i>Les Misérables</i> (1862), I.1.1. English: Isabel F. Hapgood (1887), Project Gutenberg eBook 135.',
  lat:'En 1815, M. Charles-François-Bienvenu Myriel était évêque de Digne. C’était un vieillard d’environ soixante-quinze ans ; il occupait le siège de Digne depuis 1806.',
  eng:'In 1815, M. Charles-François-Bienvenu Myriel was Bishop of D——. He was an old man of about seventy-five years of age; he had occupied the see of D—— since 1806.\n— Isabel F. Hapgood',
  ctx:'Hugo’s novel begins not with its hero, Jean Valjean, but with the bishop whose mercy will change him. The translator hides the name of the town, as some editions did.',
  parts:[
   {t:'était évêque de Digne', h:'A noun of office without the article', n:'<em>Évêque</em> stands without an article: after <em>être</em>, a noun of rank or profession is used like an adjective.'},
   {t:'C’était un vieillard d’environ soixante-quinze ans', h:'C’était with a noun', n:'With a noun that has an article, French uses <em>c’était</em>, not <em>il était</em>. <em>D’environ</em>, “of about,” gives his age.'},
   {t:'il occupait le siège de Digne depuis 1806', h:'Depuis with the imperfect', n:'<em>Depuis</em>, “since,” with the imperfect says what had been going on up to that time and was still going on. English uses the pluperfect: he had occupied.'}],
  qs:[
   {t:'était évêque', q:'Why is there no article before <em>évêque</em>?', a:'After <em>être</em>, a noun of office is used without one', ds:['There was only one bishop','<em>Évêque</em> is an adjective','The article is elided'], why:'<em>Il est médecin</em>, <em>il était évêque</em>: the noun of rank or profession is treated as a predicate adjective.'},
   {t:'C’était', q:'Why <em>c’était</em> and not <em>il était</em>?', a:'A noun with an article follows', ds:['The subject is feminine','<em>Ce</em> is required in the imperfect','It is a question'], why:'Before a noun with its article or another determiner, French says <em>c’est</em>, <em>c’était</em>.'},
   {t:'occupait', q:'<em>occupait … depuis 1806</em> is best rendered…', a:'Had occupied since 1806', ds:['Occupied in 1806','Was going to occupy from 1806','Occupied until 1806'], why:'<em>Depuis</em> with the imperfect gives an action begun earlier and still going on at the past moment; English uses the pluperfect.'}]},

'fr-ddhc': {lang:'fr', author:'Declaration of the Rights of Man and of the Citizen', work:'', locus:'article 1 (1789)', ed:'<i>Déclaration des droits de l’homme et du citoyen</i> (1789), article 1. English: Thomas Paine, <i>Rights of Man</i> (1791), Project Gutenberg eBook 3742.',
  lat:'Les hommes naissent et demeurent libres et égaux en droits. Les distinctions sociales ne peuvent être fondées que sur l’utilité commune.',
  eng:'Men are born, and always continue, free and equal in respect of their rights. Civil distinctions, therefore, can be founded only on public utility.\n— Thomas Paine',
  ctx:'The National Assembly adopted the Declaration in August 1789. Paine translated it in his <em>Rights of Man</em>, a reply to Burke.',
  parts:[
   {t:'Les hommes naissent et demeurent libres et égaux en droits', h:'Two verbs and two predicates', n:'<em>Naissent</em> and <em>demeurent</em> share the subject and the predicates <em>libres et égaux</em>, which agree with <em>les hommes</em>, masculine plural.'},
   {t:'Les distinctions sociales ne peuvent être fondées', h:'The passive infinitive', n:'<em>Être fondées</em> is a passive infinitive after <em>peuvent</em>, and <em>fondées</em> agrees with <em>les distinctions</em>, feminine plural.'},
   {t:'que sur l’utilité commune', h:'Ne … que', n:'<em>Ne … que</em> means “only”: they can be founded only on the common good.'}],
  qs:[
   {t:'égaux', q:'<em>égaux</em> agrees with…', a:'<em>les hommes</em>, masculine plural', ds:['<em>droits</em>','<em>libres</em>','Nothing: it is an adverb'], why:'<em>Égal</em> has the plural <em>égaux</em>, like other adjectives in <em>-al</em>, and it describes men.'},
   {t:'ne peuvent', q:'<em>ne peuvent … que</em> means…', a:'Can only', ds:['Cannot','Can no longer','Can never'], why:'<em>Ne … que</em> limits: only on the common good.'},
   {t:'fondées', q:'<em>fondées</em> ends in <em>-ées</em> because…', a:'It agrees with <em>les distinctions</em>, feminine plural', ds:['It agrees with <em>sociales</em>','It is a verb in the past','It agrees with <em>l’utilité</em>'], why:'In the passive the participle agrees with the subject.'}]},

'fr-moliere': {lang:'fr', author:'Molière', work:'Le Bourgeois gentilhomme', locus:'II.4', ed:'Molière, <i>Le Bourgeois gentilhomme</i> (1670), II.4. English: Philip Dwight Jones (1905), Project Gutenberg eBook 2992.',
  lat:'Par ma foi ! il y a plus de quarante ans que je dis de la prose sans que j’en susse rien, et je vous suis le plus obligé du monde de m’avoir appris cela.',
  eng:'By my faith! For more than forty years I have been speaking prose without knowing anything about it, and I am much obliged to you for having taught me that.\n— Philip Dwight Jones',
  ctx:'Monsieur Jourdain, a rich tradesman who wants to be a gentleman, takes lessons from a philosophy master. Told that all that is not verse is prose, he discovers what he has always been doing.',
  parts:[
   {t:'il y a plus de quarante ans que je dis de la prose', h:'Il y a … que with the present', n:'<em>Il y a … que</em> with the present tense says how long something has been going on: for forty years I have been speaking. <em>De la prose</em> is the partitive.'},
   {t:'sans que j’en susse rien', h:'Sans que with the subjunctive', n:'<em>Sans que</em> always takes the subjunctive. <em>Susse</em> is the imperfect subjunctive of <em>savoir</em>, and <em>en</em> stands for the fact.'},
   {t:'je vous suis le plus obligé du monde', h:'The superlative with du monde', n:'<em>Le plus obligé du monde</em>, “the most obliged in the world,” is a strong thanks. <em>Vous</em> is the indirect object: obliged to you.'},
   {t:'de m’avoir appris cela', h:'The past infinitive', n:'<em>Avoir appris</em> is the past infinitive: for having taught. <em>M’</em> is the indirect object of <em>apprendre</em>: taught to me.'}],
  qs:[
   {t:'il y a plus de quarante ans que je dis', q:'<em>il y a … que je dis</em> means…', a:'I have been saying for more than forty years', ds:['I said forty years ago','I will say for forty years','I was saying until forty years ago'], why:'<em>Il y a … que</em> with the present gives an action still going on: English uses “have been.”'},
   {t:'susse', q:'<em>susse</em> is subjunctive because…', a:'<em>Sans que</em> requires the subjunctive', ds:['It is a condition','It follows a superlative','It is a wish'], why:'<em>Sans que</em> always takes the subjunctive; here the imperfect subjunctive of <em>savoir</em>.'},
   {t:'avoir appris', q:'<em>avoir appris</em> is…', a:'The past infinitive: having taught', ds:['The passé composé: I taught','A present infinitive','A past participle used alone'], why:'<em>Avoir</em> with the past participle, as an infinitive, puts the action before the main verb.'}]},

'fr-pascal277': {lang:'fr', author:'Pascal', work:'Pensées', locus:'277', ed:'Pascal, <i>Pensées</i>, no. 277 in Brunschvicg’s numbering. English: W. F. Trotter (1910), Project Gutenberg eBook 18269.',
  lat:'Le cœur a ses raisons, que la raison ne connaît point. On le sent en mille choses.',
  eng:'The heart has its reasons, which reason does not know. We feel it in a thousand things.\n— W. F. Trotter',
  ctx:'In this thought Pascal plays on the word <em>raison</em>: the heart has reasons of its own, which the reasoning mind does not know.',
  parts:[
   {t:'Le cœur a ses raisons', h:'The possessive', n:'<em>Ses</em> agrees with <em>raisons</em>, feminine plural, not with the possessor.'},
   {t:'que la raison ne connaît point', h:'The relative que', n:'<em>Que</em> is the object of <em>connaît</em>, and it stands for <em>raisons</em>. <em>Ne … point</em> is a strong negative.'},
   {t:'On le sent en mille choses', h:'On and the neuter le', n:'<em>On</em>, “one, we,” is the general subject. <em>Le</em> stands for the whole preceding statement.'}],
  qs:[
   {t:'ses', q:'<em>ses</em> agrees with…', a:'<em>raisons</em>, the thing possessed', ds:['<em>cœur</em>, the possessor','<em>la raison</em>','Nothing: it is invariable'], why:'French possessives agree with the noun they go with.'},
   {t:'que', q:'<em>que</em> is…', a:'A relative pronoun, object of <em>connaît</em>', ds:['A conjunction: that','The subject of <em>connaît</em>','A comparison: than'], why:'<em>La raison</em> is the subject; <em>que</em>, standing for the heart’s reasons, is the object.'},
   {t:'On', q:'<em>On</em> is…', a:'A pronoun for people in general: one, we', ds:['The heart','Reason','A preposition'], why:'<em>On</em> is the indefinite subject, rendered by “we” in the translation.'},
   {t:'le sent', q:'<em>le</em> in <em>On le sent</em> stands for…', a:'The whole statement just made', ds:['<em>le cœur</em>','<em>la raison</em>','A thousand things'], why:'<em>Le</em> can stand for a whole idea: we feel that it is so.'}]},

'fr-pascal206': {lang:'fr', author:'Pascal', work:'Pensées', locus:'206', ed:'Pascal, <i>Pensées</i>, no. 206 in Brunschvicg’s numbering. English: W. F. Trotter (1910), Project Gutenberg eBook 18269.',
  lat:'Le silence éternel de ces espaces infinis m’effraie.',
  eng:'The eternal silence of these infinite spaces frightens me.\n— W. F. Trotter',
  ctx:'One of the shortest of the thoughts. The new astronomy had opened spaces without end, and Pascal sets the man who sees them against their silence.',
  parts:[
   {t:'Le silence éternel', h:'The subject', n:'<em>Le silence</em> is the subject, and <em>éternel</em> follows it.'},
   {t:'de ces espaces infinis', h:'The demonstrative and the plural', n:'<em>Ces</em>, “these,” points to the spaces. <em>Infinis</em> agrees with <em>espaces</em>, masculine plural.'},
   {t:'m’effraie', h:'The object pronoun', n:'<em>M’</em> is the object pronoun, placed before the verb. <em>Effraie</em> is singular: its subject is <em>le silence</em>, not the spaces.'}],
  qs:[
   {t:'Le silence', q:'What is the subject of <em>effraie</em>?', a:'<em>Le silence</em>', ds:['<em>ces espaces</em>','<em>m’</em>','<em>éternel</em>'], why:'<em>De ces espaces infinis</em> depends on <em>silence</em>; the verb is singular, agreeing with it.'},
   {t:'ces', q:'<em>ces</em> is…', a:'A demonstrative adjective: these', ds:['A possessive: his','An article: the','A pronoun: those ones'], why:'<em>Ces</em> is the plural of <em>ce</em>, <em>cet</em>, <em>cette</em>.'},
   {t:'infinis', q:'<em>infinis</em> agrees with…', a:'<em>espaces</em>', ds:['<em>silence</em>','<em>éternel</em>','<em>me</em>'], why:'It is masculine plural, like <em>espaces</em>.'},
   {t:'m’', q:'<em>m’</em> is…', a:'The object of <em>effraie</em>: me', ds:['The subject: I','A reflexive: myself','A possessive: my'], why:'<em>Me</em>, shortened before a vowel, is the direct object: it frightens me.'}]},

'fr-roch218': {lang:'fr', author:'La Rochefoucauld', work:'Maximes', locus:'218', ed:'La Rochefoucauld, <i>Réflexions ou sentences et maximes morales</i>, no. 218. English: J. W. Willis Bund and J. Hain Friswell (1871), Project Gutenberg eBook 9105.',
  lat:'L’hypocrisie est un hommage que le vice rend à la vertu.',
  eng:'Hypocrisy is the homage vice pays to virtue.\n— J. W. Willis Bund and J. Hain Friswell',
  ctx:'La Rochefoucauld’s maxims are single sentences on self-love and the virtues. This one turns hypocrisy into a kind of tribute.',
  parts:[
   {t:'L’hypocrisie est un hommage', h:'The article before a mute h', n:'<em>L’</em> is the article elided before the mute <em>h</em> of <em>hypocrisie</em>. <em>Un hommage</em> is the predicate.'},
   {t:'que le vice rend', h:'The relative que', n:'<em>Que</em> is the object of <em>rend</em> and stands for <em>hommage</em>. <em>Le vice</em> is the subject.'},
   {t:'à la vertu', h:'The indirect object', n:'<em>Rendre hommage à</em>: to pay homage to. <em>À la vertu</em> is the indirect object.'}],
  qs:[
   {t:'L’', q:'Why <em>l’</em> and not <em>la</em>?', a:'The <em>h</em> of <em>hypocrisie</em> is mute, so the article is elided', ds:['<em>Hypocrisie</em> is masculine','<em>L’</em> is a pronoun here','French elides before every consonant'], why:'Before a vowel or a mute <em>h</em>, <em>le</em> and <em>la</em> become <em>l’</em>.'},
   {t:'que', q:'<em>que</em> is…', a:'A relative pronoun, object of <em>rend</em>', ds:['The subject of <em>rend</em>','A conjunction: that','A comparison: than'], why:'<em>Le vice</em> is the subject; <em>que</em> stands for the homage it pays.'},
   {t:'à la vertu', q:'<em>à la vertu</em> is…', a:'The indirect object: to virtue', ds:['The direct object of <em>rend</em>','A phrase of place: at virtue','A phrase of means'], why:'<em>Rendre quelque chose à quelqu’un</em>: one pays something to someone.'}]},

'fr-proust': {lang:'fr', author:'Proust', work:'Du côté de chez Swann', locus:'I.1', ed:'Proust, <i>Du côté de chez Swann</i> (1913), the opening. English: C. K. Scott Moncrieff, <i>Swann’s Way</i> (1922), Project Gutenberg eBook 7178.',
  lat:'Longtemps, je me suis couché de bonne heure. Parfois, à peine ma bougie éteinte, mes yeux se fermaient si vite que je n’avais pas le temps de me dire : « Je m’endors. »',
  eng:'For a long time I used to go to bed early. Sometimes, when I had put out my candle, my eyes would close so quickly that I had not even time to say “I’m going to sleep.”\n— C. K. Scott Moncrieff',
  ctx:'The first sentences of <em>In Search of Lost Time</em>. The narrator remembers the nights of his childhood, and the passé composé of the first sentence gives way to the imperfect of what used to happen.',
  parts:[
   {t:'Longtemps, je me suis couché de bonne heure', h:'The passé composé of a reflexive verb', n:'<em>Je me suis couché</em> is the passé composé of <em>se coucher</em>, with <em>être</em>. With <em>longtemps</em> it sums up a long stretch of the past.'},
   {t:'à peine ma bougie éteinte', h:'An absolute construction', n:'<em>Ma bougie éteinte</em>, “my candle put out,” is a noun with a participle, standing apart from the clause: scarcely was my candle out.'},
   {t:'mes yeux se fermaient si vite que je n’avais pas le temps', h:'The imperfect of habit, and result', n:'<em>Se fermaient</em> and <em>avais</em> are imperfects of what happened again and again. <em>Si vite que</em> gives the result.'},
   {t:'de me dire', h:'The infinitive after a noun', n:'<em>Le temps de</em> takes the infinitive: time to say. <em>Me</em> is the indirect object: to say to myself.'}],
  qs:[
   {t:'je me suis couché', q:'<em>je me suis couché</em> takes <em>suis</em> because…', a:'<em>Se coucher</em> is reflexive', ds:['<em>Coucher</em> is a verb of motion','It is a passive','<em>Longtemps</em> requires <em>être</em>'], why:'Reflexive verbs form the passé composé with <em>être</em>.'},
   {t:'ma bougie éteinte', q:'<em>ma bougie éteinte</em> is…', a:'A noun with a participle standing apart: my candle once out', ds:['The subject of <em>se fermaient</em>','The object of <em>à peine</em>','A relative clause'], why:'The noun and participle make a clause of their own, giving the time.'},
   {t:'se fermaient', q:'<em>se fermaient</em> is in the imperfect because…', a:'It tells what used to happen, again and again', ds:['It is a single event','It depends on <em>si</em>','It is a wish'], why:'The imperfect gives habit: my eyes would close.'},
   {t:'si vite que', q:'<em>si vite que je n’avais pas le temps</em> gives…', a:'A result', ds:['A comparison','A cause','A purpose'], why:'<em>Si</em> with an adverb and then <em>que</em>: so quickly that.'}]},

'fr-emile': {lang:'fr', author:'Rousseau', work:'Émile', locus:'I', ed:'Rousseau, <i>Émile, ou de l’éducation</i> (1762), the opening of book I. English: Barbara Foxley (1911), Project Gutenberg eBook 5427.',
  lat:'Tout est bien, sortant des mains de l’Auteur des choses ; tout dégénère entre les mains de l’homme.',
  eng:'God makes all things good; man meddles with them and they become evil.\n— Barbara Foxley',
  ctx:'Rousseau’s treatise on education opens with a sentence of two halves set against each other. The translator turns the participle into a clause with God as subject.',
  parts:[
   {t:'Tout est bien', h:'Tout as a pronoun', n:'<em>Tout</em>, “everything,” is the subject, and <em>bien</em>, “good,” is the predicate.'},
   {t:'sortant des mains de l’Auteur des choses', h:'The present participle', n:'<em>Sortant</em>, “coming out,” is a present participle describing <em>tout</em>: as it comes from the hands of the Author of things. <em>Des</em> is <em>de les</em>.'},
   {t:'tout dégénère entre les mains de l’homme', h:'The contrast', n:'The second half repeats <em>tout</em> and <em>les mains</em>, and sets man against the Author. No conjunction joins the halves.'}],
  qs:[
   {t:'sortant', q:'<em>sortant</em> is…', a:'A present participle describing <em>tout</em>', ds:['A finite verb','A gerund with <em>en</em>','A noun'], why:'The form in <em>-ant</em> without <em>en</em> is the participle; it says when everything is good.'},
   {t:'des mains', q:'<em>des</em> in <em>des mains</em> is…', a:'<em>de</em> with <em>les</em>: from the hands', ds:['The plural indefinite article: some hands','A possessive','<em>de</em> alone'], why:'After <em>sortir</em>, <em>de</em> gives the place out of which; with <em>les</em> it becomes <em>des</em>.'},
   {t:'dégénère', q:'How are the two halves joined?', a:'By no conjunction: they are set side by side', ds:['By <em>mais</em>','By <em>et</em>','By a relative pronoun'], why:'The contrast is made by the repeated words and the order alone.'}]},

/* ---------- French poetry ---------- */
'fr-phedre': {lang:'fr', author:'Racine', work:'Phèdre', locus:'I.1.1–4', meter:'Alexandrine', ed:'Racine, <i>Phèdre</i> (1677), I.1.1–4. English: Robert Bruce Boswell (1890), Project Gutenberg eBook 1977.',
  lat:'Le dessein en est pris : je pars, cher Théramène,\nEt quitte le séjour de l’aimable Trézène.\nDans le doute mortel dont je suis agité,\nJe commence à rougir de mon oisiveté.',
  eng:'My mind is settled, dear Theramenes,\nAnd I can stay no more in lovely Troezen.\nIn doubt that racks my soul with mortal anguish,\nI grow ashamed of such long idleness.\n— Robert Bruce Boswell',
  ctx:'Hippolytus, son of Theseus, tells his tutor Theramenes that he will go in search of his father. The lines are alexandrines, of twelve syllables, rhyming in pairs.',
  parts:[
   {t:'Le dessein en est pris', h:'En and the passive', n:'<em>Est pris</em>, “is taken,” is passive. <em>En</em>, “of it,” refers to what he is about to say: the plan for it is made.'},
   {t:'je pars, cher Théramène', h:'The present for a decision', n:'<em>Je pars</em>, present, states what is decided: I am leaving. <em>Cher Théramène</em> is the address.'},
   {t:'Et quitte le séjour de l’aimable Trézène', h:'A second verb', n:'<em>Quitte</em> shares the subject <em>je</em>; the pronoun is not repeated.'},
   {t:'Dans le doute mortel dont je suis agité', h:'The relative dont', n:'<em>Dont</em> stands for <em>de</em> with the relative: the doubt by which I am shaken. <em>Je suis agité</em> is passive, and <em>de</em> gives the agent.'},
   {t:'Je commence à rougir de mon oisiveté', h:'Commencer à', n:'<em>Commencer</em> takes <em>à</em> with the infinitive. <em>Rougir de</em>, “to blush for,” takes <em>de</em>.'}],
  qs:[
   {t:'en est pris', q:'<em>est pris</em> is…', a:'Passive: is taken', ds:['The passé composé of <em>prendre</em> with <em>être</em>','An imperfect','A reflexive verb'], why:'<em>Prendre</em> forms its compound past with <em>avoir</em>, so <em>est pris</em> is the passive present: the plan is made.'},
   {t:'cher Théramène', q:'<em>cher Théramène</em> is…', a:'The person addressed', ds:['The subject of <em>pars</em>','The object of <em>pars</em>','In apposition to <em>dessein</em>'], why:'Hippolytus speaks to his tutor by name.'},
   {t:'dont', q:'<em>dont</em> here means…', a:'By which, standing for <em>de</em> with the relative', ds:['Whose, of a person','Where','Than which'], why:'<em>Être agité de</em>: to be shaken by. <em>Dont</em> takes the place of <em>duquel</em>.'},
   {t:'à rougir', q:'<em>à</em> in <em>commence à rougir</em>…', a:'Links <em>commencer</em> to its infinitive', ds:['Gives a place','Gives a purpose','Marks the indirect object'], why:'<em>Commencer à</em> with the infinitive: to begin to.'}]},

'fr-cigale': {lang:'fr', author:'La Fontaine', work:'Fables', locus:'I.1.1–6', meter:'Lines of seven and three syllables', ed:'La Fontaine, <i>Fables</i> I.1, “La Cigale et la Fourmi” (1668), lines 1–6. English: Elizur Wright (1841), Project Gutenberg eBook 7241.',
  lat:'La Cigale, ayant chanté\nTout l’été,\nSe trouva fort dépourvue\nQuand la bise fut venue :\nPas un seul petit morceau\nDe mouche ou de vermisseau.',
  eng:'A Grasshopper gay\nSang the summer away,\nAnd found herself poor\nBy the winter’s first roar.\nOf meat or of bread,\nNot a morsel she had!\n— Elizur Wright',
  ctx:'The first fable of La Fontaine’s first book. The cicada, a “Grasshopper” in the English, sang all summer and has nothing when winter comes. Most lines have seven syllables, and one has three.',
  parts:[
   {t:'La Cigale, ayant chanté\nTout l’été', h:'The compound participle', n:'<em>Ayant chanté</em>, “having sung,” is the compound participle: it puts the singing before the main verb. <em>Tout l’été</em> gives the length of time.'},
   {t:'Se trouva fort dépourvue', h:'The passé simple and the predicate', n:'<em>Se trouva</em>, passé simple, “found herself.” <em>Dépourvue</em>, “unprovided,” agrees with <em>la Cigale</em>, and <em>fort</em> means “very.”'},
   {t:'Quand la bise fut venue', h:'The past anterior', n:'<em>Fut venue</em> is the past anterior: <em>venir</em> takes <em>être</em>, here in the passé simple. It gives an event just before the main one.'},
   {t:'Pas un seul petit morceau\nDe mouche ou de vermisseau.', h:'A sentence without a verb', n:'The line stands without a verb: not a single little piece. <em>De</em> gives what it would be a piece of.'}],
  qs:[
   {t:'ayant chanté', q:'<em>ayant chanté</em> is…', a:'A compound participle: having sung', ds:['A passé composé','A present participle: singing','An infinitive'], why:'<em>Ayant</em> with the past participle puts the action before the main verb.'},
   {t:'dépourvue', q:'<em>dépourvue</em> agrees with…', a:'<em>la Cigale</em>', ds:['<em>l’été</em>','<em>la bise</em>','<em>se</em> as a separate object'], why:'It is feminine singular, describing the cicada.'},
   {t:'fut venue', q:'<em>fut venue</em> is…', a:'The past anterior of <em>venir</em>', ds:['A passive','The imperfect','The pluperfect of a reflexive verb'], why:'<em>Venir</em> takes <em>être</em>; with <em>fut</em>, the passé simple of <em>être</em>, it makes the past anterior, used after <em>quand</em>.'},
   {t:'Pas un seul petit morceau', q:'The last two lines…', a:'Make a sentence with no verb: not a single piece', ds:['Are the object of <em>trouva</em>','Are the subject of <em>fut venue</em>','Depend on <em>ayant chanté</em>'], why:'La Fontaine sets the phrase down alone, and the sense is supplied: she had not a single piece.'}]},

'fr-mignonne': {lang:'fr', author:'Ronsard', work:'Odes', locus:'“Mignonne, allons voir si la rose” 1–6', meter:'Octosyllable', ed:'Ronsard, “Mignonne, allons voir si la rose” (1553), stanza 1. English: Andrew Lang, <i>Ballads and Lyrics of Old France</i> (1872), Project Gutenberg eBook 795.',
  lat:'Mignonne, allons voir si la rose\nQui ce matin avait déclose\nSa robe de pourpre au soleil,\nA point perdu cette vesprée\nLes plis de sa robe pourprée,\nEt son teint au vôtre pareil.',
  eng:'See, Mignonne, has not the Rose,\nThat this morning did unclose\nHer purple mantle to the light,\nLost, before the day be dead,\nThe glory of her raiment red,\nHer color, bright as yours is bright?\n— Andrew Lang',
  ctx:'Ronsard asks a young woman to come and see whether the rose that opened this morning has faded by evening; the poem ends with a call to gather youth while it lasts. Each line has eight syllables, or nine with a final mute <em>e</em>.',
  parts:[
   {t:'Mignonne, allons voir', h:'The imperative of the first person plural', n:'<em>Mignonne</em>, “darling,” is the address. <em>Allons</em> is the imperative, “let us go,” with the infinitive <em>voir</em>.'},
   {t:'si la rose\nQui ce matin avait déclose\nSa robe de pourpre au soleil', h:'An indirect question and a relative clause', n:'<em>Si</em>, “whether,” begins the indirect question. <em>Qui … avait déclose</em>, pluperfect, describes the rose. <em>Déclose</em>, an old word for “opened,” agrees with <em>sa robe</em>, its object, as the older language allowed even when the object came after.'},
   {t:'A point perdu cette vesprée', h:'The verb of the question', n:'<em>A … perdu</em>, passé composé, is the verb of the question: whether the rose has lost. <em>Point</em> without <em>ne</em> means “at all.” <em>Cette vesprée</em>, “this evening,” is an old word.'},
   {t:'Et son teint au vôtre pareil', h:'The possessive pronoun', n:'<em>Le vôtre</em>, “yours,” is a possessive pronoun; <em>au vôtre</em> is <em>à le vôtre</em>. <em>Pareil à</em>: like yours.'}],
  qs:[
   {t:'allons', q:'<em>allons</em> is…', a:'The imperative: let us go', ds:['The present indicative: we go','The future: we shall go','The subjunctive'], why:'With no subject pronoun, the first person plural is the imperative.'},
   {t:'si', q:'<em>si</em> in <em>voir si la rose</em> means…', a:'Whether: it begins an indirect question', ds:['If: a condition','So: an adverb of degree','Yes: an answer'], why:'After <em>voir</em>, <em>si</em> introduces what is to be seen: whether the rose has lost its petals.'},
   {t:'A point perdu', q:'<em>a … perdu</em> is…', a:'The passé composé: has lost', ds:['The present: has','The pluperfect: had lost','A passive: is lost'], why:'<em>A</em> with the participle <em>perdu</em> is the passé composé; its subject is <em>la rose</em>.'},
   {t:'au vôtre', q:'<em>au vôtre</em> means…', a:'To yours: <em>le vôtre</em> is a possessive pronoun', ds:['At your house','To you','Of yours'], why:'<em>Au</em> is <em>à le</em>, and <em>le vôtre</em> stands for <em>votre teint</em>.'}]},

'fr-ilpleure': {lang:'fr', author:'Verlaine', work:'Romances sans paroles', locus:'“Ariettes oubliées” III.1–8', meter:'Hexasyllable', ed:'Verlaine, <i>Romances sans paroles</i> (1874), “Ariettes oubliées” III, stanzas 1–2, Project Gutenberg eBook 15112. English: Gertrude Hall (1895), Project Gutenberg eBook 8426.',
  lat:'Il pleure dans mon cœur\nComme il pleut sur la ville ;\nQuelle est cette langueur\nQui pénètre mon cœur ?\n\nÔ bruit doux de la pluie\nPar terre et sur les toits !\nPour un cœur qui s’ennuie,\nÔ le chant de la pluie !',
  eng:'It weeps in my heart\nAs it rains on the town.\nWhat is this dull smart\nPossessing my heart?\n\nSoft sound of the rain\nOn the ground and the roofs!\nTo a heart in pain,\nO the song of the rain!\n— Gertrude Hall',
  ctx:'Verlaine makes an impersonal verb of weeping on the model of <em>il pleut</em>, “it rains.” The lines have six syllables.',
  parts:[
   {t:'Il pleure dans mon cœur', h:'An impersonal verb made new', n:'<em>Pleurer</em>, “to weep,” is not impersonal; Verlaine uses it like <em>pleuvoir</em>, with the empty subject <em>il</em>: it weeps in my heart.'},
   {t:'Comme il pleut sur la ville', h:'The impersonal pleuvoir', n:'<em>Il pleut</em> is the true impersonal. <em>Comme</em> compares: as it rains.'},
   {t:'Quelle est cette langueur\nQui pénètre mon cœur ?', h:'The interrogative quel', n:'<em>Quelle</em> agrees with <em>langueur</em>, feminine. <em>Qui</em> is the subject of <em>pénètre</em>.'},
   {t:'Ô bruit doux de la pluie', h:'An exclamation without a verb', n:'<em>Ô</em> with a noun makes an exclamation. There is no verb.'},
   {t:'Pour un cœur qui s’ennuie', h:'A reflexive verb', n:'<em>S’ennuyer</em>, “to be weary, to grieve,” is reflexive in French.'}],
  qs:[
   {t:'Il pleure', q:'<em>Il</em> in <em>Il pleure dans mon cœur</em> is…', a:'An empty subject, as in <em>il pleut</em>', ds:['“He,” the poet','“He,” the heart','“It,” the town'], why:'Verlaine treats weeping as weather: the subject names no one.'},
   {t:'Quelle', q:'<em>Quelle</em> is feminine because…', a:'It agrees with <em>langueur</em>', ds:['It agrees with <em>la ville</em>','It agrees with <em>cœur</em>','Interrogatives are always feminine'], why:'<em>Quel</em> agrees with the noun it asks about.'},
   {t:'Qui pénètre', q:'<em>Qui</em> in <em>Qui pénètre mon cœur</em> is…', a:'The subject of <em>pénètre</em>, standing for <em>langueur</em>', ds:['The object of <em>pénètre</em>','A question: who?','The poet'], why:'<em>Qui</em> as a relative is the subject; <em>mon cœur</em> is the object.'},
   {t:'s’ennuie', q:'<em>s’ennuie</em> is…', a:'A reflexive verb: grieves, is weary', ds:['A passive','An impersonal verb','The object of <em>pour</em>'], why:'<em>S’ennuyer</em> is used with the reflexive pronoun.'}]},

'fr-recueil': {lang:'fr', author:'Baudelaire', work:'Les Fleurs du mal', locus:'“Recueillement” 1–4', meter:'Alexandrine', ed:'Baudelaire, “Recueillement,” in <i>Les Fleurs du mal</i> (1868), lines 1–4, Project Gutenberg eBook 6099. English: Cyril Scott (1909), Project Gutenberg eBook 36098.',
  lat:'Sois sage, ô ma Douleur, et tiens-toi plus tranquille.\nTu réclamais le Soir ; il descend ; le voici :\nUne atmosphère obscure enveloppe la ville,\nAux uns portant la paix, aux autres le souci.',
  eng:'Be wise, O my Woe, seek your grievance to drown;\nYou did call for the night, and behold it is here.\nAn atmosphere somber envelops the town,\nTo some bringing peace and to others a care.\n— Cyril Scott',
  ctx:'Baudelaire speaks to his own grief as to a child, and tells it that the evening it asked for has come. The poem is a sonnet in alexandrines.',
  parts:[
   {t:'Sois sage, ô ma Douleur', h:'The imperative of être', n:'<em>Sois</em> is the imperative of <em>être</em>, singular: be good. <em>Ô ma Douleur</em> is the address; the poet speaks to his grief with <em>tu</em>.'},
   {t:'et tiens-toi plus tranquille', h:'The reflexive imperative', n:'<em>Tiens-toi</em>, “hold yourself,” is the imperative of <em>se tenir</em>; in the affirmative imperative the pronoun follows, and <em>te</em> becomes <em>toi</em>.'},
   {t:'Tu réclamais le Soir ; il descend ; le voici', h:'Three short clauses', n:'<em>Réclamais</em>, imperfect, “you kept asking for.” <em>Il</em> is the evening. <em>Le voici</em>, “here it is”: <em>voici</em> takes an object pronoun before it.'},
   {t:'Aux uns portant la paix, aux autres le souci', h:'Les uns … les autres', n:'<em>Aux uns … aux autres</em>, “to some … to others,” divides the city. <em>Portant</em>, present participle, describes the atmosphere.'}],
  qs:[
   {t:'Sois', q:'<em>Sois</em> is…', a:'The imperative of <em>être</em>', ds:['The present subjunctive used as a wish','The present indicative','An infinitive'], why:'The imperative singular of <em>être</em> is <em>sois</em>, borrowed from the subjunctive form.'},
   {t:'tiens-toi', q:'Why <em>toi</em> and not <em>te</em>?', a:'In the affirmative imperative the pronoun follows the verb, and <em>te</em> becomes <em>toi</em>', ds:['<em>Toi</em> is the subject','<em>Te</em> cannot stand before a consonant','<em>Toi</em> is the plural'], why:'<em>Tiens-toi</em>, <em>assieds-toi</em>: after the verb, <em>me</em> and <em>te</em> become <em>moi</em> and <em>toi</em>.'},
   {t:'réclamais', q:'<em>réclamais</em> is…', a:'The imperfect: you were asking for, kept asking for', ds:['The passé simple','The present','The conditional'], why:'The ending <em>-ais</em> on the stem <em>réclam-</em> is the imperfect.'},
   {t:'portant', q:'<em>portant</em> describes…', a:'<em>Une atmosphère obscure</em>', ds:['<em>la ville</em>','<em>la paix</em>','<em>le Soir</em> alone'], why:'The atmosphere wraps the city, bringing peace to some and care to others.'}]},

'fr-cid': {lang:'fr', author:'Corneille', work:'Le Cid', locus:'I.5', meter:'Alexandrine', ed:'Corneille, <i>Le Cid</i> (1637), I.5. English: Roscoe Mongan (1896), Project Gutenberg eBook 14954; the translator’s bracketed literal notes are left out.',
  lat:'Rodrigue, as-tu du cœur ?\n— Tout autre que mon père\nL’éprouverait sur l’heure.',
  eng:'Rodrigo, have you courage?\n— Any other than my father would have found that out instantly.\n— Roscoe Mongan',
  ctx:'Don Diègue, too old to avenge an insult, asks his son whether he has the courage to do it for him. One alexandrine is divided between the two speakers.',
  parts:[
   {t:'Rodrigue, as-tu du cœur ?', h:'Inversion in a question, and the partitive', n:'<em>As-tu</em> asks by putting the pronoun after the verb. <em>Du cœur</em> is partitive: some heart, that is, courage.'},
   {t:'Tout autre que mon père', h:'Tout autre que', n:'<em>Tout autre que</em>, “anyone other than,” is the subject.'},
   {t:'L’éprouverait sur l’heure', h:'The conditional', n:'<em>Éprouverait</em> is conditional: any other would find it out, if he had asked. <em>L’</em> stands for the courage.'}],
  qs:[
   {t:'as-tu', q:'<em>as-tu</em> asks a question by…', a:'Putting the subject pronoun after the verb', ds:['Using <em>est-ce que</em>','Raising the voice alone','Using <em>si</em>'], why:'Inversion with a hyphen is the formal way of asking: <em>as-tu</em>.'},
   {t:'du cœur', q:'<em>du cœur</em> is…', a:'The partitive: some heart, courage', ds:['A genitive: of the heart','The object of a preposition','The subject'], why:'<em>Du</em> before a noun of quantity not counted gives the partitive sense.'},
   {t:'Tout autre', q:'<em>Tout autre que mon père</em> is…', a:'The subject of <em>éprouverait</em>', ds:['The object of <em>éprouverait</em>','An address to the father','The predicate of <em>as</em>'], why:'Anyone other than my father would find it out: the phrase is the subject.'},
   {t:'éprouverait', q:'<em>éprouverait</em> is…', a:'The conditional: would find out', ds:['The future: will find out','The imperfect: was finding out','The subjunctive'], why:'The ending <em>-rait</em> on the infinitive stem is the conditional; the condition is understood.'}]},

'fr-corbeau': {lang:'fr', author:'La Fontaine', work:'Fables', locus:'I.2.1–4', meter:'Lines of ten and eight syllables', ed:'La Fontaine, <i>Fables</i> I.2, “Le Corbeau et le Renard” (1668), lines 1–4. English: Elizur Wright (1841), Project Gutenberg eBook 7241.',
  lat:'Maître Corbeau, sur un arbre perché,\nTenait en son bec un fromage.\nMaître Renard, par l’odeur alléché,\nLui tint à peu près ce langage :',
  eng:'Perched on a lofty oak,\nSir Raven held a lunch of cheese;\nSir Fox, who smelled it in the breeze,\nThus to the holder spoke:\n— Elizur Wright',
  ctx:'The second fable: the fox flatters the crow until he opens his beak and drops the cheese. The lines differ in length, as La Fontaine’s lines often do.',
  parts:[
   {t:'Maître Corbeau, sur un arbre perché', h:'The participle after the subject', n:'<em>Perché</em>, “perched,” agrees with <em>Maître Corbeau</em> and describes him. <em>Maître</em> is a mock title.'},
   {t:'Tenait en son bec un fromage', h:'The imperfect', n:'<em>Tenait</em>, imperfect: the state of things when the story begins.'},
   {t:'Maître Renard, par l’odeur alléché', h:'The agent with par', n:'<em>Alléché</em>, “lured,” agrees with <em>Maître Renard</em>, and <em>par l’odeur</em> gives what lured him.'},
   {t:'Lui tint à peu près ce langage', h:'The passé simple and the indirect object', n:'<em>Tint</em>, passé simple of <em>tenir</em>, is the event. <em>Lui</em>, “to him,” is the indirect object.'}],
  qs:[
   {t:'perché', q:'<em>perché</em> agrees with…', a:'<em>Maître Corbeau</em>', ds:['<em>un arbre</em>','<em>son bec</em>','<em>un fromage</em>'], why:'The participle describes the crow: perched on a tree.'},
   {t:'Tenait', q:'<em>Tenait</em> is in the imperfect because…', a:'It describes the scene when the story begins', ds:['It is a single completed event','It is a condition','It is a habit of every day'], why:'The imperfect sets the scene; <em>tint</em> in line 4 is the event.'},
   {t:'par l’odeur', q:'<em>par l’odeur</em> gives…', a:'What lured the fox: the agent of <em>alléché</em>', ds:['The place of the fox','The time','The object of <em>tint</em>'], why:'With a participle of passive sense, <em>par</em> gives the agent.'},
   {t:'Lui', q:'<em>Lui</em> is…', a:'The indirect object: to him, the crow', ds:['The subject: he','The direct object: him','A stressed pronoun after a preposition'], why:'<em>Tenir un langage à quelqu’un</em>: <em>lui</em> stands for <em>à Maître Corbeau</em>.'}]},

'fr-vieille': {lang:'fr', author:'Ronsard', work:'Sonnets pour Hélène', locus:'II.24.1–4', meter:'Alexandrine', ed:'Ronsard, <i>Sonnets pour Hélène</i> II.24 (1578), lines 1–4. English: Andrew Lang, <i>Ballads and Lyrics of Old France</i> (1872), Project Gutenberg eBook 795.',
  lat:'Quand vous serez bien vieille, au soir, à la chandelle,\nAssise auprès du feu, dévidant et filant,\nDirez, chantant mes vers, en vous émerveillant :\nRonsard me célébrait du temps que j’étais belle.',
  eng:'When you are very old, at evening\nYou’ll sit and spin beside the fire, and say,\nHumming my songs, “Ah well, ah well-a-day!\nWhen I was young, of me did Ronsard sing.”\n— Andrew Lang',
  ctx:'Ronsard imagines the woman he loves grown old, remembering that a poet once praised her. The poem is a sonnet in alexandrines.',
  parts:[
   {t:'Quand vous serez bien vieille', h:'The future after quand', n:'<em>Serez</em> is future. After <em>quand</em>, of time to come, French uses the future, where English uses the present: when you are.'},
   {t:'Assise auprès du feu, dévidant et filant', h:'Participles', n:'<em>Assise</em>, “seated,” is a past participle, feminine. <em>Dévidant et filant</em>, “winding and spinning,” are present participles.'},
   {t:'Direz, chantant mes vers, en vous émerveillant', h:'The verb without its pronoun', n:'<em>Direz</em> has no pronoun; the older language could leave out <em>vous</em>. <em>En vous émerveillant</em>, with <em>en</em>, is the gerund: marveling.'},
   {t:'Ronsard me célébrait du temps que j’étais belle', h:'The words she will say', n:'<em>Célébrait</em> and <em>étais</em> are imperfects of a time that lasted. <em>Du temps que</em>: in the days when.'}],
  qs:[
   {t:'serez', q:'Why is <em>serez</em> future?', a:'After <em>quand</em> of time to come, French uses the future', ds:['It is a condition','It is a command','It is polite'], why:'English says “when you are,” French “when you will be.”'},
   {t:'Assise', q:'<em>Assise</em> is feminine because…', a:'It describes the woman addressed', ds:['It agrees with <em>la chandelle</em>','It agrees with <em>vieille</em> as a noun','Participles are always feminine'], why:'<em>Vous</em> here is one woman, and the participle agrees with her.'},
   {t:'Direz', q:'What is the subject of <em>Direz</em>?', a:'<em>vous</em>, left unexpressed', ds:['<em>Ronsard</em>','<em>mes vers</em>','<em>le feu</em>'], why:'The ending <em>-ez</em> shows the person; the older language could omit the pronoun.'},
   {t:'en vous émerveillant', q:'<em>en vous émerveillant</em> is…', a:'A gerund: while marveling', ds:['A preposition with a noun','An infinitive','A present indicative'], why:'<em>En</em> with the participle in <em>-ant</em> is the gerund, saying how or while.'}]},

'fr-automne': {lang:'fr', author:'Verlaine', work:'Poèmes saturniens', locus:'“Chanson d’automne” 1–6', meter:'Lines of four and three syllables', ed:'Verlaine, “Chanson d’automne,” in <i>Poèmes saturniens</i> (1866), stanza 1, Project Gutenberg eBook 15112. English: Gertrude Hall (1895), Project Gutenberg eBook 8426.',
  lat:'Les sanglots longs\nDes violons\nDe l’automne\nBlessent mon cœur\nD’une langueur\nMonotone.',
  eng:'Leaf-strewing gales\nUtter low wails\nLike violins,\nTill on my soul\nTheir creeping dole\nStealthily wins.\n— Gertrude Hall',
  ctx:'One of the best known poems in French. The lines are very short, of four and three syllables. The translator keeps the sound more than the words: “violins” is her only word taken from the stanza.',
  parts:[
   {t:'Les sanglots longs', h:'The adjective after the noun', n:'<em>Longs</em> follows <em>sanglots</em> and agrees with it, masculine plural.'},
   {t:'Des violons\nDe l’automne', h:'Two phrases with de', n:'<em>Des violons</em> depends on <em>sanglots</em>, and <em>de l’automne</em> on <em>violons</em>.'},
   {t:'Blessent mon cœur', h:'The verb', n:'<em>Blessent</em> is plural, agreeing with <em>les sanglots</em>.'},
   {t:'D’une langueur\nMonotone.', h:'De of means', n:'<em>De</em> gives the means: they wound my heart with a monotonous languor.'}],
  qs:[
   {t:'longs', q:'<em>longs</em> agrees with…', a:'<em>sanglots</em>', ds:['<em>violons</em>','<em>automne</em>','<em>cœur</em>'], why:'It is masculine plural and follows the noun it describes.'},
   {t:'Blessent', q:'What is the subject of <em>Blessent</em>?', a:'<em>Les sanglots</em>', ds:['<em>Des violons</em>','<em>l’automne</em>','<em>mon cœur</em>'], why:'The two phrases with <em>de</em> depend on <em>sanglots</em>; the verb is plural to agree with it.'},
   {t:'mon cœur', q:'<em>mon cœur</em> is…', a:'The object of <em>blessent</em>', ds:['The subject','An indirect object','An address'], why:'The sobs wound my heart.'},
   {t:'D’une langueur', q:'<em>d’une langueur monotone</em> gives…', a:'The means: with a monotonous languor', ds:['Possession: of a languor','The place','The agent of a passive'], why:'<em>De</em> after a verb of acting can give the means or manner.'}]},

'fr-ennemi': {lang:'fr', author:'Baudelaire', work:'Les Fleurs du mal', locus:'“L’Ennemi” 1–4', meter:'Alexandrine', ed:'Baudelaire, “L’Ennemi,” in <i>Les Fleurs du mal</i> (1857), lines 1–4, Project Gutenberg eBook 6099. English: Cyril Scott (1909), Project Gutenberg eBook 36098.',
  lat:'Ma jeunesse ne fut qu’un ténébreux orage,\nTraversé çà et là par de brillants soleils ;\nLe tonnerre et la pluie ont fait un tel ravage\nQu’il reste en mon jardin bien peu de fruits vermeils.',
  eng:'My childhood was naught but a ravaging storm,\nEnlivened at times by a brilliant sun;\nThe rain and the winds wrought such havoc and harm\nThat of buds on my plot there remains hardly one.\n— Cyril Scott',
  ctx:'The poet looks back on his youth as a storm that has left his garden nearly bare. The poem is a sonnet in alexandrines.',
  parts:[
   {t:'Ma jeunesse ne fut qu’un ténébreux orage', h:'Ne … que and the passé simple', n:'<em>Ne fut que</em>, “was only,” limits. <em>Fut</em> is the passé simple of <em>être</em>: the youth is over.'},
   {t:'Traversé çà et là par de brillants soleils', h:'A participle and the agent', n:'<em>Traversé</em> agrees with <em>orage</em>, masculine. <em>Par</em> gives the agent. <em>De</em> replaces <em>des</em> before an adjective that precedes its noun: <em>de brillants soleils</em>.'},
   {t:'Le tonnerre et la pluie ont fait un tel ravage', h:'Tel … que', n:'<em>Un tel ravage</em>, “such havoc,” looks ahead to the clause of result with <em>que</em>.'},
   {t:'Qu’il reste en mon jardin bien peu de fruits vermeils', h:'Impersonal il reste', n:'<em>Il reste</em>, “there remain,” is impersonal: the verb is singular though <em>fruits</em> is plural. <em>Bien peu de</em>: very few.'}],
  qs:[
   {t:'ne fut qu’', q:'<em>ne fut qu’un … orage</em> means…', a:'Was only a storm', ds:['Was not a storm','Was no longer a storm','Was never a storm'], why:'<em>Ne … que</em> means “only.”'},
   {t:'de brillants soleils', q:'Why <em>de</em> and not <em>des</em> in <em>de brillants soleils</em>?', a:'The adjective comes before the noun', ds:['<em>Soleils</em> is masculine','After <em>par</em> the article is dropped','It is a genitive'], why:'In careful French the plural indefinite article <em>des</em> becomes <em>de</em> before an adjective that precedes its noun.'},
   {t:'un tel ravage', q:'<em>un tel ravage … qu’il reste</em> gives…', a:'A result', ds:['A comparison','A purpose','A concession'], why:'<em>Tel … que</em>: such havoc that few fruits remain.'},
   {t:'il reste', q:'<em>il reste</em> is singular because…', a:'It is impersonal: “there remain”', ds:['Its subject is <em>jardin</em>','<em>Fruits</em> is singular','It agrees with <em>ravage</em>'], why:'With impersonal <em>il</em>, the verb stays singular, and <em>fruits</em> is the logical subject placed after it.'}]}
});


/* ===== de ===== */
/* German prose and poetry. German as printed by Wikisource and Project Gutenberg, in modern spelling (dass for daß,
   and the like), read 2026-10-15. English as printed by Project Gutenberg and the hymnals, named in each passage,
   lightly modernized (spelling, the old pronouns and verb forms, punctuation). */
Object.assign(PASSAGES, {
'de-gms': {lang:'de', author:'Kant', work:'Grundlegung zur Metaphysik der Sitten', locus:'I', ed:'Kant, <i>Grundlegung zur Metaphysik der Sitten</i> (1785), the opening of section I. English: Thomas Kingsmill Abbott (1873), Project Gutenberg eBook 5682.',
  lat:'Es ist überall nichts in der Welt, ja überhaupt auch außer derselben zu denken möglich, was ohne Einschränkung für gut könnte gehalten werden, als allein ein guter Wille.',
  eng:'Nothing can possibly be conceived in the world, or even out of it, which can be called good without qualification, except a good will.\n— Thomas Kingsmill Abbott',
  ctx:'The first sentence of Kant’s <em>Groundwork</em>. It holds back its answer to the very end, after a long relative clause: only a good will is good without qualification.',
  parts:[
   {t:'Es ist überall nichts in der Welt', h:'The main clause', n:'<em>Es ist … nichts</em>, “there is nothing.” <em>Es</em> fills the first place, and <em>nichts</em> is the real subject.'},
   {t:'ja überhaupt auch außer derselben', h:'A preposition with the dative', n:'<em>Außer</em>, “outside,” takes the dative. <em>Derselben</em>, “the same,” is dative feminine and stands for <em>der Welt</em>.'},
   {t:'zu denken möglich', h:'The infinitive with zu', n:'<em>Zu denken möglich</em>, “possible to think”: the infinitive with <em>zu</em> completes the adjective.'},
   {t:'was ohne Einschränkung für gut könnte gehalten werden', h:'A relative clause with the verb at the end', n:'<em>Was</em> takes up <em>nichts</em>. In the relative clause the verbs go to the end: <em>könnte gehalten werden</em>, “could be held,” with the subjunctive <em>könnte</em> placed before the passive infinitive, as the older order allowed. <em>Für gut halten</em>: to hold to be good.'},
   {t:'als allein ein guter Wille', h:'The answer at the end', n:'<em>Als</em>, “except,” after a negative brings in the one thing excepted. <em>Ein guter Wille</em> is nominative, with the strong ending <em>-er</em> on the adjective after <em>ein</em>.'}],
  qs:[
   {t:'nichts', q:'The real subject of <em>Es ist</em> is…', a:'<em>nichts</em>', ds:['<em>es</em>','<em>die Welt</em>','<em>ein guter Wille</em>'], why:'<em>Es</em> holds the first place; what is said to exist, or not to exist, is <em>nichts</em>.'},
   {t:'derselben', q:'<em>derselben</em> is dative because…', a:'<em>außer</em> takes the dative', ds:['It is an indirect object','It is a genitive of possession','It follows <em>ja</em>'], why:'<em>Außer</em> always takes the dative: outside it, the world.'},
   {t:'könnte gehalten werden', q:'<em>könnte gehalten werden</em> is…', a:'A subjunctive with a passive infinitive: could be held', ds:['A future active','A perfect passive','An imperative'], why:'<em>Gehalten werden</em> is the passive infinitive, and <em>könnte</em> is the past subjunctive of <em>können</em>.'},
   {t:'guter', q:'Why <em>guter</em> and not <em>gute</em>?', a:'After <em>ein</em>, the adjective takes the strong ending that shows the masculine nominative', ds:['<em>Wille</em> is feminine','After <em>ein</em> the adjective is always <em>-er</em>','It is a comparative'], why:'<em>Ein</em> has no ending in the masculine nominative, so the adjective shows it: <em>ein guter Wille</em>.'}]},

'de-krv': {lang:'de', author:'Kant', work:'Kritik der reinen Vernunft', locus:'A vii', ed:'Kant, <i>Kritik der reinen Vernunft</i> (1781), preface to the first edition. English: J. M. D. Meiklejohn (1855), Project Gutenberg eBook 4280.',
  lat:'Die menschliche Vernunft hat das besondere Schicksal in einer Gattung ihrer Erkenntnisse: dass sie durch Fragen belästigt wird, die sie nicht abweisen kann; denn sie sind ihr durch die Natur der Vernunft selbst aufgegeben, die sie aber auch nicht beantworten kann; denn sie übersteigen alles Vermögen der menschlichen Vernunft.',
  eng:'Human reason, in one sphere of its cognition, is called upon to consider questions which it cannot decline, as they are presented by its own nature, but which it cannot answer, as they transcend every faculty of the mind.\n— J. M. D. Meiklejohn',
  ctx:'Kant’s first preface begins with the strange fate of reason: it is pressed by questions it can neither set aside nor answer. The sentence turns on two relative clauses, each followed by a reason with <em>denn</em>.',
  parts:[
   {t:'Die menschliche Vernunft hat das besondere Schicksal', h:'The main clause', n:'<em>Die menschliche Vernunft</em> is the subject, and <em>das besondere Schicksal</em> the object. The adjectives take the weak ending <em>-e</em> after the article.'},
   {t:'dass sie durch Fragen belästigt wird', h:'A clause with dass, and the passive', n:'<em>Dass</em> sends the verb to the end. <em>Belästigt wird</em>, “is troubled,” is the passive with <em>werden</em>, and <em>durch</em> gives the means.'},
   {t:'die sie nicht abweisen kann', h:'A relative clause', n:'<em>Die</em> is the relative pronoun, plural, object of <em>abweisen</em>, and it stands for <em>Fragen</em>. <em>Sie</em> is reason. The verb <em>kann</em> goes to the end.'},
   {t:'denn sie sind ihr durch die Natur der Vernunft selbst aufgegeben', h:'Denn: main clause order', n:'<em>Denn</em>, “for,” does not move the verb: <em>sind</em> stays in second place. <em>Ihr</em> is dative: set to it.'},
   {t:'die sie aber auch nicht beantworten kann', h:'A second relative clause', n:'A second <em>die</em> takes up <em>Fragen</em> again: questions which it also cannot answer.'}],
  qs:[
   {t:'dass sie durch Fragen belästigt wird', q:'Why does <em>wird</em> stand at the end?', a:'<em>dass</em> begins a dependent clause, and the verb goes to the end', ds:['<em>Wird</em> is always last','It is a question','It is an infinitive'], why:'In a dependent clause the finite verb stands last.'},
   {t:'die sie nicht abweisen kann', q:'<em>die</em> in <em>die sie nicht abweisen kann</em> is…', a:'A relative pronoun standing for <em>Fragen</em>, object of <em>abweisen</em>', ds:['The article with <em>sie</em>','The subject of <em>kann</em>','A demonstrative: those women'], why:'<em>Sie</em> is the subject, reason; <em>die</em>, plural, is the object: which it cannot refuse.'},
   {t:'denn sie sind', q:'After <em>denn</em> the verb…', a:'Stays in second place, as in a main clause', ds:['Goes to the end','Comes first','Is left out'], why:'<em>Denn</em> is a coordinating conjunction and does not change the order.'},
   {t:'ihr', q:'<em>ihr</em> in <em>sie sind ihr … aufgegeben</em> is…', a:'Dative: set to it, to reason', ds:['The possessive: her','The subject: you all','Accusative: it'], why:'<em>Aufgeben</em> takes the person in the dative; <em>ihr</em> is the dative of <em>sie</em>, reason.'}]},

'de-werther': {lang:'de', author:'Goethe', work:'Die Leiden des jungen Werthers', locus:'4 May 1771', ed:'Goethe, <i>Die Leiden des jungen Werthers</i> (1774), the first letter. English: R. Dillon Boylan (1854), Project Gutenberg eBook 2527.',
  lat:'Wie froh bin ich, dass ich weg bin! Bester Freund, was ist das Herz des Menschen! Dich zu verlassen, den ich so liebe, von dem ich unzertrennlich war, und froh zu sein!',
  eng:'How happy I am that I am gone! My dear friend, what a thing is the heart of man! To leave you, from whom I have been inseparable, whom I love so dearly, and yet to feel happy!\n— R. Dillon Boylan',
  ctx:'Goethe’s novel is told in letters. The first opens with three exclamations.',
  parts:[
   {t:'Wie froh bin ich', h:'An exclamation with inversion', n:'<em>Wie froh</em>, “how glad,” comes first, and the verb <em>bin</em> follows in second place, before its subject.'},
   {t:'dass ich weg bin', h:'Verb at the end', n:'After <em>dass</em> the verb <em>bin</em> goes to the end.'},
   {t:'Bester Freund', h:'The address', n:'<em>Bester Freund</em>, “best friend,” has no article, and so the adjective takes the strong ending <em>-er</em>.'},
   {t:'was ist das Herz des Menschen', h:'The genitive', n:'<em>Des Menschen</em> is genitive: of man. <em>Mensch</em> is a weak noun and takes <em>-en</em>.'},
   {t:'Dich zu verlassen, den ich so liebe, von dem ich unzertrennlich war', h:'Infinitives and relative clauses', n:'<em>Dich zu verlassen</em> is an infinitive used as an exclamation. <em>Den</em> and <em>von dem</em> are relatives standing for <em>dich</em>: whom I love, from whom I was inseparable.'}],
  qs:[
   {t:'bin ich', q:'Why does <em>bin</em> come before <em>ich</em>?', a:'The verb stays second, and <em>wie froh</em> holds the first place', ds:['It is a question','<em>Ich</em> is the object','German always puts the subject last'], why:'In a main clause the finite verb is second; whatever comes first, the subject follows the verb.'},
   {t:'Bester', q:'<em>Bester</em> has the ending <em>-er</em> because…', a:'There is no article, so the adjective shows the masculine', ds:['It is a comparative','It is genitive','It is plural'], why:'Without an article, the adjective takes the strong ending: <em>bester Freund</em>.'},
   {t:'des Menschen', q:'<em>des Menschen</em> is…', a:'Genitive singular: of man', ds:['Dative plural','Accusative singular','Nominative plural'], why:'<em>Des</em> is the genitive article, and the weak noun <em>Mensch</em> adds <em>-en</em>.'},
   {t:'den ich so liebe', q:'<em>den</em> in <em>den ich so liebe</em> stands for…', a:'<em>dich</em>, the friend', ds:['<em>das Herz</em>','<em>den Menschen</em>','<em>ich</em>'], why:'<em>Den</em> is masculine accusative, object of <em>liebe</em>, and it takes up the friend addressed.'}]},

'de-frosch': {lang:'de', author:'Grimm', work:'Der Froschkönig', locus:'KHM 1', ed:'Jacob and Wilhelm Grimm, <i>Kinder- und Hausmärchen</i> no. 1, text of 1857, Wikisource. English: Margaret Hunt (1884), Project Gutenberg eBook 5314.',
  lat:'In den alten Zeiten, wo das Wünschen noch geholfen hat, lebte ein König, dessen Töchter waren alle schön, aber die jüngste war so schön, dass die Sonne selber, die doch so vieles gesehen hat, sich verwunderte, so oft sie ihr ins Gesicht schien.',
  eng:'In old times when wishing still helped one, there lived a king whose daughters were all beautiful, but the youngest was so beautiful that the sun itself, which has seen so much, was astonished whenever it shone in her face.\n— Margaret Hunt',
  ctx:'The first sentence of the first tale in the Grimms’ collection: one long sentence that moves from the old days to a king, to his daughters, to the youngest, and to the sun.',
  parts:[
   {t:'In den alten Zeiten, wo das Wünschen noch geholfen hat', h:'A time clause with wo', n:'<em>Wo</em>, “where,” serves here for “when.” <em>Das Wünschen</em> is an infinitive made a noun: wishing. <em>Geholfen hat</em> is the perfect, with the verb at the end.'},
   {t:'lebte ein König', h:'The main clause, inverted', n:'The time phrase holds the first place, so the verb <em>lebte</em> comes second and the subject <em>ein König</em> follows.'},
   {t:'dessen Töchter waren alle schön', h:'Dessen, and a main-clause order', n:'<em>Dessen</em>, “whose,” is the genitive relative. The tale keeps the verb second, <em>waren</em>, in the free order of spoken narrative.'},
   {t:'so schön, dass die Sonne selber', h:'So … dass', n:'<em>So schön, dass</em>: so beautiful that. The result clause begins with <em>dass</em>.'},
   {t:'die doch so vieles gesehen hat', h:'A relative inside the result clause', n:'<em>Die</em> takes up <em>die Sonne</em>, and <em>doch</em> adds “after all.”'},
   {t:'sich verwunderte, so oft sie ihr ins Gesicht schien', h:'A reflexive verb and a dative', n:'<em>Sich verwundern</em>, to wonder. <em>So oft</em>, “as often as.” <em>Ihr</em> is dative, the girl: shone into her face.'}],
  qs:[
   {t:'lebte ein König', q:'Why <em>lebte ein König</em> and not <em>ein König lebte</em>?', a:'The time phrase is first, so the verb comes second and the subject after it', ds:['It is a question','<em>König</em> is the object','The verb always comes first in tales'], why:'The finite verb is second in a main clause; the long phrase <em>In den alten Zeiten …</em> fills the first place.'},
   {t:'dessen', q:'<em>dessen</em> is…', a:'The genitive relative: whose', ds:['A demonstrative: that one’s','The dative of <em>der</em>','A conjunction: since'], why:'<em>Dessen Töchter</em>: whose daughters, the king’s.'},
   {t:'die doch so vieles gesehen hat', q:'<em>die</em> here stands for…', a:'<em>die Sonne</em>', ds:['<em>die jüngste</em>','<em>die Töchter</em>','<em>die Zeiten</em>'], why:'It follows <em>die Sonne selber</em> and takes the singular verb <em>hat</em>.'},
   {t:'ihr', q:'<em>ihr</em> in <em>sie ihr ins Gesicht schien</em> is…', a:'Dative: into her face, the girl’s', ds:['The subject: she','The possessive with <em>Gesicht</em>','Accusative: her'], why:'German uses the dative of the person with a part of the body: <em>ihr ins Gesicht</em>.'}]},

'de-rumpel': {lang:'de', author:'Grimm', work:'Rumpelstilzchen', locus:'KHM 55', ed:'Jacob and Wilhelm Grimm, <i>Kinder- und Hausmärchen</i> no. 55, text of 1857, Wikisource. English: Margaret Hunt (1884), Project Gutenberg eBook 5314.',
  lat:'Es war einmal ein Müller, der war arm, aber er hatte eine schöne Tochter.',
  eng:'Once there was a miller who was poor, but who had a beautiful daughter.\n— Margaret Hunt',
  ctx:'The usual opening of a German tale, <em>Es war einmal</em>, “once upon a time there was.”',
  parts:[
   {t:'Es war einmal ein Müller', h:'Es war einmal', n:'<em>Es</em> fills the first place; the subject is <em>ein Müller</em>. <em>Einmal</em>, “once.”'},
   {t:'der war arm', h:'Der: relative or demonstrative?', n:'<em>Der</em> could begin a relative clause, but the verb <em>war</em> stays second, so it is a demonstrative: he was poor. The tale chains plain clauses.'},
   {t:'aber er hatte eine schöne Tochter', h:'Aber', n:'<em>Aber</em> does not move the verb. <em>Eine schöne Tochter</em> is accusative feminine, with the same form as the nominative.'}],
  qs:[
   {t:'ein Müller', q:'The subject of <em>Es war</em> is…', a:'<em>ein Müller</em>', ds:['<em>es</em>','<em>einmal</em>','<em>Tochter</em>'], why:'<em>Es</em> holds the first place; what there was is the miller.'},
   {t:'der war arm', q:'In <em>der war arm</em>, <em>der</em> is…', a:'A demonstrative, since the verb stays second', ds:['A relative, with the verb at the end','The article with <em>arm</em>','A dative'], why:'In a relative clause the verb would be last: <em>der arm war</em>. Here it is second.'},
   {t:'eine schöne Tochter', q:'<em>eine schöne Tochter</em> is…', a:'Accusative feminine, object of <em>hatte</em>', ds:['Nominative, the subject','Dative','Genitive'], why:'<em>Er</em> is the subject; the feminine accusative looks like the nominative.'}]},

'de-dichtung': {lang:'de', author:'Goethe', work:'Dichtung und Wahrheit', locus:'I.1', ed:'Goethe, <i>Aus meinem Leben: Dichtung und Wahrheit</i> (1811), the opening of book 1. English: John Oxenford (1848), Project Gutenberg eBook 5733.',
  lat:'Am 28. August 1749, mittags mit dem Glockenschlage zwölf, kam ich in Frankfurt am Main auf die Welt.',
  eng:'On the 28th of August, 1749, at midday, as the clock struck twelve, I came into the world at Frankfurt-on-the-Main.\n— John Oxenford',
  ctx:'Goethe opens his autobiography with the hour of his birth.',
  parts:[
   {t:'Am 28. August 1749', h:'Dates', n:'<em>Am</em> is <em>an dem</em>. The ordinal is written with a period: <em>am 28.</em>, read <em>am achtundzwanzigsten</em>.'},
   {t:'mittags mit dem Glockenschlage zwölf', h:'An adverb of time and an old dative', n:'<em>Mittags</em>, “at noon,” is an old genitive used as an adverb. <em>Glockenschlage</em> keeps the old dative <em>-e</em>.'},
   {t:'kam ich in Frankfurt am Main auf die Welt', h:'Verb second', n:'The time phrases fill the first place, so <em>kam</em> comes before <em>ich</em>. <em>Auf die Welt kommen</em>: to be born, with the accusative of motion.'}],
  qs:[
   {t:'Am', q:'<em>Am</em> is…', a:'<em>an dem</em>', ds:['<em>an den</em>','<em>auf dem</em>','<em>an das</em>'], why:'<em>An</em> and <em>dem</em> run together, as in <em>am Main</em>.'},
   {t:'mittags', q:'<em>mittags</em> is…', a:'An adverb from an old genitive: at noon', ds:['A plural noun','A dative','A verb'], why:'Like <em>abends</em> and <em>morgens</em>, the <em>-s</em> is an old genitive used for time.'},
   {t:'kam ich', q:'Why <em>kam ich</em>?', a:'The verb stays second after the time phrases', ds:['It is a question','<em>Ich</em> is the object','It is a subjunctive'], why:'Whatever fills the first place, the finite verb comes next.'},
   {t:'auf die Welt', q:'Why <em>die Welt</em> in the accusative?', a:'<em>Auf</em> takes the accusative for motion onto a place', ds:['<em>Auf</em> always takes the accusative','<em>Welt</em> is the object of <em>kam</em>','It is a nominative'], why:'<em>Auf</em> takes the dative for rest and the accusative for motion: to come into the world.'}]},

'de-marx': {lang:'de', author:'Marx and Engels', work:'Manifest der Kommunistischen Partei', locus:'Preamble', ed:'Marx and Engels, <i>Manifest der Kommunistischen Partei</i> (1848), the opening. English: Samuel Moore (1888), Project Gutenberg eBook 61.',
  lat:'Ein Gespenst geht um in Europa – das Gespenst des Kommunismus. Alle Mächte des alten Europa haben sich zu einer heiligen Hetzjagd gegen dies Gespenst verbündet, der Papst und der Zar, Metternich und Guizot, französische Radikale und deutsche Polizisten.',
  eng:'A specter is haunting Europe—the specter of Communism. All the powers of old Europe have entered into a holy alliance to exorcise this specter: Pope and Czar, Metternich and Guizot, French Radicals and German police-spies.\n— Samuel Moore',
  ctx:'The opening of the <em>Manifesto</em>. The second sentence puts its participle at the end and then lists the allies in pairs.',
  parts:[
   {t:'Ein Gespenst geht um in Europa', h:'A separable verb', n:'<em>Umgehen</em>, “to walk about,” said of ghosts, splits: <em>geht … um</em>. The prefix would close the clause, but <em>in Europa</em> is put after it for weight.'},
   {t:'das Gespenst des Kommunismus', h:'Apposition and the genitive', n:'The dash restates the subject. <em>Des Kommunismus</em> is genitive.'},
   {t:'Alle Mächte des alten Europa', h:'The subject', n:'<em>Alle Mächte</em>, plural of <em>Macht</em>. <em>Des alten Europa</em>: place names after an adjective may go without the genitive <em>-s</em>.'},
   {t:'haben sich zu einer heiligen Hetzjagd gegen dies Gespenst verbündet', h:'The perfect brackets the clause', n:'<em>Haben</em> stands second and the participle <em>verbündet</em> closes the clause; all the rest stands between. <em>Zu</em> takes the dative, <em>gegen</em> the accusative.'},
   {t:'französische Radikale und deutsche Polizisten', h:'Adjectives without an article', n:'With no article, the plural adjectives take the strong ending <em>-e</em>.'}],
  qs:[
   {t:'geht um', q:'<em>geht … um</em> is…', a:'The separable verb <em>umgehen</em>, split in a main clause', ds:['<em>Gehen</em> with the preposition <em>um</em> governing <em>Europa</em>','A passive','A perfect'], why:'In a main clause the separable prefix leaves its verb; <em>umgehen</em>, of ghosts, to haunt.'},
   {t:'des Kommunismus', q:'<em>des Kommunismus</em> is…', a:'Genitive: of Communism', ds:['Dative','Nominative','Accusative'], why:'<em>Des</em> marks the genitive masculine.'},
   {t:'verbündet', q:'Why does <em>verbündet</em> stand so far from <em>haben</em>?', a:'The participle closes the clause, and the rest goes between', ds:['It belongs to the next clause','It is an adjective','It is a dependent clause'], why:'German brackets the clause: auxiliary second, participle last.'},
   {t:'deutsche Polizisten', q:'<em>deutsche</em> has the ending <em>-e</em> because…', a:'It is plural with no article, the strong ending', ds:['<em>Polizisten</em> is feminine','It is dative','It is singular'], why:'Without an article, the adjective shows the case: nominative plural <em>-e</em>.'}]},

'de-zara': {lang:'de', author:'Nietzsche', work:'Also sprach Zarathustra', locus:'Vorrede 1', ed:'Nietzsche, <i>Also sprach Zarathustra</i> (1883), the opening of the prologue. English: Thomas Common (1909), Project Gutenberg eBook 1998.',
  lat:'Als Zarathustra dreißig Jahr alt war, verließ er seine Heimat und den See seiner Heimat und ging in das Gebirge. Hier genoss er seines Geistes und seiner Einsamkeit und wurde dessen zehn Jahre nicht müde.',
  eng:'When Zarathustra was thirty years old, he left his home and the lake of his home, and went into the mountains. There he enjoyed his spirit and solitude, and for ten years did not weary of it.\n— Thomas Common',
  ctx:'The beginning of the prologue. Nietzsche writes in a biblical manner, and he keeps old genitive objects with <em>genießen</em> and <em>müde</em>.',
  parts:[
   {t:'Als Zarathustra dreißig Jahr alt war', h:'Als: a single past event', n:'<em>Als</em>, “when,” for one past occasion, sends the verb to the end. <em>Dreißig Jahr</em>: measures often stay singular.'},
   {t:'verließ er seine Heimat', h:'Verb first after the clause', n:'The <em>als</em> clause fills the first place, so <em>verließ</em> comes next, then the subject <em>er</em>.'},
   {t:'den See seiner Heimat', h:'The genitive', n:'<em>Seiner Heimat</em>, genitive feminine: the lake of his home.'},
   {t:'genoss er seines Geistes und seiner Einsamkeit', h:'An old genitive object', n:'<em>Genießen</em> now takes the accusative; here it has the older genitive: <em>seines Geistes</em>, <em>seiner Einsamkeit</em>.'},
   {t:'wurde dessen zehn Jahre nicht müde', h:'Müde with the genitive', n:'<em>Einer Sache müde werden</em>: to grow weary of a thing. <em>Dessen</em>, “of that,” is genitive. <em>Zehn Jahre</em> is an accusative of time.'}],
  qs:[
   {t:'Als', q:'Why <em>als</em> and not <em>wenn</em>?', a:'<em>Als</em> is used for a single event in the past', ds:['<em>Wenn</em> cannot begin a clause','<em>Als</em> means “if”','Both are wrong; it should be <em>wann</em>'], why:'<em>Als</em> for one past occasion; <em>wenn</em> for repeated or future ones.'},
   {t:'verließ er', q:'<em>verließ er</em>: why does the verb come first in its clause?', a:'The <em>als</em> clause holds the first place', ds:['It is a question','It is a command','<em>Er</em> is the object'], why:'A dependent clause in front counts as the first element; the verb follows.'},
   {t:'seines Geistes', q:'<em>seines Geistes</em> is…', a:'A genitive object of <em>genoss</em>', ds:['A dative','A possessive of <em>er</em>','The subject'], why:'Older German puts the object of <em>genießen</em> in the genitive.'},
   {t:'zehn Jahre', q:'<em>zehn Jahre</em> is…', a:'An accusative of time: for ten years', ds:['The subject of <em>wurde</em>','A genitive','A dative'], why:'German gives a stretch of time in the accusative, without a preposition.'}]},

'de-schop': {lang:'de', author:'Schopenhauer', work:'Die Welt als Wille und Vorstellung', locus:'I.1', ed:'Schopenhauer, <i>Die Welt als Wille und Vorstellung</i> (1819), § 1, in modern spelling. English: R. B. Haldane and J. Kemp (1883), Project Gutenberg eBook 38427.',
  lat:'„Die Welt ist meine Vorstellung“: – dies ist eine Wahrheit, welche in Beziehung auf jedes lebende und erkennende Wesen gilt; wiewohl der Mensch allein sie in das reflektierte abstrakte Bewusstsein bringen kann.',
  eng:'“The world is my idea”: this is a truth which holds good for everything that lives and knows, though man alone can bring it into reflective and abstract consciousness.\n— R. B. Haldane and J. Kemp',
  ctx:'The first words of Schopenhauer’s chief work: a thesis, then a relative clause, then a concession.',
  parts:[
   {t:'dies ist eine Wahrheit', h:'Dies', n:'<em>Dies</em>, “this,” sums up the quoted thesis. It stays neuter whatever the noun that follows.'},
   {t:'welche in Beziehung auf jedes lebende und erkennende Wesen gilt', h:'Welche, and present participles', n:'<em>Welche</em> is a relative, like <em>die</em>, standing for <em>Wahrheit</em>; <em>gilt</em> goes to the end. <em>Lebende</em> and <em>erkennende</em> are present participles used as adjectives: living and knowing.'},
   {t:'wiewohl der Mensch allein sie', h:'A concession', n:'<em>Wiewohl</em>, “although,” begins a dependent clause. <em>Sie</em> is the truth.'},
   {t:'in das reflektierte abstrakte Bewusstsein bringen kann', h:'Motion and the accusative', n:'<em>In das</em>, “into,” with the accusative of motion. The modal <em>kann</em> closes the clause after its infinitive.'}],
  qs:[
   {t:'welche', q:'<em>welche</em> stands for…', a:'<em>eine Wahrheit</em>', ds:['<em>die Welt</em>','<em>meine Vorstellung</em>','<em>jedes Wesen</em>'], why:'It follows <em>Wahrheit</em> and is feminine singular.'},
   {t:'lebende', q:'<em>lebende</em> is…', a:'A present participle used as an adjective', ds:['A past participle','An infinitive','A noun'], why:'The present participle adds <em>-d</em> to the infinitive: <em>leben</em>, <em>lebend</em>, with the ending <em>-e</em>.'},
   {t:'sie', q:'<em>sie</em> in <em>der Mensch allein sie … bringen kann</em> is…', a:'The truth, object of <em>bringen</em>', ds:['Man, the subject','The beings, plural','The world'], why:'<em>Der Mensch</em> is the subject; <em>sie</em>, feminine accusative, takes up <em>Wahrheit</em>.'},
   {t:'in das', q:'Why <em>in das</em> and not <em>in dem</em>?', a:'Motion into a thing takes the accusative', ds:['<em>In</em> always takes the accusative','<em>Bewusstsein</em> is masculine','It is a genitive'], why:'<em>In</em> takes the accusative for motion and the dative for rest.'}]},

'de-kohlhaas': {lang:'de', author:'Kleist', work:'Michael Kohlhaas', locus:'opening', ed:'Heinrich von Kleist, <i>Michael Kohlhaas</i> (1810), the first sentence, in modern spelling. English: Frances A. King, in <i>The German Classics</i>, vol. 4 (1913), Project Gutenberg eBook 12060.',
  lat:'An den Ufern der Havel lebte, um die Mitte des sechzehnten Jahrhunderts, ein Rosshändler, namens Michael Kohlhaas, Sohn eines Schulmeisters, einer der rechtschaffensten zugleich und entsetzlichsten Menschen seiner Zeit.',
  eng:'Toward the middle of the sixteenth century there lived on the banks of the river Havel a horse-dealer by the name of Michael Kohlhaas, the son of a schoolmaster, one of the most upright and, at the same time, one of the most terrible men of his day.\n— Frances A. King',
  ctx:'Kleist’s famous opening: the subject is put off past a place and a time, and is then followed by three appositions, the last a paradox.',
  parts:[
   {t:'An den Ufern der Havel lebte', h:'Verb second', n:'<em>An den Ufern</em>, dative plural, holds the first place, so <em>lebte</em> comes next. <em>Der Havel</em> is genitive feminine.'},
   {t:'um die Mitte des sechzehnten Jahrhunderts', h:'A time phrase', n:'<em>Um</em> takes the accusative: about the middle. <em>Des … Jahrhunderts</em> is genitive.'},
   {t:'ein Rosshändler, namens Michael Kohlhaas', h:'The subject, at last', n:'<em>Ein Rosshändler</em> is the subject. <em>Namens</em>, “by name,” is an old genitive used as a preposition.'},
   {t:'Sohn eines Schulmeisters', h:'Apposition', n:'<em>Sohn</em> stands in apposition without an article. <em>Eines Schulmeisters</em> is genitive.'},
   {t:'einer der rechtschaffensten zugleich und entsetzlichsten Menschen seiner Zeit', h:'Superlatives and the genitive plural', n:'<em>Einer der …</em>, “one of the,” with the genitive plural. <em>Rechtschaffensten</em> and <em>entsetzlichsten</em> are superlatives, joined by <em>zugleich und</em>, “at once … and.”'}],
  qs:[
   {t:'lebte', q:'The subject of <em>lebte</em> is…', a:'<em>ein Rosshändler</em>', ds:['<em>die Ufer</em>','<em>die Havel</em>','<em>die Mitte</em>'], why:'Place and time come first, and the subject waits until after them.'},
   {t:'um die Mitte', q:'<em>um</em> takes…', a:'The accusative', ds:['The dative','The genitive','The dative or accusative'], why:'<em>Um</em>, like <em>durch</em>, <em>für</em>, <em>gegen</em>, <em>ohne</em>, takes only the accusative.'},
   {t:'namens', q:'<em>namens</em> means…', a:'By name, named', ds:['Of the names','In the name of God','Nameless'], why:'An old genitive of <em>Name</em> used as a preposition.'},
   {t:'einer der rechtschaffensten', q:'<em>einer der rechtschaffensten … Menschen</em> is…', a:'“One of the most upright men,” with the genitive plural', ds:['A dative singular','“The most upright of one man”','A comparative'], why:'<em>Einer</em> agrees with <em>Mensch</em>, masculine; <em>der … Menschen</em> is genitive plural.'}]},

'de-haensel': {lang:'de', author:'Grimm', work:'Hänsel und Gretel', locus:'KHM 15', ed:'Jacob and Wilhelm Grimm, <i>Kinder- und Hausmärchen</i> no. 15, text of 1857, Wikisource, in modern spelling. English: Margaret Hunt (1884), Project Gutenberg eBook 5314.',
  lat:'Vor einem großen Walde wohnte ein armer Holzhacker mit seiner Frau und seinen zwei Kindern; das Bübchen hieß Hänsel und das Mädchen Gretel.',
  eng:'Hard by a great forest dwelt a poor woodcutter with his wife and his two children. The boy was called Hansel and the girl Gretel.\n— Margaret Hunt',
  ctx:'The opening of the tale. Watch the datives after <em>vor</em> and <em>mit</em>, and the gender of the little words.',
  parts:[
   {t:'Vor einem großen Walde', h:'Vor with the dative', n:'<em>Vor</em>, of place at rest, takes the dative: <em>einem großen Walde</em>, with the old dative <em>-e</em>.'},
   {t:'wohnte ein armer Holzhacker', h:'Verb second', n:'The place phrase is first, so <em>wohnte</em> comes next, then the subject.'},
   {t:'mit seiner Frau und seinen zwei Kindern', h:'Mit with the dative', n:'<em>Mit</em> always takes the dative: <em>seiner Frau</em>, and <em>seinen zwei Kindern</em> with the dative plural <em>-n</em>.'},
   {t:'das Bübchen hieß Hänsel', h:'Diminutives are neuter', n:'<em>Bübchen</em>, “little boy,” and <em>Mädchen</em> are neuter because of <em>-chen</em>.'}],
  qs:[
   {t:'einem großen Walde', q:'<em>einem großen Walde</em> is dative because…', a:'<em>vor</em> takes the dative for place at rest', ds:['<em>vor</em> always takes the dative','It is the indirect object of <em>wohnte</em>','It is the subject'], why:'<em>Vor</em> is a two-way preposition; the house stands before the forest, at rest.'},
   {t:'ein armer Holzhacker', q:'The subject of <em>wohnte</em> is…', a:'<em>ein armer Holzhacker</em>', ds:['<em>einem großen Walde</em>','<em>seiner Frau</em>','<em>das Bübchen</em>'], why:'Nominative masculine: <em>ein armer</em>.'},
   {t:'Kindern', q:'Why <em>Kindern</em> and not <em>Kinder</em>?', a:'The dative plural adds <em>-n</em>', ds:['It is genitive','It is a diminutive','It is singular'], why:'After <em>mit</em>, dative; nouns add <em>-n</em> in the dative plural.'},
   {t:'das Bübchen', q:'Why <em>das Bübchen</em>, though it is a boy?', a:'Nouns in <em>-chen</em> are neuter', ds:['It is a mistake','<em>Bube</em> is neuter','It is plural'], why:'The diminutive <em>-chen</em> makes any noun neuter, as in <em>das Mädchen</em>.'}]},

'de-stern': {lang:'de', author:'Grimm', work:'Die Sterntaler', locus:'KHM 153', ed:'Jacob and Wilhelm Grimm, <i>Kinder- und Hausmärchen</i> no. 153, text of 1857, Wikisource, in modern spelling. English: Margaret Hunt (1884), Project Gutenberg eBook 5314.',
  lat:'Es war einmal ein kleines Mädchen, dem war Vater und Mutter gestorben, und es war so arm, dass es kein Kämmerchen mehr hatte, darin zu wohnen, und kein Bettchen mehr, darin zu schlafen.',
  eng:'There was once upon a time a little girl whose father and mother were dead, and she was so poor that she no longer had any little room to live in, or bed to sleep in.\n— Margaret Hunt',
  ctx:'The opening of the Star-Money. The girl is <em>es</em>, “it,” throughout, because <em>Mädchen</em> is neuter.',
  parts:[
   {t:'ein kleines Mädchen', h:'Ein with a neuter', n:'<em>Ein</em> has no ending in the neuter nominative, so the adjective shows it: <em>kleines</em>.'},
   {t:'dem war Vater und Mutter gestorben', h:'A dative of the one who suffers loss', n:'<em>Dem</em>, dative, takes up the girl: to whom father and mother had died. <em>War … gestorben</em> is the past perfect with <em>sein</em>, as with verbs of change. The singular <em>war</em> treats the pair as one.'},
   {t:'und es war so arm', h:'Es for the girl', n:'<em>Es</em> agrees with <em>Mädchen</em>, which is neuter.'},
   {t:'dass es kein Kämmerchen mehr hatte, darin zu wohnen', h:'Kein … mehr, and darin', n:'<em>Kein … mehr</em>: no longer any. <em>Darin zu wohnen</em>, “to live in it,” is an infinitive with <em>zu</em>; <em>darin</em> stands for <em>in dem</em>.'}],
  qs:[
   {t:'kleines', q:'Why <em>kleines</em>?', a:'<em>Mädchen</em> is neuter, and <em>ein</em> has no ending', ds:['It is genitive','It is plural','It is a comparative'], why:'After <em>ein</em> the neuter nominative adjective takes <em>-es</em>.'},
   {t:'dem', q:'<em>dem</em> in <em>dem war Vater und Mutter gestorben</em> is…', a:'Dative: the girl, to whom they had died', ds:['The article with <em>Vater</em>','The subject','Accusative'], why:'The dative marks the person affected by the loss.'},
   {t:'war Vater und Mutter gestorben', q:'<em>war … gestorben</em> is…', a:'The past perfect, formed with <em>sein</em>', ds:['A passive','The simple past','A subjunctive'], why:'<em>Sterben</em>, a change of state, takes <em>sein</em>: <em>ist gestorben</em>, <em>war gestorben</em>.'},
   {t:'es war so arm', q:'Why <em>es</em> and not <em>sie</em> for the girl?', a:'It agrees with the neuter <em>Mädchen</em>', ds:['<em>Es</em> means “there”','It is a mistake','It refers to the room'], why:'The pronoun follows the grammatical gender of <em>das Mädchen</em>.'}]},

'de-fw125': {lang:'de', author:'Nietzsche', work:'Die fröhliche Wissenschaft', locus:'125', ed:'Nietzsche, <i>Die fröhliche Wissenschaft</i> (1882), § 125, “Der tolle Mensch.” English: Thomas Common (1910), Project Gutenberg eBook 52881.',
  lat:'Gott ist tot! Gott bleibt tot! Und wir haben ihn getötet! Wie trösten wir uns, die Mörder aller Mörder?',
  eng:'God is dead! God remains dead! And we have killed him! How shall we console ourselves, the most murderous of all murderers?\n— Thomas Common',
  ctx:'The madman in the marketplace. Note <em>tot</em>, the adjective, beside <em>getötet</em>, the participle of <em>töten</em>.',
  parts:[
   {t:'Gott ist tot! Gott bleibt tot!', h:'Predicate adjectives', n:'<em>Tot</em>, “dead,” after <em>sein</em> and <em>bleiben</em>, has no ending.'},
   {t:'Und wir haben ihn getötet', h:'The perfect', n:'<em>Haben … getötet</em>: have killed. <em>Ihn</em> is accusative masculine, God.'},
   {t:'Wie trösten wir uns', h:'A question and a reflexive', n:'In a question with <em>wie</em>, the verb comes second and the subject after it. <em>Uns</em> is reflexive: comfort ourselves.'},
   {t:'die Mörder aller Mörder', h:'Apposition and the genitive plural', n:'<em>Die Mörder</em> stands in apposition to <em>wir</em>; <em>aller Mörder</em> is genitive plural: of all murderers.'}],
  qs:[
   {t:'tot', q:'<em>tot</em> is…', a:'A predicate adjective, with no ending', ds:['A past participle','A noun','An adverb of time'], why:'After <em>ist</em>, the adjective takes no ending.'},
   {t:'getötet', q:'<em>getötet</em> is the participle of…', a:'<em>töten</em>, to kill', ds:['<em>tot sein</em>, to be dead','<em>sterben</em>, to die','<em>tun</em>, to do'], why:'<em>Töten</em>, a weak verb: <em>ge-töt-et</em>.'},
   {t:'uns', q:'<em>uns</em> in <em>Wie trösten wir uns</em> is…', a:'Reflexive: ourselves', ds:['Dative: to us, by others','The subject','A possessive'], why:'The object is the same as the subject <em>wir</em>.'},
   {t:'aller Mörder', q:'<em>aller Mörder</em> is…', a:'Genitive plural: of all murderers', ds:['Nominative singular','Dative plural','Accusative plural'], why:'<em>Aller</em> is the genitive plural of <em>alle</em>.'}]},

'de-clausewitz': {lang:'de', author:'Clausewitz', work:'Vom Kriege', locus:'I.1.24', ed:'Clausewitz, <i>Vom Kriege</i> (1832), book I, chapter 1, § 24. English: J. J. Graham (1873), Project Gutenberg eBook 1946.',
  lat:'Der Krieg ist eine bloße Fortsetzung der Politik mit anderen Mitteln. Wir sehen also, dass der Krieg nicht bloß ein politischer Akt, sondern ein wahres politisches Instrument ist, eine Fortsetzung des politischen Verkehrs, ein Durchführen desselben mit anderen Mitteln.',
  eng:'War is a mere continuation of policy by other means. We see, therefore, that war is not merely a political act, but also a real political instrument, a continuation of political commerce, a carrying out of the same by other means.\n— J. J. Graham',
  ctx:'The heading of § 24 and its first sentence. Clausewitz states the thesis, and then restates it in a <em>dass</em> clause with three appositions after the verb.',
  parts:[
   {t:'Der Krieg ist eine bloße Fortsetzung der Politik', h:'The thesis', n:'<em>Eine bloße Fortsetzung</em>, “a mere continuation,” is the predicate nominative. <em>Der Politik</em> is genitive feminine.'},
   {t:'mit anderen Mitteln', h:'Mit and the dative plural', n:'<em>Mitteln</em>, dative plural with <em>-n</em>.'},
   {t:'dass der Krieg nicht bloß ein politischer Akt, sondern ein wahres politisches Instrument ist', h:'Nicht bloß … sondern', n:'<em>Nicht bloß … sondern</em>: not merely … but. After <em>dass</em>, the verb <em>ist</em> waits to the end.'},
   {t:'eine Fortsetzung des politischen Verkehrs, ein Durchführen desselben', h:'Apposition after the verb', n:'Three phrases restate <em>Instrument</em> after the clause is closed. <em>Ein Durchführen</em> is an infinitive made a noun; <em>desselben</em>, genitive, takes up <em>Verkehr</em>.'}],
  qs:[
   {t:'der Politik', q:'<em>der Politik</em> is…', a:'Genitive feminine: of policy', ds:['Nominative masculine','Dative masculine','Accusative feminine'], why:'Feminine nouns show the genitive only in the article: <em>der</em>.'},
   {t:'Mitteln', q:'Why <em>Mitteln</em>?', a:'Dative plural after <em>mit</em>', ds:['Genitive singular','Accusative plural','It is a verb'], why:'<em>Mit</em> takes the dative; the plural adds <em>-n</em>.'},
   {t:'sondern', q:'Why <em>sondern</em> and not <em>aber</em>?', a:'After a negative, <em>sondern</em> gives the correction: not this but that', ds:['<em>Aber</em> cannot follow <em>nicht</em>','<em>Sondern</em> means “although”','They are the same'], why:'<em>Sondern</em> replaces what was denied.'},
   {t:'desselben', q:'<em>desselben</em> stands for…', a:'<em>des politischen Verkehrs</em>', ds:['<em>der Krieg</em>','<em>Instrument</em>','<em>Akt</em>'], why:'A carrying-out of the same: of political commerce.'}]},

'de-jgb': {lang:'de', author:'Nietzsche', work:'Jenseits von Gut und Böse', locus:'Vorrede', ed:'Nietzsche, <i>Jenseits von Gut und Böse</i> (1886), the opening of the preface. English: Helen Zimmern (1907), Project Gutenberg eBook 4363.',
  lat:'Vorausgesetzt, dass die Wahrheit ein Weib ist –, wie? ist der Verdacht nicht gegründet, dass alle Philosophen, sofern sie Dogmatiker waren, sich schlecht auf Weiber verstanden?',
  eng:'Supposing that Truth is a woman—what then? Is there not ground for suspecting that all philosophers, in so far as they have been dogmatists, have failed to understand women?\n— Helen Zimmern',
  ctx:'The first words of <em>Beyond Good and Evil</em>: a supposition, then a question with a <em>dass</em> clause that holds another clause inside it.',
  parts:[
   {t:'Vorausgesetzt, dass die Wahrheit ein Weib ist', h:'A participle for a condition', n:'<em>Vorausgesetzt</em>, “supposed in advance,” is a past participle standing alone: supposing that.'},
   {t:'ist der Verdacht nicht gegründet', h:'A yes-or-no question', n:'The verb comes first: <em>ist</em>. <em>Gegründet</em>, “founded,” is the predicate.'},
   {t:'sofern sie Dogmatiker waren', h:'A clause inside a clause', n:'<em>Sofern</em>, “in so far as,” stands inside the <em>dass</em> clause, with its own verb at the end.'},
   {t:'sich schlecht auf Weiber verstanden', h:'Sich verstehen auf', n:'<em>Sich auf etwas verstehen</em>: to understand a thing, to be skilled in it. <em>Verstanden</em> here is the simple past plural, closing the <em>dass</em> clause.'}],
  qs:[
   {t:'Vorausgesetzt', q:'<em>Vorausgesetzt</em> is…', a:'A past participle used for a condition: supposing', ds:['An imperative','A noun','A present participle'], why:'Like English “granted,” the participle stands alone before a <em>dass</em> clause.'},
   {t:'ist der Verdacht', q:'Why does <em>ist</em> come first?', a:'It is a yes-or-no question', ds:['It follows <em>wie</em>','It is a command','It is a dependent clause'], why:'Questions without a question word put the verb first.'},
   {t:'sofern sie Dogmatiker waren', q:'<em>sofern sie Dogmatiker waren</em> is…', a:'A clause nested inside the <em>dass</em> clause', ds:['The main clause','A relative clause on <em>Weiber</em>','A question'], why:'The <em>dass</em> clause begins, pauses for <em>sofern …</em>, and closes with <em>verstanden</em>.'},
   {t:'verstanden', q:'<em>verstanden</em> here is…', a:'Simple past plural: they understood', ds:['A past participle','An infinitive','A present tense'], why:'<em>Verstehen</em>, <em>verstand</em>, <em>verstanden</em>: the plural past and the participle look alike; with no auxiliary, it is the past.'}]},

'de-erl': {lang:'de', author:'Goethe', work:'Erlkönig', locus:'1–4', meter:'four-beat lines, iambs mixed with anapests, in rhymed couplets', ed:'Goethe, “Erlkönig” (1782), lines 1–4. English: Edgar Alfred Bowring (1853), Project Gutenberg eBook 1287.',
  lat:'Wer reitet so spät durch Nacht und Wind?\nEs ist der Vater mit seinem Kind;\nEr hat den Knaben wohl in dem Arm,\nEr fasst ihn sicher, er hält ihn warm.',
  eng:'Who rides there so late through the night dark and drear?\nThe father it is, with his infant so dear;\nHe holds the boy tightly clasped in his arm,\nHe holds him safely, he keeps him warm.\n— Edgar Alfred Bowring',
  ctx:'The opening of Goethe’s ballad. Each line has four beats, and the unstressed syllables between them vary, one or two, which gives the gallop.',
  parts:[
   {t:'Wer reitet so spät durch Nacht und Wind?', h:'A question and the beat', n:'<em>Wer</em>, “who,” begins the question. Four beats: <em>wer REI-tet so SPÄT durch NACHT und WIND</em>. <em>Durch</em> takes the accusative.'},
   {t:'Es ist der Vater mit seinem Kind', h:'Es ist', n:'<em>Es ist der Vater</em>: it is the father. <em>Mit seinem Kind</em>, dative.'},
   {t:'Er hat den Knaben wohl in dem Arm', h:'A weak noun', n:'<em>Den Knaben</em>: <em>Knabe</em> is a weak noun and takes <em>-n</em> in the accusative. <em>In dem Arm</em>, dative of rest.'},
   {t:'Er fasst ihn sicher, er hält ihn warm', h:'Adjectives as adverbs and as complements', n:'<em>Sicher</em>, “securely,” is an adjective used as an adverb with no ending. <em>Warm</em> says what state he keeps him in.'}],
  qs:[
   {t:'Wer reitet', q:'How many beats are in <em>Wer reitet so spät durch Nacht und Wind?</em>', a:'Four', ds:['Five','Three','Six'], why:'REI, SPÄT, NACHT, WIND.'},
   {t:'seinem Kind', q:'<em>seinem Kind</em> is dative because…', a:'<em>mit</em> takes the dative', ds:['It is the indirect object','It is plural','It follows <em>Vater</em>'], why:'<em>Mit</em> always takes the dative.'},
   {t:'den Knaben', q:'Why <em>Knaben</em> and not <em>Knabe</em>?', a:'<em>Knabe</em> is a weak noun: <em>-n</em> in the accusative', ds:['It is plural','It is genitive','It is a diminutive'], why:'Weak masculine nouns add <em>-n</em> outside the nominative singular.'},
   {t:'in dem Arm', q:'<em>in dem Arm</em> is dative because…', a:'It tells where, at rest', ds:['<em>in</em> always takes the dative','<em>Arm</em> is feminine','It is a genitive'], why:'<em>In</em> takes the dative for rest and the accusative for motion.'}]},

'de-gipfel': {lang:'de', author:'Goethe', work:'Wandrers Nachtlied II (Ein Gleiches)', locus:'1–8', meter:'free short lines with varied stresses', ed:'Goethe, “Ein Gleiches” (1780), complete. English: Henry Wadsworth Longfellow, Project Gutenberg eBook 1365.',
  lat:'Über allen Gipfeln\nIst Ruh’,\nIn allen Wipfeln\nSpürest du\nKaum einen Hauch;\nDie Vögelein schweigen im Walde.\nWarte nur, balde\nRuhest du auch.',
  eng:'O’er all the hilltops\nIs quiet now,\nIn all the treetops\nYou hear\nHardly a breath;\nThe birds are asleep in the trees:\nWait; soon like these\nYou too shall rest.\n— Henry Wadsworth Longfellow',
  ctx:'Goethe wrote these lines on the wall of a hut on the Kickelhahn. The lines are short and their stresses vary: one, two or three.',
  parts:[
   {t:'Über allen Gipfeln\nIst Ruh’', h:'The verb after a phrase', n:'<em>Über allen Gipfeln</em>, dative plural of rest, holds the first place, so <em>ist</em> comes next. <em>Ruh’</em> is <em>Ruhe</em>, cut for the meter.'},
   {t:'Spürest du', h:'An older verb form', n:'<em>Spürest</em> for <em>spürst</em>: the older form keeps the <em>-e-</em>, for the meter.'},
   {t:'Kaum einen Hauch', h:'The object', n:'<em>Einen Hauch</em>, accusative masculine, object of <em>spürest</em>.'},
   {t:'Die Vögelein schweigen im Walde', h:'Diminutive and dative', n:'<em>Vögelein</em>, “little birds,” a diminutive in <em>-lein</em>. <em>Im Walde</em>, with the old dative <em>-e</em>.'},
   {t:'Warte nur, balde\nRuhest du auch', h:'Imperative and rhyme', n:'<em>Warte</em> is the imperative. <em>Balde</em> for <em>bald</em>, an old form kept to rhyme with <em>Walde</em>.'}],
  qs:[
   {t:'allen Gipfeln', q:'<em>allen Gipfeln</em> is…', a:'Dative plural, after <em>über</em> for rest', ds:['Accusative plural','Genitive plural','Nominative plural'], why:'Nothing moves: <em>über</em> takes the dative, and the plural adds <em>-n</em>.'},
   {t:'Spürest', q:'<em>Spürest</em> is…', a:'An older form of <em>spürst</em>, you feel', ds:['A subjunctive','A past tense','An imperative'], why:'The extra syllable fills the meter.'},
   {t:'Vögelein', q:'<em>Vögelein</em> is…', a:'A diminutive: little birds', ds:['A genitive','A feminine noun','A verb'], why:'<em>-lein</em>, like <em>-chen</em>, makes a neuter diminutive.'},
   {t:'balde', q:'Why <em>balde</em>?', a:'An old form of <em>bald</em>, kept to rhyme with <em>Walde</em>', ds:['It is a dative','It is a noun','It is a misprint'], why:'The old form gives the rhyme <em>Walde</em>/<em>balde</em>.'}]},

'de-lorelei': {lang:'de', author:'Heine', work:'Die Lorelei', locus:'1–4', meter:'three-beat lines, iambs mixed with anapests, rhymed abab', ed:'Heine, “Ich weiß nicht, was soll es bedeuten” (1824), stanza 1. English: Mark Twain, <i>A Tramp Abroad</i> (1880), Project Gutenberg eBook 119.',
  lat:'Ich weiß nicht, was soll es bedeuten,\nDass ich so traurig bin;\nEin Märchen aus alten Zeiten,\nDas kommt mir nicht aus dem Sinn.',
  eng:'I cannot divine what it means,\nThis haunting nameless pain:\nA tale of the bygone ages\nKeeps brooding through my brain:\n— Mark Twain',
  ctx:'The first stanza of the Lorelei. Mark Twain gives his own translation in <em>A Tramp Abroad</em>, after mocking a worse one.',
  parts:[
   {t:'Ich weiß nicht, was soll es bedeuten', h:'A question kept in main-clause order', n:'<em>Was soll es bedeuten</em> keeps the order of a direct question, though it depends on <em>ich weiß nicht</em>; plain prose would say <em>was es bedeuten soll</em>.'},
   {t:'Dass ich so traurig bin', h:'Dass', n:'The verb <em>bin</em> goes to the end. The clause says what <em>es</em> stands for.'},
   {t:'Ein Märchen aus alten Zeiten', h:'Aus with the dative', n:'<em>Aus alten Zeiten</em>, dative plural, strong ending with no article.'},
   {t:'Das kommt mir nicht aus dem Sinn', h:'A demonstrative takes up the subject', n:'<em>Das</em> repeats <em>ein Märchen</em>, and the verb stays second. <em>Mir</em> is dative: out of my mind.'}],
  qs:[
   {t:'was soll es bedeuten', q:'What is unusual about <em>was soll es bedeuten</em>?', a:'It keeps question order, though it is a dependent clause', ds:['<em>Soll</em> is a noun','It has no verb','It is in the past'], why:'Prose would put the verb last: <em>was es bedeuten soll</em>.'},
   {t:'bin', q:'Why does <em>bin</em> stand at the end of line 2?', a:'It follows <em>dass</em>, a dependent clause', ds:['For the rhyme only','It is an infinitive','It is a question'], why:'After <em>dass</em> the finite verb goes last; the rhyme with <em>Sinn</em> falls there too.'},
   {t:'Das kommt', q:'<em>Das</em> in <em>Das kommt mir nicht aus dem Sinn</em> is…', a:'A demonstrative taking up <em>ein Märchen</em>', ds:['A relative, verb last','The article of <em>Sinn</em>','A conjunction'], why:'The verb <em>kommt</em> is second, so <em>das</em> begins a main clause.'},
   {t:'mir', q:'<em>mir</em> is…', a:'Dative: out of my mind', ds:['Accusative: me','Nominative: I','A possessive'], why:'German often uses the dative of the person instead of a possessive.'}]},

'de-heiden': {lang:'de', author:'Goethe', work:'Heidenröslein', locus:'1–7', meter:'trochaic, four and three beats, with a refrain', ed:'Goethe, “Heidenröslein” (1771/1789), stanza 1. English: Edgar Alfred Bowring (1853), “The Heathrose,” Project Gutenberg eBook 1287.',
  lat:'Sah ein Knab’ ein Röslein stehn,\nRöslein auf der Heiden,\nWar so jung und morgenschön,\nLief er schnell, es nah zu sehn,\nSah’s mit vielen Freuden.\nRöslein, Röslein, Röslein rot,\nRöslein auf der Heiden.',
  eng:'Once a boy a rosebud spied,\nHeathrose fair and tender,\nAll arrayed in youthful pride—\nQuickly to the spot he hied,\nRavished by her splendor.\nRosebud, rosebud, rosebud red,\nHeathrose fair and tender!\n— Edgar Alfred Bowring',
  ctx:'A song in the manner of a folk song. The lines are trochaic and the subject <em>er</em> is often dropped, as in folk verse.',
  parts:[
   {t:'Sah ein Knab’ ein Röslein stehn', h:'Verb first, and sehen with an infinitive', n:'Folk verse begins with the verb: <em>sah ein Knab’</em>. <em>Sehen</em> with a bare infinitive: saw a rose stand. <em>Stehn</em> is <em>stehen</em> shortened. Trochees: <em>SAH ein KNAB ein RÖS-lein STEHN</em>.'},
   {t:'Röslein auf der Heiden', h:'An old dative', n:'<em>Auf der Heiden</em>, an old dative of <em>Heide</em>, heath, kept for the rhyme with <em>Freuden</em>.'},
   {t:'War so jung und morgenschön', h:'A dropped subject', n:'The subject, the rose, is left out: it was so young and fair as morning.'},
   {t:'Lief er schnell, es nah zu sehn', h:'An infinitive of purpose', n:'<em>Es nah zu sehn</em>, “to see it close.” <em>Es</em> is the <em>Röslein</em>, neuter.'},
   {t:'Sah’s mit vielen Freuden', h:'Contraction', n:'<em>Sah’s</em> is <em>sah es</em>. <em>Mit vielen Freuden</em>, dative plural.'}],
  qs:[
   {t:'Sah ein Knab’', q:'The first stress falls on…', a:'<em>Sah</em>: the line is trochaic', ds:['<em>ein</em>','<em>Knab’</em> only','No syllable: it is free verse'], why:'SAH ein KNAB ein RÖS-lein STEHN: stressed, unstressed.'},
   {t:'stehn', q:'<em>stehn</em> after <em>sah</em> is…', a:'A bare infinitive: saw a rose standing', ds:['A past participle','A noun','A plural verb'], why:'<em>Sehen</em> takes an infinitive without <em>zu</em>.'},
   {t:'Heiden', q:'<em>der Heiden</em> is…', a:'An old dative of <em>Heide</em>, heath', ds:['Genitive plural: of the heathens','Nominative plural','A verb'], why:'The old weak ending <em>-n</em> survives here for the rhyme.'},
   {t:'es nah zu sehn', q:'<em>es</em> in <em>es nah zu sehn</em> is…', a:'The rose, <em>das Röslein</em>', ds:['The boy','The heath','“There”'], why:'<em>Röslein</em> is neuter, so the pronoun is <em>es</em>.'}]},

'de-burg': {lang:'de', author:'Luther', work:'Ein feste Burg ist unser Gott', locus:'1–4', meter:'iambic, eight- and seven-syllable lines', ed:'Martin Luther, “Ein feste Burg ist unser Gott” (1529), stanza 1, lines 1–4. English: Thomas Carlyle (1831).',
  lat:'Ein feste Burg ist unser Gott,\nEin gute Wehr und Waffen.\nEr hilft uns frei aus aller Not,\nDie uns jetzt hat betroffen.',
  eng:'A safe stronghold our God is still,\nA trusty shield and weapon;\nHe’ll help us clear from all the ill\nThat has us now o’ertaken.\n— Thomas Carlyle',
  ctx:'Luther’s hymn. His German is older than ours: the adjective after <em>ein</em> has no ending, and the subordinate clause puts its verb before its participle.',
  parts:[
   {t:'Ein feste Burg ist unser Gott', h:'Predicate first', n:'<em>Ein feste Burg</em>, the predicate, comes first for weight; the subject is <em>unser Gott</em>. Today one says <em>eine feste Burg</em>. Iambic: <em>ein FES-te BURG ist UN-ser GOTT</em>.'},
   {t:'Ein gute Wehr und Waffen', h:'Old forms', n:'Another old <em>ein</em> for <em>eine</em>, before <em>Wehr</em>, defense.'},
   {t:'Er hilft uns frei aus aller Not', h:'Helfen with the dative', n:'<em>Helfen</em> takes the dative: <em>uns</em>. <em>Aus aller Not</em>, dative.'},
   {t:'Die uns jetzt hat betroffen', h:'An older order', n:'<em>Die</em> takes up <em>Not</em>. Modern German would say <em>die uns jetzt betroffen hat</em>; the older order puts <em>hat</em> before the participle, here for rhyme and meter.'}],
  qs:[
   {t:'Ein feste Burg', q:'Modern German would write…', a:'<em>eine feste Burg</em>', ds:['<em>ein fester Burg</em>','<em>einer feste Burg</em>','<em>ein festes Burg</em>'], why:'<em>Burg</em> is feminine; Luther’s <em>ein</em> is an older form.'},
   {t:'unser Gott', q:'The subject of the first line is…', a:'<em>unser Gott</em>', ds:['<em>Ein feste Burg</em>','<em>ist</em>','There is none'], why:'The predicate, a strong fortress, comes first for emphasis.'},
   {t:'uns frei', q:'<em>uns</em> in <em>Er hilft uns</em> is…', a:'Dative: <em>helfen</em> takes the dative', ds:['Accusative','Nominative','Reflexive'], why:'<em>Jemandem helfen</em>: to help someone, in the dative.'},
   {t:'hat betroffen', q:'Where would modern German put <em>hat</em>?', a:'At the very end: <em>betroffen hat</em>', ds:['First in the clause','Before <em>uns</em>','It would drop it'], why:'In a relative clause the finite verb now comes last.'}]},

'de-thule': {lang:'de', author:'Goethe', work:'Der König in Thule', locus:'1–4', meter:'three-beat lines, iambs mixed with anapests', ed:'Goethe, “Der König in Thule” (1774), stanza 1. English: Edgar Alfred Bowring (1853), Project Gutenberg eBook 1287.',
  lat:'Es war ein König in Thule,\nGar treu bis an das Grab,\nDem sterbend seine Buhle\nEinen goldnen Becher gab.',
  eng:'In Thule lived a monarch,\nStill faithful to the grave,\nTo whom his dying mistress\nA golden goblet gave.\n— Edgar Alfred Bowring',
  ctx:'Gretchen sings this ballad in <em>Faust</em>. The stanza is one sentence with a relative clause in the dative.',
  parts:[
   {t:'Es war ein König in Thule', h:'Es war', n:'<em>Es</em> fills the first place; the subject is <em>ein König</em>.'},
   {t:'Gar treu bis an das Grab', h:'Bis an', n:'<em>Bis an das Grab</em>: right up to the grave, with the accusative of motion.'},
   {t:'Dem sterbend seine Buhle', h:'A dative relative and a participle', n:'<em>Dem</em>, dative relative: to whom. <em>Sterbend</em>, “dying,” a present participle without ending, describes <em>seine Buhle</em>, his beloved, the subject.'},
   {t:'Einen goldnen Becher gab', h:'Verb last', n:'<em>Einen goldnen Becher</em>, accusative masculine; <em>goldnen</em> is <em>goldenen</em> shortened. <em>Gab</em> closes the relative clause.'}],
  qs:[
   {t:'Dem', q:'<em>Dem</em> is…', a:'A dative relative: to whom, the king', ds:['The article with <em>Grab</em>','A demonstrative subject','Accusative'], why:'<em>Geben</em> takes the receiver in the dative; the verb <em>gab</em> is last, so it is a relative clause.'},
   {t:'sterbend', q:'<em>sterbend</em> is…', a:'A present participle: dying', ds:['A past participle','An infinitive','A noun'], why:'<em>Sterben</em> + <em>-d</em>.'},
   {t:'seine Buhle', q:'The subject of <em>gab</em> is…', a:'<em>seine Buhle</em>', ds:['<em>ein König</em>','<em>einen goldnen Becher</em>','<em>dem</em>'], why:'His beloved gave him the goblet.'},
   {t:'gab', q:'Why does <em>gab</em> stand last?', a:'It closes the relative clause', ds:['For the rhyme only','It is an infinitive','It is a command'], why:'Verb last marks the dependent clause, and the rhyme with <em>Grab</em> falls there too.'}]},

'de-zueignung': {lang:'de', author:'Goethe', work:'Faust I, Zueignung', locus:'1–4', meter:'iambic pentameter, ottava rima', ed:'Goethe, <i>Faust: Der Tragödie erster Teil</i> (1808), “Zueignung,” lines 1–4. English: Bayard Taylor (1870), Project Gutenberg eBook 14591.',
  lat:'Ihr naht euch wieder, schwankende Gestalten,\nDie früh sich einst dem trüben Blick gezeigt.\nVersuch ich wohl, euch diesmal festzuhalten?\nFühl ich mein Herz noch jenem Wahn geneigt?',
  eng:'Again you come, you hovering Forms! I find you,\nAs early to my clouded sight you shone!\nShall I attempt, this once, to seize and bind you?\nStill o’er my heart is that illusion thrown?\n— Bayard Taylor',
  ctx:'The dedication of <em>Faust</em>, in eight-line stanzas of iambic pentameter. Taylor keeps Goethe’s meter and rhymes.',
  parts:[
   {t:'Ihr naht euch wieder, schwankende Gestalten', h:'Ihr and a reflexive', n:'<em>Ihr</em>, “you” plural, addresses the shapes. <em>Sich nahen</em>, to draw near: <em>euch</em> is the reflexive. <em>Schwankende</em>, present participle. Iambic: <em>ihr NAHT euch WIE-der, SCHWAN-ken-DE ge-STAL-ten</em>.'},
   {t:'Die früh sich einst dem trüben Blick gezeigt', h:'A dropped auxiliary', n:'<em>Die</em> is the relative, plural. <em>Gezeigt</em> stands for <em>gezeigt haben</em>: verse may drop the auxiliary at the end of a relative clause. <em>Dem trüben Blick</em>, dative.'},
   {t:'Versuch ich wohl, euch diesmal festzuhalten', h:'A question and zu inside a separable verb', n:'<em>Versuch ich</em>: verb first, a question. <em>Festzuhalten</em>: <em>zu</em> goes between prefix and verb.'},
   {t:'Fühl ich mein Herz noch jenem Wahn geneigt', h:'Geneigt with the dative', n:'<em>Einer Sache geneigt</em>: inclined to a thing. <em>Jenem Wahn</em> is dative.'}],
  qs:[
   {t:'euch wieder', q:'<em>euch</em> in <em>Ihr naht euch</em> is…', a:'Reflexive, with <em>sich nahen</em>', ds:['Dative: to you, others','Accusative object of another verb','A possessive'], why:'Subject and object are the same: you draw yourselves near.'},
   {t:'gezeigt', q:'What is left out after <em>gezeigt</em>?', a:'The auxiliary <em>haben</em>', ds:['Nothing; it is an adjective','The subject','<em>werden</em>, making it passive'], why:'Verse often drops the finite auxiliary at the end of a dependent clause: <em>gezeigt [haben]</em>.'},
   {t:'festzuhalten', q:'In <em>festzuhalten</em>, <em>zu</em>…', a:'Stands between the prefix and the verb', ds:['Is a preposition governing <em>euch</em>','Makes it passive','Is a misprint'], why:'With separable verbs, <em>zu</em> goes inside: <em>fest-zu-halten</em>.'},
   {t:'jenem Wahn', q:'<em>jenem Wahn</em> is dative because…', a:'<em>geneigt</em> takes the dative', ds:['It is the subject','<em>noch</em> takes the dative','It is plural'], why:'Inclined to that illusion: the dative goes with the adjective.'}]},

'de-fichte': {lang:'de', author:'Heine', work:'Ein Fichtenbaum steht einsam', locus:'1–4', meter:'three-beat lines, iambs mixed with anapests', ed:'Heine, <i>Lyrisches Intermezzo</i> 33 (1823), stanza 1. English: Emma Lazarus (1881), Project Gutenberg eBook 31726.',
  lat:'Ein Fichtenbaum steht einsam\nIm Norden auf kahler Höh’.\nIhn schläfert; mit weißer Decke\nUmhüllen ihn Eis und Schnee.',
  eng:'There stands a lonely pine tree\nIn the north, on a barren height;\nHe sleeps while the ice and snowflakes\nSwathe him in folds of white.\n— Emma Lazarus',
  ctx:'The pine dreams of a palm in the south. Note the impersonal <em>ihn schläfert</em> and the object placed before the verb.',
  parts:[
   {t:'Ein Fichtenbaum steht einsam', h:'Subject first', n:'<em>Einsam</em>, “lonely,” an adjective used as an adverb.'},
   {t:'Im Norden auf kahler Höh’', h:'Datives of place', n:'<em>Auf kahler Höh’</em>: dative feminine with no article, so the adjective takes <em>-er</em>. <em>Höh’</em> is <em>Höhe</em>.'},
   {t:'Ihn schläfert', h:'An impersonal verb', n:'<em>Ihn schläfert</em>, “he grows sleepy”: the person is in the accusative and there is no subject.'},
   {t:'mit weißer Decke\nUmhüllen ihn Eis und Schnee', h:'Verb second, subject last', n:'<em>Mit weißer Decke</em> fills the first place; <em>umhüllen</em> comes next, then the object <em>ihn</em>, then the subject <em>Eis und Schnee</em>, plural.'}],
  qs:[
   {t:'kahler', q:'Why <em>kahler</em>?', a:'Dative feminine without an article: strong ending <em>-er</em>', ds:['It is a comparative','It is masculine nominative','It is genitive plural'], why:'<em>Auf</em>, at rest, takes the dative; <em>Höhe</em> is feminine.'},
   {t:'Ihn schläfert', q:'<em>Ihn schläfert</em> means…', a:'He grows sleepy, with the person in the accusative', ds:['He puts him to sleep','Sleep him!','He slept'], why:'An impersonal verb: there is no subject, and the one affected is <em>ihn</em>.'},
   {t:'Umhüllen ihn Eis und Schnee', q:'The subject of <em>umhüllen</em> is…', a:'<em>Eis und Schnee</em>', ds:['<em>ihn</em>','<em>weißer Decke</em>','<em>der Fichtenbaum</em>'], why:'The plural verb agrees with ice and snow; <em>ihn</em> is the object.'}]},

'de-danket': {lang:'de', author:'Rinkart', work:'Nun danket alle Gott', locus:'1–4', meter:'iambic trimeter, six and seven syllables', ed:'Martin Rinkart, “Nun danket alle Gott” (1636), stanza 1, lines 1–4. English: Catherine Winkworth, <i>Lyra Germanica</i> (1858).',
  lat:'Nun danket alle Gott\nMit Herzen, Mund und Händen,\nDer große Dinge tut\nAn uns und allen Enden,',
  eng:'Now thank we all our God,\nWith heart and hands and voices,\nWho wondrous things has done,\nIn whom his world rejoices;\n— Catherine Winkworth',
  ctx:'A hymn of the Thirty Years’ War. Winkworth’s version is the one still sung in English.',
  parts:[
   {t:'Nun danket alle Gott', h:'Imperative plural and the dative', n:'<em>Danket</em> is the older plural imperative: give thanks, all of you. <em>Danken</em> takes the dative: <em>Gott</em>. Iambic: <em>nun DAN-ket AL-le GOTT</em>.'},
   {t:'Mit Herzen, Mund und Händen', h:'Mit and the dative', n:'<em>Herzen</em>, an old dative of <em>Herz</em>; <em>Händen</em>, dative plural.'},
   {t:'Der große Dinge tut', h:'A relative clause', n:'<em>Der</em> takes up <em>Gott</em>; the verb <em>tut</em> is last.'},
   {t:'An uns und allen Enden', h:'Dative', n:'<em>An allen Enden</em>: everywhere, dative plural.'}],
  qs:[
   {t:'danket', q:'<em>danket</em> is…', a:'The plural imperative: give thanks', ds:['A past tense','Third person singular','An infinitive'], why:'The older plural imperative ends in <em>-et</em>; today, <em>dankt</em>.'},
   {t:'Gott', q:'<em>Gott</em> after <em>danket</em> is…', a:'Dative', ds:['Accusative','Nominative','Genitive'], why:'<em>Danken</em> takes the dative of the one thanked.'},
   {t:'Der große Dinge tut', q:'<em>Der</em> begins…', a:'A relative clause standing for <em>Gott</em>', ds:['A main clause','A question','A new subject, “the man”'], why:'The verb <em>tut</em> stands last.'}]},

'de-stille': {lang:'de', author:'Mohr', work:'Stille Nacht', locus:'1–6', meter:'two- and three-beat lines, dactyls and trochees', ed:'Joseph Mohr, “Stille Nacht” (1818), stanza 1, in the form now usually sung. English: John Freeman Young (1859).',
  lat:'Stille Nacht, heilige Nacht!\nAlles schläft, einsam wacht\nNur das traute hochheilige Paar.\nHolder Knabe im lockigen Haar,\nSchlaf in himmlischer Ruh!\nSchlaf in himmlischer Ruh!',
  eng:'Silent night, holy night,\nAll is calm, all is bright\nRound yon virgin mother and child.\nHoly infant so tender and mild,\nSleep in heavenly peace,\nSleep in heavenly peace.\n— John Freeman Young',
  ctx:'The carol. Young’s English is free: Mohr says that all sleep, and only the couple keeps watch.',
  parts:[
   {t:'Stille Nacht, heilige Nacht', h:'Adjectives with no article', n:'<em>Stille</em> and <em>heilige</em> take the strong feminine ending <em>-e</em>. Two beats in each half: <em>STIL-le NACHT, HEI-li-ge NACHT</em>.'},
   {t:'Alles schläft, einsam wacht\nNur das traute hochheilige Paar', h:'Verb second, subject after', n:'<em>Alles</em>, “everyone,” neuter singular. <em>Einsam</em> holds the first place, so <em>wacht</em> precedes its subject, <em>das … Paar</em>.'},
   {t:'Holder Knabe im lockigen Haar', h:'The address', n:'<em>Holder Knabe</em>, vocative, strong ending with no article.'},
   {t:'Schlaf in himmlischer Ruh', h:'Imperative', n:'<em>Schlaf</em>, singular imperative. <em>In himmlischer Ruh</em>, dative of rest; <em>Ruh</em> for <em>Ruhe</em>.'}],
  qs:[
   {t:'Alles schläft', q:'<em>Alles</em> takes the singular verb because…', a:'It is a neuter singular pronoun: everything, everyone', ds:['It is plural but irregular','It is the object','It is an adverb'], why:'<em>Alles</em> is singular, like English “all is calm.”'},
   {t:'wacht', q:'The subject of <em>wacht</em> is…', a:'<em>das traute hochheilige Paar</em>', ds:['<em>alles</em>','<em>einsam</em>','<em>Nacht</em>'], why:'<em>Einsam</em> holds the first place; the subject follows the verb.'},
   {t:'Schlaf', q:'<em>Schlaf</em> in the last lines is…', a:'The singular imperative: sleep!', ds:['The noun: sleep','A past tense','A plural verb'], why:'Addressed to the child, <em>du</em>; the imperative drops the ending.'}]}
});

/* Where each English text was read. */
const EN_ED = {
  'en-decl':'Project Gutenberg eBook 1', 'en-gibbon':'Project Gutenberg eBook 731', 'en-johnson':'Boswell, <i>Life of Johnson</i>, Project Gutenberg eBook 1564',
  'en-burke':'Project Gutenberg eBook 15679', 'en-newman':'Project Gutenberg eBook 24526', 'en-austen':'Project Gutenberg eBook 1342',
  'en-hebrews':'the King James Version (1611), Project Gutenberg eBook 10', 'en-bacon':'Project Gutenberg eBook 575',
  'en-gettysburg':'the Bliss copy, as printed by Wikisource', 'en-lincoln2':'Wikisource', 'en-dickens':'Project Gutenberg eBook 98',
  'en-areopagitica':'Project Gutenberg eBook 608', 'en-swift':'Project Gutenberg eBook 1080', 'en-melville':'Project Gutenberg eBook 2701',
  'en-thoreau':'Project Gutenberg eBook 205', 'en-milton-pl':'Project Gutenberg eBook 26', 'en-sonnet18':'the Quarto of 1609, Project Gutenberg eBook 1041',
  'en-gray':'the text of 1776, as printed by Wikisource', 'en-mariner':'Project Gutenberg eBook 151', 'en-daffodils':'the text of 1807, as printed by Wikisource',
  'en-ozymandias':'the standard text (1818)', 'en-tyger':'the standard text of <i>Songs of Experience</i> (1794)', 'en-pope':'the standard text (1711)',
  'en-donne':'the standard text (1633)', 'en-ulysses':'the standard text (1842)'
};
Object.keys(EN_ED).forEach(id => { if(PASSAGES[id]) PASSAGES[id].ed = PASSAGES[id].author + (PASSAGES[id].work ? ', <i>' + PASSAGES[id].work + '</i>' : '') + ', ' + PASSAGES[id].locus + ', as printed in ' + EN_ED[id] + '.'; });
})(window.MORE_PASSAGES);
