import React from "react";
import { useTranslation } from "react-i18next";

const MyComponent = () => {
  const { t, i18n } = useTranslation();
  const switchLanguage = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("th");
    } else {
      i18n.changeLanguage("en");
    }
  };
  return (
    <>
      <h1>{t("title")}</h1>
      <h4>{t("name")}</h4>
      <button type="button" onClick={switchLanguage}>switchLanguage</button>
    </>
  );
};

export default MyComponent;
