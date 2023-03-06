import { Button } from "./Button";
import cx from "./NewEntryButton.module.scss";
import { translate } from "../translations/translate";

export const NewEntryButton = ({ onClick, language }) => {
  return (
    <Button className={cx.container} onClick={onClick}>
      ➕ {translate(language, "newEntryButton")}
    </Button>
  );
};
