import { Client } from "@notionhq/client";
import type { Cohort, Book, Webinar, Event, BlogPost, Testimonial } from "./types";

/* ─────────────────────────────────────────────────────────────────────────────
   Notion client — only initialised when keys are present.
   All functions return empty arrays gracefully if Notion isn't configured yet,
   so the site still renders with placeholder content during development.
   ───────────────────────────────────────────────────────────────────────────── */

function getClient(): Client | null {
  const token = process.env.NOTION_TOKEN;
  if (!token) return null;
  return new Client({ auth: token });
}

/* ── Helpers ── */

function getText(prop: any): string {
  if (!prop) return "";
  if (prop.type === "title") return prop.title?.map((t: any) => t.plain_text).join("") ?? "";
  if (prop.type === "rich_text") return prop.rich_text?.map((t: any) => t.plain_text).join("") ?? "";
  if (prop.type === "select") return prop.select?.name ?? "";
  if (prop.type === "number") return String(prop.number ?? 0);
  if (prop.type === "url") return prop.url ?? "";
  if (prop.type === "date") return prop.date?.start ?? "";
  if (prop.type === "checkbox") return String(prop.checkbox ?? false);
  if (prop.type === "multi_select") return prop.multi_select?.map((s: any) => s.name).join(",") ?? "";
  return "";
}

function getBool(prop: any): boolean {
  return prop?.checkbox === true;
}

function getNumber(prop: any): number {
  return prop?.number ?? 0;
}

async function queryDB(dbId: string, filter?: object, sorts?: object[]): Promise<any[]> {
  const notion = getClient();
  if (!notion || !dbId) return [];
  try {
    const res = await notion.databases.query({
      database_id: dbId,
      ...(filter ? { filter: filter as any } : {}),
      ...(sorts ? { sorts: sorts as any } : {}),
      page_size: 100,
    });
    return res.results;
  } catch (err) {
    console.error("[Notion] Failed to query database:", dbId, err);
    return [];
  }
}

/* ── Cohorts ────────────────────────────────────────────────────────────────── */

export async function getCohorts(): Promise<Cohort[]> {
  const pages = await queryDB(
    process.env.NOTION_COHORTS_DB ?? "",
    undefined,
    [{ property: "Start Date", direction: "descending" }]
  );

  return pages.map((p: any) => {
    const props = p.properties;
    return {
      id: p.id,
      name:         getText(props["Name"]),
      description:  getText(props["Description"]),
      days:         getNumber(props["Days"]),
      startDate:    getText(props["Start Date"]) || null,
      price:        getText(props["Price"]),
      spotsTotal:   getNumber(props["Spots Total"]),
      spotsFilled:  getNumber(props["Spots Filled"]),
      status:       (getText(props["Status"]) || "Upcoming") as Cohort["status"],
      whatsappText: getText(props["WhatsApp Text"]) || "Hi Brian, I'd like to join the cohort.",
      featured:     getBool(props["Featured"]),
    };
  });
}

export async function getFeaturedCohort(): Promise<Cohort | null> {
  const all = await getCohorts();
  return all.find(c => c.featured && c.status === "Open")
    ?? all.find(c => c.featured)
    ?? all[0]
    ?? null;
}

/* ── Books ──────────────────────────────────────────────────────────────────── */

export async function getBooks(): Promise<Book[]> {
  const pages = await queryDB(
    process.env.NOTION_BOOKS_DB ?? "",
    { property: "Published", checkbox: { equals: true } },
    [{ property: "Order", direction: "ascending" }]
  );

  return pages.map((p: any) => {
    const props = p.properties;
    return {
      id:          p.id,
      title:       getText(props["Name"]),
      subtitle:    getText(props["Subtitle"]),
      year:        getText(props["Year"]),
      price:       getText(props["Price"]),
      coverUrl:    getText(props["Cover URL"]) || null,
      buyLink:     getText(props["Buy Link"]),
      description: getText(props["Description"]),
      order:       getNumber(props["Order"]),
    };
  });
}

/* ── Webinars ───────────────────────────────────────────────────────────────── */

export async function getWebinars(): Promise<Webinar[]> {
  const pages = await queryDB(
    process.env.NOTION_WEBINARS_DB ?? "",
    undefined,
    [{ property: "Date", direction: "ascending" }]
  );

  return pages.map((p: any) => {
    const props = p.properties;
    const price = getText(props["Price"]);
    return {
      id:            p.id,
      title:         getText(props["Name"]),
      date:          getText(props["Date"]),
      time:          getText(props["Time"]),
      price,
      isFree:        price.toLowerCase() === "free",
      spotsTotal:    getNumber(props["Spots Total"]),
      spotsFilled:   getNumber(props["Spots Filled"]),
      description:   getText(props["Description"]),
      status:        (getText(props["Status"]) || "Upcoming") as Webinar["status"],
      recordingLink: getText(props["Recording Link"]) || null,
    };
  });
}

/* ── Events ─────────────────────────────────────────────────────────────────── */

export async function getEvents(): Promise<Event[]> {
  const pages = await queryDB(
    process.env.NOTION_EVENTS_DB ?? "",
    undefined,
    [{ property: "Date", direction: "descending" }]
  );

  return pages.map((p: any) => {
    const props = p.properties;
    return {
      id:       p.id,
      title:    getText(props["Name"]),
      date:     getText(props["Date"]),
      location: getText(props["Location"]),
      type:     getText(props["Type"]),
      isPublic: getBool(props["Public"]),
      rsvpLink: getText(props["RSVP Link"]) || null,
      status:   (getText(props["Status"]) || "Upcoming") as Event["status"],
      role:     getText(props["Role"]),
    };
  });
}

/* ── Blog ───────────────────────────────────────────────────────────────────── */

export async function getBlogPosts(): Promise<BlogPost[]> {
  const pages = await queryDB(
    process.env.NOTION_BLOG_DB ?? "",
    { property: "Published", checkbox: { equals: true } },
    [{ property: "Published Date", direction: "descending" }]
  );

  return pages.map((p: any) => {
    const props = p.properties;
    const tags = getText(props["Tags"]);
    return {
      id:            p.id,
      title:         getText(props["Name"]),
      slug:          getText(props["Slug"]),
      excerpt:       getText(props["Excerpt"]),
      publishedDate: getText(props["Published Date"]),
      tags:          tags ? tags.split(",") : [],
      coverImage:    getText(props["Cover Image"]) || null,
      readTime:      getText(props["Read Time"]) || "5 min",
    };
  });
}

/* ── Testimonials ───────────────────────────────────────────────────────────── */

export async function getTestimonials(): Promise<Testimonial[]> {
  const pages = await queryDB(
    process.env.NOTION_TESTIMONIALS_DB ?? "",
    undefined,
    [{ property: "Order", direction: "ascending" }]
  );

  return pages.map((p: any) => {
    const props = p.properties;
    return {
      id:       p.id,
      name:     getText(props["Name"]),
      quote:    getText(props["Quote"]),
      role:     getText(props["Role"]),
      featured: getBool(props["Featured"]),
      order:    getNumber(props["Order"]),
    };
  });
}

export async function getFeaturedTestimonial(): Promise<Testimonial | null> {
  const all = await getTestimonials();
  return all.find(t => t.featured) ?? all[0] ?? null;
}
