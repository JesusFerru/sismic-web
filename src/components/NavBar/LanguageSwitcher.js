import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./LanguageSwitcher.module.css";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    i18n.changeLanguage(newLang);
  };

  return (
    <div className={styles["selector-container"]}>
      <select value={i18n.language} onChange={handleLanguageChange}>
        <option value="en">En</option>
        <option value="es">Es</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
