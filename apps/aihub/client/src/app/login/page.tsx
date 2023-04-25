'use client';

import { GithubButton } from '@/components/Buttons/GithubButton';
import { signIn } from '@/modules/users/api';

export default function LoginPage() {
  return <GithubButton onClick={signIn} />;
}
