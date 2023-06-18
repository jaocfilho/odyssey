import { Menu } from 'tailwind-ui';
import { MenuHeader } from './MenuHeader';
import { SignOutButton } from './SignOutButton';

export function AccountItem() {
  return (
    <Menu
      colorScheme="gray"
      header={<MenuHeader email="admin@email.com" />}
      button="admin@email.com"
    >
      <div className="py-1">
        <SignOutButton />
      </div>
    </Menu>
  );
}
