import React from "react";
import AnimatedSection from "@/components/common/AnimatedSection";
import { motion } from "framer-motion";
import { Heart, Target, Award, Users } from "lucide-react";

const CompanyValuesSection = () => {
  const values = [
    {
      icon: Target,
      title: "Misión",
      description:
        "Transformar espacios creando hogares únicos que reflejen la personalidad y necesidades de nuestros clientes, siempre con la máxima calidad y profesionalidad.",
      color: "text-blue-600",
    },
    {
      icon: Heart,
      title: "Visión",
      description:
        "Ser la empresa de referencia en reformas integrales en Madrid, reconocida por nuestra excelencia, innovación y compromiso con la satisfacción del cliente.",
      color: "text-red-600",
    },
    {
      icon: Award,
      title: "Excelencia",
      description:
        "Aspiramos siempre a alcanzar la excelencia en nuestra profesión, utilizando los mejores materiales y las técnicas más avanzadas en cada proyecto.",
      color: "text-yellow-600",
    },
    {
      icon: Users,
      title: "Satisfacción Triple",
      description:
        "Nuestro éxito se mide por la triple satisfacción: de nuestros clientes, de la dirección facultativa y nuestra propia satisfacción por el trabajo bien hecho.",
      color: "text-green-600",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <AnimatedSection animation="slideUp">
          <div className="text-center mb-16">
            <h2 className="text-sm font-medium text-gray-500 mb-4 tracking-wider uppercase">
              Nuestros Valores
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Los pilares que nos definen
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nuestros valores no son solo palabras, son los principios que
              guían cada decisión y cada acción en nuestro día a día
              profesional.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <AnimatedSection
              key={index}
              animation="slideUp"
              delay={index * 0.2}
            >
              <motion.div
                className="glass-card rounded-2xl p-8 h-full"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start space-x-6">
                  <div
                    className={`flex-shrink-0 w-16 h-16 ${value.color} bg-gray-100 rounded-xl flex items-center justify-center`}
                  >
                    <value.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-black mb-4">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="scale" delay={0.8}>
          <div className="mt-16 text-center">
            <div className="glass-card rounded-2xl p-8 bg-black text-white inline-block">
              <h4 className="text-2xl font-bold mb-4">Nuestro Compromiso</h4>
              <p className="text-lg text-gray-300 max-w-2xl">
                "Consideramos la ilusión y el esfuerzo como elementos clave para
                lograr nuestro objetivo: ofrecer el más alto nivel de servicio
                al cliente"
              </p>
              <div className="mt-4 text-sm text-gray-400">
                - Filosofía Easywood
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CompanyValuesSection;
