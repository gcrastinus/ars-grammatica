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
