"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import MultiCTA from "@/components/MultiCTA";

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.7, ease: [0.23,1,0.32,1] }}>{children}</motion.div>
  );
}

const packages = [
  { name: "Brand Audit", duration: "60 min", price: "KES 3,000", desc: "A deep audit of your current brand — how you're showing up online, in person, and in the perception of your audience.", items: ["Full brand audit", "Digital presence review", "Gap analysis", "Action plan"] },
  { name: "Monthly Coaching", duration: "4 sessions / month", price: "KES 10,000", desc: "Weekly sessions over a month. Brand identity, content strategy, visual packaging, and execution.", items: ["4 × 60-min sessions", "WhatsApp support", "Brand materials review", "Content strategy"], featured: true },
  { name: "3-Month Transformation", duration: "12 sessions", price: "KES 25,000", desc: "Three months to completely rebuild how the world sees you — and how you see yourself.", items: ["12 × 60-min sessions", "Full brand identity build", "Content system setup", "Speaking & presence coaching", "Priority WhatsApp"] },
];

export default function Coaching() {
  return (
    <div className="pt-16" style={{ background: "var(--cream)" }}>
      <section className="pt-20 pb-16 overflow-hidden" style={{ background: "var(--cream)" }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.p className="f-label text-ink/40 mb-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>1-on-1</motion.p>
          <motion.h1 className="f-display text-ink" style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
            initial={{ y: "105%", opacity: 0 }} animate={{ y: "0%", opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.9, ease: [0.23,1,0.32,1] }}>
            Coaching<span style={{ color: "var(--terra)" }}>.</span>
          </motion.h1>
        </div>
      </section>

      <section className="py-16" style={{ background: "#fff" }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <Reveal><p className="f-body text-ink/65 max-w-2xl mb-16" style={{ fontSize: "1.1rem" }}>
            Direct access to Brian. Not a course. Not a recording. Real, live, one-on-one work on your personal brand with the person who built one that commands rooms.
          </p></Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((p, i) => (
              <Reveal key={i} delay={0.1 + i * 0.1}>
                <div className={`border h-full flex flex-col p-8 ${p.featured ? "border-terra" : "border-[#DDD5CC]"}`}
                  style={{ background: p.featured ? "var(--sand)" : "#fff" }}>
                  {p.featured && (
                    <span className="f-label text-white bg-terra px-3 py-1 self-start mb-6 text-[10px]">Most popular</span>
                  )}
                  <p className="f-label text-ink/40 mb-2">{p.duration}</p>
                  <h2 className="f-title text-ink text-2xl mb-2">{p.name}</h2>
                  <p className="f-display text-terra mb-6" style={{ fontSize: "2rem", fontStyle: "normal" }}>{p.price}</p>
                  <p className="f-body text-ink/60 text-sm leading-relaxed mb-6 flex-1">{p.desc}</p>
                  <ul className="flex flex-col gap-2 mb-8">
                    {p.items.map((item, j) => (
                      <li key={j} className="flex gap-3 f-body text-sm text-ink/60">
                        <span style={{ color: "var(--terra)" }}>→</span>{item}
                      </li>
                    ))}
                  </ul>
                  <a href="https://wa.me/254XXXXXXXXX" target="_blank" rel="noopener noreferrer"
                    className={`btn justify-center ${p.featured ? "btn-fill" : "btn-ghost"}`}>
                    Book via WhatsApp
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <div className="mt-14 p-8 border border-[#DDD5CC]" style={{ background: "var(--sand)" }}>
              <p className="f-label text-ink/40 mb-2">Payment</p>
              <p className="f-body text-ink/65 text-sm">Pay via M-Pesa Paybill after booking confirmation on WhatsApp.</p>
              <p className="f-body text-ink text-sm mt-2 font-mono">Paybill: XXXXXX · Account: COACHING</p>
            </div>
          </Reveal>
        </div>
      </section>

      <MultiCTA />
    </div>
  );
}
