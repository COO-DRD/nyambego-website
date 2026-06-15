import { Metadata } from "next";
import SectionReveal from "@/components/SectionReveal";
import MultiCTA from "@/components/MultiCTA";
import { getWebinars } from "@/lib/notion";
import type { Webinar } from "@/lib/types";

export const revalidate = 60;
export const metadata: Metadata = {
  title: "Webinars — Brian Nyambego",
  description: "Live webinars on personal branding by Brian Nyambego.",
};

const FALLBACK_UPCOMING: Webinar[] = [
  { id:"1", title:"The 7 Pillars of a Powerful Personal Brand", date:"2026-07-15", time:"7:00 PM EAT", price:"KES 500", isFree:false, spotsTotal:80, spotsFilled:54, description:"A live, interactive session breaking down the seven core pillars every powerful personal brand is built on.", status:"Upcoming", recordingLink:null },
  { id:"2", title:"Dress to Be Taken Seriously: The Suit Masterclass", date:"2026-08-02", time:"3:00 PM EAT", price:"Free", isFree:true, spotsTotal:200, spotsFilled:137, description:"The visual side of personal branding — how to use what you wear as a competitive advantage, regardless of your budget.", status:"Upcoming", recordingLink:null },
];

const FALLBACK_PAST: Webinar[] = [
  { id:"3", title:"How to Build Your Brand From Zero", date:"March 2026", time:"", price:"", isFree:false, spotsTotal:0, spotsFilled:0, description:"", status:"Past", recordingLink:"https://wa.me/[BRIAN_WHATSAPP]" },
  { id:"4", title:"LinkedIn for African Professionals", date:"January 2026", time:"", price:"", isFree:false, spotsTotal:0, spotsFilled:0, description:"", status:"Past", recordingLink:"https://wa.me/[BRIAN_WHATSAPP]" },
  { id:"5", title:"The Art of Being Remembered", date:"November 2025", time:"", price:"", isFree:false, spotsTotal:0, spotsFilled:0, description:"", status:"Past", recordingLink:null },
];

function fmtDate(iso: string) {
  if (!iso) return "";
  try {
    return new Date(iso).toLocaleDateString("en-KE", { month: "long", day: "numeric", year: "numeric" });
  } catch {
    return iso;
  }
}

export default async function Webinars() {
  const all = await getWebinars();
  const upcoming = all.length > 0 ? all.filter(w => w.status === "Upcoming") : FALLBACK_UPCOMING;
  const past     = all.length > 0 ? all.filter(w => w.status === "Past")     : FALLBACK_PAST;

  return (
    <div className="pt-16">
      <section className="relative bg-black min-h-[50vh] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0 pinstripe opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 w-full">
          <SectionReveal>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold mb-4">Live Sessions</p>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h1 className="font-serif italic text-white" style={{ fontSize: "clamp(3rem, 8vw, 7rem)", lineHeight: "0.9" }}>
              Webinars
            </h1>
          </SectionReveal>
        </div>
      </section>

      <section className="bg-black py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionReveal>
            <h2 className="font-serif italic text-white text-4xl md:text-5xl mb-12">
              <span className="text-gold">Upcoming</span> Sessions
            </h2>
          </SectionReveal>

          {upcoming.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
              {upcoming.map((w, i) => (
                <SectionReveal key={w.id} delay={0.1 + i * 0.1}>
                  <div className="border border-border bg-surface p-8 h-full flex flex-col group hover:border-gold/40 transition-colors duration-300">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <span className={`font-mono text-[10px] tracking-[0.15em] uppercase px-2 py-1 border ${
                        w.isFree ? "border-gold/30 text-gold" : "border-border text-muted"
                      }`}>
                        {w.price}
                      </span>
                      <p className="font-mono text-[10px] tracking-[0.1em] uppercase text-muted text-right">
                        {fmtDate(w.date)}<br />{w.time}
                      </p>
                    </div>
                    <h3 className="font-serif italic text-white text-2xl leading-tight mb-3">{w.title}</h3>
                    <p className="font-sans text-muted text-sm leading-relaxed flex-1">{w.description}</p>

                    {w.spotsTotal > 0 && (
                      <div className="mt-6">
                        <div className="h-px w-full bg-border mb-2 relative overflow-hidden">
                          <div className="absolute top-0 left-0 h-full bg-gold" style={{ width: `${(w.spotsFilled / w.spotsTotal) * 100}%` }} />
                        </div>
                        <p className="font-mono text-[9px] tracking-wider uppercase text-muted mb-5">
                          {w.spotsTotal - w.spotsFilled} spots remaining
                        </p>
                      </div>
                    )}
                    <a
                      href="https://wa.me/[BRIAN_WHATSAPP]"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold inline-flex items-center bg-gold text-black font-mono text-[11px] tracking-[0.2em] uppercase px-6 py-3 mt-4 self-start"
                    >
                      Register →
                    </a>
                  </div>
                </SectionReveal>
              ))}
            </div>
          ) : (
            <p className="font-sans text-muted mb-24">No upcoming webinars scheduled. Check back soon.</p>
          )}

          <SectionReveal>
            <h2 className="font-serif italic text-white text-4xl md:text-5xl mb-10">
              Past Sessions
            </h2>
          </SectionReveal>
          <div className="flex flex-col gap-0">
            {past.map((p, i) => (
              <SectionReveal key={p.id} delay={0.1 + i * 0.07}>
                <div className="flex items-center justify-between py-5 border-b border-border group hover:border-gold/30 transition-colors duration-300">
                  <div>
                    <h3 className="font-serif italic text-white text-xl group-hover:text-gold transition-colors duration-300">{p.title}</h3>
                    <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted mt-1">{p.date}</p>
                  </div>
                  {p.recordingLink && (
                    <a href={p.recordingLink} target="_blank" rel="noopener noreferrer"
                      className="font-mono text-[9px] tracking-[0.15em] uppercase text-gold border border-gold/30 px-2 py-1 shrink-0 hover:bg-gold/10 transition-colors">
                      Recap Available
                    </a>
                  )}
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <MultiCTA />
    </div>
  );
}
