import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-[70vh] md:min-h-screen flex items-center md:items-start justify-center pt-4 md:pt-16 bg-gradient-to-br from-primary/5 to-background overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/hero-background-2.png"
          alt="RT Security Background"
          className="w-full h-full object-cover opacity-40"
          onError={(e) => {
            console.log('Error loading background image:', e);
            e.currentTarget.style.display = 'none';
          }}
          onLoad={() => console.log('Background image loaded successfully')}
        />
      </div>
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo and Brand */}
          <div className="mb-0">
            <div className="inline-flex items-center justify-center mb-0">
              <img 
                src="/lovable-uploads/rt-security-logo.png" 
                alt="RT Security Logo" 
                className="w-[400px] h-[200px] md:w-[650px] md:h-[325px] lg:w-[800px] lg:h-[400px] xl:w-[900px] xl:h-[450px] 2xl:w-[1000px] 2xl:h-[500px] object-contain"
              />
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed -mt-8 sm:-mt-12 md:-mt-32">
            Especialistas en vigilancia, control de accesos y protección perimetral con guardias certificados 
            y sistemas de monitoreo avanzados para garantizar la máxima seguridad.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 md:mb-16">
            <Button 
              size="lg" 
              className="px-8 py-6 text-lg"
              onClick={scrollToContact}
            >
              Solicitar Cotización
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-6 text-lg"
              onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
            >
              Ver Servicios
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+56 9 5042 0345</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>rt.seguridadprivada24@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;