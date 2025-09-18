import React from "react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/common/AnimatedSection";
import { motion } from "framer-motion";
import { Hammer } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { useHeroImages, useWhatsApp, useResponsiveAnimation } from "@/hooks";

const HeroSection = () => {
  const { heroImages, currentSlide, handleSlideChange } = useHeroImages();
  const { handleWhatsAppClick } = useWhatsApp();
  const timing = useResponsiveAnimation();

  return (
    <section
      className="relative h-screen overflow-hidden"
      role="banner"
      aria-label="Sección principal"
    >
      {/* Background with fallback */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700" />

      {/* Image Slider */}
      <div
        className="absolute inset-0"
        role="img"
        aria-label="Galería de trabajos destacados"
      >
        {heroImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0 optimize-interactions"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover opacity-90"
              loading="eager"
              decoding="async"
            />
          </motion.div>
        ))}
      </div>

      {/* Glass Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-4xl mx-auto px-6">
          <div className="p-8 md:p-12">
            {/* H1 - Primera jerarquía */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: timing.h1.duration,
                delay: timing.h1.delay,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">
                Instalación y remodelación de pisos de madera
              </h1>
            </motion.div>

            {/* Subtítulo - Segunda jerarquía */}
            <motion.div
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: timing.subtitle.duration,
                delay: timing.subtitle.delay,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <p className="text-lg md:text-xl mb-8 opacity-90 text-balance max-w-3xl mx-auto">
                Tradición familiar, calidad artesanal y materiales sostenibles
                para transformar tu espacio.
              </p>
            </motion.div>

            {/* Botones - Tercera jerarquía con bounce sutil */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: timing.buttons.duration,
                delay: timing.buttons.delay,
                ease: [0.34, 1.56, 0.64, 1], // Bounce sutil
              }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              {/* Botón principal - Cuarta jerarquía */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: timing.primaryButton.duration,
                  delay: timing.primaryButton.delay,
                  ease: [0.25, 0.46, 0.45, 0.94], // Bounce más sutil
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  onClick={handleWhatsAppClick}
                  className="group flex items-center glass-hero-button px-10 py-4 text-lg touch-optimized optimize-interactions border-0"
                  aria-label="Contactar por WhatsApp para tu renovación"
                >
                  <span>Quiero mi renovación</span>
                  <SiWhatsapp
                    size={20}
                    className="ml-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 ease-out group-hover:text-[#25D366]"
                    aria-hidden="true"
                  />
                </Button>
              </motion.div>

              {/* Botón secundario - Quinta jerarquía */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: timing.secondaryButton.duration,
                  delay: timing.secondaryButton.delay,
                  ease: [0.25, 0.46, 0.45, 0.94], // Bounce más sutil
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  onClick={() => (window.location.href = "/proyectos")}
                  className="group flex items-center glass-hero-button px-10 py-4 text-lg touch-optimized optimize-interactions border-0"
                  aria-label="Ver antes y después de nuestros trabajos"
                >
                  <span>Nuestros Trabajos</span>
                  <Hammer
                    size={20}
                    className="ml-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 ease-out group-hover:text-black"
                    aria-hidden="true"
                  />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Slide indicators - Hidden since we only have one image */}
      {heroImages.length > 1 && (
        <AnimatedSection animation="fade" delay={0.5}>
          <div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2"
            role="group"
            aria-label="Indicadores de diapositivas"
          >
            {heroImages.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => handleSlideChange(index)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className={`w-3 h-3 rounded-full fast-transitions touch-optimized optimize-interactions ${
                  index === currentSlide
                    ? "bg-white shadow-glass"
                    : "bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`Ir a la diapositiva ${index + 1}`}
                aria-current={index === currentSlide ? "true" : "false"}
              />
            ))}
          </div>
        </AnimatedSection>
      )}
    </section>
  );
};

export default HeroSection;
