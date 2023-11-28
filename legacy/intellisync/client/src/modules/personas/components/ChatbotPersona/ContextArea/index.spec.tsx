import { describe, expect, it } from 'vitest';

import { formatContextToFormValues } from '.';
import { assertObjectProperties } from '@odyssey/tests';

describe('formatContextToFormValues', () => {
  it('should return the correct object', () => {
    const properties = ['context'];

    const context = ['context1', 'context2', 'context3'];
    const result = formatContextToFormValues(context);

    assertObjectProperties(properties, result);
  });

  it('should return an array of objects with the value property', () => {
    const context = ['context1', 'context2', 'context3'];
    const result = formatContextToFormValues(context);
    expect(result.context).toEqual([
      { value: 'context1' },
      { value: 'context2' },
      { value: 'context3' },
    ]);
  });
});
