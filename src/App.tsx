import { useTheme } from "./shared/hooks/useTheme";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={theme}>
      <h1>useTheme</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === "dark" ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}

export default App;
