import { PersonasRow } from '@/modules/personas/entities';
import { SectionList } from '@/components/SectionList';
import { TraitsAreaSection, type Section } from './TraitsAreaSection';

type TraitsAreaProps = {
  persona: PersonasRow;
};

const sections: Section[] = [
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
  {
    title: 'Content Details',
    fields: ['level_of_detail', 'topic'],
    formId: 'content-details-form',
  },
  {
    title: 'Domain',
    fields: ['domain'],
    formId: 'domain-form',
  },
  {
    title: 'Miscellaneous',
    fields: ['answer_size'],
    formId: 'miscellaneous-form',
  },
];

export function TraitsArea({ persona }: TraitsAreaProps) {
  return (
    <div className="-mx-4 px-4 sm:mx-0 sm:px-8 sm:pb-14 lg:col-span-2 lg:row-span-2 lg:row-end-2">
      <SectionList.Root>
        {sections.map((section) => (
          <TraitsAreaSection
            key={section.title}
            section={section}
            persona={persona}
          />
        ))}
      </SectionList.Root>
    </div>
  );
}
