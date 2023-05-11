import { ReactNode } from 'react';

import { classNames } from 'tailwind-ui';

const commonStyles = 'border-t py-6 px-4 sm:px-6 lg:px-8';
const darkStyles = 'dark:border-zinc-50/10';
const styles = classNames(commonStyles, darkStyles);

type ContainerProps = {
  children: ReactNode;
  index: number;
};

export function Container({ children, index }: ContainerProps) {
  const isOdd = index % 2 === 1;
  const isSecond = index === 2;

  return (
    <div
      className={classNames(
        isOdd ? 'sm:border-l' : isSecond ? 'lg:border-l' : '',
        styles
      )}
    >
      {children}
    </div>
  );
}
