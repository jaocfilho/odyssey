import { useRouter } from 'next/navigation';

import { urlPaths } from '../../urls';

export function useNavigation() {
  const router = useRouter();

  const redirectToChatbots = () => {
    const url = urlPaths.chatbots.base;
    router.push(url);
  };

  const redirectToChatbotOverview = (id: string) => {
    const url = urlPaths.chatbots.details.overview(id);
    router.push(url);
  };

  return {
    redirectToChatbots,
    redirectToChatbotOverview,
  };
}
