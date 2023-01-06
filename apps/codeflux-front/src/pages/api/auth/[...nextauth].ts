/* eslint-disable turbo/no-undeclared-env-vars */

import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const authOptions = {
  providers: [
    GithubProvider({
      // TODO properly configure turbo to recognize local app vars
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
};

export default NextAuth(authOptions);
