import { PersonasRow } from '@/lib/supabase/types';
import { PersonasListItem } from '../PersonasListItem';
import { serverSelectAllPersonas } from '@/modules/personas/api/server';

type Persona = Pick<PersonasRow, 'id' | 'name'>;

type BasePersonasListProps = {
  personas: Persona[];
};

function BasePersonasList({ personas }: BasePersonasListProps) {
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

export async function PersonasList() {
  const { data } = await serverSelectAllPersonas();

  const personas = data?.map(({ id, name }) => ({ id, name }));

  return <BasePersonasList personas={personas!} />;
}
