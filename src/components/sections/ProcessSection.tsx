import React from "react";
import { Search, FileText, Calendar, Wrench, Key } from "lucide-react";
import AnimatedSection from "@/components/common/AnimatedSection";
import { motion } from "framer-motion";

const ProcessSection = () => {
  const steps = [
    {
      icon: Search,
      title: "Visita y asesoría técnica gratuita",
      description:
        "Medición del suelo, evaluación del estado y recomendaciones: instalación, acuchillado o mantenimiento.",
    },
    {
      icon: FileText,
      title: "Presupuesto detallado (< 24/48h)",
      description:
        "Opciones de materiales (barnices al agua, aceites, tarimas) y plan de trabajo transparente.",
    },
    {
      icon: Calendar,
      title: "Planificación y preparación",
      description:
        "Protección de mobiliario, preparación del soporte y calendario de ejecución sin sorpresas.",
    },
    {
      icon: Wrench,
      title: "Ejecución especializada",
      description:
        "Maquinaria profesional para lijado, acuchillado y aplicación de acabados de alta resistencia.",
    },
    {
      icon: Key,
      title: "Entrega y mantenimiento",
      description:
        "Limpieza final, recomendaciones de cuidado y plan de mantenimiento opcional (aceitado/pulido).",
    },
  ];

  return (
    <section className="min-h-dvh bg-background flex items-center">
      <div className="container mx-auto px-6 py-12">
        <AnimatedSection animation="slideUp">
          <div className="text-center mb-8">
            <h2 className="text-sm font-medium text-gray-500 mb-4 tracking-wider uppercase">
              Nuestro proceso
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Nuestro proceso de trabajo
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Metodología especializada para suelos de madera. Resultado
              profesional y duradero.
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Línea vertical - solo visible en desktop */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 hidden lg:block"></div>

            <div className="space-y-4 md:space-y-6">
              {steps.map((step, index) => (
                <AnimatedSection
                  key={index}
                  animation="slideUp"
                  delay={index * 0.15}
                >
                  <motion.div className="relative flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6 group">
                    {/* Ícono */}
                    <div className="flex-shrink-0 relative mx-auto md:mx-0">
                      <motion.div
                        className="w-12 h-12 md:w-14 md:h-14 bg-black rounded-full flex items-center justify-center shadow-glass relative z-10 group-hover:bg-[#74bd51] transition-colors duration-300"
                        initial={{ rotate: -180, opacity: 0, scale: 0.5 }}
                        whileInView={{
                          rotate: 0,
                          opacity: 1,
                          scale: 1,
                          transition: {
                            type: "spring",
                            stiffness: 200,
                            damping: 10,
                            duration: 0.8,
                            delay: index * 0.15,
                          },
                        }}
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
                        viewport={{ once: true }}
                      >
                        <step.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                      </motion.div>
                    </div>

                    {/* Contenido */}
                    <div className="flex-1 glass-card rounded-xl p-6 hover:shadow-glass-lg transition-all duration-300 w-full">
                      <h3 className="text-xl md:text-2xl font-semibold text-black mb-3 text-center md:text-left">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-center md:text-left text-sm md:text-base">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
