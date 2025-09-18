import React from "react";
import AnimatedSection from "@/components/common/AnimatedSection";
import { motion } from "framer-motion";
import Masonry from "react-masonry-css";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const AboutUsSection = () => {
  const breakpointColumnsObj = {
    default: 2,
    768: 1,
  };

  return (
    <section
      id="quienes-somos"
      className="min-h-dvh bg-background flex items-center"
    >
      <div className="container mx-auto px-6 py-20">
        {/* Títulos centrados */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-gray-500 mb-4 tracking-wider uppercase">
            Quiénes somos
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Transformamos espacios con la belleza natural de la madera
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            En Easywood damos nueva vida a los suelos de madera.
          </p>
        </div>

        {/* Contenido: texto a la izquierda, imágenes a la derecha */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="slideLeft">
            <div className="space-y-6 text-gray-600 leading-relaxed">
              {/* Texto para móvil */}
              <div className="md:hidden">
                <p>
                  Somos una empresa familiar con tradición en la instalación y
                  restauración de parquet, tarimas y laminados.
                </p>
                <p>
                  Cuidamos cada proyecto con un{" "}
                  <strong className="text-black">enfoque artesanal</strong>,
                  combinando técnicas de carpintería de siempre con materiales
                  sostenibles y modernos. Apostamos por renovar suelos antiguos
                  y crear diseños personalizados a partir de{" "}
                  <strong className="text-black">madera recuperada</strong>,
                  porque creemos que la madera tiene una historia que merece
                  continuar.
                </p>
                <p>
                  Nuestro objetivo es transformar cada espacio en un{" "}
                  <strong className="text-black">
                    lugar acogedor, duradero y fiel a tu estilo
                  </strong>
                  , con acabados de calidad y atención a cada detalle.
                </p>
              </div>

              {/* Texto para escritorio */}
              <div className="hidden md:block">
                <p>
                  Somos una empresa familiar con tradición en la instalación y
                  restauración de parquet, tarimas y laminados.
                  <br />
                  <br />
                  Llevamos décadas dedicándonos a la madera y hemos aprendido
                  que cada suelo tiene su propia personalidad, su propia
                  historia.
                </p>
                <p>
                  Cuidamos cada proyecto con un{" "}
                  <strong className="text-black">enfoque artesanal</strong>,
                  combinando las técnicas de carpintería de siempre con
                  soluciones modernas y materiales sostenibles.
                  <br />
                  <br />
                  Nuestro trabajo no es solo renovar, también es conservar:
                  devolver el brillo a suelos antiguos y dar vida a nuevos
                  diseños personalizados a partir de{" "}
                  <strong className="text-black">madera recuperada</strong>,
                  porque creemos que la madera merece seguir contando historias
                  generación tras generación.
                </p>
                <p>
                  En Easywood entendemos que un suelo no es solo una superficie:
                  es la base sobre la que caminas, compartes y construyes tu
                  hogar.
                  <br />
                  <br />
                  Por eso trabajamos con precisión, limpieza y respeto por tu
                  espacio, asegurándonos de que cada detalle esté a la altura.
                </p>
                <p>
                  Nuestro objetivo es transformar cada estancia en un{" "}
                  <strong className="text-black">
                    lugar acogedor, duradero y fiel a tu estilo
                  </strong>
                  , con acabados que transmitan calidad y calidez desde el
                  primer paso.
                </p>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <Link to="/nuestros-trabajos">
                <Button className="group flex items-center glass-button-white-bg px-8 py-3 rounded-lg border-0">
                  <span>Ver nuestros trabajos</span>
                  <ArrowRight
                    size={22}
                    className="ml-2 sm:opacity-0 sm:translate-x-4 sm:group-hover:opacity-100 sm:group-hover:translate-x-0 opacity-100 translate-x-0 transition-all duration-300 ease-out"
                  />
                </Button>
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slideRight" delay={0.3}>
            <div className="masonry-container">
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="flex gap-4"
                columnClassName="masonry-column"
              >
                {[
                  {
                    src: "/images/UI/landing6.jpeg",
                    alt: "Suelo de madera herringbone con acabado brillante y elegante.",
                    description:
                      "Instalación de parquet herringbone con acabado profesional que realza la belleza natural de la madera.",
                    style: "tall", // Imagen alta
                  },
                  {
                    src: "/images/UI/landing3.jpeg",
                    alt: "Suelo de madera con patrón basketweave en tonos cálidos.",
                    description:
                      "Parquet con diseño basketweave que combina diferentes tonos de madera para crear un ambiente acogedor.",
                    style: "wide", // Imagen ancha
                  },
                  {
                    src: "/images/UI/landing2.jpeg",
                    alt: "Suelo de madera con diseño moderno y líneas rectas.",
                    description:
                      "Instalación moderna de tarima con acabados de alta calidad y diseño contemporáneo.",
                    style: "square", // Imagen cuadrada
                  },
                  {
                    src: "/images/UI/landing1.jpeg",
                    alt: "Suelo de madera natural con vetas visibles y acabado mate.",
                    description:
                      "Suelo de madera natural con tratamiento especial que preserva la belleza original de las vetas.",
                    style: "medium", // Imagen mediana
                  },
                ].map(({ src, alt, description, style }, idx) => (
                  <motion.div
                    key={idx}
                    className={`glass-card rounded-2xl shadow-glass mb-4 overflow-hidden cursor-pointer relative group ${
                      style === "tall"
                        ? "h-80"
                        : style === "wide"
                        ? "h-48"
                        : style === "square"
                        ? "h-64"
                        : "h-56"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img
                      src={src}
                      alt={alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-sm font-medium leading-tight">
                        {description}
                      </p>
                    </div>
                    {style === "tall" && (
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                        <span className="text-xs font-semibold text-gray-800">
                          Herringbone
                        </span>
                      </div>
                    )}
                    {style === "wide" && (
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                        <span className="text-xs font-semibold text-gray-800">
                          Basketweave
                        </span>
                      </div>
                    )}
                    {style === "square" && (
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                        <span className="text-xs font-semibold text-gray-800">
                          Moderno
                        </span>
                      </div>
                    )}
                    {style === "medium" && (
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                        <span className="text-xs font-semibold text-gray-800">
                          Natural
                        </span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </Masonry>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
