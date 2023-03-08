import { addMinutes, format } from "date-fns";
import { useState, useId } from "react";
import { BackButton } from "./BackButton";
import cx from "./EntryForm.module.scss";
import { Input } from "./Input";
import { SaveButton } from "./SaveButton";
import { useKeyPressed } from "../hooks/useKeyPressed";
import { useTranslation } from "../hooks/useTranslation";
import { useViewState } from "../hooks/useViewState";

export const EntryForm = ({ title, onSubmit, entry }) => {
  const { t } = useTranslation();
  const { goToDashboard } = useViewState();

  const initialLabel = entry?.label ?? "";
  const initialAmount = entry?.amount?.toString() ?? "";
  const initialDate = entry
    ? format(entry.date, "yyyy-MM-dd")
    : format(new Date(), "yyyy-MM-dd");

  const [label, setLabel] = useState(initialLabel);
  const [amount, setAmount] = useState(initialAmount);
  const [date, setDate] = useState(initialDate);

  const labelId = useId();
  const amountId = useId();
  const dateId = useId();

  useKeyPressed((event) => {
    if (event.key === "Escape") {
      goToDashboard();
    }
  });

  useKeyPressed((event) => {
    if (event.key === "Enter") {
      const entryIntent = {
        label,
        amount: Number(amount),
        date: addMinutes(new Date(date), new Date().getTimezoneOffset()),
      };

      onSubmit(entryIntent);
      goToDashboard()
    }
  });

  return (
    <>
      <BackButton onClick={() => goToDashboard()} />

      <form
        className={cx.form}
        onSubmit={(event) => {
          event.preventDefault();

          const entryIntent = {
            label,
            amount: Number(amount),
            date: addMinutes(new Date(date), new Date().getTimezoneOffset()),
          };

          onSubmit(entryIntent);
          goToDashboard()
        }}
      >
        <h2 className={cx.title}>{title}</h2>

        <div className={cx.field}>
          <Input
            id={labelId}
            value={label}
            onChange={(event) => setLabel(event.target.value)}
            label={t("labelInput")}
          />
        </div>

        <div className={cx.field}>
          <Input
            id={amountId}
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            label={t("amountInput")}
          />
        </div>

        <div className={cx.field}>
          <Input
            id={dateId}
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            label={t("dateInput")}
          />
        </div>

        <div className={cx.saveButtonContainer}>
          <SaveButton />
        </div>
      </form>
    </>
  );
};
