import { Avatar, Flex } from "milky-ui";

import { Logo } from "../../../../components/Logo";

export const AuthenticatedPageHeader = () => {
  return (
    <Flex boxBg px={6}>
      <Flex fullWidth css={{ my: "$2", justifyContent: "space-between" }}>
        <Logo />
        <Avatar src="https://github.com/jaocfilho.png" alt="José Augusto" />
      </Flex>
    </Flex>
  );
};
