import React from "react";
import { LiquidGlassButton } from "@/components/ui/liquid-glass-button";
import { LiquidGlassCard } from "@/components/ui/liquid-glass-card";
import {
  Play,
  Download,
  Heart,
  Star,
  Zap,
  Sparkles,
  Eye,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

const LiquidGlassDemo: React.FC = () => {
  return (
    <>
      <div className="min-h-dvh bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-8">
        {/* Background decorative elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Liquid Glass Buttons
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Botones inspirados en el diseño de Apple con efectos de cristal
              líquido, glassmorphism y animaciones suaves.
            </p>
          </div>

          {/* Default Variants */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-white mb-8 text-center">
              Variantes Principales
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center space-y-4">
                <h3 className="text-lg font-medium text-white/90">Default</h3>
                <LiquidGlassButton variant="default">
                  <Play className="w-4 h-4" />
                  Reproducir
                </LiquidGlassButton>
              </div>

              <div className="text-center space-y-4">
                <h3 className="text-lg font-medium text-white/90">Primary</h3>
                <LiquidGlassButton variant="primary">
                  <Download className="w-4 h-4" />
                  Descargar
                </LiquidGlassButton>
              </div>

              <div className="text-center space-y-4">
                <h3 className="text-lg font-medium text-white/90">Dark</h3>
                <LiquidGlassButton variant="dark">
                  <Heart className="w-4 h-4" />
                  Me gusta
                </LiquidGlassButton>
              </div>

              <div className="text-center space-y-4">
                <h3 className="text-lg font-medium text-white/90">Gradient</h3>
                <LiquidGlassButton variant="gradient">
                  <Sparkles className="w-4 h-4" />
                  Especial
                </LiquidGlassButton>
              </div>
            </div>
          </div>

          {/* Size Variants */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-white mb-8 text-center">
              Tamaños Disponibles
            </h2>
            <div className="flex flex-wrap justify-center items-end gap-8">
              <div className="text-center space-y-4">
                <h3 className="text-lg font-medium text-white/90">Small</h3>
                <LiquidGlassButton variant="primary" size="sm">
                  <Star className="w-3 h-3" />
                  Pequeño
                </LiquidGlassButton>
              </div>

              <div className="text-center space-y-4">
                <h3 className="text-lg font-medium text-white/90">Default</h3>
                <LiquidGlassButton variant="primary">
                  <Star className="w-4 h-4" />
                  Normal
                </LiquidGlassButton>
              </div>

              <div className="text-center space-y-4">
                <h3 className="text-lg font-medium text-white/90">Large</h3>
                <LiquidGlassButton variant="primary" size="lg">
                  <Star className="w-5 h-5" />
                  Grande
                </LiquidGlassButton>
              </div>

              <div className="text-center space-y-4">
                <h3 className="text-lg font-medium text-white/90">Icon</h3>
                <LiquidGlassButton variant="primary" size="icon">
                  <Zap className="w-5 h-5" />
                </LiquidGlassButton>
              </div>
            </div>
          </div>

          {/* Interactive Examples */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-white mb-8 text-center">
              Ejemplos Interactivos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-6">
                  Con Efectos de Ripple
                </h3>
                <div className="space-y-4">
                  <LiquidGlassButton
                    variant="gradient"
                    size="lg"
                    className="w-full"
                  >
                    <Play className="w-5 h-5" />
                    Haz clic para ver el efecto ripple
                  </LiquidGlassButton>
                  <p className="text-sm text-white/70">
                    Cada clic genera un efecto de ondas que se expande desde el
                    punto de contacto.
                  </p>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-6">
                  Sin Efectos de Ripple
                </h3>
                <div className="space-y-4">
                  <LiquidGlassButton
                    variant="primary"
                    size="lg"
                    showRipple={false}
                    className="w-full"
                  >
                    <Download className="w-5 h-5" />
                    Sin efectos de ripple
                  </LiquidGlassButton>
                  <p className="text-sm text-white/70">
                    Mantiene todas las animaciones excepto el efecto de ondas al
                    hacer clic.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Liquid Glass Cards */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-white mb-8 text-center">
              Liquid Glass Cards
            </h2>
            <p className="text-center text-white/80 mb-12 max-w-3xl mx-auto">
              Cards con efectos de cristal líquido para mostrar imágenes y
              contenido con un estilo moderno y elegante.
            </p>

            {/* Card Variants */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <LiquidGlassCard
                variant="default"
                size="sm"
                imageSrc="/images/trabajos/madrid/acuchillado-barnizado-restaurante-madrid.jpg"
                imageAlt="Trabajo en Madrid"
                title="Default Card"
                description="Efecto de cristal básico con hover suave"
                badge="Nuevo"
                overlayContent={
                  <div className="space-y-2">
                    <Eye className="w-8 h-8 mx-auto" />
                    <p className="text-sm">Ver más</p>
                  </div>
                }
              />

              <LiquidGlassCard
                variant="glass"
                size="sm"
                imageSrc="/images/trabajos/pozuelo/acuchillado-de-tarima-merbau-en-Pozuelo.jpg"
                imageAlt="Trabajo en Pozuelo"
                title="Glass Effect"
                description="Mayor transparencia y blur para un efecto más sutil"
                badge="Popular"
                overlayContent={
                  <div className="space-y-2">
                    <ArrowRight className="w-8 h-8 mx-auto" />
                    <p className="text-sm">Explorar</p>
                  </div>
                }
              />

              <LiquidGlassCard
                variant="frosted"
                size="sm"
                imageSrc="/images/trabajos/Villanueva/instalacion-tarima-composite-exterior-terraza.jpg"
                imageAlt="Trabajo en Villanueva"
                title="Frosted Glass"
                description="Efecto esmerilado con bordes más definidos"
                badge="Premium"
                overlayContent={
                  <div className="space-y-2">
                    <ExternalLink className="w-8 h-8 mx-auto" />
                    <p className="text-sm">Abrir</p>
                  </div>
                }
              />

              <LiquidGlassCard
                variant="gradient"
                size="sm"
                imageSrc="/images/UI/hero.jpg"
                imageAlt="Hero Image"
                title="Gradient Card"
                description="Gradiente dinámico con efectos de color"
                badge="Especial"
                overlayContent={
                  <div className="space-y-2">
                    <Sparkles className="w-8 h-8 mx-auto" />
                    <p className="text-sm">¡Increíble!</p>
                  </div>
                }
              />
            </div>

            {/* Featured Large Card */}
            <div className="max-w-4xl mx-auto mb-12">
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                Card Grande con Contenido Personalizado
              </h3>
              <LiquidGlassCard
                variant="gradient"
                size="full"
                imageSrc="/images/UI/landing1.jpeg"
                imageAlt="Imagen destacada"
                title="Proyecto Destacado"
                description="Esta es una card de tamaño completo que demuestra cómo se puede usar el componente para mostrar contenido más detallado con efectos de cristal líquido."
                badge="Destacado"
                className="h-96"
                showOverlay={false}
              >
                <div className="flex flex-wrap gap-3 mt-4">
                  <LiquidGlassButton variant="primary" size="sm">
                    <Play className="w-3 h-3" />
                    Ver Demo
                  </LiquidGlassButton>
                  <LiquidGlassButton variant="default" size="sm">
                    <Download className="w-3 h-3" />
                    Descargar
                  </LiquidGlassButton>
                  <LiquidGlassButton variant="gradient" size="sm">
                    <Heart className="w-3 h-3" />
                    Me gusta
                  </LiquidGlassButton>
                </div>
              </LiquidGlassCard>
            </div>

            {/* Cards Without Images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Solo Contenido
                </h4>
                <p className="text-white/80 text-sm mb-6">
                  Las cards también pueden usarse sin imágenes, solo con
                  contenido de texto y efectos de cristal.
                </p>
                <LiquidGlassButton
                  variant="primary"
                  size="sm"
                  className="w-full"
                >
                  Leer más
                </LiquidGlassButton>
              </div>

              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Interactivo
                </h4>
                <p className="text-white/80 text-sm mb-6">
                  Cada card puede tener eventos onClick personalizados y
                  contenido dinámico.
                </p>
                <LiquidGlassButton
                  variant="gradient"
                  size="sm"
                  className="w-full"
                >
                  Interactuar
                </LiquidGlassButton>
              </div>

              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Personalizable
                </h4>
                <p className="text-white/80 text-sm mb-6">
                  Completamente personalizable con Tailwind CSS y props
                  flexibles.
                </p>
                <LiquidGlassButton variant="dark" size="sm" className="w-full">
                  Personalizar
                </LiquidGlassButton>
              </div>
            </div>
          </div>

          {/* Code Example */}
          <div className="bg-black/20 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-6">
              Ejemplos de Código
            </h2>

            <div className="space-y-6">
              {/* Buttons Example */}
              <div>
                <h3 className="text-lg font-medium text-white mb-3">
                  Botones Liquid Glass
                </h3>
                <div className="bg-black/40 rounded-xl p-6 overflow-x-auto">
                  <pre className="text-green-400 text-sm">
                    {`import { LiquidGlassButton } from '@/components/ui/liquid-glass-button';
import { Play, Download } from 'lucide-react';

// Uso básico
<LiquidGlassButton variant="primary">
  <Play className="w-4 h-4" />
  Reproducir
</LiquidGlassButton>

// Con diferentes variantes y tamaños
<LiquidGlassButton variant="gradient" size="lg">
  <Download className="w-5 h-5" />
  Descargar Ahora
</LiquidGlassButton>

// Sin efectos de ripple
<LiquidGlassButton variant="dark" showRipple={false}>
  Botón sin ripple
</LiquidGlassButton>`}
                  </pre>
                </div>
              </div>

              {/* Cards Example */}
              <div>
                <h3 className="text-lg font-medium text-white mb-3">
                  Cards Liquid Glass
                </h3>
                <div className="bg-black/40 rounded-xl p-6 overflow-x-auto">
                  <pre className="text-green-400 text-sm">
                    {`import { LiquidGlassCard } from '@/components/ui/liquid-glass-card';
import { Eye } from 'lucide-react';

// Card básica con imagen
<LiquidGlassCard
  variant="default"
  imageSrc="/path/to/image.jpg"
  imageAlt="Descripción"
  title="Título de la Card"
  description="Descripción del contenido"
  badge="Nuevo"
/>

// Card con overlay personalizado
<LiquidGlassCard
  variant="gradient"
  imageSrc="/path/to/image.jpg"
  imageAlt="Descripción"
  overlayContent={
    <div className="space-y-2">
      <Eye className="w-8 h-8 mx-auto" />
      <p>Ver más</p>
    </div>
  }
  onCardClick={() => console.log('Card clicked!')}
/>

// Card solo con contenido
<LiquidGlassCard
  variant="frosted"
  showOverlay={false}
>
  <h3>Contenido personalizado</h3>
  <p>Cualquier contenido JSX</p>
</LiquidGlassCard>`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-white/60">
              Creado con React, TypeScript, Tailwind CSS y efectos de
              glassmorphism
            </p>
          </div>
        </div>
      </div>

      {/* Light Background Section */}
      <div className="min-h-dvh bg-gradient-to-br from-gray-50 via-white to-gray-100 p-8">
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-gray-600 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Versión para Fondos Claros
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Los mismos efectos liquid glass adaptados para fondos blancos y
              claros, perfectos para integrar en tu landing page.
            </p>
          </div>

          {/* Light Buttons */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Botones para Fondos Claros
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <h3 className="text-lg font-medium text-gray-700">Light</h3>
                <LiquidGlassButton variant="light">
                  <Play className="w-4 h-4" />
                  Reproducir
                </LiquidGlassButton>
              </div>

              <div className="text-center space-y-4">
                <h3 className="text-lg font-medium text-gray-700">
                  Light Primary
                </h3>
                <LiquidGlassButton variant="lightPrimary">
                  <Download className="w-4 h-4" />
                  Descargar
                </LiquidGlassButton>
              </div>

              <div className="text-center space-y-4">
                <h3 className="text-lg font-medium text-gray-700">
                  Light Gradient
                </h3>
                <LiquidGlassButton variant="lightGradient">
                  <Sparkles className="w-4 h-4" />
                  Especial
                </LiquidGlassButton>
              </div>
            </div>
          </div>

          {/* Light Cards */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Cards para Fondos Claros
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <LiquidGlassCard
                variant="light"
                size="sm"
                imageSrc="/images/trabajos/madrid/acuchillado-barnizado-restaurante-madrid.jpg"
                imageAlt="Trabajo en Madrid"
                title="Light Card"
                description="Perfecta para fondos claros con texto oscuro"
                badge="Nuevo"
                lightMode={true}
                overlayContent={
                  <div className="space-y-2">
                    <Eye className="w-8 h-8 mx-auto" />
                    <p className="text-sm">Ver más</p>
                  </div>
                }
              />

              <LiquidGlassCard
                variant="lightGlass"
                size="sm"
                imageSrc="/images/trabajos/pozuelo/acuchillado-de-tarima-merbau-en-Pozuelo.jpg"
                imageAlt="Trabajo en Pozuelo"
                title="Light Glass"
                description="Efecto cristal sutil para fondos blancos"
                badge="Popular"
                lightMode={true}
                overlayContent={
                  <div className="space-y-2">
                    <ArrowRight className="w-8 h-8 mx-auto" />
                    <p className="text-sm">Explorar</p>
                  </div>
                }
              />

              <LiquidGlassCard
                variant="lightFrosted"
                size="sm"
                imageSrc="/images/trabajos/Villanueva/instalacion-tarima-composite-exterior-terraza.jpg"
                imageAlt="Trabajo en Villanueva"
                title="Light Frosted"
                description="Efecto esmerilado para fondos claros"
                badge="Premium"
                lightMode={true}
                overlayContent={
                  <div className="space-y-2">
                    <ExternalLink className="w-8 h-8 mx-auto" />
                    <p className="text-sm">Abrir</p>
                  </div>
                }
              />

              <LiquidGlassCard
                variant="lightGradient"
                size="sm"
                imageSrc="/images/UI/hero.jpg"
                imageAlt="Hero Image"
                title="Light Gradient"
                description="Gradiente suave para integración perfecta"
                badge="Especial"
                lightMode={true}
                overlayContent={
                  <div className="space-y-2">
                    <Sparkles className="w-8 h-8 mx-auto" />
                    <p className="text-sm">¡Increíble!</p>
                  </div>
                }
              />
            </div>
          </div>

          {/* Integration Example */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Ejemplo de Integración en Landing Page
            </h2>

            {/* Simulating a landing page section */}
            <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-12 border border-gray-200/50 shadow-lg">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Nuestros Servicios Destacados
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Descubre cómo transformamos espacios con la belleza natural de
                  la madera
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <LiquidGlassCard
                  variant="lightGlass"
                  imageSrc="/images/trabajos/madrid/acuchillado-barnizado-restaurante-madrid.jpg"
                  imageAlt="Acuchillado y barnizado"
                  title="Acuchillado y Barnizado"
                  description="Renovamos tus suelos de madera con técnicas profesionales"
                  badge="Especialidad"
                  lightMode={true}
                  showOverlay={false}
                >
                  <div className="mt-4">
                    <LiquidGlassButton
                      variant="lightPrimary"
                      size="sm"
                      className="w-full"
                    >
                      Ver más detalles
                    </LiquidGlassButton>
                  </div>
                </LiquidGlassCard>

                <LiquidGlassCard
                  variant="lightGradient"
                  imageSrc="/images/trabajos/pozuelo/acuchillado-de-tarima-merbau-en-Pozuelo.jpg"
                  imageAlt="Instalación de tarima"
                  title="Instalación de Tarima"
                  description="Instalamos tarima de la más alta calidad"
                  badge="Garantía"
                  lightMode={true}
                  showOverlay={false}
                >
                  <div className="mt-4">
                    <LiquidGlassButton
                      variant="light"
                      size="sm"
                      className="w-full"
                    >
                      Solicitar presupuesto
                    </LiquidGlassButton>
                  </div>
                </LiquidGlassCard>

                <LiquidGlassCard
                  variant="lightFrosted"
                  imageSrc="/images/trabajos/Villanueva/instalacion-tarima-composite-exterior-terraza.jpg"
                  imageAlt="Tarima composite"
                  title="Tarima Composite"
                  description="Soluciones modernas para exteriores e interiores"
                  badge="Innovación"
                  lightMode={true}
                  showOverlay={false}
                >
                  <div className="mt-4">
                    <LiquidGlassButton
                      variant="lightGradient"
                      size="sm"
                      className="w-full"
                    >
                      Conocer más
                    </LiquidGlassButton>
                  </div>
                </LiquidGlassCard>
              </div>
            </div>
          </div>

          {/* Usage Example for Light Mode */}
          <div className="bg-gray-100/60 backdrop-blur-xl rounded-3xl p-8 border border-gray-200/50">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Código para Fondos Claros
            </h2>
            <div className="bg-white/80 rounded-xl p-6 overflow-x-auto">
              <pre className="text-gray-700 text-sm">
                {`// Botones para fondos claros
<LiquidGlassButton variant="light">
  <Play className="w-4 h-4" />
  Reproducir
</LiquidGlassButton>

<LiquidGlassButton variant="lightPrimary">
  <Download className="w-4 h-4" />
  Descargar
</LiquidGlassButton>

// Cards para fondos claros
<LiquidGlassCard
  variant="lightGlass"
  imageSrc="/path/to/image.jpg"
  title="Título"
  description="Descripción"
  lightMode={true}
>
  <LiquidGlassButton variant="lightPrimary" size="sm">
    Ver más
  </LiquidGlassButton>
</LiquidGlassCard>`}
              </pre>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-500">
              Perfectamente integrado con el estilo de tu landing page
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LiquidGlassDemo;
