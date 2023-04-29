import { Checkbox } from '@/components/Checkbox';
import { HeaderSection } from '../HeaderSection';

const sections = ['Name', 'Vibe', 'Context'];

export function Header() {
  return (
    <thead className="dark:bg-zinc-900">
      <tr className="divide-x dark:divide-zinc-50/10">
        <th scope="col" className="relative px-7 sm:w-12 sm:px-6">
          <Checkbox className="absolute left-4 top-1/2 -mt-2" />
        </th>
        {sections.map((section) => (
          <HeaderSection key={section} section={section} />
        ))}
      </tr>
    </thead>
  );
}
