import React from 'react';
import { useSite } from '../context/SiteContext';

export function Header() {
  const { theme, toggleTheme, toggleLang, content } = useSite();

  return (
    <header className="py-8 px-4 md:px-16 max-w-5xl mx-auto flex justify-end items-center gap-4 text-xs font-bold tracking-wider">
      {/* Dark Mode Toggle */}
      <div className="flex items-center gap-2 cursor-pointer" onClick={toggleTheme}>
        <div className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${theme === 'dark' ? 'bg-pink-600 justify-end' : 'bg-pink-500 justify-start'}`}>
          <div className="bg-yellow-300 w-4 h-4 rounded-full shadow-md"></div>
        </div>
        <span className="text-slate-500 dark:text-slate-300 uppercase">
          {theme === 'dark' ? content.header.lightMode : content.header.darkMode}
        </span>
      </div>

      <span className="text-slate-300">|</span>

      {/* Language Switch */}
      <button onClick={toggleLang} className="text-pink-600 dark:text-pink-400 font-bold hover:underline cursor-pointer">
        {content.header.languageSwitch}
      </button>
    </header>
  );
}