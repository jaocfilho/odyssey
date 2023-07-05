alter table "public"."organization_credits" alter column "organization_id" set not null;

CREATE UNIQUE INDEX organization_credits_organization_id_key ON public.organization_credits USING btree (organization_id);

alter table "public"."organization_credits" add constraint "organization_credits_organization_id_key" UNIQUE using index "organization_credits_organization_id_key";


