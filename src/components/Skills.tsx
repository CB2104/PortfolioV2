import { motion } from "framer-motion";
import { CloudCog, Code, Layers, Lightbulb } from "lucide-react";

const skills = [
  {
    id: 1,
    icon: Code,
    title: "Frontend Development",
    institution: "Aprendizaje Autodidacta & Formación en Línea",
    period: "2020 - Presente",
    description:
      "Mastered modern frontend frameworks including React, Next.js, and Vue. Specialized in building responsive, accessible, and performant user interfaces.",
    highlights: [
      "React & Next.js",
      "TypeScript",
      "Responsive Design",
      "Web Accessibility",
    ],
  },
  {
    id: 2,
    icon: Layers,
    title: "Backend Development",
    institution: "Formación Universitaria Incompleta",
    period: "2020 - 2022",
    description:
      "Desarrollé experiencia en tecnologías del lado del servidor, APIs RESTful, diseño de bases de datos y estrategias de despliegue en la nube.",
    highlights: [
      "Node.js & Express",
      "Database Design",
      "Strapi",
      "API Development",
      "Cloud Services",
    ],
  },
  {
    id: 3,
    icon: CloudCog,
    title: "DevOps & Cloud Engineering",
    institution: "En línea — Argentina",
    period: "2024 - Actualidad",
    description:
      "Aprendizaje enfocado en integración continua, despliegue automatizado y arquitectura en la nube para aplicaciones modernas. Experiencia práctica con contenedores, servicios cloud y optimización de entornos de producción.",
    highlights: [
      "CI/CD pipelines",
      "Docker & contenedores",
      "Deploy en la nube",
      "Monitoreo & Rendimiento",
    ],
  },
  {
    id: 4,
    icon: Lightbulb,
    title: "UI/UX Design",
    institution: "En línea — Argentina",
    period: "2021 - 2022",
    description:
      "Estudié principios de diseño centrado en el usuario, prototipado y sistemas de diseño. Competente en Figma, Photoshop y herramientas modernas de diseño.",
    highlights: [
      "User Research",
      "Prototipado",
      "Design Systems",
      "Figma, Photoshop & IA generativa",
    ],
  },
];

function Skills() {
  return (
    <div className="pt-20 border-t-4 border-double border-border" id="skills">
      <motion.section
        
        className="min-h-screen px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className=" p-6 mb-8" >
            <h2 className="font-display text-4xl text-center md:text-5xl font-bold uppercase tracking-wide mb-4">
              Formación & Experiencia
            </h2>
            <p className="font-serif italic text-center">
              Una crónica del crecimiento en conocimientos y competencias.
            </p>
          </div>

          {/* Skills Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <article
                  key={skill.id}
                  className="border-4 border-black bg-white dark:border-accent dark:bg-navbar-sepia-fg hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(63,47,35,1)] transition-all"
                >
                  {/* Header */}
                  <div className="border-b-2 border-black p-4 bg-black text-white dark:bg-background dark:text-foreground">
                    <div className="flex items-start gap-3">
                      <div className="p-2 border-2 border-black dark:border-accent">
                        <Icon size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-serif uppercase tracking-wide mb-1 ">
                          {skill.title}
                        </h3>
                        <p className="text-sm font-serif italic">
                          {skill.institution}
                        </p>
                        <p className="text-xs font-mono mt-1">{skill.period}</p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="p-4 border-b-2 border-black">
                    <p className="text-sm leading-relaxed font-serif dark:text-accent">
                      {skill.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="p-4">
                    <h4 className="font-serif uppercase text-xs tracking-widest mb-3 dark:text-accent">
                      Competencias Claves
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {skill.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="text-xs font-mono border-l-2 border-black pl-2 dark:text-accent"
                        >
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

export default Skills;
