import React from "react";
import AnimatedSection from "@/components/common/AnimatedSection";
import { motion } from "framer-motion";
import { teamMembers, processSteps } from "@/data/teamData";

const TeamAndProcessSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Equipo */}
        <AnimatedSection animation="slideUp">
          <div className="text-center mb-16">
            <h2 className="text-sm font-medium text-gray-500 mb-4 tracking-wider uppercase">
              Nuestro Equipo
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Los profesionales que hacen posible cada suelo de madera
            </h3>
          </div>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto justify-items-center">
          {teamMembers.map((member, index) => (
            <AnimatedSection
              key={index}
              animation="slideUp"
              delay={index * 0.2}
            >
              <motion.div
                className="text-center"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative mb-6">
                  <div className="w-32 h-32 rounded-full mx-auto bg-gray-200 shadow-lg flex items-center justify-center overflow-hidden">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      <svg
                        className="w-16 h-16 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-black rounded-full flex items-center justify-center">
                    <img
                      src="/images/logo/easywood_logo.png"
                      alt="Logo Easywood"
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-black mb-2">
                  {member.name}
                </h4>
                <p className="text-sm font-medium text-gray-500 mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Separador visual */}
        <div className="my-20 border-t border-gray-200 w-full"></div>

        {/* Proceso */}
        <AnimatedSection animation="slideUp">
          <div className="text-center mb-16">
            <h2 className="text-sm font-medium text-gray-500 mb-4 tracking-wider uppercase">
              Nuestro Proceso
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Metodología probada en más de 200 suelos de madera
            </h3>
          </div>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <AnimatedSection
              key={index}
              animation="slideUp"
              delay={index * 0.15}
            >
              <motion.div className="text-center p-6" whileHover={{ y: -5 }}>
                <div className="w-16 h-16 bg-black text-white rounded-xl flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-black mb-4">
                  {step.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamAndProcessSection;
