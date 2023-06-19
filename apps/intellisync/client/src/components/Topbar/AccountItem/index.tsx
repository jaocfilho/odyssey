import { Menu } from 'tailwind-ui';
import { MenuHeader } from './MenuHeader';
import { SignOutButton } from './SignOutButton';
import { serverGetSessionUser } from '@/modules/auth/api/server';

export async function AccountItem() {
  const user = await serverGetSessionUser();

  return (
    <Menu
      colorScheme="gray"
      header={<MenuHeader email={user!.email!} />}
      button={user!.email!}
    >
      <div className="py-1">
        <SignOutButton />
      </div>
    </Menu>
  );
}
