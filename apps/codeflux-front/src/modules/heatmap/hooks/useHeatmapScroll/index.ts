import { useScroll } from '@satellite/react-hooks';

export const useHeatmapScroll = () => {
  const {
    scroll: calendarScroll,
    changeScrollLeftPosition: changeCalendarScroll,
  } = useScroll<HTMLDivElement>();

  const {
    scroll: workspacesScroll,
    changeScrollLeftPosition: changeWorkspacesScroll,
  } = useScroll<HTMLDivElement>();

  return {
    calendarScroll,
    changeCalendarScroll,
    workspacesScroll,
    changeWorkspacesScroll,
  };
};
