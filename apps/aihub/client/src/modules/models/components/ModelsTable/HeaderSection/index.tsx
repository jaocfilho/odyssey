type HeaderSectionProps = {
  section: string;
};

export function HeaderSection({ section }: HeaderSectionProps) {
  return (
    <th
      scope="col"
      className="whitespace-nowrap py-2 px-4 text-left text-sm font-semibold dark:text-zinc-200 sm:pl-0"
    >
      {section}
    </th>
  );
}
