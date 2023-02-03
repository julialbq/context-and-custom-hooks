import cx from "./DashboardEntry.module.scss";
import { format } from "date-fns";
import { Button } from "./Button";

export const DashboardEntry = ({ entry, onEdit, onDelete }) => {
  const { label, date, amount } = entry;

  return (
    <li className={cx.container}>
      <div className={cx.leftRow}>
        <span>{label}</span>

        <span>{format(date, "MM/dd/yyyy")}</span>
      </div>

      <div className={cx.rightRow}>
        <span>$ {amount.toFixed(2)}</span>

        <div className={cx.buttonContainer}>
          <Button className={cx.editButton} onClick={onEdit}>
            ✏️
          </Button>

          <Button className={cx.deleteButton} onClick={onDelete}>
            🗑️
          </Button>
        </div>
      </div>
    </li>
  );
};
