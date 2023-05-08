export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      apps: {
        Row: {
          context: string | null;
          created_at: string | null;
          id: string;
          model: string;
          name: string | null;
          vibe: string | null;
        };
        Insert: {
          context?: string | null;
          created_at?: string | null;
          id?: string;
          model?: string;
          name?: string | null;
          vibe?: string | null;
        };
        Update: {
          context?: string | null;
          created_at?: string | null;
          id?: string;
          model?: string;
          name?: string | null;
          vibe?: string | null;
        };
      };
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
