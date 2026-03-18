import ancientRome from "@/assets/ancient-rome.jpg";
import medievalEurope from "@/assets/medieval-europe.jpg";
import renaissance from "@/assets/renaissance.jpg";
import frenchRevolution from "@/assets/french-revolution.jpg";
import napoleon from "@/assets/napoleon.jpg";
import industrialRevolution from "@/assets/industrial-revolution.jpg";
import worldWar1 from "@/assets/world-war-1.jpg";
import worldWar2 from "@/assets/world-war-2.jpg";
import moonLanding from "@/assets/moon-landing.jpg";
import berlinWall from "@/assets/berlin-wall.jpg";

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  side: "left" | "right";
}

export interface TimelinePeriod {
  id: string;
  backgroundImage: string;
  events: TimelineEvent[];
}

export const timelinePeriods: TimelinePeriod[] = [
  {
    id: "ancient-rome",
    backgroundImage: ancientRome,
    events: [
      {
        id: "rome-1",
        date: "753 BC",
        title: "Founding of Rome",
        description:
          "According to legend, Romulus founds the city of Rome on the banks of the Tiber, beginning one of history's greatest civilizations.",
        side: "right",
      },
      {
        id: "rome-2",
        date: "509 BC",
        title: "Birth of the Republic",
        description:
          "Rome overthrows its last king and establishes the Roman Republic, pioneering representative government and civic law.",
        side: "left",
      },
      {
        id: "rome-3",
        date: "44 BC",
        title: "Assassination of Caesar",
        description:
          "Julius Caesar is assassinated on the Ides of March, plunging Rome into civil war and ending the Republic era.",
        side: "right",
      },
      {
        id: "rome-4",
        date: "476 AD",
        title: "Fall of the Western Empire",
        description:
          "The last Roman emperor Romulus Augustulus is deposed by Germanic chieftain Odoacer, marking the end of ancient Rome.",
        side: "left",
      },
    ],
  },
  {
    id: "medieval",
    backgroundImage: medievalEurope,
    events: [
      {
        id: "med-1",
        date: "800",
        title: "Coronation of Charlemagne",
        description:
          "Pope Leo III crowns Charlemagne as Emperor of the Romans, reviving the idea of a unified Christian Europe.",
        side: "right",
      },
      {
        id: "med-2",
        date: "1066",
        title: "Norman Conquest of England",
        description:
          "William the Conqueror defeats King Harold at Hastings, forever changing English language, culture, and governance.",
        side: "left",
      },
      {
        id: "med-3",
        date: "1095–1291",
        title: "The Crusades",
        description:
          "A series of religious wars launched by European Christians to reclaim the Holy Land, reshaping East-West relations for centuries.",
        side: "right",
      },
      {
        id: "med-4",
        date: "1347–1351",
        title: "The Black Death",
        description:
          "Bubonic plague devastates Europe, killing up to 60% of the population and fundamentally transforming medieval society.",
        side: "left",
      },
    ],
  },
  {
    id: "renaissance",
    backgroundImage: renaissance,
    events: [
      {
        id: "ren-1",
        date: "1440",
        title: "The Printing Press",
        description:
          "Johannes Gutenberg invents the movable-type printing press, revolutionizing the spread of knowledge across Europe.",
        side: "right",
      },
      {
        id: "ren-2",
        date: "1492",
        title: "Columbus Reaches the Americas",
        description:
          "Christopher Columbus lands in the New World, launching an age of exploration that connects continents forever.",
        side: "left",
      },
      {
        id: "ren-3",
        date: "1503–1519",
        title: "Leonardo & the Mona Lisa",
        description:
          "Leonardo da Vinci paints the Mona Lisa, embodying the Renaissance spirit of art, science, and human potential.",
        side: "right",
      },
      {
        id: "ren-4",
        date: "1517",
        title: "The Protestant Reformation",
        description:
          "Martin Luther nails his 95 Theses to the church door in Wittenberg, splitting Western Christianity and reshaping Europe.",
        side: "left",
      },
    ],
  },
  {
    id: "french-revolution",
    backgroundImage: frenchRevolution,
    events: [
      {
        id: "fr-1",
        date: "1789",
        title: "Storming of the Bastille",
        description:
          "The people of Paris storm the Bastille fortress, igniting the French Revolution and the fall of absolute monarchy.",
        side: "right",
      },
      {
        id: "fr-2",
        date: "1791",
        title: "Declaration of Rights",
        description:
          "The Declaration of the Rights of Man and of the Citizen establishes fundamental freedoms and equality before the law.",
        side: "left",
      },
      {
        id: "fr-3",
        date: "1793",
        title: "The Reign of Terror",
        description:
          "Robespierre's Committee of Public Safety launches a period of mass executions, reshaping France through fear.",
        side: "right",
      },
    ],
  },
  {
    id: "napoleon",
    backgroundImage: napoleon,
    events: [
      {
        id: "nap-1",
        date: "1799",
        title: "Rise of Napoleon",
        description:
          "Napoleon Bonaparte seizes power in a coup d'état, becoming First Consul and effectively ruler of France.",
        side: "left",
      },
      {
        id: "nap-2",
        date: "1804–1815",
        title: "The Napoleonic Wars",
        description:
          "Napoleon crowns himself Emperor and wages campaigns across Europe, redrawing the continent's borders.",
        side: "right",
      },
      {
        id: "nap-3",
        date: "1815",
        title: "Battle of Waterloo",
        description:
          "Napoleon's final defeat at Waterloo ends his rule and ushers in a new European order at the Congress of Vienna.",
        side: "left",
      },
    ],
  },
  {
    id: "industrial",
    backgroundImage: industrialRevolution,
    events: [
      {
        id: "ind-1",
        date: "1760–1840",
        title: "The Industrial Revolution",
        description:
          "Steam power, mechanized factories, and iron reshape society from agrarian life to urban industry across Britain and beyond.",
        side: "right",
      },
      {
        id: "ind-2",
        date: "1848",
        title: "Revolutions Across Europe",
        description:
          "A wave of liberal revolutions sweeps across the continent, demanding constitutional governments and national unity.",
        side: "left",
      },
    ],
  },
  {
    id: "ww1",
    backgroundImage: worldWar1,
    events: [
      {
        id: "ww1-1",
        date: "1914",
        title: "The Great War Begins",
        description:
          "The assassination of Archduke Franz Ferdinand triggers a chain of alliances, plunging Europe into unprecedented total war.",
        side: "right",
      },
      {
        id: "ww1-2",
        date: "1917",
        title: "The Russian Revolution",
        description:
          "The Bolsheviks seize power in Russia, ending centuries of tsarist rule and establishing the world's first communist state.",
        side: "left",
      },
      {
        id: "ww1-3",
        date: "1918",
        title: "Armistice Day",
        description:
          "The guns fall silent on November 11th. The war to end all wars leaves 20 million dead and a shattered continent.",
        side: "right",
      },
    ],
  },
  {
    id: "ww2",
    backgroundImage: worldWar2,
    events: [
      {
        id: "ww2-1",
        date: "1939",
        title: "World War II Erupts",
        description:
          "Nazi Germany invades Poland, triggering declarations of war from Britain and France. The deadliest conflict in human history begins.",
        side: "left",
      },
      {
        id: "ww2-2",
        date: "1944",
        title: "D-Day: Operation Overlord",
        description:
          "Allied forces storm the beaches of Normandy in the largest amphibious invasion in history, turning the tide in Europe.",
        side: "right",
      },
      {
        id: "ww2-3",
        date: "1945",
        title: "End of the War",
        description:
          "Germany surrenders in May, Japan in August after atomic bombings. The United Nations is founded to prevent future global conflict.",
        side: "left",
      },
    ],
  },
  {
    id: "space-age",
    backgroundImage: moonLanding,
    events: [
      {
        id: "sp-1",
        date: "1957",
        title: "Sputnik & The Space Race",
        description:
          "The Soviet Union launches Sputnik, the first artificial satellite, igniting a fierce technological competition with the United States.",
        side: "right",
      },
      {
        id: "sp-2",
        date: "1969",
        title: "One Giant Leap",
        description:
          "Neil Armstrong and Buzz Aldrin walk on the Moon. 'That's one small step for man, one giant leap for mankind.'",
        side: "left",
      },
    ],
  },
  {
    id: "modern",
    backgroundImage: berlinWall,
    events: [
      {
        id: "mod-1",
        date: "1989",
        title: "Fall of the Berlin Wall",
        description:
          "East and West Berliners tear down the wall that divided them for 28 years, symbolizing the end of the Cold War.",
        side: "right",
      },
      {
        id: "mod-2",
        date: "1991",
        title: "Dissolution of the USSR",
        description:
          "The Soviet Union officially dissolves, ending the Cold War and reshaping the global political landscape forever.",
        side: "left",
      },
    ],
  },
];
