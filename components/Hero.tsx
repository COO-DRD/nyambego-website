"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY  = useTransform(scrollYProgress, [0, 1], ["0%", "7%"]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden"
      style={{ background: "var(--ivory)" }}
    >
      {/* Photo — right side, bleeds to edge */}
      <motion.div
        className="absolute inset-y-0 right-0 z-0"
        style={{ y: photoY, left: "40%" }}
      >
        <Image
          src="/brian-hero.jpg"
          alt="Brian Nyambego"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "30% 8%" }}
          sizes="60vw"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to right, var(--ivory) 0%, rgba(245,240,232,0.4) 22%, transparent 52%)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 pointer-events-none"
          style={{ height: "28%", background: "linear-gradient(to top, var(--ivory) 0%, transparent 100%)" }}
        />
      </motion.div>

      {/* Headline + CTA — bottom-left, clean and spacious */}
      <motion.div
        className="relative z-10 min-h-screen flex flex-col justify-end px-8 md:px-14 pb-16 md:pb-20 w-full md:max-w-[52%]"
        style={{ y: textY }}
      >
        <div className="flex flex-col gap-1">
          {["Are you", "ready to", "be"].map((text, i) => (
            <div key={text} className="overflow-hidden">
              <motion.h1
                className="f-display"
                style={{ fontSize: "clamp(4rem, 8.5vw, 9.5rem)", color: "var(--onyx)", lineHeight: 0.9 }}
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.2 + i * 0.09, ease: [0.23, 1, 0.32, 1] }}
              >
                {text}
              </motion.h1>
            </div>
          ))}

          <div className="overflow-hidden">
            <motion.h1
              className="f-display"
              style={{ fontSize: "clamp(4rem, 8.5vw, 9.5rem)", color: "var(--teal)", lineHeight: 0.9 }}
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.47, ease: [0.23, 1, 0.32, 1] }}
            >
              seen?
            </motion.h1>
          </div>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.78, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
            <Link href="/cohorts" className="btn btn-teal" style={{ borderRadius: "9999px" }}>
              Work with Brian
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
