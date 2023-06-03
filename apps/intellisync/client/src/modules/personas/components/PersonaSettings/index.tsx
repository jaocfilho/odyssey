import { BaseSelectPersonaByIdReturnData } from '../../api/base';
import { Header } from './Header';
import { RefinementListItem } from './RefinementListItem';

type PersonaSettingsProps = {
  data: BaseSelectPersonaByIdReturnData;
};

export function PersonaSettings({ data }: PersonaSettingsProps) {
  const refinement = [
    { field: 'Domain', value: data?.domain },
    { field: 'Target audience', value: data?.target_audience },
    { field: 'Topic', value: data?.topic },
    { field: 'Level of detail', value: data?.level_of_detail },
    { field: 'Style', value: data?.style },
    { field: 'Tone', value: data?.tone },
    { field: 'Language complexity', value: data?.language_complexity },
    { field: 'Slang/Informality', value: data?.informality },
    { field: 'Length', value: data?.answer_size },
    { field: 'Temperature', value: data?.temperature },
  ];

  return (
    <div>
      <Header />
      <div className="mt-6">
        <dl className="grid grid-cols-1 sm:grid-cols-2">
          {refinement.map(({ field, value }) => (
            <RefinementListItem key={field} field={field} value={value} />
          ))}
        </dl>
      </div>
    </div>
  );
}
