import React from "react";
import AnimatedSection from "@/components/common/AnimatedSection";
import { motion } from "framer-motion";
import { MessageSquare, Wrench, CheckCircle, Heart } from "lucide-react";

const CompanyProcessSection = () => {
  const processSteps = [
    {
      icon: MessageSquare,
      title: "Consulta inicial",
      description:
        "Visitamos tu espacio y analizamos tus necesidades para crear un presupuesto personalizado.",
    },
    {
      icon: Wrench,
      title: "Diseño y planificación",
      description:
        "Desarrollamos el proyecto técnico completo con materiales y cronograma detallado.",
    },
    {
      icon: CheckCircle,
      title: "Ejecución",
      description:
        "Nuestro equipo ejecuta la reforma con supervisión constante y comunicación transparente.",
    },
    {
      icon: Heart,
      title: "Entrega",
      description:
        "Entregamos tu nuevo espacio con garantías incluidas y servicio postventa.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection animation="slideUp">
          <div className="text-center mb-16">
            <h2 className="text-sm font-medium text-gray-500 mb-4 tracking-wider uppercase">
              Nuestro Proceso
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Metodología probada en más de 200 proyectos
            </h3>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <AnimatedSection
              key={index}
              animation="slideUp"
              delay={index * 0.15}
            >
              <motion.div className="text-center p-6" whileHover={{ y: -5 }}>
                <div className="w-16 h-16 bg-black text-white rounded-xl flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-black mb-4">
                  {step.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="scale" delay={0.8}>
          <div className="mt-16 text-center">
            <div className="bg-black text-white rounded-2xl p-8 max-w-3xl mx-auto">
              <h4 className="text-2xl font-bold mb-4">
                100% Garantía de satisfacción
              </h4>
              <p className="text-gray-300">
                Tu satisfacción es nuestro principal objetivo. Ofrecemos 2 años
                de garantía y servicio postventa 24/7.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CompanyProcessSection;
