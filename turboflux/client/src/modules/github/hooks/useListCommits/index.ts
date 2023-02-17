import { useEffect, useState } from 'react';

import { Commits } from '@orbital/github';

import { github } from '../../../../lib/github';

export const useListCommits = () => {
  const [commits, setCommits] = useState<Commits | null>(null);

  useEffect(() => {
    const getData = async () => {
      const owner = 'jaocfilho';
      const repo = 'odyssey';

      const newCommits = await github.repositories.listCommits({
        owner,
        repo,
      });

      setCommits(newCommits);
    };

    getData();
  }, []);

  return { commits };
};
