import { RemovePrefix } from '@odyssey/type-utils';

/**
 * Removes a specified prefix from the keys of an object and returns a new object
 * with modified keys.
 *
 * @template T - The type of the input object.
 * @template Prefix - The type of the prefix to be removed from the keys.
 * @param {T} obj - The input object.
 * @param {Prefix} prefix - The prefix to be removed from the keys.
 * @returns {RemovePrefix<T, Prefix>} - A new object with modified keys
 * where the prefix has been removed.
 */
export function removePrefixFromKeys<
  T extends Record<string, any>,
  Prefix extends string
>(obj: T, prefix: Prefix): RemovePrefix<T, Prefix> {
  const modifiedObj: Record<string, any> = {};

  for (const key in obj) {
    if (key.startsWith(prefix)) {
      const modifiedKey = key.slice(prefix.length);
      modifiedObj[modifiedKey] = obj[key];
    } else {
      modifiedObj[key] = obj[key];
    }
  }

  return modifiedObj as RemovePrefix<T, Prefix>;
}
