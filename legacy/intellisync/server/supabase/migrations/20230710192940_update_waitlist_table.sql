alter table "public"."waitlist" alter column "email" set not null;

CREATE UNIQUE INDEX waitlist_email_key ON public.waitlist USING btree (email);

alter table "public"."waitlist" add constraint "waitlist_email_key" UNIQUE using index "waitlist_email_key";


