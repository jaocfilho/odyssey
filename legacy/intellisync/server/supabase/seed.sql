INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, invited_at, confirmation_token, confirmation_sent_at, recovery_token, recovery_sent_at, email_change_token_new, email_change, email_change_sent_at, last_sign_in_at, raw_app_meta_data, raw_user_meta_data, is_super_admin, created_at, updated_at, phone, phone_confirmed_at, phone_change, phone_change_token, phone_change_sent_at, email_change_token_current, email_change_confirm_status, banned_until, reauthentication_token, reauthentication_sent_at)
VALUES 
  ('00000000-0000-0000-0000-000000000000', '5899f99d-a449-4bfa-8769-19c097aaf1f5', 'authenticated', 'authenticated', 'admin@email.com', '$2a$10$4RBhblE23y8Oc0sDxGzaZ.UcW4r9bywY.8GJqIamv7zlWReBR0xlm', '2022-10-04 03:41:27.39308+00', NULL, '', NULL, '', NULL, '', '', NULL, NULL, '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2022-10-04 03:41:27.391146+00', '2022-10-04 03:41:27.39308+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL);

INSERT INTO auth.identities (id,user_id,identity_data,provider,last_sign_in_at,created_at,updated_at)
VALUES 
  ('5899f99d-a449-4bfa-8769-19c097aaf1f5', '5899f99d-a449-4bfa-8769-19c097aaf1f5'::uuid, '{"sub": "5899f99d-a449-4bfa-8769-19c097aaf1f5"}', 'email', '2022-10-04 04:45:00.000+00', '2022-10-04 03:41:27.391146+00', '2022-10-04 03:41:27.39308+00');

INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, invited_at, confirmation_token, confirmation_sent_at, recovery_token, recovery_sent_at, email_change_token_new, email_change, email_change_sent_at, last_sign_in_at, raw_app_meta_data, raw_user_meta_data, is_super_admin, created_at, updated_at, phone, phone_confirmed_at, phone_change, phone_change_token, phone_change_sent_at, email_change_token_current, email_change_confirm_status, banned_until, reauthentication_token, reauthentication_sent_at)
VALUES 
  ('00000000-0000-0000-0000-000000000000', '39c98c0a-7837-44e7-bd61-2763a40a7def', 'authenticated', 'authenticated', 'user@email.com', '$2a$10$vtRAtEKM/NVB.2asKZ.HNepYNlQWRqpHw0fe0884rm/Gy8w2TC2KC', '2022-10-04 03:41:27.39308+00', NULL, '', NULL, '', NULL, '', '', NULL, NULL, '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2022-10-04 03:41:27.391146+00', '2022-10-04 03:41:27.39308+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL);

INSERT INTO auth.identities (id, user_id, identity_data, provider, last_sign_in_at, created_at, updated_at)
VALUES 
  ('39c98c0a-7837-44e7-bd61-2763a40a7def', '39c98c0a-7837-44e7-bd61-2763a40a7def'::uuid, '{"sub": "39c98c0a-7837-44e7-bd61-2763a40a7def"}', 'email', '2022-10-04 04:45:00.000+00', '2022-10-04 03:41:27.391146+00', '2022-10-04 03:41:27.39308+00');
