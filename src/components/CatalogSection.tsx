import React from 'react';
import { motion } from 'framer-motion';

const CatalogSection = () => {
  const textures = [
    { title: "Madeira", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAT6iY2v9BskHAv44FKI1_ZqNfHhZgprgsyRZ3b01qWJJR2ZxRekUxRWbjSWswrXoGgVieB94ORaLRp_NFPCpPlEKsrC9mvbhErobLEpOEHbimzTmxjslWAm_UOdaJrVxiLxcaIWI_ZZYbjc6nnVTojLNfqwlVU27tr_RyD18h9_B7E-rRrEdPAWnDGHueMVqooj4RAplFTIOHMNBQcRA1bvMMQhDzboP0LO4btjOBXKJWBgdBUTiMnHo2fBImCMKiVXbFtfbIPK-Kk" },
    { title: "Fosco", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGF6UPaUjm2YSZ5p1LgBwB4NN8CuHj05TVL74jawA29GborefiTInAx_slEnd6WrErUfHHblEKK_KNpkltxBuGpAdVcwLcDdgf0rKRpTaX9h4pFTde5K2HJ2onVlpnSZ5fLQbQzM8fdvCFdf07EIsAb7nnhnbImdIoe87bpzTsxoQVI_xWjjIPqnUhEFer185Zji07wEz0f1ehnmgDUdBakcpL6Dtixgp8NEciHwNdb4BYoEGYHp-EJDH6WaTcOaY1iK1iOyYKx7DG" },
    { title: "Couro", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDs4BygNSThzR2kN3M45MC88siX7BKx-mYAWSir-QNM9QvJlOhsmg0-9oS3fG2hPI-Ny1WhW2B-ugORFqg3PHFQTGjaErbPFvnzU3Iya9a3kgkVqzLDbZKn1df2JHpG_LsgjdrJAesKfsRJXBOjr4e7CLYGVHDLwbCm3bSO9ONXuZqYkvoR6I7yvws_5PeTsYGHJLYpIF0raY5C45yhrxXMWI3FCrVyOsA1m8UUUVcpFwjekRIfoBPjN6iIARdG2otYIY_avEwreQoS" },
    { title: "Metal", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKdbAinVlZ43EMtEYYdjnCwI3C_kiSydBUIGX-MW8nU0cBQf-RYIoujEKIzGbdZdf0gtSlfMcmKu3fOoGbFu7ilh3k9h-JZsLM3Xm4ojJdI-mThNAOyh6s1orEn-BvxWoW-aFo26YqcIkQdiCW5Wh4Otrw6AwFq2eYAJh_jHnyONdlXo8apXrpO7nWWEHBPwFoG1DHSwAtJSjuqm2KWKlrLFfC48ocxnBnQ65BYoNkEhOJGdTqCGW_lVHbIsOM3QhdOJtAojlQAj-q" }

  ];

  return (
    <section id="collections" className="py-32 bg-surface-container-low">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <h2 className="text-5xl font-black mb-12 tracking-tight">O Catálogo de Texturas</h2>
            <div className="space-y-6">
              <div className="flex justify-between border-b border-outline-variant pb-4">
                <span className="font-bold uppercase tracking-widest text-[10px]">Dimensões Padrão</span>
                <span className="font-mono text-sm">2,90 x 1,22m</span>
              </div>
              <div className="flex justify-between border-b border-outline-variant pb-4">
                <span className="font-bold uppercase tracking-widest text-[10px]">Espessuras</span>
                <span className="font-mono text-sm">5mm a 17mm</span>
              </div>
            </div>
            <button className="mt-12 bg-inverse-surface text-on-primary px-8 py-4 w-full font-bold tracking-widest text-[10px] uppercase hover:bg-primary transition-all duration-300">
              Baixar Catálogo PDF
            </button>
          </motion.div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {textures.map((texture, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="aspect-[3/4] bg-surface-container-highest relative overflow-hidden group"
              >
                <img 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                  alt={texture.title}
                  src={texture.img} 
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-inverse-surface/40">
                  <span className="text-on-primary text-[10px] font-bold uppercase tracking-[0.2em]">{texture.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
