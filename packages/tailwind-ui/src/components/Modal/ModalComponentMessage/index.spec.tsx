import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ModalComponentMessage } from '.';

describe('ModalComponentMessage', () => {
  it('should render', () => {
    render(<ModalComponentMessage message="any" />);

    const element = screen.getByText('any');
    expect(element).toBeInTheDocument();
  });
});
