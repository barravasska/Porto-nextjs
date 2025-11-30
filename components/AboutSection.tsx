"use client";
import Image from "next/image";
import { MapPin, Mail, School, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* JUDUL YANG LEBIH RAPI */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            {/* Label kecil pakai Pink */}
            <h3 className="text-kh-pink font-bold uppercase tracking-[0.2em] mb-3 text-sm">
            Profil Lengkap
            </h3>
            {/* Judul Besar Putih polos biar bersih */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Tentang Saya
            </h2>
            {/* Garis bawah gradient */}
            <div className="w-20 h-1.5 bg-gradient-to-r from-kh-pink to-kh-blue mx-auto rounded-full"></div>
        </motion.div>
        <div className="grid md:grid-cols-12 gap-12">
            
          {/* KARTU PROFIL KIRI (GLASS EFFECT) */}
          <div className="md:col-span-4">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl sticky top-24"
              >
                  <div className="aspect-square relative rounded-2xl overflow-hidden mb-6 border-2 border-white/10">
                      <Image src="/profile.jpeg" alt="Profile" fill className="object-cover"/>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">Khaylany Nizard R.</h3>
                  <p className="text-kh-pink font-medium mb-6">Mahasiswa Teknik Sipil</p>
                  
                  <div className="space-y-4 text-sm text-gray-300">
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                          <MapPin size={18} className="text-kh-blue"/> Bandung, Indonesia
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                          <Mail size={18} className="text-kh-pink"/> khaylany30@upi.edu
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                          <School size={18} className="text-kh-yellow"/> Univ. Pendidikan Indonesia
                      </div>
                  </div>

                  <a href="resume.pdf" className="block w-full text-center mt-8 py-3 rounded-xl bg-white text-dark-bg font-bold hover:bg-gray-200 transition">
                      Download CV
                  </a>
              </motion.div>
          </div>

          {/* KONTEN KANAN */}
          <div className="md:col-span-8 space-y-12">
              
              {/* Deskripsi */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                  <h3 className="text-2xl font-bold text-white mb-4">Background</h3>
                  <p className="text-gray-400 leading-relaxed text-lg text-justify">
                    Saya adalah mahasiswa aktif program studi <strong className="text-white">Pendidikan Teknik Bangunan di UPI</strong>. 
                    Memiliki ketertarikan mendalam pada dunia konstruksi, mulai dari perencanaan desain hingga manajemen lapangan. 
                    Saya percaya bahwa engineer yang baik tidak hanya pandai berhitung, tapi juga mampu berkomunikasi dan bekerja dalam tim.
                  </p>
              </motion.div>
              
              {/* Pendidikan */}
              <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Pendidikan</h3>
                  <div className="relative border-l border-gray-800 ml-3 space-y-8 pl-8">
                      {/* Item 1 */}
                      <div className="relative">
                          <span className="absolute -left-[41px] top-1 w-6 h-6 bg-kh-blue rounded-full border-4 border-dark-bg"></span>
                          <h4 className="text-xl font-bold text-white">Universitas Pendidikan Indonesia</h4>
                          <p className="text-kh-blue font-medium mb-1">S1 Pendidikan Teknik Bangunan</p>
                          <p className="text-sm text-gray-500">2024 - Sekarang</p>
                      </div>
                      {/* Item 2 */}
                      <div className="relative">
                          <span className="absolute -left-[41px] top-1 w-6 h-6 bg-gray-700 rounded-full border-4 border-dark-bg"></span>
                          <h4 className="text-xl font-bold text-white">SMK Negeri 2 Kota Bandung</h4>
                          <p className="text-gray-400 font-medium mb-1">Teknik Komputer & Jaringan</p>
                          <p className="text-sm text-gray-500">2021 - 2024</p>
                      </div>
                  </div>
              </div>

              {/* Skills Bar */}
              <div>
                 <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
                 <div className="grid md:grid-cols-2 gap-6">
                    {[
                        { name: "AutoCAD 2D/3D", level: "55%", color: "bg-kh-pink" },
                        { name: "Mikrotik", level: "85%", color: "bg-kh-blue" },
                        { name: "SketchUp", level: "50%", color: "bg-kh-yellow" },
                        { name: "Fiber Optic", level: "95%", color: "bg-kh-green" }
                    ].map((skill, idx) => (
                        <div key={idx} className="bg-white/5 p-4 rounded-xl border border-white/5">
                            <div className="flex justify-between mb-2 font-bold text-sm">
                                <span className="text-gray-200">{skill.name}</span>
                                <span className="text-gray-400">{skill.level}</span>
                            </div>
                            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                <motion.div 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: skill.level }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    className={`h-full ${skill.color} rounded-full`}
                                ></motion.div>
                            </div>
                        </div>
                    ))}
                 </div>
              </div>

          </div>
        </div>
      </div>
    </section>
  );
}
