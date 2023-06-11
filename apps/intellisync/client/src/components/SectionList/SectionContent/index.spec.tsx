import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { SectionContent } from '.';

describe('SectionContent', () => {
  it('should render without crashing', () => {
    const { container } = render(<SectionContent>children</SectionContent>);

    expect(container).toMatchSnapshot();
  });
});
