import { UserIcon } from '@heroicons/react/24/outline';

import { Menu } from 'cosmic-ui';
import { MenuHeader } from './MenuHeader';
import { SignOutButton } from './SignOutButton';
import { serverGetSessionUser } from '@/modules/auth/api/server';

export async function AccountItem() {
  const user = await serverGetSessionUser();

  const { email } = user!;

  return (
    <Menu
      colorScheme="gray"
      header={<MenuHeader email={email!} />}
      button={<UserIcon className="h-6 w-6" />}
    >
      <div className="py-1">
        <SignOutButton />
      </div>
    </Menu>
  );
}
