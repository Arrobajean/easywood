import React from "react";
import { Search, FileText, Calendar, Wrench, Key } from "lucide-react";
import AnimatedSection from "@/components/common/AnimatedSection";
import { motion } from "framer-motion";

const ProcessSection = () => {
  const steps = [
    {
      icon: Search,
      title: "Visita y asesoría gratuita",
      description:
        "Analizamos tu espacio y necesidades sin compromiso. Te asesoramos sobre las mejores opciones para tu proyecto.",
    },
    {
      icon: FileText,
      title: "Presupuesto detallado (< 24h)",
      description:
        "Recibes un presupuesto completo y transparente en menos de 24 horas, sin sorpresas ni costes ocultos.",
    },
    {
      icon: Calendar,
      title: "Planificación y calendario",
      description:
        "Definimos juntos los tiempos y fases del proyecto, adaptándonos a tus necesidades y disponibilidad.",
    },
    {
      icon: Wrench,
      title: "Ejecución y seguimiento",
      description:
        "Nuestro equipo ejecuta el proyecto con seguimiento diario, manteniéndote informado en todo momento.",
    },
    {
      icon: Key,
      title: "Entrega llave en mano + limpieza",
      description:
        "Entregamos tu proyecto completamente terminado y limpio, listo para que puedas disfrutarlo inmediatamente.",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center">
      <div className="container mx-auto px-6 py-12">
        <AnimatedSection animation="slideUp">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Nuestro proceso de trabajo
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Un método probado que garantiza resultados excepcionales en cada
              proyecto
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
                  <motion.div
                    className="relative flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Ícono */}
                    <div className="flex-shrink-0 relative mx-auto md:mx-0">
                      <motion.div
                        className="w-12 h-12 md:w-14 md:h-14 bg-black rounded-full flex items-center justify-center shadow-glass relative z-10"
                        whileHover={{ scale: 1.05 }}
                        whileInView={{
                          rotate: [0, 10, 0],
                          transition: { duration: 0.6, delay: index * 0.1 },
                        }}
                        viewport={{ once: true }}
                      >
                        <step.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                      </motion.div>
                    </div>

                    {/* Contenido */}
                    <div className="flex-1 glass-card rounded-xl p-6 hover:shadow-glass-lg transition-all duration-300 w-full">
                      <h3 className="text-lg md:text-xl font-semibold text-black mb-3 text-center md:text-left">
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
