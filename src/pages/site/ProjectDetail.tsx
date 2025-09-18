import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Ruler,
  Clock,
  Phone,
  Mail,
  Star,
  Home,
  Users,
} from "lucide-react";
import { projects } from "@/data/projectsData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import BeforeAfterSection from "@/components/features/BeforeAfterSection";
import ImageGallery from "@/components/features/ImageGallery";
import { getProjectBySlug } from "@/data/projectsData";
import { Helmet, HelmetProvider } from "react-helmet-async";

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const project = getProjectBySlug(slug || "");

  if (!project) {
    return (
      <div className="min-h-dvh flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Trabajo no encontrado
          </h1>
          <Link
            to="/nuestros-trabajos"
            className="text-primary hover:underline"
          >
            Volver a trabajos
          </Link>
        </div>
      </div>
    );
  }

  // Usar las imágenes del proyecto para la galería
  const galleryImages = project.images || [project.image];

  const pageTitle = `${project.title} | Trabajo de reforma en Madrid | Easywood`;
  const pageDescription =
    project.description ||
    "Trabajo de reforma integral realizado por Easywood en Madrid.";

  return (
    <HelmetProvider>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="trabajo, reforma, Madrid, caso de éxito, empresa de reformas, detalle"
        />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://easywood.es/nuestros-trabajos/${project.slug}`}
        />
        <meta property="og:image" content={project.image} />
        <link
          rel="canonical"
          href={`https://easywood.es/nuestros-trabajos/${project.slug}`}
        />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "IndividualProduct",
            "name": "${project.title}",
            "description": "${pageDescription}",
            "image": "${project.image}",
            "url": "https://easywood.es/nuestros-trabajos/${project.slug}",
            "brand": {
              "@type": "Organization",
              "name": "Easywood"
            },
            "areaServed": "Madrid, España"
          }
        `}</script>
      </Helmet>
      <div className="min-h-dvh">
        {/* Breadcrumb */}
        <div className="container mx-auto px-6 mb-8">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-primary">
                  Inicio
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link to="/nuestros-trabajos" className="hover:text-primary">
                  Trabajos
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">
                <span className="text-primary">{project.title}</span>
              </li>
            </ol>
          </nav>
        </div>

        {/* Back Button */}
        <div className="container mx-auto px-6 mb-8">
          <button
            onClick={() => navigate("/nuestros-trabajos")}
            className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
            aria-label="Volver a la página de trabajos"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Volver a trabajos</span>
          </button>
        </div>

        {/* Hero Section */}
        <div className="container mx-auto px-6 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {project.year}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {project.description}
              </p>

              {/* Project Info */}
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" aria-hidden="true" />
                  <div>
                    <p className="text-sm text-muted-foreground">Ubicación</p>
                    <p className="font-medium">{project.location}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Ruler className="w-5 h-5 text-primary" aria-hidden="true" />
                  <div>
                    <p className="text-sm text-muted-foreground">Superficie</p>
                    <p className="font-medium">{project.area}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar
                    className="w-5 h-5 text-primary"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm text-muted-foreground">Año</p>
                    <p className="font-medium">{project.year}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-primary" aria-hidden="true" />
                  <div>
                    <p className="text-sm text-muted-foreground">Duración</p>
                    <p className="font-medium">
                      {project.duration || "No especificada"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Services */}
              {project.services && project.services.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-primary mb-4">
                    Servicios realizados
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service, index) => (
                      <span
                        key={index}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Detailed Description Section */}
        {project.detailedDescription && (
          <div className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                  Detalles del Trabajo
                </h2>
                <div className="prose prose-lg max-w-none">
                  <div className="whitespace-pre-line text-muted-foreground leading-relaxed text-center lg:text-left lg:max-w-3xl lg:mx-auto">
                    {project.detailedDescription}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Testimonial Section */}
        {project.testimonial && (
          <div className="py-16 bg-muted/30">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-primary mb-8">
                  Testimonio del Cliente
                </h2>
                <div className="bg-white rounded-lg shadow-sm p-8">
                  <div className="flex justify-center mb-6">
                    {[...Array(project.testimonial.rating || 5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-6 h-6 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-xl text-muted-foreground mb-6 italic">
                    “{project.testimonial.text}”
                  </blockquote>
                  <p className="font-semibold text-primary">
                    - {project.testimonial.author}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Gallery Section */}
        {galleryImages.length > 1 && (
          <div className="bg-white py-16">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-primary text-center mb-12">
                Galería del Trabajo
              </h2>
              <ImageGallery images={galleryImages} title={project.title} />
            </div>
          </div>
        )}

        {/* Enhanced CTA Section - Full Viewport */}
        <div className="bg-gradient-to-r from-primary via-primary/90 to-primary text-white min-h-dvh flex items-center">
          <div className="container mx-auto px-6 text-center w-full">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                ¿Te gustó este trabajo?
              </h2>
              <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                Podemos crear algo similar para tu hogar. Nuestro equipo de
                expertos está listo para transformar tu espacio con la misma
                calidad y atención al detalle.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  to="/contacto"
                  className="inline-flex items-center space-x-3 bg-white text-primary px-8 py-4 rounded-lg hover:bg-white/90 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Mail className="w-5 h-5" />
                  <span>Solicitar consulta gratuita</span>
                </Link>

                <a
                  href="tel:+34123456789"
                  className="inline-flex items-center space-x-3 border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary transition-all duration-300 font-semibold text-lg transform hover:-translate-y-1"
                >
                  <Phone className="w-5 h-5" />
                  <span>Llamar ahora</span>
                </a>
              </div>

              <div className="mt-8 text-white/80">
                <p className="text-sm">
                  ✓ Consulta gratuita • ✓ Presupuesto sin compromiso • ✓
                  Garantía de calidad
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default ProjectDetail;
