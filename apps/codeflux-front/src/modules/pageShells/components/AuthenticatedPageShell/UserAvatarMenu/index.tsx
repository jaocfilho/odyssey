import type { ReactNode } from 'react';

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from 'milky-ui';

import { UserAvatar } from '../../../../users';

type BaseUserAvatarMenuProps = {
  trigger: ReactNode;
};

export const BaseUserAvatarMenu = ({ trigger }: BaseUserAvatarMenuProps) => {
  return (
    <DropdownMenu trigger={trigger}>
      <DropdownMenuContent>
        <DropdownMenuItem>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const UserAvatarMenu = () => {
  return <BaseUserAvatarMenu trigger={<UserAvatar cursorPointer />} />;
};
