"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import FloatingSparkles from "@/components/FloatingSparkles";
import HeartParticles from "@/components/HeartParticles";
import GlowingRing from "@/components/GlowingRing";
import LetterReveal from "@/components/LetterReveal";
import TypewriterText from "@/components/TypewriterText";
import { valentineConfig } from "@/config/valentine";
import Link from "next/link";

const proposeDay = valentineConfig.days["propose-day"];
const reasons = proposeDay.reasons;
const heartQuotes = proposeDay.heartQuotes;

// Pre-computed random burst positions (outside component for purity)
const burstParticles = Array.from({ length: 24 }, (_, i) => ({
  x: Math.cos(i * 1.3 + 0.7) * 150 + Math.sin(i * 2.1) * 100,
  y: Math.sin(i * 1.7 + 0.3) * 175 - Math.cos(i * 0.9) * 80,
  rotate: (i * 137.5) % 720,
}));

export default function ProposeDayPage() {
  const { name } = valentineConfig;
  const [proposalAccepted, setProposalAccepted] = useState(false);
  const [currentReason, setCurrentReason] = useState(0);


  return (
    <main className="min-h-screen bg-gradient-to-b from-[#080600] via-[#0f0a02] to-[#080600] relative overflow-hidden">
      <FloatingSparkles count={35} />
      <HeartParticles count={6} />

      {/* Premium ambient background — warm gold nebula glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute top-0 left-0 w-full h-full opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at 20% 20%, rgba(180,140,40,0.1) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(160,120,30,0.08) 0%, transparent 50%), radial-gradient(ellipse at 50% 50%, rgba(120,90,20,0.06) 0%, transparent 60%)",
          }}
        />
        {/* Slow moving gold spotlight */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-[0.03]"
          style={{
            background:
              "radial-gradient(circle, rgba(255,215,100) 0%, transparent 60%)",
          }}
          animate={{
            x: ["-10%", "60%", "30%", "-10%"],
            y: ["10%", "40%", "70%", "10%"],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
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
            className="transition-colors text-xl flex items-center gap-2"
            style={{ color: "rgba(200,180,120)" }}
          >
            ← Back to surprises
          </Link>
        </motion.div>

        {/* Day badge — gold accent */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <span
            className="px-5 py-2 rounded-full text-[10px] tracking-[0.35em] uppercase border bg-black/30 backdrop-blur-sm"
            style={{
              borderColor: "rgba(200,170,80)",
              color: "rgba(220,190,110,0.5)",
              boxShadow: "0 0 20px rgba(180,150,60,0.06)",
            }}
          >
            February 8th — Propose Day
          </span>
        </motion.div>

        {/* Glowing Ring */}
        <div className="mb-6">
          <GlowingRing />
        </div>

        {/* Title with her name */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <p
            className="text-xl tracking-[0.5em] uppercase mb-4"
            style={{ color: "rgba(220,190,110)" }}
          >
            Will you be mine forever
          </p>
          <h1
            className="text-5xl md:text-7xl lg:text-8xl text-white"
            style={{ fontFamily: "var(--font-great-vibes)" }}
          >
            <LetterReveal text={name} delay={1.2} />
          </h1>
        </motion.div>

        {/* Decorative line with diamond */}
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
                "linear-gradient(to right, transparent, rgba(220,190,110))",
            }}
          />
          <motion.span
            className="text-xs"
            animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.1, 0.9] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            💎
          </motion.span>
          <div
            className="w-20 h-px"
            style={{
              background:
                "linear-gradient(to left, transparent, rgba(220,190,110))",
            }}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="mt-6 text-lg md:text-xl italic text-center max-w-lg"
          style={{ color: "rgba(220,190,120)" }}
        >
          &ldquo;{proposeDay.tagline}&rdquo;
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
              style={{ color: "rgba(220,190,110)" }}
            >
              scroll
            </span>
            <div
              className="w-px h-6"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(220,190,110), transparent)",
              }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* LOVE LETTER / PROPOSAL */}
      <section className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          {/* Letter container — gold glass morphism */}
          <div
            className="relative p-6 sm:p-8 md:p-14 rounded-3xl backdrop-blur-md"
            style={{
              background:
                "linear-gradient(135deg, rgba(60,45,105) 0%, rgba(20,15,5) 50%, rgba(60,45,10,0.15) 100%)",
              border: "1px solid rgba(220,190,110,0.08)",
              boxShadow:
                "0 0 60px rgba(180,150,60,0.04), inset 0 1px 0 rgba(255,235,180,0.03)",
            }}
          >
            {/* Wax seal — gold gradient */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring", bounce: 0.5 }}
              className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, rgba(200,170,60,0.9), rgba(180,140,50,0.8))",
                boxShadow:
                  "0 4px 20px rgba(180,150,50), inset 0 -2px 4px rgba(0,0,0)",
              }}
            >
              <span className="text-white text-lg">💌</span>
            </motion.div>

            <div className="mt-4">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-lg sm:text-xl mb-3"
                style={{
                  fontFamily: "var(--font-great-vibes)",
                  color: "rgba(230,210,140,0.6)",
                }}
              >
                My Dearest {name},
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="leading-[1.9] text-xl sm:text-base md:text-lg space-y-4"
                style={{ color: "rgba(240,225,180,0.55)" }}
              >
                <p>{proposeDay.message}</p>
                <p>
                  So here I am, on my knees in spirit, asking you the only
                  question that matters...
                </p>
              </motion.div>

              {/* The question — highlighted */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, type: "spring" }}
                className="mt-8 py-4 text-center"
              >
                <motion.p
                  className="text-xl sm:text-2xl md:text-3xl font-semibold"
                  style={{
                    fontFamily: "var(--font-great-vibes)",
                    color: "rgba(255,230,150,0.8)",
                    textShadow:
                      "0 0 30px rgba(220,180,60), 0 0 60px rgba(220,180,60,0.1)",
                  }}
                  animate={{
                    textShadow: [
                      "0 0 30px rgba(220,180,60), 0 0 60px rgba(220,180,60,0.1)",
                      "0 0 40px rgba(220,180,60,0.5), 0 0 80px rgba(220,180,60)",
                      "0 0 30px rgba(220,180,60), 0 0 60px rgba(220,180,60,0.1)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Will you be mine, {name}? 💍
                </motion.p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.5 }}
                className="mt-6 text-right text-xl sm:text-base"
                style={{
                  fontFamily: "var(--font-great-vibes)",
                  color: "rgba(220,190,110)",
                }}
              >
                Forever & Always Yours ❤️
              </motion.p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* REASONS I WANT YOU FOREVER */}
      <section className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-14 sm:mb-20"
        >
          <motion.span
            className="text-[10px] tracking-[0.4em] uppercase block mb-4"
            style={{ color: "rgba(220,190,1105)" }}
          >
            From my heart to yours
          </motion.span>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-semibold"
            style={{
              background:
                "linear-gradient(to right, rgba(240,210,120,0.85), rgba(255,235,170,0.7), rgba(240,210,120,0.85))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Reasons I Want You Forever
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="relative p-5 sm:p-6 rounded-2xl cursor-default group overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(60,45,10) 0%, rgba(20,15,5) 100%)",
                border: "1px solid rgba(220,190,110,0.06)",
              }}
            >
              {/* Card hover glow */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(200,170,60,0.06) 0%, transparent 70%)",
                }}
              />

              {/* Number badge */}
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-semibold mb-3 relative z-10"
                style={{
                  background: "rgba(200,170,60,0.08)",
                  border: "1px solid rgba(220,190,110,0.12)",
                  color: "rgba(220,190,110,0.5)",
                }}
              >
                {i + 1}
              </div>

              <p
                className="text-xl sm:text-base leading-relaxed relative z-10 transition-colors duration-500"
                style={{ color: "rgba(230,215,1605)" }}
              >
                {reason}
              </p>

              {/* Subtle corner sparkle */}
              <motion.span
                className="absolute top-3 right-3 text-[10px] opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                style={{ color: "rgba(220,190,110,0.6)" }}
                animate={{ rotate: [0, 180, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                ✦
              </motion.span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE PROPOSAL */}
      <section className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
        <AnimatePresence mode="wait">
          {!proposalAccepted ? (
            <motion.div
              key="proposal"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative p-6 sm:p-10 md:p-14 rounded-3xl backdrop-blur-md overflow-hidden"
              style={{
                background:
                  "linear-gradient(180deg, rgba(60,45,10) 0%, rgba(20,15,5) 50%, rgba(60,45,10,0.15) 100%)",
                border: "1px solid rgba(220,190,110,0.08)",
                boxShadow: "0 0 80px rgba(180,150,60,0.04)",
              }}
            >
              {/* Background shimmer — gold conic */}
              <motion.div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  background:
                    "conic-gradient(from 0deg at 50% 50%, rgba(255,215,0), transparent, rgba(220,180,60), transparent, rgba(255,215,0))",
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Animated ring */}
              <motion.div
                className="text-5xl sm:text-6xl mb-4 sm:mb-6 relative z-10"
                animate={{
                  scale: [1, 1.12, 1],
                  filter: [
                    "drop-shadow(0 0 10px rgba(255,215,0))",
                    "drop-shadow(0 0 25px rgba(255,215,0,0.5)) drop-shadow(0 0 50px rgba(255,200,60))",
                    "drop-shadow(0 0 10px rgba(255,215,0))",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                💍
              </motion.div>

              {/* Reason cycler */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-4 relative z-10"
                style={{ color: "rgba(220,190,110)" }}
              >
                Tap to see why I love you
              </motion.p>

              <motion.div
                className="min-h-[70px] flex items-center justify-center mb-6 sm:mb-8 relative z-10"
                key={currentReason}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p
                  className="text-base sm:text-lg italic max-w-md"
                  style={{
                    fontFamily: "var(--font-great-vibes)",
                    color: "rgba(240,220,150,0.6)",
                  }}
                >
                  &ldquo;{reasons[currentReason]}&rdquo;
                </p>
              </motion.div>

              <motion.button
                onClick={() =>
                  setCurrentReason((prev) => (prev + 1) % reasons.length)
                }
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 rounded-full text-xl sm:text-xl mb-10 sm:mb-12 cursor-pointer transition-colors relative z-10"
                style={{
                  border: "1px solid rgba(220,190,110,0.12)",
                  background: "rgba(180,150,50,0.06)",
                  color: "rgba(220,190,1105)",
                }}
              >
                Next reason →
              </motion.button>

              {/* Divider */}
              <div className="flex items-center justify-center gap-4 mb-10 sm:mb-12 relative z-10">
                <div
                  className="flex-1 h-px max-w-[80px]"
                  style={{
                    background:
                      "linear-gradient(to right, transparent, rgba(220,190,110,0.15))",
                  }}
                />
                <motion.span
                  className="text-xs"
                  animate={{ opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  💛
                </motion.span>
                <div
                  className="flex-1 h-px max-w-[80px]"
                  style={{
                    background:
                      "linear-gradient(to left, transparent, rgba(220,190,110,0.15))",
                  }}
                />
              </div>

              {/* The big question */}
              <motion.h3
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
                className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8 sm:mb-10 relative z-10"
                style={{ color: "rgba(250,235,190,0.8)" }}
              >
                So...{" "}
                <span
                  style={{
                    fontFamily: "var(--font-great-vibes)",
                    background:
                      "linear-gradient(to right, rgba(255,220,100,0.95), rgba(255,240,180,0.8))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {name}
                </span>
                , will you be mine?
              </motion.h3>

              {/* Premium YES button — gold metallic */}
              <motion.button
                onClick={() => setProposalAccepted(true)}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-10 sm:px-14 py-3.5 sm:py-4 rounded-full text-white font-semibold text-base sm:text-lg tracking-wide cursor-pointer z-10 overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(180,150,40,0.9) 0%, rgba(220,180,60,0.85) 40%, rgba(200,160,50,0.8) 100%)",
                  boxShadow:
                    "0 0 30px rgba(200,170,505), 0 0 60px rgba(200,170,50,0.08), inset 0 1px 0 rgba(255,255,255)",
                }}
              >
                {/* Button shimmer */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)",
                  }}
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                />
                <span className="relative z-10">
                  Yes, I&apos;m yours forever! 💍
                </span>
              </motion.button>
            </motion.div>
          ) : (
            /* ACCEPTED STATE */
            <motion.div
              key="accepted"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              className="relative p-6 sm:p-10 md:p-14 rounded-3xl backdrop-blur-md overflow-hidden"
              style={{
                background:
                  "linear-gradient(180deg, rgba(60,45,10) 0%, rgba(30,22,8) 50%, rgba(60,45,10) 100%)",
                border: "1px solid rgba(220,190,110,0.12)",
                boxShadow: "0 0 80px rgba(200,170,50,0.08)",
              }}
            >
              {/* Celebration burst */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {burstParticles.map((p, i) => (
                  <motion.div
                    key={i}
                    className="absolute left-1/2 top-1/2 text-base sm:text-xl"
                    initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
                    animate={{
                      x: p.x,
                      y: p.y,
                      opacity: [1, 1, 0],
                      scale: [0, 1.5, 0.3],
                      rotate: p.rotate,
                    }}
                    transition={{
                      duration: 3,
                      delay: i * 0.05,
                      ease: "easeOut",
                    }}
                  >
                    {
                      [
                        "💍",
                        "✨",
                        "💛",
                        "💎",
                        "⭐",
                        "🥰",
                        "💖",
                        "🌟",
                        "✦",
                        "💫",
                        "♡",
                        "🤍",
                      ][i % 12]
                    }
                  </motion.div>
                ))}
              </div>

              {/* Ring pulse */}
              <motion.div
                className="text-5xl sm:text-7xl mb-4 sm:mb-6 relative z-10"
                animate={{
                  scale: [1, 1.15, 1],
                  filter: [
                    "drop-shadow(0 0 15px rgba(255,215,0))",
                    "drop-shadow(0 0 40px rgba(255,215,0,0.6)) drop-shadow(0 0 80px rgba(255,200,60))",
                    "drop-shadow(0 0 15px rgba(255,215,0))",
                  ],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                💍
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 relative z-10"
                style={{
                  fontFamily: "var(--font-great-vibes)",
                  background:
                    "linear-gradient(to right, rgba(255,230,130,0.95), rgba(255,245,200,0.85), rgba(255,220,100,0.9))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "none",
                }}
              >
                She said Yes!
              </motion.h3>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="relative z-10"
              >
                <TypewriterText
                  text={`${name}, you just made this the most beautiful day of my life. From this moment on, my heart is officially and completely yours — no take-backs!`}
                  className="text-xl sm:text-base leading-relaxed"
                  delay={0.5}
                  speed={30}
                />
              </motion.div>

              {/* Screenshot prompt — gold card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 4 }}
                className="mt-8 sm:mt-10 p-5 sm:p-7 rounded-2xl relative z-10"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(180,150,40,0.1) 0%, rgba(60,45,10,0.12) 100%)",
                  border: "1px solid rgba(220,190,110,0.1)",
                }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-2xl sm:text-3xl mb-3"
                >
                  📸
                </motion.div>
                <p
                  className="font-semibold text-base sm:text-lg mb-1.5"
                  style={{ color: "rgba(240,220,150,0.75)" }}
                >
                  Screenshot this moment!
                </p>
                <p
                  className="text-xs sm:text-xl leading-relaxed"
                  style={{ color: "rgba(220,190,110)" }}
                >
                  Send it to me — I want to keep this &ldquo;yes&rdquo; forever
                  💍
                  <br />
                  <span
                    className="italic"
                    style={{ color: "rgba(220,190,110,0.5)" }}
                  >
                    This is our moment...
                  </span>
                </p>
              </motion.div>

              {/* Floating celebration row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 5 }}
                className="mt-6 flex justify-center gap-3 sm:gap-4 relative z-10"
              >
                {["💍", "💎", "💍", "💎", "💍"].map((emoji, i) => (
                  <motion.span
                    key={i}
                    className="text-xl sm:text-2xl"
                    animate={{
                      y: [0, -8, 0],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.25,
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

      {/* WHAT MY HEART SAYS */}
      <section className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-14 sm:mb-20"
        >
          <motion.span
            className="text-[10px] tracking-[0.4em] uppercase block mb-4"
            style={{ color: "rgba(220,190,110)" }}
          >
            Whispers of the heart
          </motion.span>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-semibold"
            style={{
              background:
                "linear-gradient(to right, rgba(240,210,120,0.85), rgba(255,235,170,0.7), rgba(240,210,120,0.85))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            What My Heart Says
          </h2>
        </motion.div>

        <div className="space-y-6 sm:space-y-8">
          {heartQuotes.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="flex items-start gap-3 sm:gap-4 group"
            >
              <motion.span
                className="text-2xl sm:text-3xl flex-shrink-0 mt-0.5"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{
                  duration: 2.5,
                  delay: i * 0.4,
                  repeat: Infinity,
                }}
              >
                {item.emoji}
              </motion.span>
              <p
                className="text-xl sm:text-lg italic leading-relaxed pl-3 sm:pl-4 transition-all duration-700"
                style={{
                  borderLeft: "1px solid rgba(220,190,110,0.1)",
                  color: "rgba(230,215,150)",
                }}
              >
                &ldquo;{item.text}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>
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
            style={{ color: "rgba(220,190,110)" }}
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
                "rgba(200,150,60,0.12)",
                "rgba(255,255,255,0.04)",
              ],
              boxShadow: [
                "0 0 0 rgba(200,150,60,0)",
                "0 0 30px rgba(200,150,60,0.04)",
                "0 0 0 rgba(200,150,60,0)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <span className="text-4xl">🍫</span>
            <p
              className="mt-3 text-xl"
              style={{ color: "rgba(220,190,1105)" }}
            >
              Chocolate Day — Coming Feb 9
            </p>
            <p
              className="text-[10px] mt-1"
              style={{ color: "rgba(220,190,110,0.15)" }}
            >
              Something sweet awaits...
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Back to home */}
      <div className="relative z-10 text-center pb-12 sm:pb-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xl transition-all duration-300"
          style={{
            border: "1px solid rgba(220,190,110,0.1)",
            background: "rgba(180,150,50,0.04)",
            color: "rgba(220,190,110)",
          }}
        >
          ← Back to Valentine&apos;s Week
        </Link>
      </div>

      {/* Footer */}
      <footer
        className="relative z-10 text-center py-10"
        style={{ borderTop: "1px solid rgba(220,190,110,0.04)" }}
      >
        <p className="text-xs" style={{ color: "rgba(220,190,110,0.15)" }}>
          You are my forever &ldquo;yes&rdquo;{" "}
          <span className="heartbeat inline-block">💍</span>
        </p>
      </footer>
    </main>
  );
}