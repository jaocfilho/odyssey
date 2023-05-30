import { describe, expect, it } from 'vitest';

import { removePrefixFromKeys } from '.';

describe('removePrefixFromKeys', () => {
  it('should remove the prefix from the object keys', () => {
    const obj = {
      p_name: 'John',
      p_age: 30,
      p_address: '123 Main St',
    };

    const result = removePrefixFromKeys(obj, 'p_');

    expect(result).toEqual({
      name: 'John',
      age: 30,
      address: '123 Main St',
    });
  });

  it('should keep the original key if it does not have the prefix', () => {
    const obj = {
      p_name: 'John',
      p_age: 30,
      not_prefix_address: '123 Main St',
    };

    const result = removePrefixFromKeys(obj, 'p_');

    expect(result).toEqual({
      name: 'John',
      age: 30,
      not_prefix_address: '123 Main St',
    });
  });
});
