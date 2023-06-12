import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { TargetAudienceSection } from '.';

describe('TargetAudienceSection', () => {
  it('should render with target_audience is null', () => {
    render(<TargetAudienceSection target_audience={null} />);

    const title = screen.getByRole('heading', { name: 'Target audience' });
    expect(title).toBeInTheDocument();
  });
});
