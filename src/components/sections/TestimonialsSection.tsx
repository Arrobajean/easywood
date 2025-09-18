import React from "react";
import { Star } from "lucide-react";
import AnimatedSection from "@/components/common/AnimatedSection";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "María González",
      city: "Madrid",
      reformType: "Reforma integral vivienda",
      text: "Excelente trabajo de principio a fin. El equipo de Llemmy transformó nuestra casa completamente respetando nuestros gustos y presupuesto.",
      rating: 5,
    },
    {
      name: "Carlos Martín",
      city: "Barcelona",
      reformType: "Cocina moderna",
      text: "Profesionales excepcionales. La reforma de nuestra cocina superó todas nuestras expectativas. Muy recomendable.",
      rating: 5,
    },
    {
      name: "Ana Ruiz",
      city: "Valencia",
      reformType: "Baño contemporáneo",
      text: "Calidad impecable y atención al detalle extraordinaria. El resultado final es exactamente lo que habíamos soñado.",
      rating: 5,
    },
    {
      name: "Pedro Sánchez",
      city: "Sevilla",
      reformType: "Oficina comercial",
      text: "Transformaron nuestro local comercial en un espacio moderno y funcional. El proyecto se completó en tiempo récord.",
      rating: 5,
    },
    {
      name: "Laura Fernández",
      city: "Bilbao",
      reformType: "Reforma integral piso",
      text: "Desde el primer día mostraron profesionalidad y creatividad. Nuestra nueva casa es un sueño hecho realidad.",
      rating: 5,
    },
    {
      name: "Roberto Torres",
      city: "Málaga",
      reformType: "Cocina y salón",
      text: "Excelente comunicación durante todo el proceso. Cumplieron todos los plazos y el resultado es espectacular.",
      rating: 5,
    },
    {
      name: "Isabel Castro",
      city: "Zaragoza",
      reformType: "Baño principal",
      text: "Convertir nuestro baño pequeño en un espacio elegante y funcional parecía imposible, pero lo lograron perfectamente.",
      rating: 5,
    },
    {
      name: "Miguel Jiménez",
      city: "Murcia",
      reformType: "Reforma integral ático",
      text: "Su visión arquitectónica y atención al detalle transformaron nuestro ático en un hogar único y acogedor.",
      rating: 5,
    },
    {
      name: "Carmen Rueda",
      city: "Palma",
      reformType: "Cocina rústica moderna",
      text: "Combinaron perfectamente el estilo rústico con toques modernos. El resultado es una cocina de revista.",
      rating: 5,
    },
  ];

  return (
    <section id="resenas" className="min-h-screen bg-white flex items-center">
      <div className="container mx-auto px-6 py-20">
        <AnimatedSection animation="slideUp">
          <div className="text-center mb-16">
            <h2 className="text-sm font-medium text-muted-foreground mb-4 tracking-wider uppercase">
              Testimonios
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Lo que dicen nuestros clientes
            </h3>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" delay={0.3}>
          <div className="relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                  >
                    <motion.div
                      className="bg-muted/50 rounded-lg p-6 md:p-8 h-full"
                      whileHover={{
                        scale: 1.02,
                        y: -5,
                        transition: { duration: 0.3 },
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.1,
                        duration: 0.5,
                        ease: "easeOut",
                      }}
                    >
                      <motion.div
                        className="flex mb-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 + index * 0.05 }}
                      >
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{
                              delay: 0.4 + index * 0.05 + i * 0.05,
                            }}
                          >
                            <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" />
                          </motion.div>
                        ))}
                      </motion.div>

                      <p className="text-muted-foreground mb-6 leading-relaxed italic text-sm md:text-base">
                        "{testimonial.text}"
                      </p>

                      <div className="mt-auto">
                        <h4 className="font-semibold text-primary text-sm md:text-base">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs md:text-sm text-muted-foreground">
                          {testimonial.city}
                        </p>
                        <p className="text-xs md:text-sm text-muted-foreground font-medium mt-1">
                          {testimonial.reformType}
                        </p>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="hidden md:block">
                <CarouselPrevious className="absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2" />
                <CarouselNext className="absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2" />
              </div>

              {/* Controles móviles */}
              <div className="flex md:hidden justify-center gap-4 mt-6">
                <CarouselPrevious className="relative top-0 left-0 translate-x-0 translate-y-0" />
                <CarouselNext className="relative top-0 right-0 translate-x-0 translate-y-0" />
              </div>
            </Carousel>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TestimonialsSection;
