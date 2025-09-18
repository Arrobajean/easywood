import React from "react";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  MessageCircle,
  Phone,
  Mail,
  Clock,
  ArrowRight,
} from "lucide-react";
import AnimatedSection from "@/components/common/AnimatedSection";
import { motion } from "framer-motion";

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "34673167698";
    const message = encodeURIComponent(
      "Hola! Me interesa solicitar un presupuesto para una reforma. ¿Podrían darme más información?"
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="contacto"
      className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.02)_0%,transparent_50%)]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimatedSection animation="fade">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-sm font-medium text-gray-500 mb-4 tracking-wider uppercase">
              Contacto
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 md:mb-6">
              ¿Tienes un proyecto en mente?
            </h3>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Contacta con nosotros para una consulta gratuita y descubre cómo
              podemos transformar tu espacio.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto">
          {/* CTA Principal */}
          <AnimatedSection animation="scale" delay={0.3}>
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
                    className="group flex items-center justify-center glass-button-dark bg-green-500 hover:bg-green-600 text-white px-6 py-4 md:px-10 md:py-6 text-base md:text-lg font-semibold rounded-full shadow-glass-lg hover:shadow-glass-xl transition-all duration-300 border-0 w-full md:w-auto mx-auto"
                  >
                    <MessageCircle className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
                    <span>Contactar por WhatsApp</span>
                    <ArrowRight
                      size={22}
                      className="ml-2 sm:opacity-0 sm:translate-x-4 sm:group-hover:opacity-100 sm:group-hover:translate-x-0 opacity-100 translate-x-0 transition-all duration-300 ease-out"
                    />
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Información de contacto */}
          <div className="space-y-4 md:space-y-6">
            <AnimatedSection animation="slideLeft" delay={0.2}>
              <h4 className="text-xl md:text-2xl font-bold text-black mb-6 md:mb-8">
                Información de contacto
              </h4>
            </AnimatedSection>

            {/* Contact Cards */}
            <div className="space-y-4 md:space-y-6">
              {[
                {
                  icon: Phone,
                  title: "Teléfono",
                  items: [{ label: "91 993 06 64", href: "tel:+34919930664" }],
                },
                {
                  icon: Mail,
                  title: "Email",
                  items: [
                    { label: "info@llemy.com", href: "mailto:info@llemy.com" },
                  ],
                },
                {
                  icon: MapPin,
                  title: "Ubicación",
                  items: [
                    {
                      label: "Calle Marqués de Zafra 25, Madrid",
                      href: "https://www.google.com/maps?q=Calle+Marqu%C3%A9s+de+Zafra+25,+Madrid",
                    },
                  ],
                },
                {
                  icon: Clock,
                  title: "Horario de atención",
                  items: [
                    "Lunes a Viernes: 8:00 - 18:00",
                    "Sábados: 9:00 - 14:00",
                  ],
                },
              ].map((contact, index) => (
                <AnimatedSection
                  key={index}
                  animation="slideLeft"
                  delay={0.4 + index * 0.1}
                >
                  <motion.div
                    className="glass-card rounded-2xl p-4 md:p-6 hover:shadow-glass-lg transition-all duration-300"
                    whileHover={{ scale: 1.02, x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-start space-x-3 md:space-x-4">
                      <motion.div
                        className="w-10 h-10 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <contact.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </motion.div>
                      <div>
                        <h5 className="font-semibold text-black mb-1 md:mb-2">
                          {contact.title}
                        </h5>
                        {contact.items.map((item, itemIndex) =>
                          typeof item === "string" ? (
                            <p
                              key={itemIndex}
                              className="text-sm md:text-base text-gray-600"
                            >
                              {item}
                            </p>
                          ) : (
                            <a
                              key={itemIndex}
                              href={item.href}
                              target={
                                item.href.startsWith("http")
                                  ? "_blank"
                                  : undefined
                              }
                              rel={
                                item.href.startsWith("http")
                                  ? "noopener noreferrer"
                                  : undefined
                              }
                              className="text-sm md:text-base text-gray-600 hover:text-primary transition-colors duration-200 block"
                            >
                              {item.label}
                            </a>
                          )
                        )}
                      </div>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>

        {/* Web Development Credit */}
        <div className="text-center mt-8">
          <p className="text-xs text-gray-400">
            Sitio web desarrollado por{" "}
            <a
              href="https://www.404studios.digital"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-600 transition-colors duration-300 font-medium underline"
              aria-label="Visitar 404studios.digital - Desarrolladores web (se abre en ventana nueva)"
            >
              404studios.digital
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
