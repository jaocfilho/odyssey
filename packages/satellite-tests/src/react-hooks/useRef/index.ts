import { useRef } from 'react';

import { renderHook } from '@testing-library/react-hooks';

export const useRefStub = renderHook(() => useRef<HTMLElement>());
