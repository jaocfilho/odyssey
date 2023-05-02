import Link from 'next/link';

import { classNames } from '@/modules/theme/utils';

const commonStyles =
  'whitespace-nowrap py-2 px-4 text-right text-sm font-medium leading-6';
const darkStyles = 'dark:text-emerald-500 dark:hover:text-emerald-400';
const styles = classNames(commonStyles, darkStyles);

type RedirectToDetailsCellProps = {
  id: string;
};

export function RedirectToDetailsCell({ id }: RedirectToDetailsCellProps) {
  return (
    <td className={styles}>
      <Link href={`/dashboard/models/${id}`}>View</Link>
    </td>
  );
}
