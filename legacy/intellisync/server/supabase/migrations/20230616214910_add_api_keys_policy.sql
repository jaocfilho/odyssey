create policy "Enable select for authenticated users only"
on "public"."api_keys"
as permissive
for select
to authenticated
using (true);



