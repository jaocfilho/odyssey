import { type ReactNode } from 'react';
import { classNames } from 'tailwind-ui';

const commontStyles = 'flex w-full items-center px-4 h-12';
const borderStyles = 'border-b dark:border-zinc-50/10';

type SecondarySidebarSectionProps = {
  children: ReactNode;
  isLastSection?: boolean;
};

export function SecondarySidebarSection({
  children,
  isLastSection,
}: SecondarySidebarSectionProps) {
  const styles = classNames(commontStyles, isLastSection ? '' : borderStyles);

  return <div className={styles}>{children}</div>;
}
