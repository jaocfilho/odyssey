import { Flex } from 'milky-ui';

import { ThemeButton } from '../../../../theme';
import { UserAvatar } from '../../../../users';

export const ActionsArea = () => {
  return (
    <Flex justifyContent="spaceBetween" gap={4}>
      <ThemeButton size="large" />
      <UserAvatar />
    </Flex>
  );
};
