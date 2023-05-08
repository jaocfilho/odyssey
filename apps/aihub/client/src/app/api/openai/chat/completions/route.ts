import { chatCompletions } from '@/modules/openai/api/chat-completion';

const payload = {
  model: 'gpt-3.5-turbo',
  vibe: 'funny',
  context: 'You are a helpfull assistant',
  prompt: 'Say hello world',
};

export async function GET() {
  const stream = await chatCompletions(payload);

  return new Response(stream);
}
