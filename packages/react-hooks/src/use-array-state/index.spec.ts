import { renderHook } from '@testing-library/react-hooks';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import { assertObjectProperties } from '@odyssey/tests';
import { useArrayState } from '.';

describe('useArrayState', () => {
  const { result, rerender, unmount } = renderHook(() =>
    useArrayState<string>()
  );

  beforeEach(() => {
    rerender();
  });

  afterEach(() => {
    unmount();
  });

  it('should return an 2n tuple', () => {
    expect(result.current).toHaveLength(2);
  });

  it('should return an array on the first element', () => {
    expect(Array.isArray(result.current[0])).toBe(true);
  });

  it('should return an empty array on the first element', () => {
    expect(result.current[0]).toHaveLength(0);
  });

  it('should return an object on the second element', () => {
    expect(typeof result.current[1]).toBe('object');
  });

  it('should return the correct functions on the controller', () => {
    const properties = ['add', 'removeByIndex', 'remove', 'clear', 'set'];

    const controller = result.current[1];

    assertObjectProperties(properties, controller);

    expect(typeof controller.add).toBe('function');
    expect(typeof controller.removeByIndex).toBe('function');
    expect(typeof controller.remove).toBe('function');
    expect(typeof controller.clear).toBe('function');
    expect(typeof controller.set).toBe('function');
  });

  it('should add an element to the array', () => {
    const controller = result.current[1];

    controller.add('test');

    expect(result.current[0]).toHaveLength(1);
    expect(result.current[0][0]).toBe('test');
  });

  it('should add more than one element to the array', () => {
    const controller = result.current[1];

    controller.add('test', 'test2');

    expect(result.current[0]).toHaveLength(2);
    expect(result.current[0][0]).toBe('test');
    expect(result.current[0][1]).toBe('test2');
  });

  it('should remove an element from the given index', () => {
    const controller = result.current[1];

    controller.add('test', 'test2');
    controller.removeByIndex(0);

    expect(result.current[0]).toHaveLength(1);
    expect(result.current[0][0]).toBe('test2');
  });

  it('should clear the array', () => {
    const controller = result.current[1];

    controller.add('test', 'test2');
    controller.clear();

    expect(result.current[0]).toHaveLength(0);
  });

  it('should set the array', () => {
    const controller = result.current[1];

    controller.add('test', 'test2');
    controller.set(['test3']);

    expect(result.current[0]).toHaveLength(1);
    expect(result.current[0][0]).toBe('test3');
  });
});
