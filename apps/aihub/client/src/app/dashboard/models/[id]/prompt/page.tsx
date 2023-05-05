'use client';

async function testStream() {
  const decoder = new TextDecoder();

  const response = await fetch(
    'http://localhost:3000/api/openai/chat/completion'
  );

  for await (const chunk of response.body) {
    // Do something with each chunk
    // Here we just accumulate the size of the response.
    console.log(decoder.decode(chunk));
  }
}

export default function ModelDetailsPrompt() {
  return <button onClick={() => testStream()}>prompt</button>;
}
