"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Cohort } from "@/lib/types";

const FALLBACK: Cohort = {
  id: "fallback",
  name: "7 Days — Pure Personal Branding",
  description:
    "A 7-day intensive cohort covering personal branding and storytelling end-to-end. Brian walks you through every dimension of how to show up, stand out, and be remembered in every room you enter.",
  days: 7,
  startDate: null,
  price: "Confirm with Brian",
  spotsTotal: 20,
  spotsFilled: 0,
  status: "Open",
  whatsappText: "Hi Brian, I'd like to join the 7 Days Pure Personal Branding cohort.",
  featured: true,
};

const DEFAULT_DAYS = [
  "Discovering your brand identity & origin story",
  "Understanding your audience & positioning",
  "Visual packaging — what you wear, how you present",
  "Building your digital presence from scratch",
  "Content creation & storytelling systems",
  "Pitching yourself — speaking & networking",
  "Monetising your brand & mapping your next chapter",
];

interface Props { cohort?: Cohort | null }

export default function CohortSection({ cohort }: Props) {
  const c = cohort ?? FALLBACK;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const spotsLeft = c.spotsTotal - c.spotsFilled;
  const fillPct   = c.spotsTotal > 0 ? (c.spotsFilled / c.spotsTotal) * 100 : 0;
  const waLink    = `https://wa.me/254XXXXXXXXX?text=${encodeURIComponent(c.whatsappText)}`;

  return (
    <section ref={ref} className="py-24 md:py-40 overflow-hidden" style={{ background: "var(--smoke)" }}>
      <div className="max-w-[1400px] mx-auto px-8 md:px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-start">

          {/* Photo */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={inView ? { opacity: 1, clipPath: "inset(0 0 0% 0)" } : {}}
            transition={{ duration: 1.1, ease: [0.23, 1, 0.32, 1] }}
          >
            <Image
              src="/brian-hero.jpg"
              alt="Brian Nyambego"
              width={560} height={700}
              className="w-full object-cover object-top"
              style={{ aspectRatio: "4/5" }}
            />
            {/* Teal bottom accent */}
            <div style={{ height: "3px", background: "var(--teal)" }} />
          </motion.div>

          {/* Content */}
          <div className="pt-0 md:pt-6">
            {/* Status */}
            <motion.div
              className="flex items-center gap-3 mb-5"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              <div
                style={{
                  width: 8, height: 8, borderRadius: "50%",
                  background: c.status === "Open" ? "var(--teal)" : "rgba(245,240,232,0.3)",
                }}
              />
              <p className="f-label" style={{ color: c.status === "Open" ? "var(--teal)" : "rgba(245,240,232,0.4)" }}>
                {c.status === "Open" ? "Now enrolling" : c.status === "Upcoming" ? "Coming soon" : "Currently closed"}
                {c.startDate
                  ? ` · Starts ${new Date(c.startDate).toLocaleDateString("en-KE", { day: "numeric", month: "long", year: "numeric" })}`
                  : ""}
              </p>
            </motion.div>

            {/* Name */}
            <div className="overflow-hidden mb-6">
              <motion.h2
                className="f-display"
                style={{ fontSize: "clamp(2.4rem, 5vw, 5rem)", color: "var(--ivory)" }}
                initial={{ y: "105%", opacity: 0 }}
                animate={inView ? { y: "0%", opacity: 1 } : {}}
                transition={{ duration: 0.85, ease: [0.23, 1, 0.32, 1] }}
              >
                {c.name}
              </motion.h2>
            </div>

            <motion.p
              className="f-body mb-8"
              style={{ color: "rgba(245,240,232,0.55)", maxWidth: 440, fontSize: "1.02rem" }}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            >
              {c.description}
            </motion.p>

            {/* Spot bar */}
            {c.spotsTotal > 0 && (
              <motion.div
                className="mb-8"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
              >
                <div className="flex justify-between mb-2">
                  <p className="f-label" style={{ color: "rgba(245,240,232,0.3)" }}>Enrollment</p>
                  <p
                    className="f-label"
                    style={{ color: spotsLeft <= 5 ? "var(--teal)" : "rgba(245,240,232,0.5)" }}
                  >
                    {spotsLeft} spot{spotsLeft !== 1 ? "s" : ""} remaining
                  </p>
                </div>
                <div
                  className="h-px w-full overflow-hidden"
                  style={{ background: "rgba(245,240,232,0.1)" }}
                >
                  <motion.div
                    style={{ height: "100%", background: "var(--teal)" }}
                    initial={{ width: "0%" }}
                    animate={inView ? { width: `${fillPct}%` } : {}}
                    transition={{ delay: 0.5, duration: 1.3, ease: [0.23, 1, 0.32, 1] }}
                  />
                </div>
              </motion.div>
            )}

            {/* Price + duration */}
            <motion.div
              className="flex items-center gap-8 mb-8 pb-8"
              style={{ borderBottom: "1px solid rgba(245,240,232,0.08)" }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.45 }}
            >
              <div>
                <p className="f-label mb-1" style={{ color: "rgba(245,240,232,0.3)" }}>Investment</p>
                <p className="f-title text-ivory text-2xl" style={{ color: "var(--ivory)" }}>{c.price}</p>
              </div>
              <div>
                <p className="f-label mb-1" style={{ color: "rgba(245,240,232,0.3)" }}>Duration</p>
                <p className="f-title text-2xl" style={{ color: "var(--ivory)" }}>{c.days} days</p>
              </div>
            </motion.div>

            {/* Days list */}
            <div className="flex flex-col mb-10">
              {DEFAULT_DAYS.map((d, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.38 + i * 0.055, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                >
                  <div
                    className="flex items-start gap-5 py-3"
                    style={{ borderBottom: "1px solid rgba(245,240,232,0.06)" }}
                  >
                    <span className="f-label shrink-0 w-12" style={{ color: "var(--teal)", opacity: 0.6 }}>
                      Day {i + 1}
                    </span>
                    <p className="f-body text-sm" style={{ color: "rgba(245,240,232,0.45)" }}>{d}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.85 }}
            >
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn-teal">
                {c.status === "Open" ? "Enroll Now via WhatsApp" : "Join the Waitlist"}
              </a>
            </motion.div>

            <motion.blockquote
              className="border-l-2 pl-5 mt-10"
              style={{ borderColor: "var(--teal)" }}
              initial={{ opacity: 0, x: -12 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <p
                className="f-display"
                style={{ fontSize: "1.2rem", fontStyle: "italic", color: "rgba(245,240,232,0.6)" }}
              >
                "He rewires how you show up in the world."
              </p>
              <p className="f-label mt-2" style={{ color: "rgba(245,240,232,0.25)" }}>— Cohort Alumni</p>
            </motion.blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
