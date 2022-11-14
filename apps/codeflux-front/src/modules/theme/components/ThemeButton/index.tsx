import { Sun } from "phosphor-react";

import { IconButton, IconButtonProps } from "milky-ui";

import { useTheme } from "../../hooks/useTheme";

export type ThemeButtonProps = Pick<IconButtonProps, "size">;

export const ThemeButton = ({ size }: ThemeButtonProps) => {
  const { alternateTheme } = useTheme();

  return (
    <IconButton size={size} variant="fadedA" onClick={alternateTheme}>
      <Sun height="100%" width="100%" />
    </IconButton>
  );
};
