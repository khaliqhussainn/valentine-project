"use client";

import { motion } from "framer-motion";
import FloatingPetals from "@/components/FloatingPetals";
import HeartParticles from "@/components/HeartParticles";
import MouseFollowHearts from "@/components/Mousefollowhearts";
import LetterReveal from "@/components/LetterReveal";
import DayCard from "@/components/DayCard";
import { valentineConfig, dayOrder } from "@/config/valentine";

export default function Home() {
  const { name, days } = valentineConfig;

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0000] via-[#150005] to-[#0a0000] relative overflow-hidden">
      <MouseFollowHearts />
      <FloatingPetals count={30} />
      <HeartParticles count={15} />

      {/* Enhanced ambient background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(255,0,80,0.4) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(255,50,100,0.4) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.3, 1],
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
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
        {/* Floating decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-rose-500/5 text-6xl"
              style={{
                left: `${10 + i * 20}%`,
                top: `${15 + i * 15}%`,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {["💕", "💖", "💗", "💘", "💝"][i]}
            </motion.div>
          ))}
        </div>

        {/* Background radial glow - enhanced */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-[700px] h-[700px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255,0,80,0.25) 0%, rgba(255,0,80,0.1) 40%, transparent 70%)",
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Decorative hearts */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-6 flex gap-4"
        >
          {[...Array(3)].map((_, i) => (
            <motion.span
              key={i}
              className="text-rose-500/30 text-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                delay: i * 0.3,
                repeat: Infinity,
              }}
            >
              ❤️
            </motion.span>
          ))}
        </motion.div>

        {/* "For" text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl md:text-2xl tracking-[0.4em] uppercase mb-3 font-semibold"
          style={{ color: "rgba(255,180,200,0.9)" }}
        >
          A Love Journey For
        </motion.p>

        {/* HER NAME - Enhanced reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1.2, type: "spring" }}
          className="relative z-20 mb-6"
        >
          {/* Name glow effect */}
          <motion.div
            className="absolute inset-0 blur-3xl"
            style={{
              background:
                "radial-gradient(ellipse, rgba(255,0,80,0.3) 0%, transparent 70%)",
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />
          <h1
            className="relative text-6xl md:text-8xl lg:text-9xl font-normal text-white"
            style={{ fontFamily: "var(--font-great-vibes)" }}
          >
            <LetterReveal text={name} delay={0.8} />
          </h1>
        </motion.div>

        {/* Enhanced underline decoration */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.8, duration: 1.2 }}
          className="relative flex items-center gap-2 mb-6"
        >
          <motion.div
            className="w-16 h-[2px] rounded-full"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(255,50,100,0.6))",
            }}
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
          <motion.span
            className="text-rose-400 text-xl"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            ✦
          </motion.span>
          <motion.div
            className="w-16 h-[2px] rounded-full"
            style={{
              background:
                "linear-gradient(to left, transparent, rgba(255,50,100,0.6))",
            }}
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </motion.div>

        {/* Tagline - enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="max-w-2xl text-center"
        >
          <p
            className="text-lg md:text-xl lg:text-2xl leading-relaxed italic mb-2 font-medium"
            style={{ color: "rgba(255,200,220,0.85)" }}
          >
            &ldquo;Every day this week, a new surprise awaits you...
          </p>
          <p
            className="text-base md:text-lg lg:text-xl font-medium"
            style={{ color: "rgba(255,200,220,0.75)" }}
          >
            because you deserve to feel loved every single moment.&rdquo;
          </p>
          <p className="p-4">&ldquo;My Love, My Jaan , My Begum and only Mine Maryummmmy&ldquo; </p>
        </motion.div>

        {/* Animated heartbeat */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="mt-10 relative"
        >
          <motion.div
            className="absolute inset-0 blur-xl"
            style={{
              background:
                "radial-gradient(circle, rgba(255,0,80,0.4) 0%, transparent 60%)",
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          />
          <motion.div
            className="text-5xl relative z-10"
            animate={{
              scale: [1, 1.2, 1, 1.15, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              times: [0, 0.25, 0.35, 0.45, 0.55],
            }}
          >
            💗
          </motion.div>
        </motion.div>

        {/* Enhanced scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="absolute bottom-12 flex flex-col items-center gap-3"
        >
          <motion.span
            className="text-rose-300/40 text-xs tracking-[0.3em] uppercase font-medium"
            animate={{
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            Discover Your Surprises
          </motion.span>
          <motion.div
            className="flex flex-col items-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-rose-400/30 rounded-full flex justify-center pt-2">
              <motion.div
                className="w-1.5 h-1.5 bg-rose-400/50 rounded-full"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* VALENTINE'S WEEK DAYS GRID */}
      <section className="relative z-20 max-w-6xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Decorative element above title */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div
              className="h-px w-20"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(255,100,150,0.3))",
              }}
            />
            <span className="text-rose-400/60 text-2xl">✦</span>
            <div
              className="h-px w-20"
              style={{
                background:
                  "linear-gradient(to left, transparent, rgba(255,100,150,0.3))",
              }}
            />
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-rose-300 via-pink-200 to-rose-300 bg-clip-text text-transparent mb-4">
            Valentine&apos;s Week
          </h2>
          <p className="text-rose-200/70 text-base md:text-lg font-medium">
            Eight days of love, one for each beat of my heart
          </p>
        </motion.div>

        {/* Days grid with enhanced spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
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

        {/* Progress indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-rose-300/30 text-sm mb-4">
            {dayOrder.filter((slug) => days[slug].unlocked).length} of{" "}
            {dayOrder.length} surprises unlocked
          </p>
          <div className="max-w-md mx-auto h-2 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-rose-500 to-pink-400 rounded-full"
              initial={{ width: 0 }}
              whileInView={{
                width: `${(dayOrder.filter((slug) => days[slug].unlocked).length / dayOrder.length) * 100}%`,
              }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
        </motion.div>
      </section>

      {/* Footer love note - enhanced */}
      <footer className="relative z-20 text-center py-20 px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-rose-500/10 pt-12 max-w-2xl mx-auto"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <p className="text-rose-200/70 text-base md:text-lg mb-3 font-medium">
              Made with all my heart, just for you{" "}
              <motion.span
                className="inline-block"
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  times: [0, 0.25, 0.35],
                }}
              >
                ❤️
              </motion.span>
            </p>
          </motion.div>
          <p
            className="text-rose-200/55 text-base md:text-lg mt-2 italic"
            style={{ fontFamily: "var(--font-great-vibes)" }}
          >
            Every moment with you is my favorite moment
          </p>
          <motion.div
            className="flex justify-center gap-2 mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {["💕", "💖", "💗", "💘", "💝"].map((heart, i) => (
              <motion.span
                key={i}
                className="text-lg"
                animate={{
                  y: [0, -5, 0],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                }}
              >
                {heart}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </footer>
    </main>
  );
}
