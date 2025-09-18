import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

// Skip link component for accessibility
const SkipLink = () => (
  <a
    href="#main-content"
    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-black focus:text-white focus:rounded-md focus:shadow-lg"
  >
    Saltar al contenido principal
  </a>
);

const navigationItems = [
  {
    label: "Inicio",
    pagePath: "/",
  },
  {
    label: "Nosotros",
    pagePath: "/la-empresa",
  },
  {
    label: "Servicios",
    pagePath: "/servicios",
  },
  {
    label: "Proyectos",
    pagePath: "/proyectos",
  },
  { label: "Contacto", pagePath: "/contacto" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";
  const isEmpresaPage = location.pathname === "/la-empresa";
  const isProjectsPage = location.pathname.startsWith("/proyectos");
  const isServicesPage = location.pathname === "/servicios";
  const isContactPage = location.pathname === "/contacto";
  const isLegalPage =
    location.pathname.startsWith("/aviso-legal") ||
    location.pathname.startsWith("/politica-privacidad") ||
    location.pathname.startsWith("/politica-cookies");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to home page and then scroll
      window.location.href = `/#${sectionId}`;
    }
  };

  const handleNavigation = (item: any) => {
    setIsMobileMenuOpen(false);
    if (item.pagePath.startsWith("/#")) {
      // Si es una sección, navega al home y deja el hash
      navigate(item.pagePath);
    } else {
      navigate(item.pagePath);
    }
  };

  const isNavVisible =
    isScrolled ||
    isProjectsPage ||
    isMobileMenuOpen ||
    isServicesPage ||
    isContactPage ||
    isLegalPage;

  // Logo: blanco solo en landing o empresa y menú transparente
  const logoSrc =
    (isHomePage || isEmpresaPage) && !isNavVisible
      ? "/images/logo/logo-blanco.png"
      : "/images/logo/logo-negro.png";

  // Text color: always black on legal pages, otherwise based on nav visibility
  const textColor = isLegalPage
    ? "text-black"
    : isNavVisible
    ? "text-black"
    : "text-white";
  const hoverColor = isLegalPage
    ? "hover:text-gray-600"
    : isNavVisible
    ? "hover:text-gray-600"
    : "hover:text-gray-200";

  return (
    <>
      <SkipLink />
      <nav
        role="navigation"
        aria-label="Navegación principal"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isNavVisible ? "glass-nav shadow-glass" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center md:justify-start justify-center relative">
            <Link
              to="/"
              className="flex flex-row items-center space-x-2 group justify-center w-full md:justify-start md:w-auto"
            >
              <img
                src={logoSrc}
                alt="Logo Llemy"
                className="w-10 h-10 object-contain transition-all duration-300 bg-transparent rounded-lg"
              />
              <span
                className={`text-xl font-semibold transition-all duration-300 ${textColor}`}
              >
                Llemy
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {navigationItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleNavigation(item)}
                  className={`text-sm font-medium transition-all duration-300 hover:scale-105 relative group ${textColor} ${hoverColor}`}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-all duration-300 hover:scale-105 shadow-glass ${
                isLegalPage
                  ? "glass-button-dark bg-black text-white hover:bg-gray-800"
                  : isNavVisible
                  ? "glass-button-dark bg-black text-white hover:bg-gray-800"
                  : "glass-button text-white hover:text-black"
              }`}
              aria-label={
                isMobileMenuOpen
                  ? "Cerrar menú de navegación"
                  : "Abrir menú de navegación"
              }
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 right-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className={`fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <div
          id="mobile-menu"
          className={`relative pt-20 pb-6 px-6 glass-nav shadow-glass border-b border-white/20 transform transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
          role="menu"
          aria-label="Menú de navegación móvil"
        >
          <div className="space-y-4">
            {navigationItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavigation(item)}
                className="block w-full text-center py-3 px-4 text-base font-medium text-black hover:text-gray-600 transition-all duration-300 hover:bg-white/10 rounded-lg"
                role="menuitem"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
