-- CREATE INDEX flow_state_created_at_idx ON auth.flow_state USING btree (created_at DESC);

-- CREATE INDEX refresh_tokens_updated_at_idx ON auth.refresh_tokens USING btree (updated_at DESC);

-- CREATE INDEX saml_relay_states_created_at_idx ON auth.saml_relay_states USING btree (created_at DESC);

-- CREATE INDEX sessions_not_after_idx ON auth.sessions USING btree (not_after DESC);


drop function if exists "public"."generate_random_hex"(length integer);

alter table "public"."api_keys" alter column "key_value" set default ''::character varying;


