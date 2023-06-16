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
          key_value: string;
          organization_id: string;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          key_value?: string;
          organization_id: string;
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          key_value?: string;
          organization_id?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'api_keys_organization_id_fkey';
            columns: ['organization_id'];
            referencedRelation: 'organizations';
            referencedColumns: ['id'];
          }
        ];
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
        Relationships: [];
      };
      chatbots: {
        Row: {
          created_at: string | null;
          id: string;
          name: string;
          organization_id: string;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string | null;
          id?: string;
          name: string;
          organization_id: string;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: string;
          name?: string;
          organization_id?: string;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'chatbots_organization_id_fkey';
            columns: ['organization_id'];
            referencedRelation: 'organizations';
            referencedColumns: ['id'];
          }
        ];
      };
      chatbots_settings: {
        Row: {
          chatbot: string;
          created_at: string;
          id: number;
          model: Database['public']['Enums']['model_type'];
          temperature: number;
          updated_at: string;
        };
        Insert: {
          chatbot: string;
          created_at?: string;
          id?: number;
          model?: Database['public']['Enums']['model_type'];
          temperature?: number;
          updated_at?: string;
        };
        Update: {
          chatbot?: string;
          created_at?: string;
          id?: number;
          model?: Database['public']['Enums']['model_type'];
          temperature?: number;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'chatbots_settings_chatbot_fkey';
            columns: ['chatbot'];
            referencedRelation: 'chatbots';
            referencedColumns: ['id'];
          }
        ];
      };
      organization_members: {
        Row: {
          created_at: string | null;
          id: number;
          organization_id: string | null;
          profile_id: string | null;
        };
        Insert: {
          created_at?: string | null;
          id?: number;
          organization_id?: string | null;
          profile_id?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: number;
          organization_id?: string | null;
          profile_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'organization_members_organization_id_fkey';
            columns: ['organization_id'];
            referencedRelation: 'organizations';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'organization_members_profile_id_fkey';
            columns: ['profile_id'];
            referencedRelation: 'profiles';
            referencedColumns: ['id'];
          }
        ];
      };
      organizations: {
        Row: {
          created_at: string;
          created_by: string | null;
          id: string;
          name: string;
          owner: string;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          created_by?: string | null;
          id?: string;
          name?: string;
          owner: string;
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          created_by?: string | null;
          id?: string;
          name?: string;
          owner?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'organizations_created_by_fkey';
            columns: ['created_by'];
            referencedRelation: 'profiles';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'organizations_owner_fkey';
            columns: ['owner'];
            referencedRelation: 'profiles';
            referencedColumns: ['id'];
          }
        ];
      };
      personas: {
        Row: {
          answer_size: string | null;
          chatbot_id: string;
          context: string[];
          created_at: string | null;
          domain: string | null;
          id: string;
          informality: string | null;
          language_complexity: string | null;
          level_of_detail: string | null;
          style: string | null;
          target_audience: string | null;
          tone: string | null;
          topic: string | null;
          updated_at: string | null;
        };
        Insert: {
          answer_size?: string | null;
          chatbot_id: string;
          context?: string[];
          created_at?: string | null;
          domain?: string | null;
          id?: string;
          informality?: string | null;
          language_complexity?: string | null;
          level_of_detail?: string | null;
          style?: string | null;
          target_audience?: string | null;
          tone?: string | null;
          topic?: string | null;
          updated_at?: string | null;
        };
        Update: {
          answer_size?: string | null;
          chatbot_id?: string;
          context?: string[];
          created_at?: string | null;
          domain?: string | null;
          id?: string;
          informality?: string | null;
          language_complexity?: string | null;
          level_of_detail?: string | null;
          style?: string | null;
          target_audience?: string | null;
          tone?: string | null;
          topic?: string | null;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'personas_chatbot_id_fkey';
            columns: ['chatbot_id'];
            referencedRelation: 'chatbots';
            referencedColumns: ['id'];
          }
        ];
      };
      profiles: {
        Row: {
          created_at: string;
          id: string;
          last_used_organization: string | null;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          id: string;
          last_used_organization?: string | null;
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          last_used_organization?: string | null;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'profiles_last_used_organization_fkey';
            columns: ['last_used_organization'];
            referencedRelation: 'organizations';
            referencedColumns: ['id'];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      generate_random_hex: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      get_chatbot_config: {
        Args: {
          p_apikey: string;
          p_chatbot_id: string;
        };
        Returns: Json;
      };
      get_chatbot_config_query: {
        Args: {
          p_chatbot_id: string;
        };
        Returns: {
          model: Database['public']['Enums']['model_type'];
          temperature: number;
          domain: string;
          target_audience: string;
          style: string;
          topic: string;
          level_of_detail: string;
          tone: string;
          language_complexity: string;
          informality: string;
          answer_size: string;
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
      model_type: 'gpt-3.5-turbo' | 'gpt-4';
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
