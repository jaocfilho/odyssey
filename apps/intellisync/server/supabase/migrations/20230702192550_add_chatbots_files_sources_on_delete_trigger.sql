set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.handle_deleted_document()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
BEGIN
  DELETE FROM public.documents WHERE id = OLD.document_id;
  RETURN OLD;
END;
$function$
;

CREATE TRIGGER on_documents_delete AFTER DELETE ON public.chatbots_files_sources FOR EACH ROW EXECUTE FUNCTION handle_deleted_document();


