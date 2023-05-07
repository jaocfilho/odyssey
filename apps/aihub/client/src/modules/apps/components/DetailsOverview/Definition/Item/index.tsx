type ItemProps = {
  field: string;
  value: string;
};

export function Item({ field, value }: ItemProps) {
  return (
    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
      <dt className="text-sm font-medium leading-6 dark:text-zinc-200">
        {field}
      </dt>
      <dd className="mt-1 text-sm leading-6 dark:text-zinc-400 sm:col-span-2 sm:mt-0">
        {value}
      </dd>
    </div>
  );
}
