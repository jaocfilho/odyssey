'use client';

import { z } from 'zod';

import { Button } from '@/components/Button';
import { Form } from '@/modules/forms/components';
import { TextInput } from '@/modules/forms/components/Inputs';
import { useCustomForm } from '@/modules/forms/hooks/use-custom-form';

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export function RegisterForm() {
  const onSubmit = console.log;

  const { methods } = useCustomForm({
    schema: registerSchema,
  });

  return (
    <Form.Root id="registerForm" onSubmit={onSubmit} {...methods}>
      <div className="flex flex-col gap-4">
        <TextInput label="Email address" name="email" type="email" />
        <TextInput label="Password" name="password" type="password" />

        <div>
          <Button type="submit" colorScheme="indigo" className="w-full">
            Sign in
          </Button>
        </div>
      </div>
    </Form.Root>
  );
}
