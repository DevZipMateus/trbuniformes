
import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    id: 1,
    name: 'Plano Essencial',
    price: '99,99',
    description: 'Ideal para microempresas ou empreendedores individuais que buscam serviços básicos de contabilidade.',
    features: [
      'Emissão de até 10 notas fiscais mensais',
      'Declaração mensal de impostos',
      'Suporte contábil por e-mail',
      'Relatório financeiro básico mensal',
      'Acompanhamento básico de tributos'
    ],
    popular: false,
    delay: '0s'
  },
  {
    id: 2,
    name: 'Plano Business',
    price: '269,99',
    description: 'Perfeito para pequenas empresas que necessitam de suporte contábil mais abrangente e relatórios detalhados.',
    features: [
      'Emissão de até 20 notas fiscais mensais',
      'Declaração mensal de impostos e encargos trabalhistas',
      'Suporte contábil por e-mail e telefone',
      'Relatório financeiro detalhado mensal',
      'Acompanhamento mensal de tributos e otimização fiscal',
      'Consultoria contábil trimestral'
    ],
    popular: true,
    delay: '0.1s'
  },
  {
    id: 3,
    name: 'Plano Enterprise',
    price: '699,99',
    description: 'Solução completa para empresas que requerem acompanhamento contábil contínuo e consultoria estratégica.',
    features: [
      'Emissão ilimitada de notas fiscais',
      'Declaração mensal de impostos, encargos trabalhistas e obrigações acessórias',
      'Suporte contábil ilimitado por e-mail, telefone e chat',
      'Relatórios financeiros completos mensais e trimestrais',
      'Acompanhamento estratégico de tributos com foco em economia fiscal',
      'Consultoria contábil mensal e planejamento financeiro',
      'Atendimento personalizado',
      'Assessoria em questões complexas'
    ],
    popular: false,
    delay: '0.2s'
  }
];

const Plans = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-corporate-blue/10 text-corporate-blue font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Nossos Planos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Escolha o plano ideal para o seu negócio
          </h2>
          <p className="text-gray-600 text-lg">
            Oferecemos planos flexíveis que se adaptam às necessidades e ao tamanho da sua empresa.
          </p>
        </div>
        
        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`bg-white rounded-xl p-8 shadow-sm relative ${plan.popular ? 'ring-2 ring-corporate-blue' : 'hover:shadow-md'} transition-all duration-300 animate-fade-in`}
              style={{ animationDelay: plan.delay }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-corporate-blue text-white text-xs font-semibold px-3 py-1 rounded-bl-lg rounded-tr-lg transform translate-y-0">
                  MAIS POPULAR
                </div>
              )}
              
              {/* Plan Name and Price */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <div className="flex items-end mb-6">
                <span className="text-4xl font-bold text-gray-900">R$ {plan.price}</span>
                <span className="text-gray-600 ml-1">/mês</span>
              </div>
              
              {/* Description */}
              <p className="text-gray-600 mb-6 text-sm">
                {plan.description}
              </p>
              
              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-corporate-blue/10 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                      <Check className="text-corporate-blue" size={12} />
                    </div>
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* CTA Button */}
              <a 
                href="#contact" 
                className={`block text-center py-3 px-6 rounded-lg transition-colors duration-300 ${
                  plan.popular 
                    ? 'bg-corporate-blue hover:bg-corporate-darkBlue text-white' 
                    : 'bg-white border border-corporate-blue text-corporate-blue hover:bg-corporate-blue/5'
                }`}
              >
                Solicitar Plano
              </a>
            </div>
          ))}
        </div>
        
        {/* Custom Plans */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Precisa de um plano personalizado para sua empresa?
          </p>
          <a href="#contact" className="btn-primary inline-block">
            Solicitar proposta personalizada
          </a>
        </div>
      </div>
    </section>
  );
};

export default Plans;
