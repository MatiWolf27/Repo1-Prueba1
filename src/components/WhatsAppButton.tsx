import React from "react";
import { Phone } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "+56986347352"; // Formato sin espacios para WhatsApp
  const message = "Hola, me interesa conocer más sobre sus servicios de seguridad privada.";
  
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="group relative bg-white hover:bg-gray-50 rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse hover:animate-none border-2 border-gray-200"
        aria-label="Contactar por WhatsApp"
      >
        <Phone className="w-7 h-7 text-[hsl(220,91%,15%)] stroke-[2.5] fill-none" />
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
            Contactar por WhatsApp
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        </div>
        
        {/* Ripple effect */}
        <div className="absolute inset-0 rounded-full bg-[hsl(220,91%,15%)] opacity-15 animate-ping"></div>
      </button>
    </div>
  );
};

export default WhatsAppButton;
