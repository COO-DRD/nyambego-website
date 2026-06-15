"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right";
}

export default function SectionReveal({ children, delay = 0, className = "", direction = "up" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-70px" });

  const variants = {
    up:    { hidden: { opacity: 0, y: 28 },  visible: { opacity: 1, y: 0 } },
    left:  { hidden: { opacity: 0, x: -28 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 28 },  visible: { opacity: 1, x: 0 } },
  };

  return (
    <motion.div ref={ref} className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants[direction]}
      transition={{ duration: 0.65, delay, ease: [0.23, 1, 0.32, 1] }}>
      {children}
    </motion.div>
  );
}
