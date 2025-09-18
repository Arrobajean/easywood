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
    name: "Lucian",
    role: "Director de Obra",
    description:
      "Maestro de obras especializado en supervisión y ejecución de proyectos de reforma con más de 25 años de experiencia.",
    image: "/images/UI/Lucian2.jpg",
  },
  {
    name: "Emanuel",
    role: "Jefe de Proyecto",
    description:
      "Experto en gestión de proyectos y atención al cliente, asegurando la máxima calidad en cada reforma con más de 10 años de experiencia.",
    image: "/images/UI/Mihail2.jpg",
  },
];

export const processSteps: ProcessStep[] = [
  {
    icon: MessageSquare,
    title: "Consulta inicial",
    description:
      "Visitamos tu espacio y analizamos tus necesidades para crear un presupuesto personalizado.",
  },
  {
    icon: Wrench,
    title: "Diseño y planificación",
    description:
      "Desarrollamos el proyecto técnico completo con materiales y cronograma detallado.",
  },
  {
    icon: CheckCircle,
    title: "Ejecución",
    description:
      "Nuestro equipo ejecuta la reforma con supervisión constante y comunicación transparente.",
  },
  {
    icon: Heart,
    title: "Entrega",
    description:
      "Entregamos tu nuevo espacio con garantías incluidas y servicio postventa.",
  },
];
