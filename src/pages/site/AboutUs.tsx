import React, { useEffect } from "react";
import Navigation from "@/components/layout/Navigation";
import CompanyAboutSection from "@/components/company/CompanyAboutSection";
import TeamAndProcessSection from "@/components/company/TeamSection";
import ContactSection from "@/components/sections/ContactSection";
import { Helmet, HelmetProvider } from "react-helmet-async";

const AboutUs = () => {
  useEffect(() => {
    document.title =
      "Easywood - Expertos en Suelos de Madera | +15 años de experiencia | Madrid";

    // SEO meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Conoce Easywood, empresa especializada en suelos de madera con más de 15 años de experiencia en Madrid. Más de 200 proyectos realizados con excelencia técnica y profesional."
      );
    }

    // Structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Easywood",
      description:
        "Empresa especializada en suelos de madera con más de 15 años de experiencia",
      url: "https://easywood.es",
      logo: "https://easywood.es/favicon/android-chrome-192x192.png",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Calle Marqués de Zafra 25",
        addressLocality: "Madrid",
        addressCountry: "ES",
      },
      telephone: "+34 622 00 30 62",
      email: "info@easywood.es",
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector(
        'script[type="application/ld+json"]'
      );
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>
          Sobre Nosotros | Expertos en Suelos de Madera en Madrid | Easywood
        </title>
        <meta
          name="description"
          content="Conoce a Easywood, empresa líder en suelos de madera en Madrid con más de 15 años de experiencia. Calidad, confianza y atención personalizada."
        />
        <meta
          name="keywords"
          content="sobre nosotros, suelos de madera, empresa de suelos, Madrid, experiencia, equipo, confianza"
        />
        <meta
          property="og:title"
          content="Sobre Nosotros | Expertos en Suelos de Madera en Madrid | Easywood"
        />
        <meta
          property="og:description"
          content="Especialistas en suelos de madera en Madrid. Más de 15 años de experiencia y cientos de clientes satisfechos."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://easywood.es/la-empresa" />
        <meta
          property="og:image"
          content="https://easywood.es/favicon/android-chrome-192x192.png"
        />
        <link rel="canonical" href="https://easywood.es/la-empresa" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Easywood",
            "description": "Empresa especializada en suelos de madera en Madrid con más de 15 años de experiencia.",
            "url": "https://easywood.es/la-empresa",
            "logo": "https://easywood.es/favicon/android-chrome-192x192.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Calle Marqués de Zafra 25",
              "addressLocality": "Madrid",
              "addressCountry": "ES"
            },
            "telephone": "+34 622 00 30 62",
            "email": "info@easywood.es"
          }
        `}</script>
      </Helmet>
      <div className="min-h-dvh">
        <CompanyAboutSection />
        <TeamAndProcessSection />
        <ContactSection />
      </div>
    </HelmetProvider>
  );
};

export default AboutUs;
