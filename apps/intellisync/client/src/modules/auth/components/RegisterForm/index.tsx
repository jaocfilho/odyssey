'use client';

import { z } from 'zod';

import { Button } from '@/components/Button';
import { Form } from '@/modules/forms/components';
import { TextInput } from '@/modules/forms/components/Inputs';
import { useCustomForm } from '@/modules/forms/hooks/use-custom-form';
import { useSupabase } from '@/lib/supabase/Provider';

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type RegisterFormValues = z.infer<typeof registerSchema>;

export function RegisterForm() {
  const { supabase } = useSupabase();
  const onSubmit = async (data: RegisterFormValues) => {
    await supabase.auth.signUp(data);
  };

  const { methods } = useCustomForm({
    schema: registerSchema,
  });

  return (
    <Form.Root id="registerForm" onSubmit={onSubmit} {...methods}>
      <div className="flex flex-col gap-4">
        <TextInput label="Email address" name="email" type="email" />
        <TextInput label="Password" name="password" type="password" />
      </div>
    </Form.Root>
  );
}
