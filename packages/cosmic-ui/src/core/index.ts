import React from 'react';

import { classNames } from '../utils';
import { Styles } from './tokens';

type CreateElementParams = Parameters<typeof React.createElement>;

type ComponentType = CreateElementParams[0];

type CustomComponentProps = CreateElementParams[1] & {
  className?: string;
  children?: CreateElementParams[2];
};

type StyleKeys<T extends Styles> = {
  [K in keyof T as K extends 'default' ? never : K]: T[K] extends object
    ? keyof T[K]
    : never;
};

type ComponentProps<T extends Styles> = {
  [K in keyof StyleKeys<T>]: StyleKeys<T>[K];
} & CustomComponentProps;

type AvailableStyleProps<T extends Styles> = Array<keyof T>;

/**
 * Retrieves the style props from a given styles object.
 * @param styles - The styles object.
 * @returns An array of keys representing the style props.
 */
export function getStyleProps<T extends Styles>(styles: T) {
  return Object.keys(styles).filter(
    (key) => typeof styles[key as keyof T] === 'object'
  ) as AvailableStyleProps<T>;
}

/**
 * Retrieves the style variant value from the provided styles object based on the given props and style property.
 *
 * @param {T} styles - The styles object containing the style variants.
 * @param {ComponentProps<T>} props - The props object containing the variant key.
 * @param {keyof T} styleProps - The style property to retrieve the variant from.
 * @returns {string} - The style variant value.
 */
function getStylePropsVariant<T extends Styles>(
  styles: T,
  props: ComponentProps<T>,
  styleProps: keyof T
) {
  const variantStyles = styles[styleProps];
  const variantKey = props[styleProps as keyof ComponentProps<T>];
  return variantStyles[variantKey as keyof typeof variantStyles] as string;
}

/**
 * Retrieves the class names for the given styles and component props.
 *
 * @param styles - The styles object.
 * @param props - The component props.
 * @returns An array of class names.
 */
function getStylesClassNames<T extends Styles>(
  styles: T,
  props: ComponentProps<T>
) {
  const availableStyleProps = getStyleProps(styles);

  const classNamesArray = availableStyleProps.map((styleProps) =>
    getStylePropsVariant(styles, props, styleProps)
  );

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
