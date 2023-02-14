import type { NextApiRequest, NextApiResponse } from 'next';

import { Commit, getCommitService } from '../../../../modules/github';

type RequestBody = {
  owner: string;
  repo: string;
};

const isValidBody = (body: any): body is RequestBody => {
  const fields = ['owner', 'repo'];
  return Object.keys(body).every((key) => fields.includes(key));
};

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<Commit | null>
) {
  // TODO change url path
  const ref = request.query.ref as string;

  if (isValidBody(request.body)) {
    const { owner, repo } = request.body;

    const commit = await getCommitService({
      owner,
      repo,
      ref,
    });

    return response.status(200).json(commit);
  }

  return response.status(401);
}
