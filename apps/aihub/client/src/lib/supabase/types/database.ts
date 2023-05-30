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
      api_keys: {
        Row: {
          created_at: string;
          id: string;
          key: string;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          key: string;
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          key?: string;
          updated_at?: string;
        };
      };
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
      get_chatbot_settings: {
        Args: {
          p_apikey: string;
          p_chatbot_id: string;
        };
        Returns: {
          v_domain: string;
          v_target_audience: string;
        }[];
      };
      is_allowed_apikey: {
        Args: {
          apikey: string;
        };
        Returns: boolean;
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
