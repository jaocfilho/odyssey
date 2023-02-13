'use client';

import { useEffect, useState } from 'react';

import { Flex, JsonView } from 'milky-ui';
import {
  Commit,
  getCommitService,
  listCommitsService,
} from '../../../modules/github';

export default function JsonPage() {
  const [data, setData] = useState<Commit | null>(null);

  useEffect(() => {
    const getData = async () => {
      const commit = await getCommitService({
        owner: 'jaocfilho',
        repo: 'odyssey',
        ref: '72826d8b808637814be64cf8ba23f012bea293b7',
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
