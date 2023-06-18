import { Menu, MenuItem } from 'tailwind-ui';

export function AccountItem() {
  return (
    <Menu
      colorScheme="gray"
      header={
        <div className="px-4 py-3">
          <p className="text-sm dark:text-grayScheme-400">
            Account preferences
          </p>
          <p className="truncate text-sm font-medium text-gray-900 dark:text-grayScheme-200">
            admin@email.com
          </p>
        </div>
      }
      button="admin@email.com"
    >
      <div className="py-1">
        <MenuItem>Sign out</MenuItem>
      </div>
    </Menu>
  );
}
