"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const links = [
  { label: "About",    href: "/about"    },
  { label: "Books",    href: "/books"    },
  { label: "Cohorts",  href: "/cohorts"  },
  { label: "Coaching", href: "/coaching" },
  { label: "Speaking", href: "/events"   },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY]     = useState(0);
  const pathname = usePathname();

  /* Hide pill on scroll down, reveal on scroll up */
  useEffect(() => {
    const fn = () => {
      const y = window.scrollY;
      setVisible(y < 60 || y < lastY);
      setLastY(y);
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, [lastY]);

  /* Close mobile menu on route change */
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      {/* ── DESKTOP — three floating islands ── */}
      <div className="fixed top-0 inset-x-0 z-50 pointer-events-none select-none hidden md:block">
        <div className="relative px-8 md:px-12 pt-5 flex items-start">

          {/* Logo — left island */}
          <motion.div
            className="pointer-events-auto shrink-0"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
            <Link
              href="/"
              style={{
                fontFamily: "var(--font-signature)",
                fontSize: "clamp(1.55rem, 2.2vw, 1.9rem)",
                color: "var(--teal)",
                lineHeight: 1,
                display: "block",
              }}
            >
              Brian Nyambego
            </Link>
          </motion.div>

          {/* Pill nav — center island */}
          <motion.nav
            className="pointer-events-auto absolute left-1/2 -translate-x-1/2"
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -12 }}
            transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
          >
            <div
              style={{
                background: "rgba(10,10,10,0.86)",
                backdropFilter: "blur(22px)",
                WebkitBackdropFilter: "blur(22px)",
                borderRadius: "9999px",
                border: "1px solid rgba(255,255,255,0.07)",
                padding: "9px 26px",
                display: "flex",
                alignItems: "center",
                gap: "2.2rem",
              }}
            >
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="f-micro transition-colors duration-200"
                  style={{
                    color: pathname === l.href
                      ? "var(--teal)"
                      : "rgba(245,240,232,0.55)",
                    letterSpacing: "0.16em",
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.nav>

          {/* CTA — right island */}
          <motion.div
            className="pointer-events-auto ml-auto shrink-0"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
            <Link
              href="/cohorts"
              style={{
                background: "var(--teal)",
                color: "#fff",
                fontFamily: "var(--font-grotesk)",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                padding: "10px 22px",
                borderRadius: "9999px",
                display: "inline-block",
                transition: "background 200ms ease, transform 140ms ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--teal-deep)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--teal)")}
            >
              Work with Brian
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ── MOBILE — logo + hamburger ── */}
      <div className="fixed top-0 inset-x-0 z-50 md:hidden flex items-center justify-between px-6 pt-5 pointer-events-none">

        {/* Logo */}
        <motion.div
          className="pointer-events-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-signature)",
              fontSize: "1.55rem",
              color: "var(--teal)",
              lineHeight: 1,
            }}
          >
            Brian Nyambego
          </Link>
        </motion.div>

        {/* Hamburger pill */}
        <motion.button
          className="pointer-events-auto"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          style={{
            background: "rgba(10,10,10,0.82)",
            backdropFilter: "blur(18px)",
            borderRadius: "9999px",
            border: "1px solid rgba(255,255,255,0.07)",
            padding: "10px 16px",
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <motion.span
            animate={open ? { rotate: 45, y: 5, width: 20 } : { rotate: 0, y: 0, width: 20 }}
            style={{ display: "block", height: 1.5, background: "var(--ivory)", transformOrigin: "center" }}
          />
          <motion.span
            animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            style={{ display: "block", height: 1.5, background: "var(--ivory)", width: 14 }}
          />
          <motion.span
            animate={open ? { rotate: -45, y: -5, width: 20 } : { rotate: 0, y: 0, width: 20 }}
            style={{ display: "block", height: 1.5, background: "var(--ivory)", transformOrigin: "center" }}
          />
        </motion.button>
      </div>

      {/* ── MOBILE MENU ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
            className="fixed z-40 md:hidden"
            style={{
              top: "4.5rem",
              left: "1rem",
              right: "1rem",
              background: "rgba(10,10,10,0.94)",
              backdropFilter: "blur(28px)",
              WebkitBackdropFilter: "blur(28px)",
              borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.07)",
              padding: "1.5rem",
              boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
            }}
          >
            <div className="flex flex-col gap-4">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="f-label block py-2 transition-colors duration-200 hover:text-teal"
                    style={{ color: "rgba(245,240,232,0.65)", letterSpacing: "0.2em" }}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                className="mt-2 pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.22, duration: 0.3 }}
                style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
              >
                <Link
                  href="/cohorts"
                  onClick={() => setOpen(false)}
                  className="btn btn-teal w-full justify-center"
                  style={{ borderRadius: "9999px" }}
                >
                  Work with Brian
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
