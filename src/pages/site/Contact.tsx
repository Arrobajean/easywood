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
    const emailProvided = !!formData.email.trim();
    const phoneProvided = !!formData.telefono.trim();
    if (!emailProvided && !phoneProvided) {
      errors.email = "Proporciona email o teléfono";
      errors.telefono = "Proporciona email o teléfono";
    } else {
      if (emailProvided && !validateEmail(formData.email.trim())) {
        errors.email = "Email inválido.";
      }
      if (phoneProvided && !validatePhone(formData.telefono.trim())) {
        errors.telefono = "Teléfono inválido.";
      }
    }
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
        <title>Contacto | EasyWood | Suelos, Tarimas y Parquet en Madrid</title>
        <meta
          name="description"
          content="Contacta con EasyWood: especialistas en suelos de madera, tarimas y parquet en Madrid. Presupuesto gratuito y asesoría profesional."
        />
        <meta
          name="keywords"
          content="contacto suelos madera, tarima, parquet, Madrid, presupuesto, EasyWood"
        />
        <meta
          property="og:title"
          content="Contacto | EasyWood | Suelos, Tarimas y Parquet en Madrid"
        />
        <meta
          property="og:description"
          content="Solicita información o presupuesto de suelos de madera, tarimas y parquet. Atención rápida y profesional."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://easywood.es/contacto" />
        <meta
          property="og:image"
          content="https://easywood.es/favicon/android-chrome-192x192.png"
        />
        <link rel="canonical" href="https://easywood.es/contacto" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Easywood",
            "description": "Empresa de reformas integrales y suelos de madera en Madrid. Contacta para presupuesto gratuito.",
            "url": "https://easywood.es/contacto",
            "logo": "https://easywood.es/favicon/android-chrome-192x192.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Calle de San Gumersindo 7",
              "addressLocality": "Madrid",
              "addressCountry": "ES"
            },
            "telephone": "+34 622 00 30 62",
            "email": "info@easywood.es"
          }
        `}</script>
      </Helmet>
      <div className="min-h-dvh" style={{ paddingTop: "var(--header-height)" }}>
        <div className="container mx-auto px-6 max-w-5xl py-16 md:py-24">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Contacto
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cuéntanos qué necesitas para tus suelos de madera. Instalación,
              restauración o mantenimiento: te asesoramos sin compromiso y
              preparamos un presupuesto a medida en menos de 24&nbsp;h.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-y-12 gap-x-8 md:gap-x-12 lg:gap-x-20 xl:gap-x-24 items-start">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <h2 className="text-2xl font-semibold text-black mb-6">
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
                      placeholder="Tu nombre completo"
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
                      placeholder="Tu teléfono (ej. 600 123 456)"
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
                    placeholder="Tu email (ej. nombre@empresa.com)"
                    autoComplete="email"
                  />
                  {formErrors.email && (
                    <p id="error-email" className="text-red-500 text-xs mt-1">
                      {formErrors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="mensaje"
                    className="block text-sm font-medium text-muted-foreground mb-2"
                  >
                    Cuéntanos tu proyecto o idea *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent resize-none min-h-[160px]"
                    placeholder="Cuéntanos el estado de tus suelos, m² aproximados, tipo de madera/tarima y plazos"
                    aria-invalid={!!formErrors.mensaje}
                    aria-describedby="error-mensaje"
                  />
                  {formErrors.mensaje && (
                    <p id="error-mensaje" className="text-red-500 text-xs mt-1">
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
                    className="mr-2 accent-black"
                  />
                  <label htmlFor="privacidad" className="text-sm text-gray-700">
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
              <h2 className="text-2xl font-semibold text-black mb-6">
                Información de contacto
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-black mt-1" />
                  <div>
                    <h3 className="font-semibold text-black mb-1">Teléfono</h3>
                    <a
                      href="tel:+34622003062"
                      className="block text-gray-600 hover:text-black transition-colors duration-300"
                    >
                      +34 622 00 30 62
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-black mt-1" />
                  <div>
                    <h3 className="font-semibold text-black mb-1">Email</h3>
                    <a
                      href="mailto:info@easywood.es"
                      className="block text-gray-600 hover:text-black transition-colors duration-300"
                    >
                      info@easywood.es
                    </a>
                  </div>
                </div>

                {/* Dirección */}
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-black mt-1" />
                  <div>
                    <h3 className="font-semibold text-black mb-1">Dirección</h3>
                    <a
                      href="https://www.google.com/maps?q=Calle+de+San+Gumersindo,+7,+28017+Madrid"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-gray-600 hover:text-black transition-colors duration-300"
                    >
                      Calle de San Gumersindo, 7, Cdad. Lineal, Madrid
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-black mt-1" />
                  <div>
                    <h3 className="font-semibold text-black mb-1">Horario</h3>
                    <p className="text-gray-600">
                      Lunes a viernes: 08:00 - 19:00
                    </p>
                    <p className="text-gray-600">Sábado: 08:00 - 14:00</p>
                    <p className="text-gray-600">Domingo: cerrado</p>
                  </div>
                </div>
              </div>

              {/* CTA: Callback modal debajo de la información de contacto */}
              <div className="mt-8 flex justify-center">
                <Dialog open={openCallback} onOpenChange={setOpenCallback}>
                  <DialogTrigger asChild>
                    <Button
                      size="lg"
                      className="group flex items-center bg-black text-white hover:bg-gray-800 font-medium px-8 transition-colors duration-200"
                      aria-label="Solicitar que te llamemos"
                    >
                      <span>¿Te llamamos?</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>¿Quieres que te llamemos?</DialogTitle>
                      <DialogDescription>
                        Déjanos tus datos y te contactaremos lo antes posible.
                      </DialogDescription>
                    </DialogHeader>
                    <form
                      onSubmit={handleCallbackFormSubmit}
                      className="space-y-4 mt-2"
                    >
                      {/* Honeypot anti-spam */}
                      <input
                        type="text"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        style={{ display: "none" }}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                      <div>
                        <label
                          htmlFor="callback-name"
                          className="block text-sm font-medium mb-1"
                        >
                          Nombre completo
                        </label>
                        <input
                          type="text"
                          id="callback-name"
                          name="name"
                          required
                          value={callbackForm.name}
                          onChange={handleCallbackFormChange}
                          className="w-full px-3 py-2 rounded border border-gray-300 text-black"
                          placeholder="Tu nombre"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="callback-phone"
                          className="block text-sm font-medium mb-1"
                        >
                          Teléfono
                        </label>
                        <input
                          type="tel"
                          id="callback-phone"
                          name="phone"
                          required
                          value={callbackForm.phone}
                          onChange={handleCallbackFormChange}
                          className="w-full px-3 py-2 rounded border border-gray-300 text-black"
                          placeholder="Tu teléfono (ej. 600 123 456)"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="callback-message"
                          className="block text-sm font-medium mb-1"
                        >
                          Comentario (opcional)
                        </label>
                        <textarea
                          id="callback-message"
                          name="message"
                          value={callbackForm.message}
                          onChange={handleCallbackFormChange}
                          className="w-full px-3 py-2 rounded border border-gray-300 text-black resize-none"
                          placeholder="¿En qué podemos ayudarte?"
                          rows={3}
                          maxLength={140}
                        />
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="callback-privacidad"
                          name="callback-privacidad"
                          checked={callbackPrivacyAccepted}
                          onChange={(e) =>
                            setCallbackPrivacyAccepted(e.target.checked)
                          }
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
                          disabled={loading || !callbackPrivacyAccepted}
                          className="group flex items-center justify-center"
                        >
                          <span>
                            {loading ? "Enviando..." : "Solicitar llamada"}
                          </span>
                        </Button>
                        <DialogClose asChild>
                          <Button
                            type="button"
                            variant="ghost"
                            className="group flex items-center justify-center"
                          >
                            <span>Cancelar</span>
                          </Button>
                        </DialogClose>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>

              {/* Eliminado el iframe del mapa */}
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Contact;
