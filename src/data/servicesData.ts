import {
  Trees,
  Layers,
  Hammer,
  Wrench,
  Eraser,
  PaintBucket,
  SquareStack,
  LayoutGrid,
} from "lucide-react";

import type { ForwardRefExoticComponent, RefAttributes } from "react";
import type { LucideProps } from "lucide-react";

export type LucideIcon = ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
>;

export type ServiceItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
};

export const servicesData: ServiceItem[] = [
  {
    icon: SquareStack,
    title: "Tarima Exterior sintética",
    description:
      "Sistemas de tarima tecnológica para exterior, alta resistencia y mínimo mantenimiento.",
    features: [
      "Antideslizante y resistente al agua",
      "Resistente a rayos UV y manchas",
      "Colocación con grapa oculta",
    ],
  },
  {
    icon: Trees,
    title: "Tarimas de Exterior de Madera",
    description:
      "Tarimas de madera natural para exterior, tratadas para intemperie.",
    features: [
      "Maderas tropicales y pino tratado",
      "Tratamientos protectores y lasures",
      "Instalación sobre rastreles",
    ],
  },
  {
    icon: Layers,
    title: "Tarima Flotante",
    description:
      "Suelos flotantes con sistema click, instalación rápida y limpia.",
    features: [
      "Aislamiento acústico con base",
      "Amplia variedad de acabados",
      "Remates y rodapiés incluidos",
    ],
  },
  {
    icon: Hammer,
    title: "Tarima Maciza",
    description:
      "Tarima de madera maciza para un suelo noble, cálido y duradero.",
    features: [
      "Encolada o clavada sobre rastrel",
      "Lijado y barnizado profesional",
      "Reposición de lamas defectuosas",
    ],
  },
  {
    icon: SquareStack,
    title: "Suelos Vinílicos",
    description: "Suelos vinílicos SPC/LVT resistentes al agua y al desgaste.",
    features: [
      "Formato lamas o losetas",
      "Apto para cocinas y baños",
      "Fácil mantenimiento",
    ],
  },
  {
    icon: LayoutGrid,
    title: "Suelos Laminados",
    description: "Suelos laminados de alta resistencia y estética natural.",
    features: [
      "Clases AC4, AC5, AC6",
      "Instalación con junta de dilatación",
      "Transiciones y perfiles a juego",
    ],
  },
  {
    icon: Wrench,
    title: "Instalación de Parquet",
    description: "Colocación profesional de parquet encolado o flotante.",
    features: [
      "Preparación del soporte",
      "Encolado y cepillado de ajuste",
      "Barnizado o aceite de acabado",
    ],
  },
  {
    icon: Eraser,
    title: "Acuchillar Parquet",
    description: "Lijado y barnizado para devolver vida y brillo al parquet.",
    features: [
      "Lijado en varias pasadas",
      "Tapado de juntas y microfisuras",
      "Barnices al agua de alta resistencia",
    ],
  },
  {
    icon: Hammer,
    title: "Reparación de Parquet",
    description: "Sustitución de lamas, nivelación y corrección de daños.",
    features: [
      "Reposición puntual de lamas",
      "Nivelado y fijación de piezas sueltas",
      "Ajuste de rodapiés y remates",
    ],
  },
  {
    icon: PaintBucket,
    title: "Teñir Parquet y Suelos",
    description: "Cambio de tono mediante tintes y acabados profesionales.",
    features: [
      "Amplia carta de colores",
      "Acabado mate, satinado o brillo",
      "Sellado y protección duradera",
    ],
  },
];
