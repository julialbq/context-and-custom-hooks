import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import "./styles/global.scss";
import cx from "./App.module.scss";
import { NewEntryForm } from "./components/NewEntryForm";
import { EditEntryForm } from "./components/EditEntryForm";
import { entriesStorage } from "./infrastructure/entriesStorage";
import { ViewStateProvider } from "./context/ViewStateProvider";
import { useViewState } from "./hooks/useViewState";
import { LanguageProvider } from "./context/LanguageProvider";
import { EntriesProvider } from "./context/EntriesProvider";

function App() {
  const { viewState, goToDashboard } = useViewState();

  const [entries, setEntries] = useState(entriesStorage.retrieve());

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

      return updatedEntries;
    });

    goToDashboard();
  };

  const handleEntryDeleted = (id) => {
    setEntries((entries) => {
      const updatedEntries = entries.filter((entry) => entry.id !== id);

      entriesStorage.store(updatedEntries);

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

      return updatedEntries;
    });

    goToDashboard();
  };

  return (
    <>
      <Header />
      <main className={cx.main}>
        {viewState.name === "Dashboard" && (
          <Dashboard entries={entries} onEntryDelete={handleEntryDeleted} />
        )}

        {viewState.name === "New Entry" && (
          <NewEntryForm onSubmit={handleNewEntrySubmitted} />
        )}

        {viewState.name === "Edit Entry" && (
          <EditEntryForm
            entry={entries.find((entry) => entry.id === viewState.id)}
            onEntryDelete={() => handleEntryDeleted(viewState.id)}
            onSubmit={(entryIntent) =>
              handleEntryEdited(viewState.id, entryIntent)
            }
          />
        )}
      </main>
    </>
  );
}

export default function AppWithProviders() {
  return (
    <LanguageProvider>
      <ViewStateProvider>
        <EntriesProvider>
          <App />
        </EntriesProvider>
      </ViewStateProvider>
    </LanguageProvider>
  );
}
