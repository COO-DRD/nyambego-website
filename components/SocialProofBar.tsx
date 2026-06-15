"use client";
import { motion } from "framer-motion";

const items = [
  "LET Summit — Strathmore",
  "Spice FM Kenya",
  "Co-operative University",
  "Pearl Radio",
  "Dreams Are Valid University",
  "Billionaire Minds World",
];

export default function SocialProofBar() {
  return (
    <div className="border-y overflow-hidden py-3" style={{ borderColor: "#DDD5CC", background: "var(--sand)" }}>
      <motion.div className="flex shrink-0 gap-12"
        animate={{ x: ["0%", "-50%"] }} transition={{ duration: 24, repeat: Infinity, ease: "linear" }}>
        {[...items, ...items].map((a, i) => (
          <span key={i} className="f-label text-ink/40 whitespace-nowrap">{a}</span>
        ))}
      </motion.div>
    </div>
  );
}
