import React from 'react';

import { classNames } from '../utils';
import { Styles } from './tokens';

type CreateElementParams = Parameters<typeof React.createElement>;

type CustomComponentProps = CreateElementParams[1] & {
  className?: string;
  children?: CreateElementParams[2];
};

type ComponentType = CreateElementParams[0];

type StyleKeys<T extends Styles> = {
  [K in keyof T as K extends 'default' ? never : K]: T[K] extends object
    ? keyof T[K]
    : never;
};

type ComponentProps<T extends Styles> = {
  [K in keyof StyleKeys<T>]: StyleKeys<T>[K];
} & CustomComponentProps;

export function getStyleVariants<T extends Styles>(styles: T) {
  return Object.keys(styles).filter(
    (key) => typeof styles[key as keyof T] === 'object'
  ) as Array<keyof T>;
}

function getStylesClassNames<T extends Styles>(
  styles: T,
  props: ComponentProps<T>
) {
  const styleVariants = getStyleVariants(styles);

  const classNamesArray = styleVariants.map((variant) => {
    const variantStyles = styles[variant];
    const variantKey = props[variant as keyof ComponentProps<T>];
    return variantStyles[variantKey as keyof typeof variantStyles] as string;
  });

  return classNamesArray;
}

export function createComponent<T extends Styles>(
  componentType: ComponentType,
  styles?: T
) {
  return function Component({ className, ...rest }: ComponentProps<T>) {
    const classNamesArray = getStylesClassNames(styles ?? {}, rest);

    const classNamesWithStyles = classNames(
      className ?? '',
      ...classNamesArray
    );

    return React.createElement(
      componentType,
      {
        className: classNamesWithStyles,
        ...rest,
      },
      rest.children
    );
  };
}
