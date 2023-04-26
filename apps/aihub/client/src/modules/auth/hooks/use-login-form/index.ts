import { z } from 'zod';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useClientSignInWithEmail } from '../use-client-signin-with-email';
import { useNavigation } from '@/modules/navigation/hooks/use-navigation';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type LoginFormData = z.infer<typeof loginSchema>;

export function useLoginForm() {
  const { redirectToDashboard } = useNavigation();

  const methods = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const { clientSignInWithEmail } = useClientSignInWithEmail();

  const login = async (formData: LoginFormData) => {
    const { email, password } = formData;

    const {
      data: { session },
    } = await clientSignInWithEmail({ email, password });

    if (session?.user.id) {
      redirectToDashboard();
    }
  };

  return { login, methods };
}
