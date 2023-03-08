import { EntryForm } from "./EntryForm";
import { useKeyPressed } from "../hooks/useKeyPressed";
import { useTranslation } from "../hooks/useTranslation";
import { useViewState } from "../hooks/useViewState";

export const EditEntryForm = ({ onSubmit, entry, onEntryDelete }) => {
  const { t } = useTranslation();
  const { goToDashboard } = useViewState();

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
      onSubmit={onSubmit}
    />
  );
};
