import { renderHook } from '@testing-library/react-hooks';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { assertObjectProperties } from '@odyssey/tests';
import { useSupabase } from '@/lib/supabase/Provider';
import {
  baseSelectMessageCreditsByOrganizationId,
  type BaseSelectMessageCreditsByOrganizationIdParams,
} from '../../api/base';
import { useBaseSelectMessageCreditsByOrganizationId } from '.';

vi.mock('@/lib/supabase/Provider', () => ({
  useSupabase: vi.fn(() => ({
    supabase: {},
  })),
}));

vi.mock('../../api/base', () => ({
  baseSelectMessageCreditsByOrganizationId: vi.fn(),
}));

describe('useBaseSelectMessageCreditsByOrganizationId', () => {
  const { result, rerender, unmount } = renderHook(() =>
    useBaseSelectMessageCreditsByOrganizationId()
  );

  beforeEach(() => {
    rerender();
  });

  afterEach(() => {
    unmount();
  });

  it('should return the correct object', () => {
    const properties = ['selectMessageCreditsByOrganizationId'];
    assertObjectProperties(properties, result.current);
  });

  it('should call baseSelectMessageCreditsByOrganizationId with the correct params', () => {
    const { supabase } = useSupabase();
    const { selectMessageCreditsByOrganizationId } = result.current;

    const params: BaseSelectMessageCreditsByOrganizationIdParams = {
      organizationId: '1',
    };
    selectMessageCreditsByOrganizationId(params);

    expect(baseSelectMessageCreditsByOrganizationId).toHaveBeenCalledWith(
      params,
      supabase
    );
  });
});
