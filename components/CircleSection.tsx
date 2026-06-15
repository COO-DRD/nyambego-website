"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

export default function CircleSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-5%" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const circleY = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);
  const photoScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.0, 1.04]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-24 md:py-36"
      style={{ background: "var(--ivory)" }}
    >
      {/* Section label — top left, like reference */}
      <motion.div
        className="absolute top-10 left-8 md:left-14 z-10 flex items-center gap-3"
        initial={{ opacity: 0, x: -16 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      >
        <div style={{ width: 18, height: 1, background: "var(--teal)", opacity: 0.6 }} />
        <p className="f-micro" style={{ color: "var(--teal)", opacity: 0.7 }}>The Nyambego Method</p>
      </motion.div>

      <div className="max-w-[1400px] mx-auto px-8 md:px-14">
        {/* Layout: circle center + scattered text around it */}
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">

          {/* LEFT TEXT — scattered above/below */}
          <div className="flex flex-col gap-8 md:gap-12 md:text-right md:max-w-[260px]">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            >
              <p className="f-micro mb-2" style={{ color: "var(--teal)", opacity: 0.6 }}>7-Day Intensive</p>
              <h2
                className="f-display"
                style={{ fontSize: "clamp(2rem, 4vw, 3.8rem)", color: "var(--onyx)", lineHeight: 0.92 }}
              >
                Pure<br />Personal<br />Branding
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.35, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            >
              <p className="f-body text-sm" style={{ color: "rgba(10,10,10,0.4)", maxWidth: 220, lineHeight: 1.65 }}>
                Brian walks you through every dimension of how to show up, stand out, and be remembered.
              </p>
            </motion.div>
          </div>

          {/* THE CIRCLE — centrepiece */}
          <motion.div
            className="relative flex-shrink-0"
            style={{ y: circleY }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.1, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          >
            {/* Teal glow ring behind circle */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background: "transparent",
                boxShadow: "0 0 80px rgba(0,180,216,0.35), 0 0 160px rgba(0,180,216,0.15)",
                borderRadius: "50%",
                zIndex: 0,
              }}
            />

            {/* The main teal circle */}
            <motion.div
              style={{
                width: "clamp(280px, 44vw, 580px)",
                height: "clamp(280px, 44vw, 580px)",
                borderRadius: "50%",
                background: "var(--teal)",
                overflow: "hidden",
                position: "relative",
                zIndex: 1,
              }}
            >
              <motion.div style={{ scale: photoScale, width: "100%", height: "100%" }}>
                <Image
                  src="/brian-speaking.png"
                  alt="Brian Nyambego in his signature teal suit"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "50% 10%" }}
                  sizes="(max-width: 768px) 80vw, 44vw"
                />
              </motion.div>

              {/* Subtle teal-on-teal overlay to blend edges */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at 50% 50%, transparent 50%, rgba(0,180,216,0.3) 100%)",
                }}
              />
            </motion.div>

            {/* Floating label on circle — "BRIAN NYAMBEGO" */}
            <motion.div
              className="absolute bottom-[-1.5rem] left-1/2 -translate-x-1/2 z-10"
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            >
              <p
                className="f-micro whitespace-nowrap"
                style={{ color: "var(--teal)", opacity: 0.7, letterSpacing: "0.3em" }}
              >
                BRIAN NYAMBEGO
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT TEXT */}
          <div className="flex flex-col gap-8 md:gap-12 md:max-w-[260px]">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.25, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            >
              <p className="f-micro mb-3" style={{ color: "rgba(10,10,10,0.28)" }}>Cohort enrolling now</p>
              <div className="flex flex-col gap-2">
                {["Identity & Story", "Visual Packaging", "Digital Presence", "Monetising Your Brand"].map((item, i) => (
                  <motion.div
                    key={item}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: 12 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.07, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <div style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--teal)", opacity: 0.6, flexShrink: 0 }} />
                    <p className="f-micro" style={{ color: "rgba(10,10,10,0.45)" }}>{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            >
              <Link href="/cohorts" className="btn btn-teal" style={{ padding: "12px 22px" }}>
                Enroll Now ↗
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Subtle teal dot grid decoration */}
      <div
        className="absolute bottom-8 right-8 md:right-14 opacity-10 pointer-events-none hidden md:block"
        aria-hidden
      >
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="flex gap-3 mb-3">
            {Array.from({ length: 3 }).map((_, j) => (
              <div key={j} style={{ width: 3, height: 3, borderRadius: "50%", background: "var(--teal)" }} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
