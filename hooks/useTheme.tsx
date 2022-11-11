import { useEffect } from "react";
import { Theme } from "../slices/switchThemeSlice/themeSlice";
import { useTypedSelector } from "./useTypedSelector";
import { useAction } from "./useAction";

export const useTheme = (): [Theme, () => void] => {
  const { setTheme } = useAction();
  const theme = useTypedSelector((state) => state.theme);
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return [theme, toggleTheme];
};
