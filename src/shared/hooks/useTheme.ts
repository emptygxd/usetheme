import { useLocalStorage } from './useLocalStorage';

export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
};

export const useTheme = () => {
  const { value: theme, setData: setTheme } = useLocalStorage(
    'theme',
    THEMES.DARK
  );

  const toggleTheme = () => {
    const nextTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    setTheme(nextTheme);
  };

  return { theme, toggleTheme };
};
