type DescriptionListHeaderProps = {
  header: string;
  subHeader?: string;
};

export function DescriptionListHeader({
  header,
  subHeader,
}: DescriptionListHeaderProps) {
  return (
    <div>
      <h3 className="text-base font-semibold leading-7 dark:text-zinc-200">
        {header}
      </h3>
      {subHeader ? (
        <p className="mt-1 max-w-2xl text-sm leading-6 dark:text-zinc-400">
          {subHeader}
        </p>
      ) : null}
    </div>
  );
}
