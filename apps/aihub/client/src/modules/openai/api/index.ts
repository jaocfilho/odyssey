import { RouteHandlerGetChatbotConfigReturnData } from '@/modules/chatbots/api/route-handlers';
import {
  PersonaPromptsMessages,
  createPersonaChatMessages,
} from '@/modules/personas/helpers';
import { ChatOpenAI } from 'langchain/chat_models/openai';
import { HumanChatMessage } from 'langchain/schema';

type ChatCompletionParams = {
  text: string;
  config: RouteHandlerGetChatbotConfigReturnData;
};

export async function chatCompletion({ text, config }: ChatCompletionParams) {
  const { persona, settings } = config;

  const messages = await createPersonaChatMessages(persona);

  const chat = new ChatOpenAI();
  const response = await chat.call([...messages, new HumanChatMessage(text)]);

  return response;
}
