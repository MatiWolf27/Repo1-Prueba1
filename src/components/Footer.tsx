import React from "react";
import { Shield, Phone, Mail, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Inicio", href: "#home" },
    { name: "Servicios", href: "#services" },
    { name: "Nosotros", href: "#about" },
    { name: "Contacto", href: "#contact" },
  ];

  const services = [
    "Guardias Certificados",
    "Control de Accesos",
    "Vigilancia 24/7",
    "Seguridad para Eventos",
    "Rondas Preventivas",
    "Consultoría en Seguridad",
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[hsl(220,91%,15%)] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-32 h-32 rounded-full flex items-center justify-center">
                <img 
                  src="/lovable-uploads/IMG_6975 (1).PNG" 
                  alt="RT Security Logo" 
                  className="w-32 h-32 object-contain rounded-full"
                />
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Servicios integrales de seguridad privada con personal certificado 
              y tecnología avanzada para proteger lo que más valoras.
            </p>
            <div className="flex gap-3">
              <a 
                href="tel:+56950420345"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a 
                href="mailto:rt.seguridadprivada24@gmail.com"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a 
                href="https://instagram.com/rtsecurity.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-sm opacity-80">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 opacity-80" />
                <a 
                  href="tel:+56950420345"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  +56 9 5042 0345
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 opacity-80" />
                <a 
                  href="mailto:rt.seguridadprivada24@gmail.com"
                  className="opacity-80 hover:opacity-100 transition-opacity break-all"
                >
                  rt.seguridadprivada24@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4 opacity-80" />
                <a 
                  href="https://instagram.com/rtsecurity.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  @rtsecurity.cl
                </a>
              </div>
              <p className="opacity-80 mt-4">
                <strong>Disponibles 24/7</strong><br />
                Para emergencias y consultas urgentes
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-80">
            © {currentYear} RT Security. Todos los derechos reservados.
          </p>
          <p className="text-sm opacity-80">
            Servicios de seguridad privada certificados y profesionales
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;