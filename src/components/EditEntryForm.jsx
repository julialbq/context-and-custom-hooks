import { EntryForm } from "./EntryForm";
import { translate } from "../translations/translate";
import { LanguageContext } from "../context/LanguageContext";
import { useContext, useEffect } from "react";
import { useKeyPressed } from "../hooks/useKeyPressed";

export const EditEntryForm = ({
  onSubmit,
  entry,
  goToDashboard,
  onEntryDelete,
}) => {
  const language = useContext(LanguageContext);

  useKeyPressed((event) => {
    if (event.key === "Delete") {
      onEntryDelete();
      goToDashboard();
    }
  });

  return (
    <EntryForm
      title={translate(language, "editEntryFormTitle")}
      entry={entry}
      goToDashboard={goToDashboard}
      onSubmit={onSubmit}
    />
  );
};
