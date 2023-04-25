'use client';

import { GithubButton } from '@/components/Buttons/GithubButton';
import { useClientSignInWithGithub } from '@/modules/auth/hooks/use-client-signin-with-github';

export function ButtonsArea() {
  const { clientSignIn } = useClientSignInWithGithub();

  return (
    <div className="mt-6 grid grid-cols-2 gap-4">
      <GithubButton onClick={clientSignIn} />
      <GithubButton onClick={clientSignIn} />
    </div>
  );
}
