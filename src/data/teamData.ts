import { MessageSquare, Wrench, CheckCircle, Heart } from "lucide-react";

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string | null;
}

export interface ProcessStep {
  icon: any;
  title: string;
  description: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Carlos Rodríguez",
    role: "Especialista en Suelos de Madera",
    description:
      "Maestro especializado en instalación y restauración de suelos de madera con más de 15 años de experiencia en parquet, tarimas y laminados.",
    image: null,
  },
  {
    name: "Ana Martínez",
    role: "Jefa de Proyecto",
    description:
      "Experta en gestión de proyectos de suelos de madera y atención al cliente, asegurando la máxima calidad en cada instalación con más de 8 años de experiencia.",
    image: null,
  },
];

export const processSteps: ProcessStep[] = [
  {
    icon: MessageSquare,
    title: "Consulta inicial",
    description:
      "Visitamos tu espacio y analizamos el estado de tus suelos para crear un presupuesto personalizado de instalación o restauración.",
  },
  {
    icon: Wrench,
    title: "Diseño y planificación",
    description:
      "Desarrollamos el proyecto técnico completo con selección de materiales de madera y cronograma detallado de instalación.",
  },
  {
    icon: CheckCircle,
    title: "Instalación",
    description:
      "Nuestro equipo especializado instala o restaura tu suelo de madera con supervisión constante y comunicación transparente.",
  },
  {
    icon: Heart,
    title: "Entrega",
    description:
      "Entregamos tu nuevo suelo de madera con garantías incluidas y servicio postventa especializado.",
  },
];
