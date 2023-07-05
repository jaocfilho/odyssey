'use client';

import { createContext, useContext, useEffect, useState } from 'react';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

import { useQueryClient } from '@tanstack/react-query';

import { useRouter } from 'next/navigation';

import type { Supabase } from '../types';

type SupabaseContext = {
  supabase: Supabase;
};

const Context = createContext<SupabaseContext | undefined>(undefined);

type SupabaseProviderProps = {
  children: React.ReactNode;
};

export function SupabaseProvider({ children }: SupabaseProviderProps) {
  const [supabase] = useState(() => createClientComponentClient());
  const router = useRouter();
  const queryClient = useQueryClient();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event) => {
      router.refresh();

      if (event === 'SIGNED_OUT') {
        queryClient.clear();
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [router, supabase]);

  return (
    <Context.Provider value={{ supabase }}>
      <>{children}</>
    </Context.Provider>
  );
}

export const useSupabase = () => {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error('useSupabase must be used inside SupabaseProvider');
  }

  return context;
};
