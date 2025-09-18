import React from "react";
import BeforeAfterSlider from "./BeforeAfterSlider";

interface BeforeAfterSectionProps {
  beforeImages: string[];
  afterImages: string[];
  title?: string;
  description?: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

const BeforeAfterSection: React.FC<BeforeAfterSectionProps> = ({
  beforeImages,
  afterImages,
  title = "Transformación Antes/Después",
  description = "Descubre la increíble transformación de este espacio. Arrastra el control para ver la diferencia.",
  beforeLabel = "Antes",
  afterLabel = "Después",
  className = "",
}) => {
  // Usar la primera imagen de cada array
  const beforeImage = beforeImages[0];
  const afterImage = afterImages[0];

  if (!beforeImage || !afterImage) {
    return null;
  }

  return (
    <div className={`bg-muted/30 py-16 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <BeforeAfterSlider
            beforeImage={beforeImage}
            afterImage={afterImage}
            beforeLabel={beforeLabel}
            afterLabel={afterLabel}
          />
        </div>

        {/* Galería de imágenes antes/después si hay más de una imagen */}
        {(beforeImages.length > 1 || afterImages.length > 1) && (
          <div className="mt-12">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Galería de imágenes "Antes" */}
              {beforeImages.length > 1 && (
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4 text-center">
                    Estado Inicial
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {beforeImages.slice(1).map((image, index) => (
                      <div
                        key={`before-${index}`}
                        className="aspect-video overflow-hidden rounded-lg"
                      >
                        <img
                          src={image}
                          alt={`Estado inicial ${index + 2}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Galería de imágenes "Después" */}
              {afterImages.length > 1 && (
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4 text-center">
                    Resultado Final
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {afterImages.slice(1).map((image, index) => (
                      <div
                        key={`after-${index}`}
                        className="aspect-video overflow-hidden rounded-lg"
                      >
                        <img
                          src={image}
                          alt={`Resultado final ${index + 2}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BeforeAfterSection;
