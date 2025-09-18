import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Forzar scroll al top inmediatamente en cada cambio de ruta
    if (hash) {
      // Si hay hash, primero scroll al top y luego a la sección
      window.scrollTo(0, 0);
      const timer = setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
      return () => clearTimeout(timer);
    } else {
      // Si no hay hash, scroll al top inmediatamente
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
};

export default useScrollToTop;
