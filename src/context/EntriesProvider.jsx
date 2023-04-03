import { useMemo, useState } from "react";
import { entriesStorage } from "../infrastructure/entriesStorage";
import { EntriesContext } from "./EntriesContext";

export const EntriesProvider = ({ children }) => {
  const [entries, setEntries] = useState(entriesStorage.retrieve());

  const value = useMemo(
    () => ({
      entries,
      setEntries,
    }),
    [entries, setEntries]
  );

  return (
    <EntriesContext.Provider value={value}>{children}</EntriesContext.Provider>
  );
};
