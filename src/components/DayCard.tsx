"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface DayCardProps {
  slug: string;
  title: string;
  emoji: string;
  date: string;
  unlocked: boolean;
  index: number;
}

export default function DayCard({
  slug,
  title,
  emoji,
  date,
  unlocked,
  index,
}: DayCardProps) {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
      whileHover={unlocked ? { scale: 1.05, y: -8 } : { scale: 1.02 }}
      className={`relative group rounded-3xl border p-6 text-center transition-all duration-500 overflow-hidden ${
        unlocked
          ? "border-rose-500/30 bg-gradient-to-br from-rose-950/50 to-pink-950/30 hover:border-rose-400/60 hover:shadow-[0_0_40px_rgba(255,0,80,0.25)] cursor-pointer"
          : "border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] cursor-not-allowed"
      }`}
      style={{
        backdropFilter: unlocked ? "blur(12px)" : "blur(8px)",
      }}
    >
      {/* Animated gradient background for unlocked cards */}
      {unlocked && (
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background:
              "radial-gradient(circle at center, rgba(255,50,100,0.15) 0%, rgba(255,0,80,0.05) 50%, transparent 100%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}

      {/* Shimmer effect for unlocked cards */}
      {unlocked && (
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
          }}
          animate={{
            x: ["-100%", "200%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
      )}

      {/* Locked overlay */}
      {!unlocked && (
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl bg-black/50 backdrop-blur-md z-10">
          <motion.div
            animate={{ rotate: [0, -5, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          >
            <span className="text-4xl">🔒</span>
          </motion.div>
          <motion.p
            className="text-rose-300/70 text-sm mt-2 font-semibold tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Unlocks {date}
          </motion.p>
        </div>
      )}

      {/* Floating particles for unlocked cards */}
      {unlocked && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-rose-400/30 rounded-full"
              style={{
                left: `${20 + i * 30}%`,
                top: "80%",
              }}
              animate={{
                y: [0, -60, -120],
                opacity: [0, 0.8, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                delay: i * 0.8,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      )}

      {/* Card content */}
      <div className="relative z-[1]">
        {/* Emoji with animation */}
        <motion.span
          className="text-5xl block mb-3"
          animate={
            unlocked
              ? {
                  scale: [1, 1.15, 1],
                  rotate: [0, 5, -5, 0],
                }
              : {}
          }
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {emoji}
        </motion.span>

        {/* Title */}
        <h3
          className={`text-xl font-bold mb-1 transition-colors duration-300 ${
            unlocked ? "text-white group-hover:text-rose-100" : "text-white/60"
          }`}
        >
          {title}
        </h3>

        {/* Date */}
        <p
          className={`text-base font-medium ${
            unlocked ? "text-rose-300/80" : "text-rose-300/40"
          }`}
        >
          {date}
        </p>

        {/* Glow ring for unlocked cards */}
        {unlocked && (
          <motion.div
            className="absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,0,80,0.4), rgba(255,100,150,0.2), rgba(255,0,80,0.4))",
              filter: "blur(8px)",
            }}
          />
        )}
      </div>

      {/* Corner decoration for unlocked cards */}
      {unlocked && (
        <>
          <motion.div
            className="absolute top-2 right-2 text-rose-400/20 text-xs"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            ✦
          </motion.div>
          <motion.div
            className="absolute bottom-2 left-2 text-rose-400/20 text-xs"
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            ✦
          </motion.div>
        </>
      )}
    </motion.div>
  );

  if (unlocked) {
    return <Link href={`/day/${slug}`}>{content}</Link>;
  }

  return content;
}