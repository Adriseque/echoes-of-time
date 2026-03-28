import type { Article } from "./types";

export const frenchRevolutionArticles: Record<string, Article> = {
  "fr-1": {
    id: "fr-1",
    title: "Storming of the Bastille",
    date: "1789",
    chapters: [
      {
        id: "causes",
        title: "The Powder Keg",
        content: `By 1789, France was a nation on the brink. Decades of fiscal mismanagement, costly wars (including support for the American Revolution), and a rigid feudal tax system had bankrupted the crown. A series of bad harvests in the late 1780s sent bread prices soaring, pushing the urban poor to the edge of starvation.\n\nKing Louis XVI, well-meaning but indecisive, convened the Estates-General in May 1789 — the first time in 175 years — to address the fiscal crisis. The three estates (clergy, nobility, and commoners) immediately clashed over voting procedures. The Third Estate, representing 98% of the population but granted only one-third of the votes, broke away and declared itself the National Assembly, swearing the famous Tennis Court Oath not to disband until France had a constitution.`,
      },
      {
        id: "storm",
        title: "July 14, 1789",
        content: `Rumors swept Paris that the king was massing troops to dissolve the National Assembly. On July 14, a crowd of roughly 1,000 Parisians — artisans, shopkeepers, and soldiers — descended on the Bastille, a medieval fortress-prison in eastern Paris that symbolized royal authority.\n\nThe Bastille held only seven prisoners that day, but it contained a large store of gunpowder and ammunition. After hours of negotiation and sporadic fighting, the crowd stormed the fortress. The garrison's commander, the Marquis de Launay, was captured and killed; his head was paraded through the streets on a pike.\n\nThe fall of the Bastille was more symbolic than strategic, but its impact was enormous. It demonstrated that the people could challenge royal power by force. When Louis XVI was informed of the events, he asked, "Is it a revolt?" The Duke de La Rochefoucauld famously replied: "No, sire, it is a revolution." July 14 became France's national holiday — the equivalent of America's Fourth of July.`,
      },
    ],
    characters: [
      { name: "Louis XVI", role: "King of France", wikiUrl: "https://en.wikipedia.org/wiki/Louis_XVI" },
      { name: "Marie Antoinette", role: "Queen of France", wikiUrl: "https://en.wikipedia.org/wiki/Marie_Antoinette" },
      { name: "Marquis de Lafayette", role: "Revolutionary leader and commander", wikiUrl: "https://en.wikipedia.org/wiki/Marquis_de_Lafayette" },
    ],
  },
  "fr-2": {
    id: "fr-2",
    title: "Declaration of the Rights of Man",
    date: "1791",
    chapters: [
      {
        id: "drafting",
        title: "A New Foundation",
        content: `The Declaration of the Rights of Man and of the Citizen, adopted by the National Assembly on August 26, 1789, is one of the foundational documents of modern democracy. Drafted primarily by the Marquis de Lafayette with input from Thomas Jefferson (then U.S. ambassador to France), it drew on Enlightenment philosophy, English constitutional tradition, and the American Declaration of Independence.\n\nThe Declaration proclaimed that "men are born and remain free and equal in rights" and that the purpose of government is to preserve the "natural and imprescriptible rights" of liberty, property, security, and resistance to oppression. It established the principles of popular sovereignty, the rule of law, freedom of speech and religion, and the presumption of innocence.\n\nIts seventeen articles dismantled the legal foundations of the Ancien Régime — feudal privileges, arbitrary imprisonment (lettres de cachet), censorship, and taxation without consent. The Declaration became the preamble to the Constitution of 1791 and remains part of the current French constitutional framework.`,
      },
    ],
    characters: [
      { name: "Marquis de Lafayette", role: "Primary author of the Declaration", wikiUrl: "https://en.wikipedia.org/wiki/Marquis_de_Lafayette" },
      { name: "Thomas Jefferson", role: "U.S. Ambassador who contributed ideas", wikiUrl: "https://en.wikipedia.org/wiki/Thomas_Jefferson" },
    ],
  },
  "fr-3": {
    id: "fr-3",
    title: "The Reign of Terror",
    date: "1793",
    chapters: [
      {
        id: "terror",
        title: "The Revolution Devours Its Children",
        content: `The Reign of Terror (September 1793 – July 1794) represents the darkest chapter of the French Revolution. Facing foreign invasion, civil war in the Vendée, and internal political crises, the revolutionary government under the Committee of Public Safety — dominated by Maximilien Robespierre — suspended civil liberties and launched a campaign of political repression.\n\nThe Revolutionary Tribunal, operating with minimal legal protections, sent an estimated 16,000–40,000 people to the guillotine. Victims ranged from Queen Marie Antoinette and leading Girondins to ordinary citizens accused of counter-revolutionary sentiments. The Law of 22 Prairial (June 1794) stripped defendants of legal counsel and allowed conviction on "moral proof" alone, accelerating the killing.\n\nRobespierre justified the Terror as necessary to defend the Revolution: "Terror is nothing but prompt, severe, inflexible justice; it is therefore an emanation of virtue." But the spiral of violence consumed its own architects. Georges Danton, once a leading revolutionary, was guillotined for alleged moderation. On 9 Thermidor (July 27, 1794), Robespierre himself was arrested and executed the following day, ending the Terror.`,
      },
    ],
    characters: [
      { name: "Maximilien Robespierre", role: "Leader of the Committee of Public Safety", wikiUrl: "https://en.wikipedia.org/wiki/Maximilien_Robespierre" },
      { name: "Georges Danton", role: "Revolutionary leader executed during the Terror", wikiUrl: "https://en.wikipedia.org/wiki/Georges_Danton" },
      { name: "Marie Antoinette", role: "Queen of France, executed 1793", wikiUrl: "https://en.wikipedia.org/wiki/Marie_Antoinette" },
    ],
  },
};

export const napoleonArticles: Record<string, Article> = {
  "nap-1": {
    id: "nap-1",
    title: "Rise of Napoleon",
    date: "1799",
    chapters: [
      {
        id: "rise",
        title: "From Corsica to Consul",
        content: `Napoleon Bonaparte was born on August 15, 1769, in Ajaccio, Corsica — just one year after the island was transferred from Genoa to France. A scholarship student at French military academies, the young Corsican was an outsider marked by his accent and modest origins. But the Revolution, which shattered the old aristocratic officer corps, opened a path for talented men regardless of birth.\n\nNapoleon first gained fame at the Siege of Toulon (1793), where his artillery tactics recaptured the port from British-supported royalists. His "whiff of grapeshot" — the decisive use of cannon to disperse a royalist mob in Paris in 1795 — brought him to the attention of the Directory. His brilliant Italian campaign of 1796–97, in which he defeated larger Austrian armies through speed and audacity, made him France's most celebrated general at age 27.\n\nAfter an ambitious but ultimately unsuccessful expedition to Egypt (1798–99), Napoleon returned to a France exhausted by revolutionary chaos. On 18 Brumaire (November 9, 1799), he overthrew the Directory in a coup d'état and established the Consulate, with himself as First Consul — effectively dictator of France.`,
      },
    ],
    characters: [
      { name: "Napoleon Bonaparte", role: "First Consul and future Emperor", wikiUrl: "https://en.wikipedia.org/wiki/Napoleon" },
      { name: "Joséphine de Beauharnais", role: "Napoleon's first wife", wikiUrl: "https://en.wikipedia.org/wiki/Jos%C3%A9phine_de_Beauharnais" },
    ],
  },
  "nap-2": {
    id: "nap-2",
    title: "The Napoleonic Wars",
    date: "1804–1815",
    chapters: [
      {
        id: "empire",
        title: "Emperor of the French",
        content: `On December 2, 1804, in a ceremony at Notre-Dame Cathedral, Napoleon crowned himself Emperor of the French — famously taking the crown from Pope Pius VII's hands and placing it on his own head. The gesture was deliberate: Napoleon's authority came from himself and the French people, not from the Church.\n\nThe Napoleonic Wars engulfed Europe for over a decade. Napoleon's Grande Armée, built on revolutionary conscription and meritocratic promotion, was the most formidable military force of its age. At Austerlitz (1805), Napoleon destroyed the combined Austrian and Russian armies in what many consider his greatest victory. At Jena-Auerstedt (1806), he crushed Prussia in a single day.\n\nNapoleon reorganized conquered territories, imposing the Napoleonic Code — a comprehensive civil law system that guaranteed equality before the law, property rights, and secular governance. He dissolved the Holy Roman Empire, consolidated German states, and created satellite kingdoms ruled by his brothers. His Continental System attempted to strangle British trade, inadvertently stimulating European industrialization.`,
      },
    ],
    characters: [
      { name: "Napoleon Bonaparte", role: "Emperor of the French", wikiUrl: "https://en.wikipedia.org/wiki/Napoleon" },
      { name: "Duke of Wellington", role: "British commander at Waterloo", wikiUrl: "https://en.wikipedia.org/wiki/Duke_of_Wellington" },
      { name: "Tsar Alexander I", role: "Emperor of Russia", wikiUrl: "https://en.wikipedia.org/wiki/Alexander_I_of_Russia" },
    ],
  },
  "nap-3": {
    id: "nap-3",
    title: "Battle of Waterloo",
    date: "1815",
    chapters: [
      {
        id: "waterloo",
        title: "Napoleon's Final Gamble",
        content: `After his disastrous invasion of Russia in 1812 — which destroyed the Grande Armée — and defeat by the Sixth Coalition in 1814, Napoleon was exiled to the island of Elba. He escaped in March 1815, landed in southern France, and marched to Paris, gathering an army as soldiers rallied to his cause. The restored Bourbon king, Louis XVIII, fled without a fight.\n\nThe Allied powers immediately declared war. Napoleon moved to strike before the coalition could fully mobilize, invading Belgium to separate the British and Prussian armies. On June 18, 1815, he faced the Duke of Wellington's Anglo-allied army near the village of Waterloo, south of Brussels.\n\nThe battle was, in Wellington's words, "the nearest-run thing you ever saw." French infantry and cavalry repeatedly charged the Allied lines but failed to break them. Napoleon delayed his main attack waiting for the ground to dry, losing precious hours. When the Prussian army arrived on his right flank in the late afternoon, the French position became untenable. The Imperial Guard's final assault was repulsed, and the army disintegrated.\n\nNapoleon abdicated four days later and surrendered to the British. He was exiled to Saint Helena, a remote island in the South Atlantic, where he died on May 5, 1821. Waterloo ended the Napoleonic era and ushered in the Congress of Vienna's conservative order, which maintained relative peace in Europe for nearly a century.`,
      },
    ],
    characters: [
      { name: "Napoleon Bonaparte", role: "Emperor of the French", wikiUrl: "https://en.wikipedia.org/wiki/Napoleon" },
      { name: "Duke of Wellington", role: "Commander of the Anglo-allied army", wikiUrl: "https://en.wikipedia.org/wiki/Duke_of_Wellington" },
      { name: "Gebhard von Blücher", role: "Prussian field marshal", wikiUrl: "https://en.wikipedia.org/wiki/Gebhard_Leberecht_von_Bl%C3%BCcher" },
    ],
  },
};

export const industrialArticles: Record<string, Article> = {
  "ind-1": {
    id: "ind-1",
    title: "The Industrial Revolution",
    date: "1760–1840",
    chapters: [
      {
        id: "origins",
        title: "Why Britain First?",
        content: `The Industrial Revolution — the transition from agrarian handicraft economies to machine-driven factory production — began in Britain in the mid-18th century. Why Britain first? Historians point to a convergence of factors: abundant coal and iron deposits, a network of navigable rivers and canals, a relatively stable political system, strong property rights, a culture of empirical inquiry, and a large colonial empire that provided both raw materials and markets.\n\nThe textile industry led the way. James Hargreaves's spinning jenny (1764), Richard Arkwright's water frame (1769), and Samuel Crompton's spinning mule (1779) mechanized cotton spinning, dramatically increasing output. Edmund Cartwright's power loom (1785) mechanized weaving. Cotton factories — powered first by water and then by James Watt's improved steam engine (1769) — concentrated workers in unprecedented numbers.\n\nThe social consequences were enormous. Millions migrated from countryside to city. Manchester, Liverpool, and Birmingham exploded in population. Working conditions in the early factories were brutal: 14-hour days, child labor, dangerous machinery, and squalid housing. But industrialization also created new wealth, a growing middle class, and eventually — through political reform and labor organization — improved living standards.`,
      },
    ],
    characters: [
      { name: "James Watt", role: "Inventor of the improved steam engine", wikiUrl: "https://en.wikipedia.org/wiki/James_Watt" },
      { name: "Richard Arkwright", role: "Pioneer of the factory system", wikiUrl: "https://en.wikipedia.org/wiki/Richard_Arkwright" },
    ],
  },
  "ind-2": {
    id: "ind-2",
    title: "Revolutions Across Europe",
    date: "1848",
    chapters: [
      {
        id: "spring",
        title: "The Springtime of Peoples",
        content: `In 1848, a wave of revolutions swept across Europe with astonishing speed. Beginning in France in February, revolutionary movements erupted in the German states, the Austrian Empire, Italy, Hungary, Denmark, and beyond. The "Springtime of Peoples" was driven by a volatile mix of liberal demands for constitutional government, nationalist aspirations for self-determination, and working-class anger over economic hardship.\n\nIn France, King Louis-Philippe abdicated and the Second Republic was proclaimed. In Vienna, Metternich — the architect of European conservatism — fled in disguise. In Berlin, Friedrich Wilhelm IV of Prussia was forced to promise a constitution. In Hungary, Lajos Kossuth declared independence from the Habsburgs. In Italy, revolutionaries briefly expelled the Austrians and established republics in Rome and Venice.\n\nYet by 1849, nearly all the revolutions had been crushed. Conservative forces regrouped, armies were deployed, and the revolutionaries — divided by class, nationality, and ideology — failed to coordinate. The 1848 revolutions produced few immediate political changes but accelerated long-term trends toward national unification (Italy in 1861, Germany in 1871), constitutional government, and workers' rights.`,
      },
    ],
    characters: [
      { name: "Klemens von Metternich", role: "Austrian chancellor who fled in revolution", wikiUrl: "https://en.wikipedia.org/wiki/Klemens_von_Metternich" },
      { name: "Lajos Kossuth", role: "Leader of the Hungarian Revolution", wikiUrl: "https://en.wikipedia.org/wiki/Lajos_Kossuth" },
      { name: "Karl Marx", role: "Published the Communist Manifesto in 1848", wikiUrl: "https://en.wikipedia.org/wiki/Karl_Marx" },
    ],
  },
};
