import React from 'react';
import { useIsMobile } from '../hooks/use-mobile';
const Hero = () => {
  const isMobile = useIsMobile();
  return <section className="pt-28 pb-12 md:pt-36 md:pb-20 bg-gradient-to-br from-black to-neutral-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581163898573-86d92adf7c93?ixlib=rb-4.0.3&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-40 right-10 w-72 h-72 bg-red-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10 py-[60px]">
        <div className="max-w-3xl mx-auto text-center">
          <img src="/lovable-uploads/d71863d5-f7cf-4eb7-83da-d78b97134d87.png" alt="TRB UNIFORMES & FARDAMENTOS" className="h-24 md:h-32 mx-auto mb-8 animate-fade-in" />
          
          <h1 className={`${isMobile ? 'text-3xl' : 'text-4xl md:text-5xl lg:text-6xl'} font-bold text-white leading-tight mb-6 animate-fade-in`} style={{
          animationDelay: '0.1s'
        }}>
            Uniformes e Fardamentos<br />de Alta Qualidade
          </h1>
          
          <p className="text-lg text-red-400 mb-10 animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            Transforme suas ideias em realidade. Camisas personalizadas, fardamentos e uniformes esportivos.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{
          animationDelay: '0.3s'
        }}>
            <a href="https://wa.me/5585991282445" target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2">
              <img src="/lovable-uploads/9a8edb27-0fd0-49ff-9165-64acf1186a7f.png" alt="WhatsApp" className="w-5 h-5" />
              <span>Solicitar Orçamento</span>
            </a>
            <a href="#services" className="bg-white hover:bg-gray-50 text-black border border-red-600/20 px-6 py-3 rounded-md transition-all transform hover:scale-[1.02]">
              Nossos serviços
            </a>
          </div>
        </div>
      </div>
      
      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,32L80,37.3C160,43,320,53,480,58.7C640,64,800,64,960,53.3C1120,43,1280,21,1360,10.7L1440,0L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z">
          </path>
        </svg>
      </div>
    </section>;
};
export default Hero;