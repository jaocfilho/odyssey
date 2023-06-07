import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { useFieldError } from '@/modules/forms/hooks/use-field-error';
import { ErrorMessage } from '.';

vi.mock('@/modules/forms/hooks/use-field-error', () => ({
  useFieldError: vi.fn(() => ({
    error: { message: 'Test error message' },
  })),
}));

describe('ErrorMessage', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render the error message when there is an error', () => {
    render(<ErrorMessage name="test" />);
    const errorMessage = screen.getByText('Test error message');
    expect(errorMessage).toBeInTheDocument();
  });

  it('should not render anything when there is no error', () => {
    vi.mocked(useFieldError).mockReturnValue({ error: undefined });

    render(<ErrorMessage name="test" />);
    const { container } = render(<ErrorMessage name="test" />);
    expect(container.firstChild).toBeNull();
  });
});
