import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { UserMessage } from '.';

describe('UserMessage', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render without crashing', () => {
    const { container } = render(<UserMessage message="message" />);

    expect(container).toMatchSnapshot();
  });

  it('should render the message', () => {
    render(<UserMessage message="message" />);

    const message = screen.getByText('message');
    expect(message).toBeInTheDocument();
  });
});
