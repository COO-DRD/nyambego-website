"use client";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    n: "01",
    title: "7-Day Cohort",
    full: "7 Days — Pure Personal Branding",
    sub: "Intensive · Transform in a week",
    href: "/cohorts",
    offset: "md:translate-x-[12%]",
  },
  {
    n: "02",
    title: "1-on-1 Coaching",
    full: "Direct access to Brian",
    sub: "Built entirely around you",
    href: "/coaching",
    offset: "md:translate-x-[0%]",
  },
  {
    n: "03",
    title: "Books",
    full: "3 titles in print",
    sub: "Available at Kibanga Books, Nairobi",
    href: "/books",
    offset: "md:translate-x-[18%]",
  },
  {
    n: "04",
    title: "Speaking",
    full: "Summits · Corporates · Institutions",
    sub: "Book Brian for your event",
    href: "/events",
    offset: "md:translate-x-[5%]",
  },
];

export default function WhatIDo() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-24 md:py-40 overflow-hidden"
      style={{ background: "var(--ivory)" }}
    >
      <div className="max-w-[1400px] mx-auto px-8 md:px-14">

        {/* Header — "DROP ZONES" equivalent */}
        <div className="flex items-end justify-between mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
            <p className="f-micro mb-3" style={{ color: "var(--teal)", opacity: 0.65 }}>
              Entry points
            </p>
            <h2
              className="f-display"
              style={{ fontSize: "clamp(3rem, 7vw, 8rem)", color: "var(--onyx)", lineHeight: 0.88 }}
            >
              Work<br />
              <span style={{ color: "var(--teal)" }}>with Brian.</span>
            </h2>
          </motion.div>

          {/* Scattered right: decorative numbers */}
          <motion.div
            className="hidden md:flex flex-col items-end gap-1"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            {["01", "02", "03", "04"].map((n, i) => (
              <span
                key={n}
                className="f-display-up"
                style={{
                  fontSize: "clamp(1rem, 2vw, 2rem)",
                  color: "var(--teal)",
                  opacity: 0.08 + i * 0.05,
                  lineHeight: 1,
                }}
              >
                {n}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Service items — staggered/offset like scattered layout */}
        <div className="flex flex-col gap-px">
          {services.map((s, i) => (
            <motion.div
              key={s.n}
              className={`${s.offset}`}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.75, ease: [0.23, 1, 0.32, 1] }}
            >
              <Link href={s.href}>
                <motion.div
                  className="group flex items-start gap-6 md:gap-10 py-7"
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                >
                  {/* Number */}
                  <span
                    className="f-display-up shrink-0 mt-1 transition-colors duration-300 group-hover:text-teal"
                    style={{ fontSize: "clamp(0.7rem, 1.4vw, 1.1rem)", color: "rgba(10,10,10,0.18)", minWidth: "2.5rem" }}
                  >
                    {s.n}
                  </span>

                  {/* Title */}
                  <div className="flex-1">
                    <p
                      className="f-display transition-colors duration-250 group-hover:text-teal"
                      style={{ fontSize: "clamp(1.8rem, 3.5vw, 3.5rem)", color: "var(--onyx)", lineHeight: 0.92 }}
                    >
                      {s.title}
                    </p>
                    <p className="f-micro mt-3" style={{ color: "rgba(10,10,10,0.38)" }}>
                      {s.sub}
                    </p>
                  </div>

                  {/* Arrow */}
                  <span
                    className="text-lg transition-all duration-200 shrink-0 mt-1 group-hover:translate-x-2 group-hover:text-teal"
                    style={{ color: "rgba(10,10,10,0.2)" }}
                  >
                    →
                  </span>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
