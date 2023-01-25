'use client';

import { Flex } from 'milky-ui';

import { Logo } from '../../../../../components/Logo';
import { ActionsArea } from '../ActionsArea';

export const PageHeader = () => {
  return (
    <Flex direction="column" px={6} bb={1} bbColor="$gray6" bbStyle="solid">
      <Flex fullWidth justifyContent="space-between" my={2}>
        <Logo />
        <ActionsArea />
      </Flex>
    </Flex>
  );
};
