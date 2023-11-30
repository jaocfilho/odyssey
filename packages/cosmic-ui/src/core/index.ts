import React from 'react';

import { classNames } from '../utils';
import { Styles } from './tokens';

type CreateElementParams = Parameters<typeof React.createElement>;

type ComponentType = CreateElementParams[0];

type ComponentProps = CreateElementParams[1] & {
  className?: string;
  children?: CreateElementParams[2];
};

type StyleKeys<T extends Styles> = {
  [K in keyof T as K extends 'default' ? never : K]: T[K] extends object
    ? keyof T[K]
    : never;
};

type StyleProps<T extends Styles> = {
  [K in keyof StyleKeys<T>]: StyleKeys<T>[K];
};

type CustomComponentProps<T extends Styles> = {
  [K in keyof StyleKeys<T>]: StyleKeys<T>[K];
} & ComponentProps;

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
 * @param {CustomComponentProps<T>} props - The props object containing the variant key.
 * @param {keyof T} styleProps - The style property to retrieve the variant from.
 * @returns {string} - The style variant value.
 */
function getStylePropsVariant<T extends Styles>(
  styles: T,
  props: CustomComponentProps<T>,
  styleProps: keyof T
) {
  const variantStyles = styles[styleProps];
  const variantKey = props[styleProps as keyof CustomComponentProps<T>];
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
  props: CustomComponentProps<T>
) {
  const availableStyleProps = getStyleProps(styles);

  const classNamesArray = availableStyleProps.map((styleProps) =>
    getStylePropsVariant(styles, props, styleProps)
  );

  return classNamesArray;
}

export function createComponent<S extends Styles>(
  componentType: ComponentType,
  styles = { default: '' } as S
) {
  const defaultClassName = styles.default!;

  return <P extends ComponentProps>(props: P & StyleProps<S>) => {
    const stylesClassNames = getStylesClassNames(styles, props);

    const { className, ...rest } = props;

    const classNamesWithStlyes = classNames(
      defaultClassName,
      ...stylesClassNames,
      className ?? ''
    );

    return React.createElement(
      componentType,
      {
        className: classNamesWithStlyes,
        ...rest,
      },
      rest.children
    );
  };
}
