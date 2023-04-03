import { useContext } from "react"
import { NotificationsContext } from "../context/NotificationsContext"

export const useNotification = () => {
  const value = useContext(NotificationsContext)

  if (value === undefined) {
    throw new Error("You forgot the NotificationContext.Provider!");
  }

  const { notification, setNotification} = value;

  const hideNotification = () => {
    setNotification("")
  }

  const changeNotification = (newNotification) => {
    setNotification(newNotification)
  }

  return {notification, changeNotification, hideNotification }
}
