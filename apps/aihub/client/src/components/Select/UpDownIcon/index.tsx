import { ChevronUpDownIcon } from '@heroicons/react/20/solid';

export function UpDownIcon() {
  return (
    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
      <ChevronUpDownIcon
        className="h-5 w-5 text-slate-400"
        aria-hidden="true"
      />
    </span>
  );
}
