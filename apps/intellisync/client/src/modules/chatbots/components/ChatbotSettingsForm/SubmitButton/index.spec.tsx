import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { ChatbotSettingsFormSubmitButton } from '.';
import { assertButtonIsInTheDocument } from '@odyssey/tests';

describe('ChatbotSettingsFormSubmitButton', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render', () => {
    render(<ChatbotSettingsFormSubmitButton />);

    assertButtonIsInTheDocument('Save');
  });

  it('should reference the correct form', () => {
    render(<ChatbotSettingsFormSubmitButton />);

    const button = screen.getByRole('button');

    expect(button).toHaveAttribute('form', 'chatbotSettingsForm');
  });
});
