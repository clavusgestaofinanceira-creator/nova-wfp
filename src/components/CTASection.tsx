
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="py-48 bg-inverse-surface text-on-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-dim/10 -skew-x-12 translate-x-1/2"></div>
      
      <div className="max-w-screen-xl mx-auto px-6 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-12"
        >
          Pare de usar MDF onde ele não deveria estar
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.7 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg md:text-2xl font-light mb-16 opacity-70 max-w-2xl mx-auto font-body italic"
        >
          Especifique WFP. O novo padrão de excelência para a arquitetura brasileira contemporânea.
        </motion.p>
        
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <button className="bg-surface text-inverse-surface px-16 py-6 font-bold tracking-[0.2em] text-[10px] uppercase hover:bg-primary-container transition-all duration-300">
            Solicitar Amostra
          </button>
          <button className="border border-on-primary/30 px-16 py-6 font-bold tracking-[0.2em] text-[10px] uppercase hover:bg-white/10 transition-all duration-300">
            Falar com Especialista
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
