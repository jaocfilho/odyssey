/**
 * Extracts specified keys from an object and returns a new object containing only those keys.
 *
 * @template T - The type of the input object.
 * @template K - The union of keys to extract from the input object.
 * @param {T} obj - The input object.
 * @param {K[]} keys - An array of keys to extract from the object.
 * @returns {Pick<T, K>} - A new object with only the specified keys.
 */
export function extractKeysFromObject<
  T extends Record<string, any>,
  K extends keyof T
>(obj: T, keys: K[]): Pick<T, K> {
  const extracted: Partial<Pick<T, K>> = {};

  keys.forEach((key) => {
    if (obj.hasOwnProperty(key)) {
      extracted[key] = obj[key];
    }
  });

  return extracted as Pick<T, K>;
}
