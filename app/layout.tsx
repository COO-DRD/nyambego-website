import type { Metadata } from "next";
import { Cormorant, DM_Sans, Great_Vibes } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-grotesk",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-signature",
  display: "swap",
});

const SITE_URL = "https://briannyambego.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Brian Nyambego — Personal Branding Trainer, Author & Speaker",
    template: "%s · Brian Nyambego",
  },
  description:
    "Brian Nyambego is a global personal branding trainer, award-winning speaker, and author of three books based in Nairobi, Kenya. Founder of Dreams Are Valid University. Known for wearing suits as a personal brand statement.",
  keywords: [
    "Brian Nyambego",
    "personal branding trainer Kenya",
    "personal brand Africa",
    "personal branding coach Nairobi",
    "Dreams Are Valid University",
    "Becoming an Extraordinaire",
    "I Am Super Proud of You",
    "Mindset of a Billionaire",
    "Kenyan speaker",
    "personal brand training",
    "7 day personal branding cohort",
  ],
  authors: [{ name: "Brian Nyambego", url: SITE_URL }],
  creator: "Brian Nyambego",
  publisher: "Brian Nyambego",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    locale: "en_KE",
    siteName: "Brian Nyambego",
    title: "Brian Nyambego — Personal Branding Trainer, Author & Speaker",
    description:
      "Global personal branding trainer, author of 3 books, and award-winning speaker based in Nairobi, Kenya. Before they hear you, they must first see you.",
    images: [
      {
        url: "/brian-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Brian Nyambego — Personal Branding Trainer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brian Nyambego — Personal Branding Trainer",
    description:
      "Global personal branding trainer, author & speaker. Nairobi, Kenya. Before they hear you, they must first see you.",
    images: ["/brian-hero.jpg"],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

/* ── JSON-LD structured data ── */
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Brian Nyambego",
  url: SITE_URL,
  image: `${SITE_URL}/brian-hero.jpg`,
  jobTitle: "Personal Branding Trainer",
  description:
    "Brian Nyambego is a global personal branding trainer, award-winning speaker, and author of three books based in Nairobi, Kenya. Founder of Dreams Are Valid University and President of The First-borns Circle.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  nationality: "Kenyan",
  knowsAbout: [
    "Personal Branding",
    "Public Speaking",
    "Storytelling",
    "Sales Training",
    "Identity Building",
    "Digital Presence",
  ],
  sameAs: [
    "https://instagram.com/b._nyambego",
    "https://tiktok.com/@briannyambego",
    "https://linkedin.com/in/brian-nyambego-7139a323b",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Personal Branding Trainer",
    occupationLocation: { "@type": "Country", name: "Kenya" },
  },
  alumniOf: [],
  affiliation: [
    { "@type": "Organization", name: "Dreams Are Valid University" },
    { "@type": "Organization", name: "The First-borns Circle" },
  ],
  award: "Award-winning public speaker",
};

const booksSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Book",
      name: "Becoming an Extraordinaire",
      author: { "@type": "Person", name: "Brian Nyambego" },
      publisher: { "@type": "Organization", name: "Kibanga Books" },
      inLanguage: "en",
      description:
        "A guide to personal branding, AI, systems and sales that convert. Brian Nyambego's permission slip to stop shrinking and step into your full voice, vision and impact.",
      url: "https://kibangabooks.com/books/becoming-an-extraordinaire-by-brian-nyambego/",
    },
    {
      "@type": "Book",
      name: "I Am Super Proud of You",
      author: { "@type": "Person", name: "Brian Nyambego" },
      publisher: { "@type": "Organization", name: "Kibanga Books" },
      inLanguage: "en",
      description:
        "Before approval. Before applause. Before permission. A call to self-respect that breaks the cycle of seeking external validation.",
      url: "https://kibangabooks.com/books/i-am-super-proud-of-you-by-brian-nyambego/",
    },
    {
      "@type": "Book",
      name: "A Mindset of a Billionaire",
      author: { "@type": "Person", name: "Brian Nyambego" },
      inLanguage: "en",
      description:
        "Written at 17. The mental frameworks Brian built before the world knew his name.",
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Brian Nyambego",
  url: SITE_URL,
  description:
    "Official website of Brian Nyambego — global personal branding trainer, author and speaker based in Nairobi, Kenya.",
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/blog?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} ${greatVibes.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(booksSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="antialiased overflow-x-hidden" style={{ background: "var(--ivory)", color: "var(--onyx)" }}>
        <div className="grain-layer" aria-hidden />
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
