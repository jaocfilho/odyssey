import { ChatOpenAI } from 'langchain/chat_models/openai';
import { BaseChatMessage, HumanChatMessage } from 'langchain/schema';

import { ChatbotSettingsOptions } from '@/modules/chatbots/entities';

type ChatCompletionParams = {
  text: string;
  settings: ChatbotSettingsOptions;
  personaOptions?: BaseChatMessage[];
};

export async function chatCompletion({
  text,
  settings,
  personaOptions = [],
}: ChatCompletionParams) {
  const { model, temperature } = settings;

  const chat = new ChatOpenAI({
    modelName: model,
    temperature,
  });

  const response = await chat.call([
    ...personaOptions,
    new HumanChatMessage(text),
  ]);

  return response;
}
