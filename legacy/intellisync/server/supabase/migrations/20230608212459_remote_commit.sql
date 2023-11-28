
SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE EXTENSION IF NOT EXISTS "pgsodium" WITH SCHEMA "pgsodium";

CREATE EXTENSION IF NOT EXISTS "pg_graphql" WITH SCHEMA "graphql";

CREATE EXTENSION IF NOT EXISTS "pg_stat_statements" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgcrypto" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgjwt" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "supabase_vault" WITH SCHEMA "vault";

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "extensions";

CREATE TYPE "public"."model_type" AS ENUM (
    'gpt-3.5-turbo',
    'gpt-4'
);

ALTER TYPE "public"."model_type" OWNER TO "postgres";

CREATE FUNCTION "public"."get_chatbot_config"("p_apikey" "text", "p_chatbot_id" "uuid") RETURNS "json"
    LANGUAGE "plpgsql" SECURITY DEFINER
    AS $$
BEGIN
  -- Validate the API key
  IF is_allowed_apikey(p_apikey) THEN
    RETURN (SELECT json_build_object(
      'settings', json_build_object(
        'temperature', temperature,
        'model', model
      ),
      'persona', json_build_object(
        'style', style,
        'domain', domain,
        'target_audience', target_audience,
        'topic', topic,
        'level_of_detail', level_of_detail,
        'tone', tone,
        'language_complexity', language_complexity,
        'informality', informality,
        'answer_size', answer_size
      )
    )
    FROM get_chatbot_config_query(p_chatbot_id));
  ELSE
    -- Throw an exception if the API key is not valid
    RAISE EXCEPTION 'Invalid API key';
  END IF;

  -- Return an empty result if the API key is not valid
  RETURN NULL;
END;
$$;

ALTER FUNCTION "public"."get_chatbot_config"("p_apikey" "text", "p_chatbot_id" "uuid") OWNER TO "postgres";

CREATE FUNCTION "public"."get_chatbot_config_query"("p_chatbot_id" "uuid") RETURNS TABLE("model" "public"."model_type", "temperature" real, "domain" "text", "target_audience" "text", "style" "text", "topic" "text", "level_of_detail" "text", "tone" "text", "language_complexity" "text", "informality" "text", "answer_size" "text")
    LANGUAGE "plpgsql"
    AS $$
BEGIN
  RETURN QUERY
    SELECT cs.model, cs.temperature, p.domain, p.target_audience, p.style, p.topic, p.level_of_detail, p.tone, p.language_complexity, p.informality, p.answer_size
    FROM public.chatbots_settings cs
    JOIN public.personas p ON cs.chatbot = p.chatbot
    WHERE cs.chatbot = p_chatbot_id
    LIMIT 1;
END;
$$;

ALTER FUNCTION "public"."get_chatbot_config_query"("p_chatbot_id" "uuid") OWNER TO "postgres";

CREATE FUNCTION "public"."handle_deleted_profile"() RETURNS "trigger"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
begin
  DELETE FROM auth.users
  WHERE id = OLD.id;
  
  RETURN OLD;
end;
$$;

ALTER FUNCTION "public"."handle_deleted_profile"() OWNER TO "postgres";

CREATE FUNCTION "public"."handle_new_chatbot"() RETURNS "trigger"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
begin
  INSERT into public.personas (chatbot)
  VALUES (new.id);

  INSERT into public.chatbots_settings (chatbot)
  VALUES (new.id);

  return new;
end;
$$;

ALTER FUNCTION "public"."handle_new_chatbot"() OWNER TO "postgres";

CREATE FUNCTION "public"."handle_new_profile"() RETURNS "trigger"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
DECLARE
  new_organization_id UUID := gen_random_uuid();
begin
  -- Create a new organization
  INSERT INTO public.organizations (id, created_by, owner) VALUES (new_organization_id, NEW.id, NEW.id);

  -- Create a new organization member entry
  INSERT INTO public.organization_members (organization_id, profile_id)
  VALUES (new_organization_id, NEW.id);

  -- Update the newly created profile row
  UPDATE public.profiles
  SET last_used_organization = new_organization_id
  WHERE id = NEW.id;

  RETURN NEW;
end;
$$;

ALTER FUNCTION "public"."handle_new_profile"() OWNER TO "postgres";

CREATE FUNCTION "public"."handle_new_user"() RETURNS "trigger"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
begin
  insert into public.profiles (id)
  values (new.id);
  return new;
end;
$$;

ALTER FUNCTION "public"."handle_new_user"() OWNER TO "postgres";

CREATE FUNCTION "public"."is_allowed_apikey"("apikey" "text") RETURNS boolean
    LANGUAGE "plpgsql" SECURITY DEFINER
    AS $$
Begin
  RETURN (SELECT EXISTS (SELECT 1
  FROM api_keys
  WHERE key=apikey));
End;  
$$;

ALTER FUNCTION "public"."is_allowed_apikey"("apikey" "text") OWNER TO "postgres";

SET default_tablespace = '';

SET default_table_access_method = "heap";

CREATE TABLE "public"."api_keys" (
    "id" "uuid" DEFAULT "extensions"."uuid_generate_v4"() NOT NULL,
    "key" character varying NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL
);

ALTER TABLE "public"."api_keys" OWNER TO "postgres";

CREATE TABLE "public"."apps" (
    "id" "uuid" DEFAULT "extensions"."uuid_generate_v4"() NOT NULL,
    "name" "text" NOT NULL,
    "description" "text",
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "model" "text" DEFAULT ''::"text" NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL
);

ALTER TABLE "public"."apps" OWNER TO "postgres";

CREATE TABLE "public"."chatbots" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "name" "text" NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"(),
    "updated_at" timestamp with time zone DEFAULT "now"(),
    "organization_id" "uuid" NOT NULL
);

ALTER TABLE "public"."chatbots" OWNER TO "postgres";

CREATE TABLE "public"."chatbots_settings" (
    "id" bigint NOT NULL,
    "chatbot" "uuid" NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "temperature" real DEFAULT '1'::real NOT NULL,
    "model" "public"."model_type" DEFAULT 'gpt-3.5-turbo'::"public"."model_type" NOT NULL
);

ALTER TABLE "public"."chatbots_settings" OWNER TO "postgres";

ALTER TABLE "public"."chatbots_settings" ALTER COLUMN "id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."chatbots_settings_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);

CREATE TABLE "public"."organization_members" (
    "id" bigint NOT NULL,
    "organization_id" "uuid",
    "profile_id" "uuid",
    "created_at" timestamp with time zone DEFAULT "now"()
);

ALTER TABLE "public"."organization_members" OWNER TO "postgres";

ALTER TABLE "public"."organization_members" ALTER COLUMN "id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."organization_members_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);

CREATE TABLE "public"."organizations" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "name" "text" DEFAULT 'My organization'::"text" NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "created_by" "uuid",
    "owner" "uuid" NOT NULL
);

ALTER TABLE "public"."organizations" OWNER TO "postgres";

CREATE TABLE "public"."personas" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"(),
    "updated_at" timestamp with time zone DEFAULT "now"(),
    "style" "text",
    "domain" "text",
    "target_audience" "text",
    "topic" "text",
    "level_of_detail" "text",
    "tone" "text",
    "language_complexity" "text",
    "informality" "text",
    "answer_size" "text",
    "chatbot" "uuid" NOT NULL
);

ALTER TABLE "public"."personas" OWNER TO "postgres";

CREATE TABLE "public"."profiles" (
    "id" "uuid" NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "last_used_organization" "uuid"
);

ALTER TABLE "public"."profiles" OWNER TO "postgres";

ALTER TABLE ONLY "public"."api_keys"
    ADD CONSTRAINT "api_keys_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."chatbots"
    ADD CONSTRAINT "chatbots_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."chatbots_settings"
    ADD CONSTRAINT "chatbots_settings_chatbot_key" UNIQUE ("chatbot");

ALTER TABLE ONLY "public"."chatbots_settings"
    ADD CONSTRAINT "chatbots_settings_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."personas"
    ADD CONSTRAINT "gpt3.5 refinement_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."apps"
    ADD CONSTRAINT "models_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."organization_members"
    ADD CONSTRAINT "organization_members_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."organizations"
    ADD CONSTRAINT "organizations_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."personas"
    ADD CONSTRAINT "personas_chatbot_key" UNIQUE ("chatbot");

ALTER TABLE ONLY "public"."profiles"
    ADD CONSTRAINT "profiles_pkey" PRIMARY KEY ("id");

CREATE TRIGGER "on_auth_user_deleted" AFTER DELETE ON "public"."profiles" FOR EACH ROW EXECUTE FUNCTION "public"."handle_deleted_profile"();

CREATE TRIGGER "on_public_chatbots_created" AFTER INSERT ON "public"."chatbots" FOR EACH ROW EXECUTE FUNCTION "public"."handle_new_chatbot"();

CREATE TRIGGER "on_public_profiles_created" AFTER INSERT ON "public"."profiles" FOR EACH ROW EXECUTE FUNCTION "public"."handle_new_profile"();

ALTER TABLE ONLY "public"."chatbots"
    ADD CONSTRAINT "chatbots_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "public"."organizations"("id") ON DELETE CASCADE;

ALTER TABLE ONLY "public"."chatbots_settings"
    ADD CONSTRAINT "chatbots_settings_chatbot_fkey" FOREIGN KEY ("chatbot") REFERENCES "public"."chatbots"("id") ON DELETE CASCADE;

ALTER TABLE ONLY "public"."organization_members"
    ADD CONSTRAINT "organization_members_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "public"."organizations"("id") ON DELETE CASCADE;

ALTER TABLE ONLY "public"."organization_members"
    ADD CONSTRAINT "organization_members_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("id") ON DELETE CASCADE;

ALTER TABLE ONLY "public"."organizations"
    ADD CONSTRAINT "organizations_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "public"."profiles"("id") ON DELETE SET NULL;

ALTER TABLE ONLY "public"."organizations"
    ADD CONSTRAINT "organizations_owner_fkey" FOREIGN KEY ("owner") REFERENCES "public"."profiles"("id") ON DELETE CASCADE;

ALTER TABLE ONLY "public"."personas"
    ADD CONSTRAINT "personas_chatbot_fkey" FOREIGN KEY ("chatbot") REFERENCES "public"."chatbots"("id") ON DELETE CASCADE;

ALTER TABLE ONLY "public"."profiles"
    ADD CONSTRAINT "profiles_last_used_organization_fkey" FOREIGN KEY ("last_used_organization") REFERENCES "public"."organizations"("id") ON DELETE SET NULL;

CREATE POLICY "Enable authenticated users select based their id" ON "public"."profiles" FOR SELECT TO "authenticated" USING (("auth"."uid"() = "id"));

CREATE POLICY "Enable delete for authenticated users only" ON "public"."chatbots" FOR DELETE TO "authenticated" USING (true);

CREATE POLICY "Enable insert for authenticated users only" ON "public"."apps" FOR INSERT TO "authenticated" WITH CHECK (true);

CREATE POLICY "Enable insert for authenticated users only" ON "public"."chatbots" FOR INSERT TO "authenticated" WITH CHECK (true);

CREATE POLICY "Enable read access for all users that are part of the org" ON "public"."organizations" FOR SELECT TO "authenticated" USING (true);

CREATE POLICY "Enable select for authenticated users only" ON "public"."apps" FOR SELECT TO "authenticated" USING (true);

CREATE POLICY "Enable select for authenticated users only" ON "public"."chatbots" FOR SELECT TO "authenticated" USING (true);

CREATE POLICY "Enable select for authenticated users only" ON "public"."chatbots_settings" FOR SELECT TO "authenticated" USING (true);

CREATE POLICY "Enable select for authenticated users only" ON "public"."personas" FOR SELECT TO "authenticated" USING (true);

CREATE POLICY "Enable update for authenticated users only" ON "public"."chatbots_settings" FOR UPDATE TO "authenticated" USING (true) WITH CHECK (true);

ALTER TABLE "public"."api_keys" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."apps" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."chatbots" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."chatbots_settings" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."organization_members" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."organizations" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."personas" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."profiles" ENABLE ROW LEVEL SECURITY;

GRANT USAGE ON SCHEMA "public" TO "postgres";
GRANT USAGE ON SCHEMA "public" TO "anon";
GRANT USAGE ON SCHEMA "public" TO "authenticated";
GRANT USAGE ON SCHEMA "public" TO "service_role";

GRANT ALL ON FUNCTION "public"."get_chatbot_config"("p_apikey" "text", "p_chatbot_id" "uuid") TO "anon";
GRANT ALL ON FUNCTION "public"."get_chatbot_config"("p_apikey" "text", "p_chatbot_id" "uuid") TO "authenticated";
GRANT ALL ON FUNCTION "public"."get_chatbot_config"("p_apikey" "text", "p_chatbot_id" "uuid") TO "service_role";

GRANT ALL ON FUNCTION "public"."get_chatbot_config_query"("p_chatbot_id" "uuid") TO "anon";
GRANT ALL ON FUNCTION "public"."get_chatbot_config_query"("p_chatbot_id" "uuid") TO "authenticated";
GRANT ALL ON FUNCTION "public"."get_chatbot_config_query"("p_chatbot_id" "uuid") TO "service_role";

GRANT ALL ON FUNCTION "public"."handle_deleted_profile"() TO "anon";
GRANT ALL ON FUNCTION "public"."handle_deleted_profile"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."handle_deleted_profile"() TO "service_role";

GRANT ALL ON FUNCTION "public"."handle_new_chatbot"() TO "anon";
GRANT ALL ON FUNCTION "public"."handle_new_chatbot"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."handle_new_chatbot"() TO "service_role";

GRANT ALL ON FUNCTION "public"."handle_new_profile"() TO "anon";
GRANT ALL ON FUNCTION "public"."handle_new_profile"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."handle_new_profile"() TO "service_role";

GRANT ALL ON FUNCTION "public"."handle_new_user"() TO "anon";
GRANT ALL ON FUNCTION "public"."handle_new_user"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."handle_new_user"() TO "service_role";

GRANT ALL ON FUNCTION "public"."is_allowed_apikey"("apikey" "text") TO "anon";
GRANT ALL ON FUNCTION "public"."is_allowed_apikey"("apikey" "text") TO "authenticated";
GRANT ALL ON FUNCTION "public"."is_allowed_apikey"("apikey" "text") TO "service_role";

GRANT ALL ON TABLE "public"."api_keys" TO "anon";
GRANT ALL ON TABLE "public"."api_keys" TO "authenticated";
GRANT ALL ON TABLE "public"."api_keys" TO "service_role";

GRANT ALL ON TABLE "public"."apps" TO "anon";
GRANT ALL ON TABLE "public"."apps" TO "authenticated";
GRANT ALL ON TABLE "public"."apps" TO "service_role";

GRANT ALL ON TABLE "public"."chatbots" TO "anon";
GRANT ALL ON TABLE "public"."chatbots" TO "authenticated";
GRANT ALL ON TABLE "public"."chatbots" TO "service_role";

GRANT ALL ON TABLE "public"."chatbots_settings" TO "anon";
GRANT ALL ON TABLE "public"."chatbots_settings" TO "authenticated";
GRANT ALL ON TABLE "public"."chatbots_settings" TO "service_role";

GRANT ALL ON SEQUENCE "public"."chatbots_settings_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."chatbots_settings_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."chatbots_settings_id_seq" TO "service_role";

GRANT ALL ON TABLE "public"."organization_members" TO "anon";
GRANT ALL ON TABLE "public"."organization_members" TO "authenticated";
GRANT ALL ON TABLE "public"."organization_members" TO "service_role";

GRANT ALL ON SEQUENCE "public"."organization_members_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."organization_members_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."organization_members_id_seq" TO "service_role";

GRANT ALL ON TABLE "public"."organizations" TO "anon";
GRANT ALL ON TABLE "public"."organizations" TO "authenticated";
GRANT ALL ON TABLE "public"."organizations" TO "service_role";

GRANT ALL ON TABLE "public"."personas" TO "anon";
GRANT ALL ON TABLE "public"."personas" TO "authenticated";
GRANT ALL ON TABLE "public"."personas" TO "service_role";

GRANT ALL ON TABLE "public"."profiles" TO "anon";
GRANT ALL ON TABLE "public"."profiles" TO "authenticated";
GRANT ALL ON TABLE "public"."profiles" TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "service_role";

RESET ALL;
