/* eslint-disable react-hooks/purity */
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import FloatingSparkles from "@/components/FloatingSparkles";
import HeartParticles from "@/components/HeartParticles";
import MouseFollowHearts from "@/components/Mousefollowhearts";
import LetterReveal from "@/components/LetterReveal";
import TypewriterText from "@/components/TypewriterText";
import { valentineConfig } from "@/config/valentine";
import Link from "next/link";

// Promise Overlay Component - FULL SCREEN FAST VERSION
const PromiseOverlay = ({ onClose }: { onClose: () => void }) => {
  const basePromises = [
    "Protect you 🤍",
    "Love you endlessly ❤️",
    "Cook for you 🍳",
    "Stand by you always 🤝",
    "Respect you 💛",
    "Support your dreams ✨",
    "Hold your hand forever 🤍",
    "Choose you every day 💍",
    "Make you smile 😊",
    "Be your safe place 🏡",
    "Grow old with you 👵👴",
    "Listen to you 🎧",
    "Care for you 🌸",
    "Trust you 💫",
    "Build with you 🏠",
  ];

  const promises = Array.from({ length: 60 }).map(
    (_, i) => basePromises[i % basePromises.length],
  );

  // Generate random positions across FULL SCREEN
  const getRandomPosition = (index: number) => {
    const seed = index * 2654435761;
    const random1 = ((seed % 1000) / 1000);
    const random2 = (((seed * 7) % 1000) / 1000);
    
    // Spread across entire screen (-45% to +45% from center = 90% coverage)
    return {
      x: (random1 * 90 - 45),
      y: (random2 * 90 - 45),
    };
  };

  const handleCloseWithParticles = () => {
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.6 },
      colors: ["#FFD700", "#FF8C00", "#FF69B4"],
      shapes: ["circle", "star"],
    });
    setTimeout(onClose, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      style={{
        background: "rgba(0,0,0,0.95)",
        backdropFilter: "blur(20px)",
      }}
    >
      {/* Close Button */}
      <motion.button
        onClick={handleCloseWithParticles}
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center text-lg z-[10000]"
        style={{
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,215,100,0.4)",
          color: "rgba(255,220,150,0.9)",
        }}
      >
        ✕
      </motion.button>

      {/* Center Title */}
      <motion.h2
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-5xl sm:text-6xl md:text-7xl font-bold z-10 text-center px-4 py-6"
        style={{
          fontFamily: "var(--font-great-vibes)",
          background:
            "linear-gradient(to right, rgba(255,230,130,0.95), rgba(255,245,200,0.9))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        I Promise…
      </motion.h2>

      {/* Floating Words - FULL SCREEN SPREAD */}
      {promises.map((text, i) => {
        const pos = getRandomPosition(i);
        const delay = (i * 0.05) % 2;
        const duration = 3 + (i % 3); // Vary between 3-5 seconds
        
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.9, 0.85, 0],
              scale: [0, 1.1, 1, 0.8],
              y: [0, -30, -60, -90],
            }}
            transition={{
              duration: duration,
              delay: delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute text-sm sm:text-base md:text-lg whitespace-nowrap pointer-events-auto cursor-pointer"
            style={{
              left: `calc(50% + ${pos.x}%)`,
              top: `calc(50% + ${pos.y}%)`,
              color: "rgba(255,220,150,0.85)",
              textShadow: "0 0 20px rgba(255,215,100,0.7)",
              fontFamily: "var(--font-great-vibes)",
              transform: "translate(-50%, -50%)",
            }}
            whileHover={{
              scale: 1.4,
              color: "rgba(255,240,180,1)",
              textShadow: "0 0 40px rgba(255,215,100,1)",
              transition: { duration: 0.2 }
            }}
          >
            ✨ {text}
          </motion.div>
        );
      })}
    </motion.div>
  );
};

// Reasons I Fell for You - Interactive Flip Cards Component
const ReasonsIFellForYou = () => {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const toggleCard = (index: number) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const qualities = [
    {
      front: "Your Smile 😊",
      back: "It lights up my darkest days and makes my heart skip a beat every single time",
      gradient: "linear-gradient(135deg, rgba(255,200,100,0.15), rgba(255,220,120,0.1))",
    },
    {
      front: "Your Kindness 💕",
      back: "The way you care for others shows the beautiful soul that lives within you",
      gradient: "linear-gradient(135deg, rgba(255,180,180,0.15), rgba(255,150,150,0.1))",
    },
    {
      front: "Your Strength 💪",
      back: "You inspire me with your resilience and the courage you show every day",
      gradient: "linear-gradient(135deg, rgba(180,200,255,0.15), rgba(150,180,255,0.1))",
    },
    {
      front: "Your Laughter 😂",
      back: "Your laugh is the most beautiful melody I've ever heard, and I never want it to stop",
      gradient: "linear-gradient(135deg, rgba(255,220,100,0.15), rgba(255,200,80,0.1))",
    },
    {
      front: "Your Eyes 👀",
      back: "When I look into your eyes, I see my entire future and it's absolutely beautiful",
      gradient: "linear-gradient(135deg, rgba(200,180,255,0.15), rgba(180,160,255,0.1))",
    },
    {
      front: "Your Voice 🎵",
      back: "Hearing you speak is like listening to my favorite song on repeat - I never get tired of it",
      gradient: "linear-gradient(135deg, rgba(255,200,200,0.15), rgba(255,180,180,0.1))",
    },
    {
      front: "Your Dreams ✨",
      back: "Your ambition and passion for life make me want to be a better person every day",
      gradient: "linear-gradient(135deg, rgba(200,220,255,0.15), rgba(180,200,255,0.1))",
    },
    {
      front: "Your Heart ❤️",
      back: "The love and compassion you give so freely is what makes you truly extraordinary",
      gradient: "linear-gradient(135deg, rgba(255,150,150,0.15), rgba(255,130,130,0.1))",
    },
    {
      front: "Your Everything ❤️",
      back: "I love your everything - the way you are, the way you love, the way you make me feel. I am so grateful for you",
      gradient: "linear-gradient(135deg, rgba(255,150,150,0.15), rgba(255,130,130,0.1))",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
      {qualities.map((quality, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="relative h-48 sm:h-52 cursor-pointer perspective-1000"
          onClick={() => toggleCard(i)}
        >
          <motion.div
            className="relative w-full h-full"
            animate={{ rotateY: flippedCards.has(i) ? 180 : 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Front of Card */}
            <div
              className="absolute inset-0 rounded-2xl p-6 flex flex-col items-center justify-center text-center"
              style={{
                backfaceVisibility: "hidden",
                background: quality.gradient,
                border: "1px solid rgba(220,190,110,0.2)",
                boxShadow: "0 4px 20px rgba(180,150,60,0.1)",
              }}
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                className="text-4xl sm:text-5xl mb-4"
              >
                {quality.front.split(" ")[1]}
              </motion.div>
              <h3
                className="text-xl sm:text-2xl font-semibold"
                style={{
                  color: "rgba(255,220,150,0.9)",
                  fontFamily: "var(--font-great-vibes)",
                }}
              >
                {quality.front.split(" ")[0]}
              </h3>
              <p
                className="text-xs mt-4 opacity-60"
                style={{ color: "rgba(220,190,110,0.7)" }}
              >
                Tap to reveal
              </p>
            </div>

            {/* Back of Card */}
            <div
              className="absolute inset-0 rounded-2xl p-6 flex items-center justify-center text-center"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
                background:
                  "linear-gradient(135deg, rgba(60,45,10,0.3) 0%, rgba(20,15,5,0.4) 100%)",
                border: "1px solid rgba(220,190,110,0.2)",
                boxShadow: "0 4px 20px rgba(180,150,60,0.15)",
              }}
            >
              <p
                className="text-base sm:text-lg leading-relaxed italic"
                style={{
                  color: "rgba(240,225,180,0.85)",
                  fontFamily: "fantasy",
                }}
              >
                &ldquo;{quality.back}&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Hover glow effect */}
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background: "radial-gradient(circle at center, rgba(255,215,100,0.1), transparent 70%)",
              opacity: 0,
            }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      ))}
    </div>
  );
};

// Main Page Component
export default function ProposeDayPage() {
  const { name } = valentineConfig;
  const proposeDay = valentineConfig.days["propose-day"];
  const reasons = proposeDay.reasons;
  const heartQuotes = proposeDay.heartQuotes;

  const [showPromise, setShowPromise] = useState(false);
  const [showProposal, setShowProposal] = useState(false);
  const [proposalAccepted, setProposalAccepted] = useState(false);
  const [noButtonScale, setNoButtonScale] = useState(1);

  const handleNoHover = () => {
    setNoButtonScale(0.7);
    setTimeout(() => setNoButtonScale(1), 500);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#080600] via-[#0f0a02] to-[#080600] relative overflow-hidden">
      <MouseFollowHearts />
      <FloatingSparkles count={40} />
      <HeartParticles count={10} />

      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute top-0 left-0 w-full h-full opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at 20% 20%, rgba(180,140,40,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(160,120,30,0.1) 0%, transparent 50%)",
          }}
        />
      </div>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute top-24 left-6 z-30"
        >
          <Link
            href="/"
            className="transition-colors text-sm flex items-center gap-2"
            style={{ color: "rgba(200,180,120,0.5)" }}
          >
            ← Back to surprises
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <span
            className="px-5 py-2 rounded-full text-[10px] tracking-[0.35em] uppercase border bg-black/30 backdrop-blur-sm"
            style={{
              borderColor: "rgba(200,170,80,0.2)",
              color: "rgba(220,190,110,0.6)",
              boxShadow: "0 0 20px rgba(180,150,60,0.06)",
            }}
          >
            February 8th — Propose Day
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <p
            className="text-base md:text-lg tracking-[0.5em] uppercase mb-4 font-semibold"
            style={{ color: "rgba(220,190,110,0.7)" }}
          >
            My Begum
          </p>
          
          <h1
            className="text-5xl md:text-7xl lg:text-8xl text-white"
            style={{ fontFamily: "var(--font-great-vibes)" }}
          >
            <LetterReveal text={name} delay={1.2} />
          </h1>

          <motion.button
            onClick={() => setShowPromise(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-3 rounded-full text-sm font-medium"
            style={{
              background:
                "linear-gradient(135deg, rgba(200,170,60,0.9), rgba(180,140,50,0.8))",
              color: "#fff",
              boxShadow: "0 0 25px rgba(200,170,60,0.4)",
            }}
          >
            Click here 💛
          </motion.button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="mt-6 text-xl md:text-2xl italic text-center max-w-2xl font-medium"
          style={{ color: "rgba(220,190,120,0.7)" }}
        >
          &ldquo;{proposeDay.tagline}&rdquo;
        </motion.p>
      </section>

      {/* Promise Overlay - Rendered with AnimatePresence */}
      <AnimatePresence>
        {showPromise && (
          <PromiseOverlay onClose={() => setShowPromise(false)} />
        )}
      </AnimatePresence>

      {/* LETTER */}
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
                "linear-gradient(135deg, rgba(60,45,10,0.25) 0%, rgba(20,15,5,0.4) 50%, rgba(60,45,10,0.15) 100%)",
              border: "1px solid rgba(220,190,110,0.08)",
              boxShadow:
                "0 0 60px rgba(180,150,60,0.04), inset 0 1px 0 rgba(255,235,180,0.03)",
            }}
          >
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
                  "0 4px 20px rgba(180,150,50,0.3), inset 0 -2px 4px rgba(0,0,0,0.2)",
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
                className="text-xl sm:text-2xl mb-3"
                style={{
                  fontFamily: "var(--font-great-vibes)",
                  color: "rgba(230,210,140,0.9)",
                }}
              >
                My Baby {name},
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="leading-[1.9] text-base sm:text-lg md:text-xl space-y-4"
                style={{ color: "rgba(240,225,180,0.8)" }}
              >
                <p>{proposeDay.message}</p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 }}
                className="mt-6 text-right text-base sm:text-lg"
                style={{
                  fontFamily: "var(--font-great-vibes)",
                  color: "rgba(220,190,110,0.7)",
                }}
              >
                Forever & Always Yours ❤️
              </motion.p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* WHY I FELL FOR YOU - INTERACTIVE CARDS */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-14 sm:mb-20"
        >
          <motion.span
            className="text-[10px] tracking-[0.4em] uppercase block mb-4"
            style={{ color: "rgba(220,190,110,0.4)" }}
          >
            Everything I adore
          </motion.span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-3"
            style={{
              background:
                "linear-gradient(to right, rgba(240,210,120,0.95), rgba(255,235,170,0.85), rgba(240,210,120,0.95))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Why I Fell for You
          </h2>
          <p
            className="text-sm sm:text-base max-w-2xl mx-auto mt-4"
            style={{ color: "rgba(220,190,110,0.6)" }}
          >
            Click each card to discover what makes you so special ✨
          </p>
        </motion.div>

        <ReasonsIFellForYou />
      </section>

      {/* REASONS */}
      <section className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-14 sm:mb-20"
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-semibold"
            style={{
              background:
                "linear-gradient(to right, rgba(240,210,120,0.95), rgba(255,235,170,0.85), rgba(240,210,120,0.95))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            I PROMISE
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {reasons?.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="relative p-5 sm:p-6 rounded-2xl group overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(60,45,10,0.2) 0%, rgba(20,15,5,0.3) 100%)",
                border: "1px solid rgba(220,190,110,0.08)",
              }}
            >
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(200,170,60,0.08) 0%, transparent 70%)",
                }}
              />

              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mb-3 relative z-10"
                style={{
                  background: "rgba(200,170,60,0.1)",
                  border: "1px solid rgba(220,190,110,0.15)",
                  color: "rgba(220,190,110,0.8)",
                }}
              >
                {i + 1}
              </div>

              <p
                className="text-base sm:text-lg leading-relaxed relative z-10"
                style={{ color: "rgba(230,215,160,0.75)" }}
              >
                {reason}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROPOSAL */}
      <AnimatePresence>
        {showProposal && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center"
          >
            {!proposalAccepted ? (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative p-8 sm:p-12 md:p-16 rounded-3xl backdrop-blur-md"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(60,45,10,0.3) 0%, rgba(20,15,5,0.4) 50%, rgba(60,45,10,0.2) 100%)",
                  border: "1px solid rgba(220,190,110,0.12)",
                  boxShadow: "0 0 80px rgba(180,150,60,0.08)",
                }}
              >
                <motion.div
                  className="text-7xl sm:text-8xl mb-6"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  💍
                </motion.div>

                <h3
                  className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
                  style={{
                    fontFamily: "var(--font-great-vibes)",
                    background:
                      "linear-gradient(to right, rgba(255,220,100,0.95), rgba(255,240,180,0.9))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {name}, will you marry me?
                </h3>

                <p
                  className="text-lg sm:text-xl mb-10"
                  style={{ color: "rgba(240,225,180,0.8)" }}
                >
                  Choose your answer carefully... 😉
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative">
                  <motion.button
                    onClick={() => setProposalAccepted(true)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative px-12 py-4 rounded-full text-white font-bold text-xl cursor-pointer overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(180,150,40,0.9) 0%, rgba(220,180,60,0.85) 40%, rgba(200,160,50,0.8) 100%)",
                      boxShadow:
                        "0 0 40px rgba(200,170,50,0.4), 0 0 80px rgba(200,170,50,0.2)",
                    }}
                  >
                    <motion.div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                      }}
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                      }}
                    />
                    <span className="relative z-10">YES! 💍</span>
                  </motion.button>

                  <motion.button
                    onMouseEnter={handleNoHover}
                    onTouchStart={handleNoHover}
                    animate={{
                      scale: noButtonScale,
                    }}
                    className="px-8 py-3 rounded-full border text-sm cursor-pointer"
                    style={{
                      borderColor: "rgba(220,190,110,0.2)",
                      background: "rgba(180,150,50,0.05)",
                      color: "rgba(220,190,110,0.5)",
                    }}
                  >
                    No (This button is shy!)
                  </motion.button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                className="relative p-8 sm:p-12 md:p-16 rounded-3xl backdrop-blur-md overflow-hidden"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(60,45,10,0.3) 0%, rgba(30,22,8,0.4) 50%, rgba(60,45,10,0.2) 100%)",
                  border: "1px solid rgba(220,190,110,0.15)",
                  boxShadow: "0 0 100px rgba(200,170,50,0.15)",
                }}
              >
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(30)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute left-1/2 top-1/2 text-2xl"
                      initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
                      animate={{
                        x: Math.cos((i * Math.PI * 2) / 30) * 200,
                        y: Math.sin((i * Math.PI * 2) / 30) * 200,
                        opacity: 0,
                        scale: [0, 1.5, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.03,
                        ease: "easeOut",
                      }}
                    >
                      {["💍", "✨", "💛", "💎", "⭐", "💖"][i % 6]}
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="text-8xl mb-6"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  💍
                </motion.div>

                <h3
                  className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
                  style={{
                    fontFamily: "var(--font-great-vibes)",
                    background:
                      "linear-gradient(to right, rgba(255,230,130,0.95), rgba(255,245,200,0.9))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  She Said YES!
                </h3>

                <div
                  className="text-lg sm:text-xl leading-relaxed mb-8"
                  style={{ color: "rgba(240,225,180,0.85)" }}
                >
                  <TypewriterText
                    text={`${name}, you just made me the happiest person alive! My heart is bursting with joy. From this moment on, we begin our forever together. I love you more than words can express! 💍❤️✨`}
                    className=""
                    delay={0.5}
                    speed={30}
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 5 }}
                  className="mt-10 p-6 rounded-2xl"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(180,150,40,0.1) 0%, rgba(60,45,10,0.12) 100%)",
                    border: "1px solid rgba(220,190,110,0.1)",
                  }}
                >
                  <p
                    className="text-xl font-bold mb-2"
                    style={{ color: "rgba(255,230,150,0.9)" }}
                  >
                    📸 Capture This Moment!
                  </p>
                  <p
                    className="text-base"
                    style={{ color: "rgba(220,190,110,0.7)" }}
                  >
                    Screenshot this and send it to me — I want to treasure your
                    yes forever! 💕
                  </p>
                </motion.div>
              </motion.div>
            )}
          </motion.section>
        )}
      </AnimatePresence>

      {/* HEART QUOTES */}
      <section className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2
            className="text-3xl sm:text-4xl font-semibold"
            style={{
              background:
                "linear-gradient(to right, rgba(240,210,120,0.95), rgba(255,235,170,0.85))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Miss Maryam Nadeem
          </h2>
        </motion.div>

        <div className="space-y-8">
          {heartQuotes?.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="flex items-start gap-4"
            >
              <motion.span
                className="text-4xl flex-shrink-0"
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
                className="text-lg sm:text-xl italic leading-relaxed pl-4"
                style={{
                  borderLeft: "1px solid rgba(220,190,110,0.15)",
                  fontFamily: "var(--font-great-vibes)",
                  color: "rgba(230,215,150,0.75)",
                }}
              >
                &ldquo;{item.text}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TEASER */}
      <section className="relative z-10 text-center px-6 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-sm mx-auto"
        >
          <p
            className="text-[10px] tracking-[0.3em] uppercase mb-4"
            style={{ color: "rgba(220,190,110,0.3)" }}
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
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <span className="text-4xl">🍫</span>
            <p
              className="mt-3 text-sm"
              style={{ color: "rgba(220,190,110,0.4)" }}
            >
              Chocolate Day — Coming Feb 9
            </p>
          </motion.div>
        </motion.div>
      </section>

      <div className="relative z-10 text-center pb-12 sm:pb-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm transition-all duration-300"
          style={{
            border: "1px solid rgba(220,190,110,0.1)",
            background: "rgba(180,150,50,0.04)",
            color: "rgba(220,190,110,0.6)",
          }}
        >
          ← Back to Valentine&apos;s Week
        </Link>
      </div>

      <footer
        className="relative z-10 text-center py-10"
        style={{ borderTop: "1px solid rgba(220,190,110,0.04)" }}
      >
        <p className="text-xs" style={{ color: "rgba(220,190,110,0.25)" }}>
          Forever starts with you{" "}
          <span className="heartbeat inline-block">💍</span>
        </p>
      </footer>
    </main>
  );
}