'use client';

import { useUpdatePersonaByChatbot } from '@/modules/personas/hooks/use-update-persona-by-chatbot';
import { PersonaContextForm } from '../../PersonaContextForm';
import { type PersonasRow } from '@/modules/personas/entities';
import { type PersonaContextFormData } from '../../PersonaContextForm/usePersonaContextForm';

export function formatContextToFormValues(
  context: PersonasRow['context']
): PersonaContextFormData {
  const formValues = context.map((item) => ({
    value: item,
  }));

  return { context: formValues };
}

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

  const initialValues = formatContextToFormValues(context);

  return (
    <div className="lg:col-start-3">
      <h2 className="text-base font-semibold leading-7 dark:text-white">
        Context
      </h2>
      <PersonaContextForm
        defaultValues={initialValues}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
