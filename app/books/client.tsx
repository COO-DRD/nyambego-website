"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import MultiCTA from "@/components/MultiCTA";
import type { Book } from "@/lib/types";

const FALLBACK: Book[] = [
  { id:"1", title:"Becoming an Extraordinaire", subtitle:"The Authority Engine — Personal Branding, AI, Systems and Sales that Convert", year:"2026", price:"KES 1,500", coverUrl:"/book-becoming-extraordinaire.webp", buyLink:"https://kibangabooks.com/books/becoming-an-extraordinaire-by-brian-nyambego/", description:"A memoir and blueprint — identity, influence, and income merged into a guide for building an extraordinary brand.", order:1 },
  { id:"2", title:"I Am Super Proud of You", subtitle:"Before approval. Before applause. Before permission.", year:"2026", price:"KES 1,500", coverUrl:"/book-super-proud.webp", buyLink:"https://kibangabooks.com/books/i-am-super-proud-of-you-by-brian-nyambego/", description:"A self-help book about building authentic self-respect through daily choices, breaking the cycle of seeking external validation.", order:2 },
  { id:"3", title:"A Mindset of a Billionaire", subtitle:"The book that started it all.", year:"2021", price:"KES 1,500", coverUrl:null, buyLink:"#", description:"Written at 17. Brian's first published work — the mental frameworks behind extraordinary outcomes, drawn from lived experience, not theory.", order:3 },
];

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.7, ease: [0.23,1,0.32,1] }}>{children}</motion.div>
  );
}

export default function BooksPageClient({ books }: { books: Book[] }) {
  const display = books.length > 0 ? books : FALLBACK;

  return (
    <div className="pt-16" style={{ background: "var(--cream)" }}>
      <section className="pt-20 pb-16 overflow-hidden" style={{ background: "var(--cream)" }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.p className="f-label text-ink/40 mb-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Written by Brian Nyambego
          </motion.p>
          <motion.h1 className="f-display text-ink" style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}
            initial={{ y: "105%", opacity: 0 }} animate={{ y: "0%", opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.9, ease: [0.23,1,0.32,1] }}>
            The <span style={{ color: "var(--terra)" }}>Shelf.</span>
          </motion.h1>
        </div>
      </section>

      <section className="py-8" style={{ background: "#fff" }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col gap-0">
          {display.map((b, i) => (
            <Reveal key={b.id} delay={i * 0.08}>
              <a href={b.buyLink !== "#" ? b.buyLink : undefined} target="_blank" rel="noopener noreferrer" className="group block">
                <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] border-b py-12 gap-10 md:gap-16 items-start" style={{ borderColor: "#DDD5CC" }}>
                  <div className="overflow-hidden relative group-hover:shadow-xl transition-shadow duration-500"
                    style={{ aspectRatio: "3/4", background: b.coverUrl ? "transparent" : "#1C2B3A" }}>
                    {b.coverUrl ? (
                      <Image src={b.coverUrl} alt={b.title} fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]" sizes="240px" />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                        <p style={{ fontFamily: "var(--font-signature)", fontSize: "1.4rem", color: "#C94B2E" }}>Brian Nyambego</p>
                        <p style={{ fontFamily: "var(--font-fraunces)", fontStyle: "italic", color: "#fff", fontSize: "1.2rem", marginTop: "1rem", lineHeight: 1.2 }}>{b.title}</p>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-4 md:pt-2">
                    <p className="f-label text-ink/35">{b.year} · {b.price}</p>
                    <h2 className="f-display text-ink group-hover:text-terra transition-colors duration-250"
                      style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", lineHeight: 1.05 }}>{b.title}</h2>
                    <p className="f-body text-ink/45 text-sm italic">{b.subtitle}</p>
                    <p className="f-body text-ink/65 leading-relaxed max-w-lg">{b.description}</p>
                    {b.buyLink !== "#" && (
                      <span className="btn btn-fill mt-4 self-start">Order Now — {b.price}</span>
                    )}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
      <MultiCTA />
    </div>
  );
}
