import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Domain } from '.';
import { FormInputWrapper } from '@/modules/test-helpers/wrappers';

describe('Domain', () => {
  it('should render', () => {
    render(<Domain />, {
      wrapper: FormInputWrapper,
    });

    const element = screen.getByLabelText('Domain');
    expect(element).toBeInTheDocument();
  });
});
