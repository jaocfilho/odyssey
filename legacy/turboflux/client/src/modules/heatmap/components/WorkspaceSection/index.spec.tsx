import { render, screen } from '@testing-library/react';

import { describe, expect, it } from 'vitest';

import { WorkspaceSection } from '.';

describe('WorkspaceSection', () => {
  it('should render the workspace name as text', () => {
    const workspace = 'test-repo';
    render(<WorkspaceSection workspace={workspace} />);
    expect(screen.getByText(workspace)).toBeInTheDocument();
  });
});
