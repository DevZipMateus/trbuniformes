
import React from 'react';
import { Shirt, Tag, Package, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Camisas Personalizadas',
    description: 'Criamos camisas personalizadas com sua marca, logo ou design exclusivo para eventos, empresas ou uso pessoal.',
    icon: Shirt,
    delay: '0s'
  },
  {
    id: 2,
    title: 'Fardamentos',
    description: 'Desenvolvemos fardamentos corporativos com qualidade e durabilidade para empresas de todos os segmentos.',
    icon: Tag,
    delay: '0.1s'
  },
  {
    id: 3,
    title: 'Uniformes Esportivos',
    description: 'Produzimos uniformes esportivos de alta performance para times, academias e clubes com tecnologia e conforto.',
    icon: Package,
    delay: '0.2s'
  }
];

const Services = () => {
  return (
    <section id="services" className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-black/10 text-black font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Nossos Serviços
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Soluções completas em uniformes
          </h2>
          <p className="text-gray-600 text-lg">
            Oferecemos serviços especializados para atender suas necessidades em confecção de uniformes, 
            desde o design até a entrega final.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-lg p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300 transform hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: service.delay }}
            >
              <div className="bg-red-600/10 p-4 rounded-lg inline-block mb-5">
                <service.icon className="text-red-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <a 
            href="https://wa.me/5585991282445" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black hover:bg-neutral-800 text-red-500 px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2 font-medium inline-flex"
          >
            <span>Fale com um especialista</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
