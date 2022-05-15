import { useEffect } from "react";

export const useOnClickOutsideModal = (modalRef, toggleRef, callback) => {
  useEffect(() => {
    const clickHandler = (event) => {
      if (
        !toggleRef.current?.contains(event.target) &&
        !modalRef.current?.contains(event.target)
      ) {
        callback();
      }
    };
    window.addEventListener("mousedown", clickHandler);
    return () => window.removeEventListener("mousedown", clickHandler);
  }, [modalRef, callback]);
};
