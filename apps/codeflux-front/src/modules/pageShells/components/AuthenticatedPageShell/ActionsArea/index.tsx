import { Flex } from 'milky-ui';

import { ThemeButton } from '../../../../theme';
import { UserAvatarMenu } from '../UserAvatarMenu';

export const ActionsArea = () => {
  return (
    <Flex justifyContent="spaceBetween" gap={4}>
      <ThemeButton size="large" />
      <UserAvatarMenu />
    </Flex>
  );
};
