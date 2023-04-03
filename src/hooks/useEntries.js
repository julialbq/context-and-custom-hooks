import { useContext } from "react";
import { EntriesContext } from "../context/EntriesContext";
import { entriesStorage } from "../infrastructure/entriesStorage";
import { useNotification } from "./useNotification";

export const useEntries = () => {
  const value = useContext(EntriesContext);
  const {changeNotification} = useNotification()

  if (value === undefined) {
    throw new Error("You forgot the ViewStateProvider!");
  }

  const { entries, setEntries } = value;

  const handleNewEntrySubmitted = (entryIntent) => {
    setEntries((entries) => {
      const updatedEntries = [
        ...entries,
        {
          id: (Math.random() * 10).toString(),
          ...entryIntent,
        },
      ];

      entriesStorage.store(updatedEntries);

      changeNotification("entryAdded")

      return updatedEntries;
    });
  };

  const handleEntryDeleted = (id) => {
    setEntries((entries) => {
      const updatedEntries = entries.filter((entry) => entry.id !== id);

      entriesStorage.store(updatedEntries);

      changeNotification("entryDeleted")

      return updatedEntries;
    });
  };

  const handleEntryEdited = (id, entryIntent) => {
    const updatedEntry = {
      id,
      ...entryIntent,
    };

    setEntries((entries) => {
      const updatedEntries = [...entries];
      const updatedEntryIndex = updatedEntries.findIndex(
        (entry) => entry.id === id
      );
      updatedEntries[updatedEntryIndex] = updatedEntry;

      entriesStorage.store(updatedEntries);

      changeNotification("entryEdited")

      return updatedEntries;
    });
  };

  return {
    entries,
    handleNewEntrySubmitted,
    handleEntryDeleted,
    handleEntryEdited,
  };
};
