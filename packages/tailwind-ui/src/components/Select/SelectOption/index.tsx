import { Listbox } from '@headlessui/react';

import { SelectedIcon } from '../SelectedIcon';
import { classNames } from '../../../utils';

export type SelectItem = {
  value: any;
  label: string | number;
};

const containerStyles = (active: boolean) =>
  classNames(
    active ? 'bg-emerald-600 text-white' : 'text-slate-400',
    'relative cursor-default select-none py-2 pl-3 pr-9'
  );

type BaseSelectOptionProps = {
  selectedItem: SelectItem;
  active: boolean;
  isSelected: boolean;
};

const textStyles = (isSelected: boolean) =>
  classNames(isSelected ? 'font-semibold' : 'font-normal', 'block truncate');

export function BaseSelectOption({
  selectedItem,
  active,
  isSelected,
}: BaseSelectOptionProps) {
  return (
    <>
      <span className={textStyles(isSelected)}>{selectedItem.label}</span>
      <SelectedIcon active={active} selected={isSelected} />
    </>
  );
}

type SelectOptionProps = {
  selectedItem: SelectItem;
};

export function SelectOption({ selectedItem }: SelectOptionProps) {
  return (
    <Listbox.Option
      value={selectedItem}
      className={({ active }) => containerStyles(active)}
    >
      {({ selected, active }) => (
        <BaseSelectOption
          active={active}
          isSelected={selected}
          selectedItem={selectedItem}
        />
      )}
    </Listbox.Option>
  );
}
