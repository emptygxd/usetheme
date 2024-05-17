import { useLocalStorage } from "./useLocalStorage";

export const useTheme = () => {
  const { value: theme, setData: setTheme } = useLocalStorage("theme", "dark");

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };

  return { theme, toggleTheme };
};
