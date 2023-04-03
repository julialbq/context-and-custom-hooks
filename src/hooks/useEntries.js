import { useContext } from "react";
import { EntriesContext } from "../context/EntriesContext";
import { entriesStorage } from "../infrastructure/entriesStorage";
import { useNotification } from "./useNotification";

export const useEntries = () => {
  const value = useContext(EntriesContext);
  const {showNotification} = useNotification()

  if (value === undefined) {
    throw new Error("You forgot the ViewStateProvider!");
  }

  const { entries, setEntries } = value;

  const createEntry = (entryIntent) => {
    setEntries((entries) => {
      const updatedEntries = [
        ...entries,
        {
          id: (Math.random() * 10).toString(),
          ...entryIntent,
        },
      ];

      entriesStorage.store(updatedEntries);

      showNotification("entryAdded")

      return updatedEntries;
    });
  };

  const deleteEntry = (id) => {
    setEntries((entries) => {
      const updatedEntries = entries.filter((entry) => entry.id !== id);

      entriesStorage.store(updatedEntries);

      showNotification("entryDeleted")

      return updatedEntries;
    });
  };

  const editEntryed = (id, entryIntent) => {
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

      showNotification("entryEdited")

      return updatedEntries;
    });
  };

  return {
    entries,
    createEntry,
    deleteEntry,
    editEntryed,
  };
};
