import React, { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import AnimatedSection from "@/components/common/AnimatedSection";
import ServiceCard from "@/components/features/ServiceCard";
import ServicesHero from "@/components/features/ServicesHero";
import ServicesCTA from "@/components/features/ServicesCTA";
import ServicesSEO from "@/components/features/ServicesSEO";
import { servicesData } from "@/data/servicesData";

const Services = () => {
  useEffect(() => {
    document.title = "Easywood - Servicios de Reformas Integrales | Madrid";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Servicios completos de reformas integrales en Madrid. Cocinas, baños, suelos, electricidad y más. Más de 25 años de experiencia."
      );
    }
  }, []);

  const services = servicesData;

  return (
    <HelmetProvider>
      <ServicesSEO />
      <div className="min-h-dvh" style={{ paddingTop: "var(--header-height)" }}>
        <div className="container mx-auto px-6 py-16 md:py-24">
          <AnimatedSection animation="fade">
            <ServicesHero />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <AnimatedSection
                key={service.title}
                animation="slideUp"
                delay={index * 0.1}
              >
                <ServiceCard service={service} delay={0} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="scale" delay={0.8}>
            <ServicesCTA />
          </AnimatedSection>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Services;
