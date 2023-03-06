import { EntryForm } from "./EntryForm";
import { translate } from "../translations/translate";

export const EditEntryForm = ({ onSubmit, entry, goToDashboard, language }) => {
  return (
    <EntryForm
      title={translate(language, "editEntryFormTitle")}
      entry={entry}
      goToDashboard={goToDashboard}
      onSubmit={onSubmit}
      language={language}
    />
  );
};
