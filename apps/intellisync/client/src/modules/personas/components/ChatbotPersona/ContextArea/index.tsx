'use client';

import { useUpdatePersonaByChatbot } from '@/modules/personas/hooks/use-update-persona-by-chatbot';
import { PersonaContextForm } from '../../PersonaContextForm';
import { type PersonasRow } from '@/modules/personas/entities';

export function ContextArea() {
  const updateMutation = useUpdatePersonaByChatbot();

  const handleSubmit = (data: PersonasRow['context']) => {
    // updateMutation.mutate();
    console.log(data);
  };

  return (
    <div className="lg:col-start-3">
      <PersonaContextForm onSubmit={handleSubmit} />
    </div>
  );
}
