import { memo } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SiTiktok, SiInstagram, SiYoutube } from "react-icons/si";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/common/AnimatedSection";
import { Separator } from "@/components/ui/separator";
import useCurrentYear from "@/hooks/useCurrentYear";

type FooterProps = {
  showCredit?: boolean;
};

const Footer = memo<FooterProps>(({ showCredit = true }) => {
  const currentYear = useCurrentYear();

  return (
    <footer
      id="contacto"
      className="glass-nav-dark py-16 lg:py-20 border-t border-black/20"
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
                  src="/images/logo/easywood_logo.png"
                  alt="Logo EasyWood"
                  className="h-10 md:h-12 lg:h-14 w-auto max-w-[180px] md:max-w-[220px] object-contain"
                  loading="lazy"
                />
              </Link>

              <p className="text-gray-200 text-sm leading-relaxed max-w-xs mx-auto lg:mx-0">
                Expertos en suelos de madera, tarima y parquet en Madrid.
                Instalación, restauración, acuchillado, pulido y aceitado.
              </p>

              {/* Social Media */}
              <div
                className="flex justify-center lg:justify-start space-x-4"
                role="list"
                aria-label="Redes sociales"
              >
                <a
                  href="https://www.instagram.com/easywood_es/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-[#74bd51] transition-all duration-300 hover:scale-110"
                  aria-label="Visitar perfil de Instagram de EasyWood (se abre en ventana nueva)"
                >
                  <SiInstagram className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href="https://www.tiktok.com/@easywood_es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-[#74bd51] transition-all duration-300 hover:scale-110"
                  aria-label="Visitar perfil de TikTok de EasyWood (se abre en ventana nueva)"
                >
                  <SiTiktok className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href="https://www.youtube.com/@easywood_es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-[#74bd51] transition-all duration-300 hover:scale-110"
                  aria-label="Visitar canal de YouTube de EasyWood (se abre en ventana nueva)"
                >
                  <SiYoutube className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 text-center lg:text-left">
              <h4 className="text-lg font-semibold text-white">Contacto</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <MapPin
                    className="w-4 h-4 text-gray-300 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <div className="text-sm text-gray-200 space-y-1 text-center lg:text-left">
                    <a
                      href="https://www.google.com/maps?q=Calle+de+San+Gumersindo,+7,+28017+Madrid"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#74bd51] transition-colors duration-300"
                      aria-label="Abrir en Google Maps: Calle de San Gumersindo, 7, Ciudad Lineal, Madrid"
                    >
                      Calle de San Gumersindo, 7, Cdad. Lineal, Madrid
                    </a>
                  </div>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <Phone
                    className="w-4 h-4 text-gray-300 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <div className="text-sm text-gray-600 space-y-1">
                    <a
                      href="tel:+34622003062"
                      className="block text-gray-200 hover:text-[#74bd51] transition-colors duration-300"
                      aria-label="Llamar al teléfono +34 622 00 30 62"
                    >
                      +34 622 00 30 62
                    </a>
                  </div>
                </div>

                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <Mail
                    className="w-4 h-4 text-gray-300 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <a
                    href="mailto:info@easywood.es"
                    className="text-sm text-gray-200 hover:text-[#74bd51] transition-colors duration-300"
                    aria-label="Enviar email a info@easywood.es"
                  >
                    info@easywood.es
                  </a>
                </div>

                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <Clock
                    className="w-4 h-4 text-gray-300 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <div className="text-sm text-gray-200">
                    <p>Lunes a viernes: 08:00 - 19:00</p>
                    <p>Sábado: 08:00 - 14:00</p>
                    <p>Domingo: cerrado</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Legal Links */}
            <div className="space-y-6 text-center lg:text-left">
              <h4 className="text-lg font-semibold text-white">Legal</h4>
              <div className="space-y-3">
                <Link
                  to="/aviso-legal"
                  className="block text-sm text-gray-200 hover:text-[#74bd51] transition-colors duration-300"
                >
                  Aviso Legal
                </Link>
                <Link
                  to="/politica-privacidad"
                  className="block text-sm text-gray-200 hover:text-[#74bd51] transition-colors duration-300"
                >
                  Política de Privacidad
                </Link>
                <Link
                  to="/politica-cookies"
                  className="block text-sm text-gray-200 hover:text-[#74bd51] transition-colors duration-300"
                >
                  Política de Cookies
                </Link>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          {/* Bottom Footer */}
          <div className="text-center">
            <p className="text-sm text-gray-300">
              © {currentYear} EasyWood. Todos los derechos reservados.
            </p>
            {showCredit && (
              <p className="text-xs text-gray-400 mt-2">
                Sitio desarrollado por{" "}
                <a
                  href="https://www.404studios.digital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#74bd51] transition-colors duration-300 font-medium"
                >
                  404studios
                </a>
              </p>
            )}
          </div>
        </div>
      </AnimatedSection>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
