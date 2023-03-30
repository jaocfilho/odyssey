import { describe, it, afterEach, beforeEach, expect } from 'vitest';

import { renderHook } from '@testing-library/react-hooks';

import { assertObjectProperties } from '@satellite/tests';
import { useKanbanReducer } from '.';

describe('useKanbanReducer', () => {
  const { result, unmount, rerender } = renderHook(() => useKanbanReducer());

  beforeEach(() => {
    rerender();
  });

  afterEach(() => {
    unmount();
  });

  it('should return the correct object', () => {
    const expectedProperties = [
      'kanban',
      'addCard',
      'addColumn',
      'removeCard',
      'removeColumn',
      'updateCard',
      'updateColumn',
      'changeCardOrder',
      'changeColumnOrder',
      'moveCard',
    ];

    assertObjectProperties(expectedProperties, result.current);
  });

  it('should return a kanban object', () => {
    expect(result.current.kanban).toBeTypeOf('object');
  });

  it('should return an addCard function', () => {
    expect(result.current.addCard).toBeTypeOf('function');
  });

  it('should return an addColumn function', () => {
    expect(result.current.addColumn).toBeTypeOf('function');
  });

  it('should return an removeCard function', () => {
    expect(result.current.removeCard).toBeTypeOf('function');
  });

  it('should return an removeColumn function', () => {
    expect(result.current.removeColumn).toBeTypeOf('function');
  });

  it('should return an updateCard function', () => {
    expect(result.current.updateCard).toBeTypeOf('function');
  });

  it('should return an updateColumn function', () => {
    expect(result.current.updateColumn).toBeTypeOf('function');
  });

  it('should return an changeCardOrder function', () => {
    expect(result.current.changeCardOrder).toBeTypeOf('function');
  });

  it('should return an changeColumnOrder function', () => {
    expect(result.current.changeColumnOrder).toBeTypeOf('function');
  });

  it('should return an moveCard function', () => {
    expect(result.current.moveCard).toBeTypeOf('function');
  });
});
