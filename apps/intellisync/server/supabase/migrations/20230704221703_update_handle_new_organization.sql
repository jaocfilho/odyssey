set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.handle_new_organization()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
BEGIN
  -- Insert a new row into organization_credits table for the newly created organization
  INSERT INTO public.organization_credits (organization_id)
  VALUES (NEW.id);

  -- Insert a new row into api_keys table for the newly created organization
  INSERT INTO public.api_keys (organization_id)
  VALUES (NEW.id);

  RETURN NEW;
END;
$function$
;


