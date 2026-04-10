import React from 'react';
import { motion } from 'framer-motion';

const ProofSection = () => {
  return (
    <section className="py-32 overflow-hidden bg-surface-container-lowest">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="order-2 md:order-1"
        >
          <img 
            className="w-full aspect-video object-cover" 
            alt="Water droplets on smooth WFP surface"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlo6Tk0XleQs14tCoMiUqO5m1M_8Z1XAk7YjAq_YU8iftN4WwkfbyywYexBMKvYtN7VYFaOvgHbMdgMfSdcjk4UMBmfO91Omb6Zjg94f3mcBiAwLIGwcnNGJwlpeFPsr7MKGUCrRq45nNTSlNmmyNh-Ajl6JV1_oXKdGzO0Lg7Bv4G16NfRZkn05gcBnyaJPVCYFK_itn8ZDA65z-xOR-C4XQT7ErwUpdds8l_2lMScppDB4oDZYsXd5UbjSPsf9S03KyGUilOS8Uv" 
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="order-1 md:order-2"
        >
          <span className="text-[10px] tracking-[0.3em] font-bold uppercase mb-4 block opacity-40">Seção 06 — Prova Real</span>
          <h2 className="text-5xl font-light mb-8">Precisão e Resiliência</h2>

          <p className="font-light leading-loose text-on-surface-variant italic">
            Nossa tecnologia de corte garante bordas perfeitas que não lascam. Veja como a água reage à superfície: ela desliza, sem penetrar uma única fibra. Isso é engenharia de materiais aplicada à perfeição estética.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProofSection;
