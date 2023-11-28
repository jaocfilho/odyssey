alter table "public"."chatbots_files_sources" add column "document_id" bigint not null;

alter table "public"."chatbots_files_sources" alter column "chatbot_id" set not null;

alter table "public"."chatbots_files_sources" add constraint "chatbots_files_sources_document_id_fkey" FOREIGN KEY (document_id) REFERENCES documents(id) ON DELETE CASCADE not valid;

alter table "public"."chatbots_files_sources" validate constraint "chatbots_files_sources_document_id_fkey";

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.handle_new_document()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
BEGIN
  INSERT INTO public.chatbots_files_sources (name, chatbot_id, characters, document_id)
  VALUES (NEW.metadata->'essential'->>'fileName', (NEW.metadata->'essential'->>'chatbotId')::uuid, (NEW.metadata->'essential'->>'characters')::int8, NEW.id);
  RETURN NULL;
END;
$function$
;

CREATE TRIGGER on_public_documents_created AFTER INSERT ON public.documents FOR EACH ROW EXECUTE FUNCTION handle_new_document();


