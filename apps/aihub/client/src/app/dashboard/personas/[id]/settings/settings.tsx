import { BaseSelectPersonaByIdReturnData } from '@/modules/personas/api/base';
import { PersonaSettings } from '@/modules/personas/components/PersonaSettings';

type SettingsProps = {
  data: BaseSelectPersonaByIdReturnData;
};

export function Settings({ data }: SettingsProps) {
  return (
    <div className="m-4">
      <PersonaSettings data={data} />
    </div>
  );
}
