import React, { useEffect, useRef } from "react";
import { Target, Eye, Heart } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CompanyAboutSection = () => {
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!cardsRef.current) return;
    gsap.fromTo(
      cardsRef.current.querySelectorAll(".about-card"),
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.18,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  const values = [
    {
      icon: Target,
      title: "Misión",
      description:
        "Transformar espacios creando hogares únicos que reflejen la personalidad y necesidades de nuestros clientes, siempre con la máxima calidad y profesionalidad.",
    },
    {
      icon: Eye,
      title: "Visión",
      description:
        "Ser la empresa de referencia en suelos de madera en Madrid, reconocida por nuestra excelencia, innovación y compromiso con la satisfacción del cliente.",
    },
    {
      icon: Heart,
      title: "Valores",
      description:
        "Nos guiamos por la transparencia en cada presupuesto, la puntualidad en los plazos, la excelencia técnica en los acabados y una atención cercana que da confianza de principio a fin.",
    },
  ];

  return (
    <section
      className="min-h-dvh bg-white overflow-hidden"
      style={{ paddingTop: "var(--header-height)" }}
    >
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-sm font-medium text-gray-500 mb-4 tracking-wider uppercase">
              El corazón de la empresa
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
              15 años transformando espacios con suelos de madera
            </h3>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <h4 className="text-lg font-semibold text-black mb-4">
                Nuestra Historia
              </h4>
              <p>
                Desde hace más de 15 años, en{" "}
                <strong className="text-black">Easywood</strong> nos hemos
                especializado en suelos de madera, parquet y tarimas. Cada
                proyecto nos ha permitido perfeccionar nuestras técnicas
                profesionales y consolidar una cultura de excelencia en el
                sector de la madera.
              </p>
              <p>
                Nuestra especialización en{" "}
                <strong className="text-black">
                  suelos de madera, instalación y restauración
                </strong>{" "}
                nos ha convertido en una empresa de referencia en Madrid, con
                más de 200 proyectos realizados con la máxima calidad y
                durabilidad.
              </p>
              <p className="text-sm text-gray-500 mt-4">
                Nuestro compromiso es ofrecer un servicio de calidad con
                atención personalizada y resultados que superen las expectativas
                de nuestros clientes.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-black">200+</div>
                <div className="text-sm text-gray-500">Proyectos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black">15+</div>
                <div className="text-sm text-gray-500">Años</div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src="/images/UI/landing4.jpeg"
              alt="Suelo de madera con acabado profesional y diseño moderno"
              className="w-full h-80 object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
            Lo que nos mueve en Easywood
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            No solo instalamos suelos, creamos espacios únicos donde vivirás
            cada día con comodidad y estilo.
          </p>
        </div>
        <div
          ref={cardsRef}
          className="grid md:grid-cols-3 gap-8 about-card-group"
        >
          {values.map(({ icon: Icon, title, description }, index) => (
            <article
              key={index}
              className="about-card glass-card rounded-2xl p-8 h-full text-center shadow-md"
            >
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-black mb-2">{title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyAboutSection;
