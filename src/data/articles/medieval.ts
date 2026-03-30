import type { Article } from "./types";

export const medievalArticles: Record<string, Article> = {
  "med-1": {
    id: "med-1",
    title: "Coronation of Charlemagne",
    date: "800 AD",
    chapters: [
      {
        id: "rise",
        title: "Rise of the Carolingians",
        content: `The Carolingian dynasty rose from the position of "Mayor of the Palace" — effectively the chief minister — of the Merovingian kings of Francia. Charles Martel, Charlemagne's grandfather, had saved Western Christendom by defeating an Umayyad Muslim army at the Battle of Tours in 732 AD. His son Pepin the Short took the final step, deposing the last Merovingian king with papal blessing and founding a new royal dynasty in 751 AD.\n\nCharlemagne (Charles the Great) inherited the Frankish kingdom in 768 AD and spent the next three decades expanding it through relentless campaigning. He conquered the Lombard kingdom in Italy, subdued the Saxons after decades of brutal warfare, pushed into Bavaria and the Avar lands of the Danube, and established the Spanish March south of the Pyrenees.\n\nBy 800 AD, Charlemagne controlled an empire stretching from the North Sea to central Italy, and from the Atlantic to the Elbe. It was the largest political entity in Western Europe since the fall of Rome.`,
      },
      {
        id: "coronation",
        title: "Christmas Day, 800 AD",
        content: `On Christmas Day 800 AD, as Charlemagne knelt in prayer at St. Peter's Basilica in Rome, Pope Leo III placed an imperial crown on his head and declared him "Emperor of the Romans." The congregation acclaimed him with the ancient Roman formula of acclamation.\n\nThe event was politically explosive. Charlemagne reportedly said he would never have entered the church had he known the pope's intentions — though historians debate whether this was genuine surprise or diplomatic theater. The coronation simultaneously elevated Charlemagne's authority, asserted papal power to bestow imperial dignity, and challenged the legitimacy of the Byzantine empress Irene in Constantinople.\n\nThe coronation created a new political framework for Western Europe: the idea that a Christian emperor, sanctioned by the pope, could claim the mantle of Rome. This concept — the translatio imperii (transfer of empire) — would shape European politics for a millennium.`,
      },
      {
        id: "renaissance",
        title: "The Carolingian Renaissance",
        content: `Charlemagne's legacy extended far beyond military conquest. He initiated a cultural revival known as the Carolingian Renaissance — a systematic effort to preserve and spread learning, reform the church, and standardize administration.\n\nCharlemagne gathered scholars from across Europe to his court at Aachen. The English monk Alcuin of York led the palace school and developed a standardized script — Carolingian minuscule — that became the basis for modern lowercase letters. Monasteries became centers of manuscript copying, preserving classical texts that might otherwise have been lost.\n\nThe emperor promoted education at all levels, ordering that every cathedral and monastery maintain a school. He standardized weights, measures, and coinage across his realm. His Admonitio Generalis of 789 was a comprehensive reform program covering everything from liturgical practice to agricultural improvement.\n\nCharlemagne died in 814 AD. His empire fragmented under his grandsons, eventually splitting into the kingdoms that would become France and Germany. But his vision of a united Christian Europe, governed by law and enlightened by learning, remained the ideal against which medieval rulers measured themselves.`,
      },
    ],
    characters: [
      { name: "Charlemagne", role: "King of the Franks and Emperor of the Romans", wikiUrl: "https://en.wikipedia.org/wiki/Charlemagne" },
      { name: "Pope Leo III", role: "Pope who crowned Charlemagne", wikiUrl: "https://en.wikipedia.org/wiki/Pope_Leo_III" },
      { name: "Alcuin of York", role: "Scholar and advisor", wikiUrl: "https://en.wikipedia.org/wiki/Alcuin" },
    ],
  },
  "med-2": {
    id: "med-2",
    title: "Norman Conquest of England",
    date: "1066",
    chapters: [
      {
        id: "claim",
        title: "The Succession Crisis",
        content: `When Edward the Confessor died on January 5, 1066, without a clear heir, England plunged into a succession crisis that would reshape its history. Three men claimed the throne: Harold Godwinson, the powerful Earl of Wessex chosen by the English Witan (council); Harald Hardrada, King of Norway, who claimed England through an agreement with an earlier Danish king; and William, Duke of Normandy, who asserted that Edward had promised him the crown.\n\nWilliam's claim rested on two pillars: a supposed promise from Edward during the 1050s and an oath allegedly sworn by Harold Godwinson himself during a visit to Normandy in 1064. According to Norman sources, Harold had sworn on holy relics to support William's claim — an oath he broke by accepting the crown himself. English sources naturally told a different story.\n\nThe stage was set for one of the most consequential military campaigns in European history.`,
      },
      {
        id: "hastings",
        title: "The Battle of Hastings",
        content: `Harold Godwinson first had to deal with the Norwegian invasion. Harald Hardrada landed in northern England with a massive fleet and defeated a local English force. Harold force-marched his army 185 miles north in just four days and crushed the Norwegians at the Battle of Stamford Bridge on September 25, 1066. Hardrada was killed.\n\nThree days later, William of Normandy landed on the south coast of England. Harold immediately marched his exhausted army south — another grueling trek of over 250 miles. The two armies met near Hastings on October 14, 1066.\n\nThe English fought on foot, forming a shield wall atop Senlac Hill. The Normans attacked with cavalry, infantry, and archers. The battle raged all day. Twice the Normans feigned retreat, luring English defenders down the hill to be cut down by cavalry. As dusk approached, Harold was killed — tradition says by an arrow to the eye, though this is debated. The English army disintegrated.\n\nThe Bayeux Tapestry, a 70-meter embroidered cloth, provides a vivid visual narrative of these events and remains one of the most important historical artifacts of the medieval period.`,
      },
      {
        id: "aftermath",
        title: "The Transformation of England",
        content: `William was crowned King of England on Christmas Day 1066, but subduing the country took years of brutal campaigning. The "Harrying of the North" in 1069–70 was a scorched-earth campaign that devastated Yorkshire so thoroughly that the region had not fully recovered twenty years later, as recorded in the Domesday Book.\n\nThe Norman Conquest transformed England at every level. A new French-speaking aristocracy replaced the Anglo-Saxon ruling class. The feudal system was imposed with systematic thoroughness. Norman cathedrals and castles — including the Tower of London — reshaped the physical landscape.\n\nThe English language itself was profoundly altered. For centuries, the nobility spoke Norman French while the common people spoke Old English. The eventual merger produced Middle English — a hybrid language far richer in vocabulary than either parent tongue. This is why English has pairs like "cow/beef," "sheep/mutton," and "house/mansion" — the Anglo-Saxon word for the animal and the Norman French word for the product.\n\nThe Domesday Book of 1086, a comprehensive survey of English landholding, remains an unparalleled source for understanding medieval society and stands as a monument to Norman administrative efficiency.`,
      },
    ],
    characters: [
      { name: "William the Conqueror", role: "Duke of Normandy, King of England", wikiUrl: "https://en.wikipedia.org/wiki/William_the_Conqueror" },
      { name: "Harold Godwinson", role: "Last Anglo-Saxon King of England", wikiUrl: "https://en.wikipedia.org/wiki/Harold_Godwinson" },
      { name: "Harald Hardrada", role: "King of Norway", wikiUrl: "https://en.wikipedia.org/wiki/Harald_Hardrada" },
    ],
  },
  "med-3": {
    id: "med-3",
    title: "The Crusades",
    date: "1095–1291",
    chapters: [
      {
        id: "first",
        title: "The Call to Crusade",
        content: `In November 1095, Pope Urban II delivered one of the most consequential speeches in history at the Council of Clermont. He called upon the knights of Christendom to march east, liberate Jerusalem from Muslim rule, and aid the beleaguered Byzantine Empire. "Deus vult!" ("God wills it!") became the rallying cry of the First Crusade.\n\nUrban's motivations were complex: he sought to reunite the Eastern and Western churches (split since 1054), channel the violence of European knights toward an external enemy, and assert papal authority over secular rulers. The response exceeded all expectations — tens of thousands took the cross, sewing cloth crosses onto their garments.\n\nThe People's Crusade, a ragged army of peasants led by Peter the Hermit, set out first and was annihilated by the Turks. The main crusading force — well-armed feudal armies led by prominent nobles — departed in 1096 and endured a grueling two-year march across Anatolia, suffering starvation, disease, and repeated Turkish attacks.`,
      },
      {
        id: "kingdoms",
        title: "The Crusader States",
        content: `Against all odds, the First Crusade captured Jerusalem on July 15, 1099. The subsequent massacre of the city's Muslim and Jewish inhabitants shocked even contemporary observers. The crusaders established four "Crusader States": the Kingdom of Jerusalem, the County of Tripoli, the Principality of Antioch, and the County of Edessa.\n\nThese fragile states survived for nearly two centuries through a combination of military fortification, diplomatic maneuvering, and periodic reinforcement from Europe. The military orders — the Knights Templar, the Knights Hospitaller, and the Teutonic Knights — provided a permanent professional fighting force and became powerful international organizations.\n\nCrusader architecture, from the massive fortress of Krak des Chevaliers to the Church of the Holy Sepulchre, blended Western and Eastern building traditions. Trade between East and West flourished, introducing Europeans to spices, silk, sugar, and new ideas in mathematics, medicine, and philosophy.`,
      },
      {
        id: "later",
        title: "Later Crusades and Legacy",
        content: `The fall of Edessa in 1144 triggered the Second Crusade, which ended in humiliating failure. In 1187, the Kurdish-Muslim general Saladin recaptured Jerusalem after the Battle of Hattin, prompting the Third Crusade — the famous expedition of Richard the Lionheart, Philip II of France, and Frederick Barbarossa (who drowned en route).\n\nRichard and Saladin fought to a stalemate and negotiated a truce allowing Christian pilgrims access to Jerusalem. The Fourth Crusade (1202–1204) infamously diverted to sack Constantinople — a Christian city — fatally weakening the Byzantine Empire and deepening the schism between Catholic and Orthodox Christianity.\n\nThe Crusades profoundly shaped European civilization. They stimulated trade and urbanization, contributed to the development of banking (the Templars essentially invented international banking), and exposed Europeans to advanced Islamic scholarship. But they also left a legacy of religious intolerance and violence whose echoes are still felt in interfaith relations today. The last Crusader stronghold, Acre, fell in 1291.`,
      },
    ],
    characters: [
      { name: "Pope Urban II", role: "Initiated the First Crusade", wikiUrl: "https://en.wikipedia.org/wiki/Pope_Urban_II" },
      { name: "Saladin", role: "Sultan who recaptured Jerusalem", wikiUrl: "https://en.wikipedia.org/wiki/Saladin" },
      { name: "Richard the Lionheart", role: "King of England, Third Crusade", wikiUrl: "https://en.wikipedia.org/wiki/Richard_I_of_England" },
    ],
  },
  "med-4": {
    id: "med-4",
    title: "The Black Death",
    date: "1347–1351",
    chapters: [
      {
        id: "arrival",
        title: "The Plague Arrives",
        content: `In October 1347, twelve Genoese trading ships docked at the Sicilian port of Messina. Most of the sailors aboard were dead or dying, covered in mysterious black boils that oozed blood and pus. The harbor authorities ordered the ships out, but it was too late — the Black Death had arrived in Europe.\n\nThe disease — now identified as bubonic plague caused by the bacterium Yersinia pestis — had originated in Central Asia and traveled along the Silk Road, devastating the Mongol Empire before reaching the Black Sea port of Caffa. From Sicily, it spread with terrifying speed along trade routes, reaching France and Spain by early 1348, England by summer, and Scandinavia by 1349.\n\nThe plague took three forms: bubonic (lymph node swelling), pneumonic (lung infection, spread through coughing), and septicemic (blood infection). The bubonic form killed about 50% of those infected within a week; the pneumonic form was nearly 100% fatal within days.`,
      },
      {
        id: "devastation",
        title: "A Continent in Agony",
        content: `The scale of death was almost incomprehensible. Europe lost between 30% and 60% of its population — some 25 to 50 million people — in just four years. Some regions were virtually depopulated. The Italian writer Giovanni Boccaccio, who witnessed the plague in Florence, described bodies piling up in streets and homes, mass graves, and the breakdown of all social bonds.\n\nMedieval medicine was helpless. Physicians recommended bloodletting, aromatic herbs, and prayer. The "miasma theory" — that the plague was caused by bad air — led to bizarre preventive measures. Flagellant movements arose, with penitents whipping themselves in public processions, believing the plague was divine punishment.\n\nJewish communities were scapegoated and massacred across Europe, accused of poisoning wells. Thousands were burned alive in pogroms that destroyed centuries-old communities. Pope Clement VI issued papal bulls condemning the persecution, noting that Jews were dying of plague at the same rate as Christians, but these had little effect.`,
      },
      {
        id: "transformation",
        title: "A World Transformed",
        content: `The Black Death fundamentally reshaped European society. The massive labor shortage gave surviving peasants unprecedented bargaining power. Wages rose sharply, and serfdom — already weakening — collapsed in many regions as workers demanded better conditions or simply moved to areas offering higher pay.\n\nThe English Peasants' Revolt of 1381, the Jacquerie in France (1358), and similar uprisings across Europe reflected the new assertiveness of the lower classes. Landlords who attempted to freeze wages through legislation (like England's Statute of Laborers) faced widespread resistance and evasion.\n\nThe plague also shook religious authority. The Church's inability to explain or prevent the catastrophe undermined faith in established institutions. Mysticism, lay piety movements, and proto-Protestant criticism of clerical corruption all gained ground — developments that would eventually contribute to the Reformation.\n\nArtistically, the *danse macabre* (dance of death) became a dominant motif, reflecting a new preoccupation with mortality. The plague returned in periodic waves for centuries, but never again with the apocalyptic force of the initial outbreak.`,
      },
    ],
    characters: [
      { name: "Giovanni Boccaccio", role: "Italian writer who chronicled the plague", wikiUrl: "https://en.wikipedia.org/wiki/Giovanni_Boccaccio" },
      { name: "Pope Clement VI", role: "Pope during the Black Death", wikiUrl: "https://en.wikipedia.org/wiki/Pope_Clement_VI" },
      { name: "Edward III", role: "King of England during the plague", wikiUrl: "https://en.wikipedia.org/wiki/Edward_III_of_England" },
    ],
  },
};
