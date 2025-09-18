import React from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/common/AnimatedSection";
import { motion } from "framer-motion";
import { projects } from "@/data/projectsData";
import { ArrowRight } from "lucide-react";

const ProjectsSection = () => {
  // Tomar los primeros 6 proyectos de projectsData
  const featuredProjects = projects.slice(0, 6);

  return (
    <section
      id="proyectos"
      className="min-h-screen bg-gray-50 flex items-center"
    >
      <div className="container mx-auto px-6 py-20">
        <AnimatedSection animation="slideUp">
          <div className="text-center mb-16">
            <h2 className="text-sm font-medium text-gray-500 mb-4 tracking-wider uppercase">
              Nuestros proyectos
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Inspírate con nuestras reformas realizadas en Madrid
            </h3>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <AnimatedSection
                key={project.id}
                animation="slideUp"
                delay={index * 0.1}
              >
                <Link to={`/proyectos/${project.slug}`}>
                  <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                    {/* Imagen de fondo */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Overlay oscuro para mejor legibilidad del texto */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Contenido superpuesto */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h4 className="text-lg font-semibold mb-2 line-clamp-2">
                        {project.title}
                      </h4>
                      <p className="text-sm text-gray-200 mb-1">
                        {project.type}
                      </p>
                      <div className="text-xs text-gray-300">
                        <span>{project.location}</span>
                      </div>
                    </div>

                    {/* Indicador de galería si hay múltiples imágenes */}
                    {project.images && project.images.length > 1 && (
                      <div className="absolute top-3 right-3">
                        <span className="bg-white/90 backdrop-blur-sm text-black px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 shadow-lg">
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {project.images.length}
                        </span>
                      </div>
                    )}

                    {/* Efecto hover sutil */}
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" delay={0.8}>
          <div className="text-center mt-12">
            <Link to="/proyectos">
              <button className="group flex items-center justify-center mx-auto glass-button-dark bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 font-medium shadow-glass border-0">
                <span>Ver todos los proyectos</span>
                <ArrowRight
                  size={22}
                  className="ml-2 sm:opacity-0 sm:translate-x-4 sm:group-hover:opacity-100 sm:group-hover:translate-x-0 opacity-100 translate-x-0 transition-all duration-300 ease-out"
                />
              </button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProjectsSection;
