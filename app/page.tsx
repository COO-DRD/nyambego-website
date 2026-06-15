import { getFeaturedCohort, getBooks, getWebinars, getEvents, getFeaturedTestimonial } from "@/lib/notion";
import Hero from "@/components/Hero";
import SpanningText from "@/components/SpanningText";
import CircleSection from "@/components/CircleSection";
import Statement from "@/components/Statement";
import WhatIDo from "@/components/WhatIDo";
import SignatureStatement from "@/components/FullBleedBrian";
import Testimonials from "@/components/Testimonials";
import BooksSection from "@/components/BooksSection";
import Marquee from "@/components/Marquee";
import CohortSection from "@/components/CohortSection";
import AboutTeaser from "@/components/AboutTeaser";
import MultiCTA from "@/components/MultiCTA";

export const revalidate = 60;

/* Page-level structured data for the homepage */
const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: "Brian Nyambego — Personal Branding Trainer",
  url: "https://briannyambego.com",
  mainEntity: {
    "@type": "Person",
    name: "Brian Nyambego",
    jobTitle: "Personal Branding Trainer",
    description:
      "Brian Nyambego is a global personal branding trainer, award-winning speaker, and author of three books based in Nairobi, Kenya. He helps ambitious Africans build personal brands that walk into rooms before they do.",
    url: "https://briannyambego.com",
    sameAs: [
      "https://instagram.com/b._nyambego",
      "https://tiktok.com/@briannyambego",
      "https://linkedin.com/in/brian-nyambego-7139a323b",
    ],
  },
};

export default async function Home() {
  const [cohort, books, webinars, events, testimonial] = await Promise.all([
    getFeaturedCohort(),
    getBooks(),
    getWebinars(),
    getEvents(),
    getFeaturedTestimonial(),
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />

      {/* Invisible but crawlable summary for AI indexers */}
      <div className="sr-only" aria-label="Page summary">
        <h1>Brian Nyambego — Personal Branding Trainer, Author and Speaker, Nairobi Kenya</h1>
        <p>
          Brian Nyambego is a global personal branding trainer and award-winning speaker based in
          Nairobi, Kenya. He is the author of three books: Becoming an Extraordinaire, I Am Super
          Proud of You, and A Mindset of a Billionaire. Founder of Dreams Are Valid University and
          President of The First-borns Circle. Known for wearing suits daily as a personal branding
          statement. Featured in Pulse Kenya. Speaker at Strathmore University LET Summit 2024.
          He offers a 7-Day Personal Branding Cohort, 1-on-1 coaching, and keynote speaking.
        </p>
      </div>

      <Hero />
      <SpanningText />

      <article aria-label="Brian Nyambego's 7-Day Personal Branding Method">
        <CircleSection />
      </article>

      <section aria-label="Brian Nyambego's personal branding philosophy">
        <Statement />
      </section>

      <section aria-label="Services offered by Brian Nyambego">
        <WhatIDo />
      </section>

      <section aria-label="About Brian Nyambego">
        <SignatureStatement />
      </section>

      <section aria-label="7-Day Personal Branding Cohort by Brian Nyambego">
        <CohortSection cohort={cohort} />
      </section>

      <section aria-label="Testimonials from Brian Nyambego's students">
        <Testimonials testimonial={testimonial} />
      </section>

      <Marquee aria-hidden />

      <section aria-label="Books by Brian Nyambego">
        <BooksSection books={books} />
      </section>

      <AboutTeaser />
      <MultiCTA />
    </>
  );
}
