
import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, X } from 'lucide-react';

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Contact Options */}
      <div className={`flex flex-col-reverse items-end mb-4 space-y-reverse space-y-3 transition-all duration-300 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
        <a 
          href="https://wa.me/5511987654321" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center bg-green-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
        >
          <span className="mr-2">WhatsApp</span>
          <Phone size={18} />
        </a>
        
        <a 
          href="tel:+5511987654321" 
          className="flex items-center bg-corporate-blue text-white px-4 py-2 rounded-full shadow-lg hover:bg-corporate-darkBlue transition-all duration-300"
        >
          <span className="mr-2">Ligar</span>
          <Phone size={18} />
        </a>
        
        <a 
          href="mailto:contato@contabilidade.com" 
          className="flex items-center bg-corporate-blue text-white px-4 py-2 rounded-full shadow-lg hover:bg-corporate-darkBlue transition-all duration-300"
        >
          <span className="mr-2">E-mail</span>
          <Mail size={18} />
        </a>
      </div>
      
      {/* Main Button */}
      <button
        onClick={toggleMenu}
        className={`p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-corporate-blue hover:bg-corporate-darkBlue'} text-white`}
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <MessageCircle size={24} />
        )}
      </button>
    </div>
  );
};

export default FloatingButton;
