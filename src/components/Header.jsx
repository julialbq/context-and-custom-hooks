import cx from "./Header.module.scss";
import { translate } from "../translations/translate";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export const Header = ({ onLanguageChanged }) => {
  const language = useContext(LanguageContext);

  return (
    <header className={cx.container}>
      <h1 className={cx.title}>{translate(language, "appTitle")}</h1>

      <select
        value={language}
        onChange={(event) => onLanguageChanged(event.target.value)}
        className={cx.languageSelector}
      >
        <option value="en">EN</option>
        <option value="pt">PT</option>
      </select>
    </header>
  );
};
