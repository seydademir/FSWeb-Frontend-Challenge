import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Profile } from './components/Profile';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F9F9F9] dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-colors duration-300">
      <Header />
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
      <ToastContainer />
    </div>
  );
}