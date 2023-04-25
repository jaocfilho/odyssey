import type { ReactNode } from 'react';

import SupabaseProvider from '@/lib/supabase/Provider';

type RootProvidersProps = {
  children: ReactNode;
};

export default function RootProviders({ children }: RootProvidersProps) {
  return <SupabaseProvider>{children}</SupabaseProvider>;
}
