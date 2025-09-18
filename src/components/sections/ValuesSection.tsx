import React, { useRef } from "react";
import { Target, Eye, Heart } from "lucide-react";
import AnimatedSection from "@/components/common/AnimatedSection";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const ValuesSection = () => {
  const values = [
    {
      icon: Target,
      title: "Misión",
      description:
        "Transformar espacios con calidad y cuidado, utilizando siempre los mejores materiales para garantizar resultados duraderos y excepcionales.",
    },
    {
      icon: Eye,
      title: "Visión",
      description:
        "Ser líderes en reformas mediante una planificación rigurosa y precios accesibles, haciendo realidad los sueños de nuestros clientes.",
    },
    {
      icon: Heart,
      title: "Valores",
      description:
        "Sinceridad, puntualidad, excelencia y trato cercano. Construimos relaciones de confianza basadas en la transparencia y el compromiso.",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center">
      <div className="container mx-auto px-6 py-20">
        <AnimatedSection animation="slideUp">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Misión · Visión · Valores
            </h2>
            <p className="text-lg text-gray-600">
              Los pilares que guían nuestro trabajo día a día
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <AnimatedSection
                key={index}
                animation="slideUp"
                delay={index * 0.15}
              >
                <div className="text-center h-full">
                  <div className="glass-card rounded-2xl p-8 h-full">
                    <IconWithRotateInView>
                      <value.icon className="w-8 h-8 text-white" />
                    </IconWithRotateInView>
                    <h3 className="text-xl font-semibold text-black mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
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
      className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6"
    >
      {children}
    </motion.div>
  );
}

export default ValuesSection;
