import { useEffect } from "react";

const noEnterFn = (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
  }
};

const inAllInputs = (fn) => {
  document.querySelectorAll("input").forEach(fn);
};

const addListeners = () => {
  inAllInputs((node) => node.addEventListener("keypress", noEnterFn));
};

const cleanListeners = () => {
  inAllInputs((node) => node.removeEventListener("keypress", noEnterFn));
};

/**
 * Custom hook to prevent effect by enter key press, and then clear the listeners
 */
const usePreventEntersOnInputs = () => {
  return useEffect(() => {
    addListeners();

    return () => {
      cleanListeners();
    };
  }, []);
};

export default usePreventEntersOnInputs;
