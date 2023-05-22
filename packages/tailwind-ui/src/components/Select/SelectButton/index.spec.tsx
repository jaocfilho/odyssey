import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import { Listbox } from '@headlessui/react';

import { SelectButton } from '.';

describe('SelectButton', () => {
  afterEach(() => {
    cleanup();
  });

  it('should display the placeholder with no selected item is passed', () => {
    render(
      <Listbox>
        <SelectButton placeholder="placeholder" />
      </Listbox>
    );

    const buttonElement = screen.getByText('placeholder');
    expect(buttonElement).toBeInTheDocument();
  });

  it('should display the selected item label', () => {
    render(
      <Listbox>
        <SelectButton selectedItem={{ label: 'anyLabel', value: 'anyValue' }} />
      </Listbox>
    );

    const buttonElement = screen.getByText('anyLabel');
    expect(buttonElement).toBeInTheDocument();
  });
});
