import { useState, useEffect } from 'react';

// LocalStorage ile React State'ini senkronize tutan Custom Hook
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      // LocalStorage'da veri varsa onu JSON olarak çöz, yoksa varsayılan değeri kullan
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`LocalStorage okuma hatası (${key}):`, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      // State her değiştiğinde değeri stringe dönüştürüp LocalStorage'a kaydet
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`LocalStorage yazma hatası (${key}):`, error);
    }
  }, [key, value]);

  return [value, setValue];
}