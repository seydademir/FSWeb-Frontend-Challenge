import React from 'react';
import { useSite } from '../context/SiteContext';

export function Footer() {
  const { content } = useSite();

  return (
    <footer className="py-20 px-4 md:px-16 max-w-5xl mx-auto border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-8">
      {/* Sol Slogan */}
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 max-w-md text-center md:text-left leading-snug">
        Let’s{' '}
        <span className="relative inline-block z-10">
          work together
          <span className="absolute bottom-1 left-0 w-full h-3 bg-[#82BBFF] -z-10 rounded-sm"></span>
        </span>{' '}
        on your next product.
      </h2>

      {/* Sağ Linkler */}
      <div className="flex flex-col space-y-2 text-center md:text-right font-medium text-base">
        <a href="https://github.com" target="_blank" rel="noreferrer" className="text-[#0077B6] dark:text-sky-400 hover:underline">
          {content.footer.github}
        </a>
        <a href="#" className="text-slate-900 dark:text-slate-200 hover:underline">
          {content.footer.blog}
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-[#0077B6] dark:text-sky-400 hover:underline">
          {content.footer.linkedin}
        </a>
        <a href="mailto:seyda@example.com" className="text-[#EA0054] hover:underline">
          {content.footer.email}
        </a>
      </div>
    </footer>
  );
}