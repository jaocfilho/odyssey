set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.handle_insert_chatbot_file_source()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
DECLARE
  organization uuid;
BEGIN
  -- Retrieve the organization_id from the related chatbot
  SELECT organization_id INTO organization
  FROM public.chatbots
  WHERE id = NEW.chatbot_id;

  -- Update the remaining_storage_tokens
  UPDATE public.organization_storage_tokens
  SET remaining_storage_tokens = remaining_storage_tokens - NEW.characters
  WHERE organization_id = organization;

  RETURN NEW;
END;
$function$
;

CREATE TRIGGER on_chatbot_file_source_created AFTER INSERT ON public.chatbots_files_sources FOR EACH ROW EXECUTE FUNCTION handle_insert_chatbot_file_source();


