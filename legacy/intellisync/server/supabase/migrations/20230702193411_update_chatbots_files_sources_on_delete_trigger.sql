drop trigger if exists "on_documents_delete" on "public"."chatbots_files_sources";

drop function if exists "public"."handle_deleted_document"();

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.handle_deleted_chatbot_file_source()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
begin
  DELETE FROM public.documents WHERE id = OLD.document_id;
  RETURN OLD;
end;
$function$
;

create policy "Enable delete for authenticated users only"
on "public"."documents"
as permissive
for delete
to authenticated
using (true);


CREATE TRIGGER on_chatbot_file_source_delete AFTER DELETE ON public.chatbots_files_sources FOR EACH ROW EXECUTE FUNCTION handle_deleted_chatbot_file_source();


