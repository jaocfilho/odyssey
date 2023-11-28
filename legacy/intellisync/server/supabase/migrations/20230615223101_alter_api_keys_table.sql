alter table "public"."api_keys" drop column "key";

alter table "public"."api_keys" add column "key_value" character varying not null;


