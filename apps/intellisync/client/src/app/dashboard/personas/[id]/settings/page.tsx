import { serverSelectPersonaById } from '@/modules/personas/api/server';
import { Settings } from './settings';

type PersonaDetailsSettingsPageProps = {
  params: { id: string };
};

export default async function PersonaDetailsSettingsPage({
  params,
}: PersonaDetailsSettingsPageProps) {
  const { id } = params;

  const { data } = await serverSelectPersonaById({ id });

  return <Settings data={data!} />;
}
