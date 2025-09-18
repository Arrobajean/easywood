import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navigation from "@/components/layout/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import AboutUsSection from "@/components/sections/AboutUsSection";
import ValuesSection from "@/components/sections/ValuesSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import Footer from "@/components/layout/Footer";
import useLenis from "@/hooks/useLenis";

const Home = () => {
  // Inicializar Lenis para scroll suave
  useLenis();

  return (
    <HelmetProvider>
      <Helmet>
        <title>
          LLEMY Reformas - Empresa de Reformas Integrales en Madrid | 25+ Años
          de Experiencia
        </title>
        <meta
          name="description"
          content="LLEMY Reformas: Empresa líder en reformas integrales en Madrid con más de 25 años de experiencia. Reformas de viviendas, locales y oficinas. Calidad garantizada, presupuesto gratuito."
        />
        <meta
          name="keywords"
          content="reformas integrales Madrid, empresa reformas Madrid, reformas viviendas Madrid, reformas locales Madrid, reformas oficinas Madrid, cocinas Madrid, baños Madrid, albañilería Madrid, electricidad Madrid, fontanería Madrid, alisado Madrid, pintura Madrid, suelos Madrid, carpintería Madrid, presupuesto reformas Madrid, garantía reformas Madrid"
        />
        <meta
          property="og:title"
          content="LLEMY Reformas - Empresa de Reformas Integrales en Madrid | 25+ Años de Experiencia"
        />
        <meta
          property="og:description"
          content="LLEMY Reformas: Empresa líder en reformas integrales en Madrid con más de 25 años de experiencia. Reformas de viviendas, locales y oficinas. Calidad garantizada, presupuesto gratuito."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://llemy.com/" />
        <meta
          property="og:image"
          content="https://llemy.com/images/logo/LOGO%20LLEMY%20Vector%20VERDE.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="LLEMY Reformas" />
        <meta property="og:locale" content="es_ES" />

        {/* Twitter Card */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://llemy.com/" />
        <meta
          property="twitter:title"
          content="LLEMY Reformas - Empresa de Reformas Integrales en Madrid | 25+ Años de Experiencia"
        />
        <meta
          property="twitter:description"
          content="LLEMY Reformas: Empresa líder en reformas integrales en Madrid con más de 25 años de experiencia. Reformas de viviendas, locales y oficinas. Calidad garantizada, presupuesto gratuito."
        />
        <meta
          property="twitter:image"
          content="https://llemy.com/images/logo/LOGO%20LLEMY%20Vector%20VERDE.png"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://llemy.com/" />

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

        {/* Local Business Schema for this page */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "LLEMY Reformas - Empresa de Reformas Integrales en Madrid",
            description:
              "LLEMY Reformas: Empresa líder en reformas integrales en Madrid con más de 25 años de experiencia. Reformas de viviendas, locales y oficinas. Calidad garantizada, presupuesto gratuito.",
            url: "https://llemy.com/",
            mainEntity: {
              "@type": "LocalBusiness",
              name: "LLEMY Reformas & Construcciones",
              description:
                "Empresa de reformas integrales en Madrid con más de 25 años de experiencia",
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
              areaServed: ["Madrid"],
              openingHours: "Mo-Fr 08:00-18:00, Sa 09:00-14:00",
              priceRange: "€€",
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
              ],
            },
          })}
        </script>
      </Helmet>
      <div className="min-h-screen">
        <Navigation />
        <main id="main-content">
          <HeroSection />
          <AboutUsSection />
          <ValuesSection />
          <WhyChooseUsSection />
          <ServicesSection />
          <ProcessSection />
          <ProjectsSection />
          <TestimonialsSection />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Home;
