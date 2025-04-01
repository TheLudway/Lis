import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import global_es from "./lang/es/global.json";
import global_en from "./lang/en/global.json";

const resources = {
  en: { translation: global_en },
  es: { translation: global_es },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // Idioma por defecto
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;