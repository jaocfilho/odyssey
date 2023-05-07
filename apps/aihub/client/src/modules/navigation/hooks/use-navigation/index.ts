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

  return { redirectToDashboard, redirectToApps };
}
