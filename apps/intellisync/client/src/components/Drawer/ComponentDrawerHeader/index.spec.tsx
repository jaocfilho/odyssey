import { type ReactNode } from 'react';

import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { Dialog } from '@headlessui/react';

import { ComponentDrawerHeader } from '.';

const wrapper = ({ children }: { children: ReactNode }) => (
  <Dialog open={true} onClose={() => {}}>
    {children}
  </Dialog>
);

describe('ComponentDrawerHeader', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render a title', () => {
    render(<ComponentDrawerHeader title="anyTitle" />, {
      wrapper,
    });

    expect(screen.getByText('anyTitle')).toBeInTheDocument();
  });

  // it('should not render a subtitle if none is passed', () => {
  //   render(<ComponentDrawerHeader title="anyTitle" />, {
  //     wrapper,
  //   });

  //   expect(screen.getAllByRole('paragraph')).toHaveLength(1);
  // });

  // it('should render a subtitle if it is passed', () => {
  //   render(<ComponentDrawerHeader title="anyTitle" subTitle="anySubtitle" />, {
  //     wrapper,
  //   });

  //   expect(screen.getByText('anySubtitle')).toBeInTheDocument();
  // });
});
