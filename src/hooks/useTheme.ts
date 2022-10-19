import { useState, useEffect } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState("dark");

  const setMode = (mode: string) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    theme === "light" ? setMode("dark") : setMode("light");
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);


  return { theme, toggleTheme };
};

export default useTheme;
