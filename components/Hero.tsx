"use client"; // Wajib ditambahkan karena pakai animasi
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion"; // Import animasi

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-6 min-h-screen flex items-center relative overflow-hidden">
      
      {/* Background Glow Abstrak */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-kh-blue/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-kh-pink/10 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* KOLOM KIRI: FOTO */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center order-2 md:order-1"
        >
            {/* Lingkaran Dekorasi Berputar */}
            <div className="absolute w-[320px] h-[320px] md:w-[460px] md:h-[460px] border border-kh-pink/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute w-[340px] h-[340px] md:w-[480px] md:h-[480px] border border-dashed border-kh-blue/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
            
            <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] rounded-[30px] overflow-hidden shadow-2xl shadow-kh-pink/20 z-10 border-4 border-white/5">
                <Image 
                  src="/profile.jpeg" 
                  alt="Khaylany Nizard R." 
                  fill
                  className="object-cover hover:scale-105 transition duration-700"
                  priority
                />
            </div>
        </motion.div>

        {/* KOLOM KANAN: TEKS */}
        <div className="order-1 md:order-2">
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-kh-pink/10 border border-kh-pink/30 text-kh-pink font-bold tracking-widest uppercase mb-4 text-xs">
              Civil Engineering Student
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight text-white">
              Hi, Saya <br />
              {/* Efek mengetik nama */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-kh-blue via-white to-kh-pink inline-flex">
                {Array.from("Khaylany.").map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.1,
                      delay: index * 0.1, // Jeda per huruf
                      type: "spring",
                      stiffness: 100
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            </h1>
            <h2 className="text-xl text-gray-300 mb-6 font-medium">
              Berkuliah di <br/> 
              <span className="text-kh-blue font-bold">Universitas Pendidikan Indonesia</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
              Fokus pada analisis struktur, manajemen konstruksi, dan penerapan teknologi dalam dunia teknik sipil.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <a href="#projects" className="px-8 py-3 rounded-full bg-gradient-to-r from-kh-blue/80 to-kh-pink/80 text-white font-bold hover:opacity-90 transition shadow-lg shadow-kh-blue/20 flex items-center gap-2">
                Lihat Karya <ArrowRight size={20}/>
              </a>
              
              <a href="#about" className="px-8 py-3 rounded-full border border-slate-700 text-slate-300 font-semibold hover:border-kh-pink hover:text-kh-pink transition flex items-center gap-2 bg-white/5">
                Tentang Saya
              </a>
            </div>
             {/* Stats Sederhana */}
             <div className="grid grid-cols-3 gap-6 border-t border-gray-800 pt-8">
                <div>
                   <h4 className="text-2xl font-bold text-white">3rd</h4>
                   <p className="text-xs text-gray-500 uppercase tracking-wider">Semester</p>
                </div>
                <div>
                   <h4 className="text-2xl font-bold text-white">1</h4>
                   <p className="text-xs text-gray-500 uppercase tracking-wider">Project</p>
                </div>
                <div>
                   <h4 className="text-2xl font-bold text-white">UPI</h4>
                   <p className="text-xs text-gray-500 uppercase tracking-wider">Bandung</p>
                </div>
             </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}