import { Header } from './Header';
import { RefinementListItem } from './RefinementListItem';

export function DetailsRefinement() {
  const refinement = [
    { field: 'Domain', value: 'technology' },
    { field: 'Target audience', value: 'software engineers' },
    { field: 'Topic', value: 'react applications' },
    { field: 'Level of detail', value: 'summarized' },
    { field: 'Style', value: 'professional' },
    { field: 'Tone', value: 'optimistic' },
    { field: 'Language complexity', value: 'sophisticated' },
    { field: 'Slang/Informality', value: 'casual' },
    { field: 'Length', value: 'medium' },
    { field: 'Temperature', value: '0.8' },
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
