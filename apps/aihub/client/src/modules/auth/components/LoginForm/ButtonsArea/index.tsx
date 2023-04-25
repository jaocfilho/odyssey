'use client';

import { GithubButton } from '@/components/Buttons/GithubButton';
import { useClientSignIn } from '@/modules/auth/hooks/use-client-signin';

export function ButtonsArea() {
  const { clientSignIn } = useClientSignIn();

  return (
    <div className="mt-6 grid grid-cols-2 gap-4">
      <GithubButton onClick={clientSignIn} />
      <GithubButton onClick={clientSignIn} />
    </div>
  );
}
