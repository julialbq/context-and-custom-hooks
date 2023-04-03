import cx from "./Notification.module.scss";
import { useNotification } from "../hooks/useNotification";
import { useEffect } from "react";
import { useTranslation } from "../hooks/useTranslation";

export const Notification = () => {
  const { notification, hideNotification } = useNotification();
  const { t } = useTranslation();

  useEffect(() => {
    if (notification === "" || notification === undefined ) {
      return 
    }

    const timeoutId = setTimeout(() => {
      hideNotification("");
    }, 2500);

    return () => clearTimeout(timeoutId)
  }, [notification]);

  return (
    <div className={`${cx.container} ${notification === "" || notification === undefined ? cx.empty : ""}`}>
      <p>{t(notification)}</p>
    </div>
  );
};
