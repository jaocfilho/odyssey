import { Listbox } from '@headlessui/react';

import { SelectItem, SelectOption } from '../SelectOption';
import { SelectTransition } from '../SelectTransition';
import { type SelectStylesProps } from '..';

type ColorSchemeVariants = SelectStylesProps['colorScheme'];

type SelectOptionsProps = {
  options: SelectItem[];
  open: boolean;
  colorScheme?: ColorSchemeVariants;
};

const commonSelectOptionsStyles =
  'absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm dark:bg-gray-800';

export function SelectOptions({
  options,
  open,
  colorScheme,
}: SelectOptionsProps) {
  return (
    <SelectTransition open={open}>
      <Listbox.Options className={commonSelectOptionsStyles}>
        {options.map((option) => (
          <SelectOption
            key={option.value}
            selectedItem={option}
            colorScheme={colorScheme}
          />
        ))}
      </Listbox.Options>
    </SelectTransition>
  );
}
