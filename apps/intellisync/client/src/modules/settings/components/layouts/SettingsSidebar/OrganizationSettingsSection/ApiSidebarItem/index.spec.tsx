import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ApiSidebarItem } from '.';

describe('ApiSidebarItem', () => {
  it('should render without crashing', () => {
    render(<ApiSidebarItem />);

    const element = screen.getByText('API');
    expect(element).toBeInTheDocument();
  });
});
