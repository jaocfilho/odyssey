import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { ChatbotDetailsHeader } from '.';

describe('ChatbotDetailsHeader', () => {
  it('should render the chatbot name', () => {
    render(<ChatbotDetailsHeader name="Django assistant" />);

    const element = screen.getByText('Django assistant');
    expect(element).toBeInTheDocument();
  });
});
