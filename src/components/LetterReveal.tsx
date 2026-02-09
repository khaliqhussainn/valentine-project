"use client";

import { motion } from "framer-motion";

export default function LetterReveal({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const revealDone = delay + text.length * 0.12 + 0.7;

  return (
    <motion.span
      className={className}
      style={{
        // Permanent strong base glow so the name is always bright
        textShadow:
          "0 0 20px rgba(255,200,220,0.7), 0 0 50px rgba(255,0,80,0.35), 0 0 80px rgba(255,0,80,0.15)",
      }}
      // Heartbeat: glow intensifies on beat, text stays fully visible
      animate={{
        opacity: [0.95, 1, 1, 0.95],
        filter: [
          "drop-shadow(0 0 15px rgba(255,120,170,0.4))",
          "drop-shadow(0 0 50px rgba(255,50,120,0.85)) drop-shadow(0 0 100px rgba(255,0,80,0.4))",
          "drop-shadow(0 0 35px rgba(255,120,170,0.5))",
          "drop-shadow(0 0 15px rgba(255,120,170,0.4))",
        ],
        scale: [1, 1.03, 1, 0.98, 1],
      }}
      transition={{
        delay: revealDone,
        duration: 2.2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.5,
            filter: "blur(8px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{
            delay: delay + i * 0.12,
            duration: 0.7,
            ease: "easeOut",
          }}
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : undefined }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}
