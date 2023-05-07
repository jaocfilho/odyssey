import { chatCompletions } from '@/modules/openai/api';
import { type OpenAIStreamPayload } from '@/modules/openai/helpers';

const payload: OpenAIStreamPayload = {
  model: 'gpt-3.5-turbo',
  messages: [{ role: 'user', content: 'Say hello world' }],
  temperature: 0.7,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
  max_tokens: 200,
  stream: true,
  n: 1,
};

export async function GET() {
  const stream = await chatCompletions(payload);

  return new Response(stream);
}
