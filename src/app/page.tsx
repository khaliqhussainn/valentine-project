"use client";

import { motion } from "framer-motion";
import FloatingPetals from "@/components/FloatingPetals";
import HeartParticles from "@/components/HeartParticles";
import LetterReveal from "@/components/LetterReveal";
import DayCard from "@/components/DayCard";
import { valentineConfig, dayOrder } from "@/config/valentine";

export default function Home() {
  const { name, days } = valentineConfig;

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0000] via-[#150005] to-[#0a0000] relative">
      <FloatingPetals count={25} />
      <HeartParticles count={12} />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
        {/* Background radial glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-[600px] h-[600px] rounded-full opacity-20"
            style={{
              background:
                "radial-gradient(circle, rgba(255,0,80,0.4) 0%, transparent 70%)",
            }}
          />
        </div>

        {/* Small hearts decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-rose-500/20 text-xl mb-4 tracking-[0.5em]"
        >
          &#10084; &#10084; &#10084;
        </motion.div>

        {/* "For" text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-rose-300/60 text-lg md:text-xl tracking-[0.3em] uppercase mb-2"
        >
          This is for you
        </motion.p>

        {/* HER NAME - The Big Reveal */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1.2, type: "spring" }}
          className="relative z-20 text-6xl md:text-8xl lg:text-9xl font-normal text-white"
          style={{ fontFamily: "var(--font-great-vibes)" }}
        >
          <LetterReveal text={name} delay={0.8} />
        </motion.h1>

        {/* Underline decoration */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="w-40 h-[1px] bg-gradient-to-r from-transparent via-rose-500/50 to-transparent mt-4"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="text-rose-200/50 text-base md:text-lg mt-6 max-w-md text-center leading-relaxed italic"
        >
          &ldquo;Every day this week, a new surprise awaits you...
          <br />
          because you deserve to feel loved every single day.&rdquo;
        </motion.p>

        {/* Heartbeat heart */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="mt-10 text-4xl heartbeat select-none"
        >
          💗
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="absolute bottom-10 flex flex-col items-center gap-2"
        >
          <span className="text-rose-300/30 text-xs tracking-widest uppercase">
            Scroll for surprises
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-rose-400/40"
          >
            ↓
          </motion.div>
        </motion.div>
      </section>

      {/* VALENTINE'S WEEK DAYS GRID */}
      <section className="relative z-20 max-w-5xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-rose-400 to-pink-300 bg-clip-text text-transparent mb-3">
            Valentine&apos;s Week
          </h2>
          <p className="text-rose-300/40 text-sm">
            A new surprise unlocks every day
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {dayOrder.map((slug, index) => {
            const day = days[slug];
            return (
              <DayCard
                key={slug}
                slug={slug}
                title={day.title}
                emoji={day.emoji}
                date={new Date(day.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
                unlocked={day.unlocked}
                index={index}
              />
            );
          })}
        </div>
      </section>

      {/* Footer love note */}
      <footer className="relative z-20 text-center py-16 px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-rose-500/10 pt-10"
        >
          <p className="text-rose-300/30 text-sm">
            Made with all my heart, just for you{" "}
            <span className="heartbeat inline-block">❤️</span>
          </p>
          <p
            className="text-rose-300/20 text-xs mt-2"
            style={{ fontFamily: "var(--font-great-vibes)" }}
          >
            ~ With endless love ~
          </p>
        </motion.div>
      </footer>
    </main>
  );
}
