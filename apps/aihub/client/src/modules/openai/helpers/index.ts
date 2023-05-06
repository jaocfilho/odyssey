import {
  createParser,
  ParsedEvent,
  ReconnectInterval,
} from 'eventsource-parser';

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

export async function openaiReadableStream(response: Response) {
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
