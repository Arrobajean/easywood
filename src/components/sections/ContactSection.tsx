import React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/common/AnimatedSection";
import { motion } from "framer-motion";

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "34673167698";
    const message = encodeURIComponent(
      "Hola! Me interesa solicitar un presupuesto para suelos de madera. ¿Podrían darme más información?"
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="contacto"
      className="py-16 md:py-24 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.02)_0%,transparent_50%)]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimatedSection animation="fade">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-sm font-medium text-gray-500 mb-4 tracking-wider uppercase">
              Contacto
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-4 md:mb-6">
              ¿Tienes un proyecto en mente?
            </h3>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Contacta con nosotros para una consulta gratuita y descubre cómo
              podemos transformar tu espacio.
            </p>
          </div>
        </AnimatedSection>

        {/* CTA Principal */}
        <AnimatedSection animation="scale" delay={0.3}>
          <div className="max-w-2xl mx-auto">
            <div className="glass-card rounded-3xl p-6 md:p-8 lg:p-12 text-center h-full flex flex-col justify-center">
              <div className="mb-6 md:mb-8">
                <motion.div
                  className="w-16 h-16 md:w-20 lg:w-24 md:h-20 lg:h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-glass-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <MessageCircle className="w-8 h-8 md:w-10 lg:w-12 md:h-10 lg:h-12 text-white" />
                </motion.div>
                <h4 className="text-2xl md:text-3xl font-bold text-black mb-4 md:mb-6">
                  Solicita tu presupuesto por WhatsApp
                </h4>
                <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-10 max-w-md mx-auto leading-relaxed">
                  Te atendemos de forma rápida y personalizada. Cuéntanos tu
                  proyecto y te daremos una respuesta inmediata.
                </p>
                <div>
                  <Button
                    onClick={handleWhatsAppClick}
                    size="lg"
                    className="group flex items-center justify-center glass-button-cararra px-6 py-4 md:px-10 md:py-6 text-base md:text-lg font-semibold rounded-lg border-0 w-full md:w-auto mx-auto"
                  >
                    <span>Contactar por WhatsApp</span>
                    <ArrowRight
                      size={18}
                      className="ml-2 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 ease-out"
                      aria-hidden="true"
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
