import { useEffect, useState } from "react";
import sun from "../icons/sun.svg";
import moon from "../icons/moon.svg";
import clsx from "clsx";

type Mode = "light" | "dark";

const setDarkModeClass = (mode: Mode) => {
  const documentBody = window.document.querySelector("body");
  if (mode === "dark") {
    documentBody?.classList.add("dark");
  } else {
    documentBody?.classList.remove("dark");
  }
};

export default function ToggleSwitch() {
  const [mode, setMode] = useState<Mode>("light");

  const toggleMode = () => {
    const currentMode = mode === "dark" ? "light" : "dark";
    setDarkModeClass(currentMode);
    setMode(currentMode);
  };

  return (
    <>
      <button
        role="switch"
        id="dark-mode"
        className={clsx(
          "p-2 rounded-md bg-white",
          mode === "light" ? "ring-2 ring-primary-text" : ""
        )}
        aria-checked={mode === "dark" ? "true" : "false"}
        onClick={toggleMode}
      >
        {mode === "dark" ? (
          <img src={sun} alt="sun" className="w-5" />
        ) : (
          <img src={moon} alt="moon" className="w-5" />
        )}
      </button>
      <label htmlFor="dark-mode" className="sr-only">
        Dark mode
      </label>
    </>
  );
}


