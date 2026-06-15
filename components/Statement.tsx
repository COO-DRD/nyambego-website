"use client";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

export default function Statement() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-3%", "3%"]);

  const words = ["PERSONAL", "BRANDS", "THAT", "WALK", "INTO", "ROOMS", "BEFORE", "YOU", "DO."];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: "var(--parch)", paddingTop: "clamp(5rem, 12vw, 14rem)", paddingBottom: "clamp(5rem, 12vw, 14rem)" }}
    >
      {/* Faint watermark behind */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 flex items-center pointer-events-none select-none overflow-hidden"
        aria-hidden
      >
        <span
          style={{
            fontFamily: "var(--font-fraunces)",
            fontStyle: "italic",
            fontWeight: 900,
            fontSize: "clamp(18rem, 55vw, 70rem)",
            lineHeight: 0.8,
            color: "var(--teal)",
            opacity: 0.02,
            letterSpacing: "-0.05em",
            paddingLeft: "2vw",
            userSelect: "none",
          }}
        >
          SEEN.
        </span>
      </motion.div>

      {/* The scrolling line — full bleed, Flair reference style */}
      <div
        className="relative"
        style={{
          paddingLeft: "clamp(1.5rem, 4vw, 5.5rem)",
          paddingRight: "clamp(1.5rem, 4vw, 5.5rem)",
        }}
      >
        {/* Label — micro text above, like reference */}
        <motion.p
          className="f-micro mb-8"
          style={{ color: "var(--teal)", opacity: 0.55 }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0.55 } : {}}
          transition={{ duration: 0.6 }}
        >
          He wore the suit first
        </motion.p>

        {/* The big statement — words stacked like building blocks */}
        <div className="flex flex-wrap" style={{ gap: "0.08em 0.28em" }}>
          {words.map((word, i) => (
            <div key={word + i} className="overflow-hidden" style={{ lineHeight: 1 }}>
              <motion.span
                className="inline-block f-display"
                style={{
                  fontSize: "clamp(3.8rem, 9.5vw, 11rem)",
                  color: word === "DO." ? "var(--teal)" : "var(--onyx)",
                  lineHeight: 0.9,
                }}
                initial={{ y: "110%", opacity: 0 }}
                animate={inView ? { y: "0%", opacity: 1 } : {}}
                transition={{
                  duration: 0.85,
                  delay: i * 0.055,
                  ease: [0.23, 1, 0.32, 1],
                }}
              >
                {word}
              </motion.span>
            </div>
          ))}
        </div>

        {/* Attribution row */}
        <motion.div
          className="flex items-center gap-5 mt-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.75, duration: 0.7 }}
        >
          <div style={{ width: 36, height: 1, background: "var(--gold)", opacity: 0.5 }} />
          <p className="f-micro" style={{ color: "rgba(245,240,232,0.2)" }}>
            — Brian Nyambego · Personal Branding Trainer
          </p>
        </motion.div>
      </div>
    </section>
  );
}
