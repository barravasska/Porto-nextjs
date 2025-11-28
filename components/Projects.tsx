"use client";
import { useState } from "react";
import { Building, ArrowUpRight, X, ExternalLink, Github, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Tipe data untuk Project
interface Project {
  id: number;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  tech: string[];
  year: string;
  color: string;
  image: string;
}

export default function Projects() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  // --- DATA PROYEK DISESUAIKAN JADI 1 SAJA ---
  const projects: Project[] = [
    { 
      id: 1, 
      title: "Smart Home Maket IoT Project", 
      category: "Engineering", 
      shortDesc: "Perancangan maket rumah pintar otomatis berbasis Internet of Things.",
      fullDesc: "Proyek ini bertujuan mensimulasikan sistem otomatisasi rumah modern sebagai Tugas Besar mata kuliah. Menggunakan sensor gerak, sensor cahaya, dan mikrokontroler untuk mengontrol pencahayaan dan keamanan miniatur rumah secara real-time. Fokus utama adalah pada logika pemrograman dan integrasi hardware.",
      tech: ["Arduino", "C++", "Rangkaian Listrik", "SketchUp (Desain Maket)"],
      year: "2024",
      color: "text-kh-blue",
      image: "" 
    },
    // PROYEK LAIN DI-KOMENTARI DULU SAMPAI ADA ISINYA
    /*
    { 
      id: 2, 
      title: "Desain Struktur Gedung 2 Lantai", 
      // ...
    },
    { 
      id: 3, 
      title: "Estimasi RAB Rumah Type 45", 
       // ...
    },
    */
  ];

  const selectedProject = projects.find((p) => p.id === selectedId);

  return (
    <section id="projects" className="py-24 px-6 font-sans relative">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-16">
             <h2 className="text-4xl font-extrabold text-white mb-4">
              Project <span className="text-kh-pink">Terbaru</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
                Implementasi teori perkuliahan semester awal ke dalam tugas perancangan nyata.
            </p>
        </div>
        
        {/* --- PERUBAHAN LAYOUT UNTUK 1 PROYEK --- */}
        {/* Sebelumnya: grid md:grid-cols-3 */}
        {/* Sekarang: flex justify-center agar kartu ada di tengah */}
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((item, idx) => (
            <motion.div 
                key={item.id}
                layoutId={`card-${item.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedId(item.id)}
                // Menambahkan 'w-full max-w-lg' agar kartu tidak terlalu lebar saat sendirian
                className="group relative bg-card-bg rounded-3xl overflow-hidden border border-white/5 hover:border-kh-pink/50 transition-colors duration-300 cursor-pointer shadow-lg hover:shadow-kh-pink/10 w-full max-w-lg"
            >
              {/* Gambar Placeholder */}
              <div className="h-64 bg-[#1a1f2e] flex items-center justify-center relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-t from-card-bg to-transparent opacity-80 z-10"></div>
                 {/* Ikon dibuat lebih besar sedikit */}
                 <Building size={80} className="text-gray-700 group-hover:scale-110 transition-transform duration-500"/>
              </div>
              
              <div className="p-8 relative z-20 -mt-10">
                <span className={`inline-block text-xs font-extrabold uppercase tracking-wider bg-white/5 px-3 py-1 rounded mb-4 ${item.color}`}>
                  {item.category}
                </span>
                <h4 className="text-2xl font-bold mb-3 text-white leading-tight group-hover:text-kh-pink transition-colors">
                  {item.title}
                </h4>
                <p className="text-base text-gray-400 leading-relaxed mb-8">
                  {item.shortDesc}
                </p>
                
                <div className="flex items-center gap-2 text-white font-bold text-sm group-hover:gap-3 transition-all">
                    Lihat Detail <ArrowUpRight size={16} className="text-kh-pink"/>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- MODAL POPUP (Sama seperti sebelumnya) --- */}
        <AnimatePresence>
          {selectedId && selectedProject && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
              >
                <motion.div
                  layoutId={`card-${selectedId}`} 
                  className="bg-card-bg w-full max-w-2xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative"
                  onClick={(e) => e.stopPropagation()}
                >
                    <button 
                        onClick={() => setSelectedId(null)}
                        className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-kh-pink hover:text-white text-gray-400 rounded-full transition z-20"
                    >
                        <X size={20}/>
                    </button>

                    <div className="h-48 md:h-64 bg-[#111625] flex items-center justify-center relative">
                         <Building size={80} className="text-gray-700 opacity-50"/>
                         <div className={`absolute bottom-4 left-6 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-xs font-bold uppercase tracking-wider ${selectedProject.color}`}>
                            {selectedProject.category}
                         </div>
                    </div>

                    <div className="p-8">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight flex-1 mr-4">
                                {selectedProject.title}
                            </h3>
                            <span className="flex items-center gap-1 text-sm text-gray-500 bg-white/5 px-3 py-1 rounded-lg">
                                <Calendar size={14}/> {selectedProject.year}
                            </span>
                        </div>

                        <p className="text-gray-300 leading-relaxed mb-8 text-base md:text-lg">
                            {selectedProject.fullDesc}
                        </p>

                        <div className="mb-8">
                            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Teknologi & Tools</h4>
                            <div className="flex flex-wrap gap-2">
                                {selectedProject.tech.map((tech, i) => (
                                    <span key={i} className="px-3 py-1 rounded-md bg-white/5 border border-white/5 text-sm text-kh-blue">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Tombol di modal dimatikan dulu karena mungkin belum ada linknya */}
                        <div className="flex gap-4 pt-6 border-t border-white/10 opacity-50 cursor-not-allowed">
                            <div className="flex-1 py-3 rounded-xl bg-kh-pink/50 text-white font-bold text-center flex items-center justify-center gap-2">
                                <ExternalLink size={18}/> Dokumen (Segera)
                            </div>
                        </div>
                    </div>

                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}