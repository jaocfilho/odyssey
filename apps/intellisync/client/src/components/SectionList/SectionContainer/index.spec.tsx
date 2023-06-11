import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { SectionContainer } from '.';

describe('SectionContainer', () => {
  it('should render without crashing', () => {
    const { container } = render(<SectionContainer>children</SectionContainer>);

    expect(container).toMatchSnapshot();
  });
});
