/* eslint-disable react-hooks/purity */
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import React from "react";
import HeartParticles from "@/components/HeartParticles";
import MouseFollowHearts from "@/components/Mousefollowhearts";
import LetterReveal from "@/components/LetterReveal";
import TypewriterText from "@/components/TypewriterText";
import { valentineConfig } from "@/config/valentine";
import Link from "next/link";

const valentineDay = valentineConfig.days["valentines-day"];
const { name } = valentineConfig;

// Floating rose petals
const RosePetals = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-3xl opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-10%`,
          }}
          animate={{
            y: ["0vh", "110vh"],
            x: [0, Math.sin(i) * 50, 0],
            rotate: [0, 360, 720],
            opacity: [0, 0.3, 0.2, 0],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            delay: i * 0.8,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          🌹
        </motion.div>
      ))}
    </div>
  );
};

export default function ValentineDayPage() {
  const [selectedFlower, setSelectedFlower] = useState<number | null>(null);
  const [revealedFlowers, setRevealedFlowers] = useState<Set<number>>(
    new Set(),
  );
  const [scratchProgress, setScratchProgress] = useState(0);
  const [isScratching, setIsScratching] = useState(false);
  const [openLetter, setOpenLetter] = useState(false);
  const [spinning, setSpinning] = useState(false);
  const [wheelResult, setWheelResult] = useState<string | null>(null);
  const [showHeartRain, setShowHeartRain] = useState(false);
  const [rainHearts, setRainHearts] = useState<
    Array<{ id: number; x: number; emoji: string }>
  >([]);

  const flowerMessages = [
    {
      emoji: "🌹",
      color: "#DC2626",
      message:
        "You are the most beautiful soul I've ever known. Your smile lights up my darkest days.",
      title: "My Beautiful Rose",
    },
    {
      emoji: "🌺",
      color: "#EC4899",
      message:
        "Every moment with you feels like a dream I never want to wake up from.",
      title: "My Tropical Paradise",
    },
    {
      emoji: "🌸",
      color: "#F472B6",
      message:
        "Your laugh is my favorite sound. I wish you smile forever and never stop being happy.",
      title: "Cherry Blossom",
    },
    {
      emoji: "🌼",
      color: "#FBBF24",
      message: "You are literally my sunshine, with just your presence you changed me completely.",
      title: "My Sunshine",
    },
    {
      emoji: "🌻",
      color: "#F59E0B",
      message: "With you, I've found my home, my peace, my everything.",
      title: "Sunflower of Hope",
    },
    {
      emoji: "💐",
      color: "#A855F7",
      message:
        "I promise to love you more with each passing day, today, tomorrow, and forever.",
      title: "Eternal Bouquet",
    },
    {
      emoji: "🌷",
      color: "#EF4444",
      message: "You are my safest place where i can be myself and love you without any fear, you are my everything maryam and i will protect you with all my heart.",
      title: "Tulip of Love",
    },
    {
      emoji: "🥀",
      color: "#BE123C",
      message:
        "I know our life not going to be easy sometimes it will be tough, but i will be there for you every single day, every single moment.",
      title: "Everlasting Love",
    },
  ];

  const wheelPromises = [
    "I'll cook your favorite meal for a whole week! 👨‍🍳",
    "You get unlimited cuddles on demand! 🤗",
    "Breakfast in bed coming your way! 🥞",
    "Your wish is my command for 24 hours! ⭐",
    "Surprise gift on its way! 🎁",
    "I'll do anything you want! 📝",
  ];

  const handleFlowerClick = (index: number) => {
    setSelectedFlower(index);
    setRevealedFlowers((prev) => new Set([...prev, index]));
  };

  const handleScratch = (
    e:
      | React.MouseEvent<HTMLCanvasElement>
      | React.TouchEvent<HTMLCanvasElement>,
  ) => {
    if (!isScratching) return;

    const canvas = e.currentTarget;
    const rect = canvas.getBoundingClientRect();
    const x =
      "touches" in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y =
      "touches" in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top;

    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(x, y, 25, 0, Math.PI * 2);
      ctx.fill();

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;
      let transparent = 0;

      for (let i = 3; i < pixels.length; i += 4) {
        if (pixels[i] === 0) transparent++;
      }

      const progress = (transparent / (pixels.length / 4)) * 100;
      setScratchProgress(progress);
    }
  };

  React.useEffect(() => {
    const canvas = document.getElementById(
      "valentineScratchCanvas",
    ) as HTMLCanvasElement;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        const gradient = ctx.createLinearGradient(
          0,
          0,
          canvas.width,
          canvas.height,
        );
        gradient.addColorStop(0, "#DC2626");
        gradient.addColorStop(0.5, "#EC4899");
        gradient.addColorStop(1, "#A855F7");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < 1500; i++) {
          ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.3})`;
          ctx.fillRect(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
            2,
            2,
          );
        }

        ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
        ctx.font = "bold 28px Arial";
        ctx.textAlign = "center";
        ctx.fillText("💝 SCRATCH ME 💝", canvas.width / 2, canvas.height / 2);
      }
    }
  }, []);

  const spinWheel = () => {
    if (spinning) return;
    setSpinning(true);
    setWheelResult(null);

    setTimeout(() => {
      const randomPromise =
        wheelPromises[Math.floor(Math.random() * wheelPromises.length)];
      setWheelResult(randomPromise);
      setSpinning(false);
    }, 3000);
  };

  const triggerHeartRain = () => {
    setShowHeartRain(true);
    const newHearts = Array.from({ length: 100 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100,
      emoji: ["❤️", "💖", "💕", "💗", "💝", "💘"][
        Math.floor(Math.random() * 6)
      ],
    }));
    setRainHearts(newHearts);

    setTimeout(() => {
      setShowHeartRain(false);
      setRainHearts([]);
    }, 5000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1a0010] via-[#2d0a1a] to-[#1a0010] relative overflow-hidden">
      <MouseFollowHearts />
      <RosePetals />
      <HeartParticles count={15} />

      {/* Heart Rain Effect */}
      <AnimatePresence>
        {showHeartRain && (
          <div className="fixed inset-0 pointer-events-none z-50">
            {rainHearts.map((heart) => (
              <motion.div
                key={heart.id}
                className="absolute text-4xl"
                style={{ left: `${heart.x}%`, top: "-10%" }}
                initial={{ y: -100, opacity: 0, rotate: 0 }}
                animate={{
                  y: window.innerHeight + 100,
                  opacity: [0, 1, 1, 0],
                  rotate: 360,
                  x: [0, Math.sin(heart.id) * 50, 0],
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 5, ease: "linear" }}
              >
                {heart.emoji}
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(236,72,153,0.8) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(220,38,38,0.8) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* HERO SECTION */}
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
            style={{ color: "rgba(251,207,232,0.5)" }}
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
              borderColor: "rgba(220,38,38,0.3)",
              color: "rgba(251,207,232,0.6)",
              boxShadow: "0 0 30px rgba(220,38,38,0.15)",
            }}
          >
            February 14th — Valentine Day
          </span>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring", bounce: 0.5 }}
          className="relative mb-8"
        >
          <motion.div
            className="text-9xl"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            💝
          </motion.div>

          {/* Orbiting hearts */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-3xl"
              style={{
                left: "50%",
                top: "50%",
              }}
              animate={{
                x: Math.cos((i * Math.PI * 2) / 6) * 80,
                y: Math.sin((i * Math.PI * 2) / 6) * 80,
                rotate: 360,
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.2,
              }}
            >
              {["❤️", "💖", "💕", "💗", "💝", "💘"][i]}
            </motion.div>
          ))}
        </motion.div>

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
            Forever & Always
          </p>
          <h1
            className="text-6xl md:text-8xl lg:text-9xl text-white mb-6"
            style={{ fontFamily: "var(--font-great-vibes)" }}
          >
            <LetterReveal text={`My ${name}`} delay={1.2} />
          </h1>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 2, duration: 1.5 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-red-400 to-transparent" />
          <span className="text-3xl">💖</span>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-red-400 to-transparent" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="text-xl md:text-2xl italic text-center max-w-2xl font-medium"
          style={{ color: "rgba(251,207,232,0.85)" }}
        >
          &ldquo;{valentineDay.tagline}&rdquo;
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
          className="absolute bottom-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span
              className="text-[10px] tracking-[0.3em] uppercase"
              style={{ color: "rgba(251,207,232,0.4)" }}
            >
              scroll for magic
            </span>
            <div className="w-px h-6 bg-gradient-to-b from-red-300/30 to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* MAIN LOVE LETTER */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div
            className="relative p-8 sm:p-12 md:p-16 rounded-3xl backdrop-blur-lg"
            style={{
              background:
                "linear-gradient(135deg, rgba(80,15,50,0.4) 0%, rgba(40,8,25,0.5) 50%, rgba(80,15,50,0.3) 100%)",
              border: "1px solid rgba(251,207,232,0.15)",
              boxShadow:
                "0 0 80px rgba(220,38,38,0.1), inset 0 1px 0 rgba(251,207,232,0.05)",
            }}
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring", bounce: 0.6 }}
              className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #DC2626, #EC4899)",
                boxShadow:
                  "0 8px 30px rgba(220,38,38,0.4), inset 0 -3px 6px rgba(0,0,0,0.3)",
              }}
            >
              <span className="text-white text-2xl">💖</span>
            </motion.div>

            <div className="mt-8">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-2xl sm:text-3xl mb-6"
                style={{
                  fontFamily: "var(--font-great-vibes)",
                  color: "rgba(252,231,243,0.95)",
                }}
              >
                Begum,
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="leading-[2] text-lg sm:text-xl md:text-2xl space-y-6"
                style={{ color: "rgba(251,207,232,0.9)" }}
              >
                <p>{valentineDay.message}</p>
                <p
                  className="italic font-medium"
                  style={{ color: "rgba(252,231,243,0.95)" }}
                >
                  Today is Valentine Day, but this is not the last day where I
                  am expressing my love for you. You are meant to be loved,
                  cherished, and celebrated every single day. I will express my
                  love for you forever — in every sunrise, every whispered word,
                  every gentle touch, and every beat of my heart.
                </p>
                <p>
                  Every day with you is a gift I treasure. You make the ordinary
                  extraordinary, the mundane magical. My love for you grows
                  deeper with each passing moment, stronger with each shared
                  smile, and more beautiful with each memory we create together.
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 }}
                className="mt-8 text-right text-xl sm:text-2xl"
                style={{
                  fontFamily: "var(--font-great-vibes)",
                  color: "rgba(251,207,232,0.85)",
                }}
              >
                Forever Yours, With All My Love ❤️
              </motion.p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* INTERACTIVE FLOWER BOUQUET */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4"
            style={{
              background:
                "linear-gradient(to right, #DC2626, #EC4899, #A855F7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            A Bouquet of Love Messages
          </h2>
          <p className="text-lg" style={{ color: "rgba(251,207,232,0.7)" }}>
            Click each flower to reveal a special message just for you 🌹
          </p>
        </motion.div>

        {/* Flower Bouquet */}
        <div className="relative">
          <motion.div
            className="relative mx-auto"
            style={{
              width: "fit-content",
            }}
          >
            {/* Vase */}
            <motion.div
              initial={{ scale: 0, y: 50 }}
              whileInView={{ scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring" }}
              className="relative mx-auto w-48 h-64 rounded-t-full"
              style={{
                background:
                  "linear-gradient(180deg, rgba(139,69,19,0.3) 0%, rgba(101,67,33,0.5) 100%)",
                border: "2px solid rgba(139,69,19,0.4)",
                boxShadow:
                  "0 10px 40px rgba(0,0,0,0.3), inset 0 -20px 30px rgba(0,0,0,0.2)",
              }}
            >
              {/* Decorative band */}
              <div
                className="absolute top-8 left-0 right-0 h-12"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(220,38,38,0.4), rgba(236,72,153,0.4), rgba(220,38,38,0.4))",
                  border: "1px solid rgba(220,38,38,0.3)",
                  borderLeft: "none",
                  borderRight: "none",
                }}
              />
            </motion.div>

            {/* Flowers arranged in a single row */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-2xl">
              <div className="relative flex justify-center items-end gap-4 px-4">
                {flowerMessages.map((flower, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, y: 50, opacity: 0 }}
                    whileInView={{ scale: 1, y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.8 + i * 0.1,
                      type: "spring",
                      bounce: 0.5,
                    }}
                    className="relative"
                  >
                    <motion.button
                      onClick={() => handleFlowerClick(i)}
                      className="relative cursor-pointer block"
                      whileHover={{ scale: 1.2, rotate: 10, y: -10 }}
                      whileTap={{ scale: 0.95 }}
                      animate={
                        revealedFlowers.has(i)
                          ? {
                              rotate: [0, 5, -5, 0],
                              scale: [1, 1.1, 1],
                            }
                          : {}
                      }
                      transition={{ duration: 0.5 }}
                    >
                      {/* Stem */}
                      <div
                        className="absolute top-12 left-1/2 -translate-x-1/2 w-1 h-32 pointer-events-none"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(34,197,94,0.6), rgba(22,163,74,0.8))",
                        }}
                      />

                      {/* Flower */}
                      <motion.div
                        className="text-6xl relative z-10"
                        style={{
                          filter: revealedFlowers.has(i)
                            ? `drop-shadow(0 0 20px ${flower.color})`
                            : `drop-shadow(0 0 8px ${flower.color})`,
                        }}
                      >
                        {flower.emoji}
                      </motion.div>

                      {/* Glow effect when revealed */}
                      {revealedFlowers.has(i) && (
                        <motion.div
                          className="absolute inset-0 rounded-full blur-xl pointer-events-none"
                          style={{ background: flower.color, opacity: 0.3 }}
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Message Display */}
          <AnimatePresence>
            {selectedFlower !== null && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                className="mt-12 relative p-8 sm:p-12 rounded-3xl backdrop-blur-lg max-w-2xl mx-auto"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(60,10,40,0.6) 0%, rgba(30,5,20,0.7) 100%)",
                  border: `2px solid ${flowerMessages[selectedFlower].color}40`,
                  boxShadow: `0 10px 50px ${flowerMessages[selectedFlower].color}20`,
                }}
              >
                <button
                  onClick={() => setSelectedFlower(null)}
                  className="absolute top-4 right-0 w-10 h-10 pr-5 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{
                    background: "rgba(220,38,38,0.2)",
                    border: "1px solid rgba(251,207,232,0.2)",
                  }}
                >
                  <span style={{ color: "rgba(251,207,232,0.8)" }}>✕</span>
                </button>

                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl">
                    {flowerMessages[selectedFlower].emoji}
                  </span>
                  <h3
                    className="text-2xl sm:text-3xl font-semibold"
                    style={{
                      fontFamily: "var(--font-great-vibes)",
                      color: flowerMessages[selectedFlower].color,
                    }}
                  >
                    {flowerMessages[selectedFlower].title}
                  </h3>
                </div>

                <p
                  className="text-lg sm:text-xl leading-relaxed"
                  style={{ color: "rgba(251,207,232,0.9)" }}
                >
                  {flowerMessages[selectedFlower].message}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Collected counter */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-lg" style={{ color: "rgba(251,207,232,0.7)" }}>
              Messages Revealed: {revealedFlowers.size} /{" "}
              {flowerMessages.length}
            </p>
            {revealedFlowers.size === flowerMessages.length && (
              <motion.p
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="mt-4 text-2xl font-semibold"
                style={{
                  fontFamily: "var(--font-great-vibes)",
                  color: "#DC2626",
                }}
              >
                You have discovered all my love messages! 💐💖
              </motion.p>
            )}
          </motion.div>
        </div>
      </section>

      {/* SCRATCH CARD */}
      <section className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4"
            style={{
              background: "linear-gradient(to right, #DC2626, #EC4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Scratch to Reveal
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-8 rounded-3xl backdrop-blur-sm"
          style={{
            background:
              "linear-gradient(135deg, rgba(60,10,40,0.4) 0%, rgba(30,5,20,0.5) 100%)",
            border: "1px solid rgba(220,38,38,0.2)",
            boxShadow: "0 0 80px rgba(220,38,38,0.15)",
          }}
        >
          <div className="relative mx-auto max-w-2xl">
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(220,38,38,0.2) 0%, rgba(236,72,153,0.3) 100%)",
                border: "3px dashed rgba(251,207,232,0.3)",
                aspectRatio: "16/9",
              }}
            >
              {/* Message underneath */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <motion.div
                  className="text-7xl mb-6"
                  animate={{
                    scale: [1, 1.15, 1],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  💍
                </motion.div>
                <h3
                  className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
                  style={{
                    fontFamily: "var(--font-great-vibes)",
                    color: "#DC2626",
                  }}
                >
                  My Pretiest Maryummm
                </h3>
                <p
                  className="text-lg sm:text-xl md:text-2xl leading-relaxed"
                  style={{ color: "rgba(251,207,232,0.95)" }}
                >
                  I promise to love you forever in this world and hereafter,
                  protect you endlessly, cherish you deeply, and choose you
                  every single day for the rest of my life. You are my forever,
                  my always, my everything. 💖
                </p>
                <div className="mt-6 flex gap-3 text-4xl">💕 💗 💝 💘 ❤️</div>
              </div>

              {/* Scratch layer */}
              <canvas
                id="valentineScratchCanvas"
                className="absolute inset-0 w-full h-full cursor-pointer touch-none"
                onMouseDown={() => setIsScratching(true)}
                onMouseUp={() => setIsScratching(false)}
                onMouseLeave={() => setIsScratching(false)}
                onMouseMove={handleScratch}
                onTouchStart={() => setIsScratching(true)}
                onTouchEnd={() => setIsScratching(false)}
                onTouchMove={handleScratch}
                style={{
                  opacity: scratchProgress > 75 ? 0 : 1,
                  transition: "opacity 0.6s ease-out",
                }}
              />
            </div>

            {/* Progress */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: scratchProgress > 0 ? 1 : 0 }}
            >
              <div className="flex items-center justify-between mb-3">
                <p
                  className="text-sm"
                  style={{ color: "rgba(251,207,232,0.7)" }}
                >
                  Revealed: {Math.round(scratchProgress)}%
                </p>
                {scratchProgress > 75 && (
                  <motion.p
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-sm font-semibold"
                    style={{ color: "#DC2626" }}
                  >
                    Promise Revealed! 💕
                  </motion.p>
                )}
              </div>
              <div
                className="h-3 rounded-full overflow-hidden"
                style={{
                  background: "rgba(220,38,38,0.2)",
                  border: "1px solid rgba(251,207,232,0.2)",
                }}
              >
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: "linear-gradient(to right, #DC2626, #EC4899)",
                    boxShadow: "0 0 15px rgba(220,38,38,0.5)",
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: `${scratchProgress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>

            {scratchProgress === 0 && (
              <motion.p
                className="mt-6 text-center text-sm"
                style={{ color: "rgba(251,207,232,0.5)" }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Scratch
              </motion.p>
            )}
          </div>
        </motion.div>
      </section>

      {/* SPINNING WHEEL OF PROMISES */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-lg" style={{ color: "rgba(251,207,232,0.7)" }}>
            Spin to unlock and a i will do it for you! 🎡
          </p>
        </motion.div>

        <div className="relative flex flex-col items-center">
          {/* Wheel */}
          <motion.div
            className="relative w-80 h-80 rounded-full flex items-center justify-center cursor-pointer"
            style={{
              background:
                "conic-gradient(from 0deg, #DC2626, #EC4899, #A855F7, #DC2626)",
              boxShadow: "0 0 60px rgba(220,38,38,0.4)",
            }}
            animate={spinning ? { rotate: 360 * 5 } : {}}
            transition={{ duration: 3, ease: "easeOut" }}
            onClick={spinWheel}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div
              className="absolute inset-8 rounded-full flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, rgba(60,10,40,0.9), rgba(30,5,20,0.95))",
                border: "3px solid rgba(251,207,232,0.3)",
              }}
            >
              <div className="text-center">
                <p className="text-6xl mb-3">🎡</p>
                <p
                  className="text-lg font-semibold"
                  style={{ color: "rgba(251,207,232,0.9)" }}
                >
                  {spinning ? "Spinning..." : "SPIN ME!"}
                </p>
              </div>
            </div>

            {/* Pointer */}
            <div
              className="absolute -top-8 left-1/2 -translate-x-1/2 w-0 h-0"
              style={{
                borderLeft: "20px solid transparent",
                borderRight: "20px solid transparent",
                borderTop: "30px solid #DC2626",
                filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
              }}
            />
          </motion.div>

          {/* Result */}
          <AnimatePresence>
            {wheelResult && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="mt-12 p-8 rounded-2xl backdrop-blur-lg max-w-md"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(60,10,40,0.6) 0%, rgba(30,5,20,0.7) 100%)",
                  border: "2px solid rgba(220,38,38,0.3)",
                  boxShadow: "0 10px 50px rgba(220,38,38,0.3)",
                }}
              >
                <h3
                  className="text-2xl font-semibold mb-4 text-center"
                  style={{
                    fontFamily: "var(--font-great-vibes)",
                    color: "#DC2626",
                  }}
                >
                  You Won!
                </h3>
                <p
                  className="text-xl text-center leading-relaxed"
                  style={{ color: "rgba(251,207,232,0.95)" }}
                >
                  {wheelResult}
                </p>
                <motion.button
                  onClick={spinWheel}
                  className="mt-6 w-full py-3 rounded-full font-semibold"
                  style={{
                    background: "linear-gradient(135deg, #DC2626, #EC4899)",
                    color: "white",
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Spin Again! 🎡
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ENVELOPE LOVE LETTER */}
      <section className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4"
            style={{
              background: "linear-gradient(to right, #DC2626, #EC4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            For my love
          </h2>
          <p className="text-lg" style={{ color: "rgba(251,207,232,0.7)" }}>
            Click the envelope to read my heartfelt confession 💌
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            {!openLetter ? (
              <motion.div
                key="envelope"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ rotateX: 90, opacity: 0 }}
                transition={{ duration: 0.5 }}
                onClick={() => setOpenLetter(true)}
                className="relative cursor-pointer group"
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div
                  className="relative p-20 rounded-3xl backdrop-blur-sm"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(220,38,38,0.2), rgba(236,72,153,0.3))",
                    border: "2px solid rgba(220,38,38,0.3)",
                    boxShadow: "0 10px 40px rgba(220,38,38,0.2)",
                  }}
                >
                  {/* Envelope flap */}
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-32"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(220,38,38,0.4), rgba(236,72,153,0.4))",
                      clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                      borderBottom: "2px solid rgba(220,38,38,0.4)",
                    }}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  {/* Heart seal */}
                  <motion.div
                    className="absolute top-24 left-1/2 -translate-x-1/2 text-6xl"
                    style={{
                      filter: "drop-shadow(0 0 20px rgba(220,38,38,0.8))",
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, -10, 10, 0],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    💌
                  </motion.div>

                  <div className="text-center pt-24">
                    <p
                      className="text-lg uppercase tracking-widest"
                      style={{ color: "rgba(251,207,232,0.7)" }}
                    >
                      Tap to Open
                    </p>
                    <motion.p
                      className="mt-2 text-sm"
                      style={{ color: "rgba(251,207,232,0.5)" }}
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Special Message Inside ✨
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="letter"
                initial={{ rotateX: -90, opacity: 0 }}
                animate={{ rotateX: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div
                  className="relative p-10 sm:p-12 rounded-3xl backdrop-blur-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(60,10,40,0.6) 0%, rgba(30,5,20,0.7) 100%)",
                    border: "2px solid rgba(220,38,38,0.3)",
                    boxShadow: "0 10px 50px rgba(220,38,38,0.2)",
                  }}
                >
                  <button
                    onClick={() => setOpenLetter(false)}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{
                      background: "rgba(220,38,38,0.2)",
                      border: "1px solid rgba(251,207,232,0.2)",
                    }}
                  >
                    <span style={{ color: "rgba(251,207,232,0.8)" }}>✕</span>
                  </button>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <p
                      className="text-2xl mb-6"
                      style={{
                        fontFamily: "var(--font-great-vibes)",
                        color: "#EC4899",
                      }}
                    >
                      {name},
                    </p>
                    <p
                      className="text-lg sm:text-xl leading-relaxed mb-6"
                      style={{ color: "rgba(251,207,232,0.9)" }}
                    >
                      I really cant express what i feel for you even if i say
                      every second that i love still its not enough... i dont
                      know how or when but now i am all yous i love you beyond
                      your imagination my day start with your thought and end
                      with your love, you literally change me and my life, you
                      make me child who cant live any moment without you or love
                      you, you make me mature and grown who cant stop thinking
                      about how to protect you, care for you, make you happy and
                      make you feel loved. I am so lucky to find you and be
                      loved by you, finding you is the best thing I have ever
                      done, and being loved by you is the greatest gift I have
                      ever received. My Prettiest My Lady My Wife My Maryummm, I love you so much and i will love you forever.
                    </p>
                    <p
                      className="text-lg sm:text-xl leading-relaxed mb-6"
                      style={{ color: "rgba(251,207,232,0.9)" }}
                    >
                      Today is last day, but this is not the last day where
                      I am expressing my love for you. You are meant to be
                      loved, and I will express and love you forever — in every
                      heartbeat, every breath, every moment we share.
                    </p>
                    <p
                      className="text-right text-xl mt-8"
                      style={{
                        fontFamily: "var(--font-great-vibes)",
                        color: "#DC2626",
                      }}
                    >
                      Eternally Yours ❤️
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* HEART RAIN BUTTON */}
      <section className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-10 rounded-3xl backdrop-blur-lg"
          style={{
            background:
              "linear-gradient(135deg, rgba(60,10,40,0.4) 0%, rgba(30,5,20,0.5) 100%)",
            border: "1px solid rgba(220,38,38,0.2)",
            boxShadow: "0 0 60px rgba(220,38,38,0.15)",
          }}
        >
          <motion.div
            className="text-7xl mb-6"
            animate={{
              scale: [1, 1.15, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            💖
          </motion.div>

          <h3
            className="text-3xl sm:text-4xl font-semibold mb-4"
            style={{ color: "rgba(252,231,243,0.95)" }}
          >
            Shower of Love
          </h3>

          <p
            className="text-lg mb-8"
            style={{ color: "rgba(251,207,232,0.8)" }}
          >
            Click to fill the sky with my love for you!
          </p>

          <motion.button
            onClick={triggerHeartRain}
            className="px-10 py-4 rounded-full text-xl font-semibold"
            style={{
              background: "linear-gradient(135deg, #DC2626, #EC4899)",
              color: "white",
              boxShadow: "0 8px 30px rgba(220,38,38,0.4)",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={showHeartRain}
          >
            {showHeartRain ? "Raining Love... 💕" : "Make It Rain Hearts! ❤️"}
          </motion.button>
        </motion.div>
      </section>

      {/* FINAL MESSAGE */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-12 sm:p-16 rounded-3xl backdrop-blur-lg"
          style={{
            background:
              "linear-gradient(135deg, rgba(60,10,40,0.5) 0%, rgba(30,5,20,0.6) 100%)",
            border: "2px solid rgba(220,38,38,0.3)",
            boxShadow: "0 0 100px rgba(220,38,38,0.2)",
          }}
        >
          <motion.div
            className="text-8xl mb-8"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            💑
          </motion.div>

          <h3
            className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6"
            style={{
              fontFamily: "var(--font-great-vibes)",
              background:
                "linear-gradient(to right, #DC2626, #EC4899, #A855F7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            You Are My Forever Valentine
          </h3>

          <p
            className="text-xl sm:text-2xl leading-relaxed mb-6"
            style={{ color: "rgba(251,207,232,0.9)" }}
          >
            Not just today, not just tomorrow, but for all the days of my life.
            You are the love story I never knew I was waiting to write.
          </p>

          <motion.div
            className="flex justify-center gap-3 text-5xl mt-8"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            💕 💖 💗 💝 💘
          </motion.div>
        </motion.div>
      </section>

      {/* Back to home */}
      <div className="relative z-10 text-center pb-12 sm:pb-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm transition-all"
          style={{
            border: "1px solid rgba(220,38,38,0.3)",
            background: "rgba(220,38,38,0.1)",
            color: "rgba(251,207,232,0.7)",
          }}
        >
          ← Back to Valentine Week
        </Link>
      </div>

      {/* Footer */}
      <footer
        className="relative z-10 text-center py-12"
        style={{ borderTop: "1px solid rgba(220,38,38,0.1)" }}
      >
        <p className="text-sm" style={{ color: "rgba(251,207,232,0.4)" }}>
          Made with infinite love for {name} 💖
        </p>
        <motion.p
          className="mt-2 text-xs"
          style={{ color: "rgba(251,207,232,0.3)" }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Happy Valentine s Day, My Love ❤️
        </motion.p>
      </footer>
    </main>
  );
}
