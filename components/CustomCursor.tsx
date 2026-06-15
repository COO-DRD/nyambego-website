"use client";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const mx = useMotionValue(-100), my = useMotionValue(-100);
  const dx = useMotionValue(-100), dy = useMotionValue(-100);
  const sx = useSpring(mx, { stiffness: 140, damping: 16, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 140, damping: 16, mass: 0.4 });
  const scale = useSpring(1, { stiffness: 240, damping: 20 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
      dx.set(e.clientX);
      dy.set(e.clientY);
    };
    const enter = () => scale.set(2.8);
    const leave = () => scale.set(1);

    window.addEventListener("mousemove", move);

    const els = document.querySelectorAll("a,button");
    els.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => window.removeEventListener("mousemove", move);
  }, [mx, my, dx, dy, scale]);

  return (
    <>
      {/* Ring — teal, follows with spring lag */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full"
        style={{
          x: sx, y: sy,
          translateX: "-50%", translateY: "-50%",
          width: 28, height: 28,
          scale,
          border: "1.5px solid var(--teal)",
          opacity: 0.55,
        }}
      />
      {/* Dot — snaps immediately */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full"
        style={{
          x: dx, y: dy,
          translateX: "-50%", translateY: "-50%",
          width: 4, height: 4,
          background: "var(--teal)",
        }}
      />
    </>
  );
}
