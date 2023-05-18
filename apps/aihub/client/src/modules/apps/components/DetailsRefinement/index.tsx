import {
  DescriptionList,
  DescriptionListHeader,
} from '@/components/DescriptionList';
import { Gpt35RefinementRow } from '@/lib/supabase/types';

type DetailsRefinementProps = {
  appRefinement: Gpt35RefinementRow;
};

export function DetailsRefinement({ appRefinement }: DetailsRefinementProps) {
  const descriptionFields = ['vibe', 'temperature'] as const;

  const descriptionItems = descriptionFields.flatMap((field) => {
    const value = appRefinement[field];
    if (!!value) return { term: field, details: value };
    return [];
  });

  return (
    <div className="px-4 lg:px-8 sm:px-6">
      <DescriptionListHeader header="Refinement" />
      <DescriptionList items={descriptionItems} />
    </div>
  );
}
