import { z } from 'zod';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useClientSignInWithEmail } from '../use-client-signin-with-email';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type LoginFormData = z.infer<typeof loginSchema>;

export function useLoginForm() {
  const methods = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const { clientSignInWithEmail } = useClientSignInWithEmail();

  const login = async (formData: LoginFormData) => {
    const { email, password } = formData;
    const { data } = await clientSignInWithEmail({ email, password });

    // testar if data redirect to dashboard
  };

  return { login, methods };
}
