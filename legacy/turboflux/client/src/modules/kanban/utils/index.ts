import {
  insertItemAtIndex,
  removeItemAtIndex,
  isIndexOutOfBounds,
  IndexOutOfBoundError,
} from 'satellite';

export const moveItem = <TItem>(array: TItem[], from: number, to: number) => {
  const fromIsOutOfBound = isIndexOutOfBounds(array, from);
  const toIsOutOfBound = isIndexOutOfBounds(array, to);
  if (fromIsOutOfBound || toIsOutOfBound) {
    throw new IndexOutOfBoundError();
  }

  if (from === to) return array;

  const item = array[from];
  // removing the item to avoid duplicates
  const updatedArray = removeItemAtIndex(array, from);

  return insertItemAtIndex(updatedArray, item, to);
};
