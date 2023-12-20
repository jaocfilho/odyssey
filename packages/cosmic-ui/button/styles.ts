import { buildStyles } from '../src/core';

export const buttonStyles = buildStyles({
  base: 'flex font-semibold text-white shadow-sm justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50',

  size: {
    xs: 'rounded px-2 py-1 text-xs',
    sm: 'rounded px-2 py-1 text-sm',
    md: 'rounded-md px-2.5 py-1.5 text-sm',
    lg: 'rounded-md px-3 py-2 text-sm',
    xl: 'rounded-md px-3.5 py-2.5 text-sm',
  },

  colorScheme: {
    default:
      'dark:bg-brand-500 dark:hover:bg-brand-400 dark:focus-visible:outline-brand-500 bg-brand-600 hover:bg-brand-500 focus-visible:outline-brand-600 disabled:dark:bg-brand-700',

    emerald:
      'dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:focus-visible:outline-emerald-500 bg-emerald-600 hover:bg-emerald-500 focus-visible:outline-emerald-600 disabled:dark:bg-emerald-700',

    indigo:
      'dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500 bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600 disabled:dark:bg-indigo-700',

    purple:
      'dark:bg-purple-500 dark:hover:bg-purple-400 dark:focus-visible:outline-purple-500 bg-purple-600 hover:bg-purple-500 focus-visible:outline-purple-600 disabled:dark:bg-purple-700',

    pink: 'dark:bg-pink-500 dark:hover:bg-pink-400 dark:focus-visible:outline-pink-500 bg-pink-600 hover:bg-pink-500 focus-visible:outline-pink-600 disabled:dark:bg-pink-700',

    red: 'dark:bg-red-500 dark:hover:bg-red-400 dark:focus-visible:outline-red-500 bg-red-600 hover:bg-red-500 focus-visible:outline-red-600 disabled:dark:bg-red-700',

    amber:
      'dark:bg-amber-500 dark:hover:bg-amber-400 dark:focus-visible:outline-amber-500 bg-amber-600 hover:bg-amber-500 focus-visible:outline-amber-600 disabled:dark:bg-amber-700',

    blue: 'dark:bg-blue-500 dark:hover:bg-blue-400 dark:focus-visible:outline-blue-500 bg-blue-600 hover:bg-blue-500 focus-visible:outline-blue-600 disabled:dark:bg-blue-700',

    cyan: 'dark:bg-cyan-500 dark:hover:bg-cyan-400 dark:focus-visible:outline-cyan-500 bg-cyan-600 hover:bg-cyan-500 focus-visible:outline-cyan-600 disabled:dark:bg-cyan-700',

    lime: 'dark:bg-lime-500 dark:hover:bg-lime-400 dark:focus-visible:outline-lime-500 bg-lime-600 hover:bg-lime-500 focus-visible:outline-lime-600 disabled:dark:bg-lime-700',

    fuchsia:
      'dark:bg-fuchsia-500 dark:hover:bg-fuchsia-400 dark:focus-visible:outline-fuchsia-500 bg-fuchsia-600 hover:bg-fuchsia-500 focus-visible:outline-fuchsia-600 disabled:dark:bg-fuchsia-700',

    sky: 'dark:bg-sky-500 dark:hover:bg-sky-400 dark:focus-visible:outline-sky-500 bg-sky-600 hover:bg-sky-500 focus-visible:outline-sky-600 disabled:dark:bg-sky-700',

    teal: 'dark:bg-teal-500 dark:hover:bg-teal-400 dark:focus-visible:outline-teal-500 bg-teal-600 hover:bg-teal-500 focus-visible:outline-teal-600 disabled:dark:bg-teal-700',

    violet:
      'dark:bg-violet-500 dark:hover:bg-violet-400 dark:focus-visible:outline-violet-500 bg-violet-600 hover:bg-violet-500 focus-visible:outline-violet-600 disabled:dark:bg-violet-700',

    orange:
      'dark:bg-orange-500 dark:hover:bg-orange-400 dark:focus-visible:outline-orange-500 bg-orange-600 hover:bg-orange-500 focus-visible:outline-orange-600 disabled:dark:bg-orange-700',

    green:
      'dark:bg-green-500 dark:hover:bg-green-400 dark:focus-visible:outline-green-500 bg-green-600 hover:bg-green-500 focus-visible:outline-green-600 disabled:dark:bg-green-700',

    yellow:
      'dark:bg-yellow-500 dark:hover:bg-yellow-400 dark:focus-visible:outline-yellow-500 bg-yellow-600 hover:bg-yellow-500 focus-visible:outline-yellow-600 disabled:dark:bg-yellow-700',

    rose: 'dark:bg-rose-500 dark:hover:bg-rose-400 dark:focus-visible:outline-rose-500 bg-rose-600 hover:bg-rose-500 focus-visible:outline-rose-600 disabled:dark:bg-rose-700',
  },
});
