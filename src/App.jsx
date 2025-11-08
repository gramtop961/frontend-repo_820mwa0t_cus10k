import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-[#0a0a0b] font-sans text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0b]/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="text-sm font-medium text-white/80">Zakhari • Prompt Writer</a>
          <nav className="hidden gap-6 text-sm text-white/70 md:flex">
            <a href="#services" className="hover:text-white">Layanan</a>
            <a href="#about" className="hover:text-white">Tentang</a>
            <a href="#portfolio" className="hover:text-white">Portofolio</a>
            <a href="#contact" className="hover:text-white">Kontak</a>
          </nav>
          <a href="#contact" className="rounded-md bg-white px-4 py-2 text-xs font-medium text-black hover:bg-white/90">Hubungi Saya</a>
        </div>
      </header>

      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-[#0a0a0b] py-8">
        <div className="mx-auto max-w-7xl px-6 text-sm text-white/60">
          <p>© {new Date().getFullYear()} Zakhari — Menjembatani Imajinasi Manusia dengan Kekuatan AI</p>
          <p className="mt-1 text-xs">Optimized for: Jasa Prompt Writer Indonesia • Ahli Prompt AI • Konsultan ChatGPT</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
