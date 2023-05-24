import { PersonasRow } from '@/lib/supabase/types';
import { PersonasListItem } from '../PersonasListItem';

type Persona = Pick<PersonasRow, 'id' | 'name'>;

type PersonasListProps = {
  personas: Persona[];
};

export function PersonasList({ personas }: PersonasListProps) {
  return (
    <nav className="flex flex-1 flex-col" aria-label="personas-sidebar">
      <ul role="list" className="space-y-1">
        {personas.map(({ id, name }) => (
          <PersonasListItem key={id} id={id} name={name} />
        ))}
      </ul>
    </nav>
  );
}
