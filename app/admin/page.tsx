/* ─────────────────────────────────────────────────────────────────
   CONTENT ADMIN — Brian's internal guide to managing site content.
   Not publicly visible unless you share the URL.
   Access at: https://yoursite.com/admin
   ───────────────────────────────────────────────────────────────── */

const databases = [
  {
    name: "Cohorts",
    env: "NOTION_COHORTS_DB",
    desc: "Your active 7-Day cohorts, prices, spots, and WhatsApp links.",
    columns: [
      { col: "Name", type: "Title", note: "e.g. '7 Days — Pure Personal Branding'" },
      { col: "Description", type: "Text", note: "Short description shown on site" },
      { col: "Days", type: "Number", note: "7" },
      { col: "Start Date", type: "Date", note: "Cohort start date" },
      { col: "Price", type: "Text", note: "e.g. 'KES 5,000'" },
      { col: "Spots Total", type: "Number", note: "Total enrollment capacity" },
      { col: "Spots Filled", type: "Number", note: "Update manually as people register" },
      { col: "Status", type: "Select", note: "Open / Upcoming / Closed" },
      { col: "WhatsApp Text", type: "Text", note: "Pre-filled WhatsApp message for enrollment" },
      { col: "Featured", type: "Checkbox", note: "Check for the cohort shown on homepage" },
    ],
  },
  {
    name: "Books",
    env: "NOTION_BOOKS_DB",
    desc: "All published books with covers and buy links.",
    columns: [
      { col: "Name", type: "Title", note: "Book title" },
      { col: "Subtitle", type: "Text", note: "Tagline / subtitle" },
      { col: "Year", type: "Text", note: "e.g. '2026'" },
      { col: "Price", type: "Text", note: "e.g. 'KES 1,500'" },
      { col: "Cover URL", type: "URL", note: "Direct image URL for book cover" },
      { col: "Buy Link", type: "URL", note: "Link to Kibanga Books or any store" },
      { col: "Description", type: "Text", note: "Short description" },
      { col: "Order", type: "Number", note: "Display order (1, 2, 3…)" },
      { col: "Published", type: "Checkbox", note: "Check to show on site" },
    ],
  },
  {
    name: "Testimonials",
    env: "NOTION_TESTIMONIALS_DB",
    desc: "Quotes from cohort alumni and coaching clients.",
    columns: [
      { col: "Name", type: "Title", note: "Person's name" },
      { col: "Quote", type: "Text", note: "Their testimonial (no quotation marks)" },
      { col: "Role", type: "Text", note: "e.g. 'Entrepreneur, Nairobi'" },
      { col: "Featured", type: "Checkbox", note: "Check for the quote on homepage" },
      { col: "Order", type: "Number", note: "Display order" },
    ],
  },
  {
    name: "Events",
    env: "NOTION_EVENTS_DB",
    desc: "Speaking engagements, summits, and appearances.",
    columns: [
      { col: "Name", type: "Title", note: "Event name" },
      { col: "Date", type: "Date", note: "Event date" },
      { col: "Location", type: "Text", note: "City / venue" },
      { col: "Type", type: "Select", note: "Summit / Corporate / Institution" },
      { col: "Role", type: "Text", note: "e.g. 'Keynote Speaker'" },
      { col: "Public", type: "Checkbox", note: "Check for public events" },
      { col: "RSVP Link", type: "URL", note: "Registration link (optional)" },
      { col: "Status", type: "Select", note: "Upcoming / Past" },
    ],
  },
  {
    name: "Blog",
    env: "NOTION_BLOG_DB",
    desc: "Articles and thought leadership posts.",
    columns: [
      { col: "Name", type: "Title", note: "Post title" },
      { col: "Slug", type: "Text", note: "URL slug, e.g. 'personal-brand-tips'" },
      { col: "Excerpt", type: "Text", note: "Short preview shown in listing" },
      { col: "Published Date", type: "Date", note: "Post date" },
      { col: "Tags", type: "Text", note: "Comma separated: branding,mindset,suits" },
      { col: "Cover Image", type: "URL", note: "Cover photo URL" },
      { col: "Read Time", type: "Text", note: "e.g. '5 min'" },
      { col: "Published", type: "Checkbox", note: "Check to publish" },
    ],
  },
];

export default function Admin() {
  return (
    <div style={{ background: "var(--onyx)", minHeight: "100vh", paddingTop: "5rem" }}>
      <div className="max-w-[1000px] mx-auto px-8 py-16">

        {/* Header */}
        <div className="mb-14">
          <p className="f-label mb-4" style={{ color: "var(--teal)" }}>CONTENT MANAGEMENT</p>
          <h1 className="f-display mb-4" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color: "var(--ivory)" }}>
            Your CMS guide.
          </h1>
          <p className="f-body" style={{ color: "rgba(245,240,232,0.5)", maxWidth: 600 }}>
            This site is connected to Notion. Create one database per section below,
            share it with your Notion integration, and your site updates automatically every 60 seconds.
          </p>
        </div>

        {/* Step 1 */}
        <div className="mb-12 p-8" style={{ background: "var(--smoke)", border: "1px solid rgba(0,180,216,0.15)" }}>
          <p className="f-label mb-4" style={{ color: "var(--teal)" }}>Step 1 — One-time setup</p>
          <ol className="f-body flex flex-col gap-3" style={{ color: "rgba(245,240,232,0.65)", paddingLeft: "1.5rem" }}>
            <li>Go to <strong style={{ color: "var(--ivory)" }}>notion.so/my-integrations</strong> → Create new integration</li>
            <li>Copy the <strong style={{ color: "var(--ivory)" }}>Internal Integration Token</strong></li>
            <li>Add it to your <strong style={{ color: "var(--ivory)" }}>.env.local</strong> file as <code style={{ color: "var(--teal)", fontSize: "0.85em" }}>NOTION_TOKEN=secret_xxx...</code></li>
          </ol>
        </div>

        {/* Step 2 */}
        <div className="mb-12 p-8" style={{ background: "var(--smoke)", border: "1px solid rgba(0,180,216,0.15)" }}>
          <p className="f-label mb-4" style={{ color: "var(--teal)" }}>Step 2 — For each database below</p>
          <ol className="f-body flex flex-col gap-3" style={{ color: "rgba(245,240,232,0.65)", paddingLeft: "1.5rem" }}>
            <li>In Notion, create a new database with the columns listed below</li>
            <li>Click <strong style={{ color: "var(--ivory)" }}>...</strong> → <strong style={{ color: "var(--ivory)" }}>Add connections</strong> → select your integration</li>
            <li>Copy the database ID from the URL and add it to <strong style={{ color: "var(--ivory)" }}>.env.local</strong></li>
          </ol>
        </div>

        {/* Database list */}
        <p className="f-label mb-8" style={{ color: "var(--teal)" }}>Step 3 — Create these Notion databases</p>

        <div className="flex flex-col gap-8">
          {databases.map((db) => (
            <div
              key={db.name}
              style={{
                background: "var(--smoke)",
                border: "1px solid rgba(245,240,232,0.06)",
                padding: "2rem",
              }}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h2 className="f-title mb-1" style={{ fontSize: "1.4rem", color: "var(--ivory)" }}>
                    {db.name}
                  </h2>
                  <p className="f-body text-sm" style={{ color: "rgba(245,240,232,0.45)" }}>{db.desc}</p>
                </div>
                <code
                  className="f-label text-xs"
                  style={{
                    color: "var(--teal)",
                    background: "rgba(0,180,216,0.08)",
                    padding: "4px 10px",
                    fontSize: "9px",
                    flexShrink: 0,
                    marginLeft: "1rem",
                  }}
                >
                  {db.env}
                </code>
              </div>

              <div
                className="mt-5 pt-5 flex flex-col gap-3"
                style={{ borderTop: "1px solid rgba(245,240,232,0.06)" }}
              >
                {db.columns.map((c) => (
                  <div key={c.col} className="grid grid-cols-[140px_80px_1fr] gap-4 items-start">
                    <span className="f-label" style={{ color: "var(--ivory)", opacity: 0.8, fontSize: "10px" }}>
                      {c.col}
                    </span>
                    <span
                      className="f-label"
                      style={{
                        color: "var(--gold)",
                        opacity: 0.7,
                        fontSize: "9px",
                        paddingTop: "1px",
                      }}
                    >
                      {c.type}
                    </span>
                    <span className="f-body text-sm" style={{ color: "rgba(245,240,232,0.38)", fontSize: "0.8rem" }}>
                      {c.note}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div
          className="mt-14 p-6"
          style={{ background: "rgba(0,180,216,0.06)", border: "1px solid rgba(0,180,216,0.2)" }}
        >
          <p className="f-label mb-2" style={{ color: "var(--teal)" }}>Content updates automatically</p>
          <p className="f-body text-sm" style={{ color: "rgba(245,240,232,0.5)" }}>
            Once connected, any change you make in Notion will appear on the live site within 60 seconds.
            No code needed, no deploys, no developers required. Just update Notion.
          </p>
        </div>
      </div>
    </div>
  );
}
