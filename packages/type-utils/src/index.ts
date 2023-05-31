/**
 * Removes a specified prefix from the keys of a given object type.
 *
 * @template T - The input object type.
 * @template Prefix - The prefix string to be removed.
 *
 * @example
 * // Input type
 * type Person = {
 *   name: string;
 *   age: number;
 *   p_address: string;
 * };
 *
 * // Usage
 * type ModifiedPerson = RemovePrefix<Person, 'p_'>;
 * // Resulting type: { name: string; age: number; address: string; }
 */
export type RemovePrefix<T, Prefix extends string> = {
  [K in keyof T as K extends `${Prefix}${infer R}` ? R : K]: T[K];
};

/**
 * Represents an object type where each key of the original type `T`
 * can have a value of type `T[keyof T]` or `null`.
 *
 * @template T - The original type
 */
export type NullableRecord<T> = Record<keyof T, T[keyof T] | null>;
