export interface Project {
  id: number;
  slug: string;
  image: string;
  images?: string[]; // Galería de imágenes del proyecto
  title: string;
  type: string;
  category: string;
  location: string;
  area: string;
  year: string;
  description?: string;
  detailedDescription?: string; // Descripción detallada del proyecto
  beforeImages?: string[];
  afterImages?: string[];
  services?: string[];
  duration?: string;
  budget?: string;
  testimonial?: {
    text: string;
    author: string;
    rating?: number;
  };
}

export interface FilterOption {
  key: string;
  label: string;
}

export const projects: Project[] = [
  // Madrid – Lijado/barnizado al agua
  {
    id: 1,
    slug: "lijado-barnizado-al-agua-madrid",
    image:
      "/images/trabajos/madrid/Acuchillado-lijado-y-barnizado-con-barniz-al-agua-en-Madrid.jpg",
    images: [
      "/images/trabajos/madrid/Acuchillado-lijado-y-barnizado-con-barniz-al-agua-en-Madrid.jpg",
      "/images/trabajos/madrid/Lijado-y-barnizado-con-barniz-al-agua-en-Madrid-1.jpg",
    ],
    title: "Lijado y barnizado al agua",
    type: "Tratamiento de parquet",
    category: "lijado-barnizado",
    location: "Madrid",
    area: "95 m²",
    year: "2025",
    description:
      "Lijado y barnizado al agua de parquet: acabado no tóxico, sin olor y que respeta el color natural. Varias capas para alta resistencia y protección frente a rozaduras y manchas.",
    detailedDescription:
      "Tratamiento de restauración de parquet que incluye acuchillado y lijado integral con maquinaria profesional libre de polvo, sellado de juntas y aplicación de barniz al agua en 2–3 capas con tiempos de secado controlados. Recomendado como mantenimiento cada ~10 años según uso. Ideal para viviendas y oficinas por su baja emisión de olores, bajo COV y secado rápido. Incluye protección de zócalos y mobiliario, y limpieza final.",
    services: ["Acuchillado", "Lijado", "Barnizado al agua"],
    duration: "3 días",
    budget: "A medida según m² y estado inicial",
    testimonial: {
      text: "Excelente acabado al agua, sin olores y con un brillo natural. El suelo parece nuevo.",
      author: "Familia López (Madrid)",
      rating: 5,
    },
  },
  // Pozuelo – Acuchillado de tarima merbau
  {
    id: 2,
    slug: "acuchillado-tarima-merbau-pozuelo",
    image:
      "/images/trabajos/pozuelo/acuchillado-de-tarima-merbau-en-Pozuelo.jpg",
    images: [
      "/images/trabajos/pozuelo/acuchillado-de-tarima-merbau-en-Pozuelo.jpg",
      "/images/trabajos/pozuelo/Lijado-y-barnizado-de-tarima-en-Pozuelo-1.jpg",
    ],
    title: "Acuchillado de tarima Merbau",
    type: "Restauración de tarima",
    category: "acuchillado",
    location: "Pozuelo",
    area: "80 m²",
    year: "2025",
    description:
      "Acuchillado profesional de tarima Merbau: eliminamos golpes y arañazos, nivelamos y dejamos la superficie lista para el acabado deseado (agua, aceite o poliuretano).",
    detailedDescription:
      "Servicio completo de acuchillado y lijado de tarima tropical Merbau. Inspección inicial de juntas y tableros, fijación de piezas sueltas, masillado con polvo de lijado, nivelado progresivo (granulometría 36→60→100) y preparación para el sistema de acabado elegido (agua/aceite/poliuretano). Planificación por estancias para mantener la vivienda operativa. Limpieza técnica y recomendaciones de mantenimiento.",
    services: ["Acuchillado", "Lijado", "Barnizado"],
    duration: "4 días",
    budget: "A medida según m² y acabado elegido",
    testimonial: {
      text: "Recuperaron nuestra tarima Merbau y eliminaron todas las marcas. Trabajo muy fino y puntual.",
      author: "Carlos y Ana (Pozuelo)",
      rating: 5,
    },
  },
  // Villanueva – Instalación de tarima composite
  {
    id: 3,
    slug: "instalacion-tarima-composite-villanueva",
    image:
      "/images/trabajos/Villanueva/instalacion-tarima-composite-exterior-terraza.jpg",
    images: [
      "/images/trabajos/Villanueva/instalacion-tarima-composite-exterior-terraza.jpg",
      "/images/trabajos/Villanueva/instalacion-tarima-composite-vivienda-madrid.jpg",
      "/images/trabajos/Villanueva/instalacion-vivienda-tarima-composite.jpg",
    ],
    title: "Instalación de tarima composite",
    type: "Instalación de suelos",
    category: "instalacion",
    location: "Villanueva del Pardillo (Madrid)",
    area: "60 m² (terraza y perímetro)",
    year: "2025",
    description:
      "Sustitución de antigua tarima de Ipe por tarima composite tono Ipe. Estructura con rastreles de aluminio para máxima durabilidad y mínimo mantenimiento.",
    detailedDescription:
      "Proyecto de renovación en Villanueva del Pardillo. Retirada de tarima de Ipe deteriorada, regularización de soporte y colocación de tarima composite con acabado imitación Ipe. Subestructura sobre rastreles de aluminio con fijación oculta y separación reglada para drenaje. Ventajas: sin pudrición, sin holguras, evita malas hierbas y reduce el mantenimiento (no requiere aceitado periódico). Entrega con limpieza y guía de cuidados.",
    services: [
      "Instalación de tarima composite",
      "Estructura de rastreles de aluminio",
      "Sustitución de tarima de madera",
      "Acabado imitación madera Ipe",
      "Mantenimiento bajo",
    ],
    duration: "5 días",
    budget: "A medida según m² y sistema de fijación",
    testimonial: {
      text: "El composite quedó perfecto y ya no tenemos que preocuparnos por el mantenimiento. Gran recomendación.",
      author: "Beatriz (Villanueva del Pardillo)",
      rating: 5,
    },
  },
  // Madrid – Restaurante: Acuchillado y barnizado de suelo
  {
    id: 4,
    slug: "acuchillado-barnizado-restaurante-madrid",
    image:
      "/images/trabajos/madrid/acuchillado-barnizado-restaurante-madrid.jpg",
    images: [
      "/images/trabajos/madrid/acuchillado-barnizado-restaurante-madrid.jpg",
      "/images/trabajos/madrid/acuchillado-barnizado-restaurante-madrid2.jpg",
      "/images/trabajos/madrid/acuchillado-barnizado-restaurante-madrid3.jpg",
      "/images/trabajos/madrid/acuchillado-barnizado-restaurante-madrid4.jpg",
    ],
    title: "Acuchillado y barnizado en restaurante",
    type: "Restauración de parquet",
    category: "acuchillado",
    location: "Madrid (Centro)",
    area: "120 m² (salones y escaleras)",
    year: "2025",
    description:
      "Acuchillado y barnizado del suelo de madera maciza en restaurante de Madrid. Segunda vida al pavimento sin obra, con acabado al agua resistente y sin olores.",
    detailedDescription:
      "El restaurante renovó el interior manteniendo la tarima maciza original. Asesoramos alternativas y optamos por restaurar: acuchillado profesional libre de polvo, lijado progresivo, masillado con polvo de madera, sellado y barnizado al agua (3 capas). Intervención en salones y escaleras; planificación por zonas para no interrumpir la actividad. Resultado: suelo como nuevo, elegante, aislante y fácil de mantener.",
    services: [
      "Acuchillado profesional",
      "Lijado progresivo",
      "Masillado y sellado",
      "Barnizado al agua (3 capas)",
    ],
    duration: "4 días (planificación por zonas)",
    budget: "A medida según m², estado y horarios del local",
    testimonial: {
      text: "El suelo ha recuperado su brillo y aguanta el ritmo del restaurante. Cero olores y reapertura rápida.",
      author: "Gerente Restaurante La Esquina",
      rating: 5,
    },
  },
  // Dummy – Instalación parquet roble (con SVG)
  {
    id: 5,
    slug: "instalacion-parquet-roble-dummy",
    image: "/placeholder.svg",
    images: ["/placeholder.svg"],
    title: "Instalación de parquet roble europeo",
    type: "Instalación de suelos",
    category: "instalacion",
    location: "Las Rozas (Madrid)",
    area: "72 m²",
    year: "2025",
    description:
      "Colocación de parquet de roble en espiga con rodapié lacado y transición oculta.",
    detailedDescription:
      "Replanteo de ejes y colocación en patrón espiga, adhesivo bicomponente, cepillado suave de juntas y sellado de perímetros. Entrega con limpieza de obra ligera y recomendaciones de mantenimiento.",
    services: ["Instalación", "Parquet roble", "Rodapié lacado"],
    duration: "3 días",
    budget: "A medida según m² y formato de lama",
    testimonial: {
      text: "Trabajo limpio y rápido. Nos encanta el patrón en espiga.",
      author: "Laura P. (Las Rozas)",
      rating: 5,
    },
  },
  // Dummy – Aceitado y pulido (con SVG)
  {
    id: 6,
    slug: "aceitado-pulido-parquet-dummy",
    image: "/placeholder.svg",
    images: ["/placeholder.svg"],
    title: "Pulido y aceitado de parquet",
    type: "Mantenimiento de suelos",
    category: "lijado-barnizado",
    location: "Alcobendas (Madrid)",
    area: "58 m²",
    year: "2025",
    description:
      "Pulido fino y aceite natural de alto contenido en sólidos para realzar el veteado.",
    detailedDescription:
      "Pulido en dos pasadas, limpieza anti-polvo, aceite natural aplicado a rodillo con secado controlado y bruñido final. Mejora la resistencia y el tacto de la madera.",
    services: ["Pulido", "Aceitado", "Mantenimiento"],
    duration: "2 días",
    budget: "A medida según m² y tipo de aceite",
    testimonial: {
      text: "El veteado ganó profundidad y el tacto es espectacular.",
      author: "Miguel R. (Alcobendas)",
      rating: 5,
    },
  },
];

export const filters: FilterOption[] = [
  { key: "todos", label: "Todos" },
  { key: "instalacion", label: "Instalación" },
  { key: "acuchillado", label: "Acuchillado" },
  { key: "lijado-barnizado", label: "Lijado y barnizado" },
];

// Función para obtener un proyecto por slug
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};

// Función para obtener un proyecto por ID
export const getProjectById = (id: number): Project | undefined => {
  return projects.find((project) => project.id === id);
};

// Función para filtrar proyectos por categoría
export const getProjectsByCategory = (category: string): Project[] => {
  if (category === "todos") return projects;
  return projects.filter((project) => project.category === category);
};
