'use client';

import { PersonasRow } from '@/modules/personas/entities';
import { TargetAudienceForm } from '../../../TargetAudienceForm';
import { useTargetAudienceForm } from '../../../TargetAudienceForm/use-target-audience-form';
import { SectionList } from '@/components/SectionList';
import { useUpdatePersonaForm } from '@/modules/personas/hooks/use-update-persona-form';

type TargetAudienceSectionProps = {
  chatbot_id: PersonasRow['chatbot_id'];
  target_audience: PersonasRow['target_audience'];
};

export function TargetAudienceSection({
  chatbot_id,
  target_audience,
}: TargetAudienceSectionProps) {
  const { methods } = useUpdatePersonaForm({
    chatbot_id,
    defaultValues: {},
  });

  return (
    <SectionList.Root>
      <SectionList.Container>
        <SectionList.Info title="Target audience" />
        <SectionList.Content>
          <div className="sm:max-w-xl">
            <TargetAudienceForm methods={methods} onSubmit={console.log} />
          </div>
        </SectionList.Content>
      </SectionList.Container>
    </SectionList.Root>
  );
}
