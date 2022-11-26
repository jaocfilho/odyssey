import { Flex } from "milky-ui";

import { Logo } from "../../../../components/Logo";
import { ActionsArea } from "./ActionsArea";

export const AuthenticatedPageHeader = () => {
  return (
    <Flex boxBg px={6}>
      <Flex fullWidth my={2} css={{ justifyContent: "space-between" }}>
        <Logo />
        <ActionsArea />
      </Flex>
    </Flex>
  );
};
