'use client';

import { SectionList } from '@/components/SectionList';
import { useTargetAudienceForm } from '../../TargetAudienceForm/use-target-audience-form';
import { TargetAudienceForm } from '../../TargetAudienceForm';

export function TraitsArea() {
  const { methods } = useTargetAudienceForm({});

  return (
    <div className="-mx-4 px-4 sm:mx-0 sm:px-8 sm:pb-14 lg:col-span-2 lg:row-span-2 lg:row-end-2">
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
    </div>
  );
}
