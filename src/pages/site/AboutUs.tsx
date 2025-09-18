import React, { useEffect } from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CompanyHeroSection from "@/components/company/CompanyHeroSection";
import CompanyAboutSection from "@/components/company/CompanyAboutSection";
import TeamAndProcessSection from "@/components/company/TeamSection";
import ContactSection from "@/components/sections/ContactSection";
import { Helmet, HelmetProvider } from "react-helmet-async";

const AboutUs = () => {
  useEffect(() => {
    document.title =
      "LLEMY - Empresa de Reformas Integrales | +25 años de experiencia | Madrid";

    // SEO meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Conoce LLEMY, empresa especializada en reformas integrales con más de 25 años de experiencia en Madrid y península Ibérica. Más de 340 proyectos realizados con excelencia técnica y humana."
      );
    }

    // Structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "LLEMY Reformas & Construcciones",
      description:
        "Empresa de reformas integrales con más de 25 años de experiencia",
      url: "https://www.llemy.com",
      logo: "https://www.llemy.com/images/logo/LOGO LLEMY Vector.svg",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Calle Marqués de Zafra 25",
        addressLocality: "Madrid",
        addressCountry: "ES",
      },
      telephone: "+34 673 16 76 98",
      email: "info@llemy.com",
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
          Sobre Nosotros | Reformas integrales en Madrid | LLEMY Reformas
        </title>
        <meta
          name="description"
          content="Conoce a LLEMY Reformas, empresa líder en reformas integrales en Madrid con más de 25 años de experiencia. Calidad, confianza y atención personalizada."
        />
        <meta
          name="keywords"
          content="sobre nosotros, reformas integrales, empresa de reformas, Madrid, experiencia, equipo, confianza"
        />
        <meta
          property="og:title"
          content="Sobre Nosotros | Reformas integrales en Madrid | LLEMY Reformas"
        />
        <meta
          property="og:description"
          content="Especialistas en reformas integrales en Madrid. Más de 25 años de experiencia y cientos de clientes satisfechos."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://llemy.com/la-empresa" />
        <meta
          property="og:image"
          content="https://llemy.com/images/logo/logo-negro.png"
        />
        <link rel="canonical" href="https://llemy.com/la-empresa" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "LLEMY Reformas & Construcciones",
            "description": "Empresa de reformas integrales en Madrid con más de 25 años de experiencia.",
            "url": "https://llemy.com/la-empresa",
            "logo": "https://llemy.com/images/logo/logo-negro.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Calle Marqués de Zafra 25",
              "addressLocality": "Madrid",
              "addressCountry": "ES"
            },
            "telephone": "+34 919 930 664",
            "email": "info@llemy.com"
          }
        `}</script>
      </Helmet>
      <div className="min-h-screen">
        <Navigation />
        <main id="main-content">
          <CompanyHeroSection />
          <CompanyAboutSection />
          <TeamAndProcessSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default AboutUs;
