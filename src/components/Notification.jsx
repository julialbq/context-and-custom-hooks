import cx from "./Notification.module.scss";
import { useNotification } from "../hooks/useNotification"
import { useEffect } from "react";

export const Notification = () => {
  const {notification, changeNotification} = useNotification()

  useEffect(() => {
    if(notification !== "") {
      setTimeout(() => {
        changeNotification("")
      }, 2500);
    }
  }, [notification])

  return (
    <div className={`${cx.container} ${notification === "" ? cx.empty : ""}`}>
      <p>{notification}</p>
    </div>
  )
}
