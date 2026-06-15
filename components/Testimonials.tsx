"use client";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import type { Testimonial } from "@/lib/types";

interface Props { testimonial?: Testimonial | null }

export default function Testimonials({ testimonial }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  const quote = testimonial?.quote
    ?? "I walked into that room differently after just three weeks. Brian doesn't give you theory — he gives you a transformation you can feel.";
  const attribution = testimonial
    ? `${testimonial.name}${testimonial.role ? ` — ${testimonial.role}` : ""}`
    : "Amina K. — Entrepreneur, Nairobi";

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-32 md:py-52"
      style={{ background: "var(--onyx)" }}
    >
      {/* Giant teal quotemark watermark */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 flex items-center justify-end pointer-events-none select-none overflow-hidden"
        aria-hidden
      >
        <span
          style={{
            fontFamily: "var(--font-fraunces)",
            fontStyle: "italic",
            fontWeight: 900,
            fontSize: "clamp(22rem, 70vw, 80rem)",
            lineHeight: 0.75,
            color: "var(--teal)",
            opacity: 0.025,
            paddingRight: "4vw",
          }}
        >
          "
        </span>
      </motion.div>

      <div className="relative max-w-[1400px] mx-auto px-8 md:px-14">
        <motion.p
          className="f-micro mb-12"
          style={{ color: "var(--teal)", opacity: 0.5 }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0.5 } : {}}
          transition={{ duration: 0.6 }}
        >
          What students say
        </motion.p>

        <div className="max-w-[90%] md:max-w-5xl">
          <div className="overflow-hidden">
            <motion.blockquote
              className="f-display"
              style={{ fontSize: "clamp(1.9rem, 4.5vw, 5rem)", color: "var(--ivory)", lineHeight: 1.1 }}
              initial={{ y: "105%", opacity: 0 }}
              animate={inView ? { y: "0%", opacity: 1 } : {}}
              transition={{ duration: 1.05, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            >
              {`"${quote.replace(/\.$/, "")}.`}
              <span style={{ color: "var(--teal)" }}>&rdquo;</span>
            </motion.blockquote>
          </div>

          <motion.div
            className="mt-10 flex items-center gap-5"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
            <div style={{ width: 32, height: 1, background: "var(--gold)", opacity: 0.5 }} />
            <p className="f-micro" style={{ color: "rgba(245,240,232,0.32)" }}>{attribution}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
