set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.generate_random_hex(length integer)
 RETURNS varchar
 LANGUAGE plpgsql
AS $function$
DECLARE
  random_bytes BYTEA;
BEGIN
  -- Generate random bytes
  random_bytes := extensions.gen_random_bytes(length);

  -- Convert bytes to hex string
  RETURN encode(random_bytes, 'hex');
END;
$function$
;