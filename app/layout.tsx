import type { Metadata } from "next";
// 1. Ganti import dari 'Inter' menjadi 'Plus_Jakarta_Sans'
import { Plus_Jakarta_Sans } from "next/font/google"; 
import "./globals.css";
import InteractiveBackground from "@/components/InteractiveBackground"; 
import ScrollProgress from "@/components/ScrollProgress";

// 2. Konfigurasi Font (Pilih ketebalan yang mau dipakai)
const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"], // Load semua ketebalan
  variable: "--font-jakarta", // Opsional: buat variabel CSS
});

export const metadata: Metadata = {
  title: "Khaylany Nizard R. | Portfolio",
  description: "Mahasiswa Pendidikan Teknik Bangunan UPI",
  icons: {
    icon: "/icon.png", // Pastikan favicon sudah ada
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 3. Masukkan class font ke body */}
      <body className={jakarta.className}>
        <ScrollProgress />
        <InteractiveBackground />
        
        {children}
      </body>
    </html>
  );
}