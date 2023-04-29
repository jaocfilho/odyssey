import { HeaderSection } from '../HeaderSection';

const sections = ['Name', 'Vibe', 'Context'];

export function Header() {
  return (
    <thead className="dark:bg-zinc-900">
      <tr>
        {sections.map((section) => (
          <HeaderSection key={section} section={section} />
        ))}
      </tr>
    </thead>
  );
}
