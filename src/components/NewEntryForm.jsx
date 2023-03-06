import { EntryForm } from "./EntryForm";
import { translate } from "../translations/translate";

export const NewEntryForm = ({ onSubmit, goToDashboard, language }) => {
  return (
    <EntryForm
      title={translate(language, "newEntryFormTitle")}
      goToDashboard={goToDashboard}
      onSubmit={onSubmit}
      language={language}
    />
  );
};
