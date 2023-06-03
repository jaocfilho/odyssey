import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { renderHook } from '@testing-library/react-hooks';

import { useBaseDrawerForms } from '.';

describe('useBaseDrawerForms', () => {
  const submitCreateAppForm = vi.fn();
  const submitGpt35RefinementForm = vi.fn();
  const resetCreateAppForm = vi.fn();
  const resetGpt35RefinementForm = vi.fn();

  const { result, unmount } = renderHook(() =>
    useBaseDrawerForms({
      submitCreateAppForm,
      resetCreateAppForm,
      submitGpt35RefinementForm,
      resetGpt35RefinementForm,
    })
  );

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    unmount();
  });

  it('calls the submitCreateAppForm and submitGpt35RefinementForm when submitForms is called', () => {
    result.current.submitForms();

    expect(submitCreateAppForm).toHaveBeenCalledTimes(1);
    expect(submitGpt35RefinementForm).toHaveBeenCalledTimes(1);
  });

  it('calls the resetCreateAppForm and resetGpt35RefinementForm when resetForms is called', () => {
    result.current.resetForms();

    expect(resetCreateAppForm).toHaveBeenCalledTimes(1);
    expect(resetGpt35RefinementForm).toHaveBeenCalledTimes(1);
  });
});
