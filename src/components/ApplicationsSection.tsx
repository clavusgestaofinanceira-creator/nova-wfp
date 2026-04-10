
import { motion } from 'framer-motion';

const ApplicationsSection = () => {
  const apps = [
    {
      title: "Cozinhas",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwe_VCnrxox1ksC3DK98fd3RHB8HpIOz8AWdaMjgSRm37-BtZf2V3ye7MVuZwo4wqKeh5vNjggGTYdJnO0rIhTHIlI2jPzp96izyA0VTkHEwDU3zBApzbPkIbGJhehfEGsc_Ocl58ST9s_jOLcikvS3GaM6k3eIsfvj4Ec-WVrq7Ctj--M2PaLWGEG1EiVQolv1wzRguRBWOfcXAB4IxwRLT_E5Cn7CXsu8C1ZFjS6vUOHSbukJoNrG551nejYn9OksCZP26PogXO5",
      cols: "md:col-span-2",
      rows: "md:row-span-2",
      size: "text-3xl"
    },
    {
      title: "Banheiros",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuARxHhXLDwA5kf87JmmD_yTsJ-5CtT9J0HQAcquadeIWcsHR217D-3ELoh2pBy-WoDHlpMymFPl8vj1emp0jbfN99-tpVM8trgmNZF78xb879gUuahrk-y2r1XOa7M9H4wQn-D3ipLRsYJLTWb6Jh5qCg-4GpL_QR_tLY_zlXRukgQq6mJlUVHv6TPyFOIftNqOAUc9aJOUWNspFB_PwbAXPDpn2ltRSe99AbLgsGKbNtlAJJEWImmqrlvyCo6qqu_ranscdKR9raqU",
      cols: "md:col-span-2",
      rows: "md:row-span-1",
      size: "text-2xl"
    },
    {
      title: "Motorhomes",
      img: "/assets/motorhome.jpeg",
      cols: "md:col-span-1",
      rows: "md:row-span-1",
      size: "text-xl"
    },
    {
      title: "Móveis Náuticos",
      img: "/assets/nautica.jpg",
      cols: "md:col-span-1",
      rows: "md:row-span-1",
      size: "text-xl"
    }


  ];

  return (
    <section id="projects" className="py-32 bg-surface">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-6xl font-bold tracking-tighter">Aplicações</h2>
          <p className="text-sm font-headline tracking-widest uppercase opacity-70 max-w-[300px] text-right">Versatilidade sem comprometer a integridade</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[1000px] md:h-[800px]">
          {apps.map((app, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${app.cols} ${app.rows} relative group overflow-hidden bg-surface-container`}
            >
              <img 
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" 
                alt={app.title}
                src={app.img} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12 text-on-primary transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ml-4 mb-4">
                <h3 className={`${app.size} font-bold uppercase italic tracking-tighter text-white`}>{app.title}</h3>
              </div>

            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default ApplicationsSection;
