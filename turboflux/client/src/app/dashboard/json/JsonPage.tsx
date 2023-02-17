'use client';

import { Flex, JsonView } from 'milky-ui';

import { useGetCommit } from '../../../modules/github';

export default function JsonPage() {
  const { commit } = useGetCommit();

  return (
    <Flex fullWidth>
      <JsonView value={commit} />
    </Flex>
  );
}
