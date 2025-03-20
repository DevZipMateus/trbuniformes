
import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, Mail, X } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPulsing, setIsPulsing] = useState(true);
  const isMobile = useIsMobile();
  
  // Start pulsing effect every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 2000);
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsPulsing(false); // Stop pulsing when opened
  };
  
  return (
    <div className={`fixed ${isMobile ? 'bottom-4 right-4' : 'bottom-6 right-6'} z-50`}>
      {/* Contact Options */}
      <div className={`flex flex-col-reverse items-end mb-4 space-y-reverse space-y-3 transition-all duration-500 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
        <a 
          href="https://wa.me/5511987654321" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center bg-emerald-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-emerald-600 transition-all duration-300"
        >
          <span className="mr-2">WhatsApp</span>
          <div className="w-6 h-6">
            <img src="/lovable-uploads/1fa16bc1-908d-4a63-9c7f-88a25f117f80.png" alt="WhatsApp" className="w-full h-full object-contain" />
          </div>
        </a>
        
        <a 
          href="tel:+5511987654321" 
          className="flex items-center bg-neutral-800 text-amber-400 px-4 py-2 rounded-full shadow-lg hover:bg-neutral-900 transition-all duration-300"
        >
          <span className="mr-2">Ligar</span>
          <Phone size={18} />
        </a>
        
        <a 
          href="mailto:contato@contabilidade.com" 
          className="flex items-center bg-neutral-800 text-amber-400 px-4 py-2 rounded-full shadow-lg hover:bg-neutral-900 transition-all duration-300"
        >
          <span className="mr-2">E-mail</span>
          <Mail size={18} />
        </a>
      </div>
      
      {/* Main Button */}
      <button
        onClick={toggleMenu}
        className={`p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 
          ${isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-emerald-500 hover:bg-emerald-600'} 
          ${isOpen ? 'text-white' : 'text-white'} 
          ${isPulsing && !isOpen ? 'animate-pulse shadow-emerald-500/50' : ''}`}
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <div className="w-7 h-7">
            <img src="/lovable-uploads/1fa16bc1-908d-4a63-9c7f-88a25f117f80.png" alt="WhatsApp" className="w-full h-full object-contain" />
          </div>
        )}
      </button>
    </div>
  );
};

export default FloatingButton;
