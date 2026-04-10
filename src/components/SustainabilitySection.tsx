
import { motion } from 'framer-motion';
import { TestTube, ShieldCheck, Ruler, Leaf } from 'lucide-react';

const SustainabilitySection = () => {
  const items = [
    {
      icon: <Leaf className="text-primary" size={40} strokeWidth={1.5} />,
      title: "Sustentabilidade",
      desc: "Processo produtivo otimizado com baixo desperdício e material 100% reciclável."
    },
    {
      icon: <ShieldCheck className="text-primary" size={40} strokeWidth={1.5} />,
      title: "Garantia Vitalícia",
      desc: "Confiança absoluta em uma estrutura que não se degrada com o tempo."
    },
    {
      icon: <Ruler className="text-primary" size={40} strokeWidth={1.5} />,
      title: "Fácil Usinagem",
      desc: "Pode ser trabalhado com as mesmas ferramentas do MDF, mas com acabamento superior."
    },
    {
      icon: <TestTube className="text-primary" size={40} strokeWidth={1.5} />,
      title: "Livre de Formol",
      desc: "Saúde em primeiro lugar: zero emissão de gases tóxicos no ambiente."
    }
  ];

  return (
    <section id="about" className="py-32 bg-surface">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {items.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {item.icon}
            <h4 className="font-bold uppercase tracking-[0.2em] text-sm text-on-surface">{item.title}</h4>
            <p className="text-base font-normal leading-relaxed text-on-surface-variant/80 font-body max-w-[280px] md:max-w-none">{item.desc}</p>
          </motion.div>

        ))}
      </div>
    </section>
  );
};

export default SustainabilitySection;
