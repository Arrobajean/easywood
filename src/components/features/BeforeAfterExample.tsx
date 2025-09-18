import React from "react";
import BeforeAfterSection from "./BeforeAfterSection";

const BeforeAfterExample = () => {
  // Ejemplo de uso del componente BeforeAfterSection
  const beforeImages = [
    "/images/Fotos Obras LLemy/Pirineos/pirineos1.JPG",
    "/images/Fotos Obras LLemy/Pirineos/pirineos2.JPG",
  ];

  const afterImages = [
    "/images/Fotos Obras LLemy/Pirineos/pirineos3.JPG",
    "/images/Fotos Obras LLemy/Pirineos/pirineos4.JPG",
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">
          Ejemplo de Transformación Antes/Después
        </h1>

        <BeforeAfterSection
          beforeImages={beforeImages}
          afterImages={afterImages}
          title="Transformación Completa del Salón"
          description="Descubre cómo transformamos este espacio en algo completamente nuevo y funcional."
          beforeLabel="Estado Inicial"
          afterLabel="Resultado Final"
        />
      </div>
    </div>
  );
};

export default BeforeAfterExample;
