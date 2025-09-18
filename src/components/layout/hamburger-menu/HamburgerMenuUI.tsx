import { Link } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface HamburgerMenuUIProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  isNavVisible: boolean;
  refs: {
    overlayRef: React.RefObject<HTMLDivElement>;
    menuItemsRef: React.RefObject<HTMLDivElement>;
    line1Ref: React.RefObject<HTMLDivElement>;
    line2Ref: React.RefObject<HTMLDivElement>;
    line3Ref: React.RefObject<HTMLDivElement>;
  };
}

const navigationItems = [
  { label: "Inicio", pagePath: "/" },
  { label: "Nosotros", pagePath: "/la-empresa" },
  { label: "Servicios", pagePath: "/servicios" },
  { label: "Trabajos", pagePath: "/nuestros-trabajos" },
  { label: "Contacto", pagePath: "/contacto" },
];

export const HamburgerMenuUI = ({
  isOpen,
  onToggle,
  onClose,
  isNavVisible,
  refs,
}: HamburgerMenuUIProps) => {
  return (
    <>
      {/* Botón Hamburguesa con líneas animadas */}
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={onToggle}
            style={{
              position: "relative",
              width: "48px",
              height: "48px",
              backgroundColor: "transparent",
              border: "none",
              borderRadius: "8px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              gap: "4px",
              zIndex: 10002,
            }}
            aria-label={
              isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"
            }
            aria-expanded={isOpen}
            aria-haspopup="menu"
            aria-controls="hamburger-menu"
            className="focus:outline-none"
          >
            <div
              ref={refs.line1Ref}
              style={{
                width: "22px",
                height: "2px",
                backgroundColor: "white",
                borderRadius: "1px",
                transformOrigin: "center",
              }}
              aria-hidden="true"
            />
            <div
              ref={refs.line2Ref}
              style={{
                width: "22px",
                height: "2px",
                backgroundColor: "white",
                borderRadius: "1px",
              }}
              aria-hidden="true"
            />
            <div
              ref={refs.line3Ref}
              style={{
                width: "22px",
                height: "2px",
                backgroundColor: "white",
                borderRadius: "1px",
              }}
              aria-hidden="true"
            />
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{isOpen ? "Cerrar menú" : "Abrir menú"}</p>
        </TooltipContent>
      </Tooltip>

      {/* Overlay de fondo con efecto blur */}
      <div
        ref={refs.overlayRef}
        id="hamburger-menu"
        role="dialog"
        aria-modal="true"
        aria-labelledby="hamburger-menu-title"
        aria-describedby="hamburger-menu-description"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100dvh",
          zIndex: 10000,
          overflow: "hidden",
          isolation: "isolate",
        }}
      >
        {/* Contenedor con fondo negro sólido */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#000000",
            transition: "all 0.3s ease",
          }}
        >
          {/* Elementos decorativos - patrones geométricos */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              overflow: "hidden",
              pointerEvents: "none",
            }}
            aria-hidden="true"
          >
            {/* Patrón de círculos en la esquina superior izquierda */}
            <div
              style={{
                position: "absolute",
                top: "-50px",
                left: "-50px",
                width: "200px",
                height: "200px",
                opacity: 0.05,
              }}
            >
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    width: `${8 + i * 2}px`,
                    height: `${8 + i * 2}px`,
                    borderRadius: "50%",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    top: `${i * 15}px`,
                    left: `${i * 12}px`,
                  }}
                  aria-hidden="true"
                />
              ))}
            </div>

            {/* Patrón de líneas en la esquina inferior derecha */}
            <div
              style={{
                position: "absolute",
                bottom: "-30px",
                right: "-30px",
                width: "180px",
                height: "180px",
                opacity: 0.04,
              }}
            >
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    width: `${60 + i * 10}px`,
                    height: "1px",
                    backgroundColor: "rgba(255, 255, 255, 0.4)",
                    top: `${i * 20}px`,
                    right: `${i * 5}px`,
                    transform: `rotate(${i * 15}deg)`,
                    transformOrigin: "right center",
                  }}
                  aria-hidden="true"
                />
              ))}
            </div>

            {/* Elementos flotantes sutiles */}
            <div
              style={{
                position: "absolute",
                top: "20%",
                right: "10%",
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                animation: "float 6s ease-in-out infinite",
              }}
              aria-hidden="true"
            />
            <div
              style={{
                position: "absolute",
                top: "60%",
                left: "15%",
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                animation: "float 8s ease-in-out infinite reverse",
              }}
              aria-hidden="true"
            />
          </div>

          {/* Menú de navegación */}
          <div
            id="hamburger-menu-description"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              padding: "20px",
              boxSizing: "border-box",
            }}
          >
            {/* Título oculto para lectores de pantalla */}
            <h1 id="hamburger-menu-title" className="sr-only">
              Menú principal de EasyWood
            </h1>

            {/* Elementos del menú */}
            <nav
              ref={refs.menuItemsRef}
              role="navigation"
              aria-label="Navegación principal"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "clamp(24px, 4vw, 32px)",
                marginBottom: "clamp(48px, 8vw, 64px)",
                width: "100%",
                maxWidth: "400px",
              }}
            >
              {navigationItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.pagePath}
                  onClick={() => {
                    onClose();
                    if (item.pagePath === "/") {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className="hamburger-menu-item focus:outline-none rounded-md"
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    textAlign: "center",
                    width: "100%",
                    fontSize: "clamp(24px, 6vw, 32px)",
                  }}
                  aria-label={`${item.label} - ${
                    item.pagePath === "/"
                      ? "Ir al inicio"
                      : `Ir a ${item.label.toLowerCase()}`
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Información de contacto en la parte inferior */}
            <div
              style={{
                position: "absolute",
                bottom: "40px",
                left: "50%",
                transform: "translateX(-50%)",
                textAlign: "center",
              }}
              role="complementary"
              aria-label="Información de contacto"
            >
              <a
                href="tel:+34612345678"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "clamp(16px, 4vw, 20px)",
                  fontWeight: "500",
                  opacity: 0.9,
                }}
                className="hover:opacity-100 transition-opacity duration-200"
                aria-label="Llamar al +34 612 345 678"
              >
                +34 612 345 678
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
