import { ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function AboutMe() {
  const { t } = useTranslation("common");

  const interests = t("about.more.interest", {
    returnObjects: true,
  }) as string[];
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
              {t("about.title")}
            </h2>
            <p className="font-serif italic text-center">
              {t("about.subtitle")}
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Profile Photo */}
            <div className="lg:col-span-1">
              <div className="border-4 border-black bg-white dark:border-accent dark:bg-background overflow-hidden sticky top-24">
                <div className="border-b-2 border-black bg-black text-white dark:border-accent dark:bg-accent dark:text-accent-foreground p-3">
                  <h3 className="font-serif uppercase text-sm tracking-wider text-center">
                    {t("about.profile.title")}
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
                    “{t("about.profile.descrip")}”
                  </p>
                </div>
                <div className="border-b-2 border-black bg-black text-white dark:border-accent dark:bg-accent dark:text-accent-foreground p-3">
                  <a
                    href={t("about.cv")}
                    target="_blank"
                    className="flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <h3 className="font-serif uppercase text-sm tracking-wider text-center">
                      {t("about.profile.cv")}
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
                    {t("about.intro.title")}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="font-serif text-lg leading-relaxed mb-4 first-letter:text-5xl first-letter:font-bold first-letter:mr-1 first-letter:float-left">
                    {t("about.intro.descrip1")}
                  </p>
                  <p className="font-serif leading-relaxed mb-4">
                    {t("about.intro.descrip2")}
                  </p>
                  <p className="font-serif leading-relaxed">
                    {t("about.intro.descrip3")}
                  </p>
                </div>
              </article>

              {/* Quick Facts */}
              <article className="border-4 border-black bg-white dark:bg-accent-foreground dark:border-accent">
                <div className="border-b-2 border-black p-4 bg-black text-white dark:bg-background dark:text-accent-foreground">
                  <h3 className="font-serif uppercase tracking-wide">
                    {t("about.info.title")}
                  </h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border-l-4 border-black pl-3 dark:border-accent dark:text-accent">
                      <h4 className="font-serif uppercase text-xs tracking-widest mb-1">
                        {t("about.info.sub1")}
                      </h4>
                      <p className="font-mono text-sm">
                        {t("about.info.cont1")}
                      </p>
                    </div>
                    <div className="border-l-4 border-black pl-3 dark:text-accent">
                      <h4 className="font-serif uppercase text-xs tracking-widest mb-1">
                        {t("about.info.sub2")}
                      </h4>
                      <p className="font-mono text-sm">
                        {t("about.info.cont2")}
                      </p>
                    </div>
                    <div className="border-l-4 border-black pl-3 dark:text-accent">
                      <h4 className="font-serif uppercase text-xs tracking-widest mb-1">
                        {t("about.info.sub3")}
                      </h4>
                      <p className="font-mono text-sm">
                        {t("about.info.cont3")}
                      </p>
                    </div>
                    <div className="border-l-4 border-black pl-3 dark:text-accent">
                      <h4 className="font-serif uppercase text-xs tracking-widest mb-1">
                        {t("about.info.sub4")}
                      </h4>
                      <p className="font-mono text-sm">
                        {t("about.info.cont4")}
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              {/* Interests */}
              <article className="border-4 border-black bg-white dark:bg-accent-foreground dark:border-accent">
                <div className="border-b-2 border-black p-4 bg-black text-white dark:text-accent-foreground dark:bg-background">
                  <h3 className="font-serif uppercase tracking-wide">
                    {t("about.more.title")}
                  </h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {interests.map((interest) => (
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
