alter table "public"."api_keys" add column "organization_id" uuid not null;

alter table "public"."api_keys" add constraint "api_keys_organization_id_fkey" FOREIGN KEY (organization_id) REFERENCES organizations(id) ON DELETE CASCADE not valid;

alter table "public"."api_keys" validate constraint "api_keys_organization_id_fkey";


