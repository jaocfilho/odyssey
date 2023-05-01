import { type ChangeEvent } from 'react';

import { Checkbox } from '../Checkbox';
import { HeaderSection } from '../HeaderSection';

const sections = ['Name', 'Vibe', 'Context', 'Created at'];

type HeaderProps = {
  checkAllRows: () => void;
  uncheckAllRows: () => void;
};

export function Header({ checkAllRows, uncheckAllRows }: HeaderProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.checked ? checkAllRows() : uncheckAllRows();
  };

  return (
    <thead className="dark:bg-zinc-900">
      <tr className="divide-x dark:divide-zinc-50/10">
        <th scope="col" className="relative px-7 sm:w-12 sm:px-6">
          <Checkbox onChange={handleChange} />
        </th>
        {sections.map((section) => (
          <HeaderSection key={section} section={section} />
        ))}
      </tr>
    </thead>
  );
}
