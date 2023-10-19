import { Listbox } from '@headlessui/react';

import { SelectItem, SelectOption } from '../SelectOption';
import { SelectTransition } from '../SelectTransition';
import {
  ColorSchemeVariants,
  GraySchemeVariants,
  StyleConfig,
  styling,
} from '../../../utils';

const styles: StyleConfig = {
  commonStyles:
    'absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm dark:bg-gray-800',

  graySchemeVariantsStyles: {
    default: 'dark:bg-grayScheme-800',
    gray: 'dark:bg-gray-800',
    neutral: 'dark:bg-neutral-800',
    slate: 'dark:bg-slate-800',
    stone: 'dark:bg-stone-800',
    zinc: 'dark:bg-zinc-800',
  },
};

type SelectOptionsStylesProps = {
  grayScheme?: GraySchemeVariants;
};

function selectOptionsStyles({ grayScheme }: SelectOptionsStylesProps) {
  return styling({ grayScheme }, styles);
}

type SelectOptionsProps = SelectOptionsStylesProps & {
  options: SelectItem[];
  open: boolean;
  colorScheme?: ColorSchemeVariants;
};

export function SelectOptions({
  options,
  open,
  colorScheme,
  grayScheme,
}: SelectOptionsProps) {
  return (
    <SelectTransition open={open}>
      <Listbox.Options className={selectOptionsStyles({ grayScheme })}>
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
