import { Avatar, Flex } from "milky-ui";

export const AuthenticatedPageHeader = () => {
  return (
    <Flex boxBg css={{ px: "$6" }}>
      <Flex css={{ my: "$2" }}>
        <Avatar src="https://github.com/jaocfilho.png" alt="José Augusto" />
      </Flex>
    </Flex>
  );
};
