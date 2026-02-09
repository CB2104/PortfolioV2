import { ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "framer-motion";

function AboutMe() {
  return (
    <motion.div
      className="py-20 border-t-4 border-double border-border"
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <section className="min-h-screen  px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="p-6 mb-8">
            <h2 className="font-serif text-3xl md:text-5xl uppercase tracking-wider text-center border-b-2 border-black dark:border-accent pb-4 mb-4">
              Sobre El Dev
            </h2>
            <p className="font-serif italic text-center">
              Una entrevista exclusiva con la mente detrás del código, un
              desarrollador full-stack en constante evolución que transforma
              curiosidad en soluciones digitales reales
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Profile Photo */}
            <div className="lg:col-span-1">
              <div className="border-4 border-black bg-white dark:border-accent dark:bg-background overflow-hidden sticky top-24">
                <div className="border-b-2 border-black bg-black text-white dark:border-accent dark:bg-accent dark:text-accent-foreground p-3">
                  <h3 className="font-serif uppercase text-sm tracking-wider text-center">
                    Perfil
                  </h3>
                </div>
                <div className="aspect-3/4 relative">
                  <ImageWithFallback
                    src="/Me.jpg"
                    alt="me"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 border-t-2 border-black dark:bg-background">
                  <p className="font-serif text-center italic text-sm">
                    “El código es como el humor. Cuando tienes que explicarlo,
                    no es tan bueno.”
                  </p>
                </div>
                <div className="border-b-2 border-black bg-black text-white dark:border-accent dark:bg-accent dark:text-accent-foreground p-3">
                  <a
                    href="CESAR BASTIDAS - CV.pdf"
                    target="_blank"
                    className="flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <h3 className="font-serif uppercase text-sm tracking-wider text-center">
                      Ver mi CV
                    </h3>
                  </a>
                </div>
              </div>
            </div>

            {/* Bio Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Introduction */}
              <article className="border-4 border-black dark:border-accent">
                <div className="border-b-2 border-black p-4 bg-black text-white dark:border-accent dark:bg-accent dark:text-accent-foreground">
                  <h3 className="font-serif text-2xl uppercase tracking-wide">
                    Introducción
                  </h3>
                </div>
                <div className="p-6">
                  <p className="font-serif text-lg leading-relaxed mb-4 first-letter:text-5xl first-letter:font-bold first-letter:mr-1 first-letter:float-left">
                    Hola, soy un desarrollador full-stack apasionado por crear
                    soluciones elegantes a problemas complejos. Mi camino en el
                    desarrollo de software comenzó con la curiosidad por
                    entender cómo funcionan los sitios web, y ha evolucionado
                    hacia una dedicación constante por construir experiencias
                    digitales útiles, modernas y bien diseñadas.
                  </p>
                  <p className="font-serif leading-relaxed mb-4">
                    Cuento con experiencia principalmente en el ecosistema
                    frontend, trabajando con tecnologías como React, Next.js,
                    JavaScript moderno y herramientas de diseño de interfaces
                    responsivas, accesibles y de buen rendimiento. Además, estoy
                    ampliando mis conocimientos hacia el backend con Node.js,
                    APIs, bases de datos y despliegues en la nube, desarrollando
                    una visión integral del desarrollo web. Me enfoco en
                    escribir código limpio, mantenible y en crear interfaces que
                    combinen funcionalidad, estética y buena experiencia de
                    usuario.
                  </p>
                  <p className="font-serif leading-relaxed">
                    Fuera del código, continúo aprendiendo de forma autodidacta,
                    explorando nuevas tecnologías, integraciones con
                    inteligencia artificial y mejores prácticas de desarrollo.
                    Disfruto enfrentar nuevos desafíos, mejorar constantemente
                    mis habilidades y colaborar en proyectos que generen impacto
                    real.
                  </p>
                </div>
              </article>

              {/* Quick Facts */}
              <article className="border-4 border-black bg-white dark:bg-accent-foreground dark:border-accent">
                <div className="border-b-2 border-black p-4 bg-black text-white dark:bg-background dark:text-accent-foreground">
                  <h3 className="font-serif uppercase tracking-wide">
                    Información Destacada
                  </h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border-l-4 border-black pl-3 dark:border-accent dark:text-accent">
                      <h4 className="font-serif uppercase text-xs tracking-widest mb-1">
                        Ubicación
                      </h4>
                      <p className="font-mono text-sm">Buenos Aires, BA</p>
                    </div>
                    <div className="border-l-4 border-black pl-3 dark:text-accent">
                      <h4 className="font-serif uppercase text-xs tracking-widest mb-1">
                        Experiencia
                      </h4>
                      <p className="font-mono text-sm">2+ Años</p>
                    </div>
                    <div className="border-l-4 border-black pl-3 dark:text-accent">
                      <h4 className="font-serif uppercase text-xs tracking-widest mb-1">
                        Especialidad
                      </h4>
                      <p className="font-mono text-sm">
                        Full-Stack Development (Front-End Énfasis)
                      </p>
                    </div>
                    <div className="border-l-4 border-black pl-3 dark:text-accent">
                      <h4 className="font-serif uppercase text-xs tracking-widest mb-1">
                        Idiomas
                      </h4>
                      <p className="font-mono text-sm">Ingles, Español</p>
                    </div>
                  </div>
                </div>
              </article>

              {/* Interests */}
              <article className="border-4 border-black bg-white dark:bg-accent-foreground dark:border-accent">
                <div className="border-b-2 border-black p-4 bg-black text-white dark:text-accent-foreground dark:bg-background">
                  <h3 className="font-serif uppercase tracking-wide">
                    Más Allá del Código
                  </h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      "Podcasts de Tecnología",
                      "Lectura & Escritura Técnica",
                      "Diseño UI/UX",
                      "Open Source",
                      "Cine & Animación",
                      "Exploración",
                    ].map((interest) => (
                      <div
                        key={interest}
                        className="border-2 border-black p-3 text-center hover:bg-black hover:text-white transition-colors dark:text-background dark:hover:bg-accent dark:hover:text-accent-foreground"
                      >
                        <span className="font-serif text-sm">{interest}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default AboutMe;
