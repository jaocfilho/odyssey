import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { SecondarySidebarSection } from '.';

describe('SecondarySidebarSection', () => {
  it('should render without crashing', () => {
    const { container } = render(
      <SecondarySidebarSection>SecondarySidebarSection</SecondarySidebarSection>
    );

    expect(container).toMatchSnapshot();
  });
});
