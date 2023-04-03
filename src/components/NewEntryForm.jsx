import { EntryForm } from "./EntryForm";
import { useTranslation } from "../hooks/useTranslation";
import { useEntries } from "../hooks/useEntries";

export const NewEntryForm = () => {
  const { t } = useTranslation();
  const { handleNewEntrySubmitted} = useEntries()


  return <EntryForm title={t("newEntryFormTitle")} onSubmit={handleNewEntrySubmitted} />;
};
