import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { TargetAudience } from '.';
import { FormInputWrapper } from '@/modules/test-helpers/wrappers';

describe('TargetAudience', () => {
  it('should render', () => {
    render(<TargetAudience />, {
      wrapper: FormInputWrapper,
    });

    const element = screen.getByLabelText('Target audience');
    expect(element).toBeInTheDocument();
  });
});
