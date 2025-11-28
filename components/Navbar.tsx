"use client";
import { useState, useEffect } from 'react';
// Tambahkan 'Award' di import ikon
import { Menu, X, Home, User, Briefcase, Mail, Award } from 'lucide-react'; 
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // LIST MENU UPDATE: Tambah "Experience"
  const navLinks = [
    { name: "Home", href: "#home", icon: <Home size={20}/> },
    { name: "About", href: "#about", icon: <User size={20}/> },
    { name: "Experience", href: "#experience", icon: <Award size={20}/> }, // <--- INI BARU
    { name: "Projects", href: "#projects", icon: <Briefcase size={20}/> },
    { name: "Contact", href: "#contact", icon: <Mail size={20}/> },
  ];

  // LOGIC: Deteksi Scroll otomatis
  useEffect(() => {
    const handleScroll = () => {
      // 1. Cek apakah mentok bawah (Active Contact)
      const isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;
      if (isBottom) {
        setActiveSection("contact");
        return;
      }

      // 2. Cek posisi section normal
      const sections = navLinks.map(link => link.name.toLowerCase());
      const scrollPosition = window.scrollY + 300; 

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  return (
    <>
      {/* --- DESKTOP NAVBAR --- */}
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="fixed top-6 left-0 right-0 z-50 hidden md:flex justify-center"
      >
        <div className="bg-dark-bg/60 backdrop-blur-xl border border-white/10 rounded-full px-2 py-2 shadow-2xl shadow-kh-blue/10 flex items-center gap-1">
          
          {/* LOGO */}
          <a href="#home" className="px-4 py-2 font-extrabold text-white tracking-tight mr-2">
            Khaylany<span className="text-kh-pink">.</span>
          </a>

          {/* LINKS */}
          {navLinks.map((link) => {
             const isActive = activeSection === link.name.toLowerCase();
             return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  isActive ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-gradient-to-r from-kh-blue/20 to-kh-pink/20 border border-white/10 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}

          {/* Label Student (Pengganti Hire Me) */}
          <div className="ml-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-500 cursor-default">
            Student
          </div>

        </div>
      </motion.div>


      {/* --- MOBILE NAVBAR --- */}
      <div className="md:hidden fixed top-0 w-full z-50">
        
        <div className="bg-dark-bg/80 backdrop-blur-md border-b border-white/5 px-6 h-16 flex items-center justify-between">
           <div className="text-xl font-extrabold text-white">
              Khaylany<span className="text-kh-pink">.</span>
           </div>
           <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X /> : <Menu />}
           </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-16 left-0 w-full bg-dark-bg border-b border-white/10 shadow-2xl p-4 flex flex-col gap-2"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition text-gray-200"
                >
                  <div className={`p-2 rounded-lg ${activeSection === link.name.toLowerCase() ? 'bg-kh-pink text-white' : 'bg-gray-800 text-gray-400'}`}>
                    {link.icon}
                  </div>
                  <span className="font-semibold text-lg">{link.name}</span>
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}