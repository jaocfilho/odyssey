import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Topic } from '.';
import { FormInputWrapper } from '@/modules/test-helpers/wrappers';

describe('Topic', () => {
  it('should render', () => {
    render(<Topic />, {
      wrapper: FormInputWrapper,
    });

    const element = screen.getByLabelText('Topic');
    expect(element).toBeInTheDocument();
  });
});
