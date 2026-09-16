import React from 'react';
import { useSite } from '../context/SiteContext';

export function Profile() {
  const { content } = useSite();

  return (
    <section className="py-16 px-4 md:px-16 max-w-5xl mx-auto border-t border-slate-200 dark:border-slate-800">
      <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-slate-100 mb-12">
        {content.profile.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Sol Kart: Basic Information */}
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700">
          <h3 className="font-serif text-pink-600 text-2xl mb-6">
            {content.profile.basicInfoTitle}
          </h3>
          <div className="space-y-4 text-sm">
            {content.profile.basicInfo.map((item, index) => (
              <div key={index} className="flex justify-between items-center pb-2">
                <span className="font-bold text-slate-900 dark:text-slate-200">{item.label}</span>
                <span className="text-slate-600 dark:text-slate-400">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sağ Bilgi: About Me */}
        <div className="space-y-4 pt-2">
          <h3 className="font-serif text-2xl text-slate-900 dark:text-slate-100 relative inline-block z-10">
            <span className="relative z-10">{content.profile.aboutMeTitle}</span>
            <span className="absolute bottom-1 left-0 w-full h-2.5 bg-[#82BBFF] -z-10 rounded-sm"></span>
          </h3>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm whitespace-pre-line">
            {content.profile.aboutMeText}
          </p>
        </div>
      </div>
    </section>
  );
}