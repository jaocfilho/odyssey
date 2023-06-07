import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { DeleteChatbotSection } from '.';

vi.mock('@/lib/supabase/Provider', () => ({
  Provider: vi.fn(),
  useSupabase: vi.fn(() => ({
    supabase: vi.fn(),
  })),
}));

vi.mock('@/modules/navigation/hooks/use-navigation', () => ({
  useNavigation: vi.fn(() => ({
    redirectToChatbots: vi.fn(),
  })),
}));

const queryClient = new QueryClient();

describe('DeleteChatbotSection', () => {
  it('should render without crashing', () => {
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <DeleteChatbotSection id="any" />
      </QueryClientProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
