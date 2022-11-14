import { Sun } from "phosphor-react";

import { IconButton } from "milky-ui";

import { useTheme } from "../../hooks/useTheme";

export const ThemeButton = () => {
  const { alternateTheme } = useTheme();

  return (
    <IconButton size="small" variant="outline" onClick={alternateTheme}>
      <Sun size={32} />
    </IconButton>
  );
};
