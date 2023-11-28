set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.get_chatbot_config_query(p_chatbot_id uuid)
 RETURNS TABLE(model model_type, temperature real, domain text, target_audience text, style text, topic text, level_of_detail text, tone text, language_complexity text, informality text, answer_size text)
 LANGUAGE plpgsql
AS $function$
BEGIN
  RETURN QUERY
    SELECT cs.model, cs.temperature, p.domain, p.target_audience, p.style, p.topic, p.level_of_detail, p.tone, p.language_complexity, p.informality, p.answer_size
    FROM public.chatbots_settings cs
    JOIN public.personas p ON cs.chatbot = p.chatbot_id
    WHERE cs.chatbot = p_chatbot_id
    LIMIT 1;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.handle_new_chatbot()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
begin
  INSERT into public.personas (chatbot_id)
  VALUES (new.id);

  INSERT into public.chatbots_settings (chatbot)
  VALUES (new.id);

  return new;
end;
$function$
;


