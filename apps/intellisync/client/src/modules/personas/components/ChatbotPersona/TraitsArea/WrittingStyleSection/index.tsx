import { type PersonasRow } from '@/modules/personas/entities';
import { SectionList } from '@/components/SectionList';
import { WrittingStyleForm } from '../../../WrittingStyleForm';
import { PersonaUpdateFormData } from '@/modules/personas/hooks/use-persona-update-form';

type WrittingStyleSectionProps = {
  chatbot_id: PersonasRow['chatbot_id'];
  language_complexity: PersonasRow['language_complexity'];
  style: PersonasRow['style'];
};

export function WrittingStyleSection({
  chatbot_id,
  style,
  language_complexity,
}: WrittingStyleSectionProps) {
  return (
    <SectionList.Section title="Writting Style">
      <div className="sm:max-w-xl">
        <WrittingStyleForm
          chatbot_id={chatbot_id}
          defaultValues={
            { style, language_complexity } as PersonaUpdateFormData
          }
        />
      </div>
    </SectionList.Section>
  );
}
