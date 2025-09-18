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
    "Experiencia probada ante imprevistos con más de 25 años en el sector",
    "Garantía de 1 año tras la entrega de todos nuestros trabajos",
    "Presupuesto detallado en menos de 48 horas tras la visita, gratuito y sin compromiso",
    "Equipo propio multidisciplinar especializado en cada área",
    "Materiales de primera calidad seleccionados cuidadosamente",
  ];

  const title = cityName
    ? `¿Por qué contratarnos en ${cityName}?`
    : "¿Por qué contratarnos?";
  const subtitle = cityName
    ? `${
        experience || "Años de experiencia"
      } nos avalan. Descubre las razones por las que nuestros clientes han confiado en nosotros.`
    : "Más de dos décadas de experiencia nos avalan. Descubre las razones por las que miles de clientes han confiado en nosotros.";

  const displayReasons = reasons || defaultReasons;

  return (
    <section className="min-h-screen bg-white text-black flex items-center">
      <div className="container mx-auto px-6 py-20">
        <AnimatedSection animation="slideUp">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
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
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {reason}
                  </p>
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
