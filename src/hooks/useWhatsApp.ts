import { useCallback } from "react";

export const useWhatsApp = () => {
  const handleWhatsAppClick = useCallback(() => {
    const phoneNumber = "919930664";
    const message = encodeURIComponent(
      "Hola! Me gustaría solicitar un presupuesto para suelos de madera en mi hogar."
    );
    const whatsappUrl = `https://wa.me/34${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  }, []);

  return { handleWhatsAppClick };
};
