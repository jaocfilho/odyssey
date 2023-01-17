/** Helper functions meant to be used by `useScroll` */

export const updateScrollPosition = <T extends HTMLElement>(
  element: T,
  direction: 'left' | 'top',
  value: number
) => {
  switch (direction) {
    case 'left':
      element.scrollLeft = value;
      break;
    case 'top':
      element.scrollTop = value;
      break;
    default:
      throw new Error(`Invalid direction: ${direction}`);
  }
  return element;
};

export const elementIsHtmlElement = <T extends HTMLElement>(
  element: T | null
): element is T => {
  return element !== null;
};
