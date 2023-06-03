import { rest } from 'msw';

export const appsHandlers = [
  rest.post('/models', (request, response, context) => {
    const data = request.json();

    console.log(data);
  }),
];
