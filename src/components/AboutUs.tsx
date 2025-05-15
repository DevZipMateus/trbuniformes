
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="section bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column - Image */}
          <div className="lg:w-1/2 animate-fade-in">
            <div className="relative">
              <div className="bg-red-600/20 w-full h-full absolute -left-6 -top-6 rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Uniforme personalizado produzido pela TRB" 
                className="relative z-10 rounded-lg shadow-lg w-full object-cover h-[400px]"
              />
              <div className="absolute -bottom-8 -right-8 bg-white rounded-lg shadow-lg p-6 z-20 animate-float">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-600 rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-gray-600">Qualidade</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-black rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-gray-600">Personalização</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Satisfação garantida</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className="lg:w-1/2">
            <div className="inline-block bg-red-600/10 text-red-600 font-medium px-4 py-1.5 rounded-full text-sm mb-4 animate-fade-in">
              Sobre Nós
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Excelência em uniformes personalizados
            </h2>
            <p className="text-gray-600 mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              A TRB Uniformes & Fardamentos é uma empresa especializada na produção e personalização de camisas, fardamentos profissionais e uniformes esportivos. Atuamos com dedicação para atender empresas, escolas, times e projetos que buscam unir identidade visual, conforto e qualidade em cada peça.
            </p>
            <p className="text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Desde a nossa fundação, temos como compromisso oferecer soluções personalizadas, com materiais de alta durabilidade e um acabamento que valoriza sua marca. Aqui, cada detalhe importa — do tecido à estampa — para garantir que você receba um uniforme que represente com orgulho sua equipe ou organização.
            </p>
            
            {/* Key Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="bg-red-600/10 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-red-600" size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Materiais de Qualidade</h4>
                  <p className="text-gray-600">Tecidos duráveis e confortáveis para maior satisfação</p>
                </div>
              </div>
              
              <div className="flex items-start animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="bg-red-600/10 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-red-600" size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Personalização Completa</h4>
                  <p className="text-gray-600">Criamos designs exclusivos que valorizam sua identidade visual</p>
                </div>
              </div>
              
              <div className="flex items-start animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="bg-red-600/10 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-red-600" size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Prazos Cumpridos</h4>
                  <p className="text-gray-600">Compromisso com entregas pontuais e atendimento eficiente</p>
                </div>
              </div>
            </div>
            
            <a 
              href="https://wa.me/5585991282445" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-neutral-800 text-red-500 px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2 font-medium inline-flex animate-fade-in" 
              style={{ animationDelay: '0.7s' }}
            >
              <span>Solicite um orçamento</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
