import cx from "./DashboardEntry.module.scss";
import { Button } from "./Button";
import { useTranslation } from "../hooks/useTranslation";
import { useViewState } from "../hooks/useViewState";
import { useEntries } from "../hooks/useEntries";

export const DashboardEntry = ({ entry }) => {
  const { handleEntryDeleted } = useEntries();
  const { label, date, amount } = entry;
  const { formatDate, formatNumber } = useTranslation();
  const { goToEditEntry } = useViewState();

  return (
    <li className={cx.container}>
      <div className={cx.leftRow}>
        <span>{label}</span>

        <span>{formatDate(date)}</span>
      </div>

      <div className={cx.rightRow}>
        <span>$ {formatNumber(amount)}</span>

        <div className={cx.buttonContainer}>
          <Button
            className={cx.editButton}
            onClick={() => goToEditEntry(entry.id)}
          >
            ✏️
          </Button>

          <Button
            className={cx.deleteButton}
            onClick={() => handleEntryDeleted(entry.id)}
          >
            🗑️
          </Button>
        </div>
      </div>
    </li>
  );
};
