import { Listbox } from '@headlessui/react';

import { SelectedIcon } from '../SelectedIcon';
import { classNames } from '../../../utils';

export type SelectItem = {
  value: any;
  label: string | number;
};

const selectOptionCommonStyles =
  'relative cursor-default select-none py-2 pl-3 pr-9';

const colorSchemeVariantsStyles = {
  emerald: 'bg-emerald-600 dark:bg-emerald-500 text-white',
  indigo: 'bg-indigo-600 dark:bg-indigo-500 text-white',
  error: 'bg-red-600 dark:bg-red-500 text-white',
};

type SelectOptionColorSchemeVariants = keyof typeof colorSchemeVariantsStyles;

export type SelectOptionStylesProps = {
  colorScheme?: SelectOptionColorSchemeVariants;
};

function selectOptionStyles(
  active: boolean,
  { colorScheme = 'indigo' }: SelectOptionStylesProps
) {
  const colorSchemeStyles = colorSchemeVariantsStyles[colorScheme];

  return classNames(
    active ? colorSchemeStyles : 'text-gray-400',
    selectOptionCommonStyles
  );
}

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
      className={({ active }) => selectOptionStyles(active, {})}
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
