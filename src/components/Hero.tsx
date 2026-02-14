import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation("common");

  const currentDate = new Date().toLocaleDateString(t("hero.date"), {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

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
                {t("hero.welcome")}
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
              <span className="font-body italic">"{t("hero.intro")}"</span>
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
                {t("hero.sec1.title")}
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-bold leading-tight mb-4">
                {t("hero.sec1.subtitle")}
              </h3>
              <p className="font-body text-m leading-relaxed text-muted-foreground">
                {t("hero.sec1.content")}
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
                  {t("hero.sec2.title")}
                </p>
                <h3 className="font-display text-2xl font-bold mb-4">
                  {t("hero.sec2.subtitle")}
                </h3>
                <p className="font-body text-muted-foreground mb-6 text-sm">
                  {t("hero.sec2.content")}
                </p>
                <a href="#portafolio">
                  <Button className="w-full font-display uppercase tracking-widest border-2 border-double">
                    {t("hero.sec2.link")}
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
