import Link from 'next/link';

type NavItemProps = {
  name: string;
  href: string;
  current: boolean;
};

export function NavItem({ name, href, current }: NavItemProps) {
  return (
    <li className={current ? 'dark:text-emerald-400' : ''}>
      <Link href={href}>{name}</Link>
    </li>
  );
}
