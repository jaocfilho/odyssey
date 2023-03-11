import { describe, it } from 'vitest';

import { assertObjectProperties } from '@satellite/tests';
import { renderHook } from '@testing-library/react-hooks';
import { useKanbanReducer } from '.';

describe('useKanbanReducer', () => {
  it('should return the correct object', () => {
    const { result } = renderHook(() => useKanbanReducer());

    const expectedProperties = ['kanban', 'dispatch'];

    assertObjectProperties(expectedProperties, result.current);
  });
});
