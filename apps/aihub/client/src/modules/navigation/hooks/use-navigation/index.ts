import { useRouter } from 'next/navigation';

import { appsUrls } from '../../helpers';

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

  return { redirectToDashboard, redirectToApps, redirectToAppDetailsOverview };
}
