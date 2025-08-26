import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Users, Award, Clock, Target } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: Users,
      number: "50+",
      label: "Clientes Satisfechos",
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Disponibilidad",
    },
    {
      icon: Award,
      number: "100%",
      label: "Personal Certificado",
    },
    {
      icon: Target,
      number: "0",
      label: "Incidentes Graves",
    },
  ];

  const values = [
    {
      title: "Misión",
      description: "Nuestra misión es proporcionar servicios de seguridad privada de la más alta calidad, garantizando la protección y tranquilidad de nuestros clientes a través de un equipo de profesionales altamente capacitados y comprometidos. Nos esforzamos por ser líderes en el sector, utilizando tecnología de vanguardia y estrategias de seguridad personalizadas para cada situación.",
    },
    {
      title: "Visión",
      description: "Nuestra visión es ser la empresa de seguridad privada más confiable y reconocida de Chile, destacándonos por nuestra excelencia operativa, innovación constante y un enfoque centrado en el cliente. Aspiramos a expandir nuestra presencia a nivel nacional, estableciendo nuevos estándares de seguridad y contribuyendo al bienestar de la comunidad.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sobre RT Security
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Somos una empresa especializada en seguridad privada con años de experiencia 
            protegiendo eventos, establecimientos y personas en todo tipo de situaciones.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Nuestra Historia
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                RT Security nace de la necesidad de brindar servicios de seguridad de alta calidad, 
                con personal profesional y herramientas especializadas para cada tipo de evento o establecimiento.
              </p>
              <p>
                Nuestro equipo está formado por profesionales certificados que entienden la importancia 
                de la prevención y la respuesta rápida ante cualquier situación.
              </p>
              <p>
                Hemos trabajado en una amplia variedad de eventos y establecimientos, desde conciertos 
                y festivales hasta empresas y centros comerciales, siempre manteniendo nuestro compromiso 
                con la excelencia en el servicio.
              </p>
            </div>
            <Button 
              className="mt-6"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Conoce Más Sobre Nosotros
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={index}
                  className="text-center p-6 bg-secondary/30 rounded-lg border border-primary/20 hover:border-primary/40 transition-colors"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            Nuestros Valores
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="text-center p-6 rounded-lg border-2 border-primary/20 bg-secondary/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-shadow duration-300"
              >
                <h4 className="text-2xl font-bold text-foreground mb-4">
                  {value.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Recruitment Section */}
        <div className="text-center bg-secondary/30 rounded-lg p-8 border border-primary/20">
          <h3 className="text-3xl font-bold text-foreground mb-6">
            ¿Quieres ser parte del equipo RT Security?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Únete a nuestro equipo de profesionales en seguridad privada. 
            Envía tu CV y forma parte de una empresa líder en el sector.
          </p>
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
            onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=rtsecurity@gmail.com&su=Postulación%20RT%20Security&body=Estimados,%0A%0AMe%20interesa%20formar%20parte%20del%20equipo%20RT%20Security.%20Adjunto%20mi%20CV%20para%20su%20consideración.%0A%0ASaludos%20cordiales', '_blank')}
          >
            Envía tu CV aquí
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;