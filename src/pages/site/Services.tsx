import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import {
  Home,
  ChefHat,
  Hammer,
  Paintbrush,
  Zap,
  DoorOpen,
  CheckCircle,
} from "lucide-react";
import AnimatedSection from "@/components/common/AnimatedSection";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Services = () => {
  useEffect(() => {
    document.title = "LLEMY - Servicios de Reformas Integrales | Madrid";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Servicios completos de reformas integrales en Madrid. Cocinas, baños, suelos, electricidad y más. Más de 25 años de experiencia."
      );
    }
  }, []);

  const services = [
    {
      icon: Home,
      title: "Reformas integrales / parciales",
      description:
        "Transformación completa de espacios, desde reformas integrales hasta intervenciones parciales específicas.",
      features: [
        "Reforma completa de viviendas",
        "Redistribución de espacios",
        "Instalaciones eléctricas y fontanería",
        "Pavimentos y revestimientos",
        "Gestión de permisos y licencias",
      ],
      price: "Desde 650€/m²",
    },
    {
      icon: ChefHat,
      title: "Cocinas y baños",
      description:
        "Diseño y reforma de cocinas modernas y baños funcionales, optimizando cada metro cuadrado.",
      features: [
        "Diseño personalizado",
        "Mobiliario a medida",
        "Electrodomésticos integrados",
        "Alicatado y solados",
        "Instalaciones completas",
      ],
    },
    {
      icon: Hammer,
      title: "Suelos, tarimas, puertas",
      description:
        "Instalación de pavimentos, tarimas flotantes y puertas de interior y exterior de alta calidad.",
      features: [
        "Tarimas flotantes y parquet",
        "Suelos laminados y vinílicos",
        "Puertas de interior y exterior",
        "Rodapiés y molduras",
        "Preparación del soporte",
      ],
    },
    {
      icon: Paintbrush,
      title: "Pintura y pladur",
      description:
        "Acabados perfectos en pintura y trabajos de pladur para divisiones y techos decorativos.",
      features: [
        "Pintura interior y exterior",
        "Alisado de paredes",
        "Tabiques de pladur",
        "Techos decorativos",
        "Aislamiento acústico",
      ],
    },
    {
      icon: Zap,
      title: "Electricidad y gestión",
      description:
        "Instalaciones eléctricas completas y gestión integral de todos los aspectos técnicos.",
      features: [
        "Instalaciones eléctricas nuevas",
        "Actualización de cuadros",
        "Iluminación LED",
        "Domótica básica",
        "Certificados eléctricos",
      ],
    },
    {
      icon: DoorOpen,
      title: "Ventanas y cerramientos",
      description:
        "Instalación de ventanas de PVC, aluminio y cerramientos para mejorar el aislamiento.",
      features: [
        "Ventanas de PVC y aluminio",
        "Doble acristalamiento",
        "Persianas integradas",
        "Cerramientos de terrazas",
        "Mejora del aislamiento",
      ],
    },
  ];

  return (
    <HelmetProvider>
      <Helmet>
        <title>
          Servicios de Reformas Integrales en Madrid | LLEMY Reformas | Cocinas,
          Baños y Más
        </title>
        <meta
          name="description"
          content="LLEMY Reformas ofrece servicios completos de reformas en Madrid: reformas integrales, cocinas, baños, diseño de interiores, albañilería, electricidad, pintura y suelos. 25+ años de experiencia, calidad garantizada."
        />
        <meta
          name="keywords"
          content="servicios reformas Madrid, reformas integrales Madrid, reformas cocinas Madrid, reformas baños Madrid, diseño interiores Madrid, albañilería Madrid, electricidad Madrid, pintura Madrid, suelos Madrid, carpintería Madrid, presupuesto reformas Madrid"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Servicios de Reformas Integrales en Madrid | LLEMY Reformas | Cocinas, Baños y Más"
        />
        <meta
          property="og:description"
          content="LLEMY Reformas ofrece servicios completos de reformas en Madrid: reformas integrales, cocinas, baños, diseño de interiores, albañilería, electricidad, pintura y suelos. 25+ años de experiencia, calidad garantizada."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://llemy.com/servicios" />
        <meta
          property="og:image"
          content="https://llemy.com/images/logo/LOGO%20LLEMY%20Vector%20VERDE.png"
        />
        <meta property="og:site_name" content="LLEMY Reformas" />
        <meta property="og:locale" content="es_ES" />

        {/* Twitter Card */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://llemy.com/servicios" />
        <meta
          property="twitter:title"
          content="Servicios de Reformas Integrales en Madrid | LLEMY Reformas | Cocinas, Baños y Más"
        />
        <meta
          property="twitter:description"
          content="LLEMY Reformas ofrece servicios completos de reformas en Madrid: reformas integrales, cocinas, baños, diseño de interiores, albañilería, electricidad, pintura y suelos. 25+ años de experiencia, calidad garantizada."
        />
        <meta
          property="twitter:image"
          content="https://llemy.com/images/logo/LOGO%20LLEMY%20Vector%20VERDE.png"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://llemy.com/servicios" />

        {/* Additional SEO meta tags */}
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta name="googlebot" content="index, follow" />
        <meta name="language" content="es" />
        <meta name="geo.region" content="ES-MD" />
        <meta name="geo.placename" content="Madrid, España" />
        <meta name="geo.position" content="40.4168;-3.7038" />
        <meta name="ICBM" content="40.4168, -3.7038" />

        {/* Services Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Servicios de Reformas Integrales en Madrid | LLEMY Reformas",
            description:
              "LLEMY Reformas ofrece servicios completos de reformas en Madrid: reformas integrales, cocinas, baños, diseño de interiores, albañilería, electricidad, pintura y suelos.",
            url: "https://llemy.com/servicios",
            mainEntity: {
              "@type": "Service",
              name: "Servicios de Reformas Integrales en Madrid",
              description:
                "Servicios completos de reformas y construcción en Madrid y alrededores",
              provider: {
                "@type": "LocalBusiness",
                name: "LLEMY Reformas & Construcciones",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Calle Marqués de Zafra 25",
                  addressLocality: "Madrid",
                  addressRegion: "Madrid",
                  postalCode: "28010",
                  addressCountry: "ES",
                },
                telephone: "+34 919 930 664",
                email: "info@llemy.com",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Catálogo de Servicios de Reformas",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Reformas Integrales",
                      description:
                        "Transformamos completamente tu vivienda, local u oficina",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Reformas de Cocinas",
                      description:
                        "Diseño e instalación de cocinas modernas y funcionales",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Reformas de Baños",
                      description: "Renovamos tu baño con acabados de calidad",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Diseño de Interiores",
                      description: "Creamos espacios únicos y funcionales",
                    },
                  },
                ],
              },
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Inicio",
                  item: "https://llemy.com/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Servicios",
                  item: "https://llemy.com/servicios",
                },
              ],
            },
          })}
        </script>
      </Helmet>
      <div className="min-h-screen">
        <Navigation />
        <main id="main-content" className="pt-24 pb-20">
          <div className="container mx-auto px-6">
            <AnimatedSection animation="fade">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
                  Nuestros Servicios
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Especialistas en reformas integrales en Madrid y alrededores.
                  Más de 25 años transformando espacios y creando hogares
                  únicos.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => (
                <AnimatedSection
                  key={index}
                  animation="slideUp"
                  delay={index * 0.1}
                >
                  <motion.div
                    className="glass-card rounded-2xl p-8 hover:shadow-glass-lg transition-all duration-300 h-full group"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="mb-6 text-center">
                      <motion.div
                        className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto group-hover:bg-gray-800 transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        aria-hidden="true"
                      >
                        <service.icon className="w-8 h-8 text-white" />
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-semibold text-black mb-4 text-center">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle
                            className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span className="text-sm text-gray-600">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-center">
                      {service.price && (
                        <span className="text-lg font-semibold text-black">
                          {service.price}
                        </span>
                      )}
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection animation="scale" delay={0.8}>
              <div className="text-center bg-gradient-to-br from-gray-900 to-black text-white rounded-2xl p-12">
                <h2 className="text-3xl font-bold mb-4">
                  ¿Listo para transformar tu espacio?
                </h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  Contacta con nosotros para recibir un presupuesto
                  personalizado y sin compromiso. Nuestro equipo de expertos te
                  asesorará en todo el proceso.
                </p>
                <Link to="/contacto">
                  <motion.button
                    className="bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Solicitar presupuesto gratuito
                  </motion.button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Services;
