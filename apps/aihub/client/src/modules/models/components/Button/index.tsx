'use client';

import { useSupabase } from '@/lib/supabase/Provider';
import { useEffect } from 'react';

export function Button() {
  const { supabase } = useSupabase();

  const createModel = async () => {
    return await supabase.from('models').insert([
      {
        name: 'Biology assistant',
        context: 'Lorem Ipsum',
        vibe: 'Professional',
      },
    ]);
  };

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      console.log(data);
      return data;
    };

    getUser();
  }, []);

  return <button onClick={() => createModel()}>click me</button>;
}
