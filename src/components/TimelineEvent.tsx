import { useEffect, useRef, useState } from "react";
import type { TimelineEvent as TEvent } from "@/data/timelineData";

interface Props {
  event: TEvent;
}

const TimelineEvent = ({ event }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const isLeft = event.side === "left";

  return (
    <div
      ref={ref}
      className={`flex items-center ${isLeft ? "justify-start md:pr-[52%]" : "justify-end md:pl-[52%]"}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateY(0)"
          : `translateY(30px)`,
        transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
      }}
    >
      <div className="event-card rounded-xl px-6 py-5 max-w-md w-full">
        <p className="event-date text-glow text-2xl font-extrabold text-primary md:text-3xl lg:text-4xl">
          {event.date}
        </p>
        <h3 className="mt-1 font-body text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          {event.title}
        </h3>
        <p className="mt-3 font-body text-sm leading-relaxed text-foreground/80">
          {event.description}
        </p>
      </div>
    </div>
  );
};

export default TimelineEvent;
