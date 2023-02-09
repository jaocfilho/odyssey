import { useNumberState } from '@satellite/react-hooks';

export const useHeatmapColumns = () => {
  const { number: columns, changeNumber: updateColumns } = useNumberState({
    initialValue: 30,
  });

  return { columns, updateColumns };
};
