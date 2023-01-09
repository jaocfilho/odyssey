import type { ReactNode } from 'react';

import { DropdownMenu, DropdownMenuContent } from 'milky-ui';

import { UserAvatar } from '../../../../users';
import { LogoutItem } from './LogoutItem';

type BaseUserAvatarMenuProps = {
  trigger: ReactNode;
};

export const BaseUserAvatarMenu = ({ trigger }: BaseUserAvatarMenuProps) => {
  return (
    <DropdownMenu trigger={trigger}>
      <DropdownMenuContent>
        <LogoutItem />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const UserAvatarMenu = () => {
  return <BaseUserAvatarMenu trigger={<UserAvatar cursorPointer />} />;
};
