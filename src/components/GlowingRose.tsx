"use client";

import { motion } from "framer-motion";

export default function GlowingRose() {
  return (
    <motion.div
      className="relative flex items-center justify-center"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 1.5, type: "spring", bounce: 0.4 }}
    >
      {/* Outer glow */}
      <motion.div
        className="absolute w-64 h-64 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,0,80,0.3) 0%, rgba(255,0,80,0) 70%)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Inner glow */}
      <motion.div
        className="absolute w-40 h-40 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,50,100,0.4) 0%, rgba(255,50,100,0) 70%)",
        }}
        animate={{
          scale: [1.1, 1.4, 1.1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Rose emoji with pulse */}
      <motion.div
        className="text-8xl md:text-9xl relative z-10 select-none"
        animate={{
          scale: [1, 1.05, 1],
          filter: [
            "drop-shadow(0 0 20px rgba(255,0,80,0.6))",
            "drop-shadow(0 0 40px rgba(255,0,80,0.9))",
            "drop-shadow(0 0 20px rgba(255,0,80,0.6))",
          ],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        🌹
      </motion.div>

      {/* Sparkle ring */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-pink-300 rounded-full"
          style={{
            left: `${50 + 45 * Math.cos((i * Math.PI * 2) / 8)}%`,
            top: `${50 + 45 * Math.sin((i * Math.PI * 2) / 8)}%`,
          }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            delay: i * 0.25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  );
}
