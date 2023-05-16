import { renderHook } from '@testing-library/react-hooks';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { assertObjectProperties } from '@odyssey/tests';
import { useBaseHandleMutation } from '.';

describe('useBaseHandleMutation', () => {
  const onMutate = vi.fn();

  const { result, unmount, waitFor } = renderHook(() =>
    useBaseHandleMutation({ onMutate })
  );

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    unmount();
  });

  it('should return the correct object', () => {
    const properties = [
      'mutationParams',
      'addRefinementToParams',
      'addAppToParams',
      'handleMutation',
    ];
    assertObjectProperties(properties, result.current);
  });

  it('should be null as initial state', () => {
    expect(result.current.mutationParams).toBeNull();
  });

  it('should update the correct fields on addAppToParams call', () => {
    result.current.addAppToParams({
      name: 'anyName',
      model: 'anyModel',
      description: 'anyDescription',
    });

    waitFor(() => {
      expect(result.current.mutationParams?.p_app_name).toEqual('anyName');
      expect(result.current.mutationParams?.p_app_model).toEqual('anyModel');
      expect(result.current.mutationParams?.p_app_description).toEqual(
        'anyDescription'
      );
    });
  });

  it('should update the correct fields on addRefinementToParams call', () => {
    result.current.addRefinementToParams({
      temperature: 1,
      vibe: 'anyVibe',
    });

    waitFor(() => {
      expect(result.current.mutationParams?.p_gpt_temperature).toEqual(1);
      expect(result.current.mutationParams?.p_gpt_vibe).toEqual('anyVibe');
    });
  });

  it('should keep part of the oldstate', () => {
    result.current.addAppToParams({
      name: 'anyName',
      model: 'anyModel',
      description: 'anyDescription',
    });

    result.current.addRefinementToParams({
      temperature: 1,
      vibe: 'anyVibe',
    });

    waitFor(() => {
      expect(result.current.mutationParams?.p_app_name).toEqual('anyName');
      expect(result.current.mutationParams?.p_app_model).toEqual('anyModel');
      expect(result.current.mutationParams?.p_app_description).toEqual(
        'anyDescription'
      );
      expect(result.current.mutationParams?.p_gpt_temperature).toEqual(1);
      expect(result.current.mutationParams?.p_gpt_vibe).toEqual('anyVibe');
    });
  });

  it('should not call onMutate if mutationParams is null', () => {
    result.current.handleMutation();
    expect(onMutate).not.toHaveBeenCalled();
  });

  it('should call onMutate if mutationParams is not null', () => {
    result.current.addAppToParams({ name: 'anyName', model: 'anyModel' });
    result.current.handleMutation();

    waitFor(() => {
      expect(onMutate).toHaveBeenCalledWith({
        name: 'anyName',
        model: 'anyModel',
      });
    });
  });
});
