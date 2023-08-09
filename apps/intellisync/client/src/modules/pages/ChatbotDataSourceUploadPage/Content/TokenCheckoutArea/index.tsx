import { TNewDocumentsListItem } from '../NewDocumentsListItem';

type TableRowProps = {
  label: string;
  value: number;
  font?: 'normal' | 'semibold';
};

function TableRow({ label, value, font = 'normal' }: TableRowProps) {
  return (
    <tr>
      <th scope="row" className={`font-${font} sm:hidden`}>
        {label}
      </th>
      <th
        scope="row"
        colSpan={3}
        className={`hidden text-right font-${font} sm:table-cell`}
      >
        {label}
      </th>
      <td className={`pb-0 pl-8 pr-0 text-right tabular-nums font-${font}`}>
        {value}
      </td>
    </tr>
  );
}

type TotalCharactersRowProps = {
  totalCharacters: number;
};

export function TotalCharactersRow({
  totalCharacters,
}: TotalCharactersRowProps) {
  return <TableRow label="Total characters" value={totalCharacters} />;
}

type StorageTokensRowProps = {
  storageTokens: number;
};

export function StorageTokensRow({ storageTokens }: StorageTokensRowProps) {
  return <TableRow label="Storage tokens balance" value={storageTokens} />;
}

type NewBalanceRowProps = {
  newBalance: number;
};

export function NewBalanceRow({ newBalance }: NewBalanceRowProps) {
  return <TableRow label="New balance" value={newBalance} font="semibold" />;
}

type TokenCheckoutAreaProps = {
  items: TNewDocumentsListItem[];
};

export function TokenCheckoutArea({ items }: TokenCheckoutAreaProps) {
  const totalCharacters = items.reduce((acc, item) => acc + item.characters, 0);

  return (
    <table className="mt-6 w-full whitespace-nowrap text-left text-sm leading-6">
      <colgroup>
        <col className="w-full" />
        <col />
        <col />
        <col />
      </colgroup>
      <tfoot>
        <TotalCharactersRow totalCharacters={totalCharacters} />
        <StorageTokensRow storageTokens={10000} />
        <NewBalanceRow newBalance={10000 - totalCharacters} />
      </tfoot>
    </table>
  );
}
