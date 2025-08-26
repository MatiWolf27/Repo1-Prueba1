import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Clock, Star } from "lucide-react";

const Cases = () => {
  const cases = [
    {
      title: "Festival de Verano 2024",
      location: "Viña del Mar",
      duration: "3 días",
      attendees: "15,000",
      description: "Seguridad integral para festival musical con múltiples escenarios. Control de accesos, vigilancia de áreas VIP y coordinación con autoridades locales.",
      services: ["Control de Accesos", "Vigilancia VIP", "Coordinación Oficial"],
      result: "0 incidentes reportados, 98% satisfacción del cliente",
      image: "/lovable-uploads/c8102f1d-0369-4fae-b0b4-03cd9c90bb95.png"
    },
    {
      title: "Centro Comercial Plaza Norte",
      location: "Santiago",
      duration: "Contrato anual",
      attendees: "5,000 diarios",
      description: "Servicio de seguridad 24/7 para centro comercial con alta afluencia. Vigilancia, control de accesos y respuesta a emergencias.",
      services: ["Vigilancia 24/7", "Control Perimetral", "Respuesta Emergencias"],
      result: "Reducción del 85% en incidentes de seguridad",
      image: "/lovable-uploads/a00509cb-7988-444f-b2b6-7b5500cd1553.png"
    },
    {
      title: "Evento Corporativo Tech Summit",
      location: "Las Condes",
      duration: "2 días",
      attendees: "800",
      description: "Seguridad especializada para evento corporativo de alta gama con asistentes internacionales y tecnología sensible.",
      services: ["Seguridad VIP", "Control Tecnológico", "Protocolo Internacional"],
      result: "Evento exitoso sin contratiempos de seguridad",
      image: "/lovable-uploads/bf93375e-2712-4f87-b142-ea60f1efb993.png"
    },
    {
      title: "Concierto Estadio Nacional",
      location: "Ñuñoa",
      duration: "1 día",
      attendees: "45,000",
      description: "Operativo de seguridad masivo para concierto internacional. Coordinación con Carabineros y manejo de multitudes.",
      services: ["Manejo Multitudes", "Coordinación Oficial", "Seguridad Artistas"],
      result: "Operativo exitoso reconocido por las autoridades",
      image: "/lovable-uploads/23ea326c-61c9-4ce0-920b-3104bc86223d.png"
    },
  ];

  return (
    <section id="cases" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Casos de Éxito
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Conoce algunos de nuestros proyectos más destacados donde hemos demostrado 
            nuestra capacidad y profesionalismo en diferentes tipos de eventos y establecimientos.
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {cases.map((caseItem, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-primary/20 hover:border-primary/40">
              <CardHeader className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {caseItem.services.map((service, serviceIndex) => (
                    <Badge key={serviceIndex} variant="secondary" className="text-xs">
                      {service}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {caseItem.title}
                </CardTitle>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {caseItem.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {caseItem.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {caseItem.attendees} personas
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {caseItem.description}
                </CardDescription>
                <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">Resultado: </span>
                      <span className="text-muted-foreground">{caseItem.result}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Cases;