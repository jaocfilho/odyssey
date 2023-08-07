import { useCallback, useState } from 'react';

type ArrayStateController<T> = {
  add: (...items: T[]) => void;
  removeByIndex: (index: number) => void;
  remove: (index: number) => void;
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
 * controller.remove(0);
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
    (index: number) => {
      setArray((prev) => {
        const newArray = [...prev];
        newArray.splice(index, 1);
        return newArray;
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
    clear,
    set,
  };

  return [array, controller];
}
