import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative bg-[#0a0a0b] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold">Tentang Zakhari</h2>
            <p className="mt-4 text-white/80">
              Saya seorang Prompt Writer yang berfokus pada hasil. Bagi saya, prompt bukan sekadar kalimat — ia adalah instruksi strategis yang menerjemahkan tujuan bisnis ke dalam bahasa yang dipahami AI.
            </p>
            <p className="mt-3 text-white/70">
              Pekerjaan saya adalah menerjemahkan tujuan bisnis Anda menjadi output yang presisi: menghemat waktu, biaya, dan menghilangkan rasa frustasi karena hasil yang tidak konsisten.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-medium">Keahlian & Tools</h3>
            <ul className="mt-3 list-disc pl-5 text-white/80 space-y-1">
              <li>ChatGPT untuk generatif teks dan reasoning</li>
              <li>Gemini untuk eksplorasi multi-modal</li>
              <li>Manus AI dan model image (seperti Midjourney/Stable Diffusion) untuk aset visual</li>
              <li>Framework prompt yang dapat diulang dan diukur performanya</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
