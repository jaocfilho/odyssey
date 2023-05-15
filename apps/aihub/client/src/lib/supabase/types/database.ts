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
          created_at: string;
          description: string | null;
          id: string;
          model: string;
          name: string;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          description?: string | null;
          id?: string;
          model?: string;
          name: string;
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          description?: string | null;
          id?: string;
          model?: string;
          name?: string;
          updated_at?: string;
        };
      };
      gpt3_5_refinement: {
        Row: {
          app: string;
          context: string[] | null;
          created_at: string | null;
          id: string;
          temperature: number | null;
          updated_at: string | null;
          vibe: string | null;
        };
        Insert: {
          app: string;
          context?: string[] | null;
          created_at?: string | null;
          id?: string;
          temperature?: number | null;
          updated_at?: string | null;
          vibe?: string | null;
        };
        Update: {
          app?: string;
          context?: string[] | null;
          created_at?: string | null;
          id?: string;
          temperature?: number | null;
          updated_at?: string | null;
          vibe?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      refine_gpt35_app_on_creation: {
        Args: {
          p_app_name: string;
          p_app_model: string;
          p_app_description?: string;
          p_gpt_context?: string[];
          p_gpt_temperature?: number;
          p_gpt_vibe?: string;
        };
        Returns: undefined;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
