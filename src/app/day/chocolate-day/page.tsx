/* eslint-disable react-hooks/purity */
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import HeartParticles from "@/components/HeartParticles";
import MouseFollowHearts from "@/components/Mousefollowhearts";
import LetterReveal from "@/components/LetterReveal";
import TypewriterText from "@/components/TypewriterText";
import { valentineConfig } from "@/config/valentine";
import Link from "next/link";

const chocolateDay = valentineConfig.days["chocolate-day"];
const { name } = valentineConfig;

// Floating chocolate particles
const ChocolateParticles = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {["🍫", "🤎", "🎁", "💝"][i % 4]}
        </motion.div>
      ))}
    </div>
  );
};

export default function ChocolateDayPage() {
  const [selectedChoco, setSelectedChoco] = useState<number | null>(null);
  const [hoveredMemory, setHoveredMemory] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1a0f00] via-[#2d1a0a] to-[#1a0f00] relative overflow-hidden">
      <MouseFollowHearts />
      <ChocolateParticles />
      <HeartParticles count={8} />

      {/* Warm chocolate ambient glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(139,69,19,0.5) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(210,105,30,0.5) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 z-10">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute top-24 left-6 z-30"
        >
          <Link
            href="/"
            className="text-rose-300 hover:text-rose-300/70 transition-colors text-2xl flex items-center gap-2"
            style={{ color: "white" }}
          >
            ← Back to surprises
          </Link>
        </motion.div>

        {/* Day badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <span
            className="px-5 py-2 rounded-full text-[10px] tracking-[0.35em] uppercase border bg-black/30 backdrop-blur-sm"
            style={{
              borderColor: "rgba(210,150,80,0.2)",
              color: "rgba(222,184,135,0.5)",
              boxShadow: "0 0 20px rgba(139,90,43,0.08)",
            }}
          >
            February 9th — Chocolate Day
          </span>
        </motion.div>

        {/* Animated chocolate box */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
          className="mb-6"
        >
          <motion.div
            className="relative"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(139,69,19,0.3) 0%, transparent 70%)",
                filter: "blur(20px)",
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            <span className="text-8xl md:text-9xl relative z-10 drop-shadow-[0_0_30px_rgba(139,69,19,0.6)]">
              🍫
            </span>
          </motion.div>
        </motion.div>

        {/* Title with her name */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <p
            className="text-base md:text-lg tracking-[0.5em] uppercase mb-4 font-semibold"
            style={{ color: "rgba(222,184,135,0.8)" }}
          >
            Sweet moments for
          </p>
          <h1
            className="text-5xl md:text-7xl lg:text-8xl text-white"
            style={{ fontFamily: "var(--font-great-vibes)" }}
          >
            <LetterReveal text={name} delay={1.2} />
          </h1>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 2.2, duration: 1.5 }}
          className="relative mt-6 flex items-center gap-3"
        >
          <div
            className="w-20 h-px"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(210,180,140,0.3))",
            }}
          />
          <motion.span
            className="text-lg"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            🤎
          </motion.span>
          <div
            className="w-20 h-px"
            style={{
              background:
                "linear-gradient(to left, transparent, rgba(210,180,140,0.3))",
            }}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="mt-6 text-xl md:text-2xl italic text-center max-w-lg font-medium"
          style={{ color: "rgba(210,180,140,0.8)" }}
        >
          &ldquo;{chocolateDay.tagline}&rdquo;
        </motion.p>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
          className="absolute bottom-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span
              className="text-[10px] tracking-[0.3em] uppercase"
              style={{ color: "rgba(210,180,140,0.3)" }}
            >
              scroll
            </span>
            <div
              className="w-px h-6"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(210,180,140,0.3), transparent)",
              }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* LOVE LETTER */}
      <section className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div
            className="relative p-6 sm:p-8 md:p-14 rounded-3xl backdrop-blur-md"
            style={{
              background:
                "linear-gradient(135deg, rgba(60,35,10,0.3) 0%, rgba(30,20,5,0.4) 50%, rgba(60,35,10,0.2) 100%)",
              border: "1px solid rgba(210,180,140,0.1)",
              boxShadow:
                "0 0 60px rgba(139,90,43,0.06), inset 0 1px 0 rgba(255,235,180,0.03)",
            }}
          >
            {/* Chocolate seal */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring", bounce: 0.5 }}
              className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, rgba(139,69,19,0.9), rgba(101,67,33,0.8))",
                boxShadow:
                  "0 4px 20px rgba(139,69,19,0.3), inset 0 -2px 4px rgba(0,0,0,0.2)",
              }}
            >
              <span className="text-white text-lg">🍫</span>
            </motion.div>

            <div className="mt-4">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-xl sm:text-2xl mb-3"
                style={{
                  fontFamily: "var(--font-great-vibes)",
                  color: "rgba(222,184,135,0.9)",
                }}
              >
                My Sweetest {name},
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="leading-[1.9] text-base sm:text-lg md:text-xl space-y-4"
                style={{ color: "rgba(240,225,180,0.85)" }}
              >
                <p>{chocolateDay.message}</p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 }}
                className="mt-6 text-right text-base sm:text-lg"
                style={{
                  fontFamily: "var(--font-great-vibes)",
                  color: "rgba(210,180,140,0.8)",
                }}
              >
                Forever Craving Your Sweetness ❤️
              </motion.p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CHOCOLATE TYPES & MEANINGS */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-14 sm:mb-20"
        >
          <motion.span
            className="text-[10px] tracking-[0.4em] uppercase block mb-4"
            style={{ color: "rgba(210,180,140,0.3)" }}
          >
            A box of love
          </motion.span>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-semibold"
            style={{
              background:
                "linear-gradient(to right, rgba(222,184,135,0.9), rgba(240,220,180,0.8), rgba(222,184,135,0.9))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Every Chocolate, A Love Story
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {chocolateDay.chocolateTypes?.map((choco, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.03, y: -5 }}
              onHoverStart={() => setSelectedChoco(i)}
              onHoverEnd={() => setSelectedChoco(null)}
              className="relative p-6 sm:p-7 rounded-2xl cursor-pointer group overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(60,35,10,0.25) 0%, rgba(30,20,5,0.35) 100%)",
                border: "1px solid rgba(210,180,140,0.08)",
              }}
            >
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(139,69,19,0.08) 0%, transparent 70%)",
                }}
              />

              <div className="relative z-10">
                <motion.span
                  className="text-4xl block mb-3"
                  animate={
                    selectedChoco === i
                      ? { rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }
                      : {}
                  }
                  transition={{ duration: 0.5 }}
                >
                  {choco.emoji}
                </motion.span>
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: "rgba(222,184,135,0.95)" }}
                >
                  {choco.name}
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "rgba(210,180,140,0.75)" }}
                >
                  {choco.meaning}
                </p>
              </div>

              <motion.span
                className="absolute top-3 right-3 text-[10px] opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                style={{ color: "rgba(210,180,140,0.6)" }}
                animate={{ rotate: [0, 180, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                ✦
              </motion.span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SWEET MEMORIES */}
      <section className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            className="text-3xl sm:text-4xl font-semibold mb-3"
            style={{
              background:
                "linear-gradient(to right, rgba(222,184,135,0.95), rgba(240,220,180,0.9))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Sweet Memories with You
          </h2>
          <p
            className="text-base"
            style={{ color: "rgba(210,180,140,0.7)" }}
          >
            Each one sweeter than the last
          </p>
        </motion.div>

        <div className="space-y-4">
          {chocolateDay.memories?.map((memory, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              onHoverStart={() => setHoveredMemory(i)}
              onHoverEnd={() => setHoveredMemory(null)}
              className="flex items-center gap-4 group"
            >
              <motion.div
                className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(139,69,19,0.1)",
                  border: "1px solid rgba(210,180,140,0.1)",
                }}
                animate={
                  hoveredMemory === i ? { scale: 1.1, rotate: 360 } : {}
                }
                transition={{ duration: 0.6 }}
              >
                <span className="text-xl">
                  {["🌟", "💫", "✨", "⭐"][i % 4]}
                </span>
              </motion.div>
              <p
                className="text-lg sm:text-xl flex-1 transition-colors duration-300"
                style={{
                  color:
                    hoveredMemory === i
                      ? "rgba(222,184,135,0.95)"
                      : "rgba(210,180,140,0.75)",
                }}
              >
                {memory}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE CHOCOLATE BOX */}
      <section className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative p-6 sm:p-10 md:p-14 rounded-3xl backdrop-blur-md overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(60,35,10,0.25) 0%, rgba(30,20,5,0.4) 50%, rgba(60,35,10,0.2) 100%)",
            border: "1px solid rgba(210,180,140,0.1)",
            boxShadow: "0 0 80px rgba(139,90,43,0.06)",
          }}
        >
          <motion.div
            className="text-5xl sm:text-6xl mb-6"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            🎁
          </motion.div>

          <h3
            className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4"
            style={{ color: "rgba(222,184,135,0.95)" }}
          >
            A Virtual Box of Chocolates
          </h3>

          <div className="text-base sm:text-lg leading-relaxed" style={{ color: "rgba(210,180,140,0.8)" }}>
            <TypewriterText
              text={`${name}, if I could, I'd fill your world with all your favorite sweets. Until then, accept this virtual box filled with my love! 🍫❤️`}
              className=""
              delay={0.5}
              speed={25}
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 3 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            {["🍫", "🤎", "🍬", "🍰", "🧁", "🍪", "🎂", "🍩"].map(
              (treat, i) => (
                <motion.button
                  key={i}
                  className="text-3xl sm:text-4xl cursor-pointer"
                  whileHover={{ scale: 1.3, rotate: 20 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    y: { duration: 2, delay: i * 0.2, repeat: Infinity },
                  }}
                >
                  {treat}
                </motion.button>
              ),
            )}
          </motion.div>
        </motion.div>
      </section>

      {/* TOMORROW'S TEASER */}
      <section className="relative z-10 text-center px-6 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-sm mx-auto"
        >
          <p
            className="text-[10px] tracking-[0.3em] uppercase mb-4"
            style={{ color: "rgba(210,180,140,0.3)" }}
          >
            Tomorrow brings...
          </p>
          <motion.div
            className="p-6 rounded-2xl"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.04)",
            }}
            animate={{
              borderColor: [
                "rgba(255,255,255,0.04)",
                "rgba(210,150,80,0.15)",
                "rgba(255,255,255,0.04)",
              ],
              boxShadow: [
                "0 0 0 rgba(139,69,19,0)",
                "0 0 30px rgba(139,69,19,0.05)",
                "0 0 0 rgba(139,69,19,0)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <span className="text-4xl">🧸</span>
            <p
              className="mt-3 text-sm"
              style={{ color: "rgba(210,180,140,0.3)" }}
            >
              Teddy Day — Coming Feb 10
            </p>
            <p
              className="text-[10px] mt-1"
              style={{ color: "rgba(210,180,140,0.2)" }}
            >
              A warm hug awaits...
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Back to home */}
      <div className="relative z-10 text-center pb-12 sm:pb-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm transition-all duration-300"
          style={{
            border: "1px solid rgba(210,180,140,0.12)",
            background: "rgba(139,69,19,0.05)",
            color: "rgba(210,180,140,0.5)",
          }}
        >
          ← Back to Valentine&apos;s Week
        </Link>
      </div>

      {/* Footer */}
      <footer
        className="relative z-10 text-center py-10"
        style={{ borderTop: "1px solid rgba(210,180,140,0.05)" }}
      >
        <p className="text-xs" style={{ color: "rgba(210,180,140,0.2)" }}>
          You&apos;re sweeter than any chocolate{" "}
          <span className="heartbeat inline-block">🍫</span>
        </p>
      </footer>
    </main>
  );
}