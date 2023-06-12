'use client';

import { useTargetAudienceForm } from '../../TargetAudienceForm/use-target-audience-form';
import { TargetAudienceSection } from './TargetAudienceSection';

export function TraitsArea() {
  const { methods } = useTargetAudienceForm({});

  return (
    <div className="-mx-4 px-4 sm:mx-0 sm:px-8 sm:pb-14 lg:col-span-2 lg:row-span-2 lg:row-end-2">
      <TargetAudienceSection target_audience={null} />
    </div>
  );
}
