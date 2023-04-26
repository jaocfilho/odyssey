import type { SupabaseClient } from '@supabase/supabase-js';

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Models {
  Row: {
    context: string | null;
    created_at: string | null;
    id: string;
    name: string | null;
    vibe: string | null;
  };
  Insert: {
    context?: string | null;
    created_at?: string | null;
    id?: string;
    name?: string | null;
    vibe?: string | null;
  };
  Update: {
    context?: string | null;
    created_at?: string | null;
    id?: string;
    name?: string | null;
    vibe?: string | null;
  };
}

export interface Database {
  public: {
    Tables: {
      models: Models;
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

export type Supabase = SupabaseClient<Database>;
