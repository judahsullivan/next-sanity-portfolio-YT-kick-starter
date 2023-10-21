import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const isDark = (): boolean =>
  (localStorage && localStorage.theme === "dark") ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches);

const getThemeString = (isDark: boolean): string => (isDark ? "dark" : "light");

export default function DarkModeToggle() {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleMode = (): void => {
    localStorage.theme = getThemeString(!isDarkMode);
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setDarkMode(!isDarkMode);
  };

  useEffect(() => {
    setDarkMode(isDark());
  }, []);

  const darkModeActive: boolean =
    typeof window !== "undefined" &&
    document.documentElement.classList.contains("dark");
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.button
        className="text-2xl mb-1"
        onClick={() => toggleMode()}
        key={darkModeActive ? "dark-icon" : "light-icon"}
        initial={{ rotate: -20, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {darkModeActive ? "🌙" : "🌤️"}
      </motion.button>
    </AnimatePresence>
  );
}
