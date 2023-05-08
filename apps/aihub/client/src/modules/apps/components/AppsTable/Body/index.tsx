import { type AppsTableRow } from '@/lib/supabase/types';
import { Row } from '../Row';

type BodyProps = {
  rows: AppsTableRow[];
  checkRow: (model: string) => void;
  uncheckRow: (modelId: string) => void;
  rowIsChecked: (modelId: string) => boolean;
};

export function Body({ rows, checkRow, uncheckRow, rowIsChecked }: BodyProps) {
  return (
    <tbody className="divide-y divide-gray-200 bg-white dark:divide-zinc-50/10 dark:bg-zinc-950">
      {rows.map(({ id, name, vibe, context, created_at }) => (
        <Row
          key={id}
          id={id}
          name={name}
          vibe={vibe}
          context={context}
          created_at={created_at}
          checkRow={checkRow}
          uncheckRow={uncheckRow}
          rowIsChecked={rowIsChecked}
        />
      ))}
    </tbody>
  );
}
