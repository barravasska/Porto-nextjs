"use client";
import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-dark-bg">
      {/* Blob 1: Pink */}
      <motion.div
        animate={{
          x: [-20, 20, -20],
          y: [-20, 20, -20],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
        className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] bg-kh-pink/20 rounded-full blur-[120px] opacity-60 mix-blend-screen"
      />

      {/* Blob 2: Biru */}
      <motion.div
        animate={{
          x: [20, -20, 20],
          y: [20, -20, 20],
          scale: [1.1, 1, 1.1],
        }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-[20%] right-[10%] w-[40vw] h-[40vw] bg-kh-blue/20 rounded-full blur-[120px] opacity-60 mix-blend-screen"
      />

      {/* Blob 3: Tengah Bawah */}
      <motion.div
        animate={{
          x: [-50, 50, -50],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }}
        className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[40vw] bg-kh-blue/10 rounded-full blur-[130px] opacity-40 mix-blend-screen"
      />
      
      {/* Noise Overlay (Biar ada tekstur pasir halus, ga polos licin) */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>
  );
}