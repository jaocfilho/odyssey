'use client';

import { Flex, JsonView } from 'milky-ui';

import { useListCommits } from '../../../modules/github';

export default function JsonPage() {
  const { commits } = useListCommits();

  return (
    <Flex fullWidth>
      <JsonView value={commits} />
    </Flex>
  );
}
