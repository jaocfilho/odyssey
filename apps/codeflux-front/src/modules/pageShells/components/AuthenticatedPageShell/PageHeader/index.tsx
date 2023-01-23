'use client';

import { Flex } from 'milky-ui';

import { Logo } from '../../../../../components/Logo';
import { ActionsArea } from '../ActionsArea';

export const PageHeader = () => {
  return (
    <Flex direction="column" boxBg px={6}>
      <Flex fullWidth justifyContent="space-between" my={2}>
        <Logo />
        <ActionsArea />
      </Flex>
    </Flex>
  );
};
