"use client";
import { motion } from "framer-motion";

export default function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
      
      {/* 1. Bola Pink (Gerak Acak) */}
      <motion.div
        animate={{
          x: [0, 100, -50, 20, 0],
          y: [0, -50, 50, -20, 0],
          scale: [1, 1.2, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 20, // Durasi lama biar pelan & elegan
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-kh-pink/20 rounded-full blur-[120px] opacity-50"
      />

      {/* 2. Bola Biru (Gerak Acak Arah Sebaliknya) */}
      <motion.div
        animate={{
          x: [0, -100, 50, -20, 0],
          y: [0, 100, -50, 20, 0],
          scale: [1, 1.3, 0.8, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-kh-blue/20 rounded-full blur-[120px] opacity-50"
      />

      {/* 3. Bola Tengah (Kuning Tipis) */}
      <motion.div
        animate={{
          x: [0, 50, -50, 0],
          y: [0, 50, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-kh-yellow/10 rounded-full blur-[100px]"
      />
    </div>
  );
}