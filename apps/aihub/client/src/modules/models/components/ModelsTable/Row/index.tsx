type RowProps = {
  id: string;
  name: string;
  vibe: string;
  context: string;
};

export function Row({ id, name, vibe, context }: RowProps) {
  return (
    <tr key={id} className="dark:text-zinc-200 divide-x dark:divide-zinc-50/10">
      <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm sm:pl-0">
        {name}
      </td>
      <td className="whitespace-nowrap px-2 py-2 text-sm">{vibe}</td>
      <td className="whitespace-nowrap px-2 py-2 text-sm">{context}</td>
    </tr>
  );
}
