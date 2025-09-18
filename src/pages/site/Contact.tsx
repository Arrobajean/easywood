import React, { useState } from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";
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
import { Helmet, HelmetProvider } from "react-helmet-async";
import emailjs from "emailjs-com";

// Validación simple
function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function validatePhone(phone: string) {
  return /^[0-9\s\-\+]{9,16}$/.test(phone);
}

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    tipoReforma: "",
    presupuesto: "",
    mensaje: "",
    website: "", // honeypot
  });
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  // Estado para el modal de callback
  const [openCallback, setOpenCallback] = useState(false);
  const [callbackForm, setCallbackForm] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // EmailJS config (igual que en HeroSection)
  const SERVICE_ID =
    import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
  const TEMPLATE_ID =
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
  const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID || "YOUR_USER_ID";

  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [callbackPrivacyAccepted, setCallbackPrivacyAccepted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormErrors({});
    if (!privacyAccepted) {
      setFormErrors((prev) => ({
        ...prev,
        privacidad: "Debes aceptar la política de privacidad.",
      }));
      return;
    }
    // Honeypot: si el campo oculto está relleno, es spam
    if (formData.website) return;
    // Validación avanzada
    const errors: { [key: string]: string } = {};
    if (!formData.nombre.trim()) errors.nombre = "El nombre es obligatorio.";
    if (!formData.email.trim() || !validateEmail(formData.email.trim()))
      errors.email = "Email inválido.";
    if (!formData.telefono.trim() || !validatePhone(formData.telefono.trim()))
      errors.telefono = "Teléfono inválido.";
    if (!formData.mensaje.trim() || formData.mensaje.trim().length < 10)
      errors.mensaje = "El mensaje debe tener al menos 10 caracteres.";
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setLoading(true);
    try {
      // Enviar a la función HTTP de Firebase Functions
      const response = await fetch(
        "https://us-central1-" +
          import.meta.env.VITE_FIREBASE_PROJECT_ID +
          ".cloudfunctions.net/contactFormHandler",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            userAgent: navigator.userAgent,
          }),
        }
      );
      const data = await response.json();
      if (response.status === 429) {
        toast.error("Demasiados envíos", {
          description:
            data.error ||
            "Has superado el límite de envíos. Espera unos minutos e inténtalo de nuevo.",
        });
      } else if (response.ok) {
        toast.success("Mensaje enviado correctamente", {
          description:
            "Nos pondremos en contacto contigo en las próximas 24 horas.",
        });
        setFormData({
          nombre: "",
          email: "",
          telefono: "",
          tipoReforma: "",
          presupuesto: "",
          mensaje: "",
          website: "",
        });
      } else {
        toast.error("Error al enviar el mensaje", {
          description:
            data.error ||
            "Inténtalo de nuevo más tarde o contacta por otro medio.",
        });
      }
    } catch (error) {
      toast.error("Error al enviar el mensaje", {
        description: "Inténtalo de nuevo más tarde o contacta por otro medio.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCallbackFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCallbackForm({ ...callbackForm, [e.target.name]: e.target.value });
  };

  const handleCallbackFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!callbackPrivacyAccepted) {
      setError("Debes aceptar la política de privacidad.");
      return;
    }
    setLoading(true);
    setError("");
    setSuccess(false);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: callbackForm.name,
          phone: callbackForm.phone,
          message: callbackForm.message,
        },
        USER_ID
      );
      setSuccess(true);
      setCallbackForm({ name: "", phone: "", message: "" });
      setCallbackPrivacyAccepted(false);
    } catch (err) {
      setError(
        "Hubo un error al enviar el mensaje. Inténtalo de nuevo más tarde."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Contacto | Reformas integrales en Madrid | LLEMY Reformas</title>
        <meta
          name="description"
          content="Contacta con LLEMY Reformas para tu reforma integral en Madrid. Solicita presupuesto gratuito y asesoría personalizada."
        />
        <meta
          name="keywords"
          content="contacto, reformas integrales, Madrid, presupuesto, asesoría, empresa de reformas"
        />
        <meta
          property="og:title"
          content="Contacto | Reformas integrales en Madrid | LLEMY Reformas"
        />
        <meta
          property="og:description"
          content="Solicita información o presupuesto para tu reforma en Madrid. Atención rápida y profesional."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://llemy.com/contacto" />
        <meta
          property="og:image"
          content="https://llemy.com/images/logo/logo-negro.png"
        />
        <link rel="canonical" href="https://llemy.com/contacto" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "LLEMY Reformas & Construcciones",
            "description": "Empresa de reformas integrales en Madrid. Contacta para presupuesto gratuito.",
            "url": "https://llemy.com/contacto",
            "logo": "https://llemy.com/images/logo/logo-negro.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Calle Marqués de Zafra 25",
              "addressLocality": "Madrid",
              "addressCountry": "ES"
            },
            "telephone": "+34 919 930 664",
            "email": "info@llemy.com"
          }
        `}</script>
      </Helmet>
      <div className="min-h-screen">
        <Navigation />
        <main id="main-content" className="pt-24 pb-20">
          <div className="container mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Contacta con Nosotros
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                ¿Tienes un proyecto en mente? Cuéntanos tus ideas y te
                ayudaremos a hacerlas realidad. Solicita tu presupuesto gratuito
                y sin compromiso.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="animate-slide-up">
                <h2 className="text-2xl font-semibold text-primary mb-6">
                  Solicita tu presupuesto
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot anti-spam */}
                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    style={{ display: "none" }}
                    tabIndex={-1}
                    autoComplete="off"
                    title="No rellenar" // Añadido para accesibilidad
                  />
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="nombre"
                        className="block text-sm font-medium text-muted-foreground mb-2"
                      >
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                        aria-invalid={!!formErrors.nombre}
                        aria-describedby="error-nombre"
                        placeholder="Introduce tu nombre completo"
                        autoComplete="name"
                      />
                      {formErrors.nombre && (
                        <p
                          id="error-nombre"
                          className="text-red-500 text-xs mt-1"
                        >
                          {formErrors.nombre}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="telefono"
                        className="block text-sm font-medium text-muted-foreground mb-2"
                      >
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                        aria-invalid={!!formErrors.telefono}
                        aria-describedby="error-telefono"
                        placeholder="Ej: 600 123 456"
                        autoComplete="tel"
                      />
                      {formErrors.telefono && (
                        <p
                          id="error-telefono"
                          className="text-red-500 text-xs mt-1"
                        >
                          {formErrors.telefono}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-muted-foreground mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      aria-invalid={!!formErrors.email}
                      aria-describedby="error-email"
                      placeholder="tu@email.com"
                      autoComplete="email"
                    />
                    {formErrors.email && (
                      <p id="error-email" className="text-red-500 text-xs mt-1">
                        {formErrors.email}
                      </p>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="tipoReforma"
                        className="block text-sm font-medium text-muted-foreground mb-2"
                      >
                        Tipo de reforma
                      </label>
                      <select
                        id="tipoReforma"
                        name="tipoReforma"
                        value={formData.tipoReforma}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                        title="Selecciona el tipo de reforma" // Añadido
                      >
                        <option value="">Selecciona una opción</option>
                        <option value="integral">Reforma integral</option>
                        <option value="cocina">Cocina</option>
                        <option value="bano">Baño</option>
                        <option value="salon">Salón</option>
                        <option value="dormitorio">Dormitorio</option>
                        <option value="oficina">Oficina</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="presupuesto"
                        className="block text-sm font-medium text-muted-foreground mb-2"
                      >
                        Presupuesto aproximado
                      </label>
                      <select
                        id="presupuesto"
                        name="presupuesto"
                        value={formData.presupuesto}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                        title="Selecciona el rango de presupuesto" // Añadido
                      >
                        <option value="">Selecciona un rango</option>
                        <option value="menos-10k">Menos de 10.000€</option>
                        <option value="10k-25k">10.000€ - 25.000€</option>
                        <option value="25k-50k">25.000€ - 50.000€</option>
                        <option value="50k-100k">50.000€ - 100.000€</option>
                        <option value="mas-100k">Más de 100.000€</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="mensaje"
                      className="block text-sm font-medium text-muted-foreground mb-2"
                    >
                      Cuéntanos tu proyecto *
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Describe tu proyecto, espacios a reformar, ideas, etc."
                      aria-invalid={!!formErrors.mensaje}
                      aria-describedby="error-mensaje"
                    />
                    {formErrors.mensaje && (
                      <p
                        id="error-mensaje"
                        className="text-red-500 text-xs mt-1"
                      >
                        {formErrors.mensaje}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="privacidad"
                      name="privacidad"
                      checked={privacyAccepted}
                      onChange={(e) => setPrivacyAccepted(e.target.checked)}
                      required
                      className="mr-2"
                    />
                    <label
                      htmlFor="privacidad"
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
                  {formErrors.privacidad && (
                    <p className="text-xs text-red-600">
                      {formErrors.privacidad}
                    </p>
                  )}

                  {/* Botones alternativos */}
                  <div className="flex flex-col gap-3 md:flex-row md:gap-4 mt-2">
                    <Button
                      type="submit"
                      className="w-full bg-black text-white hover:bg-gray-800 text-lg font-semibold rounded-md shadow-md transition-colors duration-200"
                      disabled={!privacyAccepted || loading}
                    >
                      {loading ? "Enviando..." : "Enviar"}
                    </Button>
                  </div>
                </form>
              </div>

              {/* Contact Info */}
              <div className="animate-slide-up">
                <h2 className="text-2xl font-semibold text-primary mb-6">
                  Información de contacto
                </h2>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-primary mb-1">
                        Teléfono
                      </h3>
                      <a
                        href="tel:+34919930664"
                        className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        91 993 06 64
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Email</h3>
                      <a
                        href="mailto:info@llemy.com"
                        className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        info@llemy.com
                      </a>
                    </div>
                  </div>

                  {/* Eliminada la sección de dirección y mapa */}

                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-primary mb-1">
                        Horario
                      </h3>
                      <p className="text-muted-foreground">
                        L-V: 10:00 - 20:00
                      </p>
                      <p className="text-muted-foreground">S: 10:00 - 14:00</p>
                    </div>
                  </div>
                </div>

                {/* Eliminado el iframe del mapa */}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Contact;
