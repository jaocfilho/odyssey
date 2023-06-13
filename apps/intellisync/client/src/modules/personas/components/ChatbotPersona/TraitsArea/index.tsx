import { PersonasRow } from '@/modules/personas/entities';
import { SectionList } from '@/components/SectionList';
import { TraitsAreaSection } from './TraitsAreaSection';
import { PersonaUpdateFormField } from '@/modules/personas/hooks/use-persona-update-form';

type TraitsAreaProps = {
  persona: PersonasRow;
};

const sections = [
  {
    title: 'Target Audience',
    fields: ['target_audience'],
    formId: 'target-audience-form',
  },
  {
    title: 'Communication Style',
    fields: ['informality', 'tone'],
    formId: 'communication-style-form',
  },
  {
    title: 'Writting Style',
    fields: ['language_complexity', 'style'],
    formId: 'writting-style-form',
  },
];

export function TraitsArea({ persona }: TraitsAreaProps) {
  return (
    <div className="-mx-4 px-4 sm:mx-0 sm:px-8 sm:pb-14 lg:col-span-2 lg:row-span-2 lg:row-end-2">
      <SectionList.Root>
        {sections.map(({ fields, formId, title }) => (
          <TraitsAreaSection
            key={title}
            title={title}
            formId={formId}
            fields={fields as PersonaUpdateFormField[]}
            persona={persona}
          />
        ))}
      </SectionList.Root>
    </div>
  );
}
