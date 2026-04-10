import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-[1024px] flex items-center pt-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          className="w-full h-full object-cover" 
          alt="Luxury minimalist kitchen with WFP surfaces"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBk4siTnC5HAdqFrLk2KfMi14Glqvsvv-aR3xxeftQreOvEW--e-rv4DKMiwWYyPZoDjouuREBNOf8XrPlD5SzbGu_POOj2eNEcy9ERviFiPxhCNDTTNiacOYCN85ovb30w_RxwmjJFi7oU8qp4s8Pp5pP1utVdo7aL7ICFOKqU3l6aD0L__7MbMuVspH2PESi7dtIb1SY29ZWfye9rD5e3XeYXsw3Q1LC077TVvFmWuHOBWo7KiDUI1WH7Ptb0SlGLeva_0poCY-aG" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/20 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="md:col-span-8 lg:col-span-6 bg-surface-container-highest p-8 md:p-16 backdrop-blur-sm bg-opacity-90 self-center"
        >
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] mb-6 text-inverse-surface">
            Onde outros materiais falham o <span className="text-[#c5a35d] italic transition-all duration-500 drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]">WFP</span> permanece.
          </h1>



          <p className="text-lg md:text-xl font-light leading-relaxed mb-10 text-on-surface-variant max-w-md">
            O material 100% impermeável e imune a cupins para ambientes de alto padrão.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-inverse-surface text-on-primary px-12 py-4 font-bold tracking-widest text-[10px] uppercase hover:bg-primary transition-all duration-500">
              Solicitar Amostra
            </button>
            <a href="#projects" className="border-b border-inverse-surface text-inverse-surface px-4 py-4 font-bold tracking-widest text-[10px] uppercase hover:opacity-50 transition-all duration-300 inline-flex items-center">
              Ver Aplicações
            </a>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
