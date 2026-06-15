import { Metadata } from "next";
import SectionReveal from "@/components/SectionReveal";
import MultiCTA from "@/components/MultiCTA";
import { getEvents } from "@/lib/notion";
import type { Event } from "@/lib/types";

export const revalidate = 60;
export const metadata: Metadata = { title: "Events — Brian Nyambego" };

const FALLBACK_UPCOMING: Event[] = [
  { id:"1", title:"Brand Summit Nairobi 2026", date:"2026-09-20", location:"Nairobi, Kenya", type:"Conference", isPublic:true, rsvpLink:null, status:"Upcoming", role:"" },
  { id:"2", title:"CEO Personal Branding Workshop", date:"2026-08-15", location:"Strathmore University", type:"Workshop", isPublic:false, rsvpLink:null, status:"Upcoming", role:"" },
];

const FALLBACK_PAST: Event[] = [
  { id:"3", title:"LET Summit — Strathmore University", date:"2024-11-28", location:"Strathmore, Nairobi", type:"Summit", isPublic:true, rsvpLink:null, status:"Past", role:"Guest Speaker" },
  { id:"4", title:"Spice FM Kenya Interview", date:"2023", location:"Nairobi", type:"Media", isPublic:true, rsvpLink:null, status:"Past", role:"Featured Guest" },
  { id:"5", title:"Dreams Are Valid University Launch", date:"2022", location:"Nairobi", type:"Event", isPublic:true, rsvpLink:null, status:"Past", role:"Founder & Host" },
];

function fmtDate(iso: string) {
  if (!iso) return "";
  try {
    return new Date(iso).toLocaleDateString("en-KE", { month: "long", day: "numeric", year: "numeric" });
  } catch {
    return iso;
  }
}

export default async function Events() {
  const all = await getEvents();
  const upcoming = all.length > 0 ? all.filter(e => e.status === "Upcoming") : FALLBACK_UPCOMING;
  const past     = all.length > 0 ? all.filter(e => e.status === "Past")     : FALLBACK_PAST;

  return (
    <div className="pt-16">
      <section className="relative bg-black min-h-[50vh] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0 pinstripe opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 w-full">
          <SectionReveal>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold mb-4">Speaking & Appearances</p>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h1 className="font-serif italic text-white" style={{ fontSize: "clamp(3rem, 8vw, 7rem)", lineHeight: "0.9" }}>Events</h1>
          </SectionReveal>
        </div>
      </section>

      <section className="bg-black py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionReveal><h2 className="font-serif italic text-white text-4xl mb-10"><span className="text-gold">Upcoming</span></h2></SectionReveal>

          {upcoming.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
              {upcoming.map((e, i) => (
                <SectionReveal key={e.id} delay={0.1 + i * 0.1}>
                  <div className="border border-border bg-surface p-8 group hover:border-gold/40 transition-colors duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-gold">{e.type}</span>
                      <span className={`font-mono text-[9px] tracking-[0.1em] uppercase border px-2 py-1 ${e.isPublic ? "border-gold/30 text-gold" : "border-border text-muted"}`}>
                        {e.isPublic ? "Public" : "Invite Only"}
                      </span>
                    </div>
                    <h3 className="font-serif italic text-white text-2xl mb-2">{e.title}</h3>
                    <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted mb-6">{fmtDate(e.date)} · {e.location}</p>
                    {e.isPublic && (
                      <a href={e.rsvpLink ?? "https://wa.me/[BRIAN_WHATSAPP]"} target="_blank" rel="noopener noreferrer"
                        className="btn-outline inline-flex border border-gold text-gold font-mono text-[10px] tracking-[0.2em] uppercase px-5 py-2.5 hover:bg-gold hover:text-black transition-colors">
                        RSVP →
                      </a>
                    )}
                  </div>
                </SectionReveal>
              ))}
            </div>
          ) : (
            <p className="font-sans text-muted mb-24">No upcoming events scheduled. Check back soon.</p>
          )}

          <SectionReveal><h2 className="font-serif italic text-white text-4xl mb-10">Past Appearances</h2></SectionReveal>
          <div className="flex flex-col gap-0">
            {past.map((p, i) => (
              <SectionReveal key={p.id} delay={0.1 + i * 0.08}>
                <div className="grid grid-cols-[1fr_auto] gap-8 py-6 border-b border-border group hover:border-gold/30 transition-colors duration-300">
                  <div>
                    <h3 className="font-serif italic text-white text-xl group-hover:text-gold transition-colors duration-300">{p.title}</h3>
                    <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted mt-1">{p.date} · {p.location}</p>
                  </div>
                  <span className="font-mono text-[9px] tracking-[0.1em] uppercase text-gold self-center shrink-0">{p.role}</span>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal delay={0.4}>
            <div className="mt-16 p-8 border border-border bg-surface">
              <h3 className="font-serif italic text-white text-2xl mb-3">Invite Brian to Speak</h3>
              <p className="font-sans text-muted text-sm mb-6 max-w-lg">Corporate sessions, school assemblies, summits, panels. Brian speaks on personal branding, mindset, youth development, and the power of deliberate presentation.</p>
              <a href="https://wa.me/[BRIAN_WHATSAPP]" target="_blank" rel="noopener noreferrer"
                className="btn-gold inline-flex items-center bg-gold text-black font-mono text-[11px] tracking-[0.2em] uppercase px-6 py-3">
                Inquire via WhatsApp →
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>

      <MultiCTA />
    </div>
  );
}
