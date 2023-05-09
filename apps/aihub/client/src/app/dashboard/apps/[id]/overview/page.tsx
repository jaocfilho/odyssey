import { serverSelectAppById } from '@/modules/apps/api/server';
import { DetailsOverview } from '@/modules/apps/components/DetailsOverview';
import { DetailsPageShell } from '@/modules/apps/components/DetailsPageShell';

type AppDetailsOverviewProps = {
  params: { id: string };
};

export default async function AppDetailsOverview({
  params,
}: AppDetailsOverviewProps) {
  const { id } = params;

  const { data } = await serverSelectAppById({ id });

  return (
    <DetailsPageShell initialData={data}>
      <DetailsOverview />
    </DetailsPageShell>
  );
}
