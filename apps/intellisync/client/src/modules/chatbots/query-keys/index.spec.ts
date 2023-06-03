import { describe, expect, it } from 'vitest';

import { chatbotsQueryKeys } from '.';

describe('chatbotsQueryKeys', () => {
  it('should return the base key', () => {
    const baseKey = chatbotsQueryKeys.base;
    expect(baseKey).toEqual(['chatbots']);
  });

  it('should return the all chatbots key', () => {
    const allKey = chatbotsQueryKeys.all();
    expect(allKey).toEqual(['chatbots']);
  });
});
