import { ThemeProvider } from "styled-components";
import { useTheme } from "../../hooks/useTheme";
import { lightTheme, darkTheme } from "../../styles/themes";

interface ThemeContextProps {
  children: React.ReactNode;
}

const ThemeContext: React.FC<ThemeContextProps> = ({ children }) => {
  const { theme } = useTheme();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return <ThemeProvider theme={themeMode}>{children}</ThemeProvider>;
};

export default ThemeContext;
