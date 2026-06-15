"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

export default function SignatureStatement() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-5%" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: "var(--void)", minHeight: "85vh" }}
    >
      {/* Full-bleed Brian in teal suit — photo bleeds edge to edge */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: photoY }}
      >
        <Image
          src="/brian-speaking.png"
          alt="Brian Nyambego in signature teal suit"
          fill
          className="object-cover"
          style={{ objectPosition: "50% 15%" }}
          sizes="100vw"
        />

        {/* Left fade — where text lives */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to right, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.75) 40%, rgba(0,0,0,0.25) 70%, transparent 100%)",
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute inset-x-0 bottom-0 pointer-events-none"
          style={{ height: "35%", background: "linear-gradient(to top, var(--void) 0%, transparent 100%)" }}
        />
        {/* Top fade */}
        <div
          className="absolute inset-x-0 top-0 pointer-events-none"
          style={{ height: "20%", background: "linear-gradient(to bottom, var(--void) 0%, transparent 100%)" }}
        />
      </motion.div>

      {/* Teal glow on the photo */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: "radial-gradient(circle at 60% 50%, rgba(0,180,216,0.06) 0%, transparent 65%)",
        }}
      />

      {/* Content — left-aligned text over the dark fade */}
      <div
        className="relative z-10 flex flex-col justify-end px-8 md:px-14 py-20 md:py-32"
        style={{ minHeight: "85vh" }}
      >
        <motion.div
          className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div style={{ width: 18, height: 1, background: "var(--teal)", opacity: 0.55 }} />
          <p className="f-micro" style={{ color: "var(--teal)", opacity: 0.65 }}>The story</p>
        </motion.div>

        <div className="max-w-lg">
          <div className="overflow-hidden mb-4">
            <motion.h2
              className="f-display"
              style={{ fontSize: "clamp(2.8rem, 6vw, 7rem)", color: "var(--ivory)" }}
              initial={{ y: "105%", opacity: 0 }}
              animate={inView ? { y: "0%", opacity: 1 } : {}}
              transition={{ duration: 0.95, ease: [0.23, 1, 0.32, 1] }}
            >
              He wore the<br />
              <span style={{ color: "var(--teal)" }}>suit first.</span><br />
              The world<br />followed.
            </motion.h2>
          </div>

          <motion.p
            className="f-body mb-8"
            style={{ color: "rgba(245,240,232,0.5)", maxWidth: 380, fontSize: "1rem" }}
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
            At 17, Brian wrote his first book. At 21 he was sharing stages with presidents.
            He didn't follow a system — he wore a suit every single day and built a brand so
            precise it speaks before he opens his mouth.
          </motion.p>

          {/* Tags */}
          <motion.div
            className="flex flex-wrap gap-2 mb-10"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {["Dreams Are Valid University", "The First-borns Circle", "Author · Speaker"].map((tag) => (
              <span
                key={tag}
                className="f-micro"
                style={{
                  padding: "5px 12px",
                  border: "1px solid rgba(0,180,216,0.22)",
                  color: "rgba(0,180,216,0.6)",
                  fontSize: "9px",
                }}
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.65, duration: 0.6 }}
          >
            <Link href="/about" className="btn btn-ghost-light" style={{ padding: "12px 24px" }}>
              Read the full story
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
