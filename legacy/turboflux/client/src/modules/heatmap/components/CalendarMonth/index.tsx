import { Text } from 'milky-ui';

type CalendarMonthProps = {
  month: string;
};

export const CalendarMonth = ({ month }: CalendarMonthProps) => {
  return <Text variant="h5">{month}</Text>;
};
