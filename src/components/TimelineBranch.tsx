interface Props {
  side: "left" | "right";
  curvy?: boolean;
}

const TimelineBranch = ({ side, curvy }: Props) => {
  const isLeft = side === "left";

  if (curvy) {
    // SVG curved branch
    return (
      <div
        className={`absolute top-1/2 z-10 hidden md:block ${
          isLeft ? "right-1/2 mr-[6px]" : "left-1/2 ml-[6px]"
        }`}
        style={{
          width: "80px",
          height: "40px",
          transform: "translateY(-50%)",
        }}
      >
        <svg
          width="80"
          height="40"
          viewBox="0 0 80 40"
          fill="none"
          style={{ transform: isLeft ? "scaleX(-1)" : undefined }}
        >
          <path
            d="M0 20 C20 20, 30 2, 80 2"
            stroke="white"
            strokeWidth="2"
            strokeOpacity="0.6"
            fill="none"
            style={{
              filter: "drop-shadow(0 0 4px rgba(255,255,255,0.3))",
            }}
          />
        </svg>
      </div>
    );
  }

  // Straight branch
  return (
    <div
      className={`absolute top-1/2 z-10 hidden h-[2px] w-16 md:block ${
        isLeft
          ? "right-1/2 mr-[6px] timeline-branch-left"
          : "left-1/2 ml-[6px] timeline-branch"
      }`}
      style={{ transform: "translateY(-50%)" }}
    />
  );
};

export default TimelineBranch;
