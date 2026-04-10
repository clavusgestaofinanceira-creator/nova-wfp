import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

const TopNavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-[#faf9f7]/90 backdrop-blur-2xl py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="flex justify-between items-center px-6 md:px-12 w-full max-w-screen-2xl mx-auto">
        <a href="/" className="transition-opacity hover:opacity-80">
          <img 
            src="https://novawfp.com.br/wp-content/uploads/2026/01/Nova-Logo-2-1024x450.png" 
            alt="NOVA WFP" 
            className={`h-12 md:h-16 w-auto object-contain transition-all duration-500 ${isScrolled ? 'brightness-0' : 'brightness-0 invert'}`}
          />
        </a>

        <div className="hidden md:flex gap-10 items-center">
          <a className={`font-headline tracking-[0.1em] uppercase text-[13px] font-bold transition-all duration-500 pb-1 border-b-2 ${isScrolled ? 'text-[#0d0e0e] border-[#0d0e0e]' : 'text-white border-white'}`} href="#materiality">MATERIALIDADE</a>
          <a className={`font-headline tracking-[0.1em] uppercase text-[13px] font-bold transition-all duration-500 ${isScrolled ? 'text-[#0d0e0e]/50 hover:text-[#0d0e0e]' : 'text-white/60 hover:text-white'}`} href="#archives">ARQUIVOS</a>
          <a className={`font-headline tracking-[0.1em] uppercase text-[13px] font-bold transition-all duration-500 ${isScrolled ? 'text-[#0d0e0e]/50 hover:text-[#0d0e0e]' : 'text-white/60 hover:text-white'}`} href="#projects">APLICAÇÕES</a>

          <a className={`font-headline tracking-[0.1em] uppercase text-[13px] font-bold transition-all duration-500 ${isScrolled ? 'text-[#0d0e0e]/50 hover:text-[#0d0e0e]' : 'text-white/60 hover:text-white'}`} href="#collections">COLEÇÕES</a>
          <a className={`font-headline tracking-[0.1em] uppercase text-[13px] font-bold transition-all duration-500 ${isScrolled ? 'text-[#0d0e0e]/50 hover:text-[#0d0e0e]' : 'text-white/60 hover:text-white'}`} href="#about">SOBRE</a>
        </div>


        <button className={`transition-all duration-500 hover:opacity-70 ${isScrolled ? 'text-[#0d0e0e]' : 'text-white'}`}>
          <Menu size={28} strokeWidth={1.5} />
        </button>
      </div>
    </nav>
  );

};

export default TopNavBar;
