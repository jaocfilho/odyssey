import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ChatbotsCount } from '.';

describe('ChatbotsCount', () => {
  it('should render the chatbots count', () => {
    render(<ChatbotsCount chatbotsCount={0} />);
    const element = screen.getByText('Chatbots (0)');
    expect(element).toBeInTheDocument();
  });
});
