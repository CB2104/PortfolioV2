import { useTheme } from "@/hooks/useTheme";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { LangSwitcher } from "../LangSwitcher";
import { useTranslation } from "react-i18next";


const NavBar = () => {
  const { t } = useTranslation("common");
  
  const navItems = [
    { label: t('nav.home'), href: "#inicio" },
    { label: t("nav.portfolio"), href: "#portafolio" },
    { label: t("nav.skills"), href: "#skills" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.contact"), href: "#contacto" },
  ];
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-md border-b-2 border-double border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo / Masthead */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#inicio");
            }}
            className="font-mono font-bold text-xl sm:text-2xl md:text-lg lg:text-3xl tracking-wide"
          >
            THE CESAR TIMES
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="font-display text-sm uppercase tracking-widest px-3 py-2 hover:bg-black hover:text-white dark:hover:bg-navbar-sepia dark:hover:text-navbar-sepia-fg transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}

            <LangSwitcher />

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              //   className="ml-2 border border-border hover:bg-accent"
              className="p-2 border-2 border-black hover:bg-black dark:border-navbar-sepia dark:hover:bg-navbar-sepia-fg  hover:text-white transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center gap-3">
            <LangSwitcher/>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="border border-border"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default NavBar;
