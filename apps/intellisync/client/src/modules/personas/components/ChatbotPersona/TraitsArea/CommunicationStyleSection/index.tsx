import { type PersonasRow } from '@/modules/personas/entities';
import { SectionList } from '@/components/SectionList';
import { CommunicationStyleForm } from '../../../CommunicationStyleForm';
import { PersonaUpdateFormData } from '@/modules/personas/hooks/use-persona-update-form';

type CommunicationStyleSectionProps = {
  chatbot_id: PersonasRow['chatbot_id'];
  tone: PersonasRow['tone'];
  informality: PersonasRow['informality'];
};

export function CommunicationStyleSection({
  chatbot_id,
  informality,
  tone,
}: CommunicationStyleSectionProps) {
  return (
    <SectionList.Section title="Communication Style">
      <div className="sm:max-w-xl">
        <CommunicationStyleForm
          chatbot_id={chatbot_id}
          defaultValues={{ informality, tone } as PersonaUpdateFormData}
        />
      </div>
    </SectionList.Section>
  );
}
