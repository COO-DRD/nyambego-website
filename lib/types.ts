/* ─────────────────────────────────────────────────────────────────────────────
   Content types — these mirror exactly what Brian maintains in Notion.
   Each type corresponds to one Notion database.
   ───────────────────────────────────────────────────────────────────────────── */

export interface Cohort {
  id: string;
  name: string;
  description: string;
  days: number;
  startDate: string | null;
  price: string;
  spotsTotal: number;
  spotsFilled: number;
  status: "Open" | "Upcoming" | "Closed";
  whatsappText: string;
  featured: boolean;
}

export interface Book {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  price: string;
  coverUrl: string | null;
  buyLink: string;
  description: string;
  order: number;
}

export interface Webinar {
  id: string;
  title: string;
  date: string;
  time: string;
  price: string;
  isFree: boolean;
  spotsTotal: number;
  spotsFilled: number;
  description: string;
  status: "Upcoming" | "Past";
  recordingLink: string | null;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  type: string;
  isPublic: boolean;
  rsvpLink: string | null;
  status: "Upcoming" | "Past";
  role: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedDate: string;
  tags: string[];
  coverImage: string | null;
  readTime: string;
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  role: string;
  featured: boolean;
  order: number;
}
