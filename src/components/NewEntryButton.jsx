import { Button } from "./Button";
import cx from "./NewEntryButton.module.scss";
import { useTranslation } from "../hooks/useTranslation";
import { useViewState } from "../hooks/useViewState";

export const NewEntryButton = ({ onClick }) => {
  const { t } = useTranslation();
  const { goToNewEntry } = useViewState();

  return (
    <Button className={cx.container} onClick={() => goToNewEntry()}>
      ➕ {t("newEntryButton")}
    </Button>
  );
};
