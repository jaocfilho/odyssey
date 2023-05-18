import {
  DescriptionListItem,
  type DescriptionListItemProps,
} from '../DescriptionListItem';

type DescriptionListComponentProps = {
  items: DescriptionListItemProps[];
};

export function DescriptionListComponent({
  items,
}: DescriptionListComponentProps) {
  return (
    <dl className="divide-y divide-white/10">
      {items.map(({ term, details }) => (
        <DescriptionListItem key={term} term={term} details={details} />
      ))}
    </dl>
  );
}
