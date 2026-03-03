import { useEffect, useRef, useState } from "react";
import { timelinePeriods } from "@/data/timelineData";
import TimelineEvent from "@/components/TimelineEvent";
import TimelineBranch from "@/components/TimelineBranch";

const Index = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sectionRefs.current.indexOf(
              entry.target as HTMLDivElement
            );
            if (idx !== -1) setCurrentBgIndex(idx);
          }
        });
      },
      { threshold: 0.3 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      {/* Background images layer */}
      {timelinePeriods.map((period, i) => (
        <div
          key={period.id}
          className="fixed inset-0 bg-period bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${period.backgroundImage})`,
            opacity: currentBgIndex === i ? 1 : 0,
            zIndex: 0,
          }}
        />
      ))}

      {/* Dark overlay */}
      <div
        className="fixed inset-0"
        style={{
          background:
            "linear-gradient(to bottom, hsl(0 0% 0% / 0.5), hsl(0 0% 0% / 0.65), hsl(0 0% 0% / 0.5))",
          zIndex: 1,
        }}
      />

      {/* Title */}
      <div className="relative z-10 flex min-h-[60vh] flex-col items-center justify-center px-4">
        <h1 className="event-date text-glow mb-4 text-center text-5xl font-extrabold tracking-tight text-primary md:text-7xl lg:text-8xl">
          THROUGH TIME
        </h1>
        <p className="max-w-md text-center font-body text-lg text-muted-foreground">
          A journey through the moments that shaped our world
        </p>
        <div className="mt-12 h-24 w-[3px] timeline-line animate-pulse-glow" />
      </div>

      {/* Timeline */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 pb-40">
        {/* Central vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[3px] -translate-x-1/2 timeline-line animate-pulse-glow" />

        {timelinePeriods.map((period, periodIdx) => (
          <div
            key={period.id}
            ref={(el) => (sectionRefs.current[periodIdx] = el)}
            className="relative"
          >
            {period.events.map((event, eventIdx) => (
              <div key={event.id} className="relative py-12 md:py-16">
                {/* Node on the central line */}
                <div className="absolute left-1/2 top-1/2 z-20 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full timeline-node" />

                {/* Branch line */}
                <TimelineBranch
                  side={event.side}
                  curvy={eventIdx % 2 === 0}
                />

                {/* Event card */}
                <TimelineEvent event={event} />
              </div>
            ))}
          </div>
        ))}

        {/* End cap */}
        <div className="relative flex justify-center py-20">
          <div className="h-6 w-6 rounded-full timeline-node" />
        </div>
      </div>
    </div>
  );
};

export default Index;
