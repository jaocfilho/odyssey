import { createRandomHeatmapColumns } from '../../entities';

export const useHeatmapColumns = () => {
  const columns = createRandomHeatmapColumns({ type: 'progress' });

  return { columns };
};
