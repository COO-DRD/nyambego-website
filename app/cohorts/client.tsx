"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CohortSection from "@/components/CohortSection";
import MultiCTA from "@/components/MultiCTA";
import type { Cohort } from "@/lib/types";

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.7, ease: [0.23,1,0.32,1] }}>{children}</motion.div>
  );
}

const steps = [
  { n: "01", step: "Message Brian on WhatsApp", desc: "Send a message confirming your interest. Brian or his team will respond within 24 hours." },
  { n: "02", step: "Pay via M-Pesa Paybill", desc: "Paybill XXXXXX · Account: COHORT. Send proof of payment on WhatsApp." },
  { n: "03", step: "Receive Onboarding", desc: "Welcome pack, schedule, and cohort group link arrive within 24 hours of payment." },
  { n: "04", step: "Show up and transform", desc: "7 days of intensive personal branding work. You walk out different." },
];

export default function CohortsClient({ cohort }: { cohort: Cohort | null }) {
  const waText = cohort?.whatsappText ?? "Hi Brian, I'd like to join the 7 Days Pure Personal Branding cohort.";
  const waLink = `https://wa.me/[BRIAN_WHATSAPP]?text=${encodeURIComponent(waText)}`;

  return (
    <div className="pt-16" style={{ background: "var(--cream)" }}>
      <section className="pt-20 pb-12 overflow-hidden" style={{ background: "var(--cream)" }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.p className="f-label text-ink/40 mb-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Currently Running
          </motion.p>
          <motion.h1 className="f-display text-ink" style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
            initial={{ y: "105%", opacity: 0 }} animate={{ y: "0%", opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.9, ease: [0.23,1,0.32,1] }}>
            7 Days —<br /><span style={{ color: "var(--terra)" }}>Pure Personal</span><br />Branding
          </motion.h1>
        </div>
      </section>

      <CohortSection cohort={cohort} />

      <section className="py-20 md:py-28" style={{ background: "#fff" }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <Reveal><h2 className="f-display text-ink mb-12" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
            How to <span style={{ color: "var(--terra)" }}>enroll.</span>
          </h2></Reveal>
          <div className="flex flex-col gap-0 max-w-2xl">
            {steps.map((s, i) => (
              <Reveal key={i} delay={0.05 + i * 0.08}>
                <div className="flex gap-6 py-7 border-b group" style={{ borderColor: "#DDD5CC" }}>
                  <span className="f-display text-terra/25 text-4xl w-10 shrink-0 group-hover:text-terra/60 transition-colors duration-300" style={{ fontStyle: "normal" }}>{s.n}</span>
                  <div>
                    <h3 className="f-title text-ink text-xl mb-2">{s.step}</h3>
                    <p className="f-body text-ink/55 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.5}>
            <div className="mt-10">
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn-fill">
                Enroll via WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <MultiCTA />
    </div>
  );
}
