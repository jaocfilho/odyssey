import { Flex, Text } from 'milky-ui';

import { LoginButton } from '../LoginButton';

export const LoginArea = () => {
  return (
    <Flex direction="column" justifyContent="center">
      <Text variant="h2" fontWeight="bold">
        Log in to Turboflux
      </Text>
      <LoginButton />
    </Flex>
  );
};
