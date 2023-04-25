'use client';

import { GithubButton } from '@/components/Buttons/GithubButton';
import { useClientSignIn } from '@/modules/auth/hooks/use-client-signin';

export default function LoginPage() {
  const { clientSignIn } = useClientSignIn();
  return <GithubButton onClick={clientSignIn} />;
}
