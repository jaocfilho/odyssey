'use client';

import { useSignOut } from '@/modules/auth/hooks/use-signout';
import { MenuItem } from 'cosmic-ui';

export function SignOutButton() {
  const { signOut } = useSignOut();

  return <MenuItem onClick={signOut}>Sign out</MenuItem>;
}
