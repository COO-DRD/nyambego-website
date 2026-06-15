"use client";
import Link from "next/link";
import SectionReveal from "./SectionReveal";

const webinars = [
  { title: "The 7 Pillars of a Powerful Personal Brand", date: "July 15, 2026", time: "7:00 PM EAT", price: "KES 500", free: false, spots: 80, filled: 54 },
  { title: "Dress to Be Taken Seriously: The Suit Masterclass", date: "August 2, 2026", time: "3:00 PM EAT", price: "Free", free: true, spots: 200, filled: 137 },
];
const events = [
  { title: "Brand Summit Nairobi 2026", date: "Sep 20, 2026", location: "Nairobi", type: "Conference", pub: true },
  { title: "CEO Personal Branding Workshop", date: "Aug 15, 2026", location: "Strathmore", type: "Workshop", pub: false },
];

export default function WebinarsEvents() {
  return (
    <section className="section-cream py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <SectionReveal><span className="tag-terra mb-5 inline-block">Upcoming</span></SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Webinars */}
          <div>
            <SectionReveal delay={0.1}>
              <h2 className="font-serif font-bold text-navy mb-8 leading-tight"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
                Live <em className="text-terracotta">Webinars</em>
              </h2>
            </SectionReveal>
            <div className="flex flex-col gap-4">
              {webinars.map((w, i) => (
                <SectionReveal key={i} delay={0.15 + i * 0.1}>
                  <div className="bg-white border border-border p-6 group hover:border-terracotta/40 transition-colors duration-300 card-lift">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="font-serif italic text-navy text-lg leading-tight">{w.title}</h3>
                      <span className={`shrink-0 font-mono text-[10px] tracking-[0.12em] uppercase px-2 py-1 border ${
                        w.free ? "border-terracotta/40 text-terracotta bg-terracotta/5" : "border-border text-muted"
                      }`}>{w.price}</span>
                    </div>
                    <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted mb-4">
                      {w.date} · {w.time}
                    </p>
                    <div className="h-1.5 w-full bg-sand rounded-full mb-2 overflow-hidden">
                      <div className="h-full bg-terracotta rounded-full" style={{ width: `${(w.filled / w.spots) * 100}%` }} />
                    </div>
                    <p className="font-mono text-[9px] uppercase tracking-wider text-muted mb-4">{w.spots - w.filled} spots left</p>
                    <Link href="/webinars"
                      className="btn-terra font-mono text-[10px] tracking-[0.15em] uppercase px-5 py-2.5 inline-flex">
                      Register →
                    </Link>
                  </div>
                </SectionReveal>
              ))}
            </div>
            <SectionReveal delay={0.4}>
              <Link href="/webinars" className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] uppercase text-muted hover:text-terracotta mt-5 transition-colors duration-200">
                All Webinars →
              </Link>
            </SectionReveal>
          </div>

          {/* Events */}
          <div>
            <SectionReveal delay={0.1}>
              <h2 className="font-serif font-bold text-navy mb-8 leading-tight"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
                Speaking <em className="text-terracotta">Events</em>
              </h2>
            </SectionReveal>
            <div className="flex flex-col gap-0">
              {events.map((e, i) => (
                <SectionReveal key={i} delay={0.15 + i * 0.1}>
                  <div className="border-b border-border py-6 group hover:border-terracotta/30 transition-colors duration-300">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-terracotta mb-1">{e.type} · {e.date}</p>
                        <h3 className="font-serif italic text-navy text-xl mb-1 group-hover:text-terracotta transition-colors duration-300">{e.title}</h3>
                        <p className="font-sans text-muted text-sm">{e.location}</p>
                      </div>
                      <span className={`shrink-0 font-mono text-[9px] uppercase tracking-wider border px-2 py-1 ${
                        e.pub ? "border-terracotta/40 text-terracotta" : "border-border text-muted"
                      }`}>{e.pub ? "Public" : "Invite Only"}</span>
                    </div>
                    <Link href="/events" className="inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider text-muted hover:text-terracotta mt-4 transition-colors duration-200">
                      {e.pub ? "RSVP →" : "Learn More →"}
                    </Link>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
