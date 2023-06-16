
CREATE UNIQUE INDEX api_keys_key_value_key ON public.api_keys USING btree (key_value);

alter table "public"."api_keys" add constraint "api_keys_key_value_key" UNIQUE using index "api_keys_key_value_key";

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.generate_random_hex()
 RETURNS text
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
DECLARE
  random_bytes BYTEA;
BEGIN
  -- Generate random bytes
  random_bytes := gen_random_bytes(32);

  -- Convert bytes to hex string
  RETURN encode(random_bytes, 'hex');
END;
$function$
;

alter table "public"."api_keys" alter column "key_value" set default generate_random_hex();

CREATE OR REPLACE FUNCTION public.handle_new_organization()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public', 'extensions'
AS $function$
begin
  INSERT into public.api_keys (organization_id)
  VALUES (new.id);

  return new;
end;
$function$
;

CREATE TRIGGER on_public_organizations_created AFTER INSERT ON public.organizations FOR EACH ROW EXECUTE FUNCTION handle_new_organization();


