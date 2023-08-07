import { useCallback, useState } from 'react';

type Predicate<T> = (value: T, index: number, obj: T[]) => boolean;

type ArrayStateController<T> = {
  add: (...items: T[]) => void;
  removeByIndex: (index: number) => void;
  remove: (predicate: Predicate<T>) => void;
  filter: (predicate: Predicate<T>) => void;
  clear: () => void;
  set: (items: T[]) => void;
};

type ArrayState<T> = [T[], ArrayStateController<T>];

/**
 * A hook that manages an array state.
 *
 * @example
 * const [array, controller] = useArrayState();
 *
 * controller.add('test');
 * controller.removeByIndex(0);
 * controller.remove((item) => item === 'item');
 * controller.filter((item) => item === 'item');
 * controller.clear();
 * controller.set(['test2']);
 *
 */
export function useArrayState<T>(): ArrayState<T> {
  const [array, setArray] = useState<T[]>([]);

  const add = useCallback(
    (...items: T[]) => {
      setArray((prev) => [...prev, ...items]);
    },
    [setArray]
  );

  const removeByIndex = useCallback(
    (index: number) => {
      setArray((prev) => {
        const newArray = [...prev];
        newArray.splice(index, 1);
        return newArray;
      });
    },
    [setArray]
  );

  const remove = useCallback(
    (predicate: Predicate<T>) => {
      setArray((prev) => {
        const newArray = [...prev];
        const index = newArray.findIndex(predicate);
        if (index === -1) {
          return newArray;
        }
        newArray.splice(index, 1);
        return newArray;
      });
    },
    [setArray]
  );

  const filter = useCallback(
    (predicate: Predicate<T>) => {
      setArray((prev) => {
        const newArray = [...prev];
        return newArray.filter(predicate);
      });
    },
    [setArray]
  );

  const clear = useCallback(() => setArray([]), [setArray]);

  const set = useCallback((items: T[]) => setArray(items), [setArray]);

  const controller = {
    add,
    removeByIndex,
    remove,
    filter,
    clear,
    set,
  };

  return [array, controller];
}
