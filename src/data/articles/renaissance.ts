import type { Article } from "./types";

export const renaissanceArticles: Record<string, Article> = {
  "ren-1": {
    id: "ren-1",
    title: "The Printing Press",
    date: "1440",
    chapters: [
      {
        id: "invention",
        title: "Gutenberg's Revolution",
        content: `Around 1440, a German goldsmith named Johannes Gutenberg developed a system of movable metal type that would change the world more profoundly than any invention since writing itself. Working in Mainz, Gutenberg combined several existing technologies — the screw press (used for wine and olive oil), oil-based ink, and metal casting — into a system that could produce printed pages with unprecedented speed and consistency.\n\nThe key innovation was the type mold: a device that allowed individual metal letters to be cast quickly and uniformly. Each letter could be arranged into words, locked into a frame, inked, and pressed onto paper or vellum. After printing, the type could be broken down and reused — making it "movable."\n\nGutenberg's masterpiece, the Gutenberg Bible (completed around 1455), demonstrated the technology's potential. Approximately 180 copies were printed — a number that would have taken a team of scribes years to produce by hand. The books were of extraordinary quality, with precise typography that rivaled the best manuscripts.`,
      },
      {
        id: "spread",
        title: "The Print Revolution",
        content: `The printing press spread across Europe with astonishing speed. By 1500, an estimated 20 million volumes had been printed in Europe — more books than scribes had produced in the previous thousand years. Print shops opened in every major city, creating a new class of entrepreneurs and skilled workers.\n\nThe effects were revolutionary. The cost of books plummeted, making knowledge accessible to the growing urban middle class. Standardized editions replaced the error-prone copies produced by manual scribes. Vernacular literature flourished as publishers sought wider audiences. Scientific knowledge could be disseminated quickly and accurately, accelerating the pace of discovery.\n\nThe printing press was essential to the Protestant Reformation — Martin Luther's 95 Theses were printed and distributed across Germany within weeks. It enabled the Scientific Revolution by allowing researchers to share findings rapidly. It contributed to the rise of nationalism by standardizing vernacular languages. And it democratized knowledge in a way that threatened every established authority — religious, political, and intellectual.`,
      },
    ],
    characters: [
      { name: "Johannes Gutenberg", role: "Inventor of the movable-type printing press", wikiUrl: "https://en.wikipedia.org/wiki/Johannes_Gutenberg" },
      { name: "Johann Fust", role: "Gutenberg's financial backer", wikiUrl: "https://en.wikipedia.org/wiki/Johann_Fust" },
    ],
  },
  "ren-2": {
    id: "ren-2",
    title: "Columbus Reaches the Americas",
    date: "1492",
    chapters: [
      {
        id: "voyage",
        title: "The First Voyage",
        content: `On August 3, 1492, three small ships — the Niña, the Pinta, and the Santa María — sailed from the Spanish port of Palos de la Frontera. Their captain, a Genoese mariner named Christopher Columbus, believed he could reach Asia by sailing west across the Atlantic Ocean.\n\nColumbus's plan rested on a significant geographical error: he estimated the Earth's circumference at roughly 25,000 km — about 30% too small. Most educated Europeans knew the Earth was round, but they also correctly estimated that the westward distance to Asia was far too great for the ships of the day. What no one suspected was that two continents lay in the way.\n\nAfter five weeks at sea, with his crew near mutiny, Columbus sighted land on October 12, 1492 — an island in the Bahamas he named San Salvador. He explored Cuba and Hispaniola, encountering the Taíno people, whom he called "Indians" in the belief he had reached the East Indies. He returned to Spain in triumph, bringing gold, exotic plants, and several kidnapped Taíno as proof of his discovery.`,
      },
      {
        id: "impact",
        title: "The Columbian Exchange",
        content: `Columbus made four voyages to the Americas between 1492 and 1504, but he never accepted that he had found a "New World" — he died in 1506 still believing he had reached Asia. It was the Italian explorer Amerigo Vespucci who recognized the continents as previously unknown to Europeans, and the German cartographer Martin Waldseemüller who named them "America" in his honor.\n\nThe consequences of Columbus's voyages were world-altering. The "Columbian Exchange" — the transfer of plants, animals, diseases, and people between the Old and New Worlds — transformed both hemispheres. Potatoes, tomatoes, corn, and tobacco flowed to Europe; horses, cattle, wheat, and sugarcane went to the Americas.\n\nBut the exchange had a catastrophic dimension. European diseases — smallpox, measles, influenza — devastated Indigenous populations who had no immunity. Within a century of contact, the Indigenous population of the Americas had declined by an estimated 90%. The Spanish conquest of the Aztec and Inca empires, the Atlantic slave trade, and centuries of colonial exploitation followed in Columbus's wake.`,
      },
    ],
    characters: [
      { name: "Christopher Columbus", role: "Genoese explorer", wikiUrl: "https://en.wikipedia.org/wiki/Christopher_Columbus" },
      { name: "Queen Isabella I", role: "Queen of Castile who funded the voyage", wikiUrl: "https://en.wikipedia.org/wiki/Isabella_I_of_Castile" },
      { name: "Amerigo Vespucci", role: "Explorer who recognized the New World", wikiUrl: "https://en.wikipedia.org/wiki/Amerigo_Vespucci" },
    ],
  },
  "ren-3": {
    id: "ren-3",
    title: "Leonardo & the Mona Lisa",
    date: "1503–1519",
    chapters: [
      {
        id: "genius",
        title: "The Universal Genius",
        content: `Leonardo da Vinci (1452–1519) is often called the archetypal "Renaissance man" — a title he earned through extraordinary achievements in painting, sculpture, architecture, engineering, anatomy, botany, geology, and mathematics. Born the illegitimate son of a Florentine notary, Leonardo was apprenticed to the artist Andrea del Verrocchio, where he quickly surpassed his master.\n\nLeonardo's notebooks — over 7,000 pages of drawings, diagrams, and mirror-script text — reveal a mind of staggering range. He designed flying machines, armored vehicles, diving suits, and solar concentrators centuries before such inventions became practical. His anatomical drawings, based on dissection of over thirty human corpses, were the most accurate produced before modern medicine.\n\nYet Leonardo was also famously unreliable. He abandoned commissions, left masterpieces unfinished, and wandered between patrons in Florence, Milan, Rome, and France. His perfectionism and restless curiosity made him both the greatest genius and the greatest procrastinator of the Renaissance.`,
      },
      {
        id: "painting",
        title: "The Mona Lisa",
        content: `The Mona Lisa (La Gioconda) is the most famous painting in the world — a status it has held for centuries. Leonardo began the portrait around 1503, likely commissioned by the Florentine merchant Francesco del Giocondo as a portrait of his wife, Lisa Gherardini. Leonardo worked on it intermittently for years, carrying it with him to France, where he died in 1519.\n\nThe painting's fame rests on Leonardo's revolutionary techniques. His sfumato method — building up translucent layers of paint to create soft, hazy transitions — gives Mona Lisa's face an almost living quality. Her famous enigmatic smile seems to change depending on where the viewer focuses: direct eye contact makes it appear to fade, while peripheral vision enhances it. This is not accident but deliberate exploitation of how the human visual system processes light and shadow.\n\nThe landscape behind the figure is equally remarkable — a dreamlike vista of winding roads, bridges, and geological formations that recede into atmospheric haze, demonstrating Leonardo's mastery of aerial perspective. The painting entered the French royal collection after Leonardo's death and has hung in the Louvre since the French Revolution. Its theft in 1911 by an Italian nationalist made it an international celebrity, cementing its status as the world's most recognizable artwork.`,
      },
    ],
    characters: [
      { name: "Leonardo da Vinci", role: "Artist, scientist, and polymath", wikiUrl: "https://en.wikipedia.org/wiki/Leonardo_da_Vinci" },
      { name: "Lisa Gherardini", role: "Subject of the Mona Lisa", wikiUrl: "https://en.wikipedia.org/wiki/Lisa_del_Giocondo" },
      { name: "Lorenzo de' Medici", role: "Ruler of Florence, patron of arts", wikiUrl: "https://en.wikipedia.org/wiki/Lorenzo_de%27_Medici" },
    ],
  },
  "ren-4": {
    id: "ren-4",
    title: "The Protestant Reformation",
    date: "1517",
    chapters: [
      {
        id: "theses",
        title: "The 95 Theses",
        content: `On October 31, 1517, Martin Luther, an Augustinian monk and theology professor at the University of Wittenberg, reportedly nailed a document to the door of the Castle Church — his 95 Theses challenging the Catholic Church's sale of indulgences. Whether the dramatic nailing actually occurred is debated, but Luther certainly distributed the document, and its impact was revolutionary.\n\nIndulgences were certificates sold by the Church that promised to reduce time in purgatory for the buyer or their deceased relatives. The Dominican friar Johann Tetzel had been selling them aggressively in Germany, allegedly using the slogan: "As soon as a coin in the coffer rings, a soul from purgatory springs." The proceeds funded the construction of St. Peter's Basilica in Rome.\n\nLuther argued that salvation came through faith alone (sola fide), not through works or payments. He challenged the pope's authority over purgatory and insisted that Scripture — not Church tradition — was the ultimate religious authority (sola scriptura). Thanks to the printing press, his arguments spread across Germany within weeks and across Europe within months.`,
      },
      {
        id: "split",
        title: "The Fracturing of Christendom",
        content: `Luther's challenge escalated rapidly. Summoned before the Imperial Diet at Worms in 1521, he refused to recant, declaring: "Here I stand. I can do no other." Emperor Charles V declared him an outlaw, but the Elector of Saxony protected him in Wartburg Castle, where Luther translated the New Testament into German — a landmark of both religious and literary history.\n\nThe Reformation quickly outgrew Luther's control. Huldrych Zwingli led a parallel reform movement in Zurich. John Calvin established a theocratic republic in Geneva that became a model for Reformed churches worldwide. In England, Henry VIII's desire for a divorce led to the break with Rome and the creation of the Church of England — a political reformation that took on religious dimensions under his successors.\n\nThe Catholic Church responded with the Counter-Reformation, formalized at the Council of Trent (1545–1563). The Jesuits, founded by Ignatius of Loyola, became the Church's intellectual and missionary vanguard. But the religious unity of Western Christendom was permanently shattered, leading to over a century of devastating religious wars.`,
      },
    ],
    characters: [
      { name: "Martin Luther", role: "Initiator of the Protestant Reformation", wikiUrl: "https://en.wikipedia.org/wiki/Martin_Luther" },
      { name: "John Calvin", role: "French theologian and reformer", wikiUrl: "https://en.wikipedia.org/wiki/John_Calvin" },
      { name: "Charles V", role: "Holy Roman Emperor", wikiUrl: "https://en.wikipedia.org/wiki/Charles_V,_Holy_Roman_Emperor" },
    ],
  },
};
