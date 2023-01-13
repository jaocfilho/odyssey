import { useRef } from 'react';

import { renderHook } from '@testing-library/react-hooks';

import { vi } from 'vitest';

export const useRefStub = renderHook(() => useRef<HTMLElement>());

export const useRefMock = vi.fn(() => ({
  current: {},
}));
