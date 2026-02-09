"use client";

import { motion } from "framer-motion";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  type: "star" | "diamond" | "dot";
}

// Deterministic pseudo-random using sine (pure, no Math.random)
function seededValue(seed: number): number {
  return ((Math.sin(seed * 9301 + 49297) % 1) + 1) % 1;
}

function generateSparkles(count: number): Sparkle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: seededValue(i * 3 + 1) * 100,
    y: seededValue(i * 3 + 2) * 100,
    size: seededValue(i * 3 + 3) * 3 + 1,
    delay: seededValue(i * 3 + 4) * 8,
    duration: seededValue(i * 3 + 5) * 4 + 3,
    type: (["star", "diamond", "dot"] as const)[
      Math.floor(seededValue(i * 3 + 6) * 3)
    ],
  }));
}

// Gold drifting particle positions (deterministic)
const goldTops = [18, 55, 32, 78, 45, 12, 68, 90];

export default function FloatingSparkles({ count = 30 }: { count?: number }) {
  const sparkles = generateSparkles(count);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {sparkles.map((s) => (
        <motion.div
          key={s.id}
          className="absolute"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
            y: [0, -30, -60],
          }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {s.type === "star" && (
            <svg
              width={s.size * 4}
              height={s.size * 4}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"
                fill="rgba(255,220,120,0.5)"
              />
            </svg>
          )}
          {s.type === "diamond" && (
            <svg
              width={s.size * 3}
              height={s.size * 3}
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M8 0L16 8L8 16L0 8L8 0Z"
                fill="rgba(255,235,170,0.4)"
              />
            </svg>
          )}
          {s.type === "dot" && (
            <div
              style={{
                width: s.size * 2,
                height: s.size * 2,
                borderRadius: "50%",
                background: "rgba(255,215,130,0.5)",
                boxShadow: "0 0 6px rgba(255,215,130,0.3)",
              }}
            />
          )}
        </motion.div>
      ))}

      {/* Slow drifting gold particles */}
      {Array.from({ length: 8 }, (_, i) => (
        <motion.div
          key={`gold-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${10 + i * 12}%`,
            top: `${goldTops[i]}%`,
            width: 3,
            height: 3,
            background: "rgba(255,215,100,0.5)",
            boxShadow: "0 0 10px rgba(255,215,100,0.3)",
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 15, -15, 0],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 6 + i * 0.5,
            delay: i * 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
