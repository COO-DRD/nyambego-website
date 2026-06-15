"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import MultiCTA from "@/components/MultiCTA";

function Reveal({ children, delay = 0, dir = "up" }: { children: React.ReactNode; delay?: number; dir?: "up" | "left" }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={dir === "up" ? { opacity: 0, y: 28 } : { opacity: 0, x: -28 }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ delay, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </motion.div>
  );
}

const milestones = [
  {
    year: "2019",
    title: "The Suit Begins",
    desc: "At 16, Brian makes a deliberate decision: wear a suit every single day. Not fashion — a personal branding statement. A signal to the world before he opens his mouth.",
  },
  {
    year: "2021",
    title: "A Mindset of a Billionaire",
    desc: "At 17, Brian writes and publishes his first book. Gets invited to Spice FM Kenya to discuss it — the first of many media features.",
  },
  {
    year: "2022",
    title: "Dreams Are Valid University",
    desc: "Founds his first educational initiative for youth mindset and personal development — the beginning of his training empire.",
  },
  {
    year: "2023",
    title: "The First-borns Circle",
    desc: "Becomes President of The First-borns Circle, a leadership and community initiative. Personal connections with President William Ruto, Mwenda Thuranira, and Kivutha Kibwana.",
  },
  {
    year: "2024",
    title: "LET Summit — Strathmore University",
    desc: "Guest speaker at the Leadership, Entrepreneurship & Technology Summit. Featured in Pulse Kenya: '21-year-old trainer turning suits into a personal branding statement.'",
  },
  {
    year: "2025–2026",
    title: "Becoming an Extraordinaire & I Am Super Proud of You",
    desc: "Two books published through Kibanga Books, Nairobi. A third in progress. The 7-Day cohort runs continuously with students across the continent.",
  },
];

export default function About() {
  return (
    <div className="pt-16" style={{ background: "var(--onyx)" }}>

      {/* Hero */}
      <section className="relative py-28 md:py-44 overflow-hidden" style={{ background: "var(--charcoal)" }}>
        <div
          className="absolute inset-0 flex items-center justify-start pointer-events-none select-none overflow-hidden"
          aria-hidden
        >
          <div
            style={{
              fontFamily: "var(--font-signature)",
              fontSize: "clamp(8rem, 25vw, 22rem)",
              color: "var(--teal)",
              opacity: 0.04,
              lineHeight: 1,
              whiteSpace: "nowrap",
              paddingLeft: "3vw",
            }}
          >
            Brian
          </div>
        </div>

        <div className="relative max-w-[1400px] mx-auto px-8 md:px-14">
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <div style={{ width: 20, height: 2, background: "var(--teal)" }} />
              <p className="f-label" style={{ color: "var(--teal)" }}>The Story</p>
            </div>
          </Reveal>

          <div className="overflow-hidden">
            <motion.h1
              className="f-display"
              style={{ fontSize: "clamp(3.5rem, 9vw, 9rem)", color: "var(--ivory)" }}
              initial={{ y: "105%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
            >
              The man<br />
              <span style={{ color: "var(--teal)" }}>behind</span><br />
              the brand.
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Story split */}
      <section className="py-20 md:py-32" style={{ background: "var(--smoke)" }}>
        <div className="max-w-[1400px] mx-auto px-8 md:px-14 grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-24 items-start">
          <Reveal>
            <div className="relative">
              <Image
                src="/brian-speaking.png"
                alt="Brian Nyambego — signature teal suit, personal branding trainer"
                width={540} height={680}
                className="w-full object-cover object-top"
                style={{ aspectRatio: "3/4" }}
              />
              <div style={{ height: "3px", background: "var(--teal)" }} />
              <div
                className="absolute top-6 left-6"
                style={{ background: "var(--teal)", padding: "8px 14px" }}
              >
                <p className="f-label" style={{ color: "var(--onyx)", fontSize: "9px" }}>As seen in</p>
                <p className="f-label mt-0.5" style={{ color: "var(--onyx)", fontSize: "11px" }}>PULSE KENYA</p>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-6 md:pt-6">
            <Reveal delay={0.1}>
              <p className="f-body" style={{ color: "rgba(245,240,232,0.6)", lineHeight: 1.75 }}>
                At 21, Brian Nyambego has shared stages with presidents, authored three books that shift
                mindsets, and built a personal brand so deliberate it walks into rooms before he does.
                Pulse Kenya called it "a personal branding statement." He calls it Tuesday.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="f-body" style={{ color: "rgba(245,240,232,0.6)", lineHeight: 1.75 }}>
                He didn't learn this in a classroom. He studied the world's sharpest minds —
                Vusi Thembekwayo, Tony Elumelu — and reverse-engineered why some people command
                attention the moment they walk in. Then he did it himself. Every. Single. Day.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <blockquote className="border-l-2 pl-5 my-2" style={{ borderColor: "var(--teal)" }}>
                <p
                  className="f-display"
                  style={{ fontSize: "1.45rem", fontStyle: "italic", color: "var(--ivory)", lineHeight: 1.3 }}
                >
                  "Once I knew about personal branding, it elevated my entire journey."
                </p>
                <p className="f-label mt-3" style={{ color: "rgba(245,240,232,0.3)" }}>— Brian Nyambego</p>
              </blockquote>
            </Reveal>
            <Reveal delay={0.4}>
              <p className="f-body" style={{ color: "rgba(245,240,232,0.6)", lineHeight: 1.75 }}>
                The suit isn't a costume. It's a declaration — <em style={{ color: "var(--ivory)" }}>
                "I take this seriously. You should too."</em> Founder of Dreams Are Valid University.
                President of The First-borns Circle. Global personal branding trainer.
              </p>
            </Reveal>
            <Reveal delay={0.5}>
              <Link href="/books" className="btn btn-teal mt-2 inline-flex">
                See His Books →
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-32" style={{ background: "var(--charcoal)" }}>
        <div className="max-w-[1400px] mx-auto px-8 md:px-14">
          <Reveal>
            <div className="flex items-center gap-3 mb-14">
              <div style={{ width: 20, height: 2, background: "var(--teal)" }} />
              <p className="f-label" style={{ color: "var(--teal)" }}>The Journey</p>
            </div>
          </Reveal>

          <div className="flex flex-col">
            {milestones.map((m, i) => (
              <Reveal key={i} delay={0.04 + i * 0.07}>
                <div
                  className="grid gap-8 py-8 border-b group"
                  style={{
                    gridTemplateColumns: "100px 1fr",
                    borderColor: "rgba(245,240,232,0.07)",
                  }}
                >
                  <span className="f-label mt-1" style={{ color: "var(--teal)", opacity: 0.8 }}>
                    {m.year}
                  </span>
                  <div>
                    <h3
                      className="f-title mb-2 transition-colors duration-250"
                      style={{
                        fontSize: "1.4rem",
                        color: "var(--ivory)",
                      }}
                    >
                      {m.title}
                    </h3>
                    <p className="f-body text-sm" style={{ color: "rgba(245,240,232,0.45)", lineHeight: 1.7 }}>
                      {m.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Brian's second suit photo */}
      <section className="py-20 md:py-28 overflow-hidden" style={{ background: "var(--smoke)" }}>
        <div className="max-w-[1400px] mx-auto px-8 md:px-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <Reveal delay={0.2}>
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <div style={{ width: 20, height: 2, background: "var(--teal)" }} />
                  <p className="f-label" style={{ color: "var(--teal)" }}>Inspired by the best</p>
                </div>
                <h2
                  className="f-display"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)", color: "var(--ivory)" }}
                >
                  He studies<br />
                  <span style={{ color: "var(--teal)" }}>giants.</span><br />
                  He becomes<br />one.
                </h2>
                <p className="f-body" style={{ color: "rgba(245,240,232,0.55)", maxWidth: 380, lineHeight: 1.75 }}>
                  Vusi Thembekwayo. Tony Elumelu. These are the names Brian studied to understand
                  how authority is built in Africa. Now he teaches it.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <Image
                src="/brian-speaking.png"
                alt="Brian Nyambego speaking — signature teal suit"
                width={520} height={620}
                className="w-full object-cover object-top"
                style={{ aspectRatio: "4/5" }}
              />
            </Reveal>
          </div>
        </div>
      </section>

      <MultiCTA />
    </div>
  );
}
