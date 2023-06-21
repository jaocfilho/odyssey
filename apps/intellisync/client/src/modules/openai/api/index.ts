import { ChatOpenAI } from 'langchain/chat_models/openai';
import { HumanChatMessage } from 'langchain/schema';

import { RouteHandlerGetChatbotConfigReturnData } from '@/modules/chatbots/api/route-handlers';
import { ModelTypes } from '@/modules/chatbots/entities';
import {
  PersonaPromptMessages,
  createPersonaChatMessages,
} from '@/modules/personas/helpers';

type ChatSettings = {
  model: ModelTypes;
  temperature: number;
};

type ChatPersona = PersonaPromptMessages;

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
