import { memo, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import useNavigationLogic from "./Navigation.logic.ts";
import { HamburgerMenu } from "./hamburger-menu";

// Skip link component for accessibility
const SkipLink = () => (
  <a
    href="#main-content"
    className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-black focus:text-white focus:rounded-md focus:shadow-lg"
  >
    Saltar al contenido principal
  </a>
);

const navigationItems = [
  { label: "Inicio", pagePath: "/" },
  { label: "Nosotros", pagePath: "/la-empresa" },
  { label: "Servicios", pagePath: "/servicios" },
  { label: "Trabajos", pagePath: "/nuestros-trabajos" },
  { label: "Contacto", pagePath: "/contacto" },
];

const Navigation = memo(() => {
  const { isNavVisible, isLegalPage, handleNavigation, logoSrc } =
    useNavigationLogic();

  // Medir altura real del header y exponerla como variable CSS
  const navRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const updateHeaderHeight = () => {
      const h = navRef.current?.offsetHeight ?? 0;
      document.documentElement.style.setProperty("--header-height", `${h}px`);
    };
    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);
    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, [isNavVisible]);

  const textColor = isNavVisible
    ? "text-white"
    : isLegalPage
    ? "text-black"
    : "text-white";
  const hoverColor = "hover:text-[#74bd51]";

  return (
    <>
      <SkipLink />
      <nav
        ref={navRef as any}
        role="navigation"
        aria-label="Navegación principal"
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 border-b header-fixed ${
          isNavVisible ? "glass-nav-dark shadow-glass" : "bg-transparent"
        } ${isNavVisible ? "border-black/20" : "border-transparent"} m-0 p-0`}
      >
        <div className="w-full px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex flex-row items-center space-x-2 group justify-center w-full md:justify-start md:w-auto z-[10001] relative"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <img
                src={logoSrc}
                alt="Logo EasyWood"
                className="h-16 sm:h-18 md:h-12 lg:h-14 w-auto max-w-[220px] sm:max-w-[240px] md:max-w-[220px] object-contain transition-all duration-300 bg-transparent rounded-lg group-hover:animate-logo-bounce"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
              {navigationItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleNavigation(item)}
                  className={`uppercase tracking-wide text-base lg:text-lg font-semibold transition-all duration-300 relative group ${textColor} ${hoverColor}`}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            {/* Desktop CTA aligned with links */}
            <div className="hidden md:block">
              <Link
                to="/contacto"
                aria-label="Ir a contacto para pedir presupuesto"
              >
                <Button
                  size="sm"
                  className="group flex items-center glass-button-dark bg-white text-black hover:bg-gray-100 font-medium px-6 fast-transitions touch-optimized optimize-interactions shadow-glass hover:shadow-glass-lg border-0 transition-all duration-300 ease-out"
                >
                  <span>Pide presupuesto</span>
                  <ArrowRight
                    size={18}
                    className="ml-2 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 ease-out"
                    aria-hidden="true"
                  />
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button - Hamburger Menu */}
            <div className="md:hidden">
              <HamburgerMenu />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
});

Navigation.displayName = "Navigation";

export default Navigation;
