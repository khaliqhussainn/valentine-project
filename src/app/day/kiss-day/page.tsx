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

const kissDay = valentineConfig.days["kiss-day"];
const { name } = valentineConfig;

// Floating kiss particles
const KissParticles = () => {
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
            y: [0, -40, 0],
            x: [0, Math.sin(i) * 25, 0],
            rotate: [0, 360],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 13 + Math.random() * 5,
            delay: i * 0.7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {["💋", "💕", "💖", "✨"][i % 4]}
        </motion.div>
      ))}
    </div>
  );
};

// Virtual kiss animation with kiss counter
const VirtualKiss = () => {
  const [isKissing, setIsKissing] = useState(false);
  const [kissCount, setKissCount] = useState(0);
  const [loveLevel, setLoveLevel] = useState(0);

  const handleKiss = () => {
    setIsKissing(true);
    setKissCount((prev) => prev + 1);
    setLoveLevel((prev) => Math.min(prev + 15, 100));

    setTimeout(() => setIsKissing(false), 2500);
  };

  return (
    <div className="relative flex flex-col items-center gap-6">
      {/* Kissing animation */}
      <motion.div
        className="relative cursor-pointer"
        onClick={handleKiss}
        onTouchStart={(e) => {
          e.preventDefault();
          handleKiss();
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Romantic glow during kiss */}
        <AnimatePresence>
          {isKissing && (
            <>
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(236,72,153,0.5) 0%, transparent 70%)",
                  filter: "blur(50px)",
                }}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 3, opacity: 1 }}
                exit={{ scale: 3.5, opacity: 0 }}
                transition={{ duration: 2.5 }}
              />

              {/* Sparkle ring */}
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 2, opacity: 1, rotate: 360 }}
                exit={{ scale: 2.5, opacity: 0 }}
                transition={{ duration: 2 }}
              >
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-xl"
                    style={{
                      left: `${50 + 40 * Math.cos((i * Math.PI * 2) / 12)}%`,
                      top: `${50 + 40 * Math.sin((i * Math.PI * 2) / 12)}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, delay: i * 0.1 }}
                  >
                    ✨
                  </motion.div>
                ))}
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Two faces kissing */}
        <div className="relative flex items-center justify-center">
          {/* Left face */}
          <motion.div
            className="text-6xl relative z-10"
            animate={
              isKissing
                ? {
                    x: [0, 20, 20],
                    rotate: [0, -15, -15],
                  }
                : {
                    x: 0,
                    rotate: 0,
                  }
            }
            transition={{ duration: isKissing ? 0.8 : 0.3 }}
            style={{
              filter: isKissing
                ? "drop-shadow(0 0 35px rgba(236,72,153,0.7))"
                : "drop-shadow(0 0 20px rgba(236,72,153,0.4))",
            }}
          >
            😘
          </motion.div>

          {/* Kiss mark when kissing */}
          <AnimatePresence>
            {isKissing && (
              <motion.div
                className="absolute text-5xl z-20"
                initial={{ scale: 0, opacity: 0, rotate: -45 }}
                animate={{
                  scale: [0, 1.5, 1.2],
                  opacity: 1,
                  rotate: [-45, 0, 0],
                }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                💋
              </motion.div>
            )}
          </AnimatePresence>

          {/* Right face */}
          <motion.div
            className="text-6xl relative z-10"
            animate={
              isKissing
                ? {
                    x: [0, -20, -20],
                    rotate: [0, 15, 15],
                  }
                : {
                    x: 0,
                    rotate: 0,
                  }
            }
            transition={{ duration: isKissing ? 0.8 : 0.3 }}
            style={{
              filter: isKissing
                ? "drop-shadow(0 0 35px rgba(236,72,153,0.7))"
                : "drop-shadow(0 0 20px rgba(236,72,153,0.4))",
            }}
          >
            😚
          </motion.div>
        </div>

        {/* Hearts explosion on kiss */}
        <AnimatePresence>
          {isKissing && (
            <>
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-2xl"
                  style={{
                    left: "50%",
                    top: "50%",
                  }}
                  initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
                  animate={{
                    x: Math.cos((i * Math.PI * 2) / 20) * 140,
                    y: Math.sin((i * Math.PI * 2) / 20) * 140,
                    opacity: 0,
                    scale: [0, 1.4, 0.7],
                    rotate: Math.random() * 360,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                >
                  {["💋", "💕", "💖", "💗", "💝"][i % 5]}
                </motion.div>
              ))}
            </>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Love level meter */}
      <div className="w-full max-w-md">
        <div className="flex items-center justify-between mb-2">
          <p
            className="text-sm font-medium"
            style={{ color: "rgba(251,207,232,0.8)" }}
          >
            Love Intensity
          </p>
          <p
            className="text-sm font-bold"
            style={{ color: "rgba(251,207,232,0.9)" }}
          >
            {loveLevel}%
          </p>
        </div>
        <div
          className="h-3 rounded-full overflow-hidden"
          style={{
            background: "rgba(219,39,119,0.2)",
            border: "1px solid rgba(251,207,232,0.2)",
          }}
        >
          <motion.div
            className="h-full rounded-full relative overflow-hidden"
            style={{
              background:
                "linear-gradient(to right, rgba(236,72,153,0.8), rgba(251,207,232,0.9))",
              boxShadow: "0 0 15px rgba(236,72,153,0.5)",
            }}
            initial={{ width: 0 }}
            animate={{ width: `${loveLevel}%` }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
              }}
              animate={{ x: ["-100%", "200%"] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 0.5,
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Kiss prompt */}
      <motion.p
        className="text-base sm:text-lg font-medium text-center"
        style={{ color: "rgba(251,207,232,0.8)" }}
        animate={{
          opacity: isKissing ? 0 : [0.6, 1, 0.6],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {kissCount === 0
          ? "Click for a sweet virtual kiss! 😘"
          : kissCount < 5
            ? `${kissCount} kiss${kissCount > 1 ? "es" : ""}! Keep the romance alive! 💕`
            : kissCount < 10
              ? `${kissCount} kisses! You're making my heart flutter! 💖`
              : kissCount < 20
                ? `${kissCount} kisses! I'm falling for you all over again! 💗`
                : `${kissCount} kisses! You're absolutely irresistible! 💋✨`}
      </motion.p>
    </div>
  );
};

export default function KissDayPage() {
  const [showKissExplosion, setShowKissExplosion] = useState(false);
  const [explosionKisses, setExplosionKisses] = useState<
    Array<{ id: number; x: number; y: number; emoji: string }>
  >([]);
  const [openLetters, setOpenLetters] = useState<Set<number>>(new Set());
  const [openBottles, setOpenBottles] = useState<Set<number>>(new Set());
  const [isLockOpen, setIsLockOpen] = useState(false);

  const handleKissExplosion = () => {
    setShowKissExplosion(true);

    // Create random kisses across the screen
    const newKisses = Array.from({ length: 50 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      emoji: ["💋", "😘", "😚", "💕", "💖", "💗", "💝", "✨", "❤️", "🥰"][
        Math.floor(Math.random() * 10)
      ],
    }));

    setExplosionKisses(newKisses);

    // Clear after animation
    setTimeout(() => {
      setShowKissExplosion(false);
      setExplosionKisses([]);
    }, 3000);
  };

  const toggleLetter = (index: number) => {
    const newOpenLetters = new Set(openLetters);
    if (newOpenLetters.has(index)) {
      newOpenLetters.delete(index);
    } else {
      newOpenLetters.add(index);
    }
    setOpenLetters(newOpenLetters);
  };

  const toggleBottle = (index: number) => {
    const newOpenBottles = new Set(openBottles);
    if (newOpenBottles.has(index)) {
      newOpenBottles.delete(index);
    } else {
      newOpenBottles.add(index);
    }
    setOpenBottles(newOpenBottles);
  };

  const loveLetters = [
    {
      color: "rgba(236,72,153,0.9)",
      message:
        "Every time I think of kissing you, my heart does a little dance. It's like my soul is practicing for the moment our lips finally meet. I wonder if you can hear it singing your name across the distance.",
      from: "Your Future First Kiss",
    },
    {
      color: "rgba(219,39,119,0.9)",
      message:
        "Sometimes I trace my fingers across my lips and imagine they're yours. I wonder what you taste like - probably like home, like forever, like everything I've ever wanted wrapped in one perfect moment.",
      from: "Dreaming of You",
    },
    {
      color: "rgba(190,24,93,0.9)",
      message:
        "I've kissed you a thousand times in my dreams. In the rain, under stars, in quiet mornings. Each dream kiss makes me crave the real thing more. You're my sweetest addiction I haven't even tasted yet.",
      from: "Lost in Daydreams",
    },
    {
      color: "rgba(236,72,153,0.9)",
      message:
        "They say the first kiss tells you everything. When ours happens, it will tell the story of every text, every call, every moment we've waited. Our kiss will be worth every second of longing.",
      from: "Worth the Wait",
    },
  ];

  const kissBottles = [
    {
      message:
        "I want to kiss you in the middle of a crowded street and make the whole world disappear.",
      emoji: "🌃",
    },
    {
      message: "Your Lips Are My Favorite Place To Be, Even If It's Just In My Imagination.",
      emoji: "😇",
    },
    {
      message:
        "I'll eat your lips and bite them hardly, leaving a trail of love marks that only I can see.",
      emoji: "🎉",
    },
    {
      message:
        "waiting for the when we're together, no distance no one, only you and me together always",
      emoji: "⛈️",
    },
    {
      message: "I want to get lost in your arms and never find my way back.",
      emoji: "🧭",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1a0010] via-[#2d0a1a] to-[#1a0010] relative overflow-hidden">
      <MouseFollowHearts />
      <KissParticles />
      <HeartParticles count={10} />

      {/* Kiss Explosion Effect */}
      <AnimatePresence>
        {showKissExplosion && (
          <div className="fixed inset-0 pointer-events-none z-50">
            {explosionKisses.map((kiss) => (
              <motion.div
                key={kiss.id}
                className="absolute text-3xl sm:text-4xl"
                style={{
                  left: kiss.x,
                  top: kiss.y,
                }}
                initial={{ scale: 0, opacity: 0, rotate: 0 }}
                animate={{
                  scale: [0, 1.5, 1],
                  opacity: [0, 1, 0],
                  rotate: [0, 360],
                  y: [0, -100, -200],
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2.5, ease: "easeOut" }}
              >
                {kiss.emoji}
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Ambient pink/magenta glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(236,72,153,0.6) 0%, transparent 70%)",
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
              "radial-gradient(circle, rgba(219,39,119,0.6) 0%, transparent 70%)",
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
            style={{ color: "rgba(251,207,232,0.5)" }}
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
              borderColor: "rgba(236,72,153,0.2)",
              color: "rgba(251,207,232,0.6)",
              boxShadow: "0 0 20px rgba(236,72,153,0.08)",
            }}
          >
            February 13th — Kiss Day
          </span>
        </motion.div>

        {/* Virtual Kiss Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
          className="mb-6"
        >
          <VirtualKiss />
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
            style={{ color: "rgba(251,207,232,0.8)" }}
          >
            A thousand kisses for
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
                "linear-gradient(to right, transparent, rgba(251,207,232,0.3))",
            }}
          />
          <motion.span
            className="text-lg"
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            💋
          </motion.span>
          <div
            className="w-20 h-px"
            style={{
              background:
                "linear-gradient(to left, transparent, rgba(251,207,232,0.3))",
            }}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="mt-6 text-xl md:text-2xl italic text-center max-w-lg font-medium"
          style={{ color: "rgba(251,207,232,0.8)" }}
        >
          &ldquo;{kissDay.tagline}&rdquo;
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
              style={{ color: "rgba(251,207,232,0.4)" }}
            >
              scroll
            </span>
            <div
              className="w-px h-6"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(251,207,232,0.3), transparent)",
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
                "linear-gradient(135deg, rgba(60,10,40,0.3) 0%, rgba(30,5,20,0.4) 50%, rgba(60,10,40,0.2) 100%)",
              border: "1px solid rgba(251,207,232,0.1)",
              boxShadow:
                "0 0 60px rgba(236,72,153,0.06), inset 0 1px 0 rgba(251,207,232,0.03)",
            }}
          >
            {/* Kiss seal */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring", bounce: 0.5 }}
              className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, rgba(236,72,153,0.9), rgba(219,39,119,0.8))",
                boxShadow:
                  "0 4px 20px rgba(236,72,153,0.3), inset 0 -2px 4px rgba(0,0,0,0.2)",
              }}
            >
              <span className="text-white text-lg">💋</span>
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
                  color: "rgba(252,231,243,0.9)",
                }}
              >
                My Little {name},
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="leading-[1.9] text-base sm:text-lg md:text-xl space-y-4"
                style={{ color: "rgba(251,207,232,0.85)" }}
              >
                <p>{kissDay.message}</p>
                <p>
                  If I could, I would kiss away every worry, every doubt, every
                  fear. My kisses would tell you stories of forever, paint
                  dreams on your skin, and whisper promises only our hearts
                  understand. Until I can kiss you for real, imagine these words
                  as soft kisses on your soul.
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
                  color: "rgba(251,207,232,0.8)",
                }}
              >
                With All My Kisses ❤️
              </motion.p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECRET LOVE LETTERS - Click to Open */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <motion.span
            className="text-[10px] tracking-[0.4em] uppercase block mb-4"
            style={{ color: "rgba(251,207,232,0.4)" }}
          >
            Click each envelope to reveal
          </motion.span>
         
          <p className="text-base" style={{ color: "rgba(251,207,232,0.7)" }}>
            Four sealed letters, each with a kiss just for you 💋
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-26 sm:gap-18">
          {loveLetters.map((letter, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative"
            >
              <AnimatePresence mode="wait">
                {!openLetters.has(i) ? (
                  // Closed Envelope
                  <motion.div
                    key="closed"
                    initial={{ rotateY: 0 }}
                    exit={{ rotateY: 90 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => toggleLetter(i)}
                    className="relative cursor-pointer group"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div
                      className="relative p-12 sm:p-16 rounded-2xl backdrop-blur-sm"
                      style={{
                        background: `linear-gradient(135deg, ${letter.color}20 0%, ${letter.color}10 100%)`,
                        border: `1px solid ${letter.color}40`,
                        boxShadow: `0 8px 32px ${letter.color}15`,
                      }}
                    >
                      {/* Envelope flap */}
                      <motion.div
                        className="absolute top-0 left-0 right-0 h-20"
                        style={{
                          background: `linear-gradient(135deg, ${letter.color}30, ${letter.color}20)`,
                          clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                          borderBottom: `1px solid ${letter.color}30`,
                        }}
                        animate={{ y: [0, -3, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />

                      {/* Heart seal */}
                      <motion.div
                        className="absolute top-16 left-1/2 -translate-x-1/2 text-4xl"
                        style={{
                          filter: `drop-shadow(0 0 10px ${letter.color}80)`,
                        }}
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, -5, 5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      >
                        💋
                      </motion.div>

                      <div className="text-center pt-12">
                        <p
                          className="text-sm uppercase tracking-[0.3em] opacity-60"
                          style={{ color: "rgba(251,207,232,0.8)" }}
                        >
                          Tap to open
                        </p>
                        <motion.div
                          className="mt-2 text-xs"
                          style={{ color: "rgba(251,207,232,0.5)" }}
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          Letter {i + 1}
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  // Opened Letter
                  <motion.div
                    key="open"
                    initial={{ rotateY: -90 }}
                    animate={{ rotateY: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    <motion.div
                      className="relative p-8 sm:p-10 rounded-2xl backdrop-blur-sm"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(60,10,40,0.4) 0%, rgba(30,5,20,0.5) 100%)",
                        border: "1px solid rgba(251,207,232,0.15)",
                        boxShadow: "0 8px 40px rgba(236,72,153,0.1)",
                      }}
                    >
                      {/* Close button */}
                      <button
                        onClick={() => toggleLetter(i)}
                        className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all"
                        style={{
                          background: "rgba(236,72,153,0.2)",
                          border: "1px solid rgba(251,207,232,0.2)",
                        }}
                      >
                        <span style={{ color: "rgba(251,207,232,0.8)" }}>
                          ✕
                        </span>
                      </button>

                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-base sm:text-lg leading-relaxed mb-6"
                        style={{
                          color: "rgba(251,207,232,0.85)",
                          fontFamily: "var(--font-great-vibes)",
                        }}
                      >
                        &ldquo;{letter.message}&rdquo;
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="flex items-center justify-between"
                      >
                        <p
                          className="text-sm italic"
                          style={{ color: "rgba(251,207,232,0.6)" }}
                        >
                          — {letter.from}
                        </p>
                        <span className="text-xl">💌</span>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MESSAGE IN A BOTTLE */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
       

        <div className="flex flex-wrap justify-center gap-16 sm:gap-25">
          {kissBottles.map((bottle, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <motion.div
                onClick={() => toggleBottle(i)}
                className="relative cursor-pointer"
                whileHover={{ y: -10, rotate: [0, -5, 5, 0] }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Bottle */}
                <div
                  className="relative w-24 h-32 rounded-t-lg rounded-b-2xl flex items-center justify-center"
                  style={{
                    background: openBottles.has(i)
                      ? "linear-gradient(180deg, rgba(236,72,153,0.15) 0%, rgba(219,39,119,0.2) 100%)"
                      : "linear-gradient(180deg, rgba(236,72,153,0.25) 0%, rgba(219,39,119,0.35) 100%)",
                    border: "2px solid rgba(251,207,232,0.2)",
                    boxShadow:
                      "0 4px 20px rgba(236,72,153,0.2), inset 0 2px 10px rgba(255,255,255,0.1)",
                  }}
                >
                  {/* Cork */}
                  <motion.div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-6 rounded-t-md"
                    style={{
                      background: openBottles.has(i)
                        ? "transparent"
                        : "linear-gradient(180deg, rgba(139,69,19,0.8), rgba(101,67,33,0.9))",
                      border: openBottles.has(i)
                        ? "none"
                        : "1px solid rgba(101,67,33,0.5)",
                    }}
                    animate={
                      openBottles.has(i)
                        ? { y: -30, opacity: 0 }
                        : { y: 0, opacity: 1 }
                    }
                  />

                  <span className="text-3xl">{bottle.emoji}</span>
                </div>

                {/* Message popup */}
                <AnimatePresence>
                  {openBottles.has(i) && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: 10 }}
                      className="absolute -top-2 left-1/2 -translate-x-1/2 w-64 p-4 rounded-2xl z-20"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(60,10,40,0.95) 0%, rgba(30,5,20,0.95) 100%)",
                        border: "1px solid rgba(251,207,232,0.3)",
                        boxShadow: "0 8px 32px rgba(236,72,153,0.3)",
                      }}
                    >
                      <p
                        className="text-sm leading-relaxed text-center"
                        style={{
                          color: "rgba(251,207,232,0.9)",
                          fontFamily: "fangsong",
                        }}
                      >
                        {bottle.message}
                      </p>
                      {/* Arrow */}
                      <div
                        className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45"
                        style={{
                          background: "rgba(30,5,20,0.95)",
                          border: "1px solid rgba(251,207,232,0.3)",
                          borderTop: "none",
                          borderLeft: "none",
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HEART LOCK - Unlock for Surprise */}
      <section className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-8 sm:p-12 rounded-3xl backdrop-blur-md text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(60,10,40,0.3) 0%, rgba(30,5,20,0.4) 100%)",
            border: "1px solid rgba(251,207,232,0.15)",
            boxShadow: "0 0 60px rgba(236,72,153,0.1)",
          }}
        >
          <h3
            className="text-2xl sm:text-3xl font-semibold mb-8"
            style={{ color: "rgba(252,231,243,0.95)" }}
          >
            Unlock My Heart
          </h3>

          <motion.div
            onClick={() => setIsLockOpen(!isLockOpen)}
            className="relative inline-block cursor-pointer mb-8"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="text-8xl"
              animate={isLockOpen ? { rotate: [0, -10, 10, -10, 0] } : {}}
              transition={{ duration: 0.5 }}
            >
              {isLockOpen ? "🔓" : "🔒"}
            </motion.div>

            {!isLockOpen && (
              <motion.p
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm"
                style={{ color: "rgba(251,207,232,0.6)" }}
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Click to unlock
              </motion.p>
            )}
          </motion.div>

          <AnimatePresence>
            {isLockOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <motion.div
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  className="space-y-4"
                >
                  <p
                    className="text-lg sm:text-xl leading-relaxed"
                    style={{
                      color: "rgba(251,207,232,0.9)",
                      fontFamily: "fantasy",
                    }}
                  >
                    &ldquo;What are you looking at my love? It’s just you
                    here my Maryam, smiling, happy, safe, and glowing. My
                    beautiful, prettiest wifey… I love you more than words can
                    say. I hope you can feel the depth of my love. You haven’t
                    just unlocked my heart—you’ve unlocked my soul, my dreams,
                    my everything… my forever 💖&rdquo;
                  </p>

                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                    className="flex justify-center gap-2 text-3xl"
                  >
                    💕💖💗💝💘
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* KISS EXPLOSION BUTTON SECTION */}
      <section className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative p-8 sm:p-12 rounded-3xl backdrop-blur-md overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(60,10,40,0.3) 0%, rgba(30,5,20,0.4) 50%, rgba(60,10,40,0.25) 100%)",
            border: "1px solid rgba(251,207,232,0.15)",
            boxShadow: "0 0 80px rgba(236,72,153,0.08)",
          }}
        >
          <motion.div
            className="text-6xl sm:text-7xl mb-6"
            animate={{
              scale: [1, 1.15, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            💋
          </motion.div>

          <h3
            className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4"
            style={{ color: "rgba(252,231,243,0.95)" }}
          >
            Shower {name} With Kisses
          </h3>

          <p
            className="text-base sm:text-lg mb-8 leading-relaxed"
            style={{ color: "rgba(251,207,232,0.8)" }}
          >
            Ready for magic? Click below to fill the entire screen with flying
            kisses! 💕
          </p>

          {/* The Kiss Explosion Button */}
          <motion.button
            onClick={handleKissExplosion}
            className="relative px-8 py-4 rounded-full text-lg font-semibold overflow-hidden group"
            style={{
              background:
                "linear-gradient(135deg, rgba(236,72,153,0.9), rgba(219,39,119,0.8))",
              border: "2px solid rgba(251,207,232,0.3)",
              color: "rgba(255,255,255,0.95)",
              boxShadow: "0 8px 32px rgba(236,72,153,0.3)",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={showKissExplosion}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            />
            <span className="relative z-10 flex items-center gap-3 justify-center">
              {showKissExplosion ? (
                <>Sending Kisses... 💋✨</>
              ) : (
                <>Send Kiss Shower 💋💕</>
              )}
            </span>
          </motion.button>
        </motion.div>
      </section>

      {/* SENDING VIRTUAL KISSES */}
      <section className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative p-6 sm:p-10 md:p-14 rounded-3xl backdrop-blur-md overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(60,10,40,0.25) 0%, rgba(30,5,20,0.4) 50%, rgba(60,10,40,0.2) 100%)",
            border: "1px solid rgba(251,207,232,0.1)",
            boxShadow: "0 0 80px rgba(236,72,153,0.06)",
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
            💋
          </motion.div>

          <h3
            className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4"
            style={{ color: "rgba(252,231,243,0.95)" }}
          >
            Sealed With A Kiss
          </h3>

          <div
            className="text-base sm:text-lg leading-relaxed mb-8"
            style={{ color: "rgba(251,207,232,0.8)" }}
          >
            <TypewriterText
              text={`${name}, imagine my lips gently brushing against yours. Feel the current, the moment, the pure love. Every virtual kiss I send carries a piece of my soul. Until the day I can kiss you for real, may these words kiss your heart. 💋💕`}
              className=""
              delay={0.5}
              speed={25}
            />
          </div>

          {/* Kiss emojis */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 3 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            {["💋", "😘", "😚", "💕", "💖", "💗", "💝", "✨"].map(
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
            style={{ color: "rgba(251,207,232,0.3)" }}
          >
            Tomorrow is the big day...
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
                "rgba(236,72,153,0.15)",
                "rgba(255,255,255,0.04)",
              ],
              boxShadow: [
                "0 0 0 rgba(236,72,153,0)",
                "0 0 30px rgba(236,72,153,0.05)",
                "0 0 0 rgba(236,72,153,0)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <span className="text-4xl">❤️</span>
            <p
              className="mt-3 text-sm"
              style={{ color: "rgba(251,207,232,0.4)" }}
            >
              Valentine&apos;s Day — Coming Feb 14
            </p>
            <p
              className="text-[10px] mt-1"
              style={{ color: "rgba(251,207,232,0.25)" }}
            >
              The grand finale of love...
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
            border: "1px solid rgba(251,207,232,0.12)",
            background: "rgba(236,72,153,0.05)",
            color: "rgba(251,207,232,0.6)",
          }}
        >
          ← Back to Valentine&apos;s Week
        </Link>
      </div>

      {/* Footer */}
      <footer
        className="relative z-10 text-center py-10"
        style={{ borderTop: "1px solid rgba(251,207,232,0.05)" }}
      >
        <p className="text-xs" style={{ color: "rgba(251,207,232,0.25)" }}>
          Your lips are my favorite place{" "}
          <span className="heartbeat inline-block">💋</span>
        </p>
      </footer>
    </main>
  );
}
