import { useEffect, useRef } from "react";

export const useOnClickOutsideModal = (modalRef, callback) => {
  useEffect(() => {
    const clickHandler = (event) => {
      if (!modalRef.current?.contains(event.target) || !modalRef.current)
        callback();
    };
    window.addEventListener("mousedown", clickHandler);
    return () => window.removeEventListener("mousedown", clickHandler);
  }, [modalRef, callback]);
};
