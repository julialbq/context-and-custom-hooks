import { Button } from "./Button";
import cx from "./SaveButton.module.scss";
import { translate } from "../translations/translate";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export const SaveButton = () => {
  const language = useContext(LanguageContext);

  return (
    <Button className={cx.button} type="submit">
      {translate(language, "saveButton")}
    </Button>
  );
};
