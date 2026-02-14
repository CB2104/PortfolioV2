import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "./ui/badge";
import { useTranslation } from "react-i18next";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  demo: string;
  github: string;
}

const TECH_FILTERS = [
  "React",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "API Integration",
  "AI Integration",
  "FullStack",
  "Auth",
];

const MyPortfolio = () => {
  const { t } = useTranslation("portfolio");
  const [activeFilter, setActiveFilter] = useState<string>("ALL");

  const projects = t("projects", { returnObjects: true }) as Project[];

  const filters = ["ALL", ...TECH_FILTERS];

  const filteredProjects =
    activeFilter === "ALL"
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <section
      id="portafolio"
      className="py-20 border-t-4 border-double border-border"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="newspaper-divider mb-8" />
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-wide mb-4">
            {t("title")}
          </h2>
          <p className="font-body text-lg text-muted-foreground italic max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 font-display text-xs uppercase tracking-widest border-2 transition-all duration-200 ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent border-border hover:bg-accent"
              }`}
            >
              {filter === "ALL" ? t("filters.all") : filter}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-4 border-black bg-white dark:border-accent dark:bg-navbar-sepia-fg hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(63,47,35,1)] transition-all"
            >
              {/* Project Image */}
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale dark:sepia group-hover:scale-105 hover:grayscale-0 dark:hover:sepia-0 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <Badge
                    variant="secondary"
                    className="font-display text-xs uppercase tracking-wider"
                  >
                    {project.category}
                  </Badge>
                </div>
              </div>

              {/* Project Content */}
              <div className="border-b-2 border-black p-4 bg-black text-white dark:bg-background dark:text-foreground">
                <h3 className="font-serif uppercase tracking-wide">
                  {project.title}
                </h3>
              </div>
              <div className="p-5">
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-display uppercase tracking-wider px-2 py-1 border border-primary dark:border-primary-foreground dark:text-background"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-4 border-t border-dashed border-border">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 font-display uppercase text-xs tracking-wider"
                  >
                    <ExternalLink className="h-3 w-3 mr-2" />
                    <a href={project.demo} target="_blank">
                      {t("buttons.demo")}
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 font-display uppercase text-xs tracking-wider"
                  >
                    <Github className="h-3 w-3 mr-2" />
                    <a href={project.github} target="_blank">
                      {t("button.source")}
                    </a>
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyPortfolio;
