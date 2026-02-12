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

const hugDay = valentineConfig.days["hug-day"];
const { name } = valentineConfig;

// Floating embrace particles
const EmbraceParticles = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-3xl opacity-15"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -35, 0],
            x: [0, Math.sin(i) * 20, 0],
            rotate: [0, 360],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 12 + Math.random() * 4,
            delay: i * 0.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {["🤗", "💚", "🌿", "✨"][i % 4]}
        </motion.div>
      ))}
    </div>
  );
};


export default function HugDayPage() {
  const [selectedHugType, setSelectedHugType] = useState<number | null>(null);

  const hugTypes = [
    {
      emoji: "🤗",
      title: "Comfort Hug",
      description:
        "When you need reassurance and warmth, I'll hold you close and make everything feel okay.",
    },
    {
      emoji: "💪",
      title: "Support Hug",
      description:
        "When life gets tough, I'll be your strength, your cheerleader, your solid ground.",
    },
    {
      emoji: "🎉",
      title: "Celebration Hug",
      description:
        "When you achieve something amazing, I'll be the first to wrap you in pride and joy.",
    },
    {
      emoji: "😴",
      title: "Goodnight Hug",
      description:
        "Every night, imagine my arms around you, keeping you safe as you drift to sleep.",
    },
    {
      emoji: "☀️",
      title: "Good Morning Hug",
      description:
        "Starting your day wrapped in my love, ready to face the world together.",
    },
    {
      emoji: "💝",
      title: "Just Because Hug",
      description:
        "Sometimes you don't need a reason. I hug you simply because you're you.",
    },
  ];

  const hugBenefits = [
    { icon: "💚", text: "Reduces stress and anxiety instantly" },
    { icon: "😊", text: "Releases happiness hormones" },
    { icon: "🛡️", text: "Makes you feel safe and protected" },
    { icon: "❤️", text: "Strengthens our emotional bond" },
    { icon: "🌟", text: "Reminds you how special you are" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#001a0a] via-[#0a2d1a] to-[#001a0a] relative overflow-hidden">
      <MouseFollowHearts />
      <EmbraceParticles />
      <HeartParticles count={8} />

      {/* Ambient green/teal glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(34,197,94,0.5) 0%, transparent 70%)",
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
              "radial-gradient(circle, rgba(20,184,166,0.5) 0%, transparent 70%)",
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
            className="transition-colors text-sm flex items-center gap-2"
            style={{ color: "rgba(134,239,172,0.5)" }}
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
              borderColor: "rgba(34,197,94,0.2)",
              color: "rgba(134,239,172,0.6)",
              boxShadow: "0 0 20px rgba(34,197,94,0.08)",
            }}
          >
            February 12th — Hug Day
          </span>
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
            style={{ color: "rgba(134,239,172,0.8)" }}
          >
            A warm embrace for
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
                "linear-gradient(to right, transparent, rgba(134,239,172,0.3))",
            }}
          />
          <motion.span
            className="text-lg"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            💚
          </motion.span>
          <div
            className="w-20 h-px"
            style={{
              background:
                "linear-gradient(to left, transparent, rgba(134,239,172,0.3))",
            }}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="mt-6 text-xl md:text-2xl italic text-center max-w-lg font-medium"
          style={{ color: "rgba(134,239,172,0.8)" }}
        >
          &ldquo;{hugDay.tagline}&rdquo;
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
              style={{ color: "rgba(134,239,172,0.4)" }}
            >
              scroll
            </span>
            <div
              className="w-px h-6"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(134,239,172,0.3), transparent)",
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
                "linear-gradient(135deg, rgba(20,60,30,0.3) 0%, rgba(10,30,15,0.4) 50%, rgba(20,60,30,0.2) 100%)",
              border: "1px solid rgba(134,239,172,0.1)",
              boxShadow:
                "0 0 60px rgba(34,197,94,0.06), inset 0 1px 0 rgba(134,239,172,0.03)",
            }}
          >
            {/* Hug seal */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring", bounce: 0.5 }}
              className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, rgba(34,197,94,0.9), rgba(22,163,74,0.8))",
                boxShadow:
                  "0 4px 20px rgba(34,197,94,0.3), inset 0 -2px 4px rgba(0,0,0,0.2)",
              }}
            >
              <span className="text-white text-lg">🤗</span>
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
                  color: "rgba(167,243,208,0.9)",
                }}
              >
                My Dearest {name},
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="leading-[1.9] text-base sm:text-lg md:text-xl space-y-4"
                style={{ color: "rgba(187,247,208,0.85)" }}
              >
                <p>{hugDay.message}</p>
                <p>
                  Until I can wrap you in my real arms, let this virtual hug
                  remind you that you are loved, cherished, and never alone.
                  Every beat of my heart is a hug sent your way.
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 }}
                className="mt-6 text-right text-base sm:text-lg"
                style={{
                  fontFamily: "var(--font-great-vibes)",
                  color: "rgba(134,239,172,0.8)",
                }}
              >
                Forever Your Safe Place ❤️
              </motion.p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* TYPES OF HUGS */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-14 sm:mb-20"
        >
          <motion.span
            className="text-[10px] tracking-[0.4em] uppercase block mb-4"
            style={{ color: "rgba(134,239,172,0.4)" }}
          >
            Every hug tells a story
          </motion.span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-semibold"
            style={{
              background:
                "linear-gradient(to right, rgba(134,239,172,0.95), rgba(187,247,208,0.9), rgba(134,239,172,0.95))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            My Hugs For You
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {hugTypes.map((hug, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.03, y: -5 }}
              onHoverStart={() => setSelectedHugType(i)}
              onHoverEnd={() => setSelectedHugType(null)}
              className="relative p-6 sm:p-7 rounded-2xl cursor-pointer group overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(20,60,30,0.25) 0%, rgba(10,30,15,0.35) 100%)",
                border: "1px solid rgba(134,239,172,0.08)",
              }}
            >
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(34,197,94,0.08) 0%, transparent 70%)",
                }}
              />

              <div className="relative z-10">
                <motion.span
                  className="text-4xl block mb-3"
                  animate={
                    selectedHugType === i
                      ? { rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }
                      : {}
                  }
                  transition={{ duration: 0.5 }}
                >
                  {hug.emoji}
                </motion.span>
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: "rgba(167,243,208,0.95)" }}
                >
                  {hug.title}
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "rgba(134,239,172,0.75)" }}
                >
                  {hug.description}
                </p>
              </div>

              <motion.span
                className="absolute top-3 right-3 text-[10px] opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                style={{ color: "rgba(134,239,172,0.6)" }}
                animate={{ rotate: [0, 180, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                ✦
              </motion.span>
            </motion.div>
          ))}
        </div>
      </section>

   

      {/* SENDING VIRTUAL HUGS */}
      <section className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative p-6 sm:p-10 md:p-14 rounded-3xl backdrop-blur-md overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(20,60,30,0.25) 0%, rgba(10,30,15,0.4) 50%, rgba(20,60,30,0.2) 100%)",
            border: "1px solid rgba(134,239,172,0.1)",
            boxShadow: "0 0 80px rgba(34,197,94,0.06)",
          }}
        >
          <motion.div
            className="text-6xl sm:text-7xl mb-6"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            🤗
          </motion.div>

          <h3
            className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4"
            style={{ color: "rgba(167,243,208,0.95)" }}
          >
            Sending You Infinite Hugs
          </h3>

          <div
            className="text-base sm:text-lg leading-relaxed mb-8"
            style={{ color: "rgba(134,239,172,0.8)" }}
          >
            <TypewriterText
              text={`${name}, imagine my arms wrapped around you right now. Feel the warmth, the safety, the love. Distance means nothing when hearts are connected. Until we're together, carry this virtual hug with you always. 🤗💚`}
              className=""
              delay={0.5}
              speed={25}
            />
          </div>

          {/* Hugging emojis */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 3 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            {["🤗", "💚", "🫂", "💛", "🌟", "✨", "🤍", "💝"].map(
              (emoji, i) => (
                <motion.button
                  key={i}
                  className="text-4xl sm:text-5xl cursor-pointer"
                  whileHover={{ scale: 1.4, rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    y: { duration: 2.5, delay: i * 0.2, repeat: Infinity },
                  }}
                >
                  {emoji}
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
            style={{ color: "rgba(134,239,172,0.3)" }}
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
                "rgba(34,197,94,0.15)",
                "rgba(255,255,255,0.04)",
              ],
              boxShadow: [
                "0 0 0 rgba(34,197,94,0)",
                "0 0 30px rgba(34,197,94,0.05)",
                "0 0 0 rgba(34,197,94,0)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <span className="text-4xl">💋</span>
            <p
              className="mt-3 text-sm"
              style={{ color: "rgba(134,239,172,0.4)" }}
            >
              Kiss Day — Coming Feb 13
            </p>
            <p
              className="text-[10px] mt-1"
              style={{ color: "rgba(134,239,172,0.25)" }}
            >
              Sweet moments await...
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
            border: "1px solid rgba(134,239,172,0.12)",
            background: "rgba(34,197,94,0.05)",
            color: "rgba(134,239,172,0.6)",
          }}
        >
          ← Back to Valentine&apos;s Week
        </Link>
      </div>

      {/* Footer */}
      <footer
        className="relative z-10 text-center py-10"
        style={{ borderTop: "1px solid rgba(134,239,172,0.05)" }}
      >
        <p className="text-xs" style={{ color: "rgba(134,239,172,0.25)" }}>
          In your arms, I&apos;m home{" "}
          <span className="heartbeat inline-block">🤗</span>
        </p>
      </footer>
    </main>
  );
}