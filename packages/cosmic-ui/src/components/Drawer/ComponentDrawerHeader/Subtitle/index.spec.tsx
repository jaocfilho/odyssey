import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Subtitle } from '.';

describe('Subtitle', () => {
  it('should render the subtitle', () => {
    render(<Subtitle subTitle="anySubtitle" />);
    expect(screen.getByText('anySubtitle')).toBeInTheDocument();
  });
});
