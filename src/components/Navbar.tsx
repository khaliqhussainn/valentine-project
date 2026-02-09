"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { valentineConfig } from "@/config/valentine";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/5"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-xl"
          >
            💕
          </motion.span>
          <span className="text-lg font-semibold bg-gradient-to-r from-rose-400 to-pink-300 bg-clip-text text-transparent">
            For {valentineConfig.name}
          </span>
        </Link>
        <div className="text-xl text-rose-300/50 hidden sm:block">
          Valentine&apos;s Week 2026
        </div>
      </div>
    </motion.nav>
  );
}
