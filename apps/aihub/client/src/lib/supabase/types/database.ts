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
      chatbots: {
        Row: {
          created_at: string | null;
          id: string;
          name: string;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string | null;
          id?: string;
          name: string;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: string;
          name?: string;
          updated_at?: string | null;
        };
      };
      chatbots_settings: {
        Row: {
          chatbot: string;
          created_at: string;
          description: string | null;
          domain: string | null;
          id: number;
          target_audience: string | null;
          temperature: number | null;
          topic: string | null;
          updated_at: string;
        };
        Insert: {
          chatbot: string;
          created_at?: string;
          description?: string | null;
          domain?: string | null;
          id?: number;
          target_audience?: string | null;
          temperature?: number | null;
          topic?: string | null;
          updated_at?: string;
        };
        Update: {
          chatbot?: string;
          created_at?: string;
          description?: string | null;
          domain?: string | null;
          id?: number;
          target_audience?: string | null;
          temperature?: number | null;
          topic?: string | null;
          updated_at?: string;
        };
      };
      personas: {
        Row: {
          answer_size: string | null;
          context: string[] | null;
          created_at: string | null;
          description: string | null;
          domain: string | null;
          id: string;
          informality: string | null;
          language_complexity: string | null;
          level_of_detail: string | null;
          name: string;
          style: string | null;
          target_audience: string | null;
          temperature: number | null;
          tone: string | null;
          topic: string | null;
          updated_at: string | null;
        };
        Insert: {
          answer_size?: string | null;
          context?: string[] | null;
          created_at?: string | null;
          description?: string | null;
          domain?: string | null;
          id?: string;
          informality?: string | null;
          language_complexity?: string | null;
          level_of_detail?: string | null;
          name: string;
          style?: string | null;
          target_audience?: string | null;
          temperature?: number | null;
          tone?: string | null;
          topic?: string | null;
          updated_at?: string | null;
        };
        Update: {
          answer_size?: string | null;
          context?: string[] | null;
          created_at?: string | null;
          description?: string | null;
          domain?: string | null;
          id?: string;
          informality?: string | null;
          language_complexity?: string | null;
          level_of_detail?: string | null;
          name?: string;
          style?: string | null;
          target_audience?: string | null;
          temperature?: number | null;
          tone?: string | null;
          topic?: string | null;
          updated_at?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      get_gpt35_app_with_refinement: {
        Args: {
          p_app_id: string;
        };
        Returns: Json;
      };
      refine_gpt35_app_on_creation: {
        Args: {
          p_app_name: string;
          p_app_model: string;
          p_app_description?: string;
          p_gpt_context?: string[];
          p_gpt_temperature?: number;
          p_gpt_style?: string;
          p_gpt_domain?: string;
          p_gpt_target_audience?: string;
          p_gpt_topic?: string;
          p_gpt_level_of_detail?: string;
          p_gpt_tone?: string;
          p_gpt_language_complexity?: string;
          p_gpt_informality?: string;
          p_gpt_answer_size?: string;
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
