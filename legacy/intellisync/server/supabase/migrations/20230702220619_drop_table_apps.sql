drop policy "Enable insert for authenticated users only" on "public"."apps";

drop policy "Enable select for authenticated users only" on "public"."apps";

alter table "public"."apps" drop constraint "models_pkey";

drop index if exists "public"."models_pkey";

drop table "public"."apps";


