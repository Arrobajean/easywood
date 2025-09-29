# Guía de Fuentes - Easywood

## Fuentes Configuradas

### 1. Space Grotesk - Títulos y Titulares

- **Uso**: Para todos los títulos (h1, h2, h3, h4, h5, h6)
- **Clase CSS**: `font-space-grotesk`
- **Aplicación automática**: Todos los elementos de título ya tienen esta fuente aplicada por defecto

### 2. Inter - Párrafos y Texto General

- **Uso**: Para párrafos, texto de contenido, listas y elementos de texto general
- **Clase CSS**: `font-inter`
- **Aplicación automática**: Elementos `p`, `span`, `div`, `li` ya tienen esta fuente aplicada por defecto

### 3. Manrope - Botones y Elementos de Interacción

- **Uso**: Para botones, enlaces de acción y elementos interactivos
- **Clase CSS**: `font-manrope`
- **Aplicación automática**: Elementos `button` y con clase `.btn` ya tienen esta fuente aplicada por defecto

## Uso Manual de Clases

Si necesitas aplicar manualmente las fuentes, puedes usar estas clases:

```html
<!-- Títulos -->
<h1 class="font-space-grotesk">Título Principal</h1>
<h2 class="font-space-grotesk">Subtítulo</h2>

<!-- Texto de contenido -->
<p class="font-inter">Este es un párrafo de texto.</p>
<div class="font-inter">Contenido general</div>

<!-- Botones -->
<button class="font-manrope">Botón de Acción</button>
<a href="#" class="font-manrope">Enlace</a>
```

## Pesos de Fuente Disponibles

Todas las fuentes incluyen los siguientes pesos:

- `font-light` (300)
- `font-normal` (400)
- `font-medium` (500)
- `font-semibold` (600)
- `font-bold` (700)

## Ejemplo de Combinación

```html
<h1 class="font-space-grotesk font-bold text-4xl">Título Principal</h1>
<p class="font-inter font-normal text-lg">Texto descriptivo del contenido.</p>
<button class="font-manrope font-semibold px-6 py-3">Acción Principal</button>
```

## Compatibilidad

- Se mantiene la fuente Poppins para compatibilidad con código existente
- Las nuevas fuentes se aplican automáticamente a los elementos correspondientes
- No es necesario modificar código existente a menos que se quiera cambiar manualmente
