"use client";
import { motion } from "framer-motion";
import { Calendar, Users, Briefcase, Building2 } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Badan Pengurus Bidang KASERA",
      org: "Himpunan Mahasiswa Teknik Bangunan (HMTB) UPI",
      period: "2025 - Sekarang",
      desc: "Berperan dalam merancang dan menjalankan program internal untuk meningkatkan kenyamanan serta keterlibatan anggota, mengelola data keanggotaan, serta membantu koordinasi kegiatan seni dan olahraga di lingkungan HMTB.",
      type: "Organisasi",
      color: "text-kh-pink",
      bg: "bg-kh-pink/10",
      border: "border-kh-pink/20",
      icon: <Users size={18} />
    },
    {
      id: 2,
      role: "Siswi Praktik Kerja Lapangan (PKL)",
      org: "Institut Teknologi Bandung (ITB)",
      period: "Januari 2023 - Juni 2023",
      // NOTE: Deskripsi di bawah ini saya ambil dari chat Anda (tentang mimpin panitia). 
      // Jika ini deskripsi PKL Teknis (misal: Jaringan/Admin), silakan diganti ya.
      desc: "Menjalani praktik kerja industri dengan fokus pada dukungan teknis dan administrasi jaringan, serta berkolaborasi dengan staf ITB dalam pemeliharaan infrastruktur kampus.", 
      type: "Magang",
      color: "text-kh-blue",
      bg: "bg-kh-blue/10",
      border: "border-kh-blue/20",
      icon: <Briefcase size={18} />
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* JUDUL */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-4xl font-extrabold text-white mb-4">
              <span className="text-kh-blue">Experience</span>
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto">
              Pengalaman organisasi dan profesional yang membentuk pribadi dan kompetensi saya saat ini.
            </p>
        </motion.div>

        {/* LIST EXPERIENCE */}
        <div className="relative space-y-8">
            
            {/* Garis Vertikal di Kiri */}
            <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-kh-pink via-kh-blue to-transparent md:left-0"></div>

            {experiences.map((item, index) => (
                <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="relative pl-12 md:pl-10"
                >
                    {/* DOT INDIKATOR */}
                    <div className={`absolute left-[11px] md:left-[-5px] top-6 w-3 h-3 rounded-full border-2 border-dark-bg ${item.id === 1 ? 'bg-kh-pink shadow-[0_0_10px_#fb7185]' : 'bg-kh-blue shadow-[0_0_10px_#38bdf8]'} z-10`}></div>

                    {/* KARTU KONTEN */}
                    <div className="group bg-card-bg border border-white/5 p-6 md:p-8 rounded-3xl hover:border-white/20 transition-all hover:shadow-xl relative overflow-hidden">
                        
                        {/* Background Glow Halus saat Hover */}
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-r ${item.id === 1 ? 'from-kh-pink to-transparent' : 'from-kh-blue to-transparent'}`}></div>

                        <div className="relative z-10">
                            {/* Header: Badge Type & Date */}
                            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                                <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${item.bg} ${item.color} ${item.border} border`}>
                                    {item.icon} {item.type}
                                </span>
                                <span className="flex items-center gap-2 text-sm text-gray-500 font-mono bg-white/5 px-3 py-1 rounded-lg">
                                    <Calendar size={14}/> {item.period}
                                </span>
                            </div>

                            {/* Role & Org */}
                            <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-kh-blue transition-colors">
                                {item.role}
                            </h3>
                            <div className="flex items-center gap-2 text-gray-400 font-medium mb-6">
                                <Building2 size={16} className={item.color}/>
                                {item.org}
                            </div>

                            {/* Deskripsi */}
                            <p className="text-gray-300 leading-relaxed text-sm md:text-base border-t border-white/5 pt-4">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
}
