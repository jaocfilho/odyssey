'use client';

import { GithubButton } from '@/components/Buttons/GithubButton';
import { useSignInWithGithub } from '@/modules/auth/hooks/use-signin-with-github';

export function ButtonsArea() {
  const { clientSignIn } = useSignInWithGithub();

  return (
    <div className="mt-6 grid grid-cols-2 gap-4">
      <GithubButton onClick={clientSignIn} />
      <GithubButton onClick={clientSignIn} />
    </div>
  );
}
