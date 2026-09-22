export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  heroDescription: string;
  overview: string;
  benefits: string[];
  included: string[];
  icon: "leak" | "bathroom" | "heating" | "drain" | "pipe" | "general";
};

export const services: Service[] = [
  {
    slug: "deteccion-reparacion-fugas",
    title: "Detección y reparación de fugas",
    shortDescription: "Búsqueda precisa de fugas y reparación rápida para evitar cualquier daño.",
    heroDescription: "Localizamos el origen de la fuga y la solucionamos con una intervención precisa y duradera.",
    overview: "Una fuga no siempre se ve, pero puede aumentar el consumo de agua y causar daños importantes. Nuestro equipo identifica el problema, explica la mejor solución y realiza la reparación con el mínimo impacto posible.",
    benefits: ["Diagnóstico preciso", "Intervención rápida", "Soluciones duraderas"],
    included: ["Revisión de tuberías y puntos de agua", "Localización del origen de la fuga", "Reparación o sustitución de la pieza afectada", "Comprobación final de la instalación"],
    icon: "leak",
  },
  {
    slug: "instalacion-banos",
    title: "Instalación de baños",
    shortDescription: "Diseño e instalación completa de baños modernos y funcionales.",
    heroDescription: "Renovamos su baño con instalaciones prácticas, cuidadas y adaptadas a su espacio.",
    overview: "Le acompañamos en cada fase de su proyecto de baño: desde la preparación de las tomas hasta la instalación de sanitarios, grifería y mobiliario. Coordinamos una ejecución limpia para que disfrute de un resultado funcional y duradero.",
    benefits: ["Acabados cuidados", "Soluciones a medida", "Un solo equipo de confianza"],
    included: ["Instalación de sanitarios y grifería", "Tomas de agua y desagües", "Montaje de duchas, bañeras y mamparas", "Revisión de estanqueidad y funcionamiento"],
    icon: "bathroom",
  },
  {
    slug: "calefaccion-calentadores-agua",
    title: "Calefacción y calentadores de agua",
    shortDescription: "Instalación, mantenimiento y reparación de calentadores de agua y sistemas de calefacción.",
    heroDescription: "Recupere el confort de su hogar con sistemas de agua caliente y calefacción eficientes.",
    overview: "Instalamos, revisamos y reparamos calentadores de agua y sistemas de calefacción para que funcionen con seguridad y rendimiento. Analizamos cada caso para recomendar una solución adecuada a sus necesidades.",
    benefits: ["Mayor confort diario", "Funcionamiento eficiente", "Revisión profesional"],
    included: ["Diagnóstico de averías", "Instalación y sustitución de equipos", "Mantenimiento preventivo", "Comprobación de seguridad y rendimiento"],
    icon: "heating",
  },
  {
    slug: "desatasco-tuberias",
    title: "Desatasco de tuberías",
    shortDescription: "Desatasco rápido y eficaz de fregaderos, inodoros, duchas y tuberías.",
    heroDescription: "Eliminamos atascos y devolvemos el flujo normal a sus desagües cuanto antes.",
    overview: "Un desagüe lento o bloqueado puede convertirse rápidamente en una urgencia. Actuamos sobre fregaderos, lavabos, duchas, inodoros y tuberías para despejar la obstrucción y prevenir que vuelva a ocurrir.",
    benefits: ["Atención ágil", "Trabajo limpio", "Resultado comprobado"],
    included: ["Diagnóstico del atasco", "Desatasco de desagües y tuberías", "Limpieza del área de trabajo", "Consejos para prevenir futuras obstrucciones"],
    icon: "drain",
  },
  {
    slug: "reparacion-tuberias",
    title: "Reparación de tuberías",
    shortDescription: "Reparación y sustitución de tuberías dañadas o desgastadas.",
    heroDescription: "Reparamos y renovamos tuberías para proteger su instalación a largo plazo.",
    overview: "El desgaste, la corrosión y los golpes pueden comprometer una instalación. Revisamos el estado de las tuberías y realizamos la reparación o sustitución necesaria, priorizando un resultado seguro y resistente.",
    benefits: ["Materiales fiables", "Diagnóstico claro", "Intervención precisa"],
    included: ["Inspección de tuberías dañadas", "Reparación de uniones y tramos", "Sustitución de piezas deterioradas", "Prueba de presión y funcionamiento"],
    icon: "pipe",
  },
  {
    slug: "fontaneria-general",
    title: "Fontanería general",
    shortDescription: "Todos sus trabajos de fontanería para el hogar y locales profesionales.",
    heroDescription: "Una respuesta profesional para las pequeñas y grandes necesidades de fontanería.",
    overview: "Desde una grifería que gotea hasta una instalación completa, Luxen le ayuda a mantener su hogar o negocio en perfecto estado. Escuchamos su necesidad y proponemos una solución transparente antes de empezar.",
    benefits: ["Servicio completo", "Presupuesto sin compromiso", "Atención para hogares y negocios"],
    included: ["Reparaciones de grifería y sanitarios", "Instalación de puntos de agua", "Mantenimiento de instalaciones", "Asesoramiento personalizado"],
    icon: "general",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
