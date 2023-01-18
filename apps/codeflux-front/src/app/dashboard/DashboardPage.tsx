'use client';

import { Flex } from 'milky-ui';

import { Heatmap } from '../../modules/heatmap';

export default function DashboardPage() {
  return (
    <Flex fullWidth>
      <Heatmap />
    </Flex>
  );
}
