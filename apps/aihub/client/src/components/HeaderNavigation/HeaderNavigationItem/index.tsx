'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export type HeaderNavigationItemProps = {
  href: string;
  name: string;
};

export function HeaderNavigationItem({
  href,
  name,
}: HeaderNavigationItemProps) {
  const pathname = usePathname();
  const current = pathname.startsWith(href);

  return (
    <Link href={href}>
      <li className={current ? 'dark:text-emerald-400' : ''}>{name}</li>
    </Link>
  );
}
