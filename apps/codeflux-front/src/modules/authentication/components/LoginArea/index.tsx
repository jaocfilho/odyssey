import { Flex, Text } from 'milky-ui';

import { LoginButton } from '../LoginButton';

export const LoginArea = () => {
  return (
    <Flex direction="column">
      <Text variant="h1" fontWeight="bold">
        Log in to Turboflux
      </Text>
      <LoginButton />
    </Flex>
  );
};
