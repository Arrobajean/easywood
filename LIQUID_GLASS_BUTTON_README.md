# Liquid Glass Components

Componentes con efectos de cristal líquido inspirados en el diseño de Apple, creados con React, TypeScript y Tailwind CSS. Incluye botones y cards con glassmorphism.

## 🌟 Características

### 🔘 Botones Liquid Glass

- ✨ Efectos de glassmorphism y cristal líquido
- 🎨 Múltiples variantes de estilo (default, primary, dark, gradient)
- 📏 Diferentes tamaños (sm, md, lg, icon)
- 💫 Animaciones suaves y efectos de hover
- 🌊 Efecto ripple al hacer clic
- 🎯 Totalmente accesible y personalizable

### 🖼️ Cards Liquid Glass

- 🎴 Cards con imágenes y efectos de cristal
- 🎨 4 variantes: default, glass, frosted, gradient
- 📐 Tamaños flexibles (sm, md, lg, xl, full)
- 🏷️ Badges y overlays personalizables
- 🎭 Contenido dinámico y eventos onClick
- 📱 Responsive y optimizado para móviles

## 🚀 Uso Rápido

### Importar los componentes

```tsx
// Botones
import { LiquidGlassButton } from "@/components/ui/liquid-glass-button";
import LiquidGlassButtonSimple from "@/components/ui/liquid-glass-button-simple";

// Cards
import { LiquidGlassCard } from "@/components/ui/liquid-glass-card";
import LiquidGlassCardSimple from "@/components/ui/liquid-glass-card-simple";
```

### Ejemplos básicos

#### Botones

```tsx
import { Play, Download, Heart } from 'lucide-react';

// Botón básico
<LiquidGlassButton>
  Haz clic aquí
</LiquidGlassButton>

// Con icono
<LiquidGlassButton variant="primary">
  <Play className="w-4 h-4" />
  Reproducir
</LiquidGlassButton>

// Botón grande con gradiente
<LiquidGlassButton variant="gradient" size="lg">
  <Download className="w-5 h-5" />
  Descargar Ahora
</LiquidGlassButton>
```

#### Cards

```tsx
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
/>

// Card solo con contenido
<LiquidGlassCard variant="frosted" showOverlay={false}>
  <h3>Contenido personalizado</h3>
  <p>Cualquier contenido JSX</p>
</LiquidGlassCard>
```

## 🎨 Variantes Disponibles

### 🔘 Botones - Estilos (`variant`)

- `default` - Cristal transparente con bordes blancos
- `primary` - Tonos azules con efecto cristal
- `dark` - Estilo oscuro elegante
- `gradient` - Gradiente multicolor (púrpura, rosa, azul)

### 🔘 Botones - Tamaños (`size`)

- `sm` - Pequeño (h-10, px-4)
- `default` - Normal (h-12, px-6)
- `lg` - Grande (h-14, px-8)
- `icon` - Solo icono (h-12, w-12)

### 🖼️ Cards - Estilos (`variant`)

- `default` - Cristal básico con hover suave
- `glass` - Mayor transparencia y blur sutil
- `frosted` - Efecto esmerilado con bordes definidos
- `gradient` - Gradiente dinámico con efectos de color

### 🖼️ Cards - Tamaños (`size`)

- `sm` - Pequeña (max-w-sm)
- `md` - Mediana (max-w-md)
- `lg` - Grande (max-w-lg)
- `xl` - Extra grande (max-w-xl)
- `full` - Ancho completo (w-full)

## 🛠️ Props de los Componentes

### LiquidGlassButton

```tsx
interface LiquidGlassButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "dark" | "gradient";
  size?: "sm" | "default" | "lg" | "icon";
  asChild?: boolean; // Usar como Slot de Radix UI
  showRipple?: boolean; // Mostrar efecto ripple (default: true)
  className?: string; // Clases CSS adicionales
  children: React.ReactNode; // Contenido del botón
}
```

### LiquidGlassCard

```tsx
interface LiquidGlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "frosted" | "gradient";
  size?: "sm" | "md" | "lg" | "xl" | "full";
  imageSrc: string; // URL de la imagen
  imageAlt: string; // Texto alternativo
  title?: string; // Título de la card
  description?: string; // Descripción
  badge?: string; // Badge/etiqueta
  showOverlay?: boolean; // Mostrar overlay (default: true)
  overlayContent?: React.ReactNode; // Contenido del overlay
  onCardClick?: () => void; // Evento click
  children?: React.ReactNode; // Contenido adicional
}
```

### Versiones Simplificadas

```tsx
// LiquidGlassButtonSimple
interface LiquidGlassButtonSimpleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "gradient";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

// LiquidGlassCardSimple
interface LiquidGlassCardSimpleProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "frosted";
  imageSrc?: string;
  imageAlt?: string;
  title?: string;
  description?: string;
  children?: React.ReactNode;
}
```

## 🎭 Demo en Vivo

Para ver todos los efectos y variantes en acción, visita:

```
http://localhost:5173/liquid-glass-demo
```

## 🎨 Personalización

### Usando clases de Tailwind

```tsx
<LiquidGlassButton variant="primary" className="w-full text-lg font-bold">
  Botón Personalizado
</LiquidGlassButton>
```

### Fondo personalizado para mejor efecto

Para obtener el mejor efecto visual, usa el botón sobre fondos con gradientes o imágenes:

```tsx
<div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-8">
  <LiquidGlassButton variant="default">Mejor efecto visual</LiquidGlassButton>
</div>
```

## ⚡ Rendimiento

- Componentes memoizados para evitar re-renders innecesarios
- Animaciones CSS optimizadas con `will-change`
- Efectos ripple con cleanup automático
- Lazy loading de efectos complejos

## 🎯 Casos de Uso Recomendados

- **Call-to-Action principales** - Usa `variant="gradient"` con `size="lg"`
- **Botones secundarios** - Usa `variant="default"` con `size="default"`
- **Acciones de media** - Usa `variant="primary"` con iconos
- **Botones de navegación** - Usa `variant="dark"` con `showRipple={false}`

## 🔧 Instalación de Dependencias

El componente requiere:

- React 18+
- TypeScript
- Tailwind CSS
- Radix UI (Slot)
- class-variance-authority
- Lucide React (para iconos)

## 📝 Notas Técnicas

- Los efectos de glassmorphism funcionan mejor con `backdrop-blur`
- Las animaciones usan `transform` para mejor rendimiento
- El efecto ripple se basa en coordenadas del mouse
- Compatible con React Server Components

## 🎪 Ejemplos Avanzados

### Botón con estado de carga

```tsx
const [loading, setLoading] = useState(false);

<LiquidGlassButton
  variant="primary"
  disabled={loading}
  onClick={() => setLoading(true)}
>
  {loading ? "Cargando..." : "Enviar"}
</LiquidGlassButton>;
```

### Botón como enlace (usando asChild)

```tsx
<LiquidGlassButton asChild variant="gradient">
  <a href="/download">
    <Download className="w-4 h-4" />
    Descargar App
  </a>
</LiquidGlassButton>
```

---

¡Disfruta creando interfaces increíbles con efectos de cristal líquido! 🚀✨
