import { type ReactNode } from 'react';

import { Form } from '@/modules/forms/components';
import {
  type PersonaUpdateFormData,
  usePersonaUpdateForm,
} from '@/modules/personas/hooks/use-persona-update-form';

type PersonaUpdateFormProps = {
  chatbot_id: string;
  formId: string;
  defaultValues: PersonaUpdateFormData;
  children: ReactNode;
};

export function PersonaUpdateForm({
  chatbot_id,
  formId,
  defaultValues,
  children,
}: PersonaUpdateFormProps) {
  const { methods, handleSubmit } = usePersonaUpdateForm({
    chatbot_id,
    defaultValues,
  });

  return (
    <Form.Root id={formId} onSubmit={handleSubmit} {...methods}>
      <Form.Flex>{children}</Form.Flex>
    </Form.Root>
  );
}
