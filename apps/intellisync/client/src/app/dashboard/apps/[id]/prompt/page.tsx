'use client';

async function testStream() {
  const response = await fetch(
    'http://localhost:3000/api/openai/chat/completions',
    { method: 'POST', body: JSON.stringify({ text: 'Say hello world' }) }
  );

  console.log(response);
}

export default function AppDetailsPrompt() {
  return <button onClick={() => testStream()}>prompt</button>;
}
