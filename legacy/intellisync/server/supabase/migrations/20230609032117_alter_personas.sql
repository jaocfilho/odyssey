alter table "public"."personas" drop constraint "personas_chatbot_fkey";

alter table "public"."personas" drop constraint "personas_chatbot_key";

drop index if exists "public"."personas_chatbot_key";

alter table "public"."personas" drop column "chatbot";

alter table "public"."personas" add column "chatbot_id" uuid not null;

CREATE UNIQUE INDEX personas_chatbot_key ON public.personas USING btree (chatbot_id);

alter table "public"."personas" add constraint "personas_chatbot_id_fkey" FOREIGN KEY (chatbot_id) REFERENCES chatbots(id) ON DELETE CASCADE not valid;

alter table "public"."personas" validate constraint "personas_chatbot_id_fkey";

alter table "public"."personas" add constraint "personas_chatbot_key" UNIQUE using index "personas_chatbot_key";


