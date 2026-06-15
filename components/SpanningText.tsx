"use client";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

export default function SpanningText() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x  = useTransform(scrollYProgress, [0, 1], ["2%",  "-2%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-2%", "2%"]);

  return (
    <section
      ref={ref}
      className="overflow-hidden py-12 md:py-16"
      style={{ background: "var(--parch)" }}
    >
      {/* LINE 1 — slides left on scroll */}
      <motion.div style={{ x }} className="whitespace-nowrap">
        <motion.p
          className="f-display select-none"
          style={{
            fontSize: "clamp(4rem, 11vw, 13rem)",
            color: "var(--onyx)",
            lineHeight: 0.88,
            paddingLeft: "3vw",
            opacity: 0.9,
          }}
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 0.9, x: 0 } : {}}
          transition={{ duration: 1.1, ease: [0.23, 1, 0.32, 1] }}
        >
          Before they hear you —
        </motion.p>
      </motion.div>

      {/* LINE 2 — teal, slightly offset, slides opposite direction */}
      <motion.div
        style={{ x: x2 }}
        className="whitespace-nowrap mt-1 md:mt-2"
      >
        <motion.p
          className="f-display teal-text-glow select-none"
          style={{
            fontSize: "clamp(4rem, 11vw, 13rem)",
            color: "var(--teal)",
            lineHeight: 0.88,
            paddingLeft: "8vw",
          }}
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.1, delay: 0.08, ease: [0.23, 1, 0.32, 1] }}
        >
          they must first see you.
        </motion.p>
      </motion.div>

      {/* Attribution */}
      <motion.div
        className="flex items-center gap-4 mt-8 px-[3vw]"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.55, duration: 0.7 }}
      >
        <div style={{ width: 32, height: 1, background: "var(--gold)", opacity: 0.5 }} />
        <p className="f-micro" style={{ color: "rgba(10,10,10,0.3)" }}>
          The Nyambego Principle · Personal Branding, Nairobi
        </p>
      </motion.div>
    </section>
  );
}
