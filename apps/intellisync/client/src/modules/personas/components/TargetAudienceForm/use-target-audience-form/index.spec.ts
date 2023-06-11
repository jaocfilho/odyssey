import { renderHook } from '@testing-library/react-hooks';
import { afterEach, beforeEach, describe, it } from 'vitest';

import { useTargetAudienceForm } from '.';
import { assertObjectProperties } from '@odyssey/tests';

describe('useTargetAudienceForm', () => {
  const { result, rerender, unmount } = renderHook(() =>
    useTargetAudienceForm({ defaultValues: { target_audience: 'any' } })
  );

  beforeEach(() => {
    rerender();
  });

  afterEach(() => {
    unmount();
  });

  it('should return the correct object', () => {
    const properties = ['methods', 'customMethods'];
    assertObjectProperties(properties, result.current);
  });
});
