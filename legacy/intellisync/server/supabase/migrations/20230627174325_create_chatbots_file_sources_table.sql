create table "public"."chatbots_files_sources" (
    "id" uuid not null default gen_random_uuid(),
    "name" text,
    "chatbot_id" uuid,
    "created_at" timestamp with time zone default now(),
    "updated_at" timestamp with time zone default now(),
    "characters" bigint default '0'::bigint
);


alter table "public"."chatbots_files_sources" enable row level security;

CREATE UNIQUE INDEX chatbots_files_sources_pkey ON public.chatbots_files_sources USING btree (id);

alter table "public"."chatbots_files_sources" add constraint "chatbots_files_sources_pkey" PRIMARY KEY using index "chatbots_files_sources_pkey";

alter table "public"."chatbots_files_sources" add constraint "chatbots_files_sources_chatbot_id_fkey" FOREIGN KEY (chatbot_id) REFERENCES chatbots(id) ON DELETE CASCADE not valid;

alter table "public"."chatbots_files_sources" validate constraint "chatbots_files_sources_chatbot_id_fkey";


