import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const currentDate = new Date().toLocaleDateString("es-EU", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

const Hero = () => {
  return (
    <>
      <section
        id="inicio"
        className="min-h-screen flex flex-col justify-center pt-20 pb-12"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px flex-1 max-w-24 bg-border" />
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-display">
                Bienvenido a mi Portafolio
              </span>
              <div className="h-px flex-1 max-w-24 bg-border" />
            </div>
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance">
                Developer Chronicle
              </h1>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-muted-foreground border-y-2 border-double border-border py-3">
              <span className="font-body">{currentDate}</span>
              <span className="hidden md:inline">•</span>
              <span className="font-body italic">
                "Cada dia es una nueva oportunidad de aprender"
              </span>
              <span className="hidden md:inline">•</span>
              <span className="font-body">Vol. II, No. 1</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid md:grid-cols-3 gap-8 items-center"
          >
            <div className="md:col-span-1 text-center md:text-left">
              <p className="font-display text-lg uppercase tracking-widest text-muted-foreground mb-2">
                últimas noticias
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-bold leading-tight mb-4">
                En Búsqueda De Una Nueva Oportunidad Laboral
              </h3>
              <p className="font-body text-m leading-relaxed text-muted-foreground">
                Full-stack developer enfocado en diseño, velocidad y
                escalabilidad. Disponible para proyectos innovadores.
              </p>
            </div>

            <div className="md:col-span-1 flex justify-center">
              <div className="vintage-frame overflow-hidden">
                <div className="w-48 h-60 md:w-56 md:h-72 bg-muted flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="aspect-3/4 relative">
                      <ImageWithFallback
                        src="/Me.jpg"
                        alt="me"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-1 text-center md:text-right">
              <div className="newspaper-border p-6 inline-block">
                <p className="font-display text-sm uppercase tracking-widest mb-3">
                  Reportaje destacado
                </p>
                <h3 className="font-display text-2xl font-bold mb-4">
                  Ver el Portafolio Completo
                </h3>
                <p className="font-body text-muted-foreground mb-6 text-sm">
                  Descubre una selección curada de proyectos web, donde el
                  diseño, la precisión y la creatividad se convierten en
                  soluciones reales.
                </p>
                <a href="#portafolio">
                  <Button className="w-full font-display uppercase tracking-widest border-2 border-double">
                    Ver Mi Trabajo
                    <ArrowDown className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
