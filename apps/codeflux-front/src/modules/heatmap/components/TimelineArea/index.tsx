import { UIEvent } from 'react';

import { Flex } from 'milky-ui';

import { CellsArea } from '../CellsArea';
import { WorkspacesArea } from '../WorkspacesArea';

type TimelineAreaProps = {
  changeCalendarScroll: (newValue: number) => void;
};

export const TimelineArea = ({ changeCalendarScroll }: TimelineAreaProps) => {
  // typechecker helper
  const targetIsDivElement = (
    target: EventTarget
  ): target is HTMLDivElement => {
    return !!target;
  };

  const handleScroll = (event: UIEvent<HTMLDivElement>) => {
    const { target } = event;
    if (targetIsDivElement(target)) {
      changeCalendarScroll(target.scrollLeft);
    }
  };

  return (
    <Flex
      fullWidth
      fullHeight
      onScroll={handleScroll}
      css={{
        overflow: 'auto',
      }}
    >
      <WorkspacesArea />
      <CellsArea />
    </Flex>
  );
};
