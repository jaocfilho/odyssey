import { useProfile } from '@/modules/profiles/hooks/use-profile';
import { useSelectAllChatbots } from '../use-select-all-chatbots';

export function useChatbots() {
  const profileQuery = useProfile();

  return useSelectAllChatbots(
    {
      organizationId: profileQuery.data?.last_used_organization!,
    },
    { enabled: !!profileQuery.data?.last_used_organization }
  );
}
