import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { ComponentDrawerTrigger } from '.';

describe('ComponentDrawerTrigger', () => {
  const openDrawerFn = vi.fn();

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render the trigger', () => {
    render(
      <ComponentDrawerTrigger
        openDrawer={openDrawerFn}
        trigger={(openDrawer) => (
          <button onClick={openDrawer}>anyButton</button>
        )}
      />
    );

    expect(screen.getByText('anyButton')).toBeInTheDocument();
  });

  it('should call openDrawer', async () => {
    render(
      <ComponentDrawerTrigger
        openDrawer={openDrawerFn}
        trigger={(openDrawer) => (
          <button onClick={openDrawer}>anyButton</button>
        )}
      />
    );

    const button = screen.getByText('anyButton');
    await userEvent.click(button);

    expect(openDrawerFn).toHaveBeenCalled();
  });
});
