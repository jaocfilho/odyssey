import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { SecondarySidebarSection } from '.';

describe('SecondarySidebarSection', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render without crashing', () => {
    const { container } = render(
      <SecondarySidebarSection>SecondarySidebarSection</SecondarySidebarSection>
    );

    expect(container).toMatchSnapshot();
  });

  it('should not have border if it is the last section', () => {
    const { container } = render(
      <SecondarySidebarSection isLastSection>
        SecondarySidebarSection
      </SecondarySidebarSection>
    );

    expect(container).toMatchSnapshot();
  });
});
