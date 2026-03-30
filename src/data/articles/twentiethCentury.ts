import type { Article } from "./types";

export const ww1Articles: Record<string, Article> = {
  "ww1-1": {
    id: "ww1-1",
    title: "The Great War Begins",
    date: "1914",
    chapters: [
      {
        id: "assassination",
        title: "The Shot That Changed the World",
        content: `On June 28, 1914, Archduke Franz Ferdinand of Austria-Hungary and his wife Sophie were assassinated in Sarajevo by Gavrilo Princip, a 19-year-old Bosnian Serb nationalist. The assassination triggered a chain reaction of alliance obligations and ultimatums that plunged Europe into war within six weeks.\n\nAustria-Hungary, backed by Germany, issued an ultimatum to Serbia so harsh it was designed to be rejected. Serbia's partial acceptance was deemed insufficient. Austria declared war on July 28. Russia mobilized in support of Serbia; Germany declared war on Russia and France; and Britain entered when Germany violated Belgian neutrality.\n\nThe war that everyone expected to be "over by Christmas" became a four-year nightmare. The Western Front solidified into a 400-mile system of trenches stretching from the Swiss border to the English Channel. New technologies — machine guns, poison gas, tanks, and aircraft — made offensive warfare suicidal. The Battle of the Somme (1916) alone cost over one million casualties for negligible territorial gain.`,
      },
    ],
    characters: [
      { name: "Archduke Franz Ferdinand", role: "Heir to the Austro-Hungarian throne", wikiUrl: "https://en.wikipedia.org/wiki/Archduke_Franz_Ferdinand_of_Austria" },
      { name: "Gavrilo Princip", role: "Assassin who triggered WWI", wikiUrl: "https://en.wikipedia.org/wiki/Gavrilo_Princip" },
      { name: "Kaiser Wilhelm II", role: "German Emperor", wikiUrl: "https://en.wikipedia.org/wiki/Wilhelm_II,_German_Emperor" },
    ],
  },
  "ww1-2": {
    id: "ww1-2",
    title: "The Russian Revolution",
    date: "1917",
    chapters: [
      {
        id: "revolution",
        title: "From Tsar to Soviet",
        content: `The Russian Revolution of 1917 was actually two revolutions. The February Revolution (March by the Western calendar) began as bread riots in Petrograd and escalated into a general strike. When the army refused to fire on protesters, Tsar Nicholas II abdicated, ending three centuries of Romanov rule. A Provisional Government led by Alexander Kerensky attempted to establish liberal democracy.\n\nBut the Provisional Government made a fatal error: it continued the deeply unpopular war against Germany. Vladimir Lenin, leader of the Bolshevik faction of the Russian Social Democratic Party, returned from exile in Switzerland (transported across Germany in a sealed train — the Germans hoped he would destabilize Russia). His slogan — "Peace, Land, and Bread" — captured the mood of exhausted soldiers, hungry workers, and land-starved peasants.\n\nOn October 25 (November 7), the Bolsheviks seized power in a nearly bloodless coup, capturing key buildings in Petrograd. Lenin immediately sued for peace with Germany (the Treaty of Brest-Litovsk) and began nationalizing industry and redistributing land. The Russian Civil War (1917–1922) followed, pitting the Bolshevik "Reds" against a loose coalition of "Whites" — monarchists, liberals, and foreign interventionists. The Bolsheviks won, and the Soviet Union was formally established in 1922.`,
      },
    ],
    characters: [
      { name: "Vladimir Lenin", role: "Leader of the Bolshevik Revolution", wikiUrl: "https://en.wikipedia.org/wiki/Vladimir_Lenin" },
      { name: "Tsar Nicholas II", role: "Last Emperor of Russia", wikiUrl: "https://en.wikipedia.org/wiki/Nicholas_II_of_Russia" },
      { name: "Leon Trotsky", role: "Revolutionary and military leader", wikiUrl: "https://en.wikipedia.org/wiki/Leon_Trotsky" },
    ],
  },
  "ww1-3": {
    id: "ww1-3",
    title: "Armistice Day",
    date: "1918",
    chapters: [
      {
        id: "armistice",
        title: "The Eleventh Hour",
        content: `By autumn 1918, Germany's position was collapsing. The entry of the United States in 1917 had tipped the balance of manpower and resources decisively against the Central Powers. The Allied Hundred Days Offensive, beginning in August 1918, broke through the Hindenburg Line. Bulgaria, the Ottoman Empire, and Austria-Hungary all sought armistices.\n\nWithin Germany, revolution erupted. Sailors mutinied at Kiel, workers' councils formed in major cities, and Kaiser Wilhelm II abdicated on November 9. A republic was declared. Two days later, at 5:00 AM on November 11, 1918, German representatives signed an armistice in a railway carriage in the Forest of Compiègne. The ceasefire took effect at 11:00 AM — "the eleventh hour of the eleventh day of the eleventh month."\n\nThe Great War left approximately 20 million dead and 21 million wounded. It destroyed four empires (German, Austro-Hungarian, Ottoman, and Russian), redrew the map of Europe and the Middle East, and created conditions that led directly to World War II. The Treaty of Versailles imposed harsh terms on Germany — territorial losses, massive reparations, and a "war guilt" clause — that embittered the German population and provided fertile ground for extremism.`,
      },
    ],
    characters: [
      { name: "Woodrow Wilson", role: "U.S. President, proposed the Fourteen Points", wikiUrl: "https://en.wikipedia.org/wiki/Woodrow_Wilson" },
      { name: "Georges Clemenceau", role: "French Prime Minister", wikiUrl: "https://en.wikipedia.org/wiki/Georges_Clemenceau" },
      { name: "Kaiser Wilhelm II", role: "German Emperor who abdicated", wikiUrl: "https://en.wikipedia.org/wiki/Wilhelm_II,_German_Emperor" },
    ],
  },
};

export const ww2Articles: Record<string, Article> = {
  "ww2-1": {
    id: "ww2-1",
    title: "World War II Erupts",
    date: "1939",
    chapters: [
      {
        id: "outbreak",
        title: "The Road to War",
        content: `Adolf Hitler's Nazi regime pursued an aggressive foreign policy from its inception. The remilitarization of the Rhineland (1936), the Anschluss with Austria (March 1938), and the annexation of Czechoslovakia's Sudetenland (September 1938) were met with a policy of appeasement by Britain and France, who hoped to avoid another devastating war.\n\nBritish Prime Minister Neville Chamberlain's declaration of "peace for our time" after the Munich Agreement proved tragically premature. When Germany invaded the rest of Czechoslovakia in March 1939, Britain and France finally drew a line, guaranteeing Poland's independence.\n\nOn September 1, 1939, Germany invaded Poland with a devastating new form of warfare — Blitzkrieg ("lightning war") — combining tanks, aircraft, and motorized infantry in rapid, overwhelming assaults. Britain and France declared war on September 3. Poland fell within weeks, partitioned between Germany and the Soviet Union under the secret Molotov-Ribbentrop Pact.\n\nThe deadliest conflict in human history had begun. Before it ended six years later, it would kill an estimated 70–85 million people — approximately 3% of the world's population — including six million Jews murdered in the Holocaust.`,
      },
    ],
    characters: [
      { name: "Adolf Hitler", role: "Führer of Nazi Germany", wikiUrl: "https://en.wikipedia.org/wiki/Adolf_Hitler" },
      { name: "Neville Chamberlain", role: "British PM who pursued appeasement", wikiUrl: "https://en.wikipedia.org/wiki/Neville_Chamberlain" },
      { name: "Winston Churchill", role: "British PM who led wartime Britain", wikiUrl: "https://en.wikipedia.org/wiki/Winston_Churchill" },
    ],
  },
  "ww2-2": {
    id: "ww2-2",
    title: "D-Day: Operation Overlord",
    date: "1944",
    chapters: [
      {
        id: "dday",
        title: "The Longest Day",
        content: `June 6, 1944 — D-Day — was the largest amphibious military operation in history. Over 156,000 Allied troops from the United States, Britain, Canada, and other nations crossed the English Channel and stormed five beaches on the Normandy coast of France: Utah, Omaha, Gold, Juno, and Sword.\n\nThe operation had been planned for over a year under the supreme command of General Dwight D. Eisenhower. An elaborate deception campaign (Operation Fortitude) convinced the Germans that the main invasion would target Pas-de-Calais, 150 miles northeast. Poor weather delayed the invasion by one day; Eisenhower's meteorologist identified a brief window on June 6.\n\nThe assault began with overnight airborne drops behind enemy lines, followed by a massive naval bombardment at dawn. At Omaha Beach, American troops faced the fiercest resistance, suffering approximately 2,400 casualties. At Utah Beach, the landing went more smoothly. British and Canadian forces secured their beaches by midday.\n\nBy the end of June 6, the Allies had established a foothold in France. Within a month, over a million troops had landed. The liberation of Paris followed on August 25, 1944. D-Day marked the beginning of the end for Nazi Germany.`,
      },
    ],
    characters: [
      { name: "Dwight D. Eisenhower", role: "Supreme Allied Commander", wikiUrl: "https://en.wikipedia.org/wiki/Dwight_D._Eisenhower" },
      { name: "Erwin Rommel", role: "German commander of Atlantic defenses", wikiUrl: "https://en.wikipedia.org/wiki/Erwin_Rommel" },
      { name: "Bernard Montgomery", role: "British ground forces commander", wikiUrl: "https://en.wikipedia.org/wiki/Bernard_Montgomery" },
    ],
  },
  "ww2-3": {
    id: "ww2-3",
    title: "End of World War II",
    date: "1945",
    chapters: [
      {
        id: "end",
        title: "Victory and Its Price",
        content: `The final year of World War II saw both the liberation of the Nazi death camps and the most destructive weapons in human history. As Allied forces advanced from the west and the Soviet Red Army drove from the east, they discovered the full horror of the Holocaust — the systematic murder of six million Jews and millions of others in concentration and extermination camps.\n\nGermany surrendered unconditionally on May 8, 1945 — V-E Day — after Hitler's suicide in his Berlin bunker on April 30. The war in the Pacific continued until August, when the United States dropped atomic bombs on Hiroshima (August 6) and Nagasaki (August 9), killing over 200,000 people. Japan surrendered on August 15 (V-J Day), and the formal surrender was signed on September 2, 1945, aboard the USS Missouri in Tokyo Bay.\n\nThe aftermath reshaped the world order. The United Nations was established to prevent future global conflict. The Nuremberg Trials established the precedent that individuals — including heads of state — could be held accountable for war crimes and crimes against humanity. Europe was divided into Western and Soviet spheres of influence, setting the stage for the Cold War. The atomic age had begun.`,
      },
    ],
    characters: [
      { name: "Harry S. Truman", role: "U.S. President who authorized atomic bombings", wikiUrl: "https://en.wikipedia.org/wiki/Harry_S._Truman" },
      { name: "Joseph Stalin", role: "Soviet leader", wikiUrl: "https://en.wikipedia.org/wiki/Joseph_Stalin" },
      { name: "Emperor Hirohito", role: "Emperor of Japan", wikiUrl: "https://en.wikipedia.org/wiki/Hirohito" },
    ],
  },
};

export const spaceAgeArticles: Record<string, Article> = {
  "sp-1": {
    id: "sp-1",
    title: "Sputnik & The Space Race",
    date: "1957",
    chapters: [
      {
        id: "sputnik",
        title: "The Beep Heard Round the World",
        content: `On October 4, 1957, the Soviet Union launched Sputnik 1, the first artificial satellite, into Earth orbit. The 58-centimeter aluminum sphere, weighing just 83.6 kg, transmitted a simple radio beep for 21 days as it circled the planet every 96 minutes. That beep terrified the Western world.\n\nSputnik demonstrated that the Soviet Union possessed rockets powerful enough to deliver nuclear warheads to any point on Earth. The "Sputnik crisis" triggered a massive American response: the creation of NASA (1958), a dramatic increase in science and engineering education, and an accelerated missile development program.\n\nThe Space Race became the most visible arena of Cold War competition. The Soviets scored early victories: the first animal in orbit (Laika, 1957), the first human in space (Yuri Gagarin, April 12, 1961), and the first woman in space (Valentina Tereshkova, 1963). President John F. Kennedy responded by committing the United States to landing a man on the Moon before the end of the decade — a challenge that seemed almost impossible in 1961.`,
      },
    ],
    characters: [
      { name: "Sergei Korolev", role: "Chief Soviet rocket engineer", wikiUrl: "https://en.wikipedia.org/wiki/Sergei_Korolev" },
      { name: "Yuri Gagarin", role: "First human in space", wikiUrl: "https://en.wikipedia.org/wiki/Yuri_Gagarin" },
      { name: "John F. Kennedy", role: "U.S. President who launched the Moon program", wikiUrl: "https://en.wikipedia.org/wiki/John_F._Kennedy" },
    ],
  },
  "sp-2": {
    id: "sp-2",
    title: "One Giant Leap",
    date: "1969",
    chapters: [
      {
        id: "apollo",
        title: "Apollo 11",
        content: `On July 20, 1969, at 20:17 UTC, the Apollo 11 Lunar Module Eagle touched down on the surface of the Moon in the Sea of Tranquility. Commander Neil Armstrong reported to Mission Control: "Houston, Tranquility Base here. The Eagle has landed." Six hours later, Armstrong descended the ladder and became the first human to walk on another world.\n\n"That's one small step for [a] man, one giant leap for mankind," Armstrong said — words heard by an estimated 600 million people watching on television, the largest global audience in history to that point. Buzz Aldrin joined him on the surface 19 minutes later, describing the lunar landscape as "magnificent desolation." Michael Collins orbited overhead in the Command Module Columbia.\n\nThe astronauts spent about two and a half hours on the surface, collecting 21.5 kg of lunar samples, planting an American flag, and deploying scientific instruments. They left behind a plaque reading: "Here men from the planet Earth first set foot upon the Moon, July 1969 A.D. We came in peace for all mankind."\n\nThe Apollo program continued through 1972, landing twelve astronauts on the Moon across six missions. The achievement remains one of humanity's greatest technological and organizational triumphs — a demonstration that collective human effort can accomplish the seemingly impossible.`,
      },
    ],
    characters: [
      { name: "Neil Armstrong", role: "First human to walk on the Moon", wikiUrl: "https://en.wikipedia.org/wiki/Neil_Armstrong" },
      { name: "Buzz Aldrin", role: "Second person on the Moon", wikiUrl: "https://en.wikipedia.org/wiki/Buzz_Aldrin" },
      { name: "Michael Collins", role: "Command Module pilot", wikiUrl: "https://en.wikipedia.org/wiki/Michael_Collins_(astronaut)" },
    ],
  },
};

export const modernArticles: Record<string, Article> = {
  "mod-1": {
    id: "mod-1",
    title: "Fall of the Berlin Wall",
    date: "1989",
    chapters: [
      {
        id: "fall",
        title: "The Wall Comes Down",
        content: `The Berlin Wall — a 155-kilometer barrier of concrete, barbed wire, and guard towers — had divided Berlin since August 13, 1961. Built by the East German government to prevent its citizens from fleeing to the West, the Wall became the most potent symbol of the Cold War division of Europe.\n\nBy 1989, the Soviet bloc was crumbling. Soviet leader Mikhail Gorbachev's reforms (glasnost and perestroika) had loosened Moscow's grip on Eastern Europe. Hungary opened its border with Austria in May 1989, allowing East Germans to escape westward. Massive protests erupted in East German cities, with crowds chanting "Wir sind das Volk!" ("We are the people!").\n\nOn November 9, 1989, East German spokesman Günter Schabowski announced new travel regulations at a press conference. When asked when the new rules took effect, he glanced at his notes and replied: "Immediately, without delay." Within hours, tens of thousands of East Berliners surged to the border crossings. Overwhelmed guards, with no clear orders, opened the gates.\n\nBerliners from both sides climbed atop the Wall, embraced strangers, and began chipping away at the concrete with hammers and pickaxes. The celebrations continued for days. German reunification followed on October 3, 1990, and the Cold War was effectively over.`,
      },
    ],
    characters: [
      { name: "Mikhail Gorbachev", role: "Soviet leader whose reforms enabled change", wikiUrl: "https://en.wikipedia.org/wiki/Mikhail_Gorbachev" },
      { name: "Helmut Kohl", role: "West German Chancellor who oversaw reunification", wikiUrl: "https://en.wikipedia.org/wiki/Helmut_Kohl" },
      { name: "Ronald Reagan", role: "U.S. President — 'Tear down this wall!'", wikiUrl: "https://en.wikipedia.org/wiki/Ronald_Reagan" },
    ],
  },
  "mod-2": {
    id: "mod-2",
    title: "Dissolution of the USSR",
    date: "1991",
    chapters: [
      {
        id: "dissolution",
        title: "The End of the Soviet Union",
        content: `The dissolution of the Soviet Union on December 26, 1991, was one of the most significant geopolitical events of the 20th century. The world's first communist state, which had rivaled the United States for global supremacy for over four decades, simply ceased to exist — not through war or revolution, but through a process of political negotiation and institutional collapse.\n\nMikhail Gorbachev's reforms had intended to revitalize the Soviet system, not destroy it. But glasnost (openness) unleashed long-suppressed nationalist movements in the Baltic states, Ukraine, Georgia, and Central Asia. Perestroika (restructuring) disrupted the planned economy without replacing it, leading to shortages and public frustration.\n\nA failed hardline coup attempt in August 1991 — in which communist officials briefly detained Gorbachev — backfired spectacularly. Boris Yeltsin, president of the Russian Soviet Republic, stood on a tank outside the Russian parliament building and rallied opposition to the coup. The plotters surrendered within three days, but the event fatally undermined both the Communist Party and the central Soviet government.\n\nOne by one, Soviet republics declared independence. On December 8, the leaders of Russia, Ukraine, and Belarus signed the Belavezha Accords, declaring the Soviet Union dissolved. On December 25, Gorbachev resigned as president, and the Soviet flag was lowered over the Kremlin for the last time. Fifteen independent nations emerged from the wreckage of the USSR, and the Cold War order that had defined international relations since 1945 was gone.`,
      },
    ],
    characters: [
      { name: "Mikhail Gorbachev", role: "Last leader of the Soviet Union", wikiUrl: "https://en.wikipedia.org/wiki/Mikhail_Gorbachev" },
      { name: "Boris Yeltsin", role: "First President of the Russian Federation", wikiUrl: "https://en.wikipedia.org/wiki/Boris_Yeltsin" },
      { name: "Ronald Reagan", role: "U.S. President during late Cold War", wikiUrl: "https://en.wikipedia.org/wiki/Ronald_Reagan" },
    ],
  },
};
