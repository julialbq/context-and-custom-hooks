import cx from "./Notification.module.scss";
import { useNotification } from "../hooks/useNotification";
import { useEffect } from "react";
import { useTranslation } from "../hooks/useTranslation";

export const Notification = () => {
  const { notification, changeNotification } = useNotification();
  const { t } = useTranslation();

  useEffect(() => {
    notification === "Entry added" && changeNotification(t("entryAdded"));

    notification === "Entry edited" && changeNotification(t("entryEdited"));

    notification === "Entry deleted" && changeNotification(t("entryDeleted"));
  }, [notification]);

  useEffect(() => {
    if (notification !== "") {
      setTimeout(() => {
        changeNotification("");
      }, 2500);
    }
  }, [notification]);

  return (
    <div className={`${cx.container} ${notification === "" ? cx.empty : ""}`}>
      <p>{notification}</p>
    </div>
  );
};
