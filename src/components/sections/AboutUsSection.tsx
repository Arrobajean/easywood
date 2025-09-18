import React from "react";
import AnimatedSection from "@/components/common/AnimatedSection";
import { motion } from "framer-motion";
import Masonry from "react-masonry-css";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ArrowRight } from "lucide-react";

const AboutUsSection = () => {
  const breakpointColumnsObj = {
    default: 2,
    768: 1,
  };

  return (
    <section
      id="quienes-somos"
      className="min-h-screen bg-white flex items-center"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="slideLeft">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 text-center md:text-left">
                Quiénes somos
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Con una{" "}
                  <strong className="text-black">
                    trayectoria de más de 25 años
                  </strong>{" "}
                  en el sector de la construcción y reformas, nos hemos
                  consolidado como una empresa de referencia en Madrid y
                  alrededores.
                </p>
                <p>
                  Nuestro compromiso se centra en ofrecer una{" "}
                  <strong className="text-black">
                    calidad duradera y acabados de distinción
                  </strong>{" "}
                  en cada proyecto que emprendemos. Trabajamos con la convicción
                  de que cada espacio merece ser transformado con excelencia y
                  atención al detalle.
                </p>
                <p>
                  Contamos con amplia experiencia en{" "}
                  <strong className="text-black">
                    reformas residenciales, comerciales e industriales
                  </strong>
                  , adaptándonos a las necesidades específicas de cada cliente y
                  tipo de proyecto.
                </p>
                <p>
                  Desde pequeñas reformas hasta proyectos integrales, nuestro
                  equipo multidisciplinar garantiza resultados que superan las
                  expectativas, combinando técnicas tradicionales con las
                  últimas innovaciones del sector.
                </p>
                
              </div>
              <div className="mt-8 flex justify-center md:justify-start">
                <Link to="/la-empresa">
                  <Button className="group flex items-center glass-button-dark bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 font-medium shadow-glass border-0">
                    <span>Conoce más sobre la empresa</span>
                    <ArrowRight
                      size={22}
                      className="ml-2 sm:opacity-0 sm:translate-x-4 sm:group-hover:opacity-100 sm:group-hover:translate-x-0 opacity-100 translate-x-0 transition-all duration-300 ease-out"
                    />
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slideLeft" delay={0.3}>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="flex gap-4"
              columnClassName="masonry-column"
            >
              {[
                {
                  src: "/images/proyectos/optimized/bano-elegante-alicatado-moderno.webp",
                  alt: "Baño elegante con alicatado moderno y ducha espaciosa.",
                  description:
                    "Reforma de baño que combina funcionalidad y diseño con acabados de alta calidad.",
                },
                {
                  src: "/images/proyectos/optimized/cocina-americana-con-isla-y-taburetes.webp",
                  alt: "Cocina americana de diseño con isla central y taburetes altos.",
                  description:
                    "Cocina funcional y elegante con una isla central que sirve como barra.",
                },
                {
                  src: "/images/proyectos/optimized/dormitorio-minimalista-con-cama-y-vistas.webp",
                  alt: "Dormitorio minimalista con cama grande y suelo de madera.",
                  description:
                    "Un refugio de paz y tranquilidad con grandes ventanales que maximizan la luz natural.",
                },
                {
                  src: "/images/proyectos/optimized/bano-con-ducha-de-obra-y-mampara-cristal.webp",
                  alt: "Baño de diseño con ducha de obra y mampara de cristal.",
                  description:
                    "Lujo y confort con azulejos de gran formato y elementos en negro mate.",
                },
              ].map(({ src, alt, description }, idx) => (
                <Tooltip key={idx} delayDuration={150}>
                  <TooltipTrigger asChild>
                    <motion.div
                      className="glass-card rounded-2xl shadow-glass mb-4 overflow-hidden cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <img
                        src={src}
                        alt={alt}
                        className="w-full max-w-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">{description}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </Masonry>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
