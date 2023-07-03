set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.handle_new_document()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
DECLARE
    existing_row public.chatbots_files_sources%ROWTYPE;
BEGIN
    -- Check if a row with the same fileName already exists
    SELECT * INTO existing_row
    FROM public.chatbots_files_sources
    WHERE name = NEW.metadata->'essential'->>'fileName';

    IF found THEN
        -- If a matching row exists, increment the characters column
        UPDATE public.chatbots_files_sources
        SET characters = characters + (NEW.metadata->'essential'->>'characters')::int8
        WHERE id = existing_row.id;
    ELSE
        -- If no matching row exists, create a new row
        INSERT INTO public.chatbots_files_sources (name, chatbot_id, characters, document_id)
        VALUES (NEW.metadata->'essential'->>'fileName', (NEW.metadata->'essential'->>'chatbotId')::uuid, (NEW.metadata->'essential'->>'characters')::int8, NEW.id);
    END IF;

    RETURN NULL;
END;
$function$
;


