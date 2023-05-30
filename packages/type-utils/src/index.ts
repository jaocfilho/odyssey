export type RemovePrefix<T, Prefix extends string> = {
  [K in keyof T as K extends `${Prefix}${infer R}` ? R : K]: T[K];
};
