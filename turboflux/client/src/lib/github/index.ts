import { Github } from '@orbital/github';

export const github = new Github({
  auth: process.env.NEXT_PUBLIC_PERSONAL_ACCESS_TOKEN,
});
