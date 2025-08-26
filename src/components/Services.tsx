import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Eye, Radio, Clock, MapPin, UserCheck, Headphones } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: UserCheck,
      title: "Guardias OS10 Certificados",
      description: "Personal uniformado y certificado según normativas vigentes para máxima confiabilidad.",
    },
    {
      icon: MapPin,
      title: "Control de Accesos",
      description: "Control especializado en zonas públicas y backstage para eventos y establecimientos.",
    },
    {
      icon: Eye,
      title: "Vigilancia Constante",
      description: "Supervisión continua durante todo el evento o servicio contratado.",
    },
    {
      icon: Shield,
      title: "Rondas Preventivas",
      description: "Patrullaje estratégico en puntos clave para prevenir incidentes.",
    },
    {
      icon: Radio,
      title: "Comunicación Profesional",
      description: "Coordinación continua vía radios profesionales entre todo el equipo.",
    },
    {
      icon: Users,
      title: "Personal Capacitado",
      description: "Equipo entrenado con supervisión en terreno para garantizar el servicio.",
    },
    {
      icon: Clock,
      title: "Servicio 24/7",
      description: "Disponibilidad completa para cubrir cualquier horario que necesites.",
    },
    {
      icon: Headphones,
      title: "Atención Especializada",
      description: "Servicio personalizado adaptado a las necesidades específicas de cada cliente.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            En RT Security ofrecemos servicios integrales de seguridad privada, 
            adaptados a tus necesidades específicas con personal altamente capacitado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-primary/20 hover:border-primary/40"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-center leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            ¿Necesitas un servicio específico que no está listado?
          </p>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="text-primary hover:text-primary/80 font-semibold text-lg underline underline-offset-4 transition-colors"
          >
            Contáctanos para una solución personalizada
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;