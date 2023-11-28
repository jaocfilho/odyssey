import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { renderHook } from '@testing-library/react-hooks';

import { assertObjectProperties } from '@odyssey/tests';
import { useSupabase } from '@/lib/supabase/Provider';
import { baseSelectOrganizationById } from '../../api/base';
import { useBaseSelectOrganizationById } from '.';

vi.mock('@/lib/supabase/Provider', () => ({
  useSupabase: vi.fn(() => ({ supabase: {} })),
}));

vi.mock('../../api/base', () => ({
  baseSelectOrganizationById: vi.fn(),
}));

describe('useBaseSelectOrganizationById', () => {
  const { result, unmount, rerender } = renderHook(() =>
    useBaseSelectOrganizationById()
  );

  beforeEach(() => {
    rerender();
  });

  afterEach(() => {
    unmount();
  });

  it('should return the correct object', () => {
    const expectedProperties = ['selectOrganizationById'];
    assertObjectProperties(expectedProperties, result.current);
  });

  it('should callback baseSelectOrganizationById on selectOrganizationById call', () => {
    result.current.selectOrganizationById({ id: 'any' });
    expect(baseSelectOrganizationById).toHaveBeenCalled();
  });
});
