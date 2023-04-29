import { ReactNode } from 'react';

type TableContainerProps = {
  children: ReactNode;
};

export function TableContainer({ children }: TableContainerProps) {
  return (
    <div className="flow-root">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y dark:divide-zinc-50/10">
          {children}
        </table>
      </div>
    </div>
  );
}
