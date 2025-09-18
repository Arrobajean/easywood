import { Helmet, HelmetProvider } from "react-helmet-async";
import HeroSection from "@/components/sections/HeroSection";
import AboutUsSection from "@/components/sections/AboutUsSection";
import ValuesSection from "@/components/sections/ValuesSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";

const Home = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>
          Easywood - Expertos en suelos de madera, tarima y parquet en Madrid
        </title>
        <meta
          name="description"
          content="Easywood: Expertos en suelos de madera, tarima y parquet en Madrid. Instalación, restauración, acuchillado, pulido y aceitado. Calidad garantizada y presupuesto gratuito."
        />
        <meta
          name="keywords"
          content="reformas integrales Madrid, empresa reformas Madrid, reformas viviendas Madrid, reformas locales Madrid, reformas oficinas Madrid, cocinas Madrid, baños Madrid, albañilería Madrid, electricidad Madrid, fontanería Madrid, alisado Madrid, pintura Madrid, suelos Madrid, carpintería Madrid, presupuesto reformas Madrid, garantía reformas Madrid"
        />
        <meta
          property="og:title"
          content="Easywood - Expertos en suelos de madera, tarima y parquet en Madrid"
        />
        <meta
          property="og:description"
          content="Easywood: Expertos en suelos de madera, tarima y parquet en Madrid. Instalación, restauración, acuchillado, pulido y aceitado. Calidad garantizada y presupuesto gratuito."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://easywood.es/" />
        <meta
          property="og:image"
          content="https://easywood.es/favicon/android-chrome-192x192.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Easywood" />
        <meta property="og:locale" content="es_ES" />

        {/* Twitter Card */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://easywood.es/" />
        <meta
          property="twitter:title"
          content="Easywood - Expertos en suelos de madera, tarima y parquet en Madrid"
        />
        <meta
          property="twitter:description"
          content="Easywood: Expertos en suelos de madera, tarima y parquet en Madrid. Instalación, restauración, acuchillado, pulido y aceitado. Calidad garantizada y presupuesto gratuito."
        />
        <meta
          property="twitter:image"
          content="https://easywood.es/favicon/android-chrome-192x192.png"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://easywood.es/" />

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
            name: "Easywood - Expertos en suelos de madera, tarima y parquet en Madrid",
            description:
              "Easywood: Expertos en suelos de madera, tarima y parquet en Madrid. Instalación, restauración, acuchillado, pulido y aceitado. Calidad garantizada y presupuesto gratuito.",
            url: "https://easywood.es/",
            mainEntity: {
              "@type": "LocalBusiness",
              name: "Easywood",
              description:
                "Empresa de reformas integrales en Madrid con más de 25 años de experiencia",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Calle de San Gumersindo 7",
                addressLocality: "Madrid",
                addressRegion: "Madrid",
                postalCode: "28017",
                addressCountry: "ES",
              },
              telephone: "+34 622 00 30 62",
              email: "info@easywood.es",
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
                  item: "https://easywood.es/",
                },
              ],
            },
          })}
        </script>
      </Helmet>
      <div className="min-h-screen">
        <HeroSection />
        <AboutUsSection />
        <ValuesSection />
        <WhyChooseUsSection />
        <ServicesSection />
        <ProcessSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ContactSection />
      </div>
    </HelmetProvider>
  );
};

export default Home;
