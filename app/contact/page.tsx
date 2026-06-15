"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.7, ease: [0.23,1,0.32,1] }}>{children}</motion.div>
  );
}

const options = [
  { label: "Coaching",       desc: "1-on-1 sessions & packages",         href: "https://wa.me/254XXXXXXXXX?text=Hi Brian, I'm interested in coaching." },
  { label: "Speaking",       desc: "Events, summits, corporate sessions", href: "https://wa.me/254XXXXXXXXX?text=Hi Brian, I'd like to book you to speak." },
  { label: "7-Day Cohort",   desc: "Pure Personal Branding programme",    href: "https://wa.me/254XXXXXXXXX?text=Hi Brian, I'd like to join the 7 Days cohort." },
  { label: "Books",          desc: "Order, bulk purchases, queries",      href: "https://kibangabooks.com" },
  { label: "General",        desc: "Anything else",                        href: "https://wa.me/254XXXXXXXXX" },
];

export default function Contact() {
  return (
    <div className="pt-16" style={{ background: "var(--cream)" }}>
      <section className="pt-20 pb-16 overflow-hidden" style={{ background: "var(--cream)" }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.p className="f-label text-ink/40 mb-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Let's Talk</motion.p>
          <motion.h1 className="f-display text-ink" style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
            initial={{ y: "105%", opacity: 0 }} animate={{ y: "0%", opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.9, ease: [0.23,1,0.32,1] }}>
            Get in <span style={{ color: "var(--terra)" }}>touch.</span>
          </motion.h1>
        </div>
      </section>

      <section className="py-16" style={{ background: "#fff" }}>
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <Reveal><p className="f-body text-ink/65 mb-12">The fastest way to reach Brian is WhatsApp. Pick what you're reaching out about.</p></Reveal>
          <div className="flex flex-col gap-0">
            {options.map((o, i) => (
              <Reveal key={i} delay={0.05 + i * 0.07}>
                <a href={o.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-between py-7 border-b group" style={{ borderColor: "#DDD5CC" }}>
                  <div>
                    <h3 className="f-title text-ink text-2xl group-hover:text-terra transition-colors duration-250">{o.label}</h3>
                    <p className="f-label text-ink/40 mt-1">{o.desc}</p>
                  </div>
                  <span className="text-ink/20 text-2xl group-hover:text-terra transition-colors duration-200 ml-4">→</span>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.5}>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { l: "M-Pesa", v: "Paybill: XXXXXX\nAccount: NYAMBEGO" },
                { l: "Social", v: "@b._nyambego\n@briannyambego (TikTok)" },
                { l: "Location", v: "Nairobi, Kenya\nGlobal online" },
              ].map(c => (
                <div key={c.l} className="p-5 border border-[#DDD5CC]" style={{ background: "var(--sand)" }}>
                  <p className="f-label text-ink/40 mb-2">{c.l}</p>
                  <p className="f-body text-ink text-sm whitespace-pre-line">{c.v}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
