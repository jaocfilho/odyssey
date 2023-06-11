import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { SectionListComponent } from '.';

describe('SectionListComponent', () => {
  it('should render without crashing', () => {
    const { container } = render(
      <SectionListComponent>children</SectionListComponent>
    );

    expect(container).toMatchSnapshot();
  });
});
