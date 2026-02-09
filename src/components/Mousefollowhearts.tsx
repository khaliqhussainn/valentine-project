"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Heart {
  id: number;
  x: number;
  y: number;
  emoji: string;
  delay: number;
}

export default function MouseFollowHearts() {
  const [hearts, setHearts] = useState<Heart[]>([]);
  const [heartId, setHeartId] = useState(0);

  useEffect(() => {
    let lastEmit = 0;
    const emitInterval = 100; // Emit a heart every 100ms of movement

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastEmit < emitInterval) return;
      
      lastEmit = now;
      
      const heartEmojis = ["❤️", "💕", "💖", "💗", "💝", "💘", "🌹", "✨"];
      const newHeart: Heart = {
        id: heartId,
        x: e.clientX,
        y: e.clientY,
        emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
        delay: 0,
      };

      setHeartId((prev) => prev + 1);
      setHearts((prev) => [...prev, newHeart]);

      // Remove heart after animation completes
      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
      }, 2000);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [heartId]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            className="absolute text-2xl"
            initial={{
              x: heart.x - 12,
              y: heart.y - 12,
              opacity: 1,
              scale: 0,
            }}
            animate={{
              y: heart.y - 100,
              opacity: 0,
              scale: [0, 1.2, 0.8],
              rotate: [0, 10, -10, 0],
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
            }}
          >
            {heart.emoji}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}