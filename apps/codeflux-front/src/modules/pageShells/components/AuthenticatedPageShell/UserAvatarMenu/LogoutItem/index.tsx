import { signOut } from 'next-auth/react';

import { DropdownMenuItem } from 'milky-ui';

export const LogoutItem = () => {
  const handleClick = () => signOut();

  return <DropdownMenuItem onClick={handleClick}>Log out</DropdownMenuItem>;
};
