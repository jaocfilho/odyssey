import { NextResponse, NextRequest } from 'next/server';

import { routeHandlerSelectChatbotById } from '@/modules/chatbots/api/route-handlers';
import { chatCompletion } from '@/modules/openai/api';

type ChatbotCompletionParams = {
  params: { id: string };
};

type ChatbotCompletionApiBodyParams = {
  text: string;
};

export async function POST(
  request: NextRequest,
  { params }: ChatbotCompletionParams
) {
  const { id } = params;
  const { text }: ChatbotCompletionApiBodyParams = await request.json();

  const chatbot = await routeHandlerSelectChatbotById({ id });

  try {
    const response = await chatCompletion({ text });

    console.log(chatbot.data);
  } catch (error) {
    console.error('derp');
  }

  return NextResponse.json('OK');
}
