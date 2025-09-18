import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/common/AnimatedSection";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { db } from "@/lib/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

// EmailJS import (asegúrate de instalarlo: npm install emailjs-com)
import emailjs from "emailjs-com";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFirstImageLoaded, setIsFirstImageLoaded] = useState(false);
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);
  const [openCallback, setOpenCallback] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
    website: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const heroImages = useMemo(
    () => [
      {
        src: "/images/Fotos Obras LLemy/Pardiñas/optimized/cocina-comedor-diseno-moderno-reforma-lujo.webp",
        alt: "Cocina de diseño moderno con isla y comedor integrado en reforma de lujo",
      },
      {
        src: "/images/Fotos Obras LLemy/Pardiñas/optimized/salon-comedor-estilo-nordico-vigas-madera.webp",
        alt: "Salón comedor de estilo nórdico con pared de listones de madera y vigas vistas",
      },
      {
        src: "/images/Fotos Obras LLemy/Pardiñas/optimized/bano-moderno-banera-exenta-negra-reforma.webp",
        alt: "Baño moderno con bañera exenta negra, ducha de obra y decoración vegetal",
      },
    ],
    []
  );

  // Optimized slide change handler
  const handleSlideChange = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  // Optimized WhatsApp handler
  const handleWhatsAppClick = useCallback(() => {
    const phoneNumber = "919930664";
    const message = encodeURIComponent(
      "Hola! Me gustaría solicitar un presupuesto para reformar mi hogar."
    );
    const whatsappUrl = `https://wa.me/34${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  }, []);

  // Abrir modal de callback
  const handleCallbackClick = useCallback(() => {
    setOpenCallback(true);
  }, []);

  useEffect(() => {
    let loadedCount = 0;
    const totalImages = heroImages.length;

    const checkAllLoaded = () => {
      loadedCount++;
      if (loadedCount === 1) {
        setIsFirstImageLoaded(true);
      }
      if (loadedCount === totalImages) {
        setAllImagesLoaded(true);
      }
    };

    // Preload all images immediately
    heroImages.forEach((image) => {
      const img = new Image();
      img.onload = checkAllLoaded;
      img.src = image.src;
    });

    // Start slider after a short delay
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroImages]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Lógica de envío con EmailJS
  // 1. Crea una cuenta en https://www.emailjs.com/
  // 2. Crea un servicio y una plantilla (template) con los campos: name, phone, message
  // 3. Obtén tu userID, serviceID y templateID
  // 4. Puedes ponerlos en variables de entorno o directamente aquí para pruebas
  const SERVICE_ID =
    import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
  const TEMPLATE_ID =
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
  const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID || "YOUR_USER_ID";

  // Validación avanzada
  function validatePhone(phone: string) {
    return /^[0-9\s\-\+]{7,16}$/.test(phone);
  }

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormErrors({});
    setError("");
    setSuccess(false);
    // Honeypot anti-spam
    if (form.website) return;
    // Validación avanzada
    const errors: { [key: string]: string } = {};
    if (!form.name.trim() || form.name.trim().length < 2)
      errors.name = "El nombre es obligatorio (mínimo 2 caracteres).";
    if (!form.phone.trim() || !validatePhone(form.phone.trim()))
      errors.phone = "Teléfono inválido.";
    if (
      form.message &&
      form.message.trim().length > 0 &&
      form.message.trim().length < 5
    )
      errors.message = "El comentario debe tener al menos 5 caracteres.";
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setLoading(true);
    try {
      const lead = {
        name: form.name.trim(),
        phone: form.phone.trim(),
        message: form.message.trim(),
        fecha: Timestamp.now(),
        status: "nuevo",
        userAgent: navigator.userAgent,
      };
      await addDoc(collection(db, "callbacks"), lead);
      // await sendLeadEmail(lead); // Descomentar cuando esté implementado
      setSuccess(true);
      setForm({ name: "", phone: "", message: "", website: "" });
    } catch (err) {
      setError(
        "Hubo un error al enviar el mensaje. Inténtalo de nuevo más tarde."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (success) {
      setTimeout(() => setOpenCallback(false), 1200); // Cierra el modal tras 1.2s
    }
  }, [success]);

  return (
    <section
      className="relative h-screen overflow-hidden"
      role="banner"
      aria-label="Sección principal"
    >
      {/* Background with fallback */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700" />

      {/* Image Slider */}
      <div
        className="absolute inset-0"
        role="img"
        aria-label="Galería de proyectos destacados"
      >
        {heroImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0 optimize-interactions"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
            />
          </motion.div>
        ))}
      </div>

      {/* Glass Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-4xl mx-auto px-6">
          <div className="p-8 md:p-12">
            <AnimatedSection animation="slideUp" delay={0.05}>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">
                Hacemos de tu proyecto una realidad
              </h1>
            </AnimatedSection>
            <AnimatedSection animation="fade" delay={0.2}>
              <p className="text-lg md:text-xl mb-8 opacity-90 text-balance max-w-3xl mx-auto">
                Con más de 25 años de experiencia como empresa de referencia,
                transformamos espacios con acabados de distinción y una calidad
                que perdura en el tiempo.
              </p>
            </AnimatedSection>
            <AnimatedSection
              animation="slideUp"
              delay={0.35}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                size="lg"
                onClick={handleWhatsAppClick}
                className="group flex items-center glass-button-dark bg-white text-black hover:bg-gray-100 font-medium px-8 fast-transitions touch-optimized optimize-interactions shadow-glass hover:shadow-glass-lg border-0 transition-all duration-300 ease-out"
                aria-label="Contactar por WhatsApp para transformar tu hogar"
              >
                <span>Transforma tu hogar</span>
                <ArrowRight
                  size={22}
                  className="ml-2 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 ease-out"
                  aria-hidden="true"
                />
              </Button>
              <Dialog open={openCallback} onOpenChange={setOpenCallback}>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    className="group flex items-center glass-button-dark bg-white text-black hover:bg-gray-100 font-medium px-8 fast-transitions touch-optimized optimize-interactions shadow-glass hover:shadow-glass-lg border-0 transition-all duration-300 ease-out"
                    aria-label="Solicitar que te llamemos"
                  >
                    <span>¿Te llamamos?</span>
                    <Phone
                      size={20}
                      className="ml-2 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 ease-out"
                      aria-hidden="true"
                    />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>¿Quieres que te llamemos?</DialogTitle>
                    <DialogDescription>
                      Déjanos tus datos y te contactaremos lo antes posible.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleFormSubmit} className="space-y-4 mt-2">
                    {/* Honeypot anti-spam */}
                    <input
                      type="text"
                      name="website"
                      value={form.website}
                      onChange={handleFormChange}
                      style={{ display: "none" }}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-1"
                      >
                        Nombre completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleFormChange}
                        className="w-full px-3 py-2 rounded border border-gray-300 text-black"
                        placeholder="Tu nombre"
                        aria-invalid={!!formErrors.name}
                        aria-describedby="error-callback-name"
                      />
                      {formErrors.name && (
                        <p
                          id="error-callback-name"
                          className="text-red-500 text-xs mt-1"
                        >
                          {formErrors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-1"
                      >
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleFormChange}
                        className="w-full px-3 py-2 rounded border border-gray-300 text-black"
                        placeholder="Tu teléfono"
                        aria-invalid={!!formErrors.phone}
                        aria-describedby="error-callback-phone"
                      />
                      {formErrors.phone && (
                        <p
                          id="error-callback-phone"
                          className="text-red-500 text-xs mt-1"
                        >
                          {formErrors.phone}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-1"
                      >
                        Comentario (opcional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleFormChange}
                        className="w-full px-3 py-2 rounded border border-gray-300 text-black resize-none"
                        placeholder="¿En qué podemos ayudarte?"
                        rows={3}
                        maxLength={140}
                        aria-invalid={!!formErrors.message}
                        aria-describedby="error-callback-message"
                      />
                      {formErrors.message && (
                        <p
                          id="error-callback-message"
                          className="text-red-500 text-xs mt-1"
                        >
                          {formErrors.message}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="callback-privacidad"
                        name="callback-privacidad"
                        checked={privacyAccepted}
                        onChange={(e) => setPrivacyAccepted(e.target.checked)}
                        required
                        className="mr-2"
                      />
                      <label
                        htmlFor="callback-privacidad"
                        className="text-sm text-gray-700"
                      >
                        He leído y acepto la{" "}
                        <a
                          href="/politica-privacidad"
                          target="_blank"
                          className="underline"
                        >
                          Política de Privacidad
                        </a>
                        .
                      </label>
                    </div>
                    {error && (
                      <div className="text-red-500 text-sm">{error}</div>
                    )}
                    {success && (
                      <div className="text-green-600 text-sm">
                        ¡Mensaje enviado correctamente! Te llamaremos pronto.
                      </div>
                    )}
                    <DialogFooter>
                      <Button
                        type="submit"
                        disabled={loading || !privacyAccepted}
                        className="group flex items-center justify-center"
                      >
                        <span>
                          {loading ? "Enviando..." : "Solicitar llamada"}
                        </span>
                        <ArrowRight
                          size={22}
                          className="ml-2 sm:opacity-0 sm:translate-x-4 sm:group-hover:opacity-100 sm:group-hover:translate-x-0 opacity-100 translate-x-0 transition-all duration-300 ease-out"
                        />
                      </Button>
                      <DialogClose asChild>
                        <Button
                          type="button"
                          variant="ghost"
                          className="group flex items-center justify-center"
                        >
                          <span>Cancelar</span>
                          <ArrowRight
                            size={22}
                            className="ml-2 sm:opacity-0 sm:translate-x-4 sm:group-hover:opacity-100 sm:group-hover:translate-x-0 opacity-100 translate-x-0 transition-all duration-300 ease-out"
                          />
                        </Button>
                      </DialogClose>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <AnimatedSection animation="fade" delay={0.5}>
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2"
          role="group"
          aria-label="Indicadores de diapositivas"
        >
          {heroImages.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => handleSlideChange(index)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className={`w-3 h-3 rounded-full fast-transitions touch-optimized optimize-interactions ${
                index === currentSlide
                  ? "bg-white shadow-glass"
                  : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Ir a la diapositiva ${index + 1}`}
              aria-current={index === currentSlide ? "true" : "false"}
            />
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
};

export default HeroSection;
