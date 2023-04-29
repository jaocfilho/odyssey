import { HeaderSection } from '../HeaderSection';

const sections = ['Name', 'Vibe', 'Context'];

export function Header() {
  return (
    <thead className="dark:bg-zinc-900">
      <tr>
        {sections.map((section) => (
          <HeaderSection key={section} section={section} />
        ))}
        <th
          scope="col"
          className="relative whitespace-nowrap py-3.5 pl-3 pr-4 sm:pr-0"
        >
          <span className="sr-only">Edit</span>
        </th>
      </tr>
    </thead>
  );
}
