set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.handle_deleted_chatbot_file_source()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
BEGIN
  DELETE FROM public.documents
  WHERE id = ANY (OLD.document_ids);  -- Delete documents with IDs in the document_ids array
  RETURN OLD;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.handle_new_document()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
DECLARE
    existing_row public.chatbots_files_sources%ROWTYPE;
BEGIN
    -- Check if a row with the same fileName and chatbotId already exists
    SELECT * INTO existing_row
    FROM public.chatbots_files_sources
    WHERE name = NEW.metadata->'essential'->>'fileName'
      AND chatbot_id = (NEW.metadata->'essential'->>'chatbotId')::uuid;

    IF found THEN
        -- If a matching row exists, increment the characters column and add document ID to the array
        UPDATE public.chatbots_files_sources
        SET characters = characters + (NEW.metadata->'essential'->>'characters')::int8,
            document_ids = array_append(existing_row.document_ids, NEW.id)
        WHERE id = existing_row.id;
    ELSE
        -- If no matching row exists, create a new row
        INSERT INTO public.chatbots_files_sources (name, chatbot_id, characters, document_ids)
        VALUES (NEW.metadata->'essential'->>'fileName',
                (NEW.metadata->'essential'->>'chatbotId')::uuid,
                (NEW.metadata->'essential'->>'characters')::int8,
                ARRAY[NEW.id]);
    END IF;

    RETURN NULL;
END;
$function$
;


