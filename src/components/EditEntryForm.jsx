import { EntryForm } from "./EntryForm";
import { useKeyPressed } from "../hooks/useKeyPressed";
import { useTranslation } from "../hooks/useTranslation";
import { useViewState } from "../hooks/useViewState";
import { useEntries } from "../hooks/useEntries";

export const EditEntryForm = ({ entry}) => {
  const { t } = useTranslation();
  const { viewState, goToDashboard } = useViewState();
  const { handleEntryDeleted, handleEntryEdited } = useEntries();

  useKeyPressed((event) => {
    if (event.key === "Delete") {
      handleEntryDeleted(viewState.id);
      goToDashboard();
    }
  });

  return (
    <EntryForm
      title={t("editEntryFormTitle")}
      entry={entry}
      onSubmit={(entryIntent) =>
        handleEntryEdited(viewState.id, entryIntent)}
    />
  );
};
