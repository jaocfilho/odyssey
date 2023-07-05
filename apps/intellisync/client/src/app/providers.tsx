import type { ReactNode } from 'react';

import { SupabaseProvider } from '@/lib/supabase/Provider';
import { ReactQueryProvider } from '@/lib/react-query/Provider';

type RootProvidersProps = {
  children: ReactNode;
};

export default function RootProviders({ children }: RootProvidersProps) {
  return (
    <ReactQueryProvider>
      <SupabaseProvider>
        <>{children}</>
      </SupabaseProvider>
    </ReactQueryProvider>
  );
}
