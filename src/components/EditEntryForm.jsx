import { EntryForm } from "./EntryForm";
import { translate } from "../translations/translate";
import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";

export const EditEntryForm = ({ onSubmit, entry, goToDashboard }) => {
  const language = useContext(LanguageContext);

  return (
    <EntryForm
      title={translate(language, "editEntryFormTitle")}
      entry={entry}
      goToDashboard={goToDashboard}
      onSubmit={onSubmit}
    />
  );
};
