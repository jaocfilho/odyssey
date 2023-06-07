import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { DeleteChatbotSection } from '.';

describe('DeleteChatbotSection', () => {
  it('should render without crashing', () => {
    const { container } = render(<DeleteChatbotSection />);
    expect(container).toMatchSnapshot();
  });
});
