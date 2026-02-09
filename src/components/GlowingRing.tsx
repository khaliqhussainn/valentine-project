"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const nervousMessages = [
  "😰 Okay... deep breaths...",
  "🫣 What if she says no?!",
  "💪 You got this, bro!",
  "😅 *palms sweating*",
  "🫠 Too late to run now...",
];

// Pre-computed sparkle burst positions (deterministic)
const sparklePositions = Array.from({ length: 16 }, (_, i) => ({
  x: Math.cos(i * 1.4 + 0.5) * 120 + Math.sin(i * 2.3) * 60,
  y: Math.sin(i * 1.8 + 0.2) * 130 - Math.cos(i * 0.7) * 50,
  rotate: (i * 137.5) % 720,
}));

export default function GlowingRing() {
  const [stage, setStage] = useState<
    "entering" | "nervous" | "peek" | "open" | "revealed"
  >("entering");
  const [nervousMsg, setNervousMsg] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Auto-advance through nervous stage messages
  useEffect(() => {
    if (stage !== "nervous") return;
    const interval = setInterval(() => {
      setNervousMsg((prev) => {
        if (prev >= nervousMessages.length - 1) {
          clearInterval(interval);
          setTimeout(() => setStage("peek"), 800);
          return prev;
        }
        return prev + 1;
      });
    }, 1200);
    return () => clearInterval(interval);
  }, [stage]);

  // Stage: entering → nervous after landing
  useEffect(() => {
    const timer = setTimeout(() => setStage("nervous"), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleBoxTap = () => {
    if (stage === "peek") {
      setStage("open");
      // Longer reveal — let the ring animation breathe
      setTimeout(() => setStage("revealed"), 2500);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center gap-4">
      {/* Hidden YouTube audio — loads on open stage */}
      {(stage === "open" || stage === "revealed") && (
        <iframe
          ref={iframeRef}
          className="absolute w-0 h-0 opacity-0 pointer-events-none"
          src="https://www.youtube.com/embed/EvzNDQLwCqw?autoplay=1&loop=1&playlist=EvzNDQLwCqw&controls=0&showinfo=0&rel=0&mute=0&start=8"
          allow="autoplay; encrypted-media"
          title="background music"
        />
      )}

      {/* Main container */}
      <div
        className="relative flex items-center justify-center"
        style={{ width: 280, height: 280 }}
      >
        <AnimatePresence mode="wait">
          {/* ═══ STAGES: entering / nervous / peek ═══ */}
          {(stage === "entering" ||
            stage === "nervous" ||
            stage === "peek") && (
            <motion.div
              key="box"
              className="relative flex items-center justify-center cursor-pointer select-none"
              style={{ width: 280, height: 280 }}
              initial={{ scale: 0, y: -200, rotate: -30 }}
              animate={{
                scale: 1,
                y: 0,
                rotate:
                  stage === "nervous"
                    ? [0, -3, 3, -2, 2, -1, 0]
                    : stage === "peek"
                      ? [0, -1, 1, 0]
                      : 0,
              }}
              transition={
                stage === "entering"
                  ? { duration: 1.2, type: "spring", bounce: 0.5 }
                  : stage === "nervous"
                    ? {
                        rotate: {
                          duration: 0.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }
                    : {
                        rotate: {
                          duration: 1,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }
              }
              exit={{ scale: 0.3, opacity: 0, y: 50 }}
              onClick={handleBoxTap}
              onTouchStart={(e) => {
                e.preventDefault();
                handleBoxTap();
              }}
            >
              {/* Ring box — closed */}
              <div className="relative">
                {/* Box body */}
                <motion.div
                  className="w-32 h-24 rounded-xl relative"
                  style={{
                    background:
                      "linear-gradient(135deg, #2a1a08 0%, #4a3018 40%, #2a1a08 100%)",
                    border: "2px solid rgba(200,160,60,0.3)",
                    boxShadow:
                      "0 8px 30px rgba(0,0,0,0.5), inset 0 2px 0 rgba(255,220,100,0.1)",
                  }}
                >
                  {/* Velvet interior hint */}
                  <div
                    className="absolute inset-1 rounded-lg"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(60,10,20,0.6) 0%, rgba(80,15,25,0.4) 100%)",
                    }}
                  />
                  {/* Gold clasp */}
                  <motion.div
                    className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-8 h-3 rounded-full"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(255,220,100,0.8), rgba(200,160,50,0.6))",
                      boxShadow: "0 0 8px rgba(255,215,0,0.3)",
                    }}
                    animate={
                      stage === "peek"
                        ? { scaleY: [1, 1.5, 1], opacity: [0.8, 1, 0.8] }
                        : {}
                    }
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                </motion.div>

                {/* Box lid */}
                <motion.div
                  className="absolute -top-8 left-0 w-32 h-10 rounded-t-xl"
                  style={{
                    background:
                      "linear-gradient(135deg, #3a2210 0%, #5a3a20 40%, #3a2210 100%)",
                    border: "2px solid rgba(200,160,60,0.3)",
                    borderBottom: "none",
                    transformOrigin: "bottom center",
                    boxShadow:
                      "0 -4px 15px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,220,100,0.08)",
                  }}
                  animate={
                    stage === "peek"
                      ? { rotateX: [-5, -15, -5] }
                      : { rotateX: 0 }
                  }
                  transition={
                    stage === "peek"
                      ? {
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }
                      : {}
                  }
                >
                  {/* Lid gold trim */}
                  <div
                    className="absolute bottom-0 left-2 right-2 h-px"
                    style={{
                      background:
                        "linear-gradient(to right, transparent, rgba(255,220,100,0.3), transparent)",
                    }}
                  />
                </motion.div>

                {/* Sweat drops during nervous stage */}
                {stage === "nervous" && (
                  <>
                    <motion.span
                      className="absolute -right-4 -top-2 text-lg"
                      animate={{
                        y: [0, 15, 30],
                        opacity: [0, 1, 0],
                        scale: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: 0.3,
                      }}
                    >
                      💧
                    </motion.span>
                    <motion.span
                      className="absolute -left-3 top-0 text-sm"
                      animate={{
                        y: [0, 12, 24],
                        opacity: [0, 0.8, 0],
                        scale: [0.5, 0.8, 0.4],
                      }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        delay: 0.7,
                      }}
                    >
                      💧
                    </motion.span>
                  </>
                )}

                {/* Peek hint — ring peeking out */}
                {stage === "peek" && (
                  <motion.span
                    className="absolute -top-14 left-1/2 -translate-x-1/2 text-3xl"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{
                      y: [10, 0, 10],
                      opacity: [0, 1, 0.6],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    💍
                  </motion.span>
                )}
              </div>
            </motion.div>
          )}

          {/* ═══ STAGE: open — ring shoots out (longer) ═══ */}
          {stage === "open" && (
            <motion.div
              key="opening"
              className="relative flex items-center justify-center"
              style={{ width: 280, height: 280 }}
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
            >
              {/* Ring flies up, flips, bounces, settles — longer animation */}
              <motion.div
                className="text-7xl sm:text-8xl select-none"
                initial={{ y: 40, scale: 0.3, rotate: 0, opacity: 0 }}
                animate={{
                  y: [40, -100, -70, -110, -40, -10, 0],
                  scale: [0.3, 1.5, 0.8, 1.3, 0.9, 1.1, 1],
                  rotate: [0, 360, 540, 720, 700, 720, 720],
                  opacity: [0, 1, 1, 1, 1, 1, 1],
                }}
                transition={{
                  duration: 2.2,
                  ease: "easeOut",
                  times: [0, 0.2, 0.35, 0.5, 0.7, 0.85, 1],
                }}
                style={{
                  filter:
                    "drop-shadow(0 0 20px rgba(255,215,0,0.5)) drop-shadow(0 0 40px rgba(255,200,60,0.3))",
                }}
              >
                💍
              </motion.div>

              {/* Sparkle burst on open — staggered wider */}
              {sparklePositions.map((p, i) => (
                <motion.span
                  key={i}
                  className="absolute text-sm sm:text-base"
                  style={{ left: "50%", top: "50%" }}
                  initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                  animate={{
                    x: p.x * 0.8,
                    y: p.y * 0.8,
                    opacity: [0, 1, 1, 0],
                    scale: [0, 1.3, 1, 0],
                    rotate: p.rotate,
                  }}
                  transition={{
                    duration: 1.8,
                    delay: 0.3 + i * 0.06,
                    ease: "easeOut",
                  }}
                >
                  {["✨", "⭐", "💫", "✦"][i % 4]}
                </motion.span>
              ))}

              {/* Second wave of sparkles */}
              {sparklePositions.slice(0, 8).map((p, i) => (
                <motion.span
                  key={`wave2-${i}`}
                  className="absolute text-xs"
                  style={{ left: "50%", top: "50%" }}
                  initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                  animate={{
                    x: p.x * -0.5,
                    y: p.y * -0.5,
                    opacity: [0, 0.8, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1.2,
                    delay: 1 + i * 0.08,
                    ease: "easeOut",
                  }}
                >
                  {["💛", "✨", "⭐", "💫"][i % 4]}
                </motion.span>
              ))}
            </motion.div>
          )}

          {/* ═══ STAGE: revealed — ring with full glow ═══ */}
          {stage === "revealed" && (
            <motion.div
              key="revealed"
              className="relative flex items-center justify-center"
              style={{ width: 280, height: 280 }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
            >
              {/* Outer warm gold glow */}
              <motion.div
                className="absolute w-56 h-56 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(220,180,60,0.2) 0%, rgba(220,180,60,0) 70%)",
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

              {/* Inner gold glow */}
              <motion.div
                className="absolute w-36 h-36 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,215,100,0.3) 0%, rgba(220,180,60,0.15) 40%, transparent 70%)",
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

              {/* Light rays */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`ray-${i}`}
                  className="absolute"
                  style={{
                    width: 1,
                    height: 60,
                    background:
                      "linear-gradient(to top, transparent, rgba(255,220,100,0.3), transparent)",
                    transformOrigin: "bottom center",
                    left: "50%",
                    top: "50%",
                    marginLeft: -0.5,
                    marginTop: -60,
                    rotate: `${i * 60}deg`,
                  }}
                  animate={{
                    opacity: [0, 0.6, 0],
                    scaleY: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2.5,
                    delay: i * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}

              {/* Ring emoji — final glowing state */}
              <motion.div
                className="text-7xl sm:text-8xl md:text-9xl relative z-10 select-none"
                animate={{
                  scale: [1, 1.06, 1],
                  filter: [
                    "drop-shadow(0 0 15px rgba(255,215,0,0.4)) drop-shadow(0 0 30px rgba(220,180,60,0.2))",
                    "drop-shadow(0 0 30px rgba(255,215,0,0.7)) drop-shadow(0 0 60px rgba(255,200,80,0.4))",
                    "drop-shadow(0 0 15px rgba(255,215,0,0.4)) drop-shadow(0 0 30px rgba(220,180,60,0.2))",
                  ],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                💍
              </motion.div>

              {/* Orbiting sparkle dots */}
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${50 + 42 * Math.cos((i * Math.PI * 2) / 10)}%`,
                    top: `${50 + 42 * Math.sin((i * Math.PI * 2) / 10)}%`,
                  }}
                  animate={{
                    scale: [0, 1.2, 0],
                    opacity: [0, 0.9, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    delay: i * 0.25,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{
                      background:
                        i % 2 === 0
                          ? "rgba(255,225,100,0.9)"
                          : "rgba(255,200,130,0.8)",
                      boxShadow:
                        i % 2 === 0
                          ? "0 0 6px rgba(255,225,100,0.6)"
                          : "0 0 6px rgba(255,200,130,0.5)",
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ═══ TEXT BELOW THE BOX ═══ */}
      <div className="h-10 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {stage === "nervous" && (
            <motion.p
              key={`nervous-${nervousMsg}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="text-sm text-center"
              style={{ color: "rgba(220,190,110,0.5)" }}
            >
              {nervousMessages[nervousMsg]}
            </motion.p>
          )}

          {stage === "peek" && (
            <motion.p
              key="peek-text"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [0.95, 1.05, 0.95],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-sm text-center font-medium"
              style={{ color: "rgba(255,220,100,0.6)" }}
            >
              Tap the box! 👆
            </motion.p>
          )}

          {stage === "open" && (
            <motion.p
              key="open-text"
              initial={{ opacity: 0, scale: 2 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-base text-center font-semibold"
              style={{ color: "rgba(255,220,100,0.7)" }}
            >
              TA-DA! 🎉
            </motion.p>
          )}

          {stage === "revealed" && (
            <motion.p
              key="revealed-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xs text-center"
              style={{ color: "rgba(220,190,110,0.3)" }}
            >
              ✨ For the most precious person ✨
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
