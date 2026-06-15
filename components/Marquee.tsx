"use client";

const phrases = [
  "BRIAN NYAMBEGO",
  "PERSONAL BRANDING TRAINER",
  "BEFORE THEY HEAR YOU",
  "THEY MUST FIRST SEE YOU",
  "NAIROBI · KENYA",
  "#IAMNYAMBEGO",
  "AUTHOR · SPEAKER · TRAINER",
  "DREAMS ARE VALID",
];

const DOT = (
  <span
    aria-hidden
    style={{
      display: "inline-block",
      width: 4,
      height: 4,
      background: "rgba(5,5,5,0.6)",
      borderRadius: "50%",
      margin: "0 1.8rem",
      verticalAlign: "middle",
      flexShrink: 0,
    }}
  />
);

export default function Marquee() {
  const repeated = [...phrases, ...phrases, ...phrases];

  return (
    <div
      style={{
        background: "var(--teal)",
        overflow: "hidden",
        padding: "13px 0",
      }}
      aria-label="Brian Nyambego brand phrases"
    >
      <div className="marquee-track" aria-hidden>
        {repeated.map((p, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", flexShrink: 0 }}>
            <span
              className="f-micro"
              style={{ color: "var(--onyx)", fontSize: "10px", letterSpacing: "0.24em", flexShrink: 0, whiteSpace: "nowrap" }}
            >
              {p}
            </span>
            {DOT}
          </span>
        ))}
      </div>
    </div>
  );
}
