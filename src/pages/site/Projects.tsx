import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { projects, filters, getProjectsByCategory } from "@/data/projectsData";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("todos");

  useEffect(() => {
    document.title = "Easywood - Trabajos de Reformas Integrales | Madrid";
  }, []);

  const filteredProjects = getProjectsByCategory(activeFilter);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Trabajos de reformas en Madrid | Easywood</title>
        <meta
          name="description"
          content="Descubre los trabajos de reformas integrales realizados por Easywood en Madrid. Inspiración, calidad y experiencia a tu servicio."
        />
        <meta
          name="keywords"
          content="trabajos, reformas integrales, Madrid, inspiración, empresa de reformas, casos de éxito"
        />
        <meta
          property="og:title"
          content="Trabajos de reformas en Madrid | Easywood"
        />
        <meta
          property="og:description"
          content="Explora nuestros trabajos de reformas en Madrid y encuentra ideas para tu hogar o negocio."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://easywood.es/nuestros-trabajos"
        />
        <meta
          property="og:image"
          content="https://easywood.es/favicon/android-chrome-192x192.png"
        />
        <link rel="canonical" href="https://easywood.es/nuestros-trabajos" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Trabajos de reformas en Madrid | Easywood",
            "description": "Trabajos de reformas integrales realizados en Madrid por Easywood.",
            "url": "https://easywood.es/nuestros-trabajos",
            "image": "https://easywood.es/favicon/android-chrome-192x192.png"
          }
        `}</script>
      </Helmet>
      <div className="min-h-dvh" style={{ paddingTop: "var(--header-height)" }}>
        <div className="container mx-auto px-6 py-16 md:py-24">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Nuestros Trabajos
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Descubre nuestras reformas integrales más destacadas en toda la
              Comunidad de Madrid. Cada trabajo refleja la excelencia y
              experiencia de más de 25 años transformando espacios en la capital
              y sus alrededores.
            </p>
          </div>

          {/* Filters */}
          <div
            className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up"
            role="group"
            aria-label="Filtros de trabajos"
          >
            {filters.map((filterOption) => (
              <button
                key={filterOption.key}
                onClick={() => setActiveFilter(filterOption.key)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === filterOption.key
                    ? "bg-primary text-white"
                    : "bg-muted text-muted-foreground hover:bg-primary/10"
                }`}
                aria-pressed={activeFilter === filterOption.key}
                aria-label={`Filtrar por ${filterOption.label}`}
              >
                {filterOption.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 animate-slide-up"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {project.year}
                    </span>
                  </div>
                  {/* Indicador de galería si hay múltiples imágenes */}
                  {project.images && project.images.length > 1 && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
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
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{project.type}</p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Ubicación:</span>
                      <span>{project.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Superficie:</span>
                      <span>{project.area}</span>
                    </div>
                  </div>
                  <Link
                    to={`/nuestros-trabajos/${project.slug}`}
                    className="block w-full mt-4 bg-primary/10 text-primary py-2 rounded-md hover:bg-primary hover:text-white transition-colors text-center"
                  >
                    Ver detalles
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-muted/30 rounded-lg p-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-primary mb-4">
              ¿Te inspiró algún proyecto?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Cada reforma es una historia única. Cuéntanos la tuya y crearemos
              el espacio que siempre has soñado.
            </p>
            <Link to="/contacto">
              <button className="group flex items-center justify-center bg-primary text-white px-8 py-4 rounded-md hover:bg-primary/90 transition-colors font-medium text-lg mx-auto">
                <span>Solicitar consulta gratuita</span>
                <ArrowRight
                  size={22}
                  className="ml-2 sm:opacity-0 sm:translate-x-4 sm:group-hover:opacity-100 sm:group-hover:translate-x-0 opacity-100 translate-x-0 transition-all duration-300 ease-out"
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Projects;
