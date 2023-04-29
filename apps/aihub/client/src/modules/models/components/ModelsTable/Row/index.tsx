type RowProps = {
  id: string;
  name: string;
  vibe: string;
  context: string;
};

export function Row({ id, name, vibe, context }: RowProps) {
  return (
    <tr
      key={id}
      className="dark:text-zinc-200 divide-x dark:divide-zinc-50/10 dark:hover:bg-zinc-900"
    >
      <td className="relative px-7 sm:w-12 sm:px-6">
        <input
          type="checkbox"
          className="absolute cursor-pointer bg-inherit left-4 top-1/2 -mt-2 h-4 w-4 rounded dark:border-zinc-500 dark:hover:border-emerald-500 text-emerald-600 focus:ring-emerald-600"
          value={id}
        />
      </td>

      <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm sm:pl-0">
        {name}
      </td>
      <td className="whitespace-nowrap px-2 py-2 text-sm">{vibe}</td>
      <td className="whitespace-nowrap px-2 py-2 text-sm">{context}</td>
    </tr>
  );
}
