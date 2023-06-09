import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { FormRow } from '.';

describe('FormRow', () => {
  it('should render without crashing', () => {
    const { container } = render(<FormRow>children</FormRow>);
    expect(container).toMatchSnapshot();
  });
});
