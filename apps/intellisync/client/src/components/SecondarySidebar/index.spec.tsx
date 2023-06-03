import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import { SecondarySidebar } from '.';

describe('SecondarySidebar', () => {
  const headerText = 'Sidebar Header';
  const contentText = 'Content';

  beforeEach(() => {
    render(
      <SecondarySidebar header={headerText}>
        <p>{contentText}</p>
      </SecondarySidebar>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it('renders header correctly', () => {
    const headerElement = screen.getByText(headerText);
    expect(headerElement).toBeInTheDocument();
  });

  it('renders children content correctly', () => {
    const contentElement = screen.getByText(contentText);
    expect(contentElement).toBeInTheDocument();
  });

  it('should have the correct width', () => {
    const sidebarElement = screen.getByRole('secondarysidebar');

    expect(sidebarElement).toHaveClass('w-64');
  });
});
