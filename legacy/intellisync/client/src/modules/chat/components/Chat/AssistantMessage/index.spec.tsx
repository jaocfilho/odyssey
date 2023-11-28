import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { AssistantMessage } from '.';

describe('AssistantMessage', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render without crashing', () => {
    const { container } = render(<AssistantMessage message="message" />);

    expect(container).toMatchSnapshot();
  });

  it('should render the message', () => {
    render(<AssistantMessage message="message" />);

    const message = screen.getByText('message');
    expect(message).toBeInTheDocument();
  });
});
