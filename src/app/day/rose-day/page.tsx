"use client";

import { motion } from "framer-motion";
import FloatingPetals from "@/components/FloatingPetals";
import HeartParticles from "@/components/HeartParticles";
import GlowingRose from "@/components/GlowingRose";
import LetterReveal from "@/components/LetterReveal";
import TypewriterText from "@/components/TypewriterText";
import AcceptRose from "@/components/AcceptRose";
import { valentineConfig } from "@/config/valentine";
import Link from "next/link";

const roseDay = valentineConfig.days["rose-day"];

const loveQuotes = [
  "You are the eternal rose in my garden a symbol of beauty that never fades and a love that only grows deeper with time.",
  "In a world of wild blooms, I would still choose you for you are the only rose that speaks the language of my soul.",
  "A rose is but a whisper of love, but your smile is its full expression, blooming with a passion that takes my breath away.",
  "Just as the rose is the queen of flowers, you are the undisputed queen of my heart, reigning with grace and velvet sweetness.",
];

export default function RoseDayPage() {
  const { name } = valentineConfig;

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0000] via-[#1a0005] to-[#0a0000] relative overflow-hidden">
      <FloatingPetals count={40} />
      <HeartParticles count={10} />

      {/* Ambient background roses */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute top-20 left-10 w-96 h-96 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(255,0,60,0.3) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(255,50,100,0.3) 0%, transparent 70%)",
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
            className="text-rose-300/40 hover:text-rose-300/70 transition-colors text-sm flex items-center gap-2"
          >
            ← Back to surprises
          </Link>
        </motion.div>

        {/* Day badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-6"
        >
          <span className="px-4 py-1.5 rounded-full text-xs tracking-widest uppercase border border-rose-500/20 bg-rose-500/5 text-rose-400/60">
            February 7th — Rose Day
          </span>
        </motion.div>

        {/* Glowing Rose */}
        <div className="mb-8">
          <GlowingRose />
        </div>

        {/* Title with her name */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <p className="text-rose-300/50 text-sm tracking-[0.4em] uppercase mb-3">
            A rose for
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
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 2.2, duration: 1.2 }}
          className="w-48 h-px bg-gradient-to-r from-transparent via-rose-500/40 to-transparent mt-6"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="mt-6 text-lg md:text-xl text-rose-200/40 italic text-center max-w-lg"
        >
          &ldquo;{roseDay.tagline}&rdquo;
        </motion.p>
      </section>

      {/* LOVE LETTER SECTION */}
      <section className="relative z-10 max-w-3xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Letter container */}
          <div className="relative p-8 md:p-12 rounded-3xl border border-rose-500/10 bg-gradient-to-br from-rose-950/30 via-black/50 to-rose-950/20 backdrop-blur-sm">
            {/* Seal */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring" }}
              className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-rose-700 flex items-center justify-center shadow-lg shadow-red-900/50"
            >
              <span className="text-white text-lg">💌</span>
            </motion.div>

            <div className="mt-4">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-rose-300/60 mb-2"
                style={{ fontFamily: "var(--font-great-vibes)" }}
              >
                My Dearest {name},
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="text-rose-100/70 leading-relaxed text-base md:text-lg space-y-4"
              >
                <p>{roseDay.message}</p>
                <p>
                  If I could give you one thing in this world, it would be the
                  ability to see yourself through my eyes. Only then would you
                  realize how special you truly are to me.
                </p>
                <p>
                  This rose is just the beginning. Every petal carries a whisper
                  of my love for you today, tomorrow, and for all the days to
                  come.
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="text-rose-300/50 mt-8 text-right"
                style={{ fontFamily: "var(--font-great-vibes)" }}
              >
                Forever Yours ❤️
              </motion.p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ROSE GARDEN - Quotes Section */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-2xl md:text-3xl font-semibold bg-gradient-to-r from-rose-400 to-pink-300 bg-clip-text text-transparent mb-16"
        >
          Rose Garden of Love
        </motion.h2>

        <div className="space-y-8">
          {loveQuotes.map((quote, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="flex items-start gap-4 group"
            >
              <motion.span
                className="text-3xl flex-shrink-0 mt-1"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{
                  duration: 3,
                  delay: i * 0.5,
                  repeat: Infinity,
                }}
              >
                🌹
              </motion.span>
              <p className="text-rose-200/50 text-lg italic leading-relaxed border-l border-rose-500/20 pl-4 group-hover:text-rose-200/70 group-hover:border-rose-500/40 transition-all duration-500">
                &ldquo;{quote}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE ROSE COUNTDOWN */}
      <section className="relative z-10 max-w-2xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 md:p-12 rounded-3xl border border-rose-500/10 bg-gradient-to-br from-rose-950/20 to-black/30"
        >
          <motion.div
            className="text-6xl mb-6"
            animate={{
              scale: [1, 1.1, 1],
              filter: [
                "drop-shadow(0 0 10px rgba(255,0,80,0.3))",
                "drop-shadow(0 0 30px rgba(255,0,80,0.6))",
                "drop-shadow(0 0 10px rgba(255,0,80,0.3))",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🌹
          </motion.div>

          <h3 className="text-xl md:text-2xl font-semibold text-rose-200/80 mb-4">
            Happy Rose Day, {name}!
          </h3>

          <TypewriterText
            text={`${name}, you are the most beautiful rose in the garden of my life. Today and every day, I choose you.`}
            className="text-rose-200/50 text-base leading-relaxed"
            delay={0.5}
            speed={25}
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 4 }}
            className="mt-8 flex flex-wrap justify-center gap-2"
          >
            {["🌹", "🌷", "💐", "🌸", "🏵️", "🌺", "🌻", "💮"].map(
              (flower, i) => (
                <motion.span
                  key={i}
                  className="text-3xl cursor-default"
                  whileHover={{ scale: 1.5, rotate: 20 }}
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    y: { duration: 2, delay: i * 0.2, repeat: Infinity },
                  }}
                >
                  {flower}
                </motion.span>
              ),
            )}
          </motion.div>
        </motion.div>
      </section>

      {/* ACCEPT THIS ROSE - Interactive Yes/No */}
      <AcceptRose />

      {/* Tomorrow's teaser */}
      <section className="relative z-10 text-center px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto"
        >
          <p className="text-rose-300/30 text-sm tracking-widest uppercase mb-3">
            Tomorrow brings...
          </p>
          <motion.div
            className="p-6 rounded-2xl border border-white/5 bg-white/5"
            animate={{
              borderColor: [
                "rgba(255,255,255,0.05)",
                "rgba(255,0,80,0.2)",
                "rgba(255,255,255,0.05)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="text-4xl">💍</span>
            <p className="text-rose-200/30 mt-2 text-sm">
              Propose Day — Coming Feb 8
            </p>
            <p className="text-rose-300/20 text-xs mt-1">
              A new surprise awaits...
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Back to home */}
      <div className="relative z-10 text-center pb-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-rose-500/20 bg-rose-500/5 text-rose-300/60 hover:bg-rose-500/10 hover:text-rose-300/80 transition-all duration-300 text-sm"
        >
          ← Back to Valentine&apos;s Week
        </Link>
      </div>

      {/* Footer */}
      <footer className="relative z-10 text-center py-10 border-t border-rose-500/5">
        <p className="text-rose-300/20 text-xs">
          Each rose whispers &ldquo;I love you&rdquo;{" "}
          <span className="heartbeat inline-block">🌹</span>
        </p>
      </footer>
    </main>
  );
}
