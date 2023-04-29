import { Checkbox } from '../Checkbox';

export type RowProps = {
  id: string;
  name: string;
  vibe: string;
  context: string;
};

export function Row({ id, name, vibe, context }: RowProps) {
  const sameStylesCells = [name, vibe, context];

  return (
    <tr
      key={id}
      className="dark:text-zinc-200 divide-x dark:divide-zinc-50/10 dark:hover:bg-zinc-900"
    >
      <td className="relative px-7 sm:w-12 sm:px-6">
        <Checkbox value={id} />
      </td>
      {sameStylesCells.map((cell) => (
        <td key={cell} className="whitespace-nowrap p-2 text-sm">
          {cell}
        </td>
      ))}
    </tr>
  );
}
