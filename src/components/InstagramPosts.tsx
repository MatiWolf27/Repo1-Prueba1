import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Share, Eye, Play } from "lucide-react";

const InstagramPosts = () => {
  console.log("InstagramPosts component is rendering");
  
  const posts = [
    {
      id: 1,
      type: "image",
      media: "/lovable-uploads/23ea326c-61c9-4ce0-920b-3104bc86223d.png",
      caption: "Operativo exitoso en el Estadio Nacional. 45,000 personas protegidas con cero incidentes. #Seguridad #EventosMasivos",
      likes: 234,
      comments: 18,
      views: 1200,
      tags: ["Eventos Masivos", "Estadio Nacional"],
      date: "2024-03-15",
      link: "https://www.instagram.com/p/DL5TskmxbjK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
      id: 2,
      type: "video",
      media: "/lovable-uploads/AQN8HxTGOssnNEmouQn0EOffoWfQJbXeBELhkUnAHV7mVRNmCYlCYUFLY3u9jVEFdcjXZ_mUeNoKP7T78D9w62n-dkED8ihnmHx-gtc.mp4",
      caption: "Centro Comercial Plaza Norte bajo nuestra protección 24/7. Reducción del 85% en incidentes de seguridad. #SeguridadComercial",
      likes: 156,
      comments: 12,
      views: 890,
      tags: ["Seguridad 24/7", "Centro Comercial"],
      date: "2024-03-10",
      link: "https://www.instagram.com/reel/DLyWaREsBaZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
      id: 3,
      type: "image",
      media: "/lovable-uploads/bf93375e-2712-4f87-b142-ea60f1efb993.png",
      caption: "Tech Summit Las Condes - Seguridad VIP para 800 asistentes internacionales. Protocolo de alta gama ejecutado a la perfección. #VIP #TechSummit",
      likes: 189,
      comments: 25,
      views: 1450,
      tags: ["Seguridad VIP", "Eventos Corporativos"],
      date: "2024-03-08",
      link: "https://www.instagram.com/p/DLyXnLAsLKT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
      id: 4,
      type: "video",
      media: "/lovable-uploads/AQNhoFB2i-K9oA4QG9nusH9bh83xGo0jITXfe3at_xnZ23cDXrhPxYG9Sd_2UzlmT8DKRKzOGVPcJ1tN-J6iB56XUljSBcuRCaLnmwQ.mp4",
      caption: "Festival de Verano Viña del Mar 2024. 3 días de música sin interrupciones. 15,000 personas disfrutaron con total seguridad. #Festival #ViñaDelMar",
      likes: 312,
      comments: 34,
      views: 2100,
      tags: ["Festival", "Control de Accesos"],
      date: "2024-02-28",
      link: "https://www.instagram.com/reel/DL8ho7Ly3ww/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
      id: 5,
      type: "image",
      media: "/lovable-uploads/c8102f1d-0369-4fae-b0b4-03cd9c90bb95.png",
      caption: "Entrenamiento especializado de nuestro equipo. Personal certificado y en constante capacitación para brindar el mejor servicio. #Entrenamiento #Profesionalismo",
      likes: 98,
      comments: 8,
      views: 650,
      tags: ["Entrenamiento", "Personal Certificado"],
      date: "2024-02-20",
      link: "https://www.instagram.com/p/DLyXnLAsLKT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
      id: 6,
      type: "video",
      media: "/lovable-uploads/AQOpx-VA4jZt0FptsElE_7xJrjQDUREhgMsPj7_3IR5oYNzu8OxwaI2qV7imY3izYX-S3qBraJlguOtUcJoQTh4k5070UhCvRCi9dxg.mp4",
      caption: "Nueva tecnología de vigilancia implementada. Cámaras de alta definición y sistemas de monitoreo avanzados. #Tecnología #Innovación",
      likes: 167,
      comments: 15,
      views: 980,
      tags: ["Tecnología", "Vigilancia"],
      date: "2024-02-15",
      link: "https://www.instagram.com/reel/DLlg-iSsAqi/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    }
  ];

  return (
    <section id="posts" className="pt-20 pb-10 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Síguenos en Nuestras Redes
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Mantente al día con nuestros últimos proyectos, entrenamientos y novedades. 
            Descubre cómo protegemos a nuestros clientes día a día.
          </p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {posts.map((post) => (
            <Card 
              key={post.id} 
              className="group relative overflow-hidden h-80 cursor-pointer border-primary/20 hover:border-primary/40 shadow-lg hover:shadow-xl transition-all duration-300"
              onMouseEnter={(e) => {
                const video = e.currentTarget.querySelector('video');
                if (video) video.play();
              }}
              onMouseLeave={(e) => {
                const video = e.currentTarget.querySelector('video');
                if (video) video.pause();
              }}
              onClick={() => {
                if (post.link) {
                  window.open(post.link, '_blank', 'noopener,noreferrer');
                }
              }}
            >
              {/* Media */}
              <div className="absolute inset-0">
                {post.type === "image" ? (
                  <img 
                    src={post.media} 
                    alt={`Post ${post.id}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <video 
                      src={post.media}
                      className="w-full h-full object-cover"
                      muted
                      loop
                      playsInline
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black/50 rounded-full p-3">
                        <Play className="w-8 h-8 text-white" fill="white" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-white/20 text-white border-white/30 text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                {/* Caption */}
                <div className="text-white">
                  <p className="text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.caption}
                  </p>
                  
                  {/* Stats */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{post.comments}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{post.views}</span>
                      </div>
                    </div>
                    <span className="text-white/80">{new Date(post.date).toLocaleDateString('es-ES')}</span>
                  </div>
                </div>
              </div>
              
              {/* Hover Icon */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Share className="w-5 h-5 text-white" />
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default InstagramPosts;
