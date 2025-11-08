import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-[#0a0a0b] text-white">
      {/* Background animation */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay for contrast (doesn't block pointer events) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-[#0a0a0b]/50" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 pb-16 text-center md:pt-32">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs md:text-sm text-white/80">
          Zakhari • Prompt Writer
        </span>
        <h1 className="mt-6 text-3xl leading-tight font-semibold md:text-6xl">
          Menjembatani Imajinasi Manusia
          <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-amber-300 bg-clip-text text-transparent">dengan Kekuatan AI</span>
        </h1>
        <p className="mt-5 max-w-2xl text-white/80 md:text-lg">
          Saya membantu bisnis dan individu mendapatkan hasil terbaik dari AI melalui prompt yang dirancang secara ahli — jelas, efisien, dan tepat sasaran.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a href="#services" className="rounded-md bg-white text-black px-5 py-3 text-sm font-medium hover:bg-white/90 transition">
            Lihat Layanan Saya
          </a>
          <a href="#contact" className="rounded-md border border-white/20 px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition">
            Hubungi Saya
          </a>
        </div>

        {/* Logos / Tools */}
        <div className="mt-14 w-full max-w-4xl">
          <p className="text-xs uppercase tracking-widest text-white/60">Tools & Model yang Saya Gunakan</p>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {['ChatGPT','Gemini','Midjourney / Image Models','Manus AI'].map((label) => (
              <div key={label} className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 backdrop-blur">
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
