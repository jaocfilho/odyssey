import { Listbox } from '@headlessui/react';

import { SelectItem, SelectOption } from '../SelectOption';
import { commonSelectOptionsStyles } from './styles';

type SelectOptionsProps = {
  options: SelectItem[];
};

export function SelectOptions({ options }: SelectOptionsProps) {
  return (
    <Listbox.Options className={commonSelectOptionsStyles}>
      {options.map((option) => (
        <SelectOption key={option.value} selectedItem={option} />
      ))}
    </Listbox.Options>
  );
}
