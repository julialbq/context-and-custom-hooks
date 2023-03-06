import { EntryForm } from "./EntryForm";
import { translate } from "../translations/translate";
import { LanguageContext } from "../context/LanguageContext";
import { useContext, useEffect } from "react";

export const EditEntryForm = ({
  onSubmit,
  entry,
  goToDashboard,
  onEntryDelete,
}) => {
  const language = useContext(LanguageContext);

  useEffect(() => {
    const callback = (event) => {
      if (event.key === "Delete") {
        onEntryDelete();
        goToDashboard();
      }
    };

    window.addEventListener("keydown", callback);

    return () => {
      window.removeEventListener("keydown", callback);
    };
  }, []);

  return (
    <EntryForm
      title={translate(language, "editEntryFormTitle")}
      entry={entry}
      goToDashboard={goToDashboard}
      onSubmit={onSubmit}
    />
  );
};
