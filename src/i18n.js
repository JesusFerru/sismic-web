import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      slogan: "Analyzing the past to predict the future",
      mars: "Mars",
      moon: "Moon",
      exploration: "Exploration",
      back: "Back",
      analysis: "Analysis",
      start: "Start",
      algorithms: "Algorithms",
      "algorithm-title": "Comparison of lunar algorithms",
      "algorithm-title-mars": "Comparison of martian algorithms",
      "algorithm-velocity": "Velocity signal as a function of absolute time",
      "algorithm-prediction": "Predictions in 30 years",
    },
  },
  es: {
    translation: {
      slogan: "Analizando el pasado para visualizar del futuro.",
      mars: "Marte",
      moon: "Luna",
      exploration: "Exploración",
      back: "Volver",
      analysis: "Análisis",
      start: "Inicio",
      algorithms: "Algoritmos",
      "algorithm-title": "Comparacion de algoritmos lunares",
      "algorithm-title-mars": "Comparacion de algoritmos marcianos",
      "algorithm-velocity": "Señal de velocidad en función de tiempo absoluto",
      "algorithm-prediction": "Predicciones en 30 años",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
