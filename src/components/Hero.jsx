import React from 'react';
import { useSite } from '../context/SiteContext';
import profileImg from '../assets/profile.jpeg';

export function Hero() {
  const { content } = useSite();

  return (
    <section className="py-8 px-4 md:px-16 max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
      {/* Sol Taraf: Metin İçeriği */}
      <div className="flex-1 space-y-6">
        <p className="text-lg font-medium text-slate-800 dark:text-slate-200">
          {content.hero.greeting}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 leading-tight">
          {content.hero.intro}{' '}
          <span className="relative inline-block z-10">
            {content.hero.name}.
            <span className="absolute bottom-1 left-0 w-full h-3 bg-pink-500 -z-10 rounded-sm"></span>
          </span>{' '}
          {content.hero.title}
        </h1>

        {/* Sosyal Medya İkonları */}
        <div className="flex items-center gap-4 text-slate-800 dark:text-slate-200 pt-2">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-pink-600 transition-colors">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-pink-600 transition-colors">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
            </svg>
          </a>
        </div>

        {/* Status & Mail Satırı */}
        <p className="text-xs text-slate-600 dark:text-slate-400 pt-2 leading-relaxed">
          {content.hero.status}
          <a href={`mailto:${content.hero.email}`} className="text-pink-600 dark:text-pink-400 font-semibold underline ml-1">
            {content.hero.email}
          </a>
        </p>
      </div>

      {/* Sağ Taraf: Profil Görseli & Pembe Çerçeve */}
      <div className="relative flex-shrink-0">
        <div className="w-64 h-64 md:w-72 md:h-72 rounded-3xl overflow-hidden border-8 border-pink-500 shadow-xl">
          <img
            src={profileImg}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}