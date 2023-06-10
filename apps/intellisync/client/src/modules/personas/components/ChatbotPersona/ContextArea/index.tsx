'use client';

import { useUpdatePersonaByChatbot } from '@/modules/personas/hooks/use-update-persona-by-chatbot';
import { PersonaContextForm } from '../../PersonaContextForm';
import { type PersonasRow } from '@/modules/personas/entities';

type ContextAreaProps = {
  chatbot_id: PersonasRow['chatbot_id'];
  context: PersonasRow['context'];
};

export function ContextArea({ chatbot_id, context }: ContextAreaProps) {
  const updateMutation = useUpdatePersonaByChatbot();

  const handleSubmit = (data: PersonasRow['context']) => {
    updateMutation.mutate({
      chatbot_id,
      params: { context: data },
    });
  };

  return (
    <div className="lg:col-start-3">
      <PersonaContextForm onSubmit={handleSubmit} />
    </div>
  );
}
