import { THEMES, useTheme } from './shared/hooks/useTheme';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={theme}>
      <h1>useTheme</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === THEMES.DARK ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
}

export default App;
