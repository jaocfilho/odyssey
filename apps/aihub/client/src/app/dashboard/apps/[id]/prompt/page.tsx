'use client';

async function testStream() {
  const decoder = new TextDecoder();

  const response = await fetch(
    'http://localhost:3000/api/openai/chat/completions'
  );

  for await (const chunk of response.body as any) {
    // Do something with each chunk
    // Here we just accumulate the size of the response.
    console.log(decoder.decode(chunk));
  }
}

export default function AppDetailsPrompt() {
  return <button onClick={() => testStream()}>prompt</button>;
}
