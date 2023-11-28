import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { SecondarySidebarItem } from '.';

describe('SecondarySidebarItem', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render correctly when current is false', () => {
    const { container } = render(
      <SecondarySidebarItem>item</SecondarySidebarItem>
    );

    expect(container).toMatchSnapshot();
  });

  it('should render correctly when current is true', () => {
    const { container } = render(
      <SecondarySidebarItem current>item</SecondarySidebarItem>
    );

    expect(container).toMatchSnapshot();
  });
});
