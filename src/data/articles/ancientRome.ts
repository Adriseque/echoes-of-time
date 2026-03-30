import type { Article } from "./types";

export const ancientRomeArticles: Record<string, Article> = {
  "rome-1": {
    id: "rome-1",
    title: "Founding of Rome",
    date: "753 BC",
    chapters: [
      {
        id: "origins",
        title: "The Legend of Romulus and Remus",
        content: `According to Roman mythology, Rome was founded by twin brothers Romulus and Remus, sons of the god Mars and the Vestal Virgin Rhea Silvia. Abandoned as infants on the banks of the Tiber River, the twins were discovered and suckled by a she-wolf — the famous *Lupa* — before being raised by a shepherd named Faustulus.\n\nAs young men, the brothers decided to establish a city near the site where they had been rescued. A bitter dispute arose over which hill would serve as the city's center: Romulus favored the Palatine Hill, while Remus preferred the Aventine. When Remus mockingly leaped over Romulus's partially built wall, Romulus killed his brother in a rage — an act of fratricide that cast a long shadow over Rome's origins.\n\nRomulus named the city after himself and became its first king. He established the Senate, divided the population into tribes, and created the Roman legions. The legendary "Rape of the Sabine Women" — an early mass abduction to populate the new city — reflects the ruthless pragmatism that would characterize Roman expansion for centuries.`,
      },
      {
        id: "seven-kings",
        title: "The Seven Kings of Rome",
        content: `Tradition holds that Rome was ruled by seven kings from 753 to 509 BC. After Romulus, the city saw rulers of both Latin and Etruscan origin, each contributing to Rome's institutional foundations.\n\nNuma Pompilius, the second king, was a peaceful lawgiver who established Rome's religious institutions, including the Vestal Virgins and the calendar. Tullus Hostilius expanded Roman territory through war, while Ancus Marcius founded Ostia, Rome's first port.\n\nThe later Etruscan kings — Tarquinius Priscus, Servius Tullius, and Tarquinius Superbus — brought urban planning, the Cloaca Maxima (great sewer), and the first temple on the Capitoline Hill. Servius Tullius reorganized society into classes based on wealth, a reform that persisted for centuries.\n\nThe tyranny of the last king, Tarquinius Superbus ("Tarquin the Proud"), and the rape of Lucretia by his son provoked a revolt that expelled the monarchy and established the Roman Republic in 509 BC.`,
      },
      {
        id: "archaeology",
        title: "Archaeological Evidence",
        content: `Modern archaeology has partially validated the traditional founding narrative. Excavations on the Palatine Hill have uncovered hut foundations dating to the mid-8th century BC — remarkably close to the traditional 753 BC date.\n\nThe "Roma Quadrata," a sacred boundary said to have been plowed by Romulus, corresponds to early settlement traces found on the Palatine. Iron Age pottery, burial sites, and post-hole structures paint a picture of a small pastoral community that gradually coalesced from scattered hilltop villages.\n\nThe Forum area, originally a marshy valley used for burials, was drained and paved around 600 BC — likely under the Etruscan kings. This transformation from necropolis to civic center mirrors the literary tradition of Rome's evolution from village to city-state.\n\nWhile the mythological details remain unverifiable, the archaeological record confirms that Rome's origins lie in a cluster of Iron Age settlements on the hills above the Tiber, growing into a significant urban center by the 6th century BC.`,
      },
    ],
    characters: [
      { name: "Romulus", role: "Legendary founder and first King of Rome", wikiUrl: "https://en.wikipedia.org/wiki/Romulus" },
      { name: "Remus", role: "Twin brother of Romulus", wikiUrl: "https://en.wikipedia.org/wiki/Remus" },
      { name: "Numa Pompilius", role: "Second King of Rome, religious lawgiver", wikiUrl: "https://en.wikipedia.org/wiki/Numa_Pompilius" },
      { name: "Tarquinius Superbus", role: "Last King of Rome", wikiUrl: "https://en.wikipedia.org/wiki/Lucius_Tarquinius_Superbus" },
    ],
  },
  "rome-2": {
    id: "rome-2",
    title: "Birth of the Roman Republic",
    date: "509 BC",
    chapters: [
      {
        id: "overthrow",
        title: "The Fall of the Monarchy",
        content: `The Roman Republic was born from outrage. In 509 BC, Lucius Junius Brutus led a revolt against the last Etruscan king, Tarquinius Superbus, after the king's son Sextus Tarquinius raped Lucretia, a noblewoman. Her subsequent suicide became a rallying cry that united the Roman aristocracy against monarchical tyranny.\n\nBrutus, who had feigned stupidity to survive under the king's suspicious eye, emerged as a leader of extraordinary resolve. He and Lucius Tarquinius Collatinus, Lucretia's husband, rallied the Senate and the people to expel the Tarquin dynasty. The Romans swore an oath never again to tolerate a king — a sentiment so deep that the word "rex" (king) remained a political insult for centuries.\n\nThe Republic replaced the king with two consuls elected annually, ensuring no single individual could accumulate permanent power. This innovation — the principle of collegiality and term limits — became the foundation of Republican government.`,
      },
      {
        id: "institutions",
        title: "Republican Institutions",
        content: `The early Republic developed a complex system of checks and balances that would later inspire the framers of the United States Constitution. The two consuls held supreme executive authority (imperium), but each could veto the other's decisions.\n\nThe Senate, composed of former magistrates and patrician elders, served as the advisory body that controlled foreign policy, finances, and legislation. Below the consuls, a hierarchy of magistrates — praetors, quaestors, aediles, and censors — administered justice, managed public works, and conducted the census.\n\nThe most radical institution was the Tribune of the Plebs, established after the "Conflict of the Orders" — a centuries-long struggle between patricians and plebeians. Tribunes held sacrosanct status and could veto any act of government, providing the common people with a powerful check against aristocratic abuse.`,
      },
      {
        id: "expansion",
        title: "Early Republican Expansion",
        content: `The young Republic faced immediate threats from all directions. Etruscan armies, Latin neighbors, and hill tribes of the Apennines all tested Roman resolve. The legendary defense of the Pons Sublicius by Horatius Cocles and the story of Cincinnatus — the farmer-dictator who saved Rome and then returned to his plow — encapsulate the Republican ideal of civic virtue.\n\nThe Gallic sack of Rome in 390 BC was a traumatic event that spurred major military reforms and the construction of the Servian Wall. Rome recovered quickly, and by the mid-4th century BC had established dominance over central Italy through a combination of military prowess and diplomatic cunning.\n\nThe Latin War (340–338 BC) and the Samnite Wars (343–290 BC) extended Roman control across the Italian peninsula. Rome's genius lay not just in conquest but in integration — granting varying degrees of citizenship and alliance to defeated peoples, creating a network of loyalty that sustained the Republic through centuries of expansion.`,
      },
    ],
    characters: [
      { name: "Lucius Junius Brutus", role: "Founder of the Roman Republic", wikiUrl: "https://en.wikipedia.org/wiki/Lucius_Junius_Brutus" },
      { name: "Lucretia", role: "Noblewoman whose tragedy sparked the revolution", wikiUrl: "https://en.wikipedia.org/wiki/Lucretia_(legendary_heroine)" },
      { name: "Cincinnatus", role: "Legendary farmer-dictator", wikiUrl: "https://en.wikipedia.org/wiki/Cincinnatus" },
    ],
  },
  "rome-3": {
    id: "rome-3",
    title: "Assassination of Julius Caesar",
    date: "44 BC",
    chapters: [
      {
        id: "rise",
        title: "Caesar's Rise to Power",
        content: `Gaius Julius Caesar was born into a patrician family of modest political standing in 100 BC. His early career combined military brilliance with populist politics — he allied himself with Pompey the Great and Marcus Crassus in the informal First Triumvirate, gaining the consulship in 59 BC.\n\nHis conquest of Gaul (58–50 BC) was one of the most remarkable military campaigns in history. Over eight years, Caesar subjugated the entire region of modern France, Belgium, and parts of Germany and Britain. His commentaries, *De Bello Gallico*, served as both military report and political propaganda, making him a hero to the Roman populace while his aristocratic rivals in the Senate grew increasingly alarmed.\n\nWhen the Senate, led by Pompey, demanded Caesar disband his legions and return to Rome as a private citizen, Caesar famously crossed the Rubicon River in January 49 BC — an act of treason that ignited civil war. "Alea iacta est" ("The die is cast"), he reportedly declared.`,
      },
      {
        id: "ides",
        title: "The Ides of March",
        content: `After defeating Pompey and his allies across the Mediterranean, Caesar returned to Rome as dictator. He implemented sweeping reforms: the Julian calendar, citizenship for provincials, public works, and land redistribution. But his accumulation of power — including the title "dictator perpetuo" (dictator in perpetuity) — alarmed senators who saw the Republic dying.\n\nA conspiracy formed among some sixty senators, led by Gaius Cassius Longinus and Marcus Junius Brutus — the latter a man Caesar considered almost a son. On March 15, 44 BC, the Ides of March, the conspirators surrounded Caesar at a Senate meeting in the Theatre of Pompey.\n\nCaesar was stabbed twenty-three times. Ancient sources report that upon seeing Brutus among his attackers, he uttered either "Kai su, teknon?" ("You too, child?") or simply pulled his toga over his face in resignation. He fell at the base of Pompey's statue — a final irony, dying at the feet of his former rival's image.`,
      },
      {
        id: "aftermath",
        title: "The End of the Republic",
        content: `The conspirators expected Rome to celebrate the restoration of liberty. Instead, Caesar's assassination plunged the Republic into its final death spiral. Mark Antony's funeral oration — immortalized by Shakespeare but rooted in historical accounts — turned public opinion violently against the assassins.\n\nCaesar's adopted heir, the eighteen-year-old Octavian, proved a far more cunning political operator than anyone anticipated. The Second Triumvirate of Octavian, Antony, and Lepidus crushed the conspirators at the Battle of Philippi in 42 BC. Both Brutus and Cassius died — by suicide, according to most accounts.\n\nThe alliance soon fractured. Octavian defeated Antony and Cleopatra at the Battle of Actium in 31 BC and emerged as sole ruler of Rome. In 27 BC, the Senate granted him the title "Augustus," and the Roman Republic — already dead in practice — was formally replaced by the Roman Empire. Caesar's assassination, intended to save the Republic, had destroyed it.`,
      },
    ],
    characters: [
      { name: "Julius Caesar", role: "Dictator of Rome", wikiUrl: "https://en.wikipedia.org/wiki/Julius_Caesar" },
      { name: "Marcus Brutus", role: "Senator and lead conspirator", wikiUrl: "https://en.wikipedia.org/wiki/Marcus_Junius_Brutus" },
      { name: "Mark Antony", role: "Caesar's loyal general and consul", wikiUrl: "https://en.wikipedia.org/wiki/Mark_Antony" },
      { name: "Octavian (Augustus)", role: "Caesar's adopted heir, first Emperor", wikiUrl: "https://en.wikipedia.org/wiki/Augustus" },
    ],
  },
  "rome-4": {
    id: "rome-4",
    title: "Fall of the Western Roman Empire",
    date: "476 AD",
    chapters: [
      {
        id: "decline",
        title: "The Long Decline",
        content: `The fall of the Western Roman Empire was not a single event but a centuries-long process of transformation. By the 3rd century AD, the empire faced simultaneous crises: civil wars, plague, inflation, and increasing pressure from Germanic tribes along the Rhine and Danube frontiers.\n\nDiocletian's reforms (284–305 AD) temporarily stabilized the empire by dividing it into eastern and western halves, each governed by an Augustus and a Caesar (the Tetrarchy). Constantine the Great reunified the empire, founded Constantinople as a "New Rome" in the east, and legalized Christianity — fundamentally altering the empire's cultural trajectory.\n\nBut the structural problems persisted. The western provinces grew poorer while the eastern provinces flourished. The Roman army increasingly relied on Germanic foederati (allied barbarian troops), blurring the line between defender and invader. The sack of Rome by the Visigoths under Alaric in 410 AD — the first time the city had fallen to a foreign enemy in 800 years — sent shockwaves through the Roman world.`,
      },
      {
        id: "fall",
        title: "The Final Chapter",
        content: `The last decades of the Western Empire were a parade of weak emperors controlled by Germanic military strongmen. The Vandals seized North Africa — Rome's breadbasket — in 439 AD, delivering a devastating economic blow. Attila the Hun ravaged the Balkans and Gaul before his mysterious death in 453 AD.\n\nIn 455 AD, the Vandals sacked Rome itself, stripping the city of its remaining treasures. The Western Empire shrank to little more than Italy. In 476 AD, the Germanic chieftain Odoacer deposed the last emperor, a teenager ironically named Romulus Augustulus — combining the names of Rome's legendary founder and its first emperor.\n\nOdoacer sent the imperial regalia to Constantinople, declaring that the West no longer needed an emperor of its own. The Eastern Roman Empire (Byzantine Empire) would endure for another thousand years, but the political entity that had shaped Western civilization for half a millennium was gone.`,
      },
      {
        id: "legacy",
        title: "Rome's Enduring Legacy",
        content: `Rome never truly "fell" — it transformed. Roman law became the foundation of European legal systems. Latin evolved into the Romance languages. Roman roads, aqueducts, and architectural principles persisted for centuries. The Catholic Church, headquartered in Rome, preserved Roman administrative structures and Latin learning through the medieval period.\n\nThe idea of Rome as a universal empire haunted European politics for over a millennium. Charlemagne's coronation as "Emperor of the Romans" in 800 AD, the Holy Roman Empire, and even Napoleon's imperial ambitions all drew on Roman precedent.\n\nHistorians have debated the causes of Rome's fall for centuries. Edward Gibbon blamed Christianity; others cite economic collapse, military overextension, climate change, plague, or the sheer difficulty of governing such a vast territory with ancient technology. The most likely answer is that all these factors interacted in a complex system that eventually reached a tipping point — a lesson that remains relevant for modern civilizations.`,
      },
    ],
    characters: [
      { name: "Romulus Augustulus", role: "Last Western Roman Emperor", wikiUrl: "https://en.wikipedia.org/wiki/Romulus_Augustulus" },
      { name: "Odoacer", role: "Germanic chieftain who deposed the last emperor", wikiUrl: "https://en.wikipedia.org/wiki/Odoacer" },
      { name: "Alaric I", role: "Visigothic king who sacked Rome in 410", wikiUrl: "https://en.wikipedia.org/wiki/Alaric_I" },
      { name: "Constantine the Great", role: "Emperor who founded Constantinople", wikiUrl: "https://en.wikipedia.org/wiki/Constantine_the_Great" },
    ],
  },
};
