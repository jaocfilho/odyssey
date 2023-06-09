const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_BASE_URL = 'https://api.openai.com/v1';
const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${OPENAI_API_KEY}`,
};

function openaiPath(path: string) {
  return `${OPENAI_BASE_URL}${path}` as const;
}

export async function fetchOpenai(
  input: string,
  init?: RequestInit | undefined
) {
  const url = openaiPath(input);

  return await fetch(url, {
    headers,
    ...init,
  });
}
