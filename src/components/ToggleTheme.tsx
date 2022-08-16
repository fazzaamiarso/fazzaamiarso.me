import { useEffect, useState } from "react";
import sun from "../icons/sun.svg";
import moon from "../icons/moon.svg";
import clsx from "clsx";

type Mode = "light" | "dark";

export default function ToggleSwitch() {
  const [mode, setMode] = useDarkMode();

  const toggleMode = () => {
    const currentMode = mode === "dark" ? "light" : "dark";
    const documentBody = window.document.querySelector("body");
    if (currentMode === "dark") {
      documentBody?.classList.add("dark");
    } else {
      documentBody?.classList.remove("dark");
    }
    setMode();
  };

  useEffect(() => {
    toggleMode();
  }, []);

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

const useDarkMode = () => {
  const [mode, setMode] = useState<Mode>("light");

  const setTheme = (mode: Mode) => {
    localStorage.setItem("theme", mode);
    setMode(mode);
  };

  const toggleMode = () => {
    if (mode === "light") setMode("dark");
    if (mode === "dark") setMode("light");
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme") as Mode;

    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches &&
    !localTheme
      ? setMode("dark")
      : localTheme
      ? setTheme(localTheme)
      : setMode("light");
  }, []);

  return [mode, toggleMode] as const;
};
