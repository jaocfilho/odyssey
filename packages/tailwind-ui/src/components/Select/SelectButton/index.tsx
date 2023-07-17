import { Listbox } from '@headlessui/react';

import { UpDownIcon } from '../UpDownIcon';
import { SelectItem } from '../SelectOption';
import {
  ColorSchemeVariants,
  GraySchemeVariants,
  StyleConfig,
  styling,
} from '../../../utils';

const styles: StyleConfig = {
  commonStyles:
    'relative w-full text-left cursor-default rounded-md border-0 py-1.5 pl-3 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:outline-none sm:text-sm sm:leading-6',

  colorSchemeVariantsStyles: {
    default: 'focus:ring-indigo-600 dark:focus:ring-indigo-500',
    indigo: 'focus:ring-indigo-600 dark:focus:ring-indigo-500',
    emerald: 'focus:ring-emerald-600 dark:focus:ring-emerald-500',
    error:
      'focus:ring-red-600 dark:focus:ring-red-500 text-red-900 dark:text-red-500',
  },

  graySchemeVariantsStyles: {
    default:
      'bg-white dark:bg-grayScheme-800 text-grayScheme-900 dark:text-white ring-grayScheme-300 dark:ring-grayScheme-50/10 dark:disabled:bg-grayScheme-950 dark:disabled:text-grayScheme-400 disabled:bg-grayScheme-50 disabled:ring-grayScheme-200 dark:disabled:ring-grayScheme-50/10 disabled:text-grayScheme-500 placeholder-shown::text-grayScheme-400 dark:placeholder-shown::text-grayScheme-600',
    gray: 'bg-white dark:bg-white/5 text-gray-900 dark:text-white ring-gray-300 dark:ring-gray-50/10 dark:disabled:bg-gray-950 dark:disabled:text-gray-400 disabled:bg-gray-50 disabled:ring-gray-200 dark:disabled:ring-gray-50/10 disabled:text-gray-500 placeholder-shown::text-gray-400 dark:placeholder-shown::text-gray-600',
    neutral:
      'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white ring-neutral-300 dark:ring-neutral-50/10 dark:disabled:bg-neutral-950 dark:disabled:text-neutral-400 disabled:bg-neutral-50 disabled:ring-neutral-200 dark:disabled:ring-neutral-50/10 disabled:text-neutral-500 placeholder-shown::text-neutral-400 dark:placeholder-shown::text-neutral-600',
    slate:
      'bg-white dark:bg-slate-800 text-slate-900 dark:text-white ring-slate-300 dark:ring-slate-50/10 dark:disabled:bg-slate-950 dark:disabled:text-slate-400 disabled:bg-slate-50 disabled:ring-slate-200 dark:disabled:ring-slate-50/10 disabled:text-slate-500 placeholder-shown::text-slate-400 dark:placeholder-shown::text-slate-600',
    stone:
      'bg-white dark:bg-stone-800 text-stone-900 dark:text-white ring-stone-300 dark:ring-stone-50/10 dark:disabled:bg-stone-950 dark:disabled:text-stone-400 disabled:bg-stone-50 disabled:ring-stone-200 dark:disabled:ring-stone-50/10 disabled:text-stone-500 placeholder-shown::text-stone-400 dark:placeholder-shown::text-stone-600',
    zinc: 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white ring-zinc-300 dark:ring-zinc-50/10 dark:disabled:bg-zinc-950 dark:disabled:text-zinc-400 disabled:bg-zinc-50 disabled:ring-zinc-200 dark:disabled:ring-zinc-50/10 disabled:text-zinc-500 placeholder-shown::text-zinc-400 dark:placeholder-shown::text-zinc-600',
  },
};

type SelectButtonStylesProps = {
  colorScheme?: ColorSchemeVariants;
  grayScheme?: GraySchemeVariants;
};

function selectButtonStyles({
  colorScheme,
  grayScheme,
}: SelectButtonStylesProps) {
  return styling({ colorScheme, grayScheme }, styles);
}

type SelectButtonProps = SelectButtonStylesProps & {
  selectedItem?: SelectItem;
  placeholder?: string;
};

export function SelectButton({
  selectedItem,
  placeholder,
  colorScheme,
  grayScheme,
}: SelectButtonProps) {
  const styles = selectButtonStyles({ colorScheme, grayScheme });

  const display = selectedItem ? selectedItem.label : placeholder;

  return (
    <Listbox.Button className={styles}>
      <span className="block truncate">{display}</span>
      <UpDownIcon />
    </Listbox.Button>
  );
}
