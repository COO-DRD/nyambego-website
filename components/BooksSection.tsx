"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Book } from "@/lib/types";

const FALLBACK_BOOKS: Book[] = [
  {
    id: "1",
    title: "Becoming an Extraordinaire",
    subtitle: "Personal Branding, AI, Systems and Sales that Convert",
    year: "2026",
    price: "KES 1,500",
    coverUrl: "/book-becoming-extraordinaire.webp",
    buyLink: "https://kibangabooks.com/books/becoming-an-extraordinaire-by-brian-nyambego/",
    description: "This is your permission slip to stop shrinking. Step fully into the voice, vision and impact you were born to unleash.",
    order: 1,
  },
  {
    id: "2",
    title: "I Am Super Proud of You",
    subtitle: "Before approval. Before applause. Before permission.",
    year: "2025",
    price: "KES 1,500",
    coverUrl: "/book-super-proud.webp",
    buyLink: "https://kibangabooks.com/books/i-am-super-proud-of-you-by-brian-nyambego/",
    description: "A call to self-respect that breaks the cycle of seeking external validation. One of Brian's bestsellers.",
    order: 2,
  },
  {
    id: "3",
    title: "A Mindset of a Billionaire",
    subtitle: "Written at 17. The book that started everything.",
    year: "2021",
    price: "KES 1,500",
    coverUrl: null,
    buyLink: "#",
    description: "Brian's debut — the mental frameworks he built before the world knew his name. Every page is fuel.",
    order: 3,
  },
];

interface Props { books?: Book[] }

export default function BooksSection({ books }: Props) {
  const displayBooks = books && books.length > 0 ? books : FALLBACK_BOOKS;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 md:py-40 overflow-hidden" style={{ background: "var(--ivory)" }}>
      <div className="max-w-[1400px] mx-auto px-8 md:px-14">

        {/* Header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <motion.div
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              <div style={{ width: 20, height: 2, background: "var(--teal)" }} />
              <p className="f-label" style={{ color: "var(--teal)" }}>Written by Brian</p>
            </motion.div>
            <motion.h2
              className="f-display"
              style={{ fontSize: "clamp(3rem, 5.5vw, 5.5rem)", color: "var(--onyx)" }}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.08, ease: [0.23, 1, 0.32, 1] }}
            >
              The <span style={{ color: "var(--teal)" }}>Shelf.</span>
            </motion.h2>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}>
            <Link
              href="/books"
              className="f-label transition-colors duration-200"
              style={{ color: "rgba(10,10,10,0.38)" }}
            >
              All books →
            </Link>
          </motion.div>
        </div>

        {/* Books grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {displayBooks.slice(0, 3).map((b, i) => (
            <motion.div
              key={b.id}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.13, duration: 0.75, ease: [0.23, 1, 0.32, 1] }}
            >
              <a
                href={b.buyLink !== "#" ? b.buyLink : undefined}
                target={b.buyLink !== "#" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group block"
              >
                {/* Cover */}
                <div
                  className="relative w-full overflow-hidden mb-6"
                  style={{
                    aspectRatio: "3/4",
                    background: !b.coverUrl ? "var(--onyx)" : "var(--cream)",
                  }}
                >
                  {b.coverUrl ? (
                    <Image
                      src={b.coverUrl}
                      alt={b.title}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.06]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center">
                      <p
                        style={{
                          fontFamily: "var(--font-signature)",
                          fontSize: "1.5rem",
                          color: "var(--teal)",
                          marginBottom: "1.2rem",
                        }}
                      >
                        Brian Nyambego
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--font-fraunces)",
                          fontStyle: "italic",
                          color: "var(--ivory)",
                          fontSize: "1.3rem",
                          lineHeight: 1.2,
                        }}
                      >
                        {b.title}
                      </p>
                      <div
                        style={{ width: 40, height: 1.5, background: "var(--gold)", marginTop: "1.5rem", opacity: 0.5 }}
                      />
                    </div>
                  )}

                  {/* Teal hover tint overlay */}
                  <div
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{ background: "var(--teal)", opacity: 0, mixBlendMode: "multiply" }}
                  />
                </div>

                {/* Meta */}
                <p className="f-label mb-2" style={{ color: "rgba(10,10,10,0.32)" }}>
                  {b.year} · {b.price}
                </p>
                <h3
                  className="f-title mb-1 transition-colors duration-250 group-hover:text-teal"
                  style={{ fontSize: "clamp(1.2rem, 2vw, 1.6rem)", color: "var(--onyx)" }}
                >
                  {b.title}
                </h3>
                <p className="f-body text-sm" style={{ color: "rgba(10,10,10,0.45)" }}>
                  {b.subtitle}
                </p>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          className="f-label mt-14"
          style={{ color: "rgba(10,10,10,0.3)" }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          Available at Kibanga Books, Nairobi · M-Pesa accepted
        </motion.p>
      </div>
    </section>
  );
}
