import { useContext, useState } from "react";
import { ViewStateContext } from "../context/ViewStateContext";

export const useViewState = () => {
  const value = useContext(ViewStateContext);

  if (value === undefined) {
    throw new Error("You forgot the ViewStateProvider!");
  }

  const { viewState, setViewState } = value;

  const goToDashboard = () =>
    setViewState({
      name: "Dashboard",
    });

  const goToNewEntry = () =>
    setViewState({
      name: "New Entry",
    });

  const goToEditEntry = (id) =>
    setViewState({
      name: "Edit Entry",
      id,
    });

  return { viewState, goToDashboard, goToEditEntry, goToNewEntry };
};
