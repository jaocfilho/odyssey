import Link from 'next/link';

import { Button } from '@/components/Buttons/Button';

export function RedirectToCreateModel() {
  return (
    <Link href="/dashboard/create-model">
      <Button>Create</Button>
    </Link>
  );
}
