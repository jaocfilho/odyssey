'use client';

import { useEffect, useState } from 'react';

import { Flex, JsonView } from 'milky-ui';
import { getCommitService, listCommitsService } from '../../../modules/github';

export default function JsonPage() {
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      const response = await getCommitService();
      if (response.status === 200) {
        setData(response.data);
      }
    };

    getData();
  }, []);

  return (
    <Flex fullWidth>
      <JsonView value={data} />
    </Flex>
  );
}
