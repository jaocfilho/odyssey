import { useRouter } from 'next/navigation';

import { appsUrls, urlPaths } from '../../urls';

export function useNavigation() {
  const router = useRouter();

  const redirectToDashboard = () => {
    const url = appsUrls.base;
    router.push(url);
  };

  const redirectToApps = () => {
    const url = appsUrls.base;
    router.push(url);
  };

  const redirectToAppDetailsOverview = (id: string) => {
    const url = appsUrls.details.overview(id);
    router.push(url);
  };

  const redirectToChatbots = () => {
    const url = urlPaths.chatbots.base;
    router.push(url);
  };

  return {
    redirectToChatbots,
    redirectToDashboard,
    redirectToApps,
    redirectToAppDetailsOverview,
  };
}
