import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { SubscriptionSidebarItem } from '.';

describe('SubscriptionSidebarItem', () => {
  it('should render without crashing', () => {
    render(<SubscriptionSidebarItem />);

    const element = screen.getByText('Subscription');
    expect(element).toBeInTheDocument();
  });
});
