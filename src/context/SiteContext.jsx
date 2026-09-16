import { createContext, useContext, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { initialData } from '../data/data';

const SiteContext = createContext();

export function SiteProvider({ children }) {
  // LocalStorage destekli tema (light/dark) ve dil (tr/en) durumları
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [lang, setLang] = useLocalStorage('lang', 'tr');

  // Tema değiştiğinde HTML kök elemanına 'dark' class'ı ekler/çıkarır
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  // Durum değiştirici fonksiyonlar
  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  const toggleLang = () => setLang((prev) => (prev === 'tr' ? 'en' : 'tr'));

  // Aktif dile göre veriyi seçme
  const content = initialData[lang];

  return (
    <SiteContext.Provider value={{ theme, toggleTheme, lang, toggleLang, content }}>
      {children}
    </SiteContext.Provider>
  );
}

// Kolay erişim için Custom Context Hook'u
export const useSite = () => useContext(SiteContext);