import React from 'react';
import { motion } from 'framer-motion';
import { Droplet, Flame, Bug, ShieldCheck, Star } from 'lucide-react';

const EvolutionSection = () => {
  const features = [
    {
      icon: <Droplet size={48} strokeWidth={1} />,
      title: "100% À PROVA D'ÁGUA",
      description: "Totalmente imersível sem qualquer alteração estrutural."
    },
    {
      icon: <ShieldCheck size={48} strokeWidth={1} />,
      title: "ALTA DURABILIDADE",
      description: "Resistência extrema para ambientes de intenso uso."
    },
    {
      icon: <Flame size={48} strokeWidth={1} />,
      title: "NÃO PROPAGA FOGO",
      description: "Composição segura que retarda chamas."
    },
    {
      icon: <Bug size={48} strokeWidth={1} />,
      title: "RESISTENTE A PRAGAS",
      description: "Imune a cupins e microorganismos."
    },
    {
      icon: <Star size={48} strokeWidth={1} />,
      title: "ACABAMENTO PREMIUM",
      description: "Superfície impecável para o alto padrão."
    }
  ];

  return (
    <section id="archives" className="py-32 bg-inverse-surface text-on-primary">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 text-center mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6"
        >
          WFP A Evolução
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-on-primary/60 font-light tracking-[0.2em] text-[10px] uppercase"
        >
          Tecnologia avançada para arquitetura permanente
        </motion.p>
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-1">
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`bg-white/5 p-10 text-center transition-colors duration-500 hover:bg-white/10`}
          >
            <div className="mb-8 flex justify-center text-on-primary/80">
              {feature.icon}
            </div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4 leading-tight">{feature.title}</h3>
            <p className="font-light text-[11px] text-on-primary/50 leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EvolutionSection;

