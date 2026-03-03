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
