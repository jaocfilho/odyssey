import { Avatar, Flex } from "milky-ui";

import { ThemeButton } from "../../../../theme";

export const ActionsArea = () => {
  return (
    <Flex justifyContent="spaceBetween" gap={4}>
      <ThemeButton size="large" />
      <Avatar src="https://github.com/jaocfilho.png" alt="José Augusto" />
    </Flex>
  );
};
