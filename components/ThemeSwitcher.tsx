import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { useTheme } from "../hooks/useTheme";

const ThemeSwitcher = () => {
  const [theme, toggleTheme] = useTheme();
  const ThemeIcon = theme === "dark" ? IoMoon : IoMoonOutline;
  return (
    <div className="ModeSwitcher" onClick={toggleTheme}>
      <ThemeIcon style={{ margin: "0 0 0 10px" }} /> <span>{theme}</span>
    </div>
  );
};

export { ThemeSwitcher };
