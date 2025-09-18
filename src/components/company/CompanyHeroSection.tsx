import React from "react";
import AnimatedSection from "@/components/common/AnimatedSection";
import { motion } from "framer-motion";
import { Award, Users, Clock, Building } from "lucide-react";

const CompanyHeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden pt-20">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          <div>
            <AnimatedSection animation="slideRight">
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src="/images/logo/logo-blanco.png"
                  alt="Logo Llemy blanco"
                  className="w-28 h-28 object-contain"
                  loading="lazy"
                />
                <div>
                  <h1 className="text-5xl md:text-6xl font-bold">Llemy</h1>
                  <p className="text-xl text-gray-300">Reformas Integrales</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideRight" delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Más de 25 años transformando espacios
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="fade" delay={0.4}>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Empresa familiar especializada en reformas integrales en Madrid.
                Combinamos experiencia, calidad y pasión en cada proyecto que
                realizamos.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="slideUp" delay={0.6}>
              <div className="grid grid-cols-4 gap-2 md:gap-6">
                <motion.div className="text-center" whileHover={{ scale: 1.1 }}>
                  <Clock className="w-5 h-5 md:w-8 md:h-8 text-white mx-auto mb-0.5 md:mb-2" />
                  <div className="text-xs md:text-2xl font-bold">20+</div>
                  <div className="text-[10px] md:text-sm text-gray-300">
                    Años
                  </div>
                </motion.div>
                <motion.div className="text-center" whileHover={{ scale: 1.1 }}>
                  <Building className="w-5 h-5 md:w-8 md:h-8 text-white mx-auto mb-0.5 md:mb-2" />
                  <div className="text-xs md:text-2xl font-bold">340+</div>
                  <div className="text-[10px] md:text-sm text-gray-300">
                    Proyectos
                  </div>
                </motion.div>
                <motion.div className="text-center" whileHover={{ scale: 1.1 }}>
                  <Users className="w-5 h-5 md:w-8 md:h-8 text-white mx-auto mb-0.5 md:mb-2" />
                  <div className="text-xs md:text-2xl font-bold">15+</div>
                  <div className="text-[10px] md:text-sm text-gray-300">
                    Especialistas
                  </div>
                </motion.div>
                <motion.div className="text-center" whileHover={{ scale: 1.1 }}>
                  <Award className="w-5 h-5 md:w-8 md:h-8 text-white mx-auto mb-0.5 md:mb-2" />
                  <div className="text-xs md:text-2xl font-bold">100%</div>
                  <div className="text-[10px] md:text-sm text-gray-300">
                    Satisfacción
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="slideLeft" delay={0.3}>
            <div className="relative mb-8 md:mb-0">
              <motion.div
                className="rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/images/Fotos Obras LLemy/Villalba/14-_DSC5537.JPG"
                  alt="Proyecto Villalba Llemy - Fachada moderna"
                  className="w-full h-96 object-cover"
                />
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default CompanyHeroSection;
