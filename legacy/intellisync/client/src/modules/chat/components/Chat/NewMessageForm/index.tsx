'use client';

import { type KeyboardEvent } from 'react';

import { z } from 'zod';

import { Form } from '@/modules/forms/components';
import { TextAreaInput } from '@/modules/forms/components/Inputs';
import {
  useCustomForm,
  UseCustomFormOnSubmit,
} from '@/modules/forms/hooks/use-custom-form';

const schema = z.object({
  content: z.string(),
  role: z.literal('user'),
});

type OnSubmit = UseCustomFormOnSubmit<typeof schema>;

type NewMessageFormProps = {
  onSubmit: OnSubmit;
};

export function NewMessageForm({ onSubmit }: NewMessageFormProps) {
  const { methods, customMethods } = useCustomForm({
    schema,
    onSubmit: onSubmit,
    defaultValues: { role: 'user' },
  });

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      // prevent the textarea from inserting a new line
      event.preventDefault();

      if (!event.currentTarget.value) return;

      customMethods.submitForm();
      methods.reset();
    }
  };

  return (
    <Form.Root id="newMessageForm" onSubmit={onSubmit} {...methods}>
      <TextAreaInput name="content" rows={4} onKeyDown={handleKeyDown} />
    </Form.Root>
  );
}
