alter table "public"."chatbots_files_sources" drop constraint "chatbots_files_sources_document_id_fkey";

alter table "public"."chatbots_files_sources" drop column "document_id";

alter table "public"."chatbots_files_sources" add column "document_ids" bigint[] not null;


