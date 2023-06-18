import { Menu, MenuItem } from 'tailwind-ui';
import { MenuHeader } from './MenuHeader';

export function AccountItem() {
  return (
    <Menu
      colorScheme="gray"
      header={<MenuHeader email="admin@email.com" />}
      button="admin@email.com"
    >
      <div className="py-1">
        <MenuItem>Sign out</MenuItem>
      </div>
    </Menu>
  );
}
