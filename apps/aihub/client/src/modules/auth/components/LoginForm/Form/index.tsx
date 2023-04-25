'use client';

import { Form } from '@/modules/forms/components';
import { RememberMe } from '../RememberMe';
import { useLoginForm } from '@/modules/auth/hooks/use-login-form';

export function LoginFormComponent() {
  const { login, methods } = useLoginForm();

  return (
    <Form.Root onSubmit={login} {...methods}>
      <div className="flex flex-col gap-6">
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

        <div>
          <button
            type="submit"
            className="w-full rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
          >
            Sign in
          </button>
        </div>
      </div>
    </Form.Root>
  );
}
