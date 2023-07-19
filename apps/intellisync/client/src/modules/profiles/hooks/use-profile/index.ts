import { useUser } from '@/modules/auth/hooks/use-user';
import { useSelectProfileById } from '../use-select-profile-by-id';

export function useProfile() {
  const userQuery = useUser();

  return useSelectProfileById(
    { id: userQuery.data?.id! },
    { enabled: !!userQuery.data?.id }
  );
}
