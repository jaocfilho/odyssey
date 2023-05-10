import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { CreateAppButton } from '.';

describe('CreateAppButton', () => {
  it('should render the trigger', () => {
    render(<CreateAppButton />);

    expect(screen.getByText('Create new app')).toBeInTheDocument();
  });
});
