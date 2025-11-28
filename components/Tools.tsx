import Image from "next/image";
import { MapPin, Mail, School } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        
        {/* --- BAGIAN JUDUL --- */}
        <div className="text-center mb-16 relative">
            <h3 className="text-kh-pink font-bold uppercase tracking-widest mb-2 text-sm">Profil Lengkap</h3>
            <h2 className="text-4xl font-extrabold text-white inline-block relative z-10">
              Tentang <span className="text-kh-blue">Saya</span>
               {/* Garis bawah pink */}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-kh-pink rounded-full -z-10"></span>
            </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-12">
            
          {/* --- KOLOM KIRI: KARTU PROFIL (Sekitar 4/12 lebar) --- */}
          <div className="md:col-span-4">
              <div className="bg-card-bg p-6 rounded-2xl border border-white/5 shadow-xl">
                  <div className="aspect-square relative rounded-xl overflow-hidden mb-6">
                      <Image src="/profile.jpg" alt="Profile" fill className="object-cover"/>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">Khaylany Nizard R.</h3>
                  <p className="text-kh-pink font-medium mb-6">Civil Engineering Student</p>
                  
                  <div className="space-y-3 text-sm text-gray-400">
                      <div className="flex items-center gap-3">
                          <MapPin size={18} className="text-gray-500"/> Bandung, Indonesia
                      </div>
                      <div className="flex items-center gap-3">
                          <Mail size={18} className="text-gray-500"/> khaylany30@upi.edu
                      </div>
                      <div className="flex items-center gap-3">
                          <School size={18} className="text-gray-500"/> Univ. Pendidikan Indonesia
                      </div>
                  </div>
              </div>
          </div>

          {/* --- KOLOM KANAN: TEKS & SKILLS (Sekitar 8/12 lebar) --- */}
          <div className="md:col-span-8 space-y-12">
              
              {/* Teks Deskripsi */}
              <div>
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                      <span className="w-1 h-8 bg-kh-pink rounded-full"></span>
                      Sekilas Tentang Saya
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Saat ini saya sedang menempuh pendidikan sebagai mahasiswa aktif program studi 
                    <strong className="text-white"> Pendidikan Teknik Bangunan di Fakultas Pendidikan Teknologi dan Industri, Universitas Pendidikan Indonesia.</strong> 
                    Di tengah kesibukan akademis mendalami ilmu rekayasa konstruksi, saya menyadari bahwa keberhasilan sebuah proyek tidak hanya bergantung pada perhitungan teknis, melainkan juga pada manajemen sumber daya manusia yang handal.
                    <br/><br/>
                    Oleh karena itu, saya secara konsisten mengasah soft skill saya, khususnya dalam kemampuan berkomunikasi dan beradaptasi. Saya dikenal sebagai pribadi yang mudah berbaur di lingkungan baru dan sangat menjunjung tinggi nilai kerjasama tim.
                  </p>
              </div>
              
              {/* Riwayat Pendidikan (Dari Gambar 3) */}
              <div>
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                      <span className="w-1 h-8 bg-kh-blue rounded-full"></span>
                      Riwayat Pendidikan
                  </h3>
                  <div className="space-y-4">
                      {/* Card UPI */}
                      <div className="bg-card-bg p-6 rounded-xl border border-white/5 flex justify-between items-center">
                          <div>
                              <h4 className="text-white font-bold text-lg">Universitas Pendidikan Indonesia</h4>
                              <p className="text-kh-blue font-medium">S1 Pendidikan Teknik Bangunan</p>
                          </div>
                          <span className="text-sm text-white bg-white/10 px-3 py-1 rounded-full">2024 - Sekarang</span>
                      </div>
                      {/* Card SMK */}
                      <div className="bg-card-bg p-6 rounded-xl border border-white/5 flex justify-between items-center">
                          <div>
                              <h4 className="text-white font-bold text-lg">SMK Negeri 2 Kota Bandung</h4>
                              <p className="text-gray-400">Jurusan Teknik Komputer dan Jaringan</p>
                          </div>
                          <span className="text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full">2021 - 2024</span>
                      </div>
                  </div>
              </div>

              {/* Keahlian Teknis (Progress Bars) - Dari Gambar 5 */}
              <div>
                 <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                      <span className="w-1 h-8 bg-kh-pink rounded-full"></span>
                      Keahlian Teknis
                  </h3>
                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                      {/* Skill Item: AutoCAD */}
                      <div>
                          <div className="flex justify-between mb-2 font-bold"><span className="text-white">AutoCAD 2D/3D</span><span className="text-kh-pink">Advanced</span></div>
                          <div className="h-3 bg-gray-800 rounded-full overflow-hidden"><div className="h-full bg-kh-pink w-[85%] rounded-full"></div></div>
                      </div>
                       {/* Skill Item: SAP2000 */}
                      <div>
                          <div className="flex justify-between mb-2 font-bold"><span className="text-white">SAP2000</span><span className="text-kh-blue">Intermediate</span></div>
                          <div className="h-3 bg-gray-800 rounded-full overflow-hidden"><div className="h-full bg-kh-blue w-[70%] rounded-full"></div></div>
                      </div>
                       {/* Skill Item: SketchUp */}
                      <div>
                          <div className="flex justify-between mb-2 font-bold"><span className="text-white">SketchUp</span><span className="text-kh-yellow">Advanced</span></div>
                          <div className="h-3 bg-gray-800 rounded-full overflow-hidden"><div className="h-full bg-kh-yellow w-[80%] rounded-full"></div></div>
                      </div>
                       {/* Skill Item: Excel/RAB */}
                      <div>
                          <div className="flex justify-between mb-2 font-bold"><span className="text-white">Ms. Excel / RAB</span><span className="text-kh-green">Intermediate</span></div>
                          <div className="h-3 bg-gray-800 rounded-full overflow-hidden"><div className="h-full bg-kh-green w-[75%] rounded-full"></div></div>
                      </div>
                  </div>
              </div>

              {/* Soft Skills Badges - Dari Gambar 5 */}
               <div>
                 <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                      <span className="w-1 h-8 bg-kh-blue rounded-full"></span>
                      Soft Skills
                  </h3>
                  <div className="flex flex-wrap gap-3">
                      {['Public Speaking', 'Team Leadership', 'Problem Solving', 'Time Management', 'Teamwork'].map((skill, idx) => (
                        <span key={idx} className="px-4 py-2 bg-[#1a1f35] text-blue-300 rounded-lg font-semibold text-sm border border-blue-900/50">
                            {skill}
                        </span>
                      ))}
                  </div>
               </div>

          </div>
        </div>
      </div>
    </section>
  );
}