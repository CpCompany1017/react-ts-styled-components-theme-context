import { ThemeProvider } from "styled-components";
import ThemeContext from "./contexts/ThemeContext";
import ThemeToggler from "./components/Toggle";
import GlobalStyle from "./styles/global";
import { lightTheme, darkTheme } from "./styles/themes";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { theme, toggleTheme } = useTheme();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <header>
          <ThemeToggler toggleTheme={toggleTheme} />
        </header>
        <h2>{theme}</h2>
      </ThemeProvider>
    </ThemeContext>
  );
}

export default App;
