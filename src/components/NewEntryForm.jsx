import { EntryForm } from "./EntryForm";
import { translate } from "../translations/translate";
import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";

export const NewEntryForm = ({ onSubmit, goToDashboard }) => {
  const language = useContext(LanguageContext);

  return (
    <EntryForm
      title={translate(language, "newEntryFormTitle")}
      goToDashboard={goToDashboard}
      onSubmit={onSubmit}
    />
  );
};
