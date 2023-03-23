import { describe, it, afterEach, expect, vi } from 'vitest';

import { render, screen, cleanup } from '@testing-library/react';

import { NavIcon } from '../NavIcon';
import { NavItem } from '.';

vi.mock('../NavIcon', () => ({
  NavIcon: vi.fn(() => null),
}));

describe('NavItem', () => {
  it('should render the item name', () => {
    render(
      <NavItem
        name="item name"
        current={false}
        href="#"
        // @ts-ignore
        Icon={vi.fn(() => null)}
      />
    );

    expect(screen.getByText('item name')).toBeInTheDocument();
  });

  it('should have a grey text if it is not the current item', () => {
    render(
      <NavItem
        name="item name"
        current={false}
        href="#"
        // @ts-ignore
        Icon={vi.fn(() => null)}
      />
    );

    expect(screen.getByRole('link')).toHaveClass('text-gray-400');
  });

  it('should have a white text if it is not the current item', () => {
    render(
      <NavItem
        name="item name"
        current={true}
        href="#"
        // @ts-ignore
        Icon={vi.fn(() => null)}
      />
    );

    expect(screen.getByRole('link')).toHaveClass('text-white');
  });
});
