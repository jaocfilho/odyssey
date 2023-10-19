import { type ReactNode } from 'react';

import { classNames } from 'cosmic-ui';

const commontStyles = 'flex flex-col gap-4 py-4 px-2';
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
