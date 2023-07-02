create policy "Enable delete for authenticated users only"
on "public"."chatbots_files_sources"
as permissive
for delete
to authenticated
using (true);



