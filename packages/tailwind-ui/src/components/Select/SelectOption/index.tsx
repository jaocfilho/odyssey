import { Listbox } from '@headlessui/react';

import { SelectedIcon } from '../SelectedIcon';
import { classNames } from '../../../utils';
import { SelectStylesProps } from '..';

export type SelectItem = {
  value: any;
  label: string | number;
};

const selectOptionCommonStyles =
  'relative cursor-default select-none py-2 pl-3 pr-9';

type ColorSchemeVariants = NonNullable<SelectStylesProps['colorScheme']>;

type ColorSchemeVariantsStyles = {
  [key in ColorSchemeVariants]: string;
};

const colorSchemeVariantsStyles: ColorSchemeVariantsStyles = {
  emerald: 'bg-emerald-600 dark:bg-emerald-500 text-white',
  indigo: 'bg-indigo-600 dark:bg-indigo-500 text-white',
  error: 'bg-red-600 dark:bg-red-500 text-white',
};

type SelectOptionStylesProps = {
  colorScheme?: ColorSchemeVariants;
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

type BaseSelectOptionProps = SelectOptionStylesProps & {
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
  colorScheme,
}: BaseSelectOptionProps) {
  return (
    <>
      <span className={textStyles(isSelected)}>{selectedItem.label}</span>
      <SelectedIcon
        active={active}
        selected={isSelected}
        colorScheme={colorScheme}
      />
    </>
  );
}

type SelectOptionProps = SelectOptionStylesProps & {
  selectedItem: SelectItem;
};

export function SelectOption({ selectedItem, colorScheme }: SelectOptionProps) {
  return (
    <Listbox.Option
      value={selectedItem}
      className={({ active }) => selectOptionStyles(active, { colorScheme })}
    >
      {({ selected, active }) => (
        <BaseSelectOption
          active={active}
          isSelected={selected}
          selectedItem={selectedItem}
          colorScheme={colorScheme}
        />
      )}
    </Listbox.Option>
  );
}
