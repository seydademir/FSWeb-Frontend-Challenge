import React from 'react';
import { useSite } from '../context/SiteContext';

export function Skills() {
  const { content, lang } = useSite();

  return (
    <section className="py-16 px-4 md:px-16 max-w-5xl mx-auto border-t border-slate-200 dark:border-slate-800">
      <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-slate-100 mb-12">
        {lang === 'tr' ? 'Yetenekler' : 'Skills'}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center">
        {content.skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center gap-3">
            <div className="w-20 h-20 rounded-2xl bg-white dark:bg-slate-800 shadow-md flex items-center justify-center p-4 border border-slate-100 dark:border-slate-700">
              <img src={skill.icon} alt={skill.name} className="w-10 h-10 object-contain" />
            </div>
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 tracking-wider uppercase">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}