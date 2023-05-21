import { describe, it, assertType } from 'vitest';

import { assertObjectProperties } from '@odyssey/tests';
import { addPrefixToKeys } from '.';

describe('addPrefixToKeys', () => {
  it('should add the given prefix to every key in the object', () => {
    const prefix = 'prefix_';
    const obj = {
      name: 'John',
      age: 25,
    };

    const result = addPrefixToKeys(prefix, obj);
    const expectedProperties = ['prefix_name', 'prefix_age'];
    assertObjectProperties(expectedProperties, result);
  });

  it('should return the correct type', () => {
    const prefix = 'prefix_';
    const obj = {
      name: 'John',
      age: 25,
    };

    type ExpectedType = {
      prefix_name: string;
      prefix_age: number;
    };

    const result = addPrefixToKeys(prefix, obj);

    // @ts-expect-error
    assertType<ExpectedType>(result);
  });
});
