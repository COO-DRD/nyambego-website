import Link from "next/link";

const nav = [
  { l: "About",    h: "/about"    },
  { l: "Books",    h: "/books"    },
  { l: "Cohorts",  h: "/cohorts"  },
  { l: "Coaching", h: "/coaching" },
  { l: "Webinars", h: "/webinars" },
  { l: "Events",   h: "/events"   },
  { l: "Blog",     h: "/blog"     },
  { l: "Contact",  h: "/contact"  },
];

const social = [
  { l: "Instagram", h: "https://instagram.com/b._nyambego" },
  { l: "TikTok",    h: "https://tiktok.com/@briannyambego" },
  { l: "LinkedIn",  h: "https://linkedin.com/in/brian-nyambego-7139a323b" },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--parch)" }}>

      <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">

          {/* Brand */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-signature)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "var(--teal)",
                lineHeight: 1.1,
              }}
            >
              Brian Nyambego
            </p>
            <p className="f-label mt-3" style={{ color: "rgba(10,10,10,0.3)" }}>
              Personal Branding Trainer · Author · Speaker
            </p>
            <div className="flex gap-6 mt-5">
              {social.map((s) => (
                <a
                  key={s.h}
                  href={s.h}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="f-label transition-colors duration-200"
                  style={{ color: "rgba(10,10,10,0.3)" }}
                >
                  {s.l}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="f-label mb-5" style={{ color: "rgba(10,10,10,0.28)" }}>Navigate</p>
            <ul className="grid grid-cols-2 gap-x-10 gap-y-3">
              {nav.map((l) => (
                <li key={l.h}>
                  <Link
                    href={l.h}
                    className="f-body text-sm transition-colors duration-200"
                    style={{ color: "rgba(10,10,10,0.4)" }}
                  >
                    {l.l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Books / Contact */}
          <div>
            <p className="f-label mb-5" style={{ color: "rgba(10,10,10,0.28)" }}>Get the books</p>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="https://kibangabooks.com"
                target="_blank"
                rel="noopener noreferrer"
                className="f-body transition-colors duration-200"
                style={{ color: "rgba(10,10,10,0.45)" }}
              >
                Kibanga Books, Nairobi →
              </a>
              <p className="f-label mt-3" style={{ color: "rgba(10,10,10,0.25)" }}>
                Contact Brian
              </p>
              <Link
                href="/contact"
                className="f-label transition-colors duration-200"
                style={{ color: "var(--teal)", opacity: 0.8 }}
              >
                Book a session →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-14 pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
          className="mt-14 pt-4 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="f-label" style={{ color: "rgba(10,10,10,0.25)" }}>
            © {new Date().getFullYear()} Brian Nyambego · All rights reserved
          </p>
          <p
            style={{
              fontFamily: "var(--font-fraunces)",
              fontStyle: "italic",
              color: "rgba(10,10,10,0.22)",
              fontSize: "0.9rem",
            }}
          >
            "Before they hear you, they must first see you."
          </p>
        </div>
      </div>
    </footer>
  );
}
