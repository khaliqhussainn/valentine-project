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
      whileHover={unlocked ? { scale: 1.05, y: -5 } : {}}
      className={`relative group rounded-2xl border p-6 text-center transition-all duration-300 ${
        unlocked
          ? "border-rose-500/30 bg-gradient-to-br from-rose-950/50 to-pink-950/30 hover:border-rose-400/60 hover:shadow-[0_0_30px_rgba(255,0,80,0.2)] cursor-pointer"
          : "border-white/10 bg-white/5 opacity-50 cursor-not-allowed"
      }`}
    >
      {/* Locked overlay */}
      {!unlocked && (
        <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black/40 backdrop-blur-sm z-10">
          <motion.span
            className="text-3xl"
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🔒
          </motion.span>
        </div>
      )}

      <motion.span
        className="text-4xl block mb-3"
        animate={
          unlocked
            ? {
                scale: [1, 1.2, 1],
              }
            : {}
        }
        transition={{ duration: 2, repeat: Infinity }}
      >
        {emoji}
      </motion.span>
      <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
      <p className="text-sm text-rose-300/60">{date}</p>

      {unlocked && (
        <motion.div
          className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,0,80,0.3), rgba(255,100,150,0.1))",
          }}
        />
      )}
    </motion.div>
  );

  if (unlocked) {
    return <Link href={`/day/${slug}`}>{content}</Link>;
  }

  return content;
}
