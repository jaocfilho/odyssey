import { useTheme as useThemeNext } from 'next-themes';

export type UseThemeBaseProps = {
  theme: string | undefined;
  setTheme: (theme: string) => void;
};

type UseThemeReturn = {
  theme: string | undefined;
  setDarkTheme: () => void;
  setLightTheme: () => void;
  alternateTheme: () => void;
};

export const useThemeBase = ({ theme, setTheme }: UseThemeBaseProps) => {
  const setDarkTheme = () => setTheme('dark');
  const setLightTheme = () => setTheme('light');

  const alternateTheme = () => {
    switch (theme) {
      case 'dark':
        setLightTheme();
        break;

      case 'light':
        setDarkTheme();
        break;

      default:
        throw new Error('Invalid theme');
    }
  };

  return { theme, setDarkTheme, setLightTheme, alternateTheme };
};

export const useTheme = (): UseThemeReturn => {
  const { theme, setTheme } = useThemeNext();

  return useThemeBase({ theme, setTheme });
};
