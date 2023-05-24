import { CreatePersonaButton } from '../CreatePersonaButton';
import { PersonasList } from './PersonasList';

export function PersonasSidebar() {
  return (
    <div className="flex flex-col p-4 gap-4">
      <CreatePersonaButton />
      {/* @ts-expect-error Async Server Component */}
      <PersonasList />
    </div>
  );
}
