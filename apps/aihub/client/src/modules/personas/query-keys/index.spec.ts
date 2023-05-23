import { describe, expect, it } from 'vitest';

import { personasQueryKeys } from '.';

describe('personasQueryKeys', () => {
  it('should return the base key', () => {
    const baseKey = personasQueryKeys.base;
    expect(baseKey).toEqual(['personas']);
  });

  it('should return the all personas key', () => {
    const allKey = personasQueryKeys.all();
    expect(allKey).toEqual(['personas']);
  });

  it('should return the persona key with the specified id', () => {
    const personaId = '123';
    const personaKey = personasQueryKeys.persona(personaId);
    expect(personaKey).toEqual(['personas', personaId]);
  });
});
