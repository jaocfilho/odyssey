create policy "Enable select for authenticated users only"
on "public"."chatbots_files_sources"
as permissive
for select
to authenticated
using (true);



