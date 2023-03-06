import { EntryForm } from "./EntryForm";
import { useKeyPressed } from "../hooks/useKeyPressed";
import { useTranslation } from "../hooks/useTranslation";

export const EditEntryForm = ({
  onSubmit,
  entry,
  goToDashboard,
  onEntryDelete,
}) => {
  const { t } = useTranslation();

  useKeyPressed((event) => {
    if (event.key === "Delete") {
      onEntryDelete();
      goToDashboard();
    }
  });

  return (
    <EntryForm
      title={t("editEntryFormTitle")}
      entry={entry}
      goToDashboard={goToDashboard}
      onSubmit={onSubmit}
    />
  );
};
