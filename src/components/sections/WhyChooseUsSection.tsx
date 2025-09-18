import React from "react";
import { Check } from "lucide-react";
import AnimatedSection from "@/components/common/AnimatedSection";
import { motion } from "framer-motion";

interface WhyChooseUsSectionProps {
  cityName?: string;
  experience?: string;
  guarantee?: string;
  reasons?: string[];
}

const WhyChooseUsSection = ({
  cityName,
  experience,
  guarantee,
  reasons,
}: WhyChooseUsSectionProps = {}) => {
  // Default content for main page
  const defaultReasons = [
    "<strong>Expertos en madera:</strong> instalación, acuchillado, lijado y barnizado con sistemas al agua, sin olores y de alta resistencia.",
    "<strong>Experiencia real:</strong> cientos de proyectos restaurados en Madrid avalan nuestra trayectoria.",
    "<strong>Atención personalizada:</strong> presupuesto gratuito en 24/48h y asesoría técnica adaptada a tu caso.",
    "<strong>Detalles que importan:</strong> protegemos tu mobiliario, trabajamos limpio y dejamos el espacio listo para disfrutar.",
  ];

  const title = cityName
    ? `¿Por qué contratarnos en ${cityName}?`
    : "¿Por qué trabajar con Easywood?";
  const subtitle = cityName
    ? `${
        experience || "Años de experiencia"
      } nos avalan. Motivos para elegir EasyWood para tus suelos en ${cityName}.`
    : "Porque no todos los suelos de madera se tratan igual. En Easywood somos expertos cuidando, instalando y renovando parquet, tarimas y laminados con un método que combina tradición, técnica y respeto por tu hogar.";

  const displayReasons = reasons || defaultReasons;

  return (
    <section className="min-h-dvh bg-background text-black flex items-center">
      <div className="container mx-auto px-6 py-20">
        <AnimatedSection animation="slideUp">
          <div className="text-center mb-16">
            <h2 className="text-sm font-medium text-gray-500 mb-4 tracking-wider uppercase">
              Por qué elegirnos
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">{title}</h3>
            <p className="text-lg text-black max-w-3xl mx-auto">{subtitle}</p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" delay={0.3}>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {displayReasons.map((reason, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 glass-card-dark rounded-xl p-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <p
                    className="text-gray-700 leading-relaxed text-lg"
                    dangerouslySetInnerHTML={{ __html: reason }}
                  />
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
