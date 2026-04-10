

const Footer = () => {
  return (
    <footer className="bg-[#0d0e0e] text-[#faf9f7] w-full py-24 px-6 md:px-12">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-end w-full">
        <div>
          <img 
            src="https://novawfp.com.br/wp-content/uploads/2026/01/Nova-Logo-2-1024x450.png" 
            alt="NOVA WFP" 
            className="h-8 md:h-10 w-auto object-contain brightness-0 invert mb-8"
          />

          <p className="font-body text-[10px] tracking-[0.2em] font-light uppercase text-[#faf9f7]/40">
            © 2024 NOVA WFP. AN INSTITUTIONAL MONOGRAPH.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-8 md:justify-end">
          <a className="font-body text-[10px] tracking-[0.2em] font-light uppercase text-[#faf9f7]/40 hover:text-[#faf9f7] transition-all duration-300" href="#">PRIVACIDADE</a>
          <a className="font-body text-[10px] tracking-[0.2em] font-light uppercase text-[#faf9f7]/40 hover:text-[#faf9f7] transition-all duration-300" href="#">TERMOS</a>
          <a className="font-body text-[10px] tracking-[0.2em] font-light uppercase text-[#faf9f7]/40 hover:text-[#faf9f7] transition-all duration-300" href="#">ESPECIFICAÇÕES</a>
          <a className="font-body text-[10px] tracking-[0.2em] font-light uppercase text-[#faf9f7]/40 hover:text-[#faf9f7] transition-all duration-300 underline underline-offset-8" href="#">CONTATO</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
