import { useEffect } from "react";

export const useKeyPressed = (callback) => {
  useEffect(() => {
    window.addEventListener("keydown", callback);
    window.addEventListener("keyup", callback);

    return () => {
      window.removeEventListener("keydown", callback);
      window.removeEventListener("keyup", callback);
    };
  }, [callback]);
};
