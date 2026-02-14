import { motion } from "framer-motion";
import { CloudCog, Code, Layers, Lightbulb, type LucideIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

interface Skill {
  id: number;
  title: string;
  institution: string;
  period: string;
  description: string;
  highlights: string[];
}

const SKILL_ICONS: Record<number, LucideIcon> = {
  1: Code,
  2: Layers,
  3: CloudCog,
  4: Lightbulb,
};

function Skills() {
  const { t } = useTranslation("skills");

const skills = t('items', { returnObjects: true }) as Skill[];

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
          <div className=" p-6 mb-8">
            <h2 className="font-display text-4xl text-center md:text-5xl font-bold uppercase tracking-wide mb-4">
              {t("title")}
            </h2>
            <p className="font-serif italic text-center">
              {t("subtitle")}
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
              const Icon = SKILL_ICONS[skill.id];
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
                      {t("competencies")}
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
