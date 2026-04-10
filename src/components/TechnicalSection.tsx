
import { motion } from 'framer-motion';

const TechnicalSection = () => {
  const specs = [
    { label: "Umidade", mdf: "Estufa em 24h", wfp: "100% Imune", highlight: true },
    { label: "Cupins", mdf: "Vulnerável", wfp: "Resistente", highlight: false },
    { label: "Chamas", mdf: "Combustível", wfp: "Retardante", highlight: true },
    { label: "Durabilidade", mdf: "5-10 anos", wfp: "Vitalícia", highlight: false }
  ];

  return (
    <section className="py-32 bg-surface">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold mb-16 text-center uppercase tracking-[0.2em]"
        >
          Especificação Técnica
        </motion.h2>
        
        <div className="space-y-0 border-t border-inverse-surface">
          <div className="grid grid-cols-3 py-8 border-b border-outline-variant/30 items-center">
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Característica</span>
            <span className="font-bold text-center">MDF Convencional</span>
            <span className="font-bold text-center text-inverse-surface">WFP Technology</span>
          </div>
          
          {specs.map((spec, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`grid grid-cols-3 py-8 border-b border-outline-variant/30 items-center ${spec.highlight ? 'bg-surface-container-low/30' : ''}`}
            >
              <span className="text-xs font-bold uppercase">{spec.label}</span>
              <span className="text-sm text-center font-light">{spec.mdf}</span>
              <span className="text-sm text-center font-bold text-inverse-surface">{spec.wfp}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSection;
