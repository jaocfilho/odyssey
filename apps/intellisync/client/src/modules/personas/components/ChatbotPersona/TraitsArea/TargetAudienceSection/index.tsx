import { PersonasRow } from '@/modules/personas/entities';
import { TargetAudienceForm } from '../../../TargetAudienceForm';
import { SectionList } from '@/components/SectionList';

type TargetAudienceSectionProps = {
  chatbot_id: PersonasRow['chatbot_id'];
  target_audience: PersonasRow['target_audience'];
};

export function TargetAudienceSection({
  chatbot_id,
  target_audience,
}: TargetAudienceSectionProps) {
  return (
    <SectionList.Root>
      <SectionList.Container>
        <SectionList.Info title="Target audience" />
        <SectionList.Content>
          <div className="sm:max-w-xl">
            <TargetAudienceForm
              chatbot_id={chatbot_id}
              defaultValues={{ target_audience }}
            />
          </div>
        </SectionList.Content>
      </SectionList.Container>
    </SectionList.Root>
  );
}
