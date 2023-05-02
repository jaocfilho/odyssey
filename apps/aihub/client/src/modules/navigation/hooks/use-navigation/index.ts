import { useRouter } from 'next/navigation';

import { modelsUrls } from '../../helpers';

export function useNavigation() {
  const router = useRouter();

  const redirectToDashboard = () => {
    const url = modelsUrls.base;
    router.push(url);
  };

  const redirectToModels = () => {
    const url = modelsUrls.base;
    router.push(url);
  };

  return { redirectToDashboard, redirectToModels };
}
