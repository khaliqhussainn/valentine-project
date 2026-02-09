"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

export default function TypewriterText({
  text,
  className = "",
  delay = 0,
  speed = 30,
}: {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}) {
  const [displayText, setDisplayText] = useState("");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const timeout = setTimeout(() => {
      const controls = animate(count, text.length, {
        type: "tween",
        duration: text.length / speed,
        ease: "linear",
      });
      return () => controls.stop();
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [count, text.length, delay, speed]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => {
      setDisplayText(text.slice(0, v));
    });
    return () => unsubscribe();
  }, [rounded, text]);

  return (
    <motion.span className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="text-rose-400"
      >
        |
      </motion.span>
    </motion.span>
  );
}
