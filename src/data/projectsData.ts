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
}

export interface FilterOption {
  key: string;
  label: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "reforma-integral-pirineos",
    image: "/images/Fotos Obras LLemy/Pirineos/pirineos1.JPG",
    images: [
      "/images/Fotos Obras LLemy/Pirineos/pirineos1.JPG",
      "/images/Fotos Obras LLemy/Pirineos/pirineos2.JPG",
      "/images/Fotos Obras LLemy/Pirineos/pirineos3.JPG",
      "/images/Fotos Obras LLemy/Pirineos/pirineos4.JPG",
    ],
    title: "Reforma Integral en Pirineos",
    type: "Reforma integral",
    category: "salon",
    location: "Madrid",
    area: "85m²",
    year: "2024",
    description: "Reforma completa de salón con diseño moderno y funcional",
    detailedDescription: `
      Esta reforma integral transformó completamente un salón de 85m² en Madrid. 
      El proyecto incluyó la renovación completa del espacio, desde la instalación eléctrica hasta 
      los acabados finales. Se implementó un diseño moderno que maximiza la funcionalidad y la 
      estética del espacio, creando un ambiente acogedor y contemporáneo perfecto para el día a día 
      de la familia.
      
      Los trabajos realizados incluyeron la renovación de suelos, pintura de paredes y techos, 
      instalación de nueva iluminación LED, renovación de carpintería y la creación de espacios 
      de almacenamiento integrados. El resultado es un salón completamente renovado que combina 
      elegancia y funcionalidad.
    `,
    beforeImages: ["/images/Fotos Obras LLemy/Pirineos/pirineos1.JPG"],
    afterImages: [
      "/images/Fotos Obras LLemy/Pirineos/pirineos2.JPG",
      "/images/Fotos Obras LLemy/Pirineos/pirineos3.JPG",
    ],
    services: [
      "Diseño de interiores",
      "Reforma integral",
      "Instalación eléctrica",
    ],
    duration: "3 semanas",
    budget: "25.000€ - 35.000€",
  },
  {
    id: 2,
    slug: "cocina-contemporanea-aquitania",
    image: "/images/Fotos Obras LLemy/Aquitania/IMG-20241220-WA0010.webp",
    images: [
      "/images/Fotos Obras LLemy/Aquitania/IMG-20241220-WA0010.webp",
      "/images/Fotos Obras LLemy/Aquitania/IMG-20241220-WA0011.webp",
      "/images/Fotos Obras LLemy/Aquitania/IMG-20241220-WA0013.webp",
    ],
    title: "Cocina Contemporánea Aquitania",
    type: "Diseño de interiores",
    category: "cocina",
    location: "Madrid Centro",
    area: "25m²",
    year: "2024",
    description:
      "Cocina moderna con isla central y electrodomésticos integrados",
    detailedDescription: `
      Esta cocina contemporánea de 25m² en el centro de Madrid representa la perfecta combinación 
      entre funcionalidad y diseño moderno. El proyecto incluyó la instalación de una isla central 
      que sirve tanto como zona de preparación como de comedor informal, creando un espacio 
      multifuncional ideal para la vida moderna.
      
      Se instalaron muebles de alta calidad con acabados lacados, electrodomésticos integrados 
      de última generación, y una iluminación LED que realza cada detalle del espacio. La 
      paleta de colores neutros y los materiales seleccionados crean un ambiente elegante y 
      atemporal que se adapta perfectamente al estilo de vida de los propietarios.
    `,
    beforeImages: [
      "/images/Fotos Obras LLemy/Aquitania/IMG-20241220-WA0010.webp",
    ],
    afterImages: [
      "/images/Fotos Obras LLemy/Aquitania/IMG-20241220-WA0011.webp",
      "/images/Fotos Obras LLemy/Aquitania/IMG-20241220-WA0013.webp",
    ],
    services: [
      "Diseño de cocina",
      "Instalación de muebles",
      "Electrodomésticos",
    ],
    duration: "2 semanas",
    budget: "15.000€ - 25.000€",
  },
  {
    id: 3,
    slug: "bano-minimalista-pardinas",
    image: "/images/Fotos Obras LLemy/Pardiñas/IMG-20250208-WA0001.jpg",
    images: [
      "/images/Fotos Obras LLemy/Pardiñas/IMG-20250208-WA0001.jpg",
      "/images/Fotos Obras LLemy/Pardiñas/IMG-20250208-WA0002.jpg",
      "/images/Fotos Obras LLemy/Pardiñas/IMG-20250208-WA0003.jpg",
      "/images/Fotos Obras LLemy/Pardiñas/IMG-20250208-WA0004.jpg",
    ],
    title: "Baño Minimalista Pardiñas",
    type: "Reforma completa",
    category: "bano",
    location: "Getafe",
    area: "12m²",
    year: "2023",
    description: "Baño con diseño minimalista y acabados de lujo",
    beforeImages: [
      "/images/Fotos Obras LLemy/Pardiñas/IMG-20250208-WA0001.jpg",
    ],
    afterImages: [
      "/images/Fotos Obras LLemy/Pardiñas/IMG-20250208-WA0002.jpg",
      "/images/Fotos Obras LLemy/Pardiñas/IMG-20250208-WA0003.jpg",
    ],
    services: ["Reforma de baño", "Instalación sanitaria", "Acabados"],
    duration: "1 semana",
    budget: "8.000€ - 12.000€",
  },
  {
    id: 4,
    slug: "oficina-moderna-villalba",
    image: "/images/Fotos Obras LLemy/Villalba/14-_DSC5537.JPG",
    images: [
      "/images/Fotos Obras LLemy/Villalba/14-_DSC5537.JPG",
      "/images/Fotos Obras LLemy/Villalba/15-_DSC5538.JPG",
      "/images/Fotos Obras LLemy/Villalba/19-_DSC5546.JPG",
    ],
    title: "Oficina Moderna Villalba",
    type: "Proyecto personalizado",
    category: "oficina",
    location: "Móstoles",
    area: "150m²",
    year: "2023",
    description: "Oficina corporativa con espacios colaborativos y privados",
    beforeImages: ["/images/Fotos Obras LLemy/Villalba/14-_DSC5537.JPG"],
    afterImages: [
      "/images/Fotos Obras LLemy/Villalba/15-_DSC5538.JPG",
      "/images/Fotos Obras LLemy/Villalba/19-_DSC5546.JPG",
    ],
    services: ["Diseño de oficina", "Instalaciones técnicas", "Mobiliario"],
    duration: "6 semanas",
    budget: "50.000€ - 80.000€",
  },
  {
    id: 5,
    slug: "dormitorio-elegante-somontin",
    image: "/images/Fotos Obras LLemy/Somontin/1735301655406.webp",
    images: [
      "/images/Fotos Obras LLemy/Somontin/1735301655406.webp",
      "/images/Fotos Obras LLemy/Somontin/1735301655412.webp",
      "/images/Fotos Obras LLemy/Somontin/1735301655419.webp",
    ],
    title: "Dormitorio Elegante Somontín",
    type: "Diseño integral",
    category: "dormitorio",
    location: "Fuenlabrada",
    area: "20m²",
    year: "2024",
    description: "Dormitorio principal con vestidor integrado y baño en suite",
    beforeImages: ["/images/Fotos Obras LLemy/Somontin/1735301655406.webp"],
    afterImages: [
      "/images/Fotos Obras LLemy/Somontin/1735301655412.webp",
      "/images/Fotos Obras LLemy/Somontin/1735301655419.webp",
    ],
    services: ["Diseño de dormitorio", "Vestidor", "Baño en suite"],
    duration: "2 semanas",
    budget: "18.000€ - 28.000€",
  },
  {
    id: 6,
    slug: "espacio-abierto-varios",
    image:
      "/images/Fotos Obras LLemy/Varios/0e02120d-4304-4bba-86ea-98cffbafe10b.JPG",
    images: [
      "/images/Fotos Obras LLemy/Varios/0e02120d-4304-4bba-86ea-98cffbafe10b.JPG",
      "/images/Fotos Obras LLemy/Varios/14d4a894-fce0-4f7e-a39f-236e6981ebfa.JPG",
      "/images/Fotos Obras LLemy/Varios/285261037_2340310292815754_1971170006871206130_n.JPG",
    ],
    title: "Espacio Abierto Varios",
    type: "Reforma moderna",
    category: "salon",
    location: "Madrid",
    area: "120m²",
    year: "2023",
    description: "Reforma de espacio abierto integrando cocina y salón",
    beforeImages: [
      "/images/Fotos Obras LLemy/Varios/0e02120d-4304-4bba-86ea-98cffbafe10b.JPG",
    ],
    afterImages: [
      "/images/Fotos Obras LLemy/Varios/14d4a894-fce0-4f7e-a39f-236e6981ebfa.JPG",
      "/images/Fotos Obras LLemy/Varios/285261037_2340310292815754_1971170006871206130_n.JPG",
    ],
    services: ["Reforma integral", "Diseño de espacios", "Instalaciones"],
    duration: "4 semanas",
    budget: "35.000€ - 50.000€",
  },
];

export const filters: FilterOption[] = [
  { key: "todos", label: "Todos los proyectos" },
  { key: "salon", label: "Salones" },
  { key: "cocina", label: "Cocinas" },
  { key: "bano", label: "Baños" },
  { key: "dormitorio", label: "Dormitorios" },
  { key: "oficina", label: "Oficinas" },
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
