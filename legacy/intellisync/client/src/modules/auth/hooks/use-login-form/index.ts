import { z } from 'zod';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useSignInWithEmail } from '../use-signin-with-email';
import { useNavigation } from '@/modules/navigation/hooks/use-navigation';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type LoginFormData = z.infer<typeof loginSchema>;

export function useLoginForm() {
  const { redirectToChatbots } = useNavigation();

  const methods = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const { clientSignInWithEmail } = useSignInWithEmail();

  const login = async (formData: LoginFormData) => {
    const { email, password } = formData;

    const {
      data: { session },
    } = await clientSignInWithEmail({ email, password });

    if (session?.user.id) {
      redirectToChatbots();
    }
  };

  return { login, methods };
}
