import React, { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";
import Lenis from "lenis";
import Home from "./pages/site/Home";
import AboutUs from "./pages/site/AboutUs";
import Services from "./pages/site/Services";
import Projects from "./pages/site/Projects";
import ProjectDetail from "./pages/site/ProjectDetail";
import Contact from "./pages/site/Contact";
import LegalNotice from "./pages/legales/LegalNotice";
import PrivacyPolicy from "./pages/legales/PrivacyPolicy";
import CookiesPolicy from "./pages/legales/CookiesPolicy";
import NotFound from "./pages/site/NotFound";
import CookieConsent from "./components/layout/CookieConsent";
import useLenis from "./hooks/useLenis";

const queryClient = new QueryClient();

// Componente de control manual del scroll
const ScrollToTop = ({ lenis }: { lenis: Lenis | null }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Usar Lenis si está disponible, sino usar scroll nativo
    if (lenis) {
      lenis.scrollTo(0, { duration: 0.5 });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, lenis]); // Se ejecuta cada vez que la ruta cambia

  return null;
};

// Layout raíz que envuelve todas las páginas
const RootLayout = () => {
  const lenis = useLenis(); // Activar el scroll suave en toda la aplicación

  return (
    <>
      <ScrollToTop lenis={lenis} />
      <CookieConsent />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "la-empresa", element: <AboutUs /> },
      { path: "servicios", element: <Services /> },
      { path: "proyectos", element: <Projects /> },
      { path: "proyectos/:slug", element: <ProjectDetail /> },
      { path: "contacto", element: <Contact /> },
      { path: "aviso-legal", element: <LegalNotice /> },
      { path: "politica-privacidad", element: <PrivacyPolicy /> },
      { path: "politica-cookies", element: <CookiesPolicy /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <RouterProvider router={router} />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
