import { PersonasRow } from '@/lib/supabase/types';
import { PersonasListItem } from '../PersonasListItem';
import { serverSelectAllPersonas } from '@/modules/personas/api/server';
import { PersonasCount } from '../PersonasCount';

type Persona = Pick<PersonasRow, 'id' | 'name'>;

type BasePersonasListProps = {
  personas: Persona[];
};

function BasePersonasList({ personas }: BasePersonasListProps) {
  const personasCount = personas?.length;

  return (
    <div className="flex flex-col gap-2">
      <PersonasCount personasCount={personasCount} />
      <nav className="flex flex-1 flex-col" aria-label="personas-sidebar">
        <ul role="list" className="space-y-1">
          {personas.map(({ id, name }) => (
            <PersonasListItem key={id} id={id} name={name} />
          ))}
        </ul>
      </nav>
    </div>
  );
}

export async function PersonasList() {
  const { data } = await serverSelectAllPersonas();

  const personas = data?.map(({ id, name }) => ({ id, name }));

  return <BasePersonasList personas={personas!} />;
}
