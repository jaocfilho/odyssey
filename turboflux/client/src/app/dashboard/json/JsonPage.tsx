'use client';

import { useEffect, useState } from 'react';

import { Flex, JsonView } from 'milky-ui';
import { Commit } from '@orbital/github';

import { github } from '../../../lib/github';

export default function JsonPage() {
  const [data, setData] = useState<Commit | null>(null);

  useEffect(() => {
    const getData = async () => {
      const ref = '72826d8b808637814be64cf8ba23f012bea293b7';
      const owner = 'jaocfilho';
      const repo = 'odyssey';

      const commit = await github.repositories.getCommit({
        owner,
        repo,
        ref,
      });

      setData(commit);
    };

    getData();
  }, []);

  return (
    <Flex fullWidth>
      <JsonView value={data} />
    </Flex>
  );
}
