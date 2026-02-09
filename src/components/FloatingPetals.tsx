"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Petal {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
  opacity: number;
}

export default function FloatingPetals({ count = 30 }: { count?: number }) {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const generated: Petal[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 8 + Math.random() * 12,
      size: 10 + Math.random() * 20,
      rotation: Math.random() * 360,
      opacity: 0.3 + Math.random() * 0.5,
    }));
    setPetals(generated);
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.x}%`,
            top: -30,
          }}
          animate={{
            y: ["0vh", "110vh"],
            x: [0, Math.sin(petal.id) * 100, Math.cos(petal.id) * -50, 0],
            rotate: [0, petal.rotation, -petal.rotation, 360],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg
            width={petal.size}
            height={petal.size}
            viewBox="0 0 24 24"
            style={{ opacity: petal.opacity }}
          >
            <path
              d="M12 2C9 2 6 5 6 9c0 5 6 11 6 11s6-6 6-11c0-4-3-7-6-7z"
              fill={`hsl(${340 + Math.random() * 30}, 80%, ${55 + Math.random() * 20}%)`}
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
