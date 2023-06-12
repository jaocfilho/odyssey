'use client';

import { PersonasRow } from '../../entities';
import { useSelectPersonaByChatbot } from '../../hooks/use-select-persona-by-chatbot';
import { Container } from './Container';
import { ContextArea } from './ContextArea';
import { TraitsArea } from './TraitsArea';

type ChatbotPersonaProps = {
  persona: PersonasRow;
};

export function ChatbotPersona({ persona }: ChatbotPersonaProps) {
  const personaQuery = useSelectPersonaByChatbot(
    { chatbot_id: persona.chatbot_id },
    { initialData: persona }
  );

  return (
    <Container>
      <TraitsArea chatbot_id={persona.chatbot_id} />
      <ContextArea
        chatbot_id={persona.chatbot_id}
        context={personaQuery.data!.context}
      />
    </Container>
  );
}
