import { cleanup, render } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { useFieldError } from '@/modules/forms/hooks/use-field-error';
import { ErrorIcon } from '.';

vi.mock('@/modules/forms/hooks/use-field-error', () => ({
  useFieldError: vi.fn(() => ({
    error: { message: 'Test error message' },
  })),
}));

describe('ErrorIcon', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render the error message when there is an error', () => {
    const { container } = render(<ErrorIcon name="test" />);
    expect(container.firstChild).not.toBeNull();
  });

  it('should not render anything when there is no error', () => {
    // @ts-ignore
    vi.mocked(useFieldError).mockReturnValue({ error: undefined });

    render(<ErrorIcon name="test" />);
    const { container } = render(<ErrorIcon name="test" />);
    expect(container.firstChild).toBeNull();
  });
});
