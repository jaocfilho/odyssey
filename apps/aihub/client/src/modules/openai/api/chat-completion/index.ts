import {
  createParser,
  ParsedEvent,
  ReconnectInterval,
} from 'eventsource-parser';

import { fetchOpenai } from '../../client';

export type ChatGPTAgent = 'user' | 'system';

export interface ChatGPTMessage {
  role: ChatGPTAgent;
  content: string;
}

export interface OpenAIStreamPayload {
  model: string;
  messages: ChatGPTMessage[];
  stream: boolean;
}

function eventSourceParserCallback(
  event: ParsedEvent | ReconnectInterval,
  controller: ReadableStreamDefaultController<any>
) {
  const encoder = new TextEncoder();

  let counter = 0;

  if (event.type === 'event') {
    const data = event.data;
    // https://beta.openai.com/docs/api-reference/completions/create#completions/create-stream
    if (data === '[DONE]') {
      controller.close();
      return;
    }

    try {
      const json = JSON.parse(data);
      const text = json.choices[0].delta?.content || '';
      if (counter < 2 && (text.match(/\n/) || []).length) {
        // this is a prefix character (i.e., "\n\n"), do nothing
        return;
      }

      const queue = encoder.encode(text);
      controller.enqueue(queue);
      counter++;
    } catch (e) {
      // maybe parse error
      controller.error(e);
    }
  }
}

function chatCompletionParser(
  controller: ReadableStreamDefaultController<any>
) {
  // stream response (SSE) from OpenAI may be fragmented into multiple chunks
  // this ensures we properly read chunks and invoke an event for each SSE event stream
  const parser = createParser((event) =>
    eventSourceParserCallback(event, controller)
  );

  return parser;
}

export async function chatCompletionsStream(response: Response) {
  const stream = new ReadableStream({
    start: async (controller) => {
      const decoder = new TextDecoder();

      const parser = chatCompletionParser(controller);
      // https://web.dev/streams/#asynchronous-iteration
      for await (const chunk of response.body as any) {
        parser.feed(decoder.decode(chunk));
      }
    },
  });

  return stream;
}

async function fetchChatCompletions(payload: OpenAIStreamPayload) {
  return await fetchOpenai('/chat/completions', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

function handleContext(context: string): ChatGPTMessage {
  return { role: 'system', content: context };
}

function handleVibe(vibe: string): ChatGPTMessage {
  return {
    role: 'system',
    content: `Make sure that your answers feels like ${vibe}`,
  };
}

function handlePrompt(prompt: string): ChatGPTMessage {
  return { role: 'user', content: prompt };
}

type HandleMessagesParams = {
  context: string;
  vibe: string;
  prompt: string;
};

function handleMessages({
  context,
  vibe,
  prompt,
}: HandleMessagesParams): ChatGPTMessage[] {
  const contextMessage = handleContext(context);
  const vibeMessage = handleVibe(vibe);
  const promptMessage = handlePrompt(prompt);

  return [contextMessage, vibeMessage, promptMessage];
}

export type ChatCompletionsParams = {
  model: string;
  vibe: string;
  context: string;
  prompt: string;
};

function handlePayload(data: ChatCompletionsParams): OpenAIStreamPayload {
  const { context, vibe, prompt, model } = data;

  const messages = handleMessages({ context, vibe, prompt });

  return {
    model,
    messages,
    stream: true,
  };
}

export async function chatCompletions(data: ChatCompletionsParams) {
  const payload = handlePayload(data);

  const response = await fetchChatCompletions(payload);
  const stream = await chatCompletionsStream(response);

  return stream;
}
