import { Button } from "./Button";
import cx from "./NewEntryButton.module.scss";

export const NewEntryButton = ({ onClick }) => {
  return (
    <Button className={cx.container} onClick={onClick}>
      ➕ New
    </Button>
  );
};
