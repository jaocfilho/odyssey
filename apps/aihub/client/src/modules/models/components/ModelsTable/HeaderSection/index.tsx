type HeaderSectionProps = {
  section: string;
};

export function HeaderSection({ section }: HeaderSectionProps) {
  return (
    <th
      scope="col"
      className="whitespace-nowrap py-2 pl-2 pr-4 text-left text-sm font-semibold dark:text-zinc-200"
    >
      {section}
    </th>
  );
}
