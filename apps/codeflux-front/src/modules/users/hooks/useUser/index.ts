import { useSession } from 'next-auth/react';

import { IUser } from '../../types';

export const useUser = () => {
  const { data } = useSession();

  if (data) {
    const { user } = data;
    return user as IUser;
  }

  return null;
};
