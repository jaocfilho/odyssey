'use client';

import { PersonasRow } from '@/modules/personas/entities';
import { TargetAudienceForm } from '../../../TargetAudienceForm';
import { useTargetAudienceForm } from '../../../TargetAudienceForm/use-target-audience-form';
import { SectionList } from '@/components/SectionList';

type TargetAudienceSectionProps = {
  target_audience: PersonasRow['target_audience'];
};

export function TargetAudienceSection({
  target_audience,
}: TargetAudienceSectionProps) {
  const { methods } = useTargetAudienceForm({
    defaultValues: {
      target_audience,
    },
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
