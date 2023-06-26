import { renderHook } from '@testing-library/react-hooks';
import { afterEach, beforeEach, describe, it } from 'vitest';

import { useUploadFiles } from '.';
import { assertObjectProperties } from '@odyssey/tests';

describe('useUploadFiles', () => {
  const { result, rerender, unmount } = renderHook(() => useUploadFiles());

  beforeEach(() => {
    rerender();
  });

  afterEach(() => {
    unmount();
  });

  it('should return the correct object', () => {
    const properties = ['uploadFiles'];
    assertObjectProperties(properties, result.current);
  });
});
