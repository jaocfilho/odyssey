import { useSession } from 'next-auth/react';

import { TUser } from '../../types';

export const useUser = () => {
  const { data } = useSession();

  if (data) {
    const { user } = data;
    return user as TUser;
  }

  return null;
};
