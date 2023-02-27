import { dayjs } from '../../lib';

/**
 * Returns an array of Day.js objects, going from today - `startDateOffset` to today + `endDateOffset`.
 *
 * @param startDateOffset The number of days to go back from today's date.
 * @param endDateOffset The number of days to go forward from today's date.
 * @returns An array of Day.js objects with the `toObject` format.
 */
export const getDates = (startDateOffset: number, endDateOffset: number) => {
  const today = dayjs();
  const start = today.subtract(startDateOffset, 'day');
  const end = today.add(endDateOffset, 'day');

  const dates: dayjs.Dayjs[] = [];

  let dateIterator = start;
  while (dateIterator.isBefore(end, 'day')) {
    dates.push(dateIterator);
    dateIterator = dateIterator.add(1, 'day');
  }

  return dates;
};
