import { type HTMLAttributes } from 'react';

import { classNames } from '../../utils';

export type ContainerProps = HTMLAttributes<HTMLDivElement>;

export function Container({ className, ...rest }: ContainerProps) {
  return (
    <div
      className={classNames(
        'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8',
        className ?? ''
      )}
      {...rest}
    />
  );
}
