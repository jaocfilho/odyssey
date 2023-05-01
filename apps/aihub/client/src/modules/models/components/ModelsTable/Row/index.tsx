import { type ChangeEvent } from 'react';

import { Checkbox } from '../Checkbox';
import { type Model } from '@/lib/supabase/types';
import { classNames } from '@/modules/theme/utils';

const commonStyles =
  'dark:text-zinc-200 divide-x dark:divide-zinc-50/10 dark:hover:bg-zinc-900';

export type RowProps = Model & {
  checkRow: (model: string) => void;
  uncheckRow: (modelId: string) => void;
  rowIsChecked: (modelId: string) => boolean;
};

export function Row({
  id,
  name,
  vibe,
  context,
  created_at,
  checkRow,
  uncheckRow,
  rowIsChecked,
}: RowProps) {
  const sameStylesCells = [name, vibe, context, created_at];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.checked ? checkRow(id) : uncheckRow(id);
  };

  const isChecked = rowIsChecked(id);

  return (
    <tr
      key={id}
      className={classNames(isChecked ? 'bg-zinc-900' : '', commonStyles)}
    >
      <td className="relative px-7 sm:w-12 sm:px-6">
        <Checkbox value={id} onChange={handleChange} checked={isChecked} />
      </td>
      {sameStylesCells.map((cell) => (
        <td key={cell} className="whitespace-nowrap p-2 text-sm">
          {cell}
        </td>
      ))}
    </tr>
  );
}
