import Link from 'next/link';

import { Button } from '@/components/Buttons/Button';

export function RedirectToCreateApp() {
  return (
    <Link href="/dashboard/create-app">
      <Button>Create</Button>
    </Link>
  );
}
