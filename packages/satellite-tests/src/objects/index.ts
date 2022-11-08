import { expect } from "vitest";

/**
 * Fail unless all the object properties matches the elements from
 * a given properties array.
 * 
 * @param properties An array of strings.
 * @param object The object to be tested.
 * 
 */
 export const assertObjectProperties = (
  properties: readonly string[],
  object: Object
) => {
  expect(Object.keys(object).length).toEqual(properties.length);

  properties.map((property) => expect(object).toHaveProperty(property));
};
