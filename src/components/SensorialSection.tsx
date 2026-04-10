
import { motion } from 'framer-motion';

const SensorialSection = () => {
  return (
    <section id="materiality" className="py-32 bg-surface">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-1">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
            className="md:col-span-1 flex flex-col justify-end pb-12"
          >
            <span className="text-[10px] tracking-[0.3em] font-bold uppercase mb-4 opacity-40">Seção 02 — Experiência Tátil</span>
            <h2 className="text-5xl font-light tracking-tighter leading-none italic">Materialidade Superior</h2>
          </motion.div>
          
          <div className="md:col-span-1 overflow-hidden">
            <motion.img 
              initial={{ scale: 1.1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true }}
              className="w-full aspect-[3/4] object-cover grayscale contrast-125" 
              alt="Macro close-up of high-end material"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ_2gCMfk_Nm09JuND9SKv8nyykxy6wy0aZvt2Po6e9lxgPZ76ZLfH4t49KBHE6rCGzPPtI9qxtx3DPni4M4AXSmjzWhrT3Kl9lbyl-rdIfoL0Bd3J5Cna_Bef6HAFYgkFZ13rD8E_enr5kXbIjJJNIP4EKrZ6lQJYC-3JlIRxNhHK4wMhZD-c7xqCxnASM4jebjXK2XspGneQhOHY1tzH-4hq-1s5qPEGZ54s9i37wqpb0b29WrDk2Alyp2MoMGgB0qi3r0C_cVR4" 
            />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-1 flex items-center bg-surface-container-low p-12 md:p-16"
          >
            <p className="text-xl md:text-2xl leading-relaxed font-light text-on-surface-variant italic">
              "Sentir a superfície de um material é compreender sua alma. O WFP não apenas resiste; ele eleva a experiência tátil do mobiliário de luxo com densidade e acabamento impecáveis."
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SensorialSection;
