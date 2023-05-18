import { serverSelectGpt35AppRefinement } from '@/modules/apps/api/server';

type AppDetailsRefinementProps = {
  params: { id: string };
};

export default async function AppDetailsRefinement({
  params,
}: AppDetailsRefinementProps) {
  const { id } = params;

  const response = await serverSelectGpt35AppRefinement({ appId: id });

  return <div>refinement page</div>;
}
