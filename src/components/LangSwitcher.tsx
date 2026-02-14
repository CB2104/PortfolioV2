import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";

const languages = [
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "pt", name: "Português", flag: "🇧🇷" },
];

export function LangSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  return (
    <>
      <div className="hidden md:flex">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center py-0.5 px-2 border-2 border-black dark:border-accent hover:bg-black hover:text-white dark:hover:bg-accent transition-colors">
            <Languages size={20} />
            <span className="text-lg">{currentLanguage.flag}</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="border-2 border-black dark:border-accent">
            {languages.map((lang) => (
              <DropdownMenuItem
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className="flex items-center gap-2 cursor-pointer font-serif hover:bg-black hover:text-white dark:hover:bg-accent"
              >
                <span className="text-lg">{lang.flag}</span>
                <span>{lang.name}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Versión responsive - igual que toggleDark */}
      <div className="flex md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="border border-border"
              aria-label="Toggle language"
            >
              <span className="text-sm">{currentLanguage.flag}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="border-2 border-black dark:border-accent">
            {languages.map((lang) => (
              <DropdownMenuItem
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className="flex items-center gap-2 cursor-pointer font-serif hover:bg-black hover:text-white dark:hover:bg-accent"
              >
                <span className="text-lg">{lang.flag}</span>
                <span>{lang.name}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}
