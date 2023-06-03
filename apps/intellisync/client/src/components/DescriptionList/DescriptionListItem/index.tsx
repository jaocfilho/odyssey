export type DescriptionListItemProps = {
  term: string;
  details: string | number;
};

export function DescriptionListItem({
  term,
  details,
}: DescriptionListItemProps) {
  return (
    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
      <dt className="text-sm font-medium leading-6 dark:text-zinc-200">
        {term}
      </dt>
      <dd className="mt-1 text-sm leading-6 dark:text-zinc-400 sm:col-span-2 sm:mt-0">
        {details}
      </dd>
    </div>
  );
}
