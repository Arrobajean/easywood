import React from "react";
import {
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
} from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/common/AnimatedSection";
import { Separator } from "@/components/ui/separator";
import useCurrentYear from "@/hooks/useCurrentYear";

const Footer = () => {
  const currentYear = useCurrentYear();

  return (
    <footer
      id="contacto"
      className="glass-footer py-16 lg:py-20 border-t border-gray-200"
      role="contentinfo"
      aria-label="Información de contacto y enlaces"
    >
      <AnimatedSection animation="slideUp">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Logo and Company Info */}
            <div className="lg:col-span-1 space-y-6 text-center lg:text-left">
              <Link
                to="/"
                className="flex items-center justify-center lg:justify-start space-x-3"
              >
                <img
                  src="/images/logo/LOGO LLEMY Vector.svg"
                  alt="Logo Llemy"
                  className="w-12 h-12 object-contain"
                  loading="lazy"
                />
                <span className="text-2xl font-bold text-black">Llemy</span>
              </Link>

              <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto lg:mx-0">
                Más de 25 años transformando espacios con excelencia técnica y
                humana en Madrid.
              </p>

              {/* Social Media */}
              <div className="flex justify-center lg:justify-start space-x-4" role="list" aria-label="Redes sociales">
                <a
                  href="https://www.facebook.com/REFORMASLLEMY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass-button-dark bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-all duration-300 shadow-glass hover:scale-110"
                  aria-label="Visitar página de Facebook de Llemy Reformas (se abre en ventana nueva)"
                >
                  <Facebook className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href="https://www.linkedin.com/in/reformasllemy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass-button-dark bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-all duration-300 shadow-glass hover:scale-110"
                  aria-label="Visitar perfil de LinkedIn de Llemy Reformas (se abre en ventana nueva)"
                >
                  <Linkedin className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href="https://www.instagram.com/llemyreformas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass-button-dark bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-all duration-300 shadow-glass hover:scale-110"
                  aria-label="Visitar perfil de Instagram de Llemy Reformas (se abre en ventana nueva)"
                >
                  <Instagram className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 text-center lg:text-left">
              <h4 className="text-lg font-semibold text-black">Contacto</h4>
              <div className="space-y-4">
                {/* Eliminada la dirección física */}
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <Phone className="w-4 h-4 text-gray-500 flex-shrink-0" aria-hidden="true" />
                  <div className="text-sm text-gray-600 space-y-1">
                    <a
                      href="tel:+34919930664"
                      className="block hover:text-black transition-colors duration-300"
                      aria-label="Llamar al teléfono 91 993 06 64"
                    >
                      91 993 06 64
                    </a>
                  </div>
                </div>

                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <Mail className="w-4 h-4 text-gray-500 flex-shrink-0" aria-hidden="true" />
                  <a
                    href="mailto:info@llemy.com"
                    className="text-sm text-gray-600 hover:text-black transition-colors duration-300"
                    aria-label="Enviar email a info@llemy.com"
                  >
                    info@llemy.com
                  </a>
                </div>

                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <Clock className="w-4 h-4 text-gray-500 flex-shrink-0" aria-hidden="true" />
                  <div className="text-sm text-gray-600">
                    <p>L-V: 10:00 - 20:00</p>
                    <p>S: 10:00 - 14:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Legal Links */}
            <div className="space-y-6 text-center lg:text-left">
              <h4 className="text-lg font-semibold text-black">Legal</h4>
              <div className="space-y-3">
                <Link
                  to="/aviso-legal"
                  className="block text-sm text-gray-600 hover:text-black transition-colors duration-300"
                >
                  Aviso Legal
                </Link>
                <Link
                  to="/politica-privacidad"
                  className="block text-sm text-gray-600 hover:text-black transition-colors duration-300"
                >
                  Política de Privacidad
                </Link>
                <Link
                  to="/politica-cookies"
                  className="block text-sm text-gray-600 hover:text-black transition-colors duration-300"
                >
                  Política de Cookies
                </Link>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          {/* Bottom Footer */}
          <div className="text-center">
            <p className="text-sm text-gray-500">
              © {currentYear} Llemy Reformas & Construcciones. Todos los
              derechos reservados.
            </p>
            <p className="text-xs text-gray-400 mt-2">
              Sitio desarrollado por{" "}
              <a
                href="https://www.404studios.digital"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-600 transition-colors duration-300 font-medium"
              >
                404studios
              </a>
            </p>
          </div>
        </div>
      </AnimatedSection>
    </footer>
  );
};

export default Footer;
