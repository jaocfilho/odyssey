import { classNames } from '@/modules/theme/utils';
import { NavIcon, TIcon } from '../NavIcon';

const currentItemStyles =
  'bg-gray-200 text-gray-900 dark:bg-zinc-800 dark:text-white';

const itemStyles = 'text-zinc-400 dark:hover:bg-zinc-800 hover:text-zinc-900';

const commonStyles =
  'group flex items-center rounded-md px-2 py-2 text-sm font-medium';

type NavItemProps = {
  name: string;
  href: string;
  Icon: TIcon;
  current: boolean;
};

export const NavItem = ({ name, href, Icon, current }: NavItemProps) => {
  const styles = classNames(
    current ? currentItemStyles : itemStyles,
    commonStyles
  );

  return (
    <a
      href={href}
      className={styles}
      aria-current={current ? 'page' : undefined}
    >
      <NavIcon Icon={Icon} />
      {name}
    </a>
  );
};
