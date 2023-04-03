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
import { NotificationProvider } from "./context/NotificationProvider";
import { Notification } from "./components/Notification";

function App() {
  const { viewState } = useViewState();

  return (
    <>
      <Header />
      <main className={cx.main}>
        {viewState.name === "Dashboard" && <Dashboard />}

        {viewState.name === "New Entry" && <NewEntryForm />}

        {viewState.name === "Edit Entry" && <EditEntryForm />}
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
