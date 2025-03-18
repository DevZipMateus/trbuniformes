
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
      valid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
      valid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória';
      valid = false;
    }
    
    setErrors(newErrors);
    return valid;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    }
  };
  
  return (
    <section id="contact" className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-corporate-blue/10 text-corporate-blue font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Contato
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Entre em contato conosco
          </h2>
          <p className="text-gray-600 text-lg">
            Estamos prontos para atender às suas necessidades. Preencha o formulário abaixo ou utilize um de nossos canais de atendimento.
          </p>
        </div>
        
        {/* Contact Grid */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Contact Form */}
          <div className="lg:w-2/3 animate-fade-in">
            <div className="bg-white rounded-xl shadow-sm p-8">
              {/* Success Message */}
              {submitSuccess && (
                <div className="bg-green-50 text-green-700 px-4 py-3 rounded-lg mb-6 flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-medium">Mensagem enviada com sucesso!</p>
                    <p className="text-sm">Agradecemos seu contato. Retornaremos em breve.</p>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome completo <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-corporate-blue/50 focus:border-corporate-blue transition-colors duration-300`}
                      placeholder="Seu nome"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                  </div>
                  
                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-corporate-blue/50 focus:border-corporate-blue transition-colors duration-300`}
                      placeholder="Seu e-mail"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                  </div>
                </div>
                
                {/* Subject Input */}
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Assunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-corporate-blue/50 focus:border-corporate-blue transition-colors duration-300"
                    placeholder="Assunto da mensagem"
                  />
                </div>
                
                {/* Message Input */}
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-corporate-blue/50 focus:border-corporate-blue transition-colors duration-300`}
                    placeholder="Sua mensagem"
                  ></textarea>
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                </div>
                
                {/* Privacy Notice */}
                <div className="mb-6">
                  <p className="text-sm text-gray-500">
                    Os dados pessoais coletados têm por finalidade o retorno à mensagem enviada e não serão utilizados para outra finalidade.
                  </p>
                </div>
                
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex justify-center items-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      Enviar Mensagem
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
          
          {/* Right Column - Contact Info */}
          <div className="lg:w-1/3">
            {/* Contact Card */}
            <div className="bg-white rounded-xl shadow-sm p-8 mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-corporate-blue/10 p-3 rounded-full mr-4">
                    <Phone className="text-corporate-blue" size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">Telefone</h4>
                    <p className="text-gray-600">(11) 98765-4321</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-corporate-blue/10 p-3 rounded-full mr-4">
                    <Mail className="text-corporate-blue" size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">E-mail</h4>
                    <p className="text-gray-600">contato@contabilidade.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-corporate-blue/10 p-3 rounded-full mr-4">
                    <MapPin className="text-corporate-blue" size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">Endereço</h4>
                    <p className="text-gray-600">Av. Paulista, 1000 - Bela Vista, São Paulo - SP, 01310-100</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Working Hours */}
            <div className="bg-white rounded-xl shadow-sm p-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Horário de Atendimento</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Segunda - Sexta:</span>
                  <span className="font-medium text-gray-900">08:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sábado:</span>
                  <span className="font-medium text-gray-900">09:00 - 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Domingo:</span>
                  <span className="font-medium text-gray-900">Fechado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
