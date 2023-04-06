import { ReactNode } from 'react';

import { Listbox } from '@headlessui/react';

import { classNames } from '@/modules/theme/utils';
import { SelectedIcon } from '../SelectedIcon';

type SelectOptionProps<T> = {
  children: ReactNode;
  value: T;
};

const containerStyles = (active: boolean) =>
  classNames(
    active ? 'bg-pink-600 text-white' : 'text-slate-400',
    'relative cursor-default select-none py-2 pl-3 pr-9'
  );

const textStyles = (selected: boolean) =>
  classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate');

export function SelectOption<T>({ children, value }: SelectOptionProps<T>) {
  return (
    <Listbox.Option
      value={value}
      className={({ active }) => containerStyles(active)}
    >
      {({ selected, active }) => (
        <>
          <span className={textStyles(selected)}>{children}</span>
          <SelectedIcon active={active} selected={selected} />
        </>
      )}
    </Listbox.Option>
  );
}
