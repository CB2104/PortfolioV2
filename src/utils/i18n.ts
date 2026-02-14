import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import esCommon from '../locales/es/common.json'
import esPortfolio from '../locales/es/portfolio.json';
import esSkills from '../locales/es/skills.json';

import enCommon from '../locales/en/common.json'
import enPortfolio from '../locales/en/portfolio.json';
import enSkills from '../locales/en/skills.json';

import ptCommon from '../locales/pt/common.json'
import ptPortfolio from '../locales/pt/portfolio.json';
import ptSkills from '../locales/pt/skills.json';


i18n
  .use(LanguageDetector)
  .use(initReactI18next) 
  .init({
    resources: {
      es: {
        common: esCommon,
        portfolio: esPortfolio,
        skills: esSkills,
      },
      en: {
        common: enCommon,
        portfolio: enPortfolio,
        skills: enSkills,
      },
      pt: {
        common: ptCommon,
        portfolio: ptPortfolio,
        skills: ptSkills,
      },
    },
    fallbackLng: "es",
    lng: "es", 
    interpolation: {
      escapeValue: false, 
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
