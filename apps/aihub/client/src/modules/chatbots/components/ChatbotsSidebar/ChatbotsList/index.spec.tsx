import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import { ChatbotsListItem } from '../ChatbotsListItem';
import { ChatbotsList } from '.';

vi.mock('../ChatbotsListItem', () => ({
  ChatbotsListItem: () => <li>anyItem</li>,
}));

describe('ChatbotsList', () => {
  it('should render a list item for each chatbot', () => {
    const chatbots = [
      { id: '1', name: 'any' },
      { id: '2', name: 'any' },
    ];

    render(<ChatbotsList chatbots={chatbots} />);

    const elements = screen.queryAllByRole('listitem');
    expect(elements).toHaveLength(chatbots.length);
  });
});
