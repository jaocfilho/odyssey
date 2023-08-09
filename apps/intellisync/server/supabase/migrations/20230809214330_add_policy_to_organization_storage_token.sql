create policy "Enable select for authenticated users only"
on "public"."organization_storage_tokens"
as permissive
for select
to authenticated
using (true);



