'use client';

import { type KeyboardEvent } from 'react';

import { z } from 'zod';

import { Form } from '@/modules/forms/components';
import { TextAreaInput } from '@/modules/forms/components/Inputs';
import { useCustomForm } from '@/modules/forms/hooks/use-custom-form';

const schema = z.object({
  message: z.string(),
});

type NewMessageFormProps = {};

export function NewMessageForm({}: NewMessageFormProps) {
  const { methods, customMethods } = useCustomForm({
    schema,
    onSubmit: console.log,
  });

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault(); // Prevent the textarea from inserting a new line
      customMethods.submitForm();
      methods.reset();
    }
  };

  return (
    <Form.Root id="newMessageForm" onSubmit={console.log} {...methods}>
      <TextAreaInput name="message" rows={4} onKeyDown={handleKeyDown} />
    </Form.Root>
  );
}
