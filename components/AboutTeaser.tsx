"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutTeaser() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section ref={ref} className="py-24 md:py-40 overflow-hidden" style={{ background: "var(--charcoal)" }}>
      <div className="max-w-[1400px] mx-auto px-8 md:px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-24 items-center">

          {/* Text */}
          <div className="order-2 md:order-1">
            <motion.div
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              <div style={{ width: 20, height: 2, background: "var(--teal)" }} />
              <p className="f-label" style={{ color: "var(--teal)" }}>About Brian</p>
            </motion.div>

            <div className="overflow-hidden mb-8">
              <motion.h2
                className="f-display"
                style={{ fontSize: "clamp(2.8rem, 5.5vw, 5.5rem)", color: "var(--ivory)" }}
                initial={{ y: "105%", opacity: 0 }}
                animate={inView ? { y: "0%", opacity: 1 } : {}}
                transition={{ duration: 0.85, ease: [0.23, 1, 0.32, 1] }}
              >
                The man<br />
                <span style={{ color: "var(--teal)" }}>behind</span><br />
                the brand.
              </motion.h2>
            </div>

            <motion.p
              className="f-body mb-5"
              style={{ color: "rgba(245,240,232,0.55)", maxWidth: 400, fontSize: "1.02rem" }}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
            >
              Brian Nyambego is a global personal branding trainer, award-winning speaker,
              and author of three books. He has shared stages with President William Ruto,
              spoken at Strathmore University, and built a brand that Pulse Kenya called
              a "personal branding statement."
            </motion.p>

            <motion.p
              className="f-body mb-10"
              style={{ color: "rgba(245,240,232,0.55)", maxWidth: 400, fontSize: "1.02rem" }}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.42, duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
            >
              Founder of Dreams Are Valid University. President of The First-borns Circle.
              Inspired by Vusi Thembekwayo and Tony Elumelu — but entirely himself.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.55, duration: 0.5 }}
            >
              <Link href="/about" className="btn btn-ghost-light">
                Read the full story
              </Link>
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div style={{ y: imgY }} className="relative order-1 md:order-2">
            <motion.div
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              animate={inView ? { clipPath: "inset(0 0 0% 0)" } : {}}
              transition={{ duration: 1.1, ease: [0.23, 1, 0.32, 1] }}
              className="relative"
            >
              <Image
                src="/brian-speaking.png"
                alt="Brian Nyambego — speaking in his signature teal suit"
                width={560}
                height={700}
                className="w-full object-cover object-top"
                style={{ aspectRatio: "4/5" }}
              />
              {/* Teal border accent */}
              <div
                className="absolute bottom-0 left-0 right-0"
                style={{ height: "3px", background: "var(--teal)" }}
              />
            </motion.div>

            {/* As seen in tag */}
            <motion.div
              className="absolute top-6 right-6"
              style={{
                background: "var(--teal)",
                padding: "8px 14px",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <p className="f-label" style={{ color: "var(--onyx)", fontSize: "9px" }}>
                As seen in
              </p>
              <p className="f-label mt-0.5" style={{ color: "var(--onyx)", fontSize: "11px", letterSpacing: "0.18em" }}>
                PULSE KENYA
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
