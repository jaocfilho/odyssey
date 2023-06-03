type RefinementListItemProps = {
  field: string;
  value: string;
};

export function RefinementListItem({ field, value }: RefinementListItemProps) {
  return (
    <div className="border-t dark:border-zinc-50/10 px-4 py-6 sm:col-span-1 sm:px-0">
      <dt className="text-sm font-medium leading-6 dark:text-zinc-200">
        {field}
      </dt>
      <dd className="mt-1 text-sm leading-6 dark:text-zinc-400 sm:mt-2">
        {value}
      </dd>
    </div>
  );
}
