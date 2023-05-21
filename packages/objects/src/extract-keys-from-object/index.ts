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
