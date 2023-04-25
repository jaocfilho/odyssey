'use client';

import { z } from 'zod';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/modules/forms/components';
import { RememberMe } from '../RememberMe';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type LoginFormData = z.infer<typeof loginSchema>;

export function LoginFormComponent() {
  const methods = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const login = (data: LoginFormData) => {};

  return (
    <Form.Root onSubmit={login} {...methods}>
      <div className="space-y-6">
        <Form.Field>
          <Form.Label htmlFor="email">Email address</Form.Label>
          <Form.Input name="email" type="email" />
          <Form.ErrorMessage name="email" />
        </Form.Field>

        <Form.Field>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Input name="password" type="password" />
          <Form.ErrorMessage name="password" />
        </Form.Field>
      </div>

      <RememberMe />

      <button
        type="submit"
        className="rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
      >
        Sign in
      </button>
    </Form.Root>
  );
}
