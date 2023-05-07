'use client';

import { usePathname } from 'next/navigation';

type NavItemProps = {
  name: string;
  href: string;
};

export function NavItem({ name, href }: NavItemProps) {
  const pathname = usePathname();
  const current = pathname.split('/').includes(href);

  return <li className={current ? 'dark:text-emerald-400' : ''}>{name}</li>;
}
