"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const entries = [
  { n: "01", label: "7-Day Cohort",    sub: "Pure Personal Branding",         href: "/cohorts"  },
  { n: "02", label: "1-on-1 Coaching", sub: "Direct access · Built for you",  href: "/coaching" },
  { n: "03", label: "Books",           sub: "3 titles · Kibanga Books Nairobi", href: "/books"   },
  { n: "04", label: "Speaking",        sub: "Summits · Corporates · Events",   href: "/contact"  },
];

export default function MultiCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-28 md:py-44"
      style={{ background: "var(--teal)" }}
    >
      {/* Watermark — "SEEN." huge behind content */}
      <div
        className="absolute inset-0 flex items-center pointer-events-none select-none overflow-hidden"
        aria-hidden
      >
        <span
          style={{
            fontFamily: "var(--font-fraunces)",
            fontStyle: "italic",
            fontWeight: 900,
            fontSize: "clamp(10rem, 35vw, 45rem)",
            lineHeight: 0.85,
            color: "var(--void)",
            opacity: 0.055,
            paddingLeft: "3vw",
            letterSpacing: "-0.04em",
          }}
        >
          SEEN.
        </span>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-8 md:px-14">
        <motion.p
          className="f-micro mb-6"
          style={{ color: "rgba(0,0,0,0.45)" }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          Ready to be seen?
        </motion.p>

        <div className="overflow-hidden mb-14">
          <motion.h2
            className="f-display"
            style={{ fontSize: "clamp(3rem, 8vw, 9rem)", color: "var(--void)", lineHeight: 0.88 }}
            initial={{ y: "105%", opacity: 0 }}
            animate={inView ? { y: "0%", opacity: 1 } : {}}
            transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
          >
            Choose your<br />entry point.
          </motion.h2>
        </div>

        {/* Service rows */}
        <div className="flex flex-col max-w-3xl mb-16">
          {entries.map((e, i) => (
            <motion.div
              key={e.n}
              initial={{ opacity: 0, x: -18 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.09, duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
            >
              <Link href={e.href}>
                <motion.div
                  className="flex items-center justify-between py-5 group"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                >
                  <div className="flex items-start gap-7">
                    <span className="f-micro mt-0.5 w-6 shrink-0" style={{ color: "rgba(0,0,0,0.22)" }}>
                      {e.n}
                    </span>
                    <div>
                      <p
                        className="f-title transition-opacity duration-250 group-hover:opacity-70"
                        style={{ fontSize: "clamp(1.2rem, 2.2vw, 2rem)", color: "var(--void)" }}
                      >
                        {e.label}
                      </p>
                      <p className="f-micro mt-1" style={{ color: "rgba(0,0,0,0.38)" }}>{e.sub}</p>
                    </div>
                  </div>
                  <span
                    className="text-lg transition-all duration-200 group-hover:translate-x-2 shrink-0"
                    style={{ color: "rgba(0,0,0,0.22)" }}
                  >
                    →
                  </span>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center gap-5"
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          <Link href="/contact" className="btn btn-onyx">
            Get in touch
          </Link>
          <p className="f-micro" style={{ color: "rgba(0,0,0,0.38)" }}>
            Not sure where to start? Message Brian directly.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
