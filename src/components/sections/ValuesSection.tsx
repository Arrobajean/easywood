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
        "Dar nueva vida a los suelos de madera, cuidando cada detalle con acabados profesionales, sostenibles y duraderos. Queremos que disfrutes de un suelo que se sienta como nuevo y resista el paso del tiempo.",
    },
    {
      icon: Eye,
      title: "Visión",
      description:
        "Convertirnos en la referencia de Madrid en instalación y restauración de parquet, tarimas y laminados, siendo conocidos por la calidad, la confianza y la pasión con la que trabajamos cada proyecto.",
    },
    {
      icon: Heart,
      title: "Valores",
      description:
        "Nos guiamos por la transparencia en cada presupuesto, la puntualidad en los plazos, la excelencia técnica en los acabados y una atención cercana que da confianza de principio a fin.",
    },
  ];

  return (
    <section className="min-h-dvh bg-background flex items-center">
      <div className="container mx-auto px-6 py-20">
        <AnimatedSection animation="slideUp">
          <div className="text-center mb-16">
            <h2 className="text-sm font-medium text-gray-500 mb-4 tracking-wider uppercase">
              Nuestros valores
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Lo que nos mueve en Easywood
            </h3>
            <p className="text-lg text-gray-600">
              No solo instalamos suelos, creamos la base sobre la que vivirás
              cada día.
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
                  <div className="glass-card rounded-2xl p-8 h-full group">
                    <IconWithRotateInView>
                      <value.icon className="w-8 h-8 text-white" />
                    </IconWithRotateInView>
                    <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
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
      className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#74bd51] transition-colors duration-300"
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

export default ValuesSection;
