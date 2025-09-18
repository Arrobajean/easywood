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
      reformType: "Acuchillado y barnizado de parquet",
      text: "Excelente trabajo de principio a fin. El equipo de EasyWood restauró nuestro parquet de roble de 20 años y quedó como nuevo. Muy profesionales y puntuales.",
      rating: 5,
    },
    {
      name: "Carlos Martín",
      city: "Pozuelo de Alarcón",
      reformType: "Instalación de tarima composite",
      text: "Profesionales excepcionales. La instalación de nuestra nueva tarima composite superó todas nuestras expectativas. El acabado es perfecto y sin mantenimiento.",
      rating: 5,
    },
    {
      name: "Ana Ruiz",
      city: "Madrid",
      reformType: "Pulido y aceitado de suelos",
      text: "Calidad impecable y atención al detalle extraordinaria. Nuestros suelos de madera maciza recuperaron su brillo natural. El resultado es exactamente lo que habíamos soñado.",
      rating: 5,
    },
    {
      name: "Pedro Sánchez",
      city: "Madrid",
      reformType: "Restauración de suelos en restaurante",
      text: "Transformaron los suelos de nuestro restaurante completamente. El acuchillado y barnizado al agua fue perfecto para un local comercial. Muy recomendable.",
      rating: 5,
    },
    {
      name: "Laura Fernández",
      city: "Villanueva del Pardillo",
      reformType: "Instalación de tarima de Ipe",
      text: "Desde el primer día mostraron profesionalidad y creatividad. La nueva tarima de Ipe con estructura de aluminio es espectacular y sin mantenimiento.",
      rating: 5,
    },
    {
      name: "Roberto Torres",
      city: "Madrid",
      reformType: "Lijado y barnizado al agua",
      text: "Excelente comunicación durante todo el proceso. El barnizado al agua que aplicaron es perfecto para nuestra familia con niños. Sin olores y muy resistente.",
      rating: 5,
    },
    {
      name: "Isabel Castro",
      city: "Madrid",
      reformType: "Acuchillado de tarima Merbau",
      text: "Convertir nuestra tarima Merbau deteriorada en un suelo como nuevo parecía imposible, pero lo lograron perfectamente. El color natural quedó espectacular.",
      rating: 5,
    },
    {
      name: "Miguel Jiménez",
      city: "Madrid",
      reformType: "Instalación de parquet roble europeo",
      text: "Su experiencia en suelos de madera y atención al detalle transformaron nuestro hogar. El parquet de roble europeo es una maravilla.",
      rating: 5,
    },
    {
      name: "Carmen Rueda",
      city: "Madrid",
      reformType: "Aceitado de suelos de madera",
      text: "Combinaron perfectamente el acabado natural con la protección necesaria. El aceitado de nuestros suelos les dio un aspecto único y auténtico.",
      rating: 5,
    },
  ];

  return (
    <section id="resenas" className="min-h-dvh bg-background flex items-center">
      <div className="container mx-auto px-6 py-20">
        <AnimatedSection animation="slideUp">
          <div className="text-center mb-16">
            <h2 className="text-sm font-medium text-muted-foreground mb-4 tracking-wider uppercase">
              Testimonios
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
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
