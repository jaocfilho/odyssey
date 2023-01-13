/** Helper functions meant to be used by `useScroll` */

export const updateScrollPosition = <T extends HTMLElement>(
  element: T,
  direction: 'left' | 'top',
  value: number
) => {
  if (direction === 'left') {
    element.scrollLeft = value;
  }

  if (direction === 'top') {
    element.scrollTop = value;
  }

  return element;
};

export const elementIsHtmlElement = <T extends HTMLElement>(
  element: T | null
): element is T => {
  return element !== null;
};
