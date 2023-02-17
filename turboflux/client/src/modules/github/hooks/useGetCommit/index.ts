import { useEffect, useState } from 'react';

import { Commit } from '@orbital/github';

import { github } from '../../../../lib/github';

export const useGetCommit = () => {
  // TODO add react-query
  const [commit, setCommit] = useState<Commit | null>(null);

  useEffect(() => {
    const getData = async () => {
      const ref = '72826d8b808637814be64cf8ba23f012bea293b7';
      const owner = 'jaocfilho';
      const repo = 'odyssey';

      const newCommit = await github.repositories.getCommit({
        owner,
        repo,
        ref,
      });

      setCommit(newCommit);
    };

    getData();
  }, []);

  return { commit };
};
