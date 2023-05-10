import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { Vibe } from '../Vibe';

export function RefinementArea() {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full justify-between rounded-lg dark:bg-zinc-900 mt-2 px-4 py-2 text-left text-sm font-medium dark:text-zinc-200 dark:hover:bg-zinc-800 focus:outline-none focus-visible:ring dark:focus-visible:ring-emerald-500 focus-visible:ring-opacity-75">
            <span>Refine</span>
            <ChevronUpIcon
              className={`${
                open ? 'rotate-180 transform' : ''
              } h-5 w-5 dark:text-zinc-400`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="p-4 border dark:border-zinc-50/10">
            <Vibe />
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
