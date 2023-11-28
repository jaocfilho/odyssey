'use client';

import { ThemeButton } from '../../../theme';
import { UserAvatarMenu } from '../UserAvatarMenu';

export const ActionsArea = () => {
  return (
    <div className="justify-between gap-4">
      {/* <ThemeButton size="large" /> */}
      <UserAvatarMenu />
    </div>
  );
};
