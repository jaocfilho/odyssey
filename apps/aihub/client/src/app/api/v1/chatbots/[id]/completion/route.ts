import { NextResponse, NextRequest } from 'next/server';

import { routeHandlerGetChatbotSettings } from '@/modules/chatbots/api/route-handlers';
import { chatCompletion } from '@/modules/openai/api';
import { noApiKeyFoundResponse } from '@/modules/api-keys/helpers';

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
  const apikey = request.headers.get('apikey');
  if (!apikey) {
    return noApiKeyFoundResponse();
  }

  const { id } = params;

  const chatbotSettings = await routeHandlerGetChatbotSettings({
    apikey,
    chatbot_id: id,
  });

  const { text }: ChatbotCompletionApiBodyParams = await request.json();
  const response = await chatCompletion({ text });

  return NextResponse.json(response);
}
