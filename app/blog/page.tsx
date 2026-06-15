import { Metadata } from "next";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";
import { getBlogPosts } from "@/lib/notion";
import type { BlogPost } from "@/lib/types";

export const revalidate = 60;
export const metadata: Metadata = {
  title: "Blog — Brian Nyambego",
  description: "Thought leadership on personal branding, mindset, and African excellence.",
};

const FALLBACK: BlogPost[] = [
  { id:"1", slug:"why-your-outfit-is-your-first-speech", title:"Why Your Outfit Is Your First Speech", publishedDate:"2026-06-10", tags:["Personal Branding"], excerpt:"You're communicating before you open your mouth. Here's what your wardrobe is saying about you right now — and how to change the narrative.", readTime:"5 min", coverImage:null },
  { id:"2", slug:"the-invisible-brand-problem", title:"The Invisible Brand Problem", publishedDate:"2026-05-22", tags:["Thought Leadership"], excerpt:"Most talented people in Africa are invisible. Not because they lack skill. Because they haven't learned to package what they know.", readTime:"4 min", coverImage:null },
  { id:"3", slug:"how-i-wrote-my-first-book-at-17", title:"How I Wrote My First Book at 17", publishedDate:"2026-04-15", tags:["Story"], excerpt:"No publisher. No connections. No idea what I was doing. Just a conviction that the ideas in my head deserved to be in the world.", readTime:"7 min", coverImage:null },
  { id:"4", slug:"the-suit-is-not-about-the-suit", title:"The Suit Is Not About the Suit", publishedDate:"2026-03-08", tags:["Personal Branding"], excerpt:"People always ask: why do you wear a suit every day? The answer has nothing to do with fashion.", readTime:"6 min", coverImage:null },
  { id:"5", slug:"linkedin-for-young-africans", title:"LinkedIn Is Sleeping Money for Young Africans", publishedDate:"2026-02-02", tags:["Digital Brand"], excerpt:"LinkedIn is criminally underused by African professionals under 30. Here's a complete breakdown of how to use it.", readTime:"8 min", coverImage:null },
];

function fmtDate(iso: string) {
  if (!iso) return "";
  try {
    return new Date(iso).toLocaleDateString("en-KE", { month: "long", day: "numeric", year: "numeric" });
  } catch {
    return iso;
  }
}

export default async function Blog() {
  const fetched = await getBlogPosts();
  const posts = fetched.length > 0 ? fetched : FALLBACK;
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <div className="pt-16">
      <section className="relative bg-black min-h-[50vh] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0 pinstripe opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 w-full">
          <SectionReveal>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold mb-4">Thought Leadership</p>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h1 className="font-serif italic text-white" style={{ fontSize: "clamp(3rem, 8vw, 7rem)", lineHeight: "0.9" }}>Blog</h1>
          </SectionReveal>
        </div>
      </section>

      <section className="bg-black py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionReveal>
            <Link href={`/blog/${featured.slug}`}>
              <div className="border border-border bg-surface p-10 md:p-16 mb-12 group hover:border-gold/40 transition-colors duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-[cubic-bezier(0.23,1,0.32,1)]" />
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-gold border border-gold/30 px-2 py-1">Featured</span>
                  <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-gold">{featured.tags[0]}</span>
                </div>
                <h2 className="font-serif italic text-white group-hover:text-gold transition-colors duration-300 mb-4 leading-tight"
                  style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
                  {featured.title}
                </h2>
                <p className="font-sans text-muted leading-relaxed max-w-2xl mb-6">{featured.excerpt}</p>
                <div className="flex items-center gap-6">
                  <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted">{fmtDate(featured.publishedDate)}</p>
                  <span className="w-px h-3 bg-border" />
                  <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted">{featured.readTime} read</p>
                  <span className="ml-auto font-serif italic text-gold text-xl">→</span>
                </div>
              </div>
            </Link>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rest.map((p, i) => (
              <SectionReveal key={p.id} delay={0.1 + i * 0.08}>
                <Link href={`/blog/${p.slug}`}>
                  <div className="border border-border p-7 group hover:border-gold/40 transition-colors duration-300 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-gold">{p.tags[0]}</span>
                    </div>
                    <h3 className="font-serif italic text-white text-xl md:text-2xl leading-tight mb-3 group-hover:text-gold transition-colors duration-300 flex-1">
                      {p.title}
                    </h3>
                    <p className="font-sans text-muted text-sm leading-relaxed mb-4">{p.excerpt}</p>
                    <div className="flex items-center gap-4 mt-auto">
                      <p className="font-mono text-[9px] tracking-[0.15em] uppercase text-muted">{fmtDate(p.publishedDate)}</p>
                      <span className="w-px h-3 bg-border" />
                      <p className="font-mono text-[9px] tracking-[0.15em] uppercase text-muted">{p.readTime} read</p>
                    </div>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
