
import { motion } from 'framer-motion';

const ComparisonSection = () => {
  return (
    <section className="py-32 bg-surface-container-low">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-8 leading-tight">Por que o MDF falha onde mais importa</h2>
          <div className="space-y-12">
            <div className="group">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-error font-mono text-xs">01</span>
                <h3 className="text-xl font-bold uppercase tracking-wider">Estufamento Hídrico</h3>
              </div>
              <p className="font-light text-on-surface-variant max-w-sm">A umidade é o fim silencioso do MDF tradicional em cozinhas e banheiros.</p>
            </div>
            <div className="group">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-error font-mono text-xs">02</span>
                <h3 className="text-xl font-bold uppercase tracking-wider">Vulnerabilidade a Pragas</h3>
              </div>
              <p className="font-light text-on-surface-variant max-w-sm">Estruturas inteiras comprometidas pela ação voraz de cupins e fungos.</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-6 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
          >
            <img 
              className="w-full aspect-square object-cover rounded-2xl shadow-lg" 
              alt="MDF danificado por umidade"
              src="/assets/mdf.png" 
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
            viewport={{ once: true }}
          >
            <img 
              className="w-full aspect-square object-cover rounded-2xl shadow-lg" 
              alt="MDF atacado por cupins"
              src="/assets/pragas.jpg" 
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default ComparisonSection;
