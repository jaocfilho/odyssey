'use client';

import { Form } from '@/modules/forms/components';
import { RememberMe } from '../RememberMe';
import { useLoginForm } from '@/modules/auth/hooks/use-login-form';
import { Button } from 'tailwind-ui';

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
          <Button type="submit" colorScheme="indigo">
            Sign in
          </Button>
        </div>
      </div>
    </Form.Root>
  );
}
