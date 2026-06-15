"use client";
import Link from "next/link";
import SectionReveal from "./SectionReveal";

export default function ProblemSection() {
  return (
    <section className="section-white py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">

          {/* Left */}
          <div>
            <SectionReveal>
              <span className="tag-terra mb-6 inline-block">The Reality</span>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <h2 className="font-serif font-bold text-navy leading-tight mb-6"
                style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)" }}>
                Feeling invisible despite{" "}
                <em className="text-terracotta">everything</em> you've built?
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <p className="font-sans text-ink/65 leading-relaxed mb-5">
                You're talented. You work hard. You show up. But somehow, the opportunities, the
                speaking invites, the clients — they go to someone else. Someone who isn't
                necessarily better than you. Just better packaged.
              </p>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <p className="font-sans text-ink/65 leading-relaxed mb-8">
                Personal branding isn't vanity. It's the gap between what you're worth and what
                the world currently thinks you're worth. And it can be closed — deliberately.
              </p>
            </SectionReveal>
            <SectionReveal delay={0.4}>
              <Link href="/cohorts"
                className="btn-terra font-mono text-[11px] tracking-[0.18em] uppercase px-7 py-4 inline-flex items-center">
                Discover Your Brand Story →
              </Link>
            </SectionReveal>
          </div>

          {/* Right — 3 points */}
          <div className="flex flex-col gap-0 border-l-2 border-sand-dark pl-8">
            {[
              { title: "You present less than your worth", body: "The world forms its opinion before you speak. Most people leave that impression to chance." },
              { title: "Visibility isn't something you chase", body: "It's something you build — deliberately, consistently, across every surface you show up on." },
              { title: "The suit is the strategy", body: "Brian wears a suit every single day. Not fashion — a deliberate signal. Appearance sets the frame for everything that follows." },
            ].map((p, i) => (
              <SectionReveal key={i} delay={0.15 + i * 0.1}>
                <div className="py-7 group">
                  <div className="flex items-start gap-4">
                    <span className="font-display text-terracotta/30 text-4xl leading-none shrink-0 group-hover:text-terracotta transition-colors duration-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-serif font-semibold text-navy text-lg mb-1">{p.title}</h3>
                      <p className="font-sans text-sm text-ink/60 leading-relaxed">{p.body}</p>
                    </div>
                  </div>
                  {i < 2 && <div className="mt-7 h-px bg-border" />}
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
