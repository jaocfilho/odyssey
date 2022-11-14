import { useTheme as useThemeBase } from "next-themes";

type UseThemeReturn = {
  theme: string | undefined;
  setDarkTheme: () => void;
  setLightTheme: () => void;
  alternateTheme: () => void;
};

export const useTheme = (): UseThemeReturn => {
  const { theme, setTheme } = useThemeBase();

  const setDarkTheme = () => setTheme("dark");
  const setLightTheme = () => setTheme("light");

  const alternateTheme = () => {
    switch (theme) {
      case "dark":
        setLightTheme();
        break;

      case "light":
        setDarkTheme();
        break;

      default:
        throw new Error("Invalid theme");
    }
  };

  return { theme, setDarkTheme, setLightTheme, alternateTheme };
};
