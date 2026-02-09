"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Heart {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

export default function HeartParticles({ count = 15 }: { count?: number }) {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const generated: Heart[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: 60 + Math.random() * 40,
      size: 8 + Math.random() * 16,
      delay: Math.random() * 8,
      duration: 4 + Math.random() * 6,
    }));
    setHearts(generated);
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-red-400/40"
          style={{
            left: `${heart.x}%`,
            top: `${heart.y}%`,
            fontSize: heart.size,
          }}
          animate={{
            y: [0, -200, -400],
            opacity: [0, 0.8, 0],
            scale: [0.5, 1.2, 0.8],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        >
          &#10084;
        </motion.div>
      ))}
    </div>
  );
}
