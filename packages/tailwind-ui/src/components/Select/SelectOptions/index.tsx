import { Listbox } from '@headlessui/react';

import { SelectItem, SelectOption } from '../SelectOption';
import { commonSelectOptionsStyles } from './styles';
import { SelectTransition } from '../SelectTransition';

type SelectOptionsProps = {
  options: SelectItem[];
  open: boolean;
};

export function SelectOptions({ options, open }: SelectOptionsProps) {
  return (
    <SelectTransition open={open}>
      <Listbox.Options className={commonSelectOptionsStyles}>
        {options.map((option) => (
          <SelectOption key={option.value} selectedItem={option} />
        ))}
      </Listbox.Options>
    </SelectTransition>
  );
}
