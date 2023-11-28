import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';

import { TraitsAreaSection } from './TraitsAreaSection';
import { TraitsArea, traitsAreaSections } from '.';

vi.mock('./TraitsAreaSection', () => ({
  TraitsAreaSection: vi.fn(),
}));

describe('TraitsArea', () => {
  it('should render a TraitsAreaSection for each section in the array', () => {
    render(<TraitsArea persona={{} as any} />);

    expect(TraitsAreaSection).toHaveBeenCalledTimes(traitsAreaSections.length);
  });
});
