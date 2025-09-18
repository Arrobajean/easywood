import React, { useRef } from "react";
import {
  Home,
  ChefHat,
  Hammer,
  Paintbrush,
  Zap,
  DoorOpen,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/common/AnimatedSection";
import { motion, useInView } from "framer-motion";

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: "Reformas integrales / parciales",
      description:
        "Transformación completa de espacios, desde reformas integrales hasta intervenciones parciales específicas.",
    },
    {
      icon: ChefHat,
      title: "Cocinas y baños",
      description:
        "Diseño y reforma de cocinas modernas y baños funcionales, optimizando cada metro cuadrado.",
    },
    {
      icon: Hammer,
      title: "Suelos, tarimas, puertas",
      description:
        "Instalación de pavimentos, tarimas flotantes y puertas de interior y exterior de alta calidad.",
    },
    {
      icon: Paintbrush,
      title: "Pintura y pladur",
      description:
        "Acabados perfectos en pintura y trabajos de pladur para divisiones y techos decorativos.",
    },
    {
      icon: Zap,
      title: "Electricidad y gestión",
      description:
        "Instalaciones eléctricas completas y gestión integral de todos los aspectos técnicos.",
    },
    {
      icon: DoorOpen,
      title: "Ventanas y cerramientos",
      description:
        "Instalación de ventanas de PVC, aluminio y cerramientos para mejorar el aislamiento.",
    },
  ];

  return (
    <section id="servicios" className="min-h-screen bg-white flex items-center">
      <div className="container mx-auto px-6 py-20">
        <AnimatedSection animation="fade">
          <div className="text-center mb-16">
            <h2 className="text-sm font-medium text-gray-500 mb-4 tracking-wider uppercase">
              Servicios principales
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Soluciones completas para tu hogar
            </h3>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} animation="fade" delay={index * 0.1}>
                <div className="glass-card rounded-2xl p-8 h-full cursor-pointer">
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
              <button className="group flex items-center justify-center mx-auto glass-button-dark bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 font-medium shadow-glass border-0">
                <span>Ver todos los servicios</span>
                <ArrowRight
                  size={22}
                  className="ml-2 sm:opacity-0 sm:translate-x-4 sm:group-hover:opacity-100 sm:group-hover:translate-x-0 opacity-100 translate-x-0 transition-all duration-300 ease-out"
                />
              </button>
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
      initial={{ rotate: -180, opacity: 0 }}
      animate={isInView ? { rotate: 0, opacity: 1 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto"
    >
      {children}
    </motion.div>
  );
}

export default ServicesSection;
