import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { Drawer } from '.';
import { Button } from '../Button';
import { assertButtonIsInTheDocument, clickButton } from '@odyssey/tests';

function renderComponent() {
  render(
    <Drawer
      title="Title"
      triggerComponent={(openDrawer) => (
        <Button onClick={openDrawer}>trigger component</Button>
      )}
      actionButton={(closerDrawer) => (
        <Button onClick={closerDrawer}>action button</Button>
      )}
    >
      content
    </Drawer>
  );
}

describe('Drawer', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render the trigger component', () => {
    renderComponent();

    assertButtonIsInTheDocument('trigger component');
  });

  it('should not render the title', () => {
    renderComponent();

    const titleElement = screen.queryByText('Title');
    expect(titleElement).not.toBeInTheDocument();
  });

  it('should render the title when the trigger component is clicked', async () => {
    renderComponent();

    await clickButton('trigger component');

    const titleElement = await screen.findByText('Title');
    expect(titleElement).toBeInTheDocument();
  });

  it('should not render the content', () => {
    renderComponent();

    const contentElement = screen.queryByText('content');
    expect(contentElement).not.toBeInTheDocument();
  });

  it('should render the content when the trigger component is clicked', async () => {
    renderComponent();

    await clickButton('trigger component');

    const contentElement = await screen.findByText('content');
    expect(contentElement).toBeInTheDocument();
  });

  it('should not render the action button', () => {
    renderComponent();

    const actionButtonElement = screen.queryByRole('button', {
      name: 'action button',
    });
    expect(actionButtonElement).not.toBeInTheDocument();
  });

  it('should render the action button when the trigger component is clicked', async () => {
    renderComponent();

    await clickButton('trigger component');

    const actionButtonElement = await screen.findByRole('button', {
      name: 'action button',
    });
    expect(actionButtonElement).toBeInTheDocument();
  });

  it('should close the drawer when closerDrawer is called', async () => {
    renderComponent();

    await clickButton('trigger component');
    await clickButton('action button');

    const titleElement = screen.queryByText('Title');
    expect(titleElement).not.toBeInTheDocument();
  });

  it('should have a subtitle if it is passed', async () => {
    render(
      <Drawer
        title="Title"
        subTitle="Subtitle"
        triggerComponent={(openDrawer) => (
          <Button onClick={openDrawer}>trigger component</Button>
        )}
        actionButton={(closerDrawer) => (
          <Button onClick={closerDrawer}>action button</Button>
        )}
      >
        content
      </Drawer>
    );

    await clickButton('trigger component');

    const subtitleElement = await screen.findByText('Subtitle');
    expect(subtitleElement).toBeInTheDocument();
  });

  it('should call onClose when the drawer is closed', async () => {
    const onClose = vi.fn();

    render(
      <Drawer
        title="Title"
        triggerComponent={(openDrawer) => (
          <Button onClick={openDrawer}>trigger component</Button>
        )}
        onClose={onClose}
        actionButton={(closerDrawer) => (
          <Button onClick={closerDrawer}>action button</Button>
        )}
      >
        content
      </Drawer>
    );

    await clickButton('trigger component');
    await clickButton('action button');

    expect(onClose).toHaveBeenCalled();
  });

  it('should not call onClose when the drawer is opened', async () => {
    const onClose = vi.fn();

    render(
      <Drawer
        title="Title"
        triggerComponent={(openDrawer) => (
          <Button onClick={openDrawer}>trigger component</Button>
        )}
        onClose={onClose}
        actionButton={(closerDrawer) => (
          <Button onClick={closerDrawer}>action button</Button>
        )}
      >
        content
      </Drawer>
    );

    await clickButton('trigger component');

    expect(onClose).not.toHaveBeenCalled();
  });
});
