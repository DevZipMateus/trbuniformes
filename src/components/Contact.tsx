
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-black/10 text-black font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Contato
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Entre em contato conosco
          </h2>
          <p className="text-gray-600 text-lg">
            Nossa equipe de atendentes está pronta para oferecer o melhor atendimento.
          </p>
        </div>
        
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Phone */}
          <div className="bg-white p-8 rounded-lg shadow-sm text-center border border-gray-100 animate-fade-in">
            <div className="bg-red-600/10 p-4 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="text-red-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Telefone</h3>
            <p className="text-gray-600 mb-4">Estamos disponíveis para atendê-lo</p>
            <a href="tel:+5585991282445" className="text-red-600 font-medium hover:text-red-700 transition-colors duration-300">
              (85) 99128-2445
            </a>
          </div>
          
          {/* Email */}
          <div className="bg-white p-8 rounded-lg shadow-sm text-center border border-gray-100 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="bg-red-600/10 p-4 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="text-red-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">E-mail</h3>
            <p className="text-gray-600 mb-4">Envie sua mensagem ou solicitação</p>
            <a href="mailto:triboconceito@gmail.com" className="text-red-600 font-medium hover:text-red-700 transition-colors duration-300">
              triboconceito@gmail.com
            </a>
          </div>
          
          {/* Location */}
          <div className="bg-white p-8 rounded-lg shadow-sm text-center border border-gray-100 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-red-600/10 p-4 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="text-red-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Endereço</h3>
            <p className="text-gray-600 mb-4">Visite nossa loja física</p>
            <p className="text-red-600 font-medium">
              Professora Herminia Mendonça
            </p>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <a 
            href="https://wa.me/5585991282445" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black hover:bg-neutral-800 text-red-500 px-8 py-4 rounded-md transition-all inline-flex items-center justify-center gap-2 font-medium"
          >
            <span>Solicite um orçamento agora</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
