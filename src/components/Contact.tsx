import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    telefono: '',
    email: '',
    servicio: '',
    mensaje: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar campos obligatorios
    if (!formData.nombre || !formData.telefono || !formData.email || !formData.mensaje) {
      alert('Por favor completa todos los campos obligatorios (*)');
      return;
    }

    // Crear mensaje para WhatsApp
    const mensaje = `🔒 *NUEVA SOLICITUD DE COTIZACIÓN - RT SECURITY*

👤 *Datos del Cliente:*
• Nombre: ${formData.nombre}
• Empresa: ${formData.empresa || 'No especificada'}
• Teléfono: ${formData.telefono}
• Email: ${formData.email}

🛡️ *Servicio Solicitado:*
${formData.servicio || 'No especificado'}

📝 *Mensaje:*
${formData.mensaje}

---
Solicitud enviada desde la página web RT Security`;

    // Codificar mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensaje);
    
    // Número de WhatsApp (mismo que el botón flotante)
    const numeroWhatsApp = '56986347352';
    
    // Crear URL de WhatsApp
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;
    
    // Abrir WhatsApp
    window.open(urlWhatsApp, '_blank');
    
    // Limpiar formulario
    setFormData({
      nombre: '',
      empresa: '',
      telefono: '',
      email: '',
      servicio: '',
      mensaje: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      info: "+56 9 5042 0345",
      action: "tel:+56950420345",
    },
    {
      icon: Mail,
      title: "Email",
      info: "rt.seguridadprivada24@gmail.com",
      action: "mailto:rt.seguridadprivada24@gmail.com",
    },
    {
      icon: Instagram,
      title: "Instagram",
      info: "@rtsecurity.cl",
      action: "https://instagram.com/rtsecurity.cl",
    },
    {
      icon: Clock,
      title: "Horario",
      info: "24/7 Disponibles",
      action: null,
    },
  ];

  return (
    <section id="contact" className="pt-20 pb-10 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contáctanos
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            ¿Necesitas servicios de seguridad profesional? Estamos aquí para ayudarte. 
            Contactanos para recibir una cotización personalizada sin compromiso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">
                Solicita tu Cotización
              </CardTitle>
              <CardDescription>
                Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Nombre *
                    </label>
                    <Input 
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      placeholder="Tu nombre completo" 
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Empresa
                    </label>
                    <Input 
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleInputChange}
                      placeholder="Nombre de tu empresa" 
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Teléfono *
                    </label>
                    <Input 
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      placeholder="+56 9 XXXX XXXX" 
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Email *
                    </label>
                    <Input 
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="tu@email.com" 
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <label className="text-sm font-medium text-foreground">
                    Tipo de Servicio
                  </label>
                  <select 
                    name="servicio"
                    value={formData.servicio}
                    onChange={handleInputChange}
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="Seguridad para Eventos">Seguridad para Eventos</option>
                    <option value="Vigilancia 24/7">Vigilancia 24/7</option>
                    <option value="Control de Accesos">Control de Accesos</option>
                    <option value="Seguridad VIP">Seguridad VIP</option>
                    <option value="Consultoría en Seguridad">Consultoría en Seguridad</option>
                    <option value="Otro">Otro (especificar en mensaje)</option>
                  </select>
                </div>

                <div className="space-y-2 mb-6">
                  <label className="text-sm font-medium text-foreground">
                    Mensaje *
                  </label>
                  <Textarea 
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    placeholder="Describe tu proyecto, fechas, ubicación y cualquier requerimiento especial..."
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Enviar Solicitud
                </Button>
              </form>

              <p className="text-xs text-muted-foreground text-center">
                * Campos obligatorios. Tu información está protegida y no será compartida.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Información de Contacto
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div 
                      key={index}
                      className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg border border-primary/20 hover:border-primary/40 transition-colors"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {item.title}
                        </h4>
                        {item.action ? (
                          <a 
                            href={item.action}
                            className="text-muted-foreground hover:text-primary transition-colors"
                            target={item.action.startsWith('http') ? '_blank' : undefined}
                            rel={item.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {item.info}
                          </a>
                        ) : (
                          <span className="text-muted-foreground">{item.info}</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Response Promise */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h4 className="font-bold text-foreground mb-3">
                  Respuesta Garantizada
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Respuesta en menos de 24 horas</li>
                  <li>✓ Cotización personalizada sin costo</li>
                  <li>✓ Asesoría especializada incluida</li>
                  <li>✓ Disponibilidad 24/7 para emergencias</li>
                </ul>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="bg-destructive/5 border-destructive/20">
              <CardContent className="p-6">
                <h4 className="font-bold text-foreground mb-3">
                  ¿Necesitas Seguridad Urgente?
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Para situaciones que requieren atención inmediata, llámanos directamente.
                </p>
                <Button variant="destructive" className="w-full">
                  <Phone className="w-4 h-4 mr-2" />
                  Llamar Ahora: +56 9 5042 0345
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;