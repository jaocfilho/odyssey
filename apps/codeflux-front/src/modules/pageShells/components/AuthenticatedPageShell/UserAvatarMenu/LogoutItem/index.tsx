import { signOut } from 'next-auth/react';

import { DropdownMenuItem } from 'milky-ui';

export const LogoutItem = () => {
  // TODO criar testes
  const handleClick = () => signOut();

  return <DropdownMenuItem onClick={handleClick}>Log out</DropdownMenuItem>;
};
