import { ReactNode } from 'react';

type TableContainerProps = {
  children: ReactNode;
};

export function TableContainer({ children }: TableContainerProps) {
  return (
    <div className="flow-root">
      <div className="ring-1 ring-zinc-50/10 sm:mx-0 sm:rounded-lg">
        <table className="min-w-full divide-y dark:divide-zinc-50/10">
          {children}
        </table>
      </div>
    </div>
  );
}
