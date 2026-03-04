import {
  BriefcaseBusiness,
  Feather,
  MailOpen,
  Newspaper,
  Save,
} from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const BottomNav = () => {
  const { t } = useTranslation("common");
  const [activeSection, setActiveSection] = useState("#inicio");

  const navItems = [
    { path: "#inicio", label: t("nav.home"), icon: Newspaper },
    { path: "#portafolio", label: t("nav.portfolio"), icon: BriefcaseBusiness },
    { path: "#skills", label: t("nav.skills"), icon: Save },
    { path: "#about", label: t("nav.about"), icon: Feather },
    { path: "#contacto", label: t("nav.contact"), icon: MailOpen },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-background border-2 border-black dark:border-accent px-4 pb-safe lg:hidden transition-colors duration-200">
      <div className="max-w-lg mx-auto flex justify-around items-center h-16">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.path}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(item.path);
              setActiveSection(item.path);
            }}
            className={`flex flex-col items-center justify-center gap-1 min-w-15 
             transition-colors
            ${activeSection === item.path ? "text-primary" : "text-muted-foreground"}`}
          >
            <item.icon className="w-6 h-6" />
            <span className="text-xs font-medium text-center">
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
