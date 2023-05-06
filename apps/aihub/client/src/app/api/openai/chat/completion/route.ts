import { chatCompletions } from '@/modules/openai/api';
import {
  OpenAIStreamPayload,
  openaiReadableStream,
} from '@/modules/openai/helpers';
import { NextRequest, NextResponse } from 'next/server';

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
  const response = await chatCompletions(payload);
  const stream = await openaiReadableStream(response);

  return new Response(stream);
}
