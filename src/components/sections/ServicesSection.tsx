import React, { useRef } from "react";
import {
  Hammer,
  Paintbrush,
  Sparkles,
  Droplets,
  Layers,
  Wrench,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/common/AnimatedSection";
import { motion, useInView } from "framer-motion";

const ServicesSection = () => {
  const services = [
    {
      icon: Hammer,
      title: "Instalación de suelos de madera y tarima",
      description:
        "Montaje profesional de parquet y tarima (maciza, multicapa, flotante) con acabados de alto nivel.",
    },
    {
      icon: Wrench,
      title: "Acuchillado y restauración de parquet",
      description:
        "Recuperamos suelos dañados: eliminamos rayas y desgastes para devolver el aspecto original.",
    },
    {
      icon: Paintbrush,
      title: "Lijado y barnizado al agua",
      description:
        "Barnices al agua, bajos en olor y alta resistencia. Protección duradera y acabado natural.",
    },
    {
      icon: Sparkles,
      title: "Pulido de suelos de madera",
      description:
        "Pulido fino para renovar el brillo y la uniformidad sin afectar el espesor de la madera.",
    },
    {
      icon: Droplets,
      title: "Aceitado y mantenimiento",
      description:
        "Tratamientos con aceites y ceras que realzan la veta y protegen frente al uso diario.",
    },
    {
      icon: Layers,
      title: "Suelos laminados y composite",
      description:
        "Instalación de laminados y tarimas composite: estética madera, alta durabilidad y fácil cuidado.",
    },
  ];

  return (
    <section
      id="servicios"
      className="min-h-dvh bg-background flex items-center"
    >
      <div className="container mx-auto px-6 py-20">
        <AnimatedSection animation="fade">
          <div className="text-center mb-16">
            <h2 className="text-sm font-medium text-gray-500 mb-4 tracking-wider uppercase">
              Servicios principales
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Soluciones profesionales para tus suelos
            </h3>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} animation="fade" delay={index * 0.1}>
                <div className="glass-card rounded-2xl p-8 h-full cursor-pointer group">
                  <div className="mb-6 text-center">
                    <IconWithRotateInView>
                      <service.icon className="w-8 h-8 text-white" />
                    </IconWithRotateInView>
                  </div>
                  <h4 className="text-xl font-semibold text-black mb-4 text-center">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-center">
                    {service.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" delay={0.6}>
          <div className="text-center mt-12">
            <Link to="/servicios">
              <Button
                size="lg"
                className="group flex items-center justify-center mx-auto glass-button-cararra px-6 py-4 md:px-10 md:py-6 text-base md:text-lg font-semibold rounded-lg border-0 w-full md:w-auto"
              >
                <span>Ver todos los servicios</span>
                <ArrowRight
                  size={18}
                  className="ml-2 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 ease-out"
                  aria-hidden="true"
                />
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

function IconWithRotateInView({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial={{ rotate: -180, opacity: 0, scale: 0.5 }}
      animate={
        isInView
          ? {
              rotate: 0,
              opacity: 1,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 200,
                damping: 10,
                duration: 0.8,
              },
            }
          : {}
      }
      className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto group-hover:bg-[#74bd51] transition-colors duration-300"
      whileHover={{
        scale: [1, 1.2, 1],
        transition: {
          duration: 0.6,
          times: [0, 0.5, 1],
          ease: "easeInOut",
        },
      }}
      whileTap={{
        scale: 0.95,
        transition: { duration: 0.1 },
      }}
    >
      {children}
    </motion.div>
  );
}

export default ServicesSection;
