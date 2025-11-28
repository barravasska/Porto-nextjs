"use client";
import { Mail, MapPin, Send, Instagram, Linkedin, ArrowUp, CheckCircle } from "lucide-react";
// Import Formspree
import { useForm, ValidationError } from '@formspree/react';

export default function Footer() {
  // --- SETUP FORMSPREE ---
  // Masukkan ID Formspree Anda di sini (contoh: "xmqbwvza")
  const [state, handleSubmit] = useForm("mvgjdbel");

  return (
    <footer id="contact" className="bg-dark-bg border-t border-white/5 pt-40 pb-20 px-6 relative overflow-hidden min-h-[600px] flex flex-col justify-center">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-kh-blue/10 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-kh-pink/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        
        <div className="grid md:grid-cols-2 gap-16 mb-20">
            
            {/* KOLOM KIRI: Info Kontak */}
            <div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                  Mari Kita Buat <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-kh-pink to-kh-blue">
                    Sesuatu yang Hebat.
                  </span>
                </h2>
                <p className="text-gray-400 mb-10 text-lg leading-relaxed">
                  Punya ide tugas, project freelance, mau kolaborasi, atau sekadar diskusi soal dunia teknik sipil? Langsung aja hubungi aku—santai, nggak perlu sungkan.
                </p>

                <div className="space-y-6">
                    <a href="mailto:khaylany30@upi.edu" className="flex items-center gap-4 group">
                        <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:border-kh-pink/50 group-hover:bg-kh-pink/10 transition-all">
                            <Mail size={24} className="text-kh-pink"/>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Email Saya</p>
                            <p className="text-xl text-white font-medium group-hover:text-kh-pink transition">khaylany30@upi.edu</p>
                        </div>
                    </a>

                    <div className="flex items-center gap-4 group">
                        <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:border-kh-blue/50 group-hover:bg-kh-blue/10 transition-all">
                            <MapPin size={24} className="text-kh-blue"/>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Lokasi</p>
                            <p className="text-xl text-white font-medium">Bandung, Jawa Barat</p>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4 mt-10">
                    <a href="https://www.instagram.com/khaylanyrahwanyy/?utm_source=ig_web_button_share_sheet" className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:text-white text-gray-400 transition"><Instagram size={20}/></a>
                    <a href="https://www.linkedin.com/in/khaylany-rahwany-655997265/" className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:text-white text-gray-400 transition"><Linkedin size={20}/></a>
                </div>
            </div>

            {/* KOLOM KANAN: Formulir Formspree */}
            <div className="bg-card-bg p-8 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-kh-pink/20 to-transparent blur-2xl -z-10"></div>
                
                {state.succeeded ? (
                    // TAMPILAN SUKSES
                    <div className="h-full flex flex-col items-center justify-center text-center py-10">
                        <CheckCircle size={64} className="text-kh-green mb-4 animate-bounce"/>
                        <h3 className="text-2xl font-bold text-white mb-2">Pesan Terkirim!</h3>
                        <p className="text-gray-400">Terima kasih, saya akan membalas secepatnya.</p>
                        {/* Tombol Reload halaman jika mau kirim lagi */}
                        <button 
                            onClick={() => window.location.reload()} 
                            className="mt-6 text-sm text-kh-blue hover:underline"
                        >
                            Kirim pesan lagi
                        </button>
                    </div>
                ) : (
                    // TAMPILAN FORM
                    <>
                        <h3 className="text-2xl font-bold text-white mb-6">Kirim Pesan</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 font-medium ml-1">Nama</label>
                                    <input 
                                        id="name"
                                        type="text" 
                                        name="name" // WAJIB ADA NAME
                                        placeholder="Nama Anda" 
                                        required
                                        className="w-full bg-dark-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-kh-pink/50 focus:ring-1 focus:ring-kh-pink/50 transition"
                                    />
                                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 font-medium ml-1">Email</label>
                                    <input 
                                        id="email"
                                        type="email" 
                                        name="email" // WAJIB ADA NAME
                                        placeholder="email@anda.com" 
                                        required
                                        className="w-full bg-dark-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-kh-pink/50 focus:ring-1 focus:ring-kh-pink/50 transition"
                                    />
                                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 font-medium ml-1">Pesan</label>
                                <textarea 
                                    id="message"
                                    name="message" // WAJIB ADA NAME
                                    rows={4} 
                                    placeholder="Tulis pesan atau tawaran proyek..." 
                                    required
                                    className="w-full bg-dark-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-kh-pink/50 focus:ring-1 focus:ring-kh-pink/50 transition resize-none"
                                ></textarea>
                                <ValidationError prefix="Message" field="message" errors={state.errors} />
                            </div>
                            
                            <button 
                                type="submit" 
                                disabled={state.submitting}
                                className="w-full py-4 rounded-xl bg-gradient-to-r from-kh-blue to-blue-600 text-white font-bold text-lg hover:shadow-lg hover:shadow-kh-blue/25 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {state.submitting ? (
                                    "Mengirim..."
                                ) : (
                                    <><Send size={20} /> Kirim Sekarang</>
                                )}
                            </button>
                        </form>
                    </>
                )}
            </div>

        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-sm text-gray-600 gap-4">
          <p>© {new Date().getFullYear()} Khaylany Nizard R. All rights reserved.</p>
          
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 hover:text-kh-blue transition cursor-pointer px-4 py-2 rounded-full hover:bg-white/5"
          >
            Back to Top <ArrowUp size={14}/>
          </button>
        </div>
      </div>
    </footer>
  );
}