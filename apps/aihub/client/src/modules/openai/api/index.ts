import { ChatOpenAI } from 'langchain/chat_models/openai';
import { HumanChatMessage } from 'langchain/schema';

type ChatCompletionParams = {
  text: string;
};

export async function chatCompletion({ text }: ChatCompletionParams) {
  const chat = new ChatOpenAI();
  const response = await chat.call([new HumanChatMessage(text)]);

  return response;
}
