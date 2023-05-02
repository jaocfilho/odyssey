import { useRouter } from 'next/navigation';

export function useNavigation() {
  const router = useRouter();

  const redirectToDashboard = () => router.push('/dashboard/models');
  const redirectToModels = () => router.push('/dashboard/models');

  return { redirectToDashboard, redirectToModels };
}
