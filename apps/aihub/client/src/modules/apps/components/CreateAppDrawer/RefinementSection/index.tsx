import { ReactNode } from 'react';

type RefinementSectionProps = {
  children: ReactNode;
};

export function RefinementSection({ children }: RefinementSectionProps) {
  return (
    <div className="mt-10">
      <h3 className="text-sm font-medium leading-6 dark:text-zinc-200">
        Refinement
      </h3>
      <p className="mt-1 text-sm leading-6 dark:text-zinc-400">
        Refine your app.
      </p>

      <div className="mt-10">{children}</div>
    </div>
  );
}
