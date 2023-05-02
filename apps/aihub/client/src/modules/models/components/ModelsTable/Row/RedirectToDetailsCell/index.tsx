import Link from 'next/link';

import { classNames } from '@/modules/theme/utils';
import { modelsUrls } from '@/modules/navigation/helpers';

const commonStyles =
  'whitespace-nowrap py-2 px-4 text-right text-sm font-medium leading-6';
const darkStyles = 'dark:text-emerald-500 dark:hover:text-emerald-400';
const styles = classNames(commonStyles, darkStyles);

type RedirectToDetailsCellProps = {
  id: string;
};

export function RedirectToDetailsCell({ id }: RedirectToDetailsCellProps) {
  const url = modelsUrls.details.overview(id);

  return (
    <td className={styles}>
      <Link href={url}>View</Link>
    </td>
  );
}
