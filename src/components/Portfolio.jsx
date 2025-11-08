import React from 'react';

const cases = [
  {
    title: 'Kafe Rustic — Kampanye Menu Kopi Baru',
    challenge: 'Klien A (sebuah kafe) membutuhkan gambar promosi untuk menu kopi baru mereka yang bergaya rustic.',
    approach: 'Alih-alih prompt sederhana "gambar kopi", saya merancang seri prompt berlapis: pencahayaan golden hour, tekstur kayu hangat, uap (steam) sinematik, depth of field dangkal, komposisi rule of thirds.',
    result: 'Hasilnya: rangkaian visual konsisten yang meningkatkan CTR iklan 28% dan engagement Instagram 2.1x. Tim dapat mem-variasikan angle dengan tetap menjaga gaya brand.',
    simplePrompt: 'kopi di atas meja',
    expertPrompt: 'close-up artisanal latte art on rustic wooden table, golden hour rim light, cinematic steam visible, shallow depth of field, warm tones, high detail, brand color accents, product-centered composition, rule of thirds — for promotional banner',
  },
  {
    title: 'Distro Fashion — Deskripsi Produk Massal',
    challenge: 'Tim e-commerce butuh deskripsi produk cepat untuk 500 SKU tanpa kehilangan tone brand.',
    approach: 'Membangun templat prompt dengan variabel (fit, material, kegunaan) + contoh gaya brand, lalu memasangkan guardrails untuk konsistensi.',
    result: 'Mempercepat penulisan 8x dan menurunkan revisi 60%.',
    simplePrompt: 'tuliskan deskripsi baju',
    expertPrompt: 'Write concise, on-brand product copy for streetwear t-shirt: {fit}, {material}, {use}. Tone: confident, minimal, Bahasa Indonesia. 3 bullet benefits + 1 CTA. 60-80 words. Keep brand voice consistent with provided style guide.',
  },
  {
    title: 'Startup Edukasi — Naskah Video AI',
    challenge: 'Konten video pendek butuh skrip yang padat dan engaging untuk seri edukasi mingguan.',
    approach: 'Merancang prompt dengan struktur hook-problem-solution-CTA + batasan durasi dan ritme kalimat agar mudah di-dub AI voice.',
    result: 'Retention meningkat 35% dan proses produksi lebih terukur.',
    simplePrompt: 'buatkan script video tentang belajar AI',
    expertPrompt: 'You are a scriptwriter. Create a 45-second TikTok script in Indonesian using Hook-Problem-Solution-CTA. Topic: {topik}. Sentences 8-12 words on average. Include beat markers (|) for pacing. Tone: friendly-expert. End with strong CTA.',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="relative bg-[#0a0a0b] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-2xl md:text-4xl font-semibold">Portofolio — Studi Kasus Mini</h2>
        <p className="mt-3 max-w-2xl text-white/70">Tidak hanya hasil akhir. Saya tunjukkan cara berpikir dari prompt biasa menjadi sistem yang andal.</p>

        <div className="mt-10 space-y-8">
          {cases.map((c) => (
            <div key={c.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-medium">{c.title}</h3>
              <div className="mt-4 grid gap-6 md:grid-cols-3">
                <div>
                  <p className="text-sm font-semibold text-white/80">Tantangan</p>
                  <p className="mt-1 text-sm text-white/70">{c.challenge}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white/80">Strategi Prompt</p>
                  <p className="mt-1 text-sm text-white/70">{c.approach}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white/80">Hasil</p>
                  <p className="mt-1 text-sm text-white/70">{c.result}</p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-white/10 bg-black/40 p-4">
                  <p className="text-xs uppercase tracking-wider text-white/60">Prompt Simpel</p>
                  <pre className="mt-2 whitespace-pre-wrap break-words text-sm text-white/80">{c.simplePrompt}</pre>
                </div>
                <div className="rounded-lg border border-white/10 bg-black/40 p-4">
                  <p className="text-xs uppercase tracking-wider text-white/60">Prompt Ahli Saya</p>
                  <pre className="mt-2 whitespace-pre-wrap break-words text-sm text-white/80">{c.expertPrompt}</pre>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
