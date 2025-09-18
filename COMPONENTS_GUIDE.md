# Guía de Componentes de Imágenes y Transformaciones

## 📸 Componentes Disponibles

### 1. ImageGallery

Componente para mostrar galerías de imágenes con modal de visualización.

#### Uso Básico:

```tsx
import ImageGallery from "@/components/ImageGallery";

<ImageGallery images={project.images} title={project.title} />;
```

#### Props:

- `images: string[]` - Array de URLs de imágenes
- `title: string` - Título para el modal
- `className?: string` - Clases CSS adicionales

### 2. BeforeAfterSection

Componente independiente para mostrar transformaciones antes/después.

#### Uso Básico:

```tsx
import BeforeAfterSection from "@/components/BeforeAfterSection";

<BeforeAfterSection
  beforeImages={["imagen1.jpg", "imagen2.jpg"]}
  afterImages={["imagen3.jpg", "imagen4.jpg"]}
  title="Transformación del Salón"
  description="Descripción personalizada del proyecto"
  beforeLabel="Estado Inicial"
  afterLabel="Resultado Final"
/>;
```

#### Props:

- `beforeImages: string[]` - Array de imágenes del estado "antes"
- `afterImages: string[]` - Array de imágenes del estado "después"
- `title?: string` - Título de la sección (opcional)
- `description?: string` - Descripción personalizada (opcional)
- `beforeLabel?: string` - Etiqueta para "antes" (opcional)
- `afterLabel?: string` - Etiqueta para "después" (opcional)
- `className?: string` - Clases CSS adicionales (opcional)

## 🏗️ Estructura de Datos del Proyecto

### Interfaz Project Actualizada:

```typescript
interface Project {
  id: number;
  slug: string;
  image: string; // Imagen principal
  images?: string[]; // Galería completa
  title: string;
  type: string;
  category: string;
  location: string;
  area: string;
  year: string;
  description?: string; // Descripción corta
  detailedDescription?: string; // Descripción detallada
  beforeImages?: string[]; // Imágenes "antes"
  afterImages?: string[]; // Imágenes "después"
  services?: string[];
  duration?: string;
  budget?: string;
}
```

## 📝 Ejemplos de Implementación

### 1. Proyecto con Galería Completa

```typescript
{
  id: 1,
  slug: "mi-proyecto",
  image: "/images/proyecto/principal.jpg",
  images: [
    "/images/proyecto/imagen1.jpg",
    "/images/proyecto/imagen2.jpg",
    "/images/proyecto/imagen3.jpg",
  ],
  title: "Mi Proyecto",
  description: "Descripción corta del proyecto",
  detailedDescription: `
    Esta es una descripción detallada del proyecto que puede incluir
    múltiples párrafos y explicar todos los detalles de la transformación.

    Puedes incluir información sobre:
    - Los materiales utilizados
    - El proceso de trabajo
    - Los desafíos superados
    - Los resultados obtenidos
  `,
  // ... otros campos
}
```

### 2. Proyecto con Transformación Antes/Después

```typescript
{
  id: 2,
  slug: "transformacion-completa",
  image: "/images/proyecto/principal.jpg",
  beforeImages: [
    "/images/proyecto/antes1.jpg",
    "/images/proyecto/antes2.jpg",
  ],
  afterImages: [
    "/images/proyecto/despues1.jpg",
    "/images/proyecto/despues2.jpg",
  ],
  // ... otros campos
}
```

### 3. Uso Independiente de BeforeAfterSection

```tsx
// En cualquier página o componente
import BeforeAfterSection from "@/components/BeforeAfterSection";

const MiPagina = () => {
  return (
    <div>
      <h1>Mi Página</h1>

      {/* Sección de transformación personalizada */}
      <BeforeAfterSection
        beforeImages={["/images/antes1.jpg", "/images/antes2.jpg"]}
        afterImages={["/images/despues1.jpg", "/images/despues2.jpg"]}
        title="Transformación Personalizada"
        description="Descripción específica para este proyecto"
        beforeLabel="Estado Original"
        afterLabel="Nuevo Estado"
      />
    </div>
  );
};
```

## 🎨 Características de los Componentes

### ImageGallery

- ✅ Modal de visualización en pantalla completa
- ✅ Navegación con flechas entre imágenes
- ✅ Grid responsive (3 columnas en desktop)
- ✅ Efectos hover y animaciones
- ✅ Indicador de zoom al hacer hover

### BeforeAfterSection

- ✅ Slider interactivo antes/después
- ✅ Galería adicional de imágenes si hay más de una
- ✅ Títulos y descripciones personalizables
- ✅ Etiquetas personalizables para antes/después
- ✅ Diseño responsive
- ✅ Fondo con estilo diferenciado

## 📱 Responsive Design

Todos los componentes están optimizados para:

- **Desktop**: Grid de 3 columnas para galerías
- **Tablet**: Grid de 2 columnas
- **Mobile**: Grid de 1 columna
- **Touch**: Gestos táctiles para navegación

## 🔧 Personalización

### Estilos CSS

Puedes personalizar los estilos usando las clases CSS disponibles:

- `bg-muted/30` - Fondo con transparencia
- `text-primary` - Color primario
- `rounded-lg` - Bordes redondeados
- `shadow-lg` - Sombras

### Temas

Los componentes usan las variables CSS de tu tema:

- `--primary` - Color primario
- `--muted-foreground` - Color de texto secundario
- `--background` - Color de fondo

## 🚀 Mejores Prácticas

1. **Optimización de imágenes**: Usa formatos WebP o JPG optimizados
2. **Tamaños consistentes**: Mantén proporciones similares para mejor presentación
3. **Alt text descriptivo**: Incluye descripciones útiles para accesibilidad
4. **Lazy loading**: Las imágenes se cargan bajo demanda
5. **Fallbacks**: Siempre incluye una imagen principal como respaldo
