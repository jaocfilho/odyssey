import * as matchers from '@testing-library/jest-dom/matchers';

import { expect } from 'vitest';

import ResizeObserver from 'resize-observer-polyfill';

expect.extend(matchers);

global.ResizeObserver = ResizeObserver;
