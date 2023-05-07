import { openaiReadableStream } from '../helpers';

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

const OPENAI_BASE_URL = 'https://api.openai.com/v1';

function getHeaders() {
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY ?? ''}`,
  };
}

export async function fetchChatCompletions(payload: OpenAIStreamPayload) {
  const headers = getHeaders();
  const url = `${OPENAI_BASE_URL}/chat/completions`;

  const response = await fetch(url, {
    headers,
    method: 'POST',
    body: JSON.stringify(payload),
  });

  return response;
}

export async function chatCompletions(payload: OpenAIStreamPayload) {
  const response = await fetchChatCompletions(payload);
  const stream = await openaiReadableStream(response);

  return stream;
}
