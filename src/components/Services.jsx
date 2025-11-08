import React from 'react';
import { Rocket, Wrench, Users } from 'lucide-react';

const services = [
  {
    icon: Rocket,
    title: 'Pembuatan Prompt Kustom (Teks & Gambar)',
    desc: 'Saya membuat prompt dari awal sesuai kebutuhan spesifik Anda — dari copywriting, ide konten, hingga aset visual berkualitas.',
  },
  {
    icon: Wrench,
    title: 'Optimasi & Audit Prompt',
    desc: 'Sudah punya prompt tapi hasilnya kurang konsisten? Saya audit dan optimalkan agar akurat, efisien, dan mudah dipakai ulang.',
  },
  {
    icon: Users,
    title: 'Konsultasi & Pelatihan Tim',
    desc: 'Pelatihan praktis untuk tim Anda agar mampu \"berbicara\" dengan AI secara efektif dan terukur dalam workflow harian.',
  },
];

const Services = () => {
  return (
    <section id="services" className="relative bg-[#0a0a0b] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-2xl md:text-4xl font-semibold">Layanan Utama</h2>
        <p className="mt-3 max-w-2xl text-white/70">
          Fokus pada solusi nyata untuk bisnis skala kecil-menengah, tim marketing, kreator konten, dan siapa pun yang ingin memaksimalkan AI.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
