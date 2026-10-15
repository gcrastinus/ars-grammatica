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
