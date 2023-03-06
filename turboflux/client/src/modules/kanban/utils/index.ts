import { insertItemAtIndex, removeItemAtIndex } from 'satellite';

export const moveItem = <TItem>(array: TItem[], from: number, to: number) => {
  const item = array[from];
  // removing the item to avoid duplicates
  const updatedArray = removeItemAtIndex(array, from);

  return insertItemAtIndex(updatedArray, item, to);
};
