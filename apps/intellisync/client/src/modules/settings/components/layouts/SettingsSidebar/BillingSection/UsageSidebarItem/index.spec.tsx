import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { UsageSidebarItem } from '.';

describe('UsageSidebarItem', () => {
  it('should render without crashing', () => {
    render(<UsageSidebarItem />);

    const element = screen.getByText('Usage');
    expect(element).toBeInTheDocument();
  });
});
