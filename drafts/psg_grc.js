/* Greek prose and poetry. Greek as printed by the Perseus Digital Library (canonical-greekLit), and for the Gospels
   the SBL Greek New Testament, read 2026-10-15. English as printed by Project Gutenberg, named in each passage, with
   footnote numbers and editors' insertions left out. */
const PSG_ED = {grc:'Greek as printed by the Perseus Digital Library (PerseusDL canonical-greekLit), read 2026-10-15.',
  nt:'Greek of the SBL Greek New Testament (Society of Biblical Literature and Logos, 2010), read 2026-10-15; English of the King James Version (1611) as printed by Project Gutenberg (eBook 10).'};
Object.assign(PASSAGES, {
'grc-hdt': {lang:'grc', author:'Herodotus', work:'Histories', locus:'1.0', ed:PSG_ED.grc + ' English: G. C. Macaulay (1890), Project Gutenberg eBook 2707.',
  lat:'Ἡροδότου Ἁλικαρνησσέος ἱστορίης ἀπόδεξις ἥδε, ὡς μήτε τὰ γενόμενα ἐξ ἀνθρώπων τῷ χρόνῳ ἐξίτηλα γένηται, μήτε ἔργα μεγάλα τε καὶ θωμαστά, τὰ μὲν Ἕλλησι τὰ δὲ βαρβάροισι ἀποδεχθέντα, ἀκλεᾶ γένηται, τά τε ἄλλα καὶ διʼ ἣν αἰτίην ἐπολέμησαν ἀλλήλοισι.',
  eng:'This is the Showing forth of the Inquiry of Herodotus of Halicarnassos, to the end that neither the deeds of men may be forgotten by lapse of time, nor the works great and marvellous, which have been produced some by Hellenes and some by Barbarians, may lose their renown; and especially that the causes may be remembered for which these waged war with one another.\n— G. C. Macaulay',
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
   {t:'γίγνονται', q:'Why is <em>γίγνονται</em> present?', a:'It is the historical present, used in narrative for a past event', ds:['The sons are still being born','It is a future','It is a mistake for the aorist'], why:'Greek narrative often uses the present to make a past event vivid.'},
   {t:'Δαρείου καὶ Παρυσάτιδος', q:'<em>Δαρείου καὶ Παρυσάτιδος</em> is…', a:'Genitive of origin: born of Darius and Parysatis', ds:['A genitive absolute','The subject','A dative'], why:'The genitive names the parents from whom the sons are born.'},
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
   {t:'δοκεῖ', q:'Why is <em>δοκεῖ</em> singular with four subjects?', a:'It agrees with the nearest subject', ds:['The subjects are one thing','It is impersonal and has no subject','It is a mistake'], why:'Greek may make the verb agree with the nearest of several subjects.'},
   {t:'ἀγαθοῦ τινὸς', q:'Why is <em>ἀγαθοῦ τινος</em> genitive?', a:'<em>ἐφίεμαι</em>, “aim at,” takes the genitive', ds:['It shows possession','It is a genitive absolute','It follows <em>δοκεῖ</em>'], why:'Verbs of aiming and desiring take the genitive.'},
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
  eng:'Tell me, O Muse, of that ingenious hero who travelled far and wide after he had sacked the famous town of Troy. Many cities did he visit, and many were the nations with whose manners and customs he was acquainted; moreover he suffered much by sea while trying to save his own life and bring his men safely home.\n— Samuel Butler',
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
  eng:'My children, latest born to Cadmus old,\nWhy sit ye here as suppliants, in your hands\nBranches of olive filleted with wool?\nWhat means this reek of incense everywhere,\nAnd everywhere laments and litanies?\n— F. Storr',
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
