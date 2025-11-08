import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Terima kasih! Pesan Anda sudah terkirim. Saya akan membalas secepatnya.');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative bg-[#0a0a0b] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-2xl md:text-4xl font-semibold">Kontak</h2>
        <p className="mt-3 max-w-2xl text-white/70">
          Ingin berdiskusi atau mulai proyek? Kirimkan pesan melalui formulir ini atau email langsung ke
          {' '}<a className="underline hover:text-white" href="mailto:hello@zakhari.id">hello@zakhari.id</a>.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label className="text-sm text-white/70">Nama</label>
            <input required type="text" className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-white/30 focus:outline-none" placeholder="Nama Anda" />
          </div>
          <div className="sm:col-span-1">
            <label className="text-sm text-white/70">Email</label>
            <input required type="email" className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-white/30 focus:outline-none" placeholder="email@domain.com" />
          </div>
          <div className="sm:col-span-2">
            <label className="text-sm text-white/70">Pesan</label>
            <textarea required rows="5" className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-white/30 focus:outline-none" placeholder="Ceritakan kebutuhan Anda"></textarea>
          </div>
          <div className="sm:col-span-2 flex items-center justify-between gap-3">
            <button type="submit" className="rounded-md bg-white px-5 py-3 text-sm font-medium text-black hover:bg-white/90 transition">Kirim Pesan</button>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-sm text-white/70 hover:text-white">LinkedIn</a>
          </div>
        </form>

        {status && (
          <div className="mt-4 rounded-md border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
            {status}
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
