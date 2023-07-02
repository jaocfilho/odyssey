import { SettingsCell } from '../SettingsCell';

type TableRowProps = {
  id: string;
  name: string;
  characters: number;
};

export function TableRow({ id, characters, name }: TableRowProps) {
  return (
    <tr key={id}>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
        {name}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
        {characters}
      </td>
      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
        <SettingsCell fileId={id} />
      </td>
    </tr>
  );
}
