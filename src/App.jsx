import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import "./styles/global.scss";
import cx from "./App.module.scss";
import { NewEntryForm } from "./components/NewEntryForm";
import { EditEntryForm } from "./components/EditEntryForm";
import { ViewStateProvider } from "./context/ViewStateProvider";
import { useViewState } from "./hooks/useViewState";
import { LanguageProvider } from "./context/LanguageProvider";
import { EntriesProvider } from "./context/EntriesProvider";
import { useEntries } from "./hooks/useEntries";

function App() {
  const { viewState } = useViewState();
  const {entries} = useEntries()

  return (
    <>
      <Header />
      <main className={cx.main}>
        {viewState.name === "Dashboard" && <Dashboard />}

        {viewState.name === "New Entry" && <NewEntryForm />}

        {viewState.name === "Edit Entry" && <EditEntryForm entry={entries.find((entry) => entry.id === viewState.id)} />}
      </main>
      <Notification />
    </>
  );
}

export default function AppWithProviders() {
  return (
    <LanguageProvider>
      <ViewStateProvider>
        <NotificationProvider>
          <EntriesProvider>
            <App />
          </EntriesProvider>
        </NotificationProvider>
      </ViewStateProvider>
    </LanguageProvider>
  );
}
