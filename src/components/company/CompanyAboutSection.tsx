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
      icon: Eye,
      title: "Visión",
      description:
        "Lograr que cualquier proyecto de reforma se ejecute con mínimos retrasos y el mayor rendimiento del presupuesto, integrando soluciones sostenibles y tecnología de vanguardia.",
    },
    {
      icon: Target,
      title: "Misión",
      description:
        "Transformar hogares, locales y empresas con actuaciones cuidadosas, empleando materiales de primera para garantizar durabilidad y satisfacción a largo plazo.",
    },
    {
      icon: Heart,
      title: "Valores",
      description:
        "Sinceridad, puntualidad, excelencia y cercanía: principios que guían cada decisión, desde la primera idea hasta la entrega de llaves.",
    },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-sm font-medium text-gray-500 mb-4 tracking-wider uppercase">
              El corazón de la empresa
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
              25 años construyendo espacios que perduran
            </h3>
            <div className="mb-8 flex items-center space-x-4">
              <img
                src="/images/logo/LOGO LLEMY Vector.svg"
                alt="Logo LLEMY"
                className="w-12 h-12 object-contain"
                loading="lazy"
              />
              <span className="text-2xl font-bold text-black">LLEMY</span>
            </div>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <h4 className="text-lg font-semibold text-black mb-4">
                Nuestra Historia
              </h4>
              <p>
                Desde hace más de 25 años, en{" "}
                <strong className="text-black">
                  Llemy Reformas & Construcciones
                </strong>{" "}
                hemos intervenido en obras residenciales, comerciales e
                industriales a lo largo de toda la península Ibérica. Cada
                proyecto nos ha permitido perfeccionar procesos, abrazar la
                innovación y consolidar una cultura de excelencia técnica y
                humana.
              </p>
              <p>
                La calidad de nuestro trabajo y el boca a boca de clientes
                satisfechos nos permitió expandirnos por toda la Comunidad de
                Madrid, convirtiéndonos en una empresa de referencia con más de
                340 proyectos realizados.
              </p>
              <p className="text-sm text-gray-500 mt-4">
                Nuestra transformación digital ha sido posible gracias a{" "}
                <a
                  href="https://www.404studios.digital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-600 transition-colors duration-300 font-medium underline"
                  aria-label="Visitar 404studios.digital - Desarrolladores web (se abre en ventana nueva)"
                >
                  404studios.digital
                </a>
                , que nos ha ayudado a modernizar nuestra presencia online.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-black">340+</div>
                <div className="text-sm text-gray-500">Proyectos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black">25+</div>
                <div className="text-sm text-gray-500">Años</div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src="/images/Fotos Obras LLemy/Pardiñas/IMG-20250208-WA0008.jpg"
              alt="Baño moderno reforma Llemy Pardiñas"
              className="w-full h-80 object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
            Misión · Visión · Valores
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Los pilares fundamentales que guían nuestra actividad empresarial y
            definen nuestra identidad como líderes en el sector de reformas.
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
