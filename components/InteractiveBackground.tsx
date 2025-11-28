"use client";

import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; 

export default function InteractiveBackground() {
  // Inisialisasi engine particles (hanya sekali jalan)
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  // Callback setelah particles dimuat (opsional)
  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // console.log(container);
  }, []);

  return (
    <div className="fixed inset-0 -z-50 pointer-events-none">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-kh-blue/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-kh-pink/10 rounded-full blur-[120px] -z-10"></div>

      {/* KONFIGURASI PARTIKEL INTERAKTIF */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        className="absolute inset-0 h-full w-full"
        options={{
          fullScreen: { enable: false, zIndex: -1 },
          background: {
            color: { value: "transparent" }, 
          },
          fpsLimit: 120, // Gerakan smooth di layar high refresh rate
          interactivity: {
            events: {
            //   onClick: { enable: true, mode: "push" }, // Kalau mau klik nambah partikel
              onHover: {
                enable: true,
                mode: "grab", // Mode GRAB: Mouse menarik garis ke partikel terdekat
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 200, // Jarak respons mouse
                links: {
                  opacity: 0.5, // Garis jadi lebih terang saat kena mouse
                  color: "#38bdf8" // Warna garis saat kena mouse (kh-blue)
                }
              },
            },
          },
          particles: {
            // Warna titik-titik (Biru-abu samar biar kaya blueprint)
            color: { value: "#94a3b8" }, 
            links: {
              // Garis penghubung default
              color: "#64748b",
              distance: 150,
              enable: true,
              opacity: 0.15, // Sangat samar kalau ga kena mouse
              width: 1,
            },
            // Gerakan default partikel
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: false,
              speed: 0.8, // Gerak pelan elegan
              straight: false,
            },
            number: {
              density: { enable: true, area: 800 },
              value: 60, // Jumlah partikel (jangan kebanyakan nanti berat)
            },
            opacity: {
              value: 0.3, // Titiknya samar aja
            },
            shape: {
              type: "circle", // Bentuk titik
            },
            size: {
              value: { min: 1, max: 3 }, // Ukuran titik variatif
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}