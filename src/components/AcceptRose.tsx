"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback, useRef } from "react";
import { valentineConfig } from "@/config/valentine";

export default function AcceptRose() {
  const { name } = valentineConfig;
  const [accepted, setAccepted] = useState(false);
  const [noHovered, setNoHovered] = useState(false);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [runCount, setRunCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const funnyNoTexts = [
    "No",
    "Are you sure?",
    "Really??",
    "Think again!",
    "You're breaking my heart!",
    "Please? 🥺",
    "I'll cry...",
    "Not an option!",
    "Try again 😤",
  ];

  const runAway = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    // Clamp movement to stay within the container bounds
    const maxX = Math.max(rect.width / 2 - 60, 40);
    const maxY = Math.max(rect.height / 2 - 25, 60);

    const newX = (Math.random() - 0.5) * 2 * maxX;
    const newY = (Math.random() - 0.5) * 2 * maxY;

    setNoPosition({ x: newX, y: newY });
    setRunCount((prev) => prev + 1);
    setNoHovered(true);
  }, []);

  return (
    <section className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-20 text-center">
      <AnimatePresence mode="wait">
        {!accepted ? (
          <motion.div
            key="question"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -30 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-5 sm:p-8 md:p-12 rounded-3xl border border-rose-500/15 bg-gradient-to-br from-rose-950/30 via-black/50 to-rose-950/20 backdrop-blur-sm overflow-hidden"
          >
            {/* Rose icon */}
            <motion.div
              className="text-5xl sm:text-6xl mb-4 sm:mb-6"
              animate={{
                scale: [1, 1.15, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              🌹
            </motion.div>

            {/* Intro text */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-rose-200/60 text-sm sm:text-base md:text-lg leading-relaxed mb-1 sm:mb-2"
              style={{ fontFamily: "var(--font-great-vibes)" }}
            >
              From the very beginning...
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-rose-100/70 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8"
            >
              I nicknamed you{" "}
              <span className="text-rose-400 font-semibold">
                &ldquo;Rose&rdquo;
              </span>{" "}
              because just like a rose, you are the most beautiful, graceful,
              and precious thing in my world. And now, I want to make this{" "}
              <span
                className="italic text-rose-300"
                style={{ fontFamily: "var(--font-great-vibes)" }}
              >
                mine forever
              </span>
              .
            </motion.p>

            {/* The Question */}
            <motion.h3
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, type: "spring" }}
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-rose-200/90 mb-8 sm:mb-10"
            >
              Would you accept this rose,{" "}
              <span
                className="bg-gradient-to-r from-rose-400 to-pink-300 bg-clip-text text-transparent"
                style={{ fontFamily: "var(--font-great-vibes)" }}
              >
                {name}
              </span>
              ?
            </motion.h3>

            {/* Buttons area */}
            <div
              ref={containerRef}
              className="relative flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 min-h-[180px] sm:min-h-[140px]"
            >
              {/* YES BUTTON */}
              <motion.button
                onClick={() => setAccepted(true)}
                animate={{
                  scale: noHovered ? [1, 1.12, 1.08] : 1,
                  boxShadow: noHovered
                    ? [
                        "0 0 20px rgba(255,0,80,0.3)",
                        "0 0 40px rgba(255,0,80,0.6)",
                        "0 0 25px rgba(255,0,80,0.4)",
                      ]
                    : "0 0 10px rgba(255,0,80,0.2)",
                }}
                transition={{
                  duration: noHovered ? 0.8 : 0.3,
                  repeat: noHovered ? Infinity : 0,
                }}
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-8 sm:px-10 py-3 sm:py-4 rounded-full bg-gradient-to-r from-red-600 via-rose-500 to-pink-500 text-white font-semibold text-base sm:text-lg tracking-wide transition-all duration-300 cursor-pointer z-10"
              >
                <span className="relative z-10">Yes! 🌹</span>
                {noHovered && (
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(255,0,80,0.4), inset 0 0 20px rgba(255,255,255,0.1)",
                        "0 0 40px rgba(255,0,80,0.7), inset 0 0 30px rgba(255,255,255,0.2)",
                        "0 0 20px rgba(255,0,80,0.4), inset 0 0 20px rgba(255,255,255,0.1)",
                      ],
                    }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                )}
                {noHovered && (
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-rose-400/80 text-[10px] sm:text-xs whitespace-nowrap"
                  >
                    This is the right choice 💕
                  </motion.p>
                )}
              </motion.button>

              {/* NO BUTTON - Runs away! */}
              <motion.button
                animate={{
                  x: noPosition.x,
                  y: noPosition.y,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                onHoverStart={runAway}
                onTouchStart={(e) => {
                  e.preventDefault();
                  runAway();
                }}
                onMouseEnter={runAway}
                className="px-6 sm:px-10 py-2.5 sm:py-4 rounded-full border border-rose-500/20 bg-rose-950/30 text-rose-300/50 font-semibold text-sm sm:text-lg tracking-wide cursor-pointer hover:border-rose-500/10 transition-colors z-10 whitespace-nowrap"
              >
                {funnyNoTexts[Math.min(runCount, funnyNoTexts.length - 1)]}
              </motion.button>
            </div>

            {/* Hint after many attempts */}
            <AnimatePresence>
              {runCount >= 3 && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-rose-400/40 text-[10px] sm:text-xs mt-8 sm:mt-10 italic"
                >
                  {runCount >= 6
                    ? "Haha! The 'No' button doesn't want to be clicked either! 😄"
                    : "Psst... I think the answer is pretty obvious 😉"}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ) : (
          /* ========== ACCEPTED STATE ========== */
          <motion.div
            key="accepted"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="p-5 sm:p-8 md:p-12 rounded-3xl border border-rose-500/20 bg-gradient-to-br from-rose-950/40 via-red-950/30 to-pink-950/30 backdrop-blur-sm relative overflow-hidden"
          >
            {/* Celebration burst — clamped to container */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(16)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute left-1/2 top-1/2 text-lg sm:text-2xl"
                  initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                  animate={{
                    x: (Math.random() - 0.5) * 200,
                    y: (Math.random() - 0.5) * 300,
                    opacity: [1, 1, 0],
                    scale: [0, 1.3, 0.5],
                    rotate: Math.random() * 720,
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.05,
                    ease: "easeOut",
                  }}
                >
                  {["🌹", "❤️", "💕", "✨", "💗", "🥰", "💖", "🌸"][i % 8]}
                </motion.div>
              ))}
            </div>

            {/* Big heart */}
            <motion.div
              className="text-5xl sm:text-7xl mb-4 sm:mb-6"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              💖
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-rose-300 via-pink-200 to-rose-300 bg-clip-text text-transparent mb-3 sm:mb-4"
              style={{ fontFamily: "var(--font-great-vibes)" }}
            >
              She said Yes!
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-rose-200/70 text-base sm:text-lg leading-relaxed mb-2"
            >
              I knew you&apos;d say yes, {name}!
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="text-rose-200/50 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8"
            >
              You just made me the happiest person in the world. This rose, and
              my heart — they&apos;re forever yours.
            </motion.p>

            {/* Screenshot prompt */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="p-4 sm:p-6 rounded-2xl border border-rose-400/20 bg-rose-500/5"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-2xl sm:text-3xl mb-2 sm:mb-3"
              >
                📸
              </motion.div>
              <p className="text-rose-200/80 font-semibold text-base sm:text-lg mb-1 sm:mb-2">
                Now take a screenshot!
              </p>
              <p className="text-rose-300/50 text-xs sm:text-sm leading-relaxed">
                Send it to me as proof that you accepted my rose 🌹
                <br />
                <span className="text-rose-400/60 italic">
                  I&apos;ll be waiting...
                </span>
              </p>
            </motion.div>

            {/* Floating hearts celebration */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="mt-6 sm:mt-8 flex justify-center gap-2 sm:gap-3"
            >
              {["🌹", "💕", "🌹", "💕", "🌹"].map((emoji, i) => (
                <motion.span
                  key={i}
                  className="text-xl sm:text-2xl"
                  animate={{
                    y: [0, -10, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.2,
                    repeat: Infinity,
                  }}
                >
                  {emoji}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
