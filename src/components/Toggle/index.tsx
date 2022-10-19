import { HiMoon } from "react-icons/hi";
import { FaSun } from "react-icons/fa";
import * as Toggle from "./styles";

interface ThemeTogglerProps {
  toggleTheme: () => void;
}

const ThemeToggler: React.FC<ThemeTogglerProps> = ({ toggleTheme }) => {
  return (
    <Toggle.Container>
      <label htmlFor="checkbox" className="switch">
        <input
          id="checkbox"
          type="checkbox"
          onClick={toggleTheme}
          onChange={() => false}
          checked={window.localStorage.getItem("theme") === "light"}
        />
        <Toggle.Icons className="slider round">
          {window.localStorage.getItem("theme") === "light" ? (
            <HiMoon style={{ marginLeft: "6.3px", height: "10px" }} />
          ) : (
            <FaSun size={0} style={{ marginLeft: "41px", height: "10px" }} />
          )}
        </Toggle.Icons>
      </label>
    </Toggle.Container>
  );
};

export default ThemeToggler;
