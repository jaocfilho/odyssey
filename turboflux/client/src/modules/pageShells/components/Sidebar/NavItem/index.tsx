import { classNames } from '@/modules/theme/utils';
import { NavIcon, TIcon } from '../NavIcon';

type NavItemProps = {
  name: string;
  href: string;
  Icon: TIcon;
  current: boolean;
};

export const NavItem = ({ name, href, Icon, current }: NavItemProps) => {
  const styles = classNames(
    current
      ? 'bg-zinc-700 text-white'
      : 'text-zinc-400 hover:text-white hover:bg-zinc-700',
    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
  );

  return (
    <li>
      <a href={href} className={styles}>
        <NavIcon Icon={Icon} />
        {name}
      </a>
    </li>
  );
};
