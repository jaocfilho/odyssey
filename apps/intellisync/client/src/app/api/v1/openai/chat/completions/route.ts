import { NextResponse, NextRequest } from 'next/server';

import { type BaseChatMessage } from 'langchain/schema';

import { chatCompletion } from '@/modules/openai/api';

type ChatCompletionApiBodyParams = {
  text: string;
};

type ChatCompletionApiResponse = NextResponse<BaseChatMessage>;

export async function POST(
  request: NextRequest
): Promise<ChatCompletionApiResponse> {
  const { text }: ChatCompletionApiBodyParams = await request.json();
  const response = await chatCompletion({ text });

  return NextResponse.json(response);
}
