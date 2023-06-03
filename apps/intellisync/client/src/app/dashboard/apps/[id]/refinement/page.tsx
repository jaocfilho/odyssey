import { serverSelectGpt35AppRefinement } from '@/modules/apps/api/server';
import { DetailsRefinement } from '@/modules/apps/components/DetailsRefinement';

type AppDetailsRefinementProps = {
  params: { id: string };
};

export default async function AppDetailsRefinementPage({
  params,
}: AppDetailsRefinementProps) {
  const { id } = params;

  // const { data } = await serverSelectGpt35AppRefinement({ appId: id });

  return <DetailsRefinement />;
}
