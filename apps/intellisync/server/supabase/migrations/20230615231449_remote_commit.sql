drop function if exists "public"."generate_random_hex"(length integer);

alter table "public"."api_keys" alter column "key_value" set default ''::character varying;


