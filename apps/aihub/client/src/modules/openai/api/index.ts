import { fetchOpenai } from '../client';
import { chatCompletionsStream } from '../helpers';

export type ChatGPTAgent = 'user' | 'system';

export interface ChatGPTMessage {
  role: ChatGPTAgent;
  content: string;
}

export interface OpenAIStreamPayload {
  model: string;
  messages: ChatGPTMessage[];
  temperature: number;
  top_p: number;
  frequency_penalty: number;
  presence_penalty: number;
  max_tokens: number;
  stream: boolean;
  n: number;
}

export async function fetchChatCompletions(payload: OpenAIStreamPayload) {
  return await fetchOpenai('/chat/completions', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export async function chatCompletions(payload: OpenAIStreamPayload) {
  const response = await fetchChatCompletions(payload);
  const stream = await chatCompletionsStream(response);

  return stream;
}
