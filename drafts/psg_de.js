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
