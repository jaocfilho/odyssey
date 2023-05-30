import {
  PersonaPromptsMessages,
  createPersonaChatMessages,
} from '@/modules/personas/helpers';
import { ChatOpenAI } from 'langchain/chat_models/openai';
import { HumanChatMessage } from 'langchain/schema';

type ChatCompletionParams = {
  text: string;
  persona?: PersonaPromptsMessages;
};

export async function chatCompletion({
  text,
  persona = {},
}: ChatCompletionParams) {
  const messages = await createPersonaChatMessages(persona);

  const chat = new ChatOpenAI();
  const response = await chat.call([...messages, new HumanChatMessage(text)]);

  return response;
}
