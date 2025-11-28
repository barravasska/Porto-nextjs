import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import InteractiveBackground from "@/components/InteractiveBackground"; // <--- YANG BARU
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({ subsets: ["latin"] });  

export const metadata: Metadata = {
  title: "Khaylany Nizard R. | Portfolio",
  description: "Mahasiswa Pendidikan Teknik Bangunan UPI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <ScrollProgress />
        
        {/* GANTI KOMPONEN DI SINI */}
        <InteractiveBackground /> 
        
        {children}
      </body>
    </html>
  );
}