import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { ChatbotsListLoading } from '.';

describe('ChatbotsListLoading component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render without crashing', () => {
    const { container } = render(<ChatbotsListLoading />);
    expect(container).toMatchSnapshot();
  });

  it('should render 5 skeleton elements', () => {
    render(<ChatbotsListLoading />);
    expect(screen.queryAllByRole('skeleton')).toHaveLength(5);
  });
});
