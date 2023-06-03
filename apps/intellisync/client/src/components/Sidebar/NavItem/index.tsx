import { classNames } from 'tailwind-ui';
import { NavIcon, TIcon } from '../NavIcon';

const currentItemStyles = 'dark:bg-zinc-800 dark:text-zinc-400';

const notCurrentStyles =
  'dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-400';

const commonStyles =
  'flex items-center justify-center rounded-md px-2 py-2 text-sm font-medium';

export const navItemStyles = {
  commonStyles,
  currentItemStyles,
  notCurrentStyles,
};

export function getStyles(current: boolean) {
  const styles = classNames(
    current ? currentItemStyles : notCurrentStyles,
    commonStyles
  );

  return styles;
}

type NavItemProps = {
  Icon: TIcon;
  current: boolean;
};

export const NavItem = ({ Icon, current }: NavItemProps) => {
  const styles = getStyles(current);

  return (
    <p className={styles} aria-current={current ? 'page' : undefined}>
      <NavIcon Icon={Icon} />
    </p>
  );
};
