drop policy "Enable insert for authenticated users only" on "public"."personas";

create policy "Enable update for authenticated users only"
on "public"."personas"
as permissive
for update
to authenticated
using (true)
with check (true);



