import { useEffect, memo } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import Home from "./pages/site/Home";
import AboutUs from "./pages/site/AboutUs";
import Services from "./pages/site/Services";
import Projects from "./pages/site/Projects";
import ProjectDetail from "./pages/site/ProjectDetail";
import Contact from "./pages/site/Contact";
import LegalNotice from "./pages/legales/LegalNotice";
import PrivacyPolicy from "./pages/legales/PrivacyPolicy";
import CookiesPolicy from "./pages/legales/CookiesPolicy";
import LiquidGlassDemo from "./pages/site/LiquidGlassDemo";
import NotFound from "./pages/site/NotFound";
import CookieConsent from "./components/layout/CookieConsent";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import useScrollToTop from "./hooks/useScrollToTop";

// Componentes memoizados para evitar re-renders
const MemoizedNavigation = memo(Navigation);
const MemoizedFooter = memo(Footer);
const MemoizedCookieConsent = memo(CookieConsent);

const queryClient = new QueryClient();

// Layout raíz optimizado que envuelve todas las páginas
const RootLayout = memo(() => {
  // Hook para manejar scroll to top y navegación con hash
  useScrollToTop();

  // Asegurar que el navegador no restaure scroll automáticamente entre páginas
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <>
      <MemoizedCookieConsent />
      <MemoizedNavigation />
      <main id="main-content">
        <Outlet />
      </main>
      <MemoizedFooter />
    </>
  );
});

RootLayout.displayName = "RootLayout";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "la-empresa", element: <AboutUs /> },
      { path: "servicios", element: <Services /> },
      { path: "nuestros-trabajos", element: <Projects /> },
      { path: "nuestros-trabajos/:slug", element: <ProjectDetail /> },
      {
        path: "proyectos",
        element: <Navigate to="/nuestros-trabajos" replace />,
      },
      {
        path: "proyectos/:slug",
        element: <Navigate to="/nuestros-trabajos/:slug" replace />,
      },
      { path: "contacto", element: <Contact /> },
      { path: "liquid-glass-demo", element: <LiquidGlassDemo /> },
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
