export function addPrefixToKeys<T extends Record<string, any>>(
  prefix: string,
  obj: T
): { [K in keyof T as `${typeof prefix}${string & K}`]: T[K] } {
  return Object.entries(obj).reduce((result, [key, value]) => {
    const prefixedKey = `${prefix}${key}` as keyof T;

    return { ...result, [prefixedKey]: value };
  }, {} as { [K in keyof T as `${typeof prefix}${string & K}`]: T[K] });
}
