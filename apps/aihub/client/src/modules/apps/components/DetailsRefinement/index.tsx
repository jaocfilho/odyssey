import { Gpt35RefinementRow } from '@/lib/supabase/types';
import { Header } from './Header';
import { RefinementListItem } from './RefinementListItem';

type DetailsRefinementProps = {
  appRefinement: Gpt35RefinementRow;
};

export function DetailsRefinement({ appRefinement }: DetailsRefinementProps) {
  const refinement = [
    { field: 'Domain', value: 'technology' },
    { field: 'Target audience', value: 'software engineers' },
    { field: 'Style', value: 'professional' },
    { field: 'Tone', value: 'optimistic' },
    { field: 'Level of detail', value: 'summarized' },
    { field: 'Length', value: 'medium' },
    { field: 'Language complexity', value: 'sophisticated' },
    { field: 'Slang/Informality', value: 'casual' },
  ];

  return (
    <div>
      <Header />
      <div className="mt-6">
        <dl className="grid grid-cols-1 sm:grid-cols-2">
          {refinement.map(({ field, value }) => (
            <RefinementListItem key={field} field={field} value={value} />
          ))}
        </dl>
      </div>
    </div>
  );
}
