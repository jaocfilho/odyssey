import { Flex, Text } from 'milky-ui';

import { LoginButton } from '../LoginButton';

export const LoginArea = () => {
  return (
    <Flex direction="column" alignItems="center" gap={4}>
      <Text variant="h2" fontWeight="bold">
        Log in to Turboflux
      </Text>
      <LoginButton />
    </Flex>
  );
};
